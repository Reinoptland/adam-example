import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchConfiguration } from './actions';

import Home from './components/Home';


class App extends Component {

	state = {
		showSearchResults : false,
		showMainForm : true
	}

	componentDidMount() {
		//Fetch MovieDB Configuration:
		this.props.fetchConfiguration();
	}

	componentDidUpdate(prevProps, prevState){
		// If searchForm has been completed show the SearchResults:
		if(prevProps.searchResults !== this.props.searchResults) {
			this.setState({showSearchResults : true, showMainForm : false});
		}
	}

	/*
	<div style={{width: '50%', margin: '0 auto'}}>
	        {this.state.showMainForm ? <MainForm /> : null}
	        {this.state.showSearchResults ? <SearchResults /> : null}
	        </div>
	*/

	render() {
	    return (
	    	<Home />
	    );
  	}
}

const mapStateToProps = state => ({
	configuration : state.configuration,
	searchResults : state.searchResults
});

const mapDispatchToProps = dispatch => ({
  fetchConfiguration: url => dispatch(fetchConfiguration())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
