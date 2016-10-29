'use strict'
/**
 * Created by caimingxun on 2016/10/29.
 */
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';


class AdGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ad-grid">
        <div>{
          this.props.ads.length ? <GridList
            cellHeight={360}
          >
            <Subheader style={{fontSize: '32px'}}>{this.props.subtitle}</Subheader>
            <Subheader style={{fontSize: '16px'}}>{this.props.description}</Subheader>
            {
              this.props.ads.map((tile, key) => (
                <GridTile
                  key={key}
                  title={tile.itemname}
                  subtitle={<span>{tile.description}</span>}
                  style = {{
                    lineHeight: '2'
                  }}
                >
                  <img src={tile.adurl} />
                </GridTile>
              ))
            }
          </GridList> : ''
        }
        </div>
      </div>
    )
  }
}

export default AdGrid;