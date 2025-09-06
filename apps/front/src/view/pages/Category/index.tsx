import { Button, ColorPicker, Form, Input, List, Skeleton } from "antd";
import { Content } from "../../components/Content";
import { useEffect, useState } from "react";
import { DeleteFilled, EditOutlined } from '@ant-design/icons';
import toast from 'react-hot-toast';
import VirtualList from 'rc-virtual-list';


interface DataType {
  gender?: string;
  name?: string;
  email?: string;
  avatar?: string;
  loading: boolean;
}

interface UserItem {
  email: string;
  gender: string;
  name: string;
  avatar: string;
}


const PAGE_SIZE = 3;

export function Category() {
    const [ formType, setFormType] = useState("fixed");
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<UserItem[]>([]);
    const [list, setList] = useState<UserItem[]>([]);
    const [page, setPage] = useState(1);


    const CONTAINER_HEIGHT = 400;
    const PAGE_SIZE = 20;


    const fetchData = (currentPage: number) => {
    const fakeDataUrl = `https://660d2bd96ddfa2943b33731c.mockapi.io/api/users?page=${currentPage}&limit=${PAGE_SIZE}`;
    return fetch(fakeDataUrl).then((res) => res.json());
  };
    
    const toggleFormType = () => {
        setFormType((prev) => (prev === "fixed" ? "variable" : "fixed"));
    };

    useEffect(() => {
    fetchData(page).then((res) => {
      const results = Array.isArray(res) ? res : [];
      setInitLoading(false);
      setData(results);
      setList(results);
    });
  }, []);

    const appendData = (showMessage = true) => {
        const fakeDataUrl = `https://660d2bd96ddfa2943b33731c.mockapi.io/api/users/?page=${page}&limit=${PAGE_SIZE}`;
        fetch(fakeDataUrl)
        .then((res) => res.json())
        .then((body) => {
            const results = Array.isArray(body) ? body : [];
            setData(data.concat(results));
            setPage(page + 1);
            showMessage && toast.success(`${results.length} mais itens carregados!`);
        });
    }

        useEffect(() => {
        appendData(false);
    }, []);

    const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
        // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
        if (
        Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - CONTAINER_HEIGHT) <= 1
        ) {
        appendData();
        }
    };




    
    return (
        <Content>
            <h1 className="text-lg font-semibold mb-6">
                Cadastrar Categoria
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <Button
                    type={formType === "fixed" ? "primary" : "default"}
                    onClick={toggleFormType}
				>
					Receita Fixa
				</Button>
                <Button
                    type={formType === "fixed" ? "default" : "primary"}
                    onClick={toggleFormType}
                >
					Receita Variável
				</Button> 
            </div>
            <List
                itemLayout="horizontal"
                loading={initLoading}
                dataSource={list}
            >
            <VirtualList
                data={data}
                height={CONTAINER_HEIGHT}
                itemHeight={47}
                itemKey="email"
                onScroll={onScroll}
            >
                {(item: UserItem) => (
                <List.Item 
                    key={item.email}
                    style={{ background: '#F9FAFB', padding: '12px', borderRadius: '6px', margin: '12px 0' }}
                    actions={
                        [
                            <a key="list-loadmore-edit"><EditOutlined /></a>,
                            <a key="list-loadmore-more"><DeleteFilled /></a>
                        ]
                    }
                >
                    <Skeleton avatar title={false} loading={false} active>
                         <List.Item.Meta
                             avatar={ <div className="w-10 h-10 rounded-full bg-gray-300"></div>}
                             title={item.name}
                             description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                         />
                     </Skeleton>
                </List.Item>
                )}
            </VirtualList>
            </List>
            <h2 className="text-lg font-semibold mb-6 mt-10">
                Adicionar Nova Categoria
            </h2>
            <Form
                layout="vertical"
            >
                <Form.Item
                    label={<span>Nome da Categoria</span>}
                >
                    <Input placeholder="Ex: Educação, Assinaturas, etc." />
                </Form.Item>
                <Form.Item
                    label={<span>Cor da Categoria</span> }
                >
                    <ColorPicker defaultValue="#1677ff" showText allowClear />
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
