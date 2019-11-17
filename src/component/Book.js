import React, {Component} from 'react';
import {List, Card} from 'antd';

export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {title: '历史上的十次货币战争', author: '', publish: '', url:'/public/img/book/book_1.jpg'},
                {title: '货币的教训', author: '', publish: '', url:'/public/img/book/book_2.jpg'},
                {title: '货币野史', author: '', publish: '', url:'/public/img/book/book_3.jpg'},
                {title: '千门之门', author: ' ', publish: '', url:'/public/img/book/book_18.jpg'},
                {title: '陆小凤传奇', author: ' ', publish: '', url:'/public/img/book/book_19.jpg'},
                {title: '七种武器', author: ' ', publish: '', url:'/public/img/book/book_20.jpg'},
                {title: '小王子', author: '', publish: '', url:'/public/img/book/book_21.jpg'},
                {title: '明朝那些事儿', author: ' ', publish: '', url:'/public/img/book/book_22.jpg'},
                {title: '狼图腾', author: ' ', publish: '', url:'/public/img/book/book_23.jpg'},
                {title: '货币战争1', author: '', publish: '', url:'/public/img/book/book_4.jpg'},
                {title: '货币战争2', author: '', publish: '', url:'/public/img/book/book_4.jpg'},
                {title: '货币战争3', author: '', publish: '', url:'/public/img/book/book_4.jpg'},
                {title: '货币战争4', author: '', publish: '', url:'/public/img/book/book_4.jpg'},
                {title: '货币战争5', author: '', publish: '', url:'/public/img/book/book_4.jpg'},
                {title: '白夜行', author: '', publish: '', url:'/public/img/book/book_5.jpg'},
                {title: '解忧杂货店', author: '', publish: '', url:'/public/img/book/book_6.jpg'},
                {title: '英雄志', author: '', publish: '', url:'/public/img/book/book_7.jpg'},
                {title: '凡人修仙传', author: '', publish: '', url:'/public/img/book/book_8.jpg'},
                {title: '了凡四训', author: '', publish: '', url:'/public/img/book/book_10.jpg'},
                {title: '复活的日本财阀', author: '', publish: '', url:'/public/img/book/book_11.jpg'},
                {title: '高频交易员', author: '', publish: '', url:'/public/img/book/book_13.jpg'},
                {title: '从前有座灵剑山', author: '', publish: '', url:'/public/img/book/book_16.jpg'},
                {title: '西行纪', author: '', publish: '', url:'/public/img/book/book_14.jpg'},
                {title: '王牌御史', author: '', publish: '', url:'/public/img/book/book_15.jpg'},
                {title: '流星·蝴蝶·剑', author: '', publish: '', url:'/public/img/book/book_17.jpg'},
                {title: '就喜欢你看不惯我，又干不掉我的样子1', author: '', publish: '', url:'/public/img/book/book_12.jpg'},
                {title: '就喜欢你看不惯我，又干不掉我的样子2', author: '', publish: '', url:'/public/img/book/book_12.jpg'},
                {title: '就喜欢你看不惯我，又干不掉我的样子3', author: '', publish: '', url:'/public/img/book/book_12.jpg'},
                {title: '影子银行', author: '', publish: ''},
                {title: '大泡沫', author: '', publish: '', url:'/public/img/book/book_9.jpg'},
                {title: '起风了', author: '', publish: ''},
                {title: '请回答1998', author: '', publish: ''},
                {title: '美国独行', author: '', publish: ''},
                {title: '美国陷阱', author: '', publish: ''},
                {title: '隐秘战争', author: '', publish: ''},
                {title: '零和游戏', author: '', publish: ''},
                {title: '社交币', author: '', publish: ''},
            ]
        };
    }

    render() {
        return (<div className="section" id="particles-js">
            <div className="book-area">
                <div className="book-title">读万卷书，行万里路</div>
                <List
                    grid={{gutter: 16, column: 4}}
                    dataSource={this.state.data}
                    renderItem={item => (
                        <List.Item onClick={() => window.open('https://weread.qq.com')}>
                            <Card>
                                <div className="book-name">{item.title}</div>
                                <div className="book-author">{item.author}</div>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </div>)
    }

}