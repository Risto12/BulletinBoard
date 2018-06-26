import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import Edit from '@material-ui/icons/Edit';

let styles = theme => ({
 
  icon: {
    
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    color:grey[50],
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: grey[800],
    },
  },
});

function EditI(props) {
    

  const { classes } = props;
  let click = props.click
 
  if(typeof click !== "function"){
    click = () => {/*do nothing*/}
  }
  
  return (
  
      <Edit className={classes.iconHover} style={{ fontSize: "50px"}} onClick={click}/>
        
      
      
   
  );
}

EditI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditI);
