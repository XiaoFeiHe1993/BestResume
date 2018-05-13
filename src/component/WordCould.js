import React, {Component} from 'react';

let echarts = require('echarts');
require('echarts-wordcloud');

export default class WordCould extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this._setWordCould();

        this._setRadar();
    }

    render() {
        return (<div className="section">
            <h4 style={{color:'#ffffff'}}>专业技能</h4>

            <div className="word-colud-content">
                <div id='main' style={{width:"600px",height:"600px"}}></div>
                <div id='radar' style={{width:"600px",height:"600px"}}></div>
            </div>
        </div>)
    }

    _setRadar() {
        let option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            radar: [{
                    indicator: [
                        {text: '学习能力', max: 100, color:'#ffffff'},
                        {text: '抗压能力', max: 100, color:'#ffffff'},
                        {text: '管理能力', max: 100, color:'#ffffff'},
                        {text: '适应力', max: 100, color:'#ffffff'},
                        {text: '责任心', max: 100, color:'#ffffff'},
                        {text: '交际能力', max: 100, color:'#ffffff'}
                    ],
                    radius: '70%',
                    center: ['50%','50%']
            }],
            series: [{
                    type: 'radar',
                    radarIndex: 0,
                    data: [{
                            value: [80, 75, 75, 80, 90, 70],
                            name: '某水果手机'
                    }]
                }
            ]
        };

        let chart = echarts.init(document.getElementById('radar'));
        chart.setOption(option);
    }

    _setWordCould() {
        let option = {
            tooltip: {
                show: false
            },
            series: [{
                name: '',
                type: 'wordCloud',
                width:'600px',
                height:'600px',
                rotationRange: [0, 0],
                sizeRange: [12, 85],
                autoSize: {
                    enable: true,
                    minSize: 24
                },
                data: [{
                    name: "JavaScript",
                    value: 6000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "Android",
                    value: 6000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "React",
                    value: 6000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "Vue",
                    value: 5000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "Java",
                    value: 3000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "webpack",
                    value: 3000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "gulp",
                    value: 3000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "Webstrom",
                    value: 1500,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "VsCode",
                    value: 1500,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "Antd",
                    value: 4000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "ElementUi",
                    value: 4000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "Sass",
                    value: 3000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "小程序",
                    value: 2000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "Github",
                    value: 2000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "React Native",
                    value: 2000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "Vuex",
                    value: 3000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "React-Redux",
                    value: 3000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "React-Router",
                    value: 3000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "Lodash",
                    value: 2000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "PubSub",
                    value: 2000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "Echarts",
                    value: 1500,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "ES5/ES6",
                    value: 2000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "Flex",
                    value: 1500,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "RxJava",
                    value: 1000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "Retrofit",
                    value: 1000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "EventBus",
                    value: 1000,
                    itemStyle: this._createRandomItemStyle()
                }, {
                    name: "npm/yarn",
                    value: 1500,
                    itemStyle: this._createRandomItemStyle()
                } ]
            }]
        };

        let chart = echarts.init(document.getElementById('main'));
        chart.setOption(option);
    }

    _createRandomItemStyle() {
        return {
            normal: {
                color: 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                ].join(',') + ')'
            }
        };
    }
}