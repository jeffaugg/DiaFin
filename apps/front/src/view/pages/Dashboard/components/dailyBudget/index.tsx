import { Progress } from "antd";
import { Content } from "../../../../components/Content";

export function DailyBudget(){
    return (
        <Content>
            <h1 className="text-lg font-semibold mb-2">
                Orçamento Diário 
            </h1>
            <div className="flex gap-2 mb-4 items-center">
                <h2 className="text-2xl font-bold text-blue-500">
                    R$ 105,50
                </h2>
                <span className="text-gray-500 text-xs">
                    disponível hoje
                </span>
            </div>
            <div className="mb-4">
                <div className="flex justify-between">
                    <p>
                        Progresso do mês
                    </p>
                    60%
                </div>
                <Progress percent={60} showInfo={false} />
            </div>
            <div>
                <div className="flex justify-between">
                    <p>
                        Progresso do mês
                    </p>
                    60%
                </div>
                <Progress percent={55} strokeColor="green" showInfo={false} />
            </div>
        </Content>
    )
}