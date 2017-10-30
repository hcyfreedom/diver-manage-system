/**
 * Created by hcy on 2017/10/28.
 */
import React from 'react';
import { Modal, Button ,Input} from 'antd';
const { TextArea } = Input;

class SendMessage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ModalText: '请编辑短信内容',
            visible: false,
            confirmLoading: false,
        };
    }
    showModal  ()  {
        this.setState({
            visible: true,
        });
    };
    handleOk  ()  {
        this.setState({
            ModalText: '正在发送...',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    }
    handleCancel  ()  {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }
    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal.bind(this)}>发送通知</Button>
                <Modal title="通知"
                       visible={visible}
                       onOk={this.handleOk.bind(this)}
                       confirmLoading={confirmLoading}
                       onCancel={this.handleCancel.bind(this)}
                >
                    <p style={{marginBottom:'20px'}}>{ModalText}</p>
                    <TextArea placeholder="Autosize height based on content lines" autosize />
                </Modal>
            </div>
        );
    }
}

export default SendMessage;