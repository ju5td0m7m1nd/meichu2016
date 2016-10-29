'use strict';
/**
 * Created by Ben Hu on 2016/5/18.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';

// Handle Tap Event
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {children, open, msg, error} = this.props;
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div>
            {
              children
            }
            <Snackbar
              open={open}
              message={msg}
              autoHideDuration={3000}
              bodyStyle={
                !error ? {
                  background: 'rgb(0, 188, 212)',
                } : {
                  background: 'rgb(255, 64, 129)'
                }
              }
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.user.auth,
  userInfo: state.user.userInfo,
  msg: state.toast.msg,
  open: state.toast.open,
  error: state.toast.error,
});

export default connect(mapStateToProps)(App);
