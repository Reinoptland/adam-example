import React from 'react';

const MovieDetails = ({ classes, config, movieData }) => (
		<main>
			<div
				className={classes.heroUnit}
				style={{ background: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%) center center no-repeat, url(${config.images.secure_base_url + config.images.backdrop_sizes[3] + movieData.backdrop_path}) center top no-repeat`}}>				<div className={classes.heroContent}>				
				</div>
			</div>
			<div className={classes.mainContainer}>
			            {/* End hero unit */}
			</div>
		</main>
	);

export default MovieDetails;