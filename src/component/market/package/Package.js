/**
 * Created by hcy on 2017/10/29.
 */
import React from 'react';
import { Card, Col, Row,Button } from 'antd';
import Modif from './ModifPackage';
import AddPackage from './AddPackage';
import HeaderTip from '../../subNav/HeaderTip'

class Package extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            content:[
                {
                    "id":1,
                    "name":"banxing",
                    "price":30,
                    "servicePromise":"xxxxxxxx",
                    "priceContent":"xxxxxxxxxx",
                    "type":"C1"
                },{
                    "id":11,
                    "name":"哈哈哈",
                    "price":24234,
                    "servicePromise":"吞吞吐吐we",
                    "priceContent":"eeee",
                    "type":"C2"
                },{
                    "id":11,
                    "name":"哈哈哈",
                    "price":24234,
                    "servicePromise":"吞吞吐吐",
                    "priceContent":"eeee",
                    "type":"C2"
                },{
                    "id":11,
                    "name":"哈哈哈",
                    "price":24234,
                    "servicePromise":"吞吞吐吐",
                    "priceContent":"eeee",
                    "type":"C2"
                }
            ]
        }
    }
    render(){
        const cardItem = this.state.content.map((ele,id) => {
            return <Col key={id} span={8} style={{marginBottom:'20px'}}>
                <Card title={ele.name}  extra={<div>
                    <Button type="primary" style={{marginRight:'5px'}}>上架</Button>
                    <Button type="danger">下架</Button>
                    <Modif/>
                </div>
                } style={{fontSize:'18px'}}>
                            售价：{ele.price}<br/>服务承诺：{ele.servicePromise}<br/>费用明细：{ele.priceContent}<br/>驾照类型：{ele.type}

                            </Card>
                    </Col>
        })


        return (
            <div>
                <HeaderTip firstLevel="营销管理" secondLevel="学车套餐"/>

                <Row gutter={16}  type="flex"  align="top" style={{ padding: '30px' }}>
                    {cardItem}
                </Row>
                <AddPackage/>
            </div>
        )
    }
}

export default Package;