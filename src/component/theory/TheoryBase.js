/**
 * Created by hcy on 2017/10/28.
 */
import React from 'react'
import { Tabs,  Popconfirm, message, Button , Modal} from 'antd';

import TheoryStudent  from './TheoryStudent';
import SendMessage from './SendMessage';
import HeaderTip from '../subNav/HeaderTip';

const TabPane = Tabs.TabPane;

class TheoryBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            base: [
                {
                    tab:"未体检",
                    num :10,
                    content: [
                        {
                            key: '1',
                            name: 'John Brown',
                            id: 1235555555,
                            tel:1111111,
                            type:'xxx',
                            subject1:'完成',
                            subject4:'未完成',
                        }, {
                            key: '2',
                            name: 'Jim Green',
                            id: 1235555555,
                            tel:1111111,
                            type:'xxx',
                            subject1:'完成',
                            subject4:'未完成',
                        }, {
                            key: '3',
                            name: 'Joe Black',
                            id: 1235555555,
                            tel:1111111,
                            type:'xxx',
                            subject1:'完成',
                            subject4:'未完成',
                        }]
                },
                {
                    tab:"已通知体检",
                    num :10,
                    subject1:"完成",
                    subject2:"未完成",
                    content:[

                    ]
                },
                {
                    tab:"待考科目一",
                    num :210,
                    subject1:"完成",
                    subject2:"未完成",
                    content:[

                    ]
                },
                {
                    tab:"已通知科目一考试",
                    num :130,
                    subject1:"完成",
                    subject2:"未完成",
                    content:[

                    ]
                },
                {
                    tab:"科目一不合格",
                    num :102,
                    subject1:"完成",
                    subject2:"未完成",
                    content:[

                    ]
                }
            ]
        }

    }

    confirmTest() {
        message.info('Click on Yes.');
    }

    render() {


        const tabItem = this.state.base.map((ele,index) => {
            const tab = ele.tab + '(' + ele.num +')';
            return <TabPane tab={tab} key={index}>
                <TheoryStudent data={ele.content}/>
            </TabPane>

        });

        const text = '确定要开启以上所选学员的远程测考资格?';

        return (
            <div>
                <HeaderTip firstLevel="理论学习管理" secondLevel="基本情况管理"/>

                <Tabs
                    defaultActiveKey="0"
                    style={{ height: 220 }}
                >
                    {tabItem}
                </Tabs>
                <div style={{display:'flex',width:'200px',justifyContent:'space-around'}}>
                    <Popconfirm placement="topLeft" title={text} onConfirm={this.confirmTest.bind(this)} okText="Yes" cancelText="No">
                        <Button>远程测考</Button>
                    </Popconfirm>
                    <SendMessage/>
                </div>
            </div>
        );
    }
}

export default TheoryBase;