import React from 'react';

import { header } from '../../styles/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import LocalMovies from '@material-ui/icons/LocalMovies';
import { withStyles } from '@material-ui/core/styles';

const Header = (props) => {

	const { classes } = props;

	return (
			<React.Fragment>
				<CssBaseline />
	        <AppBar position="static" className={classes.appBar}>
	          <Toolbar>
	            <LocalMovies className={classes.icon} />
	            <Typography variant="h6" color="inherit" noWrap>
	              Movie Selector
	            </Typography>
	          </Toolbar>
	        </AppBar>
	          </React.Fragment>
			);
}

export default (withStyles(header)(Header));