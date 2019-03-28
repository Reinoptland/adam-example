import React from 'react';
import { connect } from 'react-redux';

import { fetchMovieDetails } from '../../actions';

import Header from '../header/Header';
import MovieDetails from './MovieDetails';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
    backgroundSize: 'cover !important',
    height: 350
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

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
		if(this.state.count === 2) {
      		this.setState({showDetails : true, count : 0});
    	}
		if(prevProps.movieData !== this.props.movieData) {
			this.setState({count : this.state.count + 1});
		}
		if(prevProps.config !== this.props.config) {
			this.setState({count : this.state.count + 1})
		}
	}

	fetchData(id) {
		this.props.fetchMovieDetails(id);
	}

	render() {

		const { showDetails } = this.state;
		const { classes, movieData, config } = this.props;

		return (
			<React.Fragment>
				<Header />
			        {!showDetails ? <div>loading...</div> :
			        <MovieDetails
			        classes={classes}
			        config={config}
			        movieData={movieData} />}
			</React.Fragment>
			);
	}
}

const mapStateToProps = state => ({
	config : state.configuration,
	movieData : state.movieDetails
});

const mapDispatchToProps = dispatch => ({
  fetchMovieDetails: id => dispatch(fetchMovieDetails(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MovieDetailsPageContainer));