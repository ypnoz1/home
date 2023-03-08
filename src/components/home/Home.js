import React, { Component } from 'react';
import './Home.css';
//-----------------------------------   utils   -----------------------------------

//----------------------------------- component -----------------------------------
import Header from '../body/header/Header';
import Footer from '../body/footer/Footer';
//----------------------------------- other -----------------------------------
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:  false,
        }
	}
	componentDidMount(){		
	}
	render(){
		return (
            <>
                <Header />
				<div style={{background:"#fff"}}>
                    1111
                </div>
                <Footer />
            </>
		);
	}
}
export default Home;