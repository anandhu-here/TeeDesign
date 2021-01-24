import React, { Component } from 'react'
import white from '../img/696969.jpg';
import black from '../img/131414.jpg';
import lightblue from '../img/0c35c8.jpg';
import darkblue from '../img/1d1f9d.jpg';
import grey from '../img/5e5e5e.jpg';
import mint from '../img/34be99.jpg';
import green from '../img/729e2c.jpg';
import maroon from '../img/821d2b.jpg';
import yellow from '../img/988713.jpg';
import brown from '../img/522e1a.jpg';

export class Design extends Component {
    state={
        image:white
    }
    render() {
        return (
            <div>
            <div className='home-title'>Design your Tee</div>
              
            <div className='home-design'>
                <div className="home-design-left">
                   
                    <div className="home-design-cart">Import a design</div>                        
                </div>
                <div className="home-design-tees">
                    <img src={this.state.image} alt="" />
                </div>
                <div className="home-design-buy">
                    <div className="home-design-now">Buy now</div>
                    <div className="home-design-cart">Add to Cart</div>
                </div>
                
            </div>
            <div className="home-design-palette">
                    <button onClick={(e)=>this.setState({image:white})} value = "white" className="home-design-palette-696969"></button>
                    <button onClick={(e)=>this.setState({image:black})} value = "black" className="home-design-palette-131414"></button>
                    <button onClick={(e)=>this.setState({image:lightblue})} value = "lightblue" className="home-design-palette-0c35c8"></button>
                    <button onClick={(e)=>this.setState({image:darkblue})} value = "darkblue" className="home-design-palette-1d1f9d"></button>
                    <button onClick={(e)=>this.setState({image:grey})} value = "grey" className="home-design-palette-5e5e5e"></button>
                    <button onClick={(e)=>this.setState({image:mint})} value = "mint" className="home-design-palette-34be99"></button>
                    <button onClick={(e)=>this.setState({image:green})} value = "green" className="home-design-palette-729e2c"></button>
                    <button onClick={(e)=>this.setState({image:maroon})} value = "maroon" className="home-design-palette-821d2b"></button>
                    <button onClick={(e)=>this.setState({image:yellow})} value = "yellow" className="home-design-palette-988713"></button>
                    <button onClick={(e)=>this.setState({image:brown}   )} value = "brown" className="home-design-palette-522e1a"></button>
                
                </div>
            </div>
        )
    }
}

export default Design
