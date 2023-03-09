import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Header.css';
//-----------------------------------   utils   -----------------------------------
//----------------------------------- Component -----------------------------------
import { Menu } from '../../menu/Menu';
//----------------------------------- Other -----------------------------------
import logo from '../../../assets/images/logo.png';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: 	  '',
        }  
	}
    componentDidMount(){         
	}
	render(){
		return (
            <div className='hd'>                
                <div className='hd-mid'>
                    <div className='hd-logo'>
                        <Link to={'/'}>
                            <img src={logo} alt={'logo'}/>
                        </Link>
                    </div>
                    <div className='hd-menu'>
                        <Menu />
                    </div>
                    <div className='hd-login'>
                        ---
                    </div>
                    <div className='clr'></div>
                </div>
            </div>
		);
	}
}
export default Header;