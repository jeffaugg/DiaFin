import { Content } from "../../../../components/Content";

export function CurrentBalance() {
  return (
    <Content>
        <h1 className="text-lg font-semibold mb-2">
            Saldo Atual
        </h1>
        <div className="text-2xl font-bold mb-4 text-blue-500">
            R$ 2.435,50
        </div>
        <div className="flex gap-4">
            <div className="flex flex-col w-full">
                <p className="text-gray-400 text-xs"
                >Receitas</p>
                <h2 className="text-green-500 font-semibold text-lg">
                    R$ 4.300,00
                </h2>
            </div>
            <div className="flex flex-col w-full">
                <p className="text-gray-400 text-xs">
                    Despesas
                </p>
                <h2 className="text-red-500 font-semibold text-lg">
                    R$ 4.300,00
                </h2>
            </div>
        </div>
    </Content>
  );
}
