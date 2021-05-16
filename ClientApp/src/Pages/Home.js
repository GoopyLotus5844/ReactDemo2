import { Typography } from '@material-ui/core';
import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
          <div>
              <Typography style={{ fontFamily: 'Quicksand' }} variant="h2">Hello world!</Typography>
          </div>
    );
  }
}
