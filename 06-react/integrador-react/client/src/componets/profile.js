import React, { Component } from 'react';
import './../App.css';
import './../Profile.css';
import foto from './../img/foto.jpeg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faLinkedin, faGithub, faFacebook} from '@fortawesome/fontawesome-free-brands';
library.add(faGithub,faTwitter,faLinkedin,faFacebook);



class Profile extends Component {

  state = {index: []}

  componentDidMount() {
    fetch('http://localhost:3001')
      .then(res => res.json())
      .then(index => this.setState({ index }));
  }

  render() {
    return (
      <div className="Profile">
        <div className = "profileWrapper">
            <figure className="ProfilePic">
                <img src={foto}></img>
            </figure>
                {this.state.index.map(dato =>
                <div className="ProfileInfo" key={dato.name}>
                    <div className="MainInfo">
                        <p>{dato.name}</p>
                        <p>{dato.occupation}</p>
                    </div>
                    <div className="DataInfo"> 
                        <p>Age: {dato.age}</p>
                        <p>Address: {dato.address}</p>
                        <p>Email: {dato.email}</p>
                        <p>Phone: {dato.phone}</p>
                        <p>Website: {dato.website}</p>
                    </div>
                    <div className='profileIcons'>
                        <a href='#'><FontAwesomeIcon className ='font-awesome' icon={faFacebook} /></a>
                        <a href='#'><FontAwesomeIcon className ='font-awesome' icon={faTwitter} /></a>       
                        <a href='#'><FontAwesomeIcon className ='font-awesome' icon={faGithub} /></a>
                        <a href='#'><FontAwesomeIcon className ='font-awesome' icon={faLinkedin} /></a>
                    </div>
                </div>
                )}
        </div>
    </div>

    );
  }
}

export default Profile;