import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

// Define CSS styles:
const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit * 3,
    width: '100%'
  },
  formGroup: {
  	display: 'flex',
  	height: 200
  }
});

const ApiKey = process.env.REACT_APP_API_KEY;

class GenresField extends React.Component {

	state = {
    genres : [],
    errorText : ''
  	};

  	componentDidMount() {
		// Fetch genres from theMovieDb:
			axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}&language=en-US`)
			.then((response) => this.setState({genres : response.data.genres}));
	}

	componentDidUpdate(prevProps, prevState) {
		// If checkbox is clicked, remove errorText if needed:
		if(this.state.errorText && this.props.values.selectedGenres.length === 1) {
			console.log('errortext is being removed!');
			this.setState({errorText : ''});
		}
	}

	validate() {
		let isError = false, errorText = '';

		// Check to see if no checkboxes are selected:
		if(this.props.values.selectedGenres.length === 0) {
			isError = true;
			errorText = 'You need to select at least one genre!';
		}

		this.setState({errorText});

		return isError;
	}

	continue = e => {
	  	e.preventDefault();
	  	const err = this.validate();
	  	
	  	if(!err) {
	  		this.props.nextStep();
	  	}
	  	
  	}



  	render() {
    
    const { classes, values, handleGenreSelection } = this.props;
    const { genres } = this.state;

    return (
    	<React.Fragment>
	    	<Header title={'Select Genres'} />
	        <FormControl className={classes.formControl} required={true}>
	          <FormGroup className={classes.formGroup}>
	          	{genres.map(genre => {
	          		return <FormControlLabel
	          				control={
	          					<Checkbox
	          						checked={values.selectedGenres.indexOf(genre.name) > -1}
	          						onChange={handleGenreSelection}
	          						value={genre.name} />
	          				}
	          				key={genre.id}
	          				label={genre.name} />
	          	})}
	          </FormGroup>
	          <Typography variant="body1" color="error" align="right" gutterBottom>
	          {this.state.errorText}
	          </Typography>
	          <Footer
	          	noBack={true}
	          	forward={this.continue}
	          	/>
	        </FormControl>
        </React.Fragment>
    );
  }
}

GenresField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GenresField);