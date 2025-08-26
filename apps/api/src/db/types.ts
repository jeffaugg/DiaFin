import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export const TxType = {
    INCOME: "INCOME",
    EXPENSE: "EXPENSE"
} as const;
export type TxType = (typeof TxType)[keyof typeof TxType];
export type BudgetSetting = {
    id: Generated<string>;
    userId: string;
    savingPercentage: number;
    created_at: Generated<Timestamp>;
    updated_at: Generated<Timestamp>;
    deleted_at: Timestamp | null;
};
export type Category = {
    id: Generated<string>;
    userId: string;
    name: string;
    created_at: Generated<Timestamp>;
    updated_at: Generated<Timestamp>;
    deleted_at: Timestamp | null;
};
export type FixedTransaction = {
    id: Generated<string>;
    userId: string;
    categoryId: string;
    type: TxType;
    amount: number;
    description: string | null;
    created_at: Generated<Timestamp>;
    updated_at: Generated<Timestamp>;
    deleted_at: Timestamp | null;
};
export type Month = {
    id: Generated<string>;
    userId: string;
    monthStart: Timestamp;
    startBalance: number;
    created_at: Generated<Timestamp>;
    updated_at: Generated<Timestamp>;
    deleted_at: Timestamp | null;
};
export type Transaction = {
    id: Generated<string>;
    userId: string;
    categoryId: string;
    type: TxType;
    amount: number;
    description: string | null;
    occurredAt: Timestamp;
    created_at: Generated<Timestamp>;
    updated_at: Generated<Timestamp>;
    deleted_at: Timestamp | null;
};
export type User = {
    id: Generated<string>;
    name: string;
    email: string;
    password: string;
    created_at: Generated<Timestamp>;
    updated_at: Generated<Timestamp>;
    deleted_at: Timestamp | null;
};
export type DB = {
    BudgetSetting: BudgetSetting;
    Category: Category;
    FixedTransaction: FixedTransaction;
    Month: Month;
    Transaction: Transaction;
    User: User;
};
