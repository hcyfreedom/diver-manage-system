/**
 * Created by hcy on 2017/10/28.
 */
import React from 'react';
import { Table , Switch  } from 'antd';


const columns = [{
    title: '学员姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '身份证号',
    dataIndex: 'id',
    key: 'id',
}, {
    title: '学员手机号',
    dataIndex: 'tel',
    key: 'tel',
},{
    title: '驾照类型',
    dataIndex: 'type',
    key: 'type',
}, {
    title: '科目一',
    dataIndex: 'subject1',
    key: 'subject1',
}, {
    title: '科目四',
    dataIndex: 'subject4',
    key: 'subject4',
}, {
    title: '远程测考',
    key: 'action',
    render: () =>  (
        <SwitchButton/>
    ),
}];



const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
    }),
};



class TheoryStudent extends React.Component {
    constructor(props) {
        super(props)
    }



    render(){
        return(
            <Table rowSelection={rowSelection} columns={columns} dataSource={this.props.data}/>
        )
    }
}


class SwitchButton extends React.Component{
    onChange(checked) {
        console.log(`switch to ${checked}`);
    }
    render(){
        return (
            <Switch defaultChecked={false} onChange={this.onChange.bind(this)} />
        )
    }
}
export default TheoryStudent