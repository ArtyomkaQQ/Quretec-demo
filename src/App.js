import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Group from './Group';
import Manageable from './Manageable';

const { Header, Sider, Content } = Layout;

class AppNav extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <UserOutlined />
              <Link to="/grupid">Grupid</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <VideoCameraOutlined />
              <Link to="/haldamisel">Haldamisel</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined />
              <Link to="/avaldatud">Avaldatud</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Route exact={true} path='/grupid' component={Group} />
            <Route exact={true} path='/haldamisel' component={Manageable} />
          </Content>
        </Layout>
      </Layout>
      </Router>
    );
  }
}

export default AppNav;
