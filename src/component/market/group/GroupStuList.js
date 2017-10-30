/**
 * Created by hcy on 2017/10/29.
 */
import React from 'react';
import { Modal, Button ,Table } from 'antd';

const columns = [{
    title: '学员姓名',
    dataIndex: 'studentName',
    key: 'studentName',
}, {
    title: '身份证号',
    dataIndex: 'studentIdcard',
    key: 'studentIdcard',
}, {
    title: '代理人姓名',
    dataIndex: 'refereeName',
    key: 'refereeName',
},{
    title: '班型名称',
    dataIndex: 'className',
    key: 'className'
}];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
    }),
};


class GroupStuList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            content:[
                {
                    "id":2,
                    "payStatusStr":"已支付",
                    "statusStr":"支付完成",
                    "studentName":"于景洋",
                    "studentIdcard":"123455667",
                    "refereeName":"代理人姓名",
                    "className":"班型名称",
                    "fieldName":"场地名称",
                    "addTime":"添加时间"
                },
                {
                    "id":22,
                    "payStatusStr":"已支付",
                    "statusStr":"支付完成",
                    "studentName":"于景洋",
                    "studentIdcard":"123455667",
                    "refereeName":"代理人姓名",
                    "className":"班型名称",
                    "fieldName":"场地名称",
                    "addTime":"添加时间"
                },
                {
                    "id":293,
                    "payStatusStr":"已支付",
                    "statusStr":"支付完成",
                    "studentName":"于景洋",
                    "studentIdcard":"123455667",
                    "refereeName":"代理人姓名",
                    "className":"班型名称",
                    "fieldName":"场地名称",
                    "addTime":"添加时间"
                },
                {
                    "id":23,
                    "payStatusStr":"已支付",
                    "statusStr":"支付完成",
                    "studentName":"于景洋",
                    "studentIdcard":"123455667",
                    "refereeName":"代理人姓名",
                    "className":"班型名称",
                    "fieldName":"场地名称",
                    "addTime":"添加时间"
                },
                {
                    "id":237,
                    "payStatusStr":"已支付",
                    "statusStr":"支付完成",
                    "studentName":"于景洋",
                    "studentIdcard":"123455667",
                    "refereeName":"代理人姓名",
                    "className":"班型名称",
                    "fieldName":"场地名称",
                    "addTime":"添加时间"
                },
                {
                    "id":223,
                    "payStatusStr":"已支付",
                    "statusStr":"支付完成",
                    "studentName":"于景洋",
                    "studentIdcard":"123455667",
                    "refereeName":"代理人姓名",
                    "className":"班型名称",
                    "fieldName":"场地名称",
                    "addTime":"添加时间"
                },
                {
                    "id":233,
                    "payStatusStr":"已支付",
                    "statusStr":"支付完成",
                    "studentName":"于景洋",
                    "studentIdcard":"123455667",
                    "refereeName":"代理人姓名",
                    "className":"班型名称",
                    "fieldName":"场地名称",
                    "addTime":"添加时间"
                }

            ]
        };
    }

    showModal  ()  {
        this.setState({
            visible: true,
        });
    }
    handleOk  (e)  {
        this.setState({
            visible: false,
        });
    }
    handleCancel  (e)  {
        this.setState({
            visible: false,
        });
    }
    render() {
        this.state.content.map((ele)=>{
            ele.key = ele.id;
        });
        const item = <Table pagination={{ pageSize: 5 }} columns={columns} dataSource={this.state.content}/>;


        return (
            <div>
                <Button type="primary" onClick={this.showModal.bind(this)}>订单信息</Button>
                <Modal
                    title={this.props.title}
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    {item}
                </Modal>
            </div>
        );
    }
}

export default GroupStuList;