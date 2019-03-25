import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from './components/Home';


class App extends Component {

	state = {
		showSearchResults : false,
		showMainForm : true
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

const mapStateToProps = state => {
		return {searchResults : state.searchResults};
	}

export default connect(mapStateToProps,)(App);
