import React from 'react';
import { connect } from 'react-redux';

import { fetchMovieDetails, fetchMovieCredits, fetchMovieTrailer, fetchTrendingMovies } from '../../actions';

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
  divider: {
  	backgroundImage: 'radial-gradient(circle, rgb(178, 187, 239) 0%, rgba(210,208,208,0) 90%)',
    border: 'none',
    marginTop: 30,
    height: 2
  },
  containerTitle: {
  	color: '#002984',
  	margin: 5,
  	textAlign: 'center'
  },	
  summaryContainer: {
  	padding: '10px',
  	width: '100%'
  },
  castContainer: {
  	marginTop: 100
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
  	fontWeight: 500,
  	textAlign: 'center'
  },
  avatarPersonName: {
  	fontSize: 12,
  	textAlign: 'center'
  },
  trailerContainer: {
  	marginTop: 100,
  	display: 'flex',
  	flexDirection: 'column',
  	alignItems: 'center',
  	height: 450,
  	padding: '10px'
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
		// Fetch Data, pass id used in url:
		this.fetchData(this.props.match.params.id);
	}

	componentDidUpdate(prevProps) {
		// If all fetch has been completed show the data (count according to number of fetches):
		if(this.state.count === 3) {
      		this.setState({showDetails : true, count : 0});
    	}
		if(prevProps.movieData !== this.props.movieData) {
			this.setState({count : this.state.count + 1});
		}
		if(prevProps.movieCredits !== this.props.movieCredits) {
			this.setState({count : this.state.count + 1});
		}
		if(prevProps.movieTrailer !== this.props.movieTrailer) {
			this.setState({count : this.state.count + 1});
		}
	}

	fetchData(id) {
		this.props.fetchMovieDetails(id);
		this.props.fetchMovieCredits(id);
		this.props.fetchMovieTrailer(id);
    this.props.fetchTrendingMovies();
	}

	render() {

		const { showDetails } = this.state;
		const { classes, movieData, config, movieCredits, movieTrailer, trendingMovies } = this.props;

		return (
			<React.Fragment>
				<Header />
			        {!showDetails ? <div>loading...</div> :
			        <MovieDetails
			        classes={classes}
			        config={config}
			        movieData={movieData}
			        movieCredits={movieCredits}
			        movieTrailer={movieTrailer}
              trendingMovies={trendingMovies} />}
			</React.Fragment>
			);
	}
}

const mapStateToProps = state => ({
	config : state.configuration,
	movieData : state.movieDetails,
	movieCredits : state.movieCredits,
	movieTrailer : state.movieTrailer,
  trendingMovies : state.trendingMovies
});

const mapDispatchToProps = dispatch => ({
  fetchMovieDetails: id => dispatch(fetchMovieDetails(id)),
  fetchMovieCredits: id => dispatch(fetchMovieCredits(id)),
  fetchMovieTrailer: id => dispatch(fetchMovieTrailer(id)),
  fetchTrendingMovies: () => dispatch(fetchTrendingMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MovieDetailsPageContainer));