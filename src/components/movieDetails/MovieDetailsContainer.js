import React from 'react';
import { connect } from 'react-redux';

import { fetchMovieDetails, fetchMovieCredits, fetchMovieTrailer, fetchTrendingMovies } from '../../actions';

import { movieDetailsStyles } from '../../styles';

import Header from '../header/Header';
import MovieDetails from './MovieDetails';

import { withStyles } from '@material-ui/core/styles';

class MovieDetailsPageContainer extends React.Component {

	state = {
		count : 0,
		showDetails : false
	}

	componentDidMount() {
		// Fetch Data, pass id used in url:
		this.fetchData(this.props.match.params.id);
	}

	componentDidUpdate(prevProps) {
		// If all fetch has been completed show the data (count according to number of fetches):
		if(this.state.count === 3) {
      		this.setState({showDetails : true, count : 0});
    	}
		if(prevProps.movieData !== this.props.movieData) {
			this.setState({count : this.state.count + 1});
		}
		if(prevProps.movieCredits !== this.props.movieCredits) {
			this.setState({count : this.state.count + 1});
		}
		if(prevProps.movieTrailer !== this.props.movieTrailer) {
			this.setState({count : this.state.count + 1});
		}

    // Check to see if trending movie link has been clicked:
    if(prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchData(this.props.match.params.id);
      // Make sure the page will load at the top:
      window.scrollTo(0,0);
    }
	}

	fetchData(id) {
		this.props.fetchMovieDetails(id);
		this.props.fetchMovieCredits(id);
		this.props.fetchMovieTrailer(id);
    this.props.fetchTrendingMovies();
	}

	render() {

		const { showDetails } = this.state;
		const { classes, movieData, config, movieCredits, movieTrailer, trendingMovies } = this.props;

		return (
			<React.Fragment>
				<Header />
			        {!showDetails ? <div>loading...</div> :
			        <MovieDetails
			        classes={classes}
			        config={config}
			        movieData={movieData}
			        movieCredits={movieCredits}
			        movieTrailer={movieTrailer}
              trendingMovies={trendingMovies} />}
			</React.Fragment>
			);
	}
}

const mapStateToProps = state => ({
	config : state.configuration,
	movieData : state.movieDetails,
	movieCredits : state.movieCredits,
	movieTrailer : state.movieTrailer,
  trendingMovies : state.trendingMovies
});

const mapDispatchToProps = dispatch => ({
  fetchMovieDetails: id => dispatch(fetchMovieDetails(id)),
  fetchMovieCredits: id => dispatch(fetchMovieCredits(id)),
  fetchMovieTrailer: id => dispatch(fetchMovieTrailer(id)),
  fetchTrendingMovies: () => dispatch(fetchTrendingMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(movieDetailsStyles)(MovieDetailsPageContainer));