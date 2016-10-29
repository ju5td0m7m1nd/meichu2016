'use strict'
/**
 * Created by caimingxun on 2016/10/29.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Nav from '../components/Nav';


import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  scrollToWhy = () => {
    const position = ReactDOM.findDOMNode(this.refs.why).getBoundingClientRect().top
      + window.pageYOffset;
    let currentTop = window.pageYOffset;
    let time = 10;
    while( currentTop < position ) {
      time = time + (200/time);
      currentTop += 1;
      ((y, t) => setTimeout(() => window.scrollTo(0, y), t)
      )(currentTop, time);
    }
  }

  render() {
    return (
      <section>
        <Nav route="/" />
        <div className="hero shadow-1">
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
          <div className="flow-chart"></div>
          <div className="flow-chart"></div>
          <div className="flow-chart"></div>
        </div>
        <div className="get-start shadow-1">
          <h2>
            想知道和什麼優質的廣告擦身而過嗎
          </h2>
          <div className="content">
            <RaisedButton
              label="馬上回顧"
              backgroundColor="#FFF"
              labelColor="#FFC107"
              onClick={() => this.props.dispatch(push('/review'))}
            />
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
