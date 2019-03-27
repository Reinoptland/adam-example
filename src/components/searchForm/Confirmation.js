import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import CheckIcon from '@material-ui/icons/Check';


const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
	    ...theme.mixins.gutters(),
	    margin: '20px 20%',
	    paddingTop: theme.spacing.unit * 2,
	    paddingBottom: theme.spacing.unit * 2,
	    height: 350
  	},
  footer: {
  	display: 'flex',
  	width: '100%',
  	justifyContent: 'space-evenly'
  },
   wrapper: {
    margin: theme.spacing.unit,
    position: 'relative'
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    }
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class Confirmation extends React.Component {

	state = {
		loading: false,
		succes: false
	}

  	back = e => {
	    e.preventDefault();
	    this.props.prevStep();
  	};

  	handleButtonClick = () => {
	    if (!this.state.loading) {
	      this.setState(
	        {
	          success: false,
	          loading: true,
	        },
	        () => {
	          this.timer = setTimeout(() => {
	            this.setState({
	              loading: false,
	              success: true,
	            });
	          }, 2000);
	        },
	      );
	    }
	};

	render() {

		const { classes, searchMovies, searchCompleted, resetSearchForm } = this.props;
		const { values : { selectedGenres, minRating, maxRating, minYear, maxYear, sortBy } } = this.props;
		const { loading, success } = this.state;
    	const buttonClassname = classNames({[classes.buttonSuccess]: success});

		return (
			<Paper className={classes.root} elevation={3}>
			<div className={classes.container}>
				<List component="nav" className={classes.list}>
					<ListItem button>
						<ListItemText
							primary="Genres"
							secondary={selectedGenres.join()} />
					</ListItem>
					<ListItem button>
						<ListItemText
							primary="User Rating"
							secondary={`${minRating} to ${maxRating}`} />
					</ListItem>
					<ListItem button>
						<ListItemText
							primary="Release Year"
							secondary={`${minYear} to ${maxYear}`} />
					</ListItem>
					<Divider />
					<ListItem button>
						<ListItemText
							primary="Sort By"
							secondary={sortBy} />
					</ListItem>
				</List>
				{}
				<div className={classes.footer}>
				<div className={classes.wrapper}>
	        	<Button
		          	variant="outlined"
		          	color="primary"
		          	className={classes.button}
		          	onClick={!success ? this.back : resetSearchForm}>
		          	{success ? 'New Search' : 'Back'}
		          	</Button>
		          	{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
		         </div>
		          <div className={classes.wrapper}>
		          <Button
		          	variant="contained"
		          	color="secondary"
		          	size="large"
		          	className={buttonClassname}
		          	disabled={loading}
		          	onClick={!success ? this.handleButtonClick.bind(this) : null}>
		          	{success ? <CheckIcon /> : 'Search'}
		          	</Button>
		          	{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
		          </div>
	          </div>
			</div>
			</Paper>
			);
	}
}

Confirmation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Confirmation);