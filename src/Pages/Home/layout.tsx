import * as React from 'react';
import { withStyles, Typography, Input, Button } from '@material-ui/core';
import style from './style';
import Header from '../../Component/Header/layout';

interface IProps {
  classes: any;
}
interface IState {

}
class Layout extends React.Component<IProps, IState>{
  handleLogin = () => {
    alert('hello')
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <div className={classes.container}>
          <Typography variant='h4' className={classes.loginText}>Login</Typography>
          <form onSubmit={this.handleLogin}>
            <div className={classes.inputContainer}>
              <Input
                className={classes.Input}
                id="component-helper"
                aria-describedby="component-helper-text"
                placeholder="Enter your username"
              />
              <Input
                className={classes.Input}
                id="component-helper"
                aria-describedby="component-helper-text"
                placeholder="Enter your password"
              />
              <Button>login</Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default withStyles(style)(Layout);