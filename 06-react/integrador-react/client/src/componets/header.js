import React, { Component } from 'react';
import './../Header.css';
import './../App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faLinkedin, faGithub, faFacebook} from '@fortawesome/fontawesome-free-brands';
library.add(faGithub,faTwitter,faLinkedin,faFacebook);

let name = 'Giselle Perez';
let occupation = 'Frontend Dev'

class Header extends Component {
    render() {
      return(
        <div className="Header">
          <div>
            <h1>{name}</h1>
            <h3>{occupation}</h3>
          </div>        
  
          <div className='Icons'>
            <a href='#'><FontAwesomeIcon className ='font-awesome' icon={faFacebook} /></a>
            <a href='#'><FontAwesomeIcon className ='font-awesome' icon={faTwitter} /></a>       
            <a href='#'><FontAwesomeIcon className ='font-awesome' icon={faGithub} /></a>
            <a href='#'><FontAwesomeIcon className ='font-awesome' icon={faLinkedin} /></a>
          </div>
        </div>
  
      )
    }
  }

export default Header;