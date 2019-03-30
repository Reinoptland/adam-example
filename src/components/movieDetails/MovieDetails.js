import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const MovieDetails = ({ classes, config, movieData, movieCredits, movieTrailer }) => (
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
				<h2 className={classes.containerTitle}>Summary</h2>
				<p>{movieData.overview}</p>
				</Paper>
				<div className={classes.castContainer}>
					<h2 className={classes.containerTitle}>Cast</h2>
					<Grid container justify="center" alignItems="flex-start" className={classes.avatarsContainer}>
					{movieCredits.cast.slice(0,5).map((person, i) => {
							return (
								<div key={person.id} className={classes.avatarWrapper}>
									<Avatar
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
					<Paper className={classes.trailerContainer} elevation={1}>
					<h2 className={classes.containerTitle}>Trailer</h2>
					{movieTrailer.slice(0,1).map(trailer => (
						<iframe key={trailer.id} src={`https://www.youtube.com/embed/${trailer.key}`} width="80%" height="100%" title={trailer.name}></iframe>
						))
					}
					</Paper>
			</div>
		</main>
	);

export default MovieDetails;