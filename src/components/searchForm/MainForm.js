import React from 'react';

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
			selectedGenres : [],
			minRating : '1.0',
			maxRating : '5.0',
			minYear : '1874',
			maxYear : '2019',
			sortBy : ''
		}
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
  	};

  	handleReleaseYear = name => event => {
    	this.setState({[name]: event.target.value});
	};


	render() {
		
		const { step } = this.state;
		const { selectedGenres, minRating, maxRating, minYear, maxYear, sortBy } = this.state;
		const values = { selectedGenres, minRating, maxRating, minYear, maxYear, sortBy };

		switch(step) {
			case 1:
			return <GenresField
					nextStep={this.nextStep}
					handleGenreSelection={this.handleGenreSelection}
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
					values={values} />
			default:
			return null;
		}
	}
}

export default MainForm;