import React from 'react';

import Button from '@material-ui/core/Button';

const Footer = ({ noBack, back, forward }) => (
			<div style={{display: 'flex', justifyContent: 'space-evenly'}}>
		     		<Button
		     			style={noBack ? {display: 'none'} : {}}
				    	variant="contained"
				    	color="primary"
				    	onClick={back}>
				        Back
		    		</Button>
		          	<Button
			          	variant="contained"
			          	color="primary"
			          	onClick={forward}>
			          	Next
		          	</Button>
		    </div>
	);

export default Footer;