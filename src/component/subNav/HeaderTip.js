/**
 * Created by hcy on 2017/10/29.
 */
import React from 'react';
import {Breadcrumb} from 'antd';

export default class HeaderTip extends React.Component {
    render(){
        const firstLevel = <Breadcrumb.Item>{this.props.firstLevel}</Breadcrumb.Item> || '';
        const secondLevel = <Breadcrumb.Item>{this.props.secondLevel}</Breadcrumb.Item> || '';


        return(
            <Breadcrumb style={{ padding: '16px' ,backgroundColor:'#ececec'}}>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                {firstLevel}
                {secondLevel}
            </Breadcrumb>
        )
    }
}

