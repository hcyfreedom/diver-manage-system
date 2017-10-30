/**
 * Created by hcy on 2017/10/30.
 */
import React from 'react';
import { Collapse,Row,Col,Button } from 'antd';

import HeaderTip from '../../subNav/HeaderTip';
import ModifAgency from './ModifAgency';
import AddAgency from './AddAgency';
import AgencyStuList from './AgencyStuList';
const Panel = Collapse.Panel;

function callback(key) {
    console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export default class Agency extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content : [
                {
                    "id":1,
                    "realName":"老王代理",
                    "reduction":20,
                    "profitShare":100,
                    "studentCount":10
                },
                {
                    "id":12,
                    "realName":"老王代理2",
                    "reduction":20,
                    "profitShare":100,
                    "studentCount":10
                },
                {
                    "id":13,
                    "realName":"老王代理3",
                    "reduction":20,
                    "profitShare":100,
                    "studentCount":10
                }
            ]
        }
    }
    render(){
        const panelItem = this.state.content.map((ele,id)=>{

            return <Panel  header={ <Row style={{textAlign:'center'}}>
                <Col span={3}>{ele.realName}</Col>
                <Col span={3}>电话接口没有给</Col>
                <Col span={3}>{ele.reduction}</Col>
                <Col span={3}>{ele.profitShare}</Col>
                <Col span={3}>{ele.studentCount}</Col>
                <Col span={3}> <Button type="danger">禁用</Button> </Col>
                <Col span={3}> <ModifAgency/> </Col>
                <Col span={3}> </Col>

            </Row>} key={id}>
                <p><AgencyStuList/></p>
            </Panel>
        });
        return(
            <div>
                <HeaderTip firstLevel="营销管理" secondLevel="代理管理"/>
                <Row style={{backgroundColor:'#108ee9',color:'white',height:'40px',lineHeight:'40px',textAlign:'center',paddingLeft:'34px'}}>
                    <Col span={3}>代理姓名</Col>
                    <Col span={3}>电话</Col>
                    <Col span={3}>邀请码优惠金额</Col>
                    <Col span={3}>提成金额</Col>
                    <Col span={3}>招生数量</Col>
                    <Col span={3}> 禁用代理</Col>
                    <Col span={3}> 修改代理信息</Col>
                    <Col span={3}> <AddAgency/></Col>

                </Row>
                <Collapse defaultActiveKey={['1']} onChange={callback}>
                    {panelItem}
                </Collapse>
            </div>
        )
    }
}
