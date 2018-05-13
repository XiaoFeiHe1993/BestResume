import React, {Component} from 'react';

export default class AboutMe extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="section">
            <h4 style={{color:'#ffffff'}}>关于我</h4>

            <div className='about-parent'>
                <div className='about-content'>
                    <ul>
                        <li><span>学校：</span>浙江工业大学</li>
                        <li><span>专业：</span>软件工程</li>
                        <li><span>学历：</span>本科</li>
                        <li><span>学分绩点：</span>3.0</li>
                        <li><span>外语水平：</span>CET-4</li>
                        <li><span>兴趣爱好：</span>阅读、军事、游戏、动漫</li>
                    </ul>
                </div>
                <div className='about-right' style={{zIndex:'10',position:'relative'}}>
                    <div className='about-gold'>
                        <h1>证书奖项</h1>
                        <div>
                            <div className='li1'><span>1</span>校二等奖学金 2015.10</div>
                            <div className='li2'><span>2</span>软件设计师中级 2015.5</div>
                            <div className='li3'><span>3</span>校电子商务竞赛三等奖 2015.3</div>
                            <div className='li4'><span>4</span>校三等奖学金2014.11</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}