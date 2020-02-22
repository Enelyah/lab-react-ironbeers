import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class BeerfromList extends Component {
    state = {  }
    render(){
        return(
            <div className="flex">
                
                <div className="columnLeft">
                    <img src={this.props.image} alt=""/>
                </div>
                <div className="columnRight">
                <Link to={`/${this.props.name}`}><h2>{this.props.name}</h2></Link>
                    <h3>{this.props.tagline}</h3>
                    <p>{this.props.contributed_by}</p>
                </div>
                
            </div>
           


        )
    }
}

export default BeerfromList