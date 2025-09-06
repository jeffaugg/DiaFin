import { Button, Divider, Input } from "antd";
import { Content } from "../../components/Content";


const despesas_fixas = [
    {
        nome: 'Aluguel',
        valor: 1200.00
    },
    {
        nome: 'Internet',
        valor: 100.00
    },
    {
        nome: 'Energia',
        valor: 300.00
    },
    {
        nome: 'Água',
        valor: 150.00
    }
]

const receitas_fixas = [
    {
        nome: 'Salário',
        valor: 5000.00
    },
    {
        nome: 'Freelance',
        valor: 2000.00
    },
    {
        nome: 'Investimentos',
        valor: 1500.00
    }
]

export function Budget() {
    return (
        <Content>
            <h1 className="text-lg font-bold">Configuração de Orçamento</h1>
            <h2 className="mt-7 text-base font-bold">
                Receitas Fixas
            </h2>
            <div className="bg-gray-50 p-4 rounded-xl mt-7">
                <div className="flex flex-col gap-4 p-4">
                    {despesas_fixas.map((despesa) => (
                        <div key={despesa.nome} className="flex justify-between">
                            <span>{despesa.nome}</span>
                            <span>R$ {despesa.valor.toFixed(2)}</span>
                        </div>
                    ))}
                    <Divider className="!m-0 !p-0" />
                    <div className="flex justify-between">
                        <span>Total</span>
                        <span>R$ {despesas_fixas.reduce((acc, despesa) => acc + despesa.valor, 0).toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <h2 className="mt-7 text-base font-bold">
                Despesas Fixas
            </h2>
            <div className="bg-gray-50 mt-7 p-4 rounded-xl">
                <div className="flex flex-col gap-4 p-4">
                    {receitas_fixas.map((receita) => (
                        <div key={receita.nome} className="flex justify-between">
                            <span>{receita.nome}</span>
                            <span>R$ {receita.valor.toFixed(2)}</span>
                        </div>
                    ))}
                    <Divider className="!m-0 !p-0" />
                    <div className="flex justify-between">
                        <span>Total</span>
                        <span>R$ {1000}</span>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="mt-7 text-base font-bold">
                Configurações de Poupança
                </h2>
                <p>Percentual para Poupança</p>
                <Input type="number" style={{ width: 100 }} />
                <span className="ml-2">
                    %
                </span>
                <p>
                    Valor mensal para poupança: R$ 550,00
                </p>
            </div>

            <h2 className="mt-7 text-base font-bold">
                Resumo do Orçamento
            </h2>
            <div className="bg-blue-50 p-4 rounded-xl mt-7">
                <div className="flex flex-col gap-4 p-4">
                    <div className="flex justify-between">
                            <span>{'Total de Receitas Fixas'}</span>
                            <span>R$ {receitas_fixas.reduce((acc, receita) => acc + receita.valor, 0).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                            <span>{'Total de Despesas Fixas'}</span>
                            <span>R$ {despesas_fixas.reduce((acc, despesa) => acc + despesa.valor, 0).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                            <span>{'Valor da Poupança'}</span>
                            <span>R$ {despesas_fixas.reduce((acc, despesa) => acc + despesa.valor, 0).toFixed(2)}</span>
                    </div>
                    <Divider className="!m-0 !p-0" />
                    <div className="flex justify-between">
                        <span>Orçamento Disponível para Despesas Variáveis</span>
                        <span>R$ {despesas_fixas.reduce((acc, despesa) => acc + despesa.valor, 0).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <small>Orçamento Diário</small>
                        <small>R$ {despesas_fixas.reduce((acc, despesa) => acc + despesa.valor, 0).toFixed(2)}</small>
                    </div>
                </div>
            </div>
            <Button
					className="mt-2 h-[52px]"
					size="large"
					htmlType="submit"
                    type="primary"
                    style={{ width: "100%" }}
				>
					Salvar Receita
			</Button>
        </Content>
    );
}
