import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const MovieDetails = ({ classes, config, movieData, movieCredits }) => (
		<main>
			<div
				className={classes.headerMovieDetails}
				style={{ background: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%) center center no-repeat, url(${config.images.secure_base_url + config.images.backdrop_sizes[3] + movieData.backdrop_path}) center top no-repeat`}}>
				<div className={classes.infoContainer}>
					<img className={classes.infoImg} src={config.images.secure_base_url + config.images.poster_sizes[0] + movieData.poster_path} alt={movieData.title} />
					<div className={classes.infoDetails}>
						<h1>{movieData.title}</h1>
						<div className={classes.infoRating}>
							<p>{movieData.vote_average}</p>
						</div>
						<p>{movieData.release_date.slice(0,4)} | {movieData.genres.map(genre => (genre.name + ' / '))}</p>
					</div>				
				</div>
			</div>
			<div className={classes.mainContainer}>
				<Paper className={classes.summaryContainer} elevation={1}>
				<h2 className={classes.summaryTitle}>Summary</h2>
				<p>{movieData.overview}</p>
				</Paper>
				<div className={classes.castContainer}>
					<h2>Cast</h2>
					<Grid container justify="center" alignItems="start" className={classes.avatarsContainer}>
					{movieCredits.cast.slice(0,5).map((person, i) => {
							return (
								<div className={classes.avatarWrapper}>
									<Avatar
									key={person.id}
									alt={person.name}
									src={config.images.secure_base_url +
										config.images.profile_sizes[1] +
										person.profile_path}
									className={classes.avatar} />
								<div className={classes.avatarCharacterName}>{person.character}</div>
								<div className={classes.avatarPersonName}>{person.name}</div>
								</div>
								);
						})
					}
					</Grid>
				</div>
				<div className={classes.trailerContainer}>

				</div>
			</div>
		</main>
	);

export default MovieDetails;