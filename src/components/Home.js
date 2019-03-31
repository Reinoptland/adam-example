import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { 
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchRandomMovies,
  fetchTrendingMovies
  } from '../actions';

import { styles } from './styles';
import Header from './header/Header';
import Footer from './footer/Footer';
import Carousel from './carousel/Carousel';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      showCarousel : false,
      count : 0,
      randomMovieId : '',
      redirectRandomMovie : false
    }
  }

  componentDidMount() {
    // Fetch movies for the movie carousel:
    this.fetchMovies();
  }

  componentDidUpdate(prevProps){
    // If all fetch has been completed show the data (count according to number of fetches):
    if(this.state.count === 3) {
      this.setState({showCarousel : true, count : 0});
    }
    if(prevProps.popularMovies !== this.props.popularMovies) {
      this.setState({count : this.state.count + 1});
    }
    if(prevProps.topRatedMovies !== this.props.topRatedMovies) {
      this.setState({count : this.state.count + 1});
    }
    if(prevProps.upcomingMovies !== this.props.upcomingMovies) {
      this.setState({count : this.state.count + 1});
    }

    // Check if fetchRandomMovies() has been called:
    if(prevProps.randomMovies !== this.props.randomMovies) {
      this.selectRandomMovie();
    }
  }

  fetchMovies = () => {
    this.props.fetchPopularMovies();
    this.props.fetchTopRatedMovies();
    this.props.fetchUpcomingMovies();
    this.props.fetchTrendingMovies();
  }

  getRandomMovie() {
    this.props.fetchRandomMovies();
  }

  selectRandomMovie() {
    const movieList = this.props.randomMovies;

    // Select a movieId from array (random number between 0 and 19)
    const randomMovieId = movieList[Math.floor(Math.random() * 19)].id;
    this.setState({randomMovieId, redirectRandomMovie : true});
  }

  render() {

  const { showCarousel, randomMovieId, redirectRandomMovie } = this.state;
  const { classes, configuration, popularMovies, topRatedMovies, upcomingMovies, trendingMovies } = this.props;

  return (
    <React.Fragment>
      {redirectRandomMovie ? <Redirect push to={`/movie/${randomMovieId}`} /> : null}
        <Header />
        <main>
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
                      <Link className={classes.link} to={`/search`} >
                        <Button variant="contained" color="primary">
                          Search for movies
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary" onClick={this.getRandomMovie.bind(this)}>
                        Pick a random movie
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          <div className={classes.mainContainer}>
            {/* End hero unit */}
            {!showCarousel ? <h1>Loading...</h1> :
              <React.Fragment>
              <Carousel title="Popular" config={configuration} movies={popularMovies} />
              <Carousel title="Top Rated" config={configuration} movies={topRatedMovies} />
              <Carousel title="Upcoming" config={configuration} movies={upcomingMovies} />
              </React.Fragment>
            }
          </div>
        </main>
        <Footer trendingMovies={trendingMovies} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  configuration : state.configuration,
  popularMovies : state.popularMovies,
  topRatedMovies : state.topRatedMovies,
  upcomingMovies : state.upcomingMovies,
  randomMovies : state.randomMovies,
  trendingMovies : state.trendingMovies
});

const mapDispatchToProps = dispatch => ({
  fetchPopularMovies: () => dispatch(fetchPopularMovies()),
  fetchTopRatedMovies: () => dispatch(fetchTopRatedMovies()),
  fetchUpcomingMovies: () => dispatch(fetchUpcomingMovies()),
  fetchRandomMovies: () => dispatch(fetchRandomMovies()),
  fetchTrendingMovies: () => dispatch(fetchTrendingMovies())
});

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));