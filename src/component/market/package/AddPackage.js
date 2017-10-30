/**
 * Created by hcy on 2017/10/29.
 */
import React from 'react';
import { Modal, Button ,Form,Input} from 'antd';
const FormItem = Form.Item;

class AddPackage extends React.Component {
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
            <div style={{padding:'0 0 20px 30px',marginTop:"-20px"}}>
                <Button type="primary" onClick={this.showModal.bind(this)}>添加学车套餐</Button>
                <Modal
                    title="添加学车套餐"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <Form>
                        <FormItem> <Input  placeholder="名称" /></FormItem>
                        <FormItem> <Input  placeholder="售价" /></FormItem>
                        <FormItem> <Input  placeholder="服务承诺" /></FormItem>
                        <FormItem> <Input  placeholder="费用明细" /></FormItem>
                        <FormItem> <Input  placeholder="类型" /></FormItem>

                    </Form>
                </Modal>
            </div>
        );
    }
}

export default AddPackage;