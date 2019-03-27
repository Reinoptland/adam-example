import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchConfiguration } from './actions';

import Home from './components/Home';
import MainForm from './components/searchForm/MainForm';
import MovieDetailsContainer from './components/movieDetails/MovieDetailsContainer';
import PageNotFound from './components/pageNotFound';

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
	    	<React.Fragment>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/search' component={MainForm} />
				<Route path='/movie/:id' component={MovieDetailsContainer} />
				<Route component={PageNotFound} />
			</Switch>
			</React.Fragment>
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
