import { Button, Form, Input } from "antd";
import { Content } from "../../components/Content";
import { useState } from "react";

const { TextArea } = Input;

export function Expense (){    
    const [ formType, setFormType] = useState("fixed");

    const toggleFormType = () => {
        setFormType((prev) => (prev === "fixed" ? "variable" : "fixed"));
    };

    return (
        <Content>
            <h1 className="text-lg font-semibold mb-6">
                Cadastrar Despesa
            </h1>
                <div className="flex flex-col sm:flex-row gap-2 mb-4">
                    <Button
                    type={formType === "fixed" ? "primary" : "default"}
                    onClick={toggleFormType}
				>
					Despesa Fixa
				</Button>
                <Button
                    type={formType === "fixed" ? "default" : "primary"}
                    onClick={toggleFormType}
                >
					Despesa Variável
				</Button> 
                </div>
            <Form
                layout="vertical"
            >
                <Form.Item
                    label={<span>Descrição</span>}
                >
                    <Input placeholder="Descrição" />
                </Form.Item>
                <Form.Item
                    label={<span>Valor (R$)</span>}
                >
                    <Input placeholder="0,00" />
                </Form.Item>
                <Form.Item
                    label={<span>Data de recebimento</span>}
                >
                    <Input placeholder="mm/dd/yyyy" />
                </Form.Item>
                <Form.Item
                    label={<span>Categoria</span>}
                >
                    <Input placeholder="Categoria" />
                </Form.Item>
                <Form.Item
                    label={<span>Observações</span>}
                >
                    <TextArea placeholder="Observações" showCount maxLength={254} style={{ resize: "none" }} />
                </Form.Item>
                <Button
					className="mt-2 h-[52px]"
					size="large"
					htmlType="submit"
                    type="primary"
                    style={{ width: "100%" }}
				>
					Salvar Receita
				</Button>
            </Form>
        </Content>
    );
}
