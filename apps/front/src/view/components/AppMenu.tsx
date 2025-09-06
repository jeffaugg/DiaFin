import { Link } from "react-router-dom";
import routes from "../../router/SiderRoutes";
import type { SiderRoutes } from "../../types";
import { Menu } from "antd";

export const AppMenu = () => {
    const items = routes.map((route: SiderRoutes) => {
        return {
            key: route.path,
            icon: route.icon,
            label: <Link to={route.path}>{route.label}</Link>
        }
    })
    return (
    <Menu
        theme="dark"
        mode="inline" 
        items={items}
        defaultSelectedKeys={['/']}
    />
  );
};
