import React, { Component } from 'react';
import { connect } from 'react-redux';



class SearchResults extends Component {

	componentDidMount() {
		console.log(this.props);
	}

	render() {
	    return (
	    	<div>
	        	searchResults
	        </div>
	    );
  	}
}

const mapStateToProps = state => {
		return {searchResults : state.searchResults,};
	}

export default connect(mapStateToProps)(SearchResults);
