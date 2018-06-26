import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import Clear from '@material-ui/icons/Clear';

const styles = theme => ({
 
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    color:grey[500],
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: grey[800],
    },
  },
});

function Cancel(props) {
  
  const { classes } = props;
  let click = props.click
 
  if(typeof click !== "function"){
    click = () => {/*do nothing*/}
  }
  
  return (
  
      <Clear className={classes.iconHover} style={{ fontSize: 30 }} onClick={click}/>
        
      
      
   
  );
}

Cancel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cancel);
