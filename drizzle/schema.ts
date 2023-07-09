import {
  mysqlTable,
  int,
  varchar,
  datetime,
  uniqueIndex,
  double,
  tinyint,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const category = mysqlTable("Category", {
  id: int("id").autoincrement().primaryKey().notNull(),
  name: varchar("name", { length: 191 }).notNull(),
  createdAt: datetime("createdAt", { mode: "string", fsp: 3 })
    .default(sql`(CURRENT_TIMESTAMP(3))`)
    .notNull(),
  updatedAt: datetime("updatedAt", { mode: "string", fsp: 3 }).notNull(),
  companyId: int("companyId"),
});

export const company = mysqlTable(
  "Company",
  {
    id: int("id").autoincrement().primaryKey().notNull(),
    cnpj: varchar("cnpj", { length: 191 }).notNull(),
    nickname: varchar("nickname", { length: 191 }).notNull(),
    name: varchar("name", { length: 191 }).notNull(),
    initialDeposit: double("initialDeposit").notNull(),
    address: varchar("address", { length: 191 }),
    createdAt: datetime("createdAt", { mode: "string", fsp: 3 })
      .default(sql`(CURRENT_TIMESTAMP(3))`)
      .notNull(),
    updatedAt: datetime("updatedAt", { mode: "string", fsp: 3 }).notNull(),
  },
  (table) => {
    return {
      cnpjKey: uniqueIndex("Company_cnpj_key").on(table.cnpj),
    };
  }
);

export const expense = mysqlTable("Expense", {
  id: int("id").autoincrement().primaryKey().notNull(),
  description: varchar("description", { length: 191 }).notNull(),
  companyId: int("companyId").notNull(),
  categoryId: int("categoryId").notNull(),
  userId: int("userId").notNull(),
  transactionDate: datetime("transactionDate", {
    mode: "string",
    fsp: 3,
  }).notNull(),
  recurring: tinyint("recurring").notNull(),
  recurringInterval: varchar("recurringInterval", { length: 191 }),
  amount: double("amount").notNull(),
  createdAt: datetime("createdAt", { mode: "string", fsp: 3 })
    .default(sql`(CURRENT_TIMESTAMP(3))`)
    .notNull(),
  updatedAt: datetime("updatedAt", { mode: "string", fsp: 3 }).notNull(),
});

export const revenue = mysqlTable("Revenue", {
  id: int("id").autoincrement().primaryKey().notNull(),
  companyId: int("companyId").notNull(),
  userId: int("userId").notNull(),
  recordedDate: datetime("recordedDate", { mode: "string", fsp: 3 })
    .default(sql`(CURRENT_TIMESTAMP(3))`)
    .notNull(),
  transactionDate: datetime("transactionDate", {
    mode: "string",
    fsp: 3,
  }).notNull(),
  cash: double("cash").notNull(),
  credit: double("credit").notNull(),
  debit: double("debit").notNull(),
  pix: double("pix").notNull(),
  meal: double("meal").notNull(),
  createdAt: datetime("createdAt", { mode: "string", fsp: 3 })
    .default(sql`(CURRENT_TIMESTAMP(3))`)
    .notNull(),
  updatedAt: datetime("updatedAt", { mode: "string", fsp: 3 }).notNull(),
  total: double("total").notNull(),
  tip: double("tip").notNull(),
});

export const user = mysqlTable(
  "User",
  {
    id: int("id").autoincrement().primaryKey().notNull(),
    companyId: int("companyId").notNull(),
    role: varchar("role", { length: 191 }).notNull(),
    name: varchar("name", { length: 191 }).notNull(),
    email: varchar("email", { length: 191 }).notNull(),
    hash: varchar("hash", { length: 191 }).notNull(),
    createdAt: datetime("createdAt", { mode: "string", fsp: 3 })
      .default(sql`(CURRENT_TIMESTAMP(3))`)
      .notNull(),
    updatedAt: datetime("updatedAt", { mode: "string", fsp: 3 }).notNull(),
  },
  (table) => {
    return {
      emailKey: uniqueIndex("User_email_key").on(table.email),
    };
  }
);
