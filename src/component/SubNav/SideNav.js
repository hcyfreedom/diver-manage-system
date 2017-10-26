import React from 'react';
import { Layout, Menu, Breadcrumb, Icon ,Button} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import {Link} from 'react-router-dom';

export default class SideNav extends React.Component {

    render (){
        return (
            <div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Link to="/diver/orderList">
                            <Icon type="pie-chart" />
                            <span>订单管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/diver/studentList">
                            <Icon type="desktop" />
                            <span>学员管理</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user" /><span>理论学习管理</span></span>}
                    >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="team" /><span>营销管理</span></span>}
                    >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <Icon type="file" />
                        <span>账号管理</span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}