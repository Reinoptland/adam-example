import React from 'react';
import { Link } from 'react-router-dom';

import TMDBLogo from '../../imgs/TMDBLogo.svg';

import { footer } from '../../styles/';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/icons/Menu';
import TrendingUp from '@material-ui/icons/TrendingUp';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const today = new Date();
const year = today.getFullYear();

const Footer = (props) => {

	const { classes, trendingMovies } = props;

	return (
		<footer className={classes.footer}>
          <Grid container className={classes.gridContainer}>
            <Grid className={classes.navContainer}>
              <div className={classes.gridHeader}>
                <Menu className={classes.headerIcon} color="primary" />
                <Typography variant="h6" className={classes.title}>
                  Navigation
                </Typography>
              </div>
              <List className={classes.navList} dense={true}>
                  <ListItem button>
                    <Link to={`/`}><ListItemText primary="Home" /></Link>
                  </ListItem>
                  <ListItem button>
                    <Link to={`/`}><ListItemText primary="About" /></Link>
                  </ListItem>
                  <ListItem button>
                    <Link to={`/search`}><ListItemText primary="Search" /></Link>
                  </ListItem>
              </List>
            </Grid>
            <Grid className={classes.trendingContainer}>
              <div className={classes.gridHeader}>
                <TrendingUp className={classes.headerIcon} color="primary" />
                <Typography variant="h6" className={classes.title}>
                  Trending Movies
                  </Typography>
              </div>
                  <List className={classes.trendingList} dense={true}>
                    {trendingMovies ? trendingMovies.map((movie, i) => {
                      if(i < 5) {
                        return (
                        <Link key={i} to={`/movie/${movie.id}`}>
                        <ListItem button>
                          <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                            {i === 0 ? '1' : i + 1}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={movie.title}
                          />
                        </ListItem>
                        </Link>
                        )
                      } else {
                        return null
                      }
                      }) : null}
                  </List>
            </Grid>
            <Grid className={classes.logoContainer}>
              <img className={classes.themoviedbLogo} src={TMDBLogo} alt="TMDB Logo"/>
            </Grid>
            <Grid className={classes.copyrightContainer}>
                <p style={{color : '#3f51b5'}}>Copyright &copy; {year} - Code and design by <a href="https://github.com/atrincas" target="_blank" rel="noopener noreferrer">Adam Trincas</a></p>
            </Grid>
          </Grid>
        </footer>
		);
}

export default withStyles(footer)(Footer);
