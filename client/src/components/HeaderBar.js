import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const headerStyle = {
  background:
    'linear-gradient(#00d4ff, #91ecff)',
  color: 'white',
};

class HeaderBar extends Component {
  render() {
    return (
      <div className="header">
        <AppBar position="static" color="default" style={headerStyle}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              {this.props.title.pageTitle}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default HeaderBar;
