import React from 'react';

import Button from '@material-ui/core/Button';

const Footer = ({ noBack, back, forward }) => (
			<div style={noBack ? {display: 'flex', justifyContent: 'flex-end'} :
						{display: 'flex', justifyContent: 'space-around'}}>
		     		<Button
		     			style={noBack ? {display: 'none'} : {}}
				    	variant="outlined"
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