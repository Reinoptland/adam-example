import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchGenres, collectSearchValues, fetchMovies } from '../../actions';

import GenresField from './GenresField';
import UserRatingsField from './UserRatingsField';
import ReleaseYearField from './ReleaseYearField';
import SortByField from './SortByField';
import Confirmation from './Confirmation';

class MainForm extends React.Component {

	constructor() {
		super();
		this.state = {
			step : 1,
			showForm : true,
			selectedGenres : [],
			genresArray : [],
			minRating : '1.0',
			maxRating : '5.0',
			minYear : '1874',
			maxYear : '2019',
			sortBy : 'Popularity Descending'
		}
	}

	componentDidMount() {
		//Fetch GenresArray from movieDB:
		const ApiKey = process.env.REACT_APP_API_KEY;

		//Collect genresArray inside state:
		axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}&language=en-US`)
			.then((response) => this.setState({genresArray : response.data.genres}));

		//Collect genresArray inside (Redux)store:
		this.props.fetchGenres();
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

		this.setState({showForm : false});
	}

	componentWillUnmount() {
		console.log('form unmounted');
	}


	render() {

		const { step, showForm, genresArray, selectedGenres,
				minRating, maxRating, minYear, maxYear, sortBy } = this.state;
		const values = { selectedGenres, minRating, maxRating, minYear, maxYear, sortBy };

		if(showForm) {

			switch(step) {
			case 1:
			return <GenresField
					handleGenreSelection={this.handleGenreSelection}
					nextStep={this.nextStep}
					genresArray={genresArray}
					values={values} />
			case 2:
			return <UserRatingsField
					handleChange={this.handleChange}
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					values={values} />
			case 3:
			return <ReleaseYearField
					handleReleaseYear={this.handleReleaseYear}
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					values={values} />
			case 4:
			return <SortByField
					handleChange={this.handleChange}
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					values={values} />
			case 5:
			return <Confirmation
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					searchMovies={this.searchMovies}
					values={values} />
			default:
			return null;
			}
		} else {
			return null;
		}
		
	}
}

const mapStateToProps = state => {
		return {genres : state.genresArray};
	};

export default connect(mapStateToProps, { fetchGenres, collectSearchValues, fetchMovies })(MainForm);