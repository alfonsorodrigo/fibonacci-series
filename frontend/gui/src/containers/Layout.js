import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

const CustomLayout = props => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1"></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Fibonacci</Breadcrumb.Item>
          <Breadcrumb.Item>Sucesión</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer Fibonacci</Footer>
    </Layout>
  );
};

export default CustomLayout;
