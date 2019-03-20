import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMovies } from '../actions';

class SearchResults extends Component {

	componentDidMount() {
		this.props.fetchMovies();
	}

	componentDidUpdate() {
		console.log(this.props);
	}

	render() {
	    return (
	    	<div>
	        SearchResults
	        </div>
	    );
  	}
}

const mapStateToProps = state => {
		console.log('mapStateToProps:',state)
		return {SearchResults : state.SearchResults};
	}

export default connect(mapStateToProps, { fetchMovies })(SearchResults);
