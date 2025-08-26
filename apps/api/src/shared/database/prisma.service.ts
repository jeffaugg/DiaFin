import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import { DB } from 'src/db/types';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  public db: Kysely<DB>;

  onModuleInit() {
    const databaseUrl = process.env.DATABASE_URL;
    console.log('Connecting to database:', databaseUrl);
    this.db = new Kysely<DB>({
      dialect: new PostgresDialect({
        pool: new Pool({
          connectionString: process.env.DATABASE_URL,
        }),
      }),
    });
  }

  async onModuleDestroy() {
    await this.db.destroy();
  }
}
