import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPopularMovies } from '../actions';

import { styles } from './styles';
import Carousel from './carousel/Carousel';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import LocalMovies from '@material-ui/icons/LocalMovies';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      showCarousel : false
    }
  }

  componentDidMount() {
    this.fetchMovies();

  }

  componentDidUpdate(prevProps){
    // If fetch has been completed show the data:
    if(prevProps.popularMovies !== this.props.popularMovies) {
      this.setState({showCarousel : true});
    }
  }

  fetchMovies = () => {
    this.props.fetchPopularMovies();
  }

  render() {

  const { showCarousel } = this.state;
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
        <main>
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
          <div>
            {/* End hero unit */}
            {!showCarousel ? <h1>Loading...</h1> :
              <React.Fragment>
              <Carousel popularMovies={this.props.popularMovies} />
              <Carousel popularMovies={this.props.popularMovies} />
              <Carousel popularMovies={this.props.popularMovies} />
              </React.Fragment>
            }
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  configuration : state.configuration,
  popularMovies : state.popularMovies
});

const mapDispatchToProps = dispatch => ({
  fetchPopularMovies: url => dispatch(fetchPopularMovies())
});

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));