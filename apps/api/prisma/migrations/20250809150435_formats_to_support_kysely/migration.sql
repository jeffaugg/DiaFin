-- AlterTable
ALTER TABLE "public"."BudgetSetting" ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."Category" ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."FixedTransaction" ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."Month" ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."Transaction" ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP;
