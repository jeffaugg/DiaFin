import { Content } from "../../../../components/Content";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts'
import React from "react";


const data = [
    {
      name: 'Moradia',
      value: 1200,
      color: '#3b82f6',
    },
    {
      name: 'Alimentação',
      value: 800,
      color: '#10b981',
    },
    {
      name: 'Transporte',
      value: 500,
      color: '#f59e0b',
    },
    {
      name: 'Lazer',
      value: 300,
      color: '#8b5cf6',
    },
    {
      name: 'Saúde',
      value: 400,
      color: '#ef4444',
    },
    {
      name: 'Outros',
      value: 200,
      color: '#6b7280',
    },
  ]

export function DistributionExpense() {
    return (
        <Content>
            <h1 className="text-lg font-semibold mb-2">
                Distribuição de Despesas
            </h1>
            <div className="h-60">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie 
                            data={data} 
                            cx="50%" cy="50%" 
                            outerRadius={80} fill="#8884d8" 
                            labelLine={false}
                            dataKey="value"
                            label={({ name, percent }: { name: string; percent: number }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value) => `R$ ${value}`} />
                        {React.createElement(Legend as any, {
                            layout: "horizontal",
                            verticalAlign: "bottom",
                            align: "center"
                        })}
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </Content>
    )
}