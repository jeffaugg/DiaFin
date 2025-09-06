import type { SiderRoutes } from "../../types";
import { DownCircleOutlined, BarChartOutlined, UpCircleOutlined, TagOutlined, PieChartOutlined } from '@ant-design/icons';

export const routes: SiderRoutes[] = [
    {
      path: "/",
      icon: <BarChartOutlined />,
      label: 'Dashboard',
    },
    {
      path: "/cadastrar-receita",
      icon: <UpCircleOutlined />,
      label: 'Cadastrar Receita',
    },
    {
      path: "/cadastrar-despesa",
      icon: <DownCircleOutlined />,
      label: 'Cadastrar Despesa',
    },
    {
      path: "/categorias",
      icon: <TagOutlined />,
      label: 'Categorias',
    },
    {
      path: "/orcamento",
      icon: <PieChartOutlined />,
      label: 'Orçamento',
    },
];

export default routes;