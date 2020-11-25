import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { HomePage } from './pages/Home/Home.page';
import { TestSuitesPage } from './pages/TestSuites/TestSuites.page';

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <Layout className="fat-reports-app">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/test-suites">Test suitess</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Something else later
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {collapsed ? (
              <MenuUnfoldOutlined
                className="trigger"
                onClick={() => setCollapsed(false)}
              ></MenuUnfoldOutlined>
            ) : (
              <MenuFoldOutlined
                className="trigger"
                onClick={() => setCollapsed(true)}
              ></MenuFoldOutlined>
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route path="/test-suites">
                <TestSuitesPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
