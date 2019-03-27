import React from 'react';
import { connect } from 'react-redux';

import { fetchMovieDetails } from '../../actions';

import Header from '../header/Header';
import MovieDetails from './MovieDetails';

class MovieDetailsPageContainer extends React.Component {

	state = {
		showDetails : false
	}

	componentDidMount() {
		// Fetch Data, pass id used in url:
		this.fetchData(this.props.match.params.id);
	}

	componentDidUpdate(prevProps) {
		// Check if fetch movie details is complete, than render data:
		if(prevProps.movieData !== this.props.movieData) {
			this.setState({showDetails : true});
		}
	}

	fetchData(id) {
		this.props.fetchMovieDetails(id);
	}

	render() {

		const { showDetails } = this.state;
		const { movieData } = this.props;

		return (
			<React.Fragment>
			{!showDetails ? <div>loading...</div> :
			<React.Fragment>
				<Header />
				<MovieDetails movieData={movieData} />
			</React.Fragment>
			}
			</React.Fragment>
			);
	}
}

const mapStateToProps = state => {
	return { movieData : state.movieDetails}
}

const mapDispatchToProps = dispatch => ({
  fetchMovieDetails: id => dispatch(fetchMovieDetails(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPageContainer);