import React, { Component } from "react";
import { List, Card } from "antd";

export default class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { img: "../assets/city/微信图片_20191117153329.jpg" },
        { img: "../assets/city/微信图片_20191117153341.jpg" }
      ]
    };
  }

  render() {
    return (
      <div className="section" id="particles-js">
        <div className="book-area">
          <div className="book-title">行万里路</div>
          <Card>
            <img src={require("../assets/city/微信图片_20191117153329.jpg")} style={{width: '80%'}}/>
          </Card>
          <Card style={{marginTop: 20}}>
            <img src={require("../assets/city/微信图片_20191117153341.jpg")} style={{width: '80%'}}/>
          </Card>
        </div>
      </div>
    );
  }
}
