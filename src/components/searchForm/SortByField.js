import React from 'react';

import Footer from './Footer';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200
  },
  root: {
    ...theme.mixins.gutters(),
	    margin: '20px 20%',
	    paddingTop: theme.spacing.unit * 2,
	    paddingBottom: theme.spacing.unit * 2,
	    height: 350
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
			<Paper className={classes.root} elevation={3}>
	    	<form className={classes.container}>
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
        	</Paper>
			)
	}
}

export default withStyles(styles)(SortByField);