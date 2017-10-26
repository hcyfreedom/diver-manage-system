import React from 'react';
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

class SubNav extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        };
    }
    toggleCollapsed() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    render() {
        return (
            <div style={{width: 240}}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 16}}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                        <Menu.Item key="1">Option 5</Menu.Item>
                        <Menu.Item key="2">Option 6</Menu.Item>
                        <Menu.Item key="3">Option 7</Menu.Item>
                        <Menu.Item key="4">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
                        <Menu.Item key="5">Option 9</Menu.Item>
                        <Menu.Item key="6">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 11</Menu.Item>
                            <Menu.Item key="">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        )

    }
}

export default SubNav;