import React from 'react';
import { connect } from 'react-redux';

import MovieDetails from './MovieDetails';

class MovieDetailsPageContainer extends React.Component {

	componentDidMount() {
	}

	render() {
		return (<MovieDetails 
				
				/>);
	}
}

const mapStateToProps = state => {
	return { movie : state.movie}
}

export default connect(mapStateToProps)(MovieDetailsPageContainer);