import React from 'react';
import { Layout, Menu, Breadcrumb, Icon ,Button} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


import {Router, Route, Switch,Redirect, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

// 自定义组件
import OrderList from '../Order/OrderList'
import SideNav from './SideNav';
import StudentList from "../student/StudentList";

class SubNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }
    onCollapse  (collapsed)  {
        this.setState({ collapsed });
    }
    render() {
        return (
            <Layout>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse.bind(this)}
                >
                    <SideNav/>

                    <div className="logo" />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <Button type="primary" icon="notification"  size="large" style = {{margin:'20px',float:'right',width:'60px'}}/>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>订单管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <Switch>
                                <Route path="/diver/orderList" component={OrderList}/>
                                <Route path="/diver/studentList" component={StudentList}/>

                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        驾校管理系统
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default SubNav;