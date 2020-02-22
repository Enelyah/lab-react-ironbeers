import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class NewBeer extends Component {
    state = { 
        name: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: null,
        contributed_by: ""
     }

    handleFormSubmit = (event) => {
        event.preventDefault();
        
        const name = this.state.name;
        const tagline = this.state.tagline;
        const description = this.state.description;
        const first_brewed = this.state.first_brewed;
        const brewers_tips = this.state.brewers_tips;
        const attenuation_level = this.state.attenuation_level;
        const contributed_by = this.state.contributed_by;

       axios.post('https://ih-beer-api.herokuapp.com/beers/new', {name, tagline, description, first_brewed,brewers_tips,attenuation_level, contributed_by})
            .then(() => {
                //reset form
                this.setState({
                    name: "",
                    description: "",
                    first_brewed: "",
                    brewers_tips: "",
                    attenuation_level: null,
                    contributed_by: ""
                });
                return <Redirect to='/' />; //to update with actual beer page

            })
            .catch(err => console.log('Error', err))

    }
    
    handleChange = (event) => {
        let  {name, value} = event.target;
        this.setState({[name]:value});
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name
                       <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </label>
                   <label>Tagline
                       <input name="tagline" type="text" value={this.state.tagline} onChange={this.handleChange}/>
                    </label>
                   <label>Description
                       <textarea name="description" value={this.state.description} onChange={this.handleChange}/></label>
                   <label>First brewed
                       <input name="first_brewed" type="text" value={this.state.first_brewed} onChange={this.handleChange}/></label>
                   <label>Brewers tips
                       <input name="brewers_tips" type="text" value={this.state.brewers_tips} onChange={this.handleChange}/></label>
                   <label>Attenuation level
                       <input name="attenuation_level" type="number" value={this.state.attenuation_level} onChange={this.handleChange}/></label>
                   <label>Contributed by
                       <input name="contributed_by" type="text" value={this.state.contributed_by} onChange={this.handleChange}/></label>
                       <button type="submit">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default NewBeer;