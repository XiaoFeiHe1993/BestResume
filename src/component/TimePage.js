import React, {Component} from 'react';
import {Timeline, Icon} from 'antd';

export default class TimePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="section">
            <h4 style={{color:'#ffffff'}}>工作经验</h4>

            <div className='time-content'>
                <Timeline style={{width: '50%'}}>
                    <Timeline.Item>
                        <div className='time-item'>
                            2018年8月进入丁香园，现在担任丁香园ToD前端开发。
                        </div>
                    </Timeline.Item>
                    <Timeline.Item>
                        <div className='time-item'>
                            2017年6月由于曼拓经营不善，开发团队由鹭栖科技有限公司接管。期间开发了鹭栖公司官网、下城政务平台、下城政协Web端。
                        </div>
                    </Timeline.Item>
                    <Timeline.Item>
                        <div className='time-item'>
                            2016年6月顺利从浙江工业大学毕业，并取得学士学位。期间开发了数据下城和下城政务平台Android端。
                        </div>
                    </Timeline.Item>
                    <Timeline.Item>
                        <div className='time-item'>
                            2015年9月进入曼拓实习，和凯文、July等负责开发Launchr Android端，期间也参与过德清项目相关工作。
                        </div>
                    </Timeline.Item>
                    <Timeline.Item>
                        <div className='time-item'>
                            2012年9月来到浙江工业大学，进入计算机科学与技术学院、软件学院，学习计算机技术。
                        </div>
                    </Timeline.Item>
                </Timeline>
            </div>
        </div>)
    }
}