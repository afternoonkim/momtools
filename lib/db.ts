import { PrismaPg } from "@prisma/adapter-pg";
import { Prisma, PrismaClient } from "./generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL ?? process.env.DIRECT_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL 또는 DIRECT_URL 환경변수가 필요합니다.");
  }

  const adapter = new PrismaPg({ connectionString });
  const log: Prisma.LogLevel[] =
    process.env.PRISMA_QUERY_LOG === "true"
      ? ["query", "error", "warn"]
      : ["error", "warn"];

  return new PrismaClient({
    adapter,
    log,
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
