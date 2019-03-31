import React from 'react';
import { Link } from 'react-router-dom';

import { header } from '../../styles/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import LocalMovies from '@material-ui/icons/LocalMovies';
import Search from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

const Header = (props) => {

	const { classes } = props;

	return (
			<React.Fragment>
				<CssBaseline />
	        <AppBar position="static" className={classes.appBar}>
	          <Toolbar className={classes.link}>
	          	<Link to={`/`}>
	            <LocalMovies className={classes.icon} />
	            <Typography variant="h6" color="inherit" noWrap>
	              Movie Selector
	            </Typography>
	            </Link>
	          </Toolbar>
	          <nav className={classes.navBar}>
	          	<ul>
	          		<li><Link to={`/search`}>Search<Search /></Link></li>
	          	</ul>
	          </nav>
	        </AppBar>
	          </React.Fragment>
			);
}

export default (withStyles(header)(Header));