import * as React from 'react';
import { withStyles, AppBar, Toolbar, Typography } from '@material-ui/core';

import style from './style';

interface IProps {
  title?: string;
  classes: any;
}
class Layout extends React.Component<IProps, {}>{
  render() {
    const { title, classes } = this.props;
    return (
      <AppBar position='static'>
        <Toolbar className={classes.toolBarStyle}>
          <Typography className={classes.textStyle} variant='body1'>{title || 'Demo Project'}</Typography>
        </Toolbar>
      </AppBar>
    )
  }
}
export default withStyles(style)(Layout);
