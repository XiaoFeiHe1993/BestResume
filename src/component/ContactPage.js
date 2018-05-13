import React, {Component} from 'react';
import {Modal} from 'antd';

export default class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weChat: false,
            publicNumber: false
        }
    }

    render() {
        return (<div className="section">
            <h1 className='contact-thank'>Thanks for your visit !</h1>

            <div className='contact-bottom'>
                <div className='contact-address' onClick={this._openModal.bind(this, 'we_chat')}><img src={window.config.RequestBaseUrl+"/public/img/icon_we_chat.png"} title='微信' className='contact-icon-bottom'/></div>
                <div className='contact-address'><a className='contact-a' href='mailto:hexiaofei.best@qq.com'><img src={window.config.RequestBaseUrl+"/public/img/icon_mail.png"} title='邮箱' className='contact-icon-bottom'/></a></div>
                <div className='contact-address'><a className='contact-a' href='https://github.com/JackFei' target='_blank'><img src={window.config.RequestBaseUrl+"/public/img/icon_github.png"} title='Github' className='contact-icon-bottom'/></a></div>
                <div className='contact-address' onClick={this._openModal.bind(this, 'public_number')}><img src={window.config.RequestBaseUrl+"/public/img/icon_we_chat.png"} title='个人公众号' className='contact-icon-bottom'/></div>
                <div className='contact-address'><a className='contact-a' href='https://github.com/JackFei' target='_blank'><img src={window.config.RequestBaseUrl+"/public/img/icon_download.png"} title='下载简历' className='contact-icon-bottom'/></a></div>
            </div>

            <Modal title={null} visible={this.state.weChat} closable={false} footer={null} width={'348px'} maskClosable={true} onCancel={this._closeModal.bind(this, 'we_chat')}
                   wrapClassName="vertical-center-modal">
                <img src={window.config.RequestBaseUrl+"/public/img/icon_weixin_friend.jpg"} width='300px' height='300px'/>
            </Modal>
            <Modal title={null} visible={this.state.publicNumber} closable={false} footer={null} width={'348px'} maskClosable={true} onCancel={this._closeModal.bind(this, 'public_number')}
                   wrapClassName="vertical-center-modal">
                <img src={window.config.RequestBaseUrl+"/public/img/icon_weixin_public.jpg"} width='300px' height='300px'/>
            </Modal>
        </div>)
    }

    _openModal(type) {
        if(type === 'we_chat') {
            this.setState({weChat: true});
        } else if(type === 'public_number') {
            this.setState({publicNumber: true});
        }
    }

    _closeModal(type) {
        if(type === 'we_chat') {
            this.setState({weChat: false});
        } else if(type === 'public_number') {
            this.setState({publicNumber: false});
        }
    }
}