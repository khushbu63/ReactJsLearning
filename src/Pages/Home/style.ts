import { Theme } from '@material-ui/core';
const style = (theme: Theme): any => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: theme.spacing() * 10,
    flexDirection: 'column'
  },
  loginText: {
    fontWight: 'bold'
  },
  input: {
    width: theme.spacing() * 40
  },
  inputContainer: {
    flexDirection: 'column'
  }
})
export default style;