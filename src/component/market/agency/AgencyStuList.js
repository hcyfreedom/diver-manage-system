/**
 * Created by hcy on 2017/10/30.
 */
import React from 'react';
import { Table } from 'antd';


const columns = [{
    title: '学员姓名',
    dataIndex: 'realName',
    key: 'realName',
}, {
    title: '身份证号',
    dataIndex: 'idcard',
    key: 'idcard',
}, {
    title: '手机号',
    dataIndex: 'telephone',
    key: 'telephone',
}, {
    title: '班型',
    dataIndex: 'classTypeStr',
    key: 'classTypeStr',
}, {
    title: '驾照类型',
    dataIndex: 'address',
    key: 'address',
}, {
    title: '邀请码优惠金额',
    dataIndex: 'price',
    key: 'price',
}, {
    title: '团报优惠金额',
    dataIndex: 'address',
    key: 'address',
}, {
    title: '学费金额',
    dataIndex: 'address',
    key: 'address',
}, {
    title: '报名时间',
    dataIndex: 'address',
    key: 'address',
}];

export default class AgencyStuList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content :[
                {
                    "id":1,
                    "realName":"yujingyang",
                    "idcard":"111111",
                    "telephone":"12345678",
                    "classTypeStr":"C",
                    "price":1000,
                    "addTime":"yyyy-mm-dd"
                },
                {
                    "id":13,
                    "realName":"yujingyang",
                    "idcard":"111111",
                    "telephone":"12345678",
                    "classTypeStr":"C",
                    "price":1000,
                    "addTime":"yyyy-mm-dd"
                },
                {
                    "id":31,
                    "realName":"yujingyang",
                    "idcard":"111111",
                    "telephone":"12345678",
                    "classTypeStr":"C",
                    "price":1000,
                    "addTime":"yyyy-mm-dd"
                }
            ]
        }
    }
    render(){
        return <Table dataSource={this.state.content} columns={columns} />;
    }
}