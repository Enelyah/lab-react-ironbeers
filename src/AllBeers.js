import React, { Component } from 'react';
import BeerfromList from './BeerfromList'
import axios from 'axios';

class AllBeers extends Component {
    state = { 
        list_of_beers: []
     }

    getAllBeers = () => {
        axios.get('https://ih-beer-api.herokuapp.com/beers')
            .then(response => {
                console.log(response.data)
                this.setState({
                    list_of_beers: response.data
                })
            })
            .catch(err => console.log('Error', err))
     }

     componentDidMount() {
        this.getAllBeers();
      }

    render() { 
        return ( 
        <div>
            <h1>All Beers</h1>
            {this.state.list_of_beers.slice(0, 20).map(beer => 
            <BeerfromList key={beer._id} image={beer.image_url} name={beer.name} tagline={beer.tagline} contributed_by={beer.contributed_by} />
              )}
        </div> );
    }
}
 
export default AllBeers;