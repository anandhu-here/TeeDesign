import React, { Component } from 'react';
import Design from './Design';
import Navbar from './Navbar';



export class Home extends Component {

    render() {
        return (
            <div className="home" >
                <Navbar />
                <Design />
            </div>
        )
    }
}

export default Home
