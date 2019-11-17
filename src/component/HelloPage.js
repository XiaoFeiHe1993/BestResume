import React, {Component} from 'react';
import AvatarEditor from 'react-avatar-editor';

export default class HelloPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (<div className="section" id="particles-js">
            <div className="hello-book">
                <a href="/book" className="hello-book" style={{color: 'white'}}>书籍</a>
                <a href="/city" className="hello-city" style={{marginRight: 100, color: 'white'}}>旅行</a>
            </div>
            <div className='hello-parent'>
                <div className='hello-left'>
                    <div>用代码改变世界，用双手改变人生。</div>
                    <div style={{marginBottom:'50px'}}>so beautiful，so love。</div>
                        <AvatarEditor
                        image={require("../assets/screen/icon_header.jpg")}
                        width={100} height={100}
                        borderRadius={100}
                        color={[40, 48, 75, 1]}
                        border={0}
                        scale={1}
                    />
                    <div style={{marginTop:'50px'}}>我叫和肖飞</div>
                    <div>I Am Waiting For You。</div>
                </div>
            </div>
        </div>)
    }
}