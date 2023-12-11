import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import javalogo from '../imagenes/Java-Logo.png';

const PJava = () => {
  const estiloPaginaPython = {
    background: '#355C7D',
    background: '-webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)',
    background: 'linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  };

  const estiloHeader = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '20vh',
    textAlign: 'center',
    padding: '30px',
  };

  const estiloLogo = {
    width: '120px',
    marginBottom: '20px',
  };

  const estiloContenido = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };
  const estiloColumna = {
    marginBottom: '20px',
    letterSpacing: '1px',
  };

  const estiloSeccion = {
    display: 'flex',
    margin: '0 -20px',
  };

  const btnVolver = {
    
    borderColor: '#473353',
    color: '#26202A',
    borderRadius: '50px',
    padding: '10px 20px',
    fontSize: '15px',
    textDecoration: 'none',
    margin: '5px',
  };

  const estiloFooter = {
    position: 'relative',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    background: '#755081',
  };

  const estiloH4 = {
    fontFamily: 'Arial, sans-serif',
    color: '#ffffff',
    fontSize: '15px',
  };


  return (
    <div style={estiloPaginaPython}>
      <header style={estiloHeader}>
        <img
          src={javalogo}
          alt="Python Logo"
          style={estiloLogo}
        />
        <h1>Lenguaje de Progrmacion Java</h1>
      </header>

      <section style={estiloSeccion}>
        <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
          <h2 style={estiloColumna}>¿Qué es Java?</h2>
          {<p>
            Java es un lenguaje de programación ampliamente utilizado para codificar aplicaciones web. Ha sido una opción popular entre los desarrolladores durante más de dos décadas, con millones de aplicaciones Java en uso en la actualidad. Java es un lenguaje multiplataforma, orientado a objetos y centrado en la red que se puede utilizar como una plataforma en sí mismo. Es un lenguaje de programación rápido, seguro y confiable para codificarlo todo, desde aplicaciones móviles y software empresarial hasta aplicaciones de macrodatos y tecnologías del servidor.</p>}
        </div>
        <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
          <h2 style={estiloColumna}>¿Para qué se utiliza el lenguaje de programación Java? </h2>
          {<p>
            1.     Desarrollo de videojuegos
            Muchos videojuegos, así como juegos para móviles y computadoras, se crean con Java. Incluso los juegos modernos que integran tecnología avanzada, como el machine learning o la realidad virtual, se crean con la tecnología de Java.</p>}
          {<p>
            2.     Computación en la nube
            Java a menudo se conoce como WORA: escribir una vez y ejecutar en cualquier lugar (por sus siglas en inglés “Write Once and Run Anywhere”), lo que lo hace perfecto para aplicaciones descentralizadas basadas en la nube. Los proveedores de la nube eligen el lenguaje Java para ejecutar programas en una amplia gama de plataformas subyacentes.</p>}
          {<p>
            3.     Macrodatos
            Java se usa para motores de procesamiento de datos que pueden trabajar con conjuntos de datos complejos y cantidades masivas de datos en tiempo real.</p>}
          {<p>
            4.     Inteligencia artificial
            Java es una fuente inagotable de bibliotecas de machine learning. Su estabilidad y velocidad lo hacen perfecto para el desarrollo de aplicaciones de inteligencia artificial como el procesamiento del lenguaje natural y el aprendizaje profundo.</p>}
          {<p>
            5.     Internet de las cosas
            Java se ha utilizado para programar sensores y hardware en dispositivos de periferia que pueden conectarse de forma independiente a Internet.</p>}
        </div>
      </section>

      <footer style={estiloFooter}>
        <div>
          <h4 style={estiloH4}>Mas sobre Java!!!</h4>
          <a style={estiloH4}href="https://www.java.com/es/" target="_blank" rel="noopener noreferrer">
            ¡¡¡Click aqui!!!
          </a>
          <p></p>
        </div>
        <Link to="/">
          <Button  style={btnVolver}>Volver a la Página Principal</Button>
        </Link>
      </footer>
    </div>
  );
};

export default PJava;