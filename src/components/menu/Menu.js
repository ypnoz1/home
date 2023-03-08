import React from 'react';
import { useState } from "react";
import './Menu.css';
//-----------------------------------   utils   -----------------------------------
//----------------------------------- other -----------------------------------
export const Menu = () => {
	const [showHide, setShowHide] = useState(0);
	return (
		<div className='mn-bar-cont' onClick={() => setShowHide(showHide ? 0 : 1)}>
			<div className='mn-bar'></div>
			<div className='mn-bar'></div>
			<div className='mn-bar'></div>
			<div className='mn-bar-more' style={{display: showHide ? 'block' : 'none'}}>
				<div className='mn-bar-more-elm'>Roadmap</div>
				<div className='mn-bar-more-elm'>Fact</div>
				<div className='mn-bar-more-elm'>Login</div>
				<div className='mn-bar-more-elm'>Contact</div>
			</div>
		</div>
	)
}
