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

class GenresField extends React.Component {

	state = {
    genres : []
  };

  componentDidMount() {
		// Fetch genres from theMovieDb:
			axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=36a5d44b2c49ac8525928003d3750b0c&language=en-US')
			.then((response) => this.setState({genres : response.data.genres}));
	}

  continue = e => {
  	e.preventDefault();
  	this.props.nextStep();
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