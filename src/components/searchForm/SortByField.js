import React from 'react';

import Header from '../Header';

import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

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

class SortByField extends React.Component {

	state = {
		sortValues : [
				'Popularity Ascending', 'Popularity Descending',
				'Release Date Ascending', 'Release Date Descending',
				'Original Title Ascending', 'Original Title Descending',
				'User Rating Ascending', 'User Rating Descending',
				'Number of Votes Ascending', 'Number of Votes Descending']
	}


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
		const { sortValues } = this.state;

		return (
			<React.Fragment>
	    	<Header title={'Select Sort Value'} />
	    	<form className={classes.root}>
	        <FormControl className={classes.formControl}>
	          <InputLabel htmlFor="sort-value">Sort By</InputLabel>
	          <Select
	            value={values.sortBy}
	            onChange={handleChange}
	            inputProps={{ name: 'sortBy'}}
	          >
	            <MenuItem value="">
	              <em>None</em>
	            </MenuItem>
	            {sortValues.map(option => {
	            	return <MenuItem key={option} value={option}>
	            			<em>{option}</em>
	            			</MenuItem>
	            })}
	          </Select>
	         </FormControl>
        	</form>
        	<div className={classes.footer}>
	        	<Button
		          	variant="contained"
		          	color="primary"
		          	className={classes.button}
		          	onClick={this.back}>
		          	Back
		          	</Button>
		          <Button
		          	variant="contained"
		          	color="primary"
		          	className={classes.button}
		          	onClick={this.continue}>
		          	Next
		          	</Button>
	          </div>
        	</React.Fragment>
			)
	}
}

export default withStyles(styles)(SortByField);