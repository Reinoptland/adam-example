import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200
  },
  footer: {
  	display: 'flex',
  	justifyContent: 'space-evenly'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 140,
  },
  formGroup: {
  	display: 'flex'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class UserRatingsField extends React.Component {

	state = {
	    minRating : '',
	    maxRating : '',
	    ratingOptions : [
				"1.0", "1.5", "2.0", "2.5", "3.0", "3.5", "4.0", "4.5", "5.0"
			]
  	};

  	continue = e => {
  		e.preventDefault();
  		this.props.nextStep();
  	};

  	back = e => {
	    e.preventDefault();
	    this.props.prevStep();
  	};

	render() {

		const { classes, values, handleChange } = this.props;
		const { ratingOptions } = this.state;

		return (
			<React.Fragment>
	    	<Header title={'Select User Rating'} />
	    	<form className={classes.root}>
	        <FormControl className={classes.formControl}>
	          <InputLabel htmlFor="min-rating">Minimum Rating</InputLabel>
	          <Select
	            value={values.minRating}
	            onChange={handleChange}
	            inputProps={{ name: 'minRating'}}
	          >
	            <MenuItem value="">
	              <em>None</em>
	            </MenuItem>
	            {ratingOptions.map(option => {
	            	return <MenuItem key={option} value={option}>
	            			<em>{option}</em>
	            			</MenuItem>
	            })}
	          </Select>
	         </FormControl>
	         <FormControl className={classes.formControl}>
	          <InputLabel htmlFor="max-rating">Maximum Rating</InputLabel>
	          <Select
	            value={values.maxRating}
	            onChange={handleChange}
	            inputProps={{ name: 'maxRating'}}
	          >
	            <MenuItem value="">
	              <em>None</em>
	            </MenuItem>
	            {ratingOptions.map(option => {
	            	return <MenuItem key={option} value={option}>
	            			<em>{option}</em>
	            			</MenuItem>
	            })}
	          </Select>
	         </FormControl>
        	</form>
        	<Footer
	          	back={this.back}
	          	forward={this.continue}
	          	/>
        	</React.Fragment>
        );
	}
}

UserRatingsField.propTypes = {
  classes: PropTypes.object.isRequired
};



export default withStyles(styles)(UserRatingsField);