import { CurrentBalance } from "./components/currentBalance";
import { DailyBudget } from "./components/dailyBudget";
import { DistributionExpense } from "./components/distributionExpense";
import { TransactionHistory } from "./components/transactionHistory";

export function Dashboard() {
  return (
    <div className="h-full w-full flex flex-col gap-6">
      <div className="flex gap-6 lg:flex-row flex-col">
            <CurrentBalance />
            <DailyBudget />
      </div>
      <DistributionExpense />
      <TransactionHistory />
    </div>
  );
}
