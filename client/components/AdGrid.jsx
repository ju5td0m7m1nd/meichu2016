'use strict'
/**
 * Created by caimingxun on 2016/10/29.
 */
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class AdGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ad-grid">
        <div>
          <GridList
            cellHeight={180}
          >
            <Subheader>{this.props.subtitle}</Subheader>
            {[1,2,3,4].map((tile) => (
              <GridTile
                key={tile}
                title={tile}
                subtitle={<span>tile</span>}
              >
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    )
  }
}

export default AdGrid;