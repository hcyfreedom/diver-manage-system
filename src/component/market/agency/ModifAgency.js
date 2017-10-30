/**
 * Created by hcy on 2017/10/29.
 */
import React from 'react';
import { Modal, Button ,Form,Input} from 'antd';
const FormItem = Form.Item;
class ModifPackage extends React.Component {
    constructor(props){
        super(props);
        this. state = { visible: false };
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
        return (
            <div>
                <Button  onClick={this.showModal.bind(this)}>修改</Button>
                <Modal
                    title="修改代理人信息"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <Form>
                        <FormItem> <Input  placeholder="姓名" /></FormItem>
                        <FormItem> <Input  placeholder="电话" /></FormItem>
                        <FormItem> <Input  placeholder="邀请码优惠金额" /></FormItem>
                        <FormItem> <Input  placeholder="提成金额" /></FormItem>
                        <FormItem> <Input  placeholder="招生数量" /></FormItem>

                    </Form>
                </Modal>
            </div>
        );
    }
}

export default ModifPackage;