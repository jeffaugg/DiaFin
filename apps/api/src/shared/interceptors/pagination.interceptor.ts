import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { map, Observable } from 'rxjs';
import { PAGINATE_KEY } from '../decorators/isPaginated';
import { Request } from 'express';

interface PaginateResult<T> {
  items: T[];
  total: number;
}

export class PaginateInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const paginateEnabled = this.reflector.getAllAndOverride<boolean>(
      PAGINATE_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!paginateEnabled) {
      return next.handle();
    }

    return next.handle().pipe(
      map((result: PaginateResult<unknown>[]) => {
        const req: Request = context.switchToHttp().getRequest();
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;

        let items: any[] = [];
        let total = 0;

        if (Array.isArray(result)) {
          total = result.length ? Number(result[0].total ?? 0) : 0;
          items = result.map((row) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { total: _drop, ...r } = row;
            return r;
          });
        } else {
          const res = result as PaginateResult<unknown>;
          items = Array.isArray(res.items) ? res.items : [];
          total = typeof res.total === 'number' ? res.total : 0;
          items = items.map((row: Record<string, unknown>) => {
            if (row && typeof row === 'object' && 'total' in row) {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { total, ...rest } = row;
              return rest;
            }
            return row;
          });
        }

        const meta = {
          totalItems: total,
          itemCount: items.length,
          itemsPerPage: limit,
          totalPages: Math.ceil(total / limit),
          currentPage: page,
        };

        return { data: items, meta };
      }),
    );
  }
}
