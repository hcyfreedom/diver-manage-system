/**
 * Created by hcy on 2017/10/29.
 */
import React from 'react';
import HeaderTip from '../../subNav/HeaderTip';
import { Card, Col, Row,Input ,Button} from 'antd';
import GroupStuList from './GroupStuList';

const { TextArea } = Input;
class Group extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                canModif:'false',
                data:[
                    {
                        "id":2,
                        "deadline":1223,
                        "strategy":"组团攻略",
                        "content":"组团说明",
                        "studentCount":1,
                        "groupCount":3,
                        "reductionList":[
                            {
                                "id":12,
                                "studentCount":3,
                                "reduction":30
                            }
                        ]
                    },
                    {
                        "id":3,
                        "deadline":1223,
                        "strategy":"组团攻略",
                        "content":"组团说明",
                        "studentCount":1,
                        "groupCount":3,
                        "reductionList":[
                            {
                                "id":12,
                                "studentCount":3,
                                "reduction":30
                            }
                        ]
                    },
                    {
                        "id":2,
                        "deadline":1223,
                        "strategy":"组团攻略",
                        "content":"组团说明",
                        "studentCount":1,
                        "groupCount":3,
                        "reductionList":[
                            {
                                "id":12,
                                "studentCount":3,
                                "reduction":30
                            }
                        ]
                    },
                    {
                        "id":2,
                        "deadline":1223,
                        "strategy":"组团攻略",
                        "content":"组团说明",
                        "studentCount":1,
                        "groupCount":3,
                        "reductionList":[
                            {
                                "id":12,
                                "studentCount":3,
                                "reduction":30
                            }
                        ]
                    },
                    {
                        "id":2,
                        "deadline":1223,
                        "strategy":"组团攻略",
                        "content":"组团说明",
                        "studentCount":1,
                        "groupCount":3,
                        "reductionList":[
                            {
                                "id":12,
                                "studentCount":3,
                                "reduction":30
                            }
                        ]
                    }
                ]
            }
    }

    hanleModif(){
        this.setState ({
            canModif :'true'
        })
        console.log(this.state.canModif)

    }


    render() {
        const groupItem = this.state.data.map((ele,id) => {
            return <Col span={8} key={id} style={{marginBottom:'20px'}}>
                <Card title={ele.id} bordered={false} extra={<div>
                    <Button type="primary" style={{marginRight:'5px'}}>上架</Button>
                    <Button type="danger">下架</Button>
                </div>}>
                    组团说明:<TextArea defaultValue={ele.content} autosize style={{marginBottom:'10px'}} />
                    组团攻略:<TextArea  defaultValue={ele.strategy} autosize style={{marginBottom:'10px'}}/>
                    已开团数量:<TextArea  defaultValue={ele.groupCount} autosize style={{marginBottom:'10px'}}/>
                    已报名人数:<TextArea  defaultValue={ele.studentCount} autosize style={{marginBottom:'10px'}}/>
                    活动结束倒计时:<TextArea disabled={this.state.canModif} defaultValue={ele.deadline} autosize style={{marginBottom:'10px'}}/>

                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <Button onClick={this.hanleModif.bind(this)}>提交修改</Button>
                        <GroupStuList title={ele.id}/>
                    </div>
                </Card>
            </Col>
        });


        return (
            <div>
                <HeaderTip firstLevel="营销管理" secondLevel="组团学车"/>
                <div style={{ background: '#ECECEC'}}>
                    <Row gutter={16} type="flex"  align="top">
                        {groupItem}
                    </Row>
                </div>
            </div>
        )
    }
}


export default Group;