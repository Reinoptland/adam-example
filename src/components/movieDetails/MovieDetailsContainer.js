import React from 'react';
import { connect } from 'react-redux';

import { fetchMovieDetails, fetchMovieCredits } from '../../actions';

import Header from '../header/Header';
import MovieDetails from './MovieDetails';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  headerMovieDetails: {
    backgroundSize: 'cover !important',
    height: 350
  },
  infoContainer: {
  	color: '#fff',
  	display: 'grid',
  	gridGap: '10px',
  	gridTemplateColumns: '100px 1fr',
  	position: 'absolute',
  	marginTop: '150px'
  },
  infoImg: {
  	borderRadius: '25px',
  	padding: '20px'
  },
  infoDetails: {
  	fontSize: '.9rem',
  	height: '140px',
  	lineHeight: 'normal',
  	padding: '20px'
  },
  mainContainer: {
  	[theme.breakpoints.down('sm')]: {
      padding: '1rem'
    },
  	[theme.breakpoints.up('sm')]: {
      padding: '2rem 4rem'
    },
    [theme.breakpoints.up('700px')]: {
      padding: '4rem'
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
      maxWidth: '70%'
    }
  },
  summaryContainer: {
  	padding: '10px'
  },
  summaryTitle: {
  	margin: '5px'
  },
  avatarWrapper: {
  	flexBasis: '15%'
  },
  avatar: {
  	margin: 20,
  	width: 80,
  	height: 80
  },
  avatarCharacterName: {
  	fontSize: 14,
  	margin: '0.5em 0',
  	fontWeight: 500
  },
  avatarPersonName: {
  	fontSize: 12
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

class MovieDetailsPageContainer extends React.Component {

	state = {
		count : 0,
		showDetails : false
	}

	componentDidMount() {
		// Check to see if config en movieData is already been fetched:
		if(!(Object.keys(this.props.config).length === 0)
			&& !(Object.keys(this.props.movieData).length === 0)) {
			console.log('didmount, all data is alreay been fetched!')
		this.setState({showDetails : true});
		}
		// Fetch Data, pass id used in url:
		this.fetchData(this.props.match.params.id);
	}

	componentDidUpdate(prevProps) {
		console.log(this.props);
		// If all fetch has been completed show the data (count according to number of fetches):
		if(this.state.count === 3) {
      		this.setState({showDetails : true, count : 0});
    	}
		if(prevProps.movieData !== this.props.movieData) {
			console.log('count inside movieData')
			this.setState({count : this.state.count + 1});
			// Check if configuration is alreaded fetched:
			if(!(Object.keys(this.props.config).length === 0 && this.props.config.constructor === Object)) {
				this.setState({showDetails : true});
			}
		}
		if(prevProps.config !== this.props.config) {
			console.log('count inside config')
			this.setState({count : this.state.count + 1});
			// Check if movieData is alreaded fetched:
			if(!(Object.keys(this.props.movieData).length === 0 && this.props.movieData.constructor === Object)) {
				this.setState({showDetails : true});
			}
		}
		if(prevProps.movieCredits !== this.props.movieCredits) {
			console.log('count inside movieCredits')
			this.setState({count : this.state.count + 1});
		}
	}

	fetchData(id) {
		this.props.fetchMovieDetails(id);
		this.props.fetchMovieCredits(id);
	}

	render() {

		const { showDetails } = this.state;
		const { classes, movieData, config, movieCredits } = this.props;

		return (
			<React.Fragment>
				<Header />
			        {!showDetails ? <div>loading...</div> :
			        <MovieDetails
			        classes={classes}
			        config={config}
			        movieData={movieData}
			        movieCredits={movieCredits} />}
			</React.Fragment>
			);
	}
}

const mapStateToProps = state => ({
	config : state.configuration,
	movieData : state.movieDetails,
	movieCredits : state.movieCredits
});

const mapDispatchToProps = dispatch => ({
  fetchMovieDetails: id => dispatch(fetchMovieDetails(id)),
  fetchMovieCredits: id => dispatch(fetchMovieCredits(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MovieDetailsPageContainer));