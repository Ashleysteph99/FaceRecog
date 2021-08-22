import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';
import 'tachyons';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className="ma4 mt0">
	<Tilt className="Tilt br3 shadow-4 " options={{ max : 95 }} style={{ height: 150, width: 150 }} >
 		<div className="Tilt-inner pa4 "> <img style={{height:'100px',width:'100px'}} alt="Logo" src={brain} /></div>
	</Tilt>
	</div>

		);
}

export default Logo;