import { Content } from "../../../../components/Content";
import { Table, type TableProps } from 'antd';

export function TransactionHistory() {
    const transactions = [
    {
      id: 1,
      description: 'Salário',
      amount: 3500,
      type: 'income',
      category: 'Fixo',
      date: '2023-05-01',
    },
    {
      id: 2,
      description: 'Aluguel',
      amount: -1200,
      type: 'expense',
      category: 'Moradia',
      date: '2023-05-05',
    },
    {
      id: 3,
      description: 'Supermercado',
      amount: -450,
      type: 'expense',
      category: 'Alimentação',
      date: '2023-05-10',
    },
    {
      id: 4,
      description: 'Freela',
      amount: 800,
      type: 'income',
      category: 'Dinâmico',
      date: '2023-05-15',
    },
    {
      id: 5,
      description: 'Internet',
      amount: -120,
      type: 'expense',
      category: 'Fixo',
      date: '2023-05-20',
    },
    {
      id: 6,
      description: 'Restaurante',
      amount: -85,
      type: 'expense',
      category: 'Alimentação',
      date: '2023-05-22',
    },
    {
      id: 7,
      description: 'Uber',
      amount: -30,
      type: 'expense',
      category: 'Transporte',
      date: '2023-05-23',
    },
    {
      id: 8,
      description: 'Farmácia',
      amount: -65,
      type: 'expense',
      category: 'Saúde',
      date: '2023-05-25',
    },
  ]

  const columns: TableProps['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Descrição',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Valor',
      dataIndex: 'amount',
      key: 'amount',
      render: (value) => `R$ ${value.toFixed(2)}`,
    },
    {
      title: 'Tipo',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Data',
      dataIndex: 'date',
      key: 'date',
    },
  ]

    return (
        <Content>
            <h1>
                Histórico de Transações
            </h1>
           <Table columns={columns} dataSource={transactions} />
        </Content>
    )
}