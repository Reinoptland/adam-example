import React from 'react';
import { Link } from 'react-router-dom';

import themoviedbLogo from '../../imgs/themoviedbLogo.png';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/icons/Menu';
import TrendingUp from '@material-ui/icons/TrendingUp';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	footer: {
	    backgroundColor: theme.palette.background.paper,
	    padding: theme.spacing.unit * 6
  	},
    navContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& a': {
        color: '#3f51b5',
        textDecoration: 'none',
        textTransform: 'uppercase'
      }
    },
    gridHeader: {
      display: 'inline-flex'
    },
    headerIcon: {
      alignSelf: 'center'
    },
    title: {
      color: '#3f51b5',
      textTransform: 'uppercase',
      marginLeft: 10
    },
    avatar: {
      width: 25,
      height: 25,
      fontStyle: 'italic'
    },
    themoviedbLogo: {
      width: 190,
      float: 'right'
    },
    copyright: {
      textAlign: 'center'
    },
    trendingList: {
      display: 'flex',
      flexDirection: 'column',
      '& a': {
        color: '#3f51b5',
        textDecoration: 'none'
      }
    }
});

const today = new Date();
const year = today.getFullYear();

const Footer = (props) => {

	const { classes, trendingMovies } = props;

	return (
		<footer className={classes.footer}>
          <Grid container spacing={24}>
            <Grid className={classes.navContainer} item xs={5}>
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
            <Grid item xs={5}>
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
                        <Link to={`/movie/${movie.id}`}>
                        <ListItem key={i} button>
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
            <Grid item xs={2}>
              <Paper className={classes.paper}><a href="#"><img className={classes.themoviedbLogo} src={themoviedbLogo} alt="TMDB Logo"/></a></Paper>
            </Grid>
            <Grid className={classes.copyright} item xs={12}>
                <p>Copyright &copy; {year} - Code and design by <a href="#" target="_blank" rel="noopener noreferrer">Adam Trincas</a></p>
            </Grid>
          </Grid>
        </footer>
		);
}

export default withStyles(styles)(Footer);