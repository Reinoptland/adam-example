import React from 'react';

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
	            {sortValues.map(option => {
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
			)
	}
}

export default withStyles(styles)(SortByField);