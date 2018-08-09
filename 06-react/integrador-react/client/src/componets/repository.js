import React, { Component } from 'react';
import './../Header.css';
import './../App.css';

class Repository extends Component {

    state = {repos: []}
    
    

    componentDidMount() {

        fetch('https://api.github.com/users/GisellePerez/repos')
        .then (function (response) {
            //console.log(response.json());
            return response.json();
        })
        .then(repos => this.setState({ repos }));
                
    }
    render() {
        return(
            <div className="Repository">
                {this.state.repos.map(item =>
                    <ul> 
                        <li key={item.name}>{item.name} <a key={item.name} href={item.url}>{item.url}</a></li>
                    </ul>
                )}
            </div>
        )
    }
        
}

export default Repository;