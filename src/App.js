import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Group from "./Group";
import Manageable from "./Manageable";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import ee from "./lang/ee";
import en from "./lang/en";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
counterpart.registerTranslations("ee", ee);
counterpart.registerTranslations("en", en);
counterpart.setLocale("ee");

class AppNav extends Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onLangChange = (e) => {
    this.setState({ lang: e.target.value });
    counterpart.setLocale(e.target.value);
  };

  render() {
    return (
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.Item key="2">
                <PieChartOutlined />
                <span>
                  <Translate content="home" />
                </span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <MailOutlined />
                    <span>
                      <Translate content="forms.f1" />
                    </span>
                  </span>
                }
              >
                <Menu.Item key="5">
                  <Link to="/grupid">
                    <Translate content="forms.f2" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/haldamisel">
                    <Translate content="forms.f3" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="7">
                  <Link to="/">Avaldamisel</Link>
                </Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
              <Menu.Item key="3">
                <DesktopOutlined />
                <span>Option 2</span>
              </Menu.Item>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <AppstoreOutlined />
                    <span>Navigation Two</span>
                  </span>
                }
              >
                <Menu.Item key="4">Option 9</Menu.Item>
                <Menu.Item key="5">Option 10</Menu.Item>
                <SubMenu key="6" title="Submenu">
                  <Menu.Item key="7">Option 11</Menu.Item>
                  <Menu.Item key="8">Option 12</Menu.Item>
                </SubMenu>
              </SubMenu>
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

            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <select value={this.state.lang} onChange={this.onLangChange}>
                <option value="ee">EE</option>
                <option value="en">EN</option>
              </select>

              <Route exact={true} path="/grupid" component={Group} />
              <Route exact={true} path="/haldamisel" component={Manageable} />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default AppNav;
