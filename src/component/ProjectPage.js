import React, {Component} from 'react';
import {Card, Modal} from 'antd';
import {Scrollbars} from 'react-custom-scrollbars';
// import $ from 'jquery';

export default class ProjectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProject: false,
            callProject: false,
            cityProject: false,
        }
    }

    render() {
        return (<div className="section">
            <h4 style={{color:'#ffffff'}}>项目经验</h4>

            <div className='project-parent' style={{position:'relative',zIndex:'10'}}>
                <div className='project-card-content'>
                    <a href='http://67tech.cn/#/' target='_blank' className='project-a'>
                        <Card title="鹭栖科技官网(Web)" style={{width: 300}}>
                            <p>1.基于React+Antd</p>
                            <p>2.使用Ant-Motion增加特效</p>
                            <p>3.使用Sass编写样式</p>
                        </Card>
                    </a>
                </div>
                <div className='project-card-content' onClick={this._openModal.bind(this, 'cityProject')}>
                    <a className='project-a'>
                        <Card title="下城政务平台(Web)" style={{width: 300}}>
                            <p>1.基于React框架</p>
                            <p>2.React-Router实现路由跳转</p>
                            <p>3.React-Redux实现状态管理</p>
                            <p>4.使用Sass编写样式</p>
                            <p>5.Webpack+Gulp实现打包</p>
                        </Card>
                    </a>
                </div>
                <div className='project-card-content' onClick={this._openModal.bind(this, 'dataProject')}>
                    <a className='project-a'>
                        <Card title="数据下城(Android)" style={{width: 300}}>
                            <p>1.自定义View实现类似Excel上下左右滚动表格</p>
                            <p>2.自定义View实现条形、折线统计图</p>
                            <p>3.实现App内界面分享、水印</p>
                            <p>4.实现了活跃度统计、推送、bug捕捉</p>
                        </Card>
                    </a>
                </div>
                <div className='project-card-content' onClick={this._openModal.bind(this, 'callProject')}>
                    <a className='project-a'>
                        <Card title="1Call(Android)" style={{width: 300}}>
                            <p>1.MVC+Recyclerview+RxJava</p>
                            <p>2.Websocket实现消息发送，心跳维持长连接</p>
                            <p>3.Retrofit+FastJson实现网络请求解析</p>
                            <p>4.实现了上传、下载、分享、推送、统计</p>
                        </Card>
                    </a>
                </div>
            </div>
            <div className='project-parent' style={{position:'relative',zIndex:'10'}}>
                <div className='project-card-content'>
                    <a href='https://github.com/JackFei/QQReader' target='_blank' className='project-a'>
                        <Card title="QQ阅读小程序Demo" style={{width: 300}}>
                            <p>1.仿QQ阅读的小程序Demo</p>
                            <p>2.学习小程序基本组件</p>
                            <p>3.学习小程序项目结构，开发流程</p>
                        </Card>
                    </a>
                </div>
                <div className='project-card-content' style={{visibility:'hidden'}}>
                    <Card title="QQ阅读小程序Demo" style={{width:300}}>
                    </Card>
                </div>
                <div className='project-card-content' style={{visibility:'hidden'}}>
                    <Card title="QQ阅读小程序Demo" style={{width:300}}>
                    </Card>
                </div>
                <div className='project-card-content' style={{visibility:'hidden'}}>
                    <Card title="QQ阅读小程序Demo" style={{width:300}}>
                    </Card>
                </div>
            </div>

            <div id='data_modal'>
                <Modal title={null} visible={this.state.dataProject} width={'448px'} height={'720px'} closable={false} footer={null}  maskClosable={true} onCancel={this._closeModal.bind(this, 'dataProject')}
                       wrapClassName="vertical-center-modal">
                    <Scrollbars style={{width:400, height:720}} onScroll={this._handleScroll.bind(this)}>
                        <img src={window.config.RequestBaseUrl+"/public/img/icon_data_1.png"} className="project-img"/>
                        <img src={window.config.RequestBaseUrl+"/public/img/icon_data_2.png"} className="project-img"/>
                        <img src={window.config.RequestBaseUrl+"/public/img/icon_data_3.png"} className="project-img"/>
                        <img src={window.config.RequestBaseUrl+"/public/img/icon_data_4.png"} className="project-img"/>
                        <img src={window.config.RequestBaseUrl+"/public/img/icon_data_8.png"} className="project-img"/>
                        <img src={window.config.RequestBaseUrl+"/public/img/icon_data_6.png"} className="project-img"/>
                        <img src={window.config.RequestBaseUrl+"/public/img/icon_data_7.png"} className="project-img"/>
                        <img src={window.config.RequestBaseUrl+"/public/img/icon_data_5.png"} className="project-img"/>
                    </Scrollbars>
                </Modal>
            </div>
            <Modal title={null} visible={this.state.callProject} width={'448px'} height={'720px'} closable={false} footer={null} maskClosable={true} onCancel={this._closeModal.bind(this, 'callProject')}
                   wrapClassName="vertical-center-modal">
                <Scrollbars style={{width:400, height:720}} onScroll={this._handleScroll.bind(this)}>
                    <img src={window.config.RequestBaseUrl+"/public/img/icon_1call_1.png"} className="project-img"/>
                    <img src={window.config.RequestBaseUrl+"/public/img/icon_1call_2.png"} className="project-img"/>
                    <img src={window.config.RequestBaseUrl+"/public/img/icon_1call_3.png"} className="project-img"/>
                    <img src={window.config.RequestBaseUrl+"/public/img/icon_1call_4.png"} className="project-img"/>
                    <img src={window.config.RequestBaseUrl+"/public/img/icon_1call_5.png"} className="project-img"/>
                    <img src={window.config.RequestBaseUrl+"/public/img/icon_1call_6.png"} className="project-img"/>
                    <img src={window.config.RequestBaseUrl+"/public/img/icon_1call_7.png"} className="project-img"/>
                    <img src={window.config.RequestBaseUrl+"/public/img/icon_1call_8.png"} className="project-img"/>
                    <img src={window.config.RequestBaseUrl+"/public/img/icon_1call_9.png"} className="project-img"/>
                    <img src={window.config.RequestBaseUrl+"/public/img/icon_1call_10.png"} className="project-img"/>
                    <img src={window.config.RequestBaseUrl+"/public/img/icon_1call_11.png"} className="project-img"/>
                </Scrollbars>
            </Modal>
            <Modal title={null} visible={this.state.cityProject} width={'1008px'} height={'540px'} closable={false} footer={null} maskClosable={true} onCancel={this._closeModal.bind(this, 'cityProject')}
                   wrapClassName="vertical-center-modal">
                <Scrollbars style={{width:1008, height:540}} onScroll={this._handleScroll.bind(this)}>
                    <img src={window.config.RequestBaseUrl+"/public/img/icon_city_1.png"} className="project-city"/>
                    <img src={window.config.RequestBaseUrl+"/public/img/icon_city_2.png"} className="project-city" style={{marginTop:20, marginBottom:20}}/>
                    <img src={window.config.RequestBaseUrl+"/public/img/icon_city_3.png"} className="project-city"/>
                </Scrollbars>
            </Modal>
        </div>)
    }

    _openModal(type) {
        if(type === 'dataProject') {
            this.setState({dataProject: true});
        } else if(type === 'callProject') {
            this.setState({callProject: true});
        } else if(type === 'cityProject') {
            this.setState({cityProject: true});
        }
        // $("body").css({"overflow":"hidden","height":"100%"});
    }

    _closeModal(type) {
        if(type === 'dataProject') {
            this.setState({dataProject: false});
        } else if(type === 'callProject') {
            this.setState({callProject: false});
        } else if(type === 'cityProject') {
            this.setState({cityProject: false});
        }
        // $("body").css({"overflow":"auto"});
    }

    _handleScroll(e) {
        e.stopPropagation();
    }
}