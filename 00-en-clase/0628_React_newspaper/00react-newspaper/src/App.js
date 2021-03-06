import React, { Component } from 'react';
import edificio1 from './img/edificio1.png';
import edificio2 from './img/edificio2.png';
import logo from './logo.svg';
import './App.css';

let title = 'Japón planea tener el rascacielos de madera más alto del mundo en Tokio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Info/><Content/></div>              
      </div>
    );
  }
}
class Info extends Component {
  render(){
    return(
      <div className="Info">
        <div className ="top">
          <div className="links">
              <a className="bold-links" href="https://www.lanacion.com.ar">LA NACIÓN</a> 
              <a className="bold-links" href="https://www.lanacion.com.ar/tecnologia-t47502">TECNOLOGÍA</a> 
              <a href="https://www.lanacion.com.ar/tecnologia-t47502">TECNOLOGÍA</a>
          </div>
          <h1 className="App-intro">{title}</h1>
        </div>
		    <p id="date-time">16 de febrero de 2018<span class="hora">• 00:16</span></p>
      </div>
    );
  }
}
class Content extends Component {
  render(){
    return(
      <div className="Content">    
        
        <figure id="fig-top">
          <img src={edificio1} id="App-edificio1" alt="edificio 1" />  
          <figcaption id="figcap-top">Tendrá 350 metros de altura y será la más alta en su tipo, con una construcción cuya estructura combina nueve partes de madera y una de acero</figcaption>
        </figure>    
        <div id="texto-principal">
          <p><span className="capital">E</span>l constructor y desarrollador inmobiliario Sumitomo Forestry, especializado en la industria forestal, planea tener para las próximas décadas el ambicioso objetivo de desarrollar un torre rascacielos de 350 metros de altura. Como referencia, el edificio más alto de Buenos Aires será el Alvear Tower, una construcción tradicional de 235 metros, mientras que el edificio más alto de madera es el Brock Commons Tallwood House, un edificio de 53 metros de altura ubicado en la Universidad de Columbia Británica en Vancouver, Canadá. </p>
          <p> El proyecto, diseñado por Nikken Sekkei, buscará combinar una proporción de 9 a 1 de madera y acero para la particular estructura solicitada por Sumitomo para celebrar el 350 aniversario de la compañía en 2041 con una estructura que transforme a Tokio en un bosque. </p> 
          <p> La estructura de la torre de madera más alta del mundo cumplirá con los reglamentos antisismicos para este tipo de edificios y se destinará para un hotel, oficinas, residencias y tiendas. Su costo estimado será de unos 5,9 mil millones de dólares. </p>
          <p> Cuando finalice, la torre de Sumitomo Forestry no sólo será la más alta del mundo, sino que también superará a los rascacielos tradicionales de todo Japón.</p>
        </div>

        <figure id="fig-bottom">
          <img src={edificio2} id="App-edificio2" alt="edificio 2" />  
          <figcaption id="figcap-bottom">El proyecto deberá superar las estrictas normas japonesas que restringen el uso de la madera para evitar incendios</figcaption>
        </figure>
      </div>
    );
  }
}

export default App;
