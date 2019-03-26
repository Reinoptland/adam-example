import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

// Define CSS styles:
const styles = theme => ({
	root: {
	    ...theme.mixins.gutters(),
	    margin: '20px 20%',
	    paddingTop: theme.spacing.unit * 2,
	    paddingBottom: theme.spacing.unit * 2,
  	},
  	formControl: {
	    margin: theme.spacing.unit * 3,
	    width: '100%'
  	},
  	formGroup: {
	  	display: 'block'
  	}
});

class GenresField extends React.Component {

	state = {
    errorText : ''
  	};

	componentDidUpdate(prevProps, prevState) {
		// If checkbox is clicked, remove errorText if needed:
		if(this.state.errorText && this.props.values.selectedGenres.length === 1) {
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
    const genres = this.props.genresArray;

    return (
    	<div>
	    	<Paper className={classes.root} elevation={1}>
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
	        </Paper>
        </div>
    );
  }
}

GenresField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GenresField);