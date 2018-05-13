import React, {Component} from 'react';
import {Timeline, Icon} from 'antd';

export default class TimePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="section">
            <h4>工作经验</h4>

            <div className='time-content'>
                <Timeline style={{width: '50%'}}>
                    <Timeline.Item>
                        <div className='arrow-box'>
                            <div className='time-title'>
                                <span>2017年6月</span>
                                <span></span>
                            </div>
                            <div className='time-describe'>
                                你好
                            </div>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item>
                        <div>
                            <span>2016年6月</span>
                            <span></span>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item>
                        <div>
                            <span>2015年9月</span>
                            <span></span>
                        </div>
                    </Timeline.Item>
                </Timeline>
            </div>
        </div>)
    }
}