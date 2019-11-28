import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import TimeIcon from '@material-ui/icons/AccessTime';
//
//import { BrowserRouter as Router, Route } from 'react-router-dom'



const styles = theme => ({
  title: {
    fontSize: 24,
  },
  placeholder:  toolbarStyles(theme).root, 
  color: theme.palette.common.pink,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  icon: {
    marginRight: theme.spacing(2)
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.rightLink}>
        
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/"
          >
            {'T8KIT '}
            <TimeIcon className={classes.icon} />  
          </Link>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/SignIn"
            >
              {'Ingresar'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/SignUp"
             
            >
              {'Registrate'}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

//AppAppBar.propTypes = {
//  classes: PropTypes.object.isRequired,
//;
AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
//class AppAppBar extends Component {
//  static propTypes ={
//children:  PropTypes.object.isRequired

 

export default withStyles(styles)(AppAppBar);
