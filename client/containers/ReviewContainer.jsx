'use strict'
/**
 * Created by caimingxun on 2016/10/29.
 */

import React from 'react';
import Nav from '../components/Nav';
import AdGrid from '../components/AdGrid'
import userArray from '../utils/userArray'

export default class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
    }
  }

  componentDidMount() {
    this.setState({users: userArray()});
    window.scrollTo(0, 0);
  }

  render() {
    const user = this.props.params.userID;
    const {users} = this.state;
    let order = [];
    const classification = ({
      'none': [],
      'click': [],
      'buy': [],
      'both': [],
    });
    if (Object.keys(users).length) {
      order = Object.keys(users[user]).sort(
        (a, b) => users[user][b].length - users[user][a].length
      );
      const topAds = order.slice(0, 10);

      topAds.map(item => {
        const ad = users[user][item];
        if (ad.click === 0 && ad.buy === 0) {
          classification['none'].push(ad)
        } else if (ad.click === 1 && ad.buy === 0) {
          classification['click'].push(ad)
        } else if (ad.click === 0 && ad.buy === 1) {
          classification['buy'].push(ad)
        } else if (ad.click === 1 && ad.buy === 1) {
          classification['both'].push(ad)
        }
      })
    }
    return (
      <section>
        <Nav route="review"/>
        <div className="film">

        </div>
        <AdGrid subtitle="擦身而過" description="出現過在瀏覽過的網站" ads={classification['none']} />
        <AdGrid subtitle="曾經相遇" description="出現過在瀏覽過的網站" ads={classification['click']} />
        <AdGrid subtitle="透過下列廣告購買更便宜！" description="出現過在瀏覽過的網站" ads={classification['buy']} />
        <AdGrid subtitle="感謝支持廣告和產品" description="出現過在瀏覽過的網站" ads={classification['both']} />
        <div className="footer shadow-1">
          扣頂大法師2 x ringo © 2016
        </div>
      </section>
    )
  }
}