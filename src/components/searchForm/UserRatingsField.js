import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
	userRatingWrapper: {
	    display: 'flex',
	    justifyContent: 'center',
	    alignItems: 'center',
	    height: 200
	},
	root: {
    ...theme.mixins.gutters(),
	    margin: '20px 20%',
	    paddingTop: theme.spacing.unit * 2,
	    paddingBottom: theme.spacing.unit * 2
  	},
  	footer: {
	  	display: 'flex',
	  	justifyContent: 'space-evenly'
  	},
  	formControl: {
	    margin: theme.spacing.unit,
	    minWidth: 140
  	},
  	formGroup: {
  		display: 'flex'
  	},
  	selectEmpty: {
    	marginTop: theme.spacing.unit * 2
  	}
});

class UserRatingsField extends React.Component {

	state = {
	    ratingOptions : [
				"1.0", "1.5", "2.0", "2.5", "3.0", "3.5", "4.0", "4.5", "5.0",
				"5.5", "6.0", "6.5", "7.0", "7.5", "8.0", "8.5", "9.0", "9.5", "10"
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
	    	<Paper className={classes.root} elevation={3}>
	    	<div className={classes.userRatingWrapper}>
	        <FormControl className={classes.formControl}>
	          <InputLabel htmlFor="min-rating">Minimum Rating</InputLabel>
	          <Select
	            value={values.minRating}
	            onChange={handleChange}
	            inputProps={{ name: 'minRating'}}
	          >
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
	            {ratingOptions.map(option => {
	            	return <MenuItem key={option} value={option}>
	            			<em>{option}</em>
	            			</MenuItem>
	            })}
	          </Select>
	         </FormControl>
	         </div>
        	<Footer
	          	back={this.back}
	          	forward={this.continue}
	          	/>

	        </Paper>
        	
        );
	}
}

UserRatingsField.propTypes = {
  classes: PropTypes.object.isRequired
};



export default withStyles(styles)(UserRatingsField);