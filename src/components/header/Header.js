import React from 'react';
import { Link } from 'react-router-dom';

import { header } from '../../styles/styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LocalMovies from '@material-ui/icons/LocalMovies';
import { withStyles } from '@material-ui/core/styles';

class Header extends React.Component {

	constructor() {
		super();
		this.state = {
		}
	}

	render() {

		const { classes } = this.props;

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
	          {/* Hero unit */}
	          <div className={classes.heroUnit}>
	            <div className={classes.heroContent}>
	              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
	                Movie Selector
	              </Typography>
	              <Typography variant="h6" align="center" color="textSecondary" paragraph>
	                Something short and leading about the collection below—its contents, the creator, etc.
	                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
	                entirely.
	              </Typography>
	              <div className={classes.heroButtons}>
	                <Grid container spacing={16} justify="center">
	                  <Grid item>
	                    <Button variant="contained" color="primary">
	                      Search for movies
	                    </Button>
	                  </Grid>
	                  <Grid item>
	                    <Button variant="outlined" color="primary">
	                      Random Search
	                    </Button>
	                  </Grid>
	                </Grid>
	              </div>
	            </div>
	          </div>
	          </React.Fragment>
			);
	}
}

export default (withStyles(header)(Header));