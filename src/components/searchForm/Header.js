import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const Header = (props) => (
	<AppBar position="static">
		<Typography variant="h6" color="inherit" style={{flexGrow: 1, textAlign: 'center'}}>
		{props.title}
		</Typography>
	</AppBar>
	);

export default Header;