import React from 'react';
import {Link} from 'react-router-dom'

class Nav extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="block">
                <Link to='/'><h1>Home</h1></Link>
            </div>
         );
    }
}
 
export default Nav;