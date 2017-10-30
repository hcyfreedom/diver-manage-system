import React from 'react';
import { Layout, Menu, Breadcrumb, Icon ,Button} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import {Link} from 'react-router-dom';

export default class SideNav extends React.Component {
    constructor(props){
        super(props)
    }



    render (){

        return (
            <div>
                <Menu theme="dark" defaultSelectedKeys={this.props.defaultSelectedKeys} mode="inline">
                    <Menu.Item key="/diver/orderList">
                        <Link to="/diver/orderList">
                            <Icon type="pie-chart" />
                            <span>订单管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/diver/studentList">
                        <Link to="/diver/studentList">
                            <Icon type="desktop" />
                            <span>学员管理</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user" /><span>理论学习管理</span></span>}
                    >
                       <Menu.Item key="/diver/theory/base"> <Link to="/diver/theory/base">基本情况管理</Link></Menu.Item>
                        <Menu.Item key="/diver/theory/rule"><Link to="/diver/theory/rule">测考设置</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="team" /><span>营销管理</span></span>}
                    >
                        <Menu.Item key="/diver/market/package"><Link to="/diver/market/package">学车套餐</Link></Menu.Item>
                        <Menu.Item key="/diver/market/group"><Link to="/diver/market/group">组团学车</Link></Menu.Item>
                        <Menu.Item key="/diver/market/minapps"><Link to="/diver/market/minapps">小程序信息</Link></Menu.Item>
                        <Menu.Item key="/diver/market/agency"><Link to="/diver/market/agency">代理管理</Link></Menu.Item>

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