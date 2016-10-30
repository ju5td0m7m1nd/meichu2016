'use strict'
/**
 * Created by caimingxun on 2016/10/29.
 */

import React from 'react';
import Nav from '../components/Nav';
import AdGrid from '../components/AdGrid'
import userArray from '../utils/userArray'
import CircularProgress from 'material-ui/CircularProgress';
export default class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      loading: false,
      users: userArray(),
      classification: {
        'none': [],
        'click': [],
        'buy': [],
        'both': [],
      }
    }
  }

  componentDidMount() {

    const data = this.setOrder();
    window.scrollTo(0, 0);
    this.setState({loading: true})
    $.ajax({
      method: 'POST',
      contentType: 'application/json',
      url: 'http://www.ju5td0m7m1nd.com:5000/video',
      data:JSON.stringify({ads: data}),
    })
      .done(
        result => {
          this.setState({done: true, loading: false})  
          console.log("DONE")
        }
      )
      .fail(
        () => console.log("Failed to get video")
      )
  }

  setOrder = () => {
    const user = this.props.params.userID;
    const {users} = this.state;
    let order = [];
    const classification = ({
      'none': [],
      'click': [],
      'buy': [],
      'both': [],
    });
    const data = []
    if (Object.keys(users).length) {
      order = Object.keys(users[user]).sort(
        (a, b) => users[user][b].length - users[user][a].length
      );
      const topAds = order.slice(0, 10);

      topAds.map(item => {
        const ad = users[user][item];
        if (ad.click === 0 && ad.buy === 0) {
          data.push({tag: 0, url: ad.adurl})
          classification['none'].push(ad)
        } else if (ad.click === 1 && ad.buy === 0) {
          data.push({tag: 2, url: ad.adurl})
          classification['click'].push(ad)
        } else if (ad.click === 0 && ad.buy === 1) {
          data.push({tag: 1, url: ad.adurl})
          classification['buy'].push(ad)
        } else if (ad.click === 1 && ad.buy === 1) {
          data.push({tag: 3, url: ad.adurl})
          classification['both'].push(ad)
        }
      })
    }

    this.setState({classification})

    return data;
  }

  render() {
    const user = this.props.params.userID;
    const {users, classification} = this.state;

    return (
      <section>
        <Nav route="review"/>
        <div className="film">
          { this.state.loading ? <CircularProgress size={80} thickness={5} /> : ''}
            { this.state.done ? 
              <video  loop autoPlay >
                <source src="public/flaskappmc216/holy.mp4" type="video/mp4" /> 
              </video>
            : '' } 
        </div>
        <div className="grid-container">
          <AdGrid subtitle="擦身而過" description="之前你可能忽略了這些廣告，但我們相信這些您可能會需要" ads={classification['none']}/>
          <AdGrid subtitle="曾經相遇" description="你看起來對這些很有興趣，我們幫你找了出來，讓你不會錯過任何東西" ads={classification['click']}/>
          <AdGrid subtitle="透過下列廣告購買更便宜！" description="我們發現你曾經購買這件商品，透過這個廣告將會更便宜" ads={classification['buy']}/>
          <AdGrid subtitle="感謝支持廣告和產品" description="我們發現你曾經透過這些廣告，購買了一些商品，我們會繼續努力提供你最需要的商品廣告"
                  ads={classification['both']}/>
        </div>
        <div className="footer shadow-1">
          扣頂大法師2 x ringo © 2016
        </div>
      </section>
    )
  }
}
