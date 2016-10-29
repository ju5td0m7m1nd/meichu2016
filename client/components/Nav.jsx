'use strict'
/**
 * Created by caimingxun on 2016/10/29.
 */

import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {route} = this.props;
    return (
      <div className="nav">
        <div className="logo-block" onClick={() => window.location.href = '/'}>
          <img className="logo" src="public/images/eye_logo.png" />
          <div className="title" >Ad Review</div>
        </div>
      </div>
    )
  }

}