'use strict'
/**
 * Created by caimingxun on 2016/10/29.
 */

import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {route} = this.props;
    return (
      <div className="nav shadow-1">
        <div className="logo-block" onClick={() => window.location.href = '/'}>
          <img className="logo" src="public/images/eye_logo.png" />
          <div className="title" >Ad Review</div>
        </div>
        {
          route === '/' ?  <SelectField
            value={this.props.user}
            onChange={this.props.handleChange}

          >
            <MenuItem value={1} primaryText="User A" />
            <MenuItem value={2} primaryText="User B" />
            <MenuItem value={3} primaryText="User C" />
          </SelectField> : ''
        }
      </div>
    )
  }

}