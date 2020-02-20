import React from 'react';
import {Link} from 'react-router-dom'

class Block extends React.Component {
    render(){
        return(
            <div>
                <img src={this.props.image} alt=""/>
                <h2><Link to={this.props.link}>{this.props.title}</Link></h2>
                <h3>{this.props.description}</h3>
            </div>
        )
    }
    
}

export default Block