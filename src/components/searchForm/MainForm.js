import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import GenresField from './GenresField';
import UserRatingsField from './UserRatingsField';
import ReleaseYearField from './ReleaseYearField';
import SortByField from './SortByField';
import Confirmation from './Confirmation';
import SearchResults from '../SearchResults';

class MainForm extends React.Component {

	constructor() {
		super();
		this.state = {
			step : 1,
			showForm : true,
			showSearchResults : false,
			selectedGenres : [],
			genresArray : [],
			minRating : '1.0',
			maxRating : '10',
			minYear : '1874',
			maxYear : '2019',
			sortBy : 'Popularity Descending'
		}
	}

	componentDidMount() {

		// Check if movies has already been fetched:
		if(this.props.movies.length > 0) {
			this.setState({showSearchResults : true});
		}
		//Fetch GenresArray from movieDB:
		const ApiKey = process.env.REACT_APP_API_KEY;

		//Collect genresArray inside state:
		axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}&language=en-US`)
			.then((response) => this.setState({genresArray : response.data.genres}));
	}

	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step : step + 1
		});
	}

	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step : step - 1
		});
	}

	handleGenreSelection = e => {
	  	const newSelection = e.target.value;
	  	let newSelectionArray;
			if(this.state.selectedGenres.indexOf(newSelection) > -1) {
				newSelectionArray = this.state.selectedGenres.filter(s => s !== newSelection);
			} else {
				newSelectionArray = [...this.state.selectedGenres, newSelection];
			}
			this.setState({selectedGenres : newSelectionArray});
  	}

  	handleChange = event => {
    	this.setState({ [event.target.name]: event.target.value });
  	}

  	handleReleaseYear = name => event => {
    	this.setState({[name]: event.target.value});
	}

	searchMovies = e => {
		e.preventDefault();

		const { selectedGenres, minRating, maxRating, minYear, maxYear, sortBy } = this.state;
		const values = { selectedGenres, minRating, maxRating, minYear, maxYear, sortBy };

		const sortValuesArray = [
					{id: 'popularity.asc', name : 'Popularity Ascending'},
					{id : 'popularity.desc', name : 'Popularity Descending'},
					{id : 'release_date.asc', name : 'Release Date Ascending'},
					{id : 'release_date.desc', name : 'Release Date Descending'},
					{id : 'vote_average.asc', name : 'User Rating Ascending' },
					{id : 'vote_average.desc', name : 'User Rating Descending'},
					{id : 'vote_count.asc', name : 'Number of Votes Ascending'},
					{id : 'vote_count.desc', name : 'Number of Votes Descending'}
				];

		let genres = [],
				sortById = '';

		sortValuesArray.forEach(sortValue => sortValue.name === values.sortBy ? sortById = sortValue.id : null);
		values.selectedGenres.forEach(genre => this.state.genresArray.forEach(option => option.name === genre ? genres.push(option.id) : null));

		this.props.fetchMovies(genres, values.minRating, values.maxRating, values.minYear, values.maxYear, sortById);

		this.setState({showSearchResults : true});
	}

	resetSearchForm = () => {
		this.setState({
			step : 1,
			showForm : true,
			selectedGenres : [],
			minRating : '1.0',
			maxRating : '10',
			minYear : '1874',
			maxYear : '2019',
			sortBy : 'Popularity Descending'
		});
	}

	componentWillUnmount() {
		console.log('form unmounted');
	}


	render() {

		const { step, showForm, showSearchResults, genresArray, selectedGenres,
				minRating, maxRating, minYear, maxYear, sortBy } = this.state;
		const values = { selectedGenres, minRating, maxRating, minYear, maxYear, sortBy };

		// Decide which form-field to show:
		let formField;
		if(showForm) {

			switch(step) {
			case 1:
			formField = <GenresField
					handleGenreSelection={this.handleGenreSelection}
					nextStep={this.nextStep}
					genresArray={genresArray}
					values={values} />
					break;
			case 2:
			formField = <UserRatingsField
					handleChange={this.handleChange}
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					values={values} />
					break;
			case 3:
			formField = <ReleaseYearField
					handleReleaseYear={this.handleReleaseYear}
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					values={values} />
					break;
			case 4:
			formField = <SortByField
					handleChange={this.handleChange}
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					values={values} />
					break;
			case 5:
			formField = <Confirmation
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					searchMovies={this.searchMovies}
					values={values}
					resetSearchForm={this.resetSearchForm} />
					break;
			default:
			return null;
			}
		}

		return (
			<React.Fragment>
			<Header />
			{formField}
			{showSearchResults ?
				<React.Fragment>
				<SearchResults />
				<Footer />
				</React.Fragment> : null}
			</React.Fragment>
			);
		
	}
}

const mapStateToProps = state => ({
	movies : state.searchResults
});


export default connect(mapStateToProps, { fetchMovies })(MainForm);