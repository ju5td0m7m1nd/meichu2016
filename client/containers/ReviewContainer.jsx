'use strict'
/**
 * Created by caimingxun on 2016/10/29.
 */

import React from 'react';
import Nav from '../components/Nav';
import AdGrid from '../components/AdGrid'

export default class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <Nav route="review"/>
        <div className="film">

        </div>
        <AdGrid subtitle="擦身而過" />
        <AdGrid subtitle="只有輕點一下" />
        <AdGrid subtitle="擦身而過" />
      </section>
    )
  }
}