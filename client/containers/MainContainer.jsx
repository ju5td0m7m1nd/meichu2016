'use strict'
/**
 * Created by caimingxun on 2016/10/29.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Nav from '../components/Nav';


import {connect} from 'react-redux';
import {push} from 'react-router-redux';

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: 1,
    }
  }

  componentDidMount() {
  }

  scrollToWhy = () => {
    const position = ReactDOM.findDOMNode(this.refs.why).getBoundingClientRect().top
      + window.pageYOffset;
    let currentTop = window.pageYOffset;
    let time = 10;
    while (currentTop < position) {
      time = time + (200 / time);
      currentTop += 1;
      ((y, t) => setTimeout(() => window.scrollTo(0, y), t))(currentTop, time);
    }
  }

  handleChange = (e, index, value) => this.setState({currentUser: value})

  render() {
    console.log(this.state.users);
    return (
      <section>
        <Nav route="/" user={this.state.currentUser} handleChange={this.handleChange}/>
        <div className="hero shadow-1">
          <img className="hero-image" src="public/images/1.png"/>
          <div className="content">
            <div className="slogan">
              <h1>用三分鐘，</h1>
              <h1>欣賞那些專門為您投遞的廣告</h1>
            </div>
            <div className="description">
              每天都有好幾十家公司在為了讓您看到最符合您的廣告而努力著
            </div>
            <div className="continue" onClick={this.scrollToWhy}>了解更多</div>
          </div>
        </div>
        <div className="why" ref="why">
          <div className="title">
            <h1>How it Works</h1>
          </div>
          <div className="flow-container">
            <div className="flow-chart shadow-2">
              <div className="icon-block">
                <img className="chart-icon" src="public/images/hacknctu_miss.png"/>
              </div>
              <h4>常常在瀏覽網站時，因為專注於網站的內容，而忽略了很多精心為您投遞廣告</h4>
            </div>
            <div className="flow-chart shadow-2">
              <div className="icon-block">
                <img className="chart-icon" src="public/images/hacknctu_collection.png"/>
              </div>
              <h4>我們蒐集了您的瀏覽記錄，幫您找回那些專門投遞給您的廣告</h4>
            </div>
            <div className="flow-chart shadow-2">
              <div className="icon-block">
                <img className="chart-icon" src="public/images/hacknctu_film.png"/>
              </div>
              <h4>我們將它們製作成一個動畫，您可以馬上回顧那些您可能錯過的優質廣告！</h4>
            </div>
          </div>
        </div>
        <div className="get-start shadow-1">
          <div className="title">
            <h1>廣告回顧</h1>
          </div>
          <div className="container">
            <div className="image-block">
              <img className="get-start-img" src="public/images/get_start.png"/>
            </div>
            <div className="content-block shadow-2">
              <h1>
                想知道和什麼優質的廣告擦身而過嗎
              </h1>
              <h4>
                我們透過您的瀏覽記錄，幫您整理出了所有曾經投放給您的廣告，將它們做成影片，您一定要看看！
              </h4>
              <div className="content">
                <RaisedButton
                  label="馬上回顧"
                  backgroundColor="#FFF"
                  labelColor="#FFC107"
                  onClick={() => this.props.dispatch(push(`/${this.state.currentUser}`))}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="share">
          <h2>
            和大家分享遇到了哪些廣告！
          </h2>
          <div className="content">
            <RaisedButton
              label="分享"
              backgroundColor="#FFF"
              labelColor="#FFC107"
            />
          </div>
        </div>
        <div className="footer shadow-1">
          扣頂大法師2 x ringo © 2016
        </div>
      </section>
    )
  }
}

export default connect()(MainContainer);
