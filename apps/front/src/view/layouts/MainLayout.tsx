
import React, { useState } from 'react';
import { App, Layout, theme } from 'antd';
import Title from 'antd/es/typography/Title';
import { AppMenu } from '../components/AppMenu';
import { Outlet } from 'react-router-dom';

const { Content, Footer, Sider } = Layout;

export const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [ collapsed, setCollapsed ] = useState(false);

  return (
    <Layout className="h-full" style={{ background: colorBgContainer }}>
      <Sider
        collapsed={collapsed}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        breakpoint="lg"
        collapsedWidth="60"
        isMobile={true}
      >
        <div className="h-14 flex items-center justify-start px-7">
          {!collapsed && (
            <Title
              style={{ color: colorBgContainer, margin: 0 }}
              level={4}
              className='transition-all duration-200 ease-out whitespace-nowrap opacity-100 translate-x-0'
            >
              DiaFin
            </Title>
          )}
        </div>
        <AppMenu />
      </Sider>
      <Layout className="h-full">
        <Content className="h-full">
          <div
            className="h-full overflow-auto"
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
           <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', background: colorBgContainer }}>
          DiaFin ©{new Date().getFullYear()} Created by Jeff
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;