import React from 'react';
import { Layout, Menu, Breadcrumb, Icon ,Button} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


import {Router, Route, Switch,Redirect, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

// 自定义组件
// import OrderList from '../order/OrderList'
import SideNav from './SideNav';
import StudentList from "../student/StudentList";
import TheoryBase from '../theory/TheoryBase';
import RuleMaking from '../theory/RuleMaking';
import Package from '../market/package/Package';
import Group from '../market/group/Group';
import Agency from '../market/agency/Agency';

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
        let location = this.props.location.pathname;


        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse.bind(this)}
                >
                    <SideNav defaultSelectedKeys={[location]}/>

                    <div className="logo" />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <Button type="primary" icon="notification"  size="large" style = {{margin:'20px',float:'right',width:'60px'}}/>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <div style={{background: '#fff', minHeight: 360 }}>
                            <Switch>
                                {/*<Route path="/diver/orderList" component={OrderList}/>*/}
                                <Route path="/diver/studentList" component={StudentList}/>
                                <Route path="/diver/theory/base" component={TheoryBase}/>
                                <Route path="/diver/theory/rule" component={RuleMaking}/>
                                <Route path="/diver/market/package" component={Package}/>
                                <Route path="/diver/market/group" component={Group}/>
                                <Route path="/diver/market/agency" component={Agency}/>
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