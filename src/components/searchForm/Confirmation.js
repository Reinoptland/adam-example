import React from 'react';

import Header from './Header';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
  	display: 'flex',
  	width: '100%',
  	justifyContent: 'space-evenly'
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class Confirmation extends React.Component {

	search = e => {
  		e.preventDefault();
  		console.log(this.props.values);
  	};

  	back = e => {
	    e.preventDefault();
	    this.props.prevStep();
  	};

	render() {

		const { classes } = this.props;
		const { values : { selectedGenres, minRating, maxRating, minYear, maxYear, sortBy } } = this.props;
		return (
			<div className={classes.root}>
				<Header title={'Confirmation'} />
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
				<div className={classes.footer}>
	        	<Button
		          	variant="outlined"
		          	color="primary"
		          	className={classes.button}
		          	onClick={this.back}>
		          	Back
		          	</Button>
		          <Button
		          	variant="contained"
		          	color="primary"
		          	className={classes.button}
		          	onClick={this.search}>
		          	Search
		          	</Button>
	          </div>
			</div>
			);
	}
}

Confirmation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Confirmation);