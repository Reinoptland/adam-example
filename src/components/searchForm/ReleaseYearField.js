import React from 'react';

import Header from './Header';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  footer: {
  	display: 'flex',
  	justifyContent: 'space-evenly'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const currentYear = new Date().getFullYear();

class ReleaseYearField extends React.Component {

	handleChange = name => event => {
    	this.setState({[name]: event.target.value});
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

		const { classes, values, handleReleaseYear } = this.props;

		return (
			<React.Fragment>
				<Header title={'Choose Release Year'} />
				  <form className={classes.container} noValidate autoComplete="off">
				  	<TextField
			          id="minimum-year"
			          label="Minimum Year"
			          placeholder={'1874'}
			          value={values.minYear}
			          onChange={handleReleaseYear('minYear')}
			          type="number"
			          className={classes.textField}
			          InputLabelProps={{
			            shrink: true
			          }}
			          inputProps={{
			          	min: "1874", max: `${currentYear}`, step: "1"
			          }}
			          margin="normal"
			          variant="outlined"
	        		/>
	        		<TextField
			          id="maximum-year"
			          label="Maximum Year"
			          placeholder={`${currentYear}`}
			          value={values.maxYear}
			          onChange={handleReleaseYear('maxYear')}
			          type="number"
			          className={classes.textField}
			          InputLabelProps={{
			            shrink: true
			          }}
			          inputProps={{
			          	min: "1874", max: `${currentYear}`, step: "1"
			          }}
			          margin="normal"
			          variant="outlined"
	        		/>
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
			);
	}
}

ReleaseYearField.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(ReleaseYearField);