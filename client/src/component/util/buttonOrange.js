import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
const ButtonOrange = withStyles({
  root: {
    background: '#F86549',
    width: '102px',
    height: '52px',
  
    fontSize: '20px',
    color: '#fff'
  },
})(Button);
export default ButtonOrange;
