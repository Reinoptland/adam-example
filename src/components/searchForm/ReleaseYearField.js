import React from 'react';

import Footer from './Footer';

import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
	    	flexDirection: 'column'
	    }
  },
  root: {
    ...theme.mixins.gutters(),
	    margin: '20px 20%',
	    paddingTop: theme.spacing.unit * 2,
	    paddingBottom: theme.spacing.unit * 2,
	    height: 350
  	},
  title: {
  	[theme.breakpoints.down('sm')]: {
  			fontSize: '1em',
  			textAlign: 'center'
  		}
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
				<Paper className={classes.root} elevation={3}>
					<h2 className={classes.title}>Choose Release Year</h2>
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
				  <Footer
		          	back={this.back}
		          	forward={this.continue}
	          		/>
	         	</Paper>
				);
	}
}

ReleaseYearField.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(ReleaseYearField);