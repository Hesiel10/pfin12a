import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import pythonLogo from '../imagenes/logoPython.png';

const PPython = () => {
  const estiloPaginaPython = {
    background: '#00b09b',
    background: '-webkit-linear-gradient(to right, #96c93d, #00b09b)',
    background: 'linear-gradient(to right, #96c93d, #00b09b)',
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
    backgroundColor: '#28a745',
    borderColor: '#28a745',
    color: '#ffffff',
    borderRadius: '50px',
    padding: '10px 20px',
    fontSize: '15px',
    textDecoration: 'none',
    margin: '5px',
  };

  const estiloFooter = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    background: '#00796b', 
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
          src={pythonLogo}
          alt="Python Logo"
          style={estiloLogo}
        />
        <h1>Lenguaje de Progrmacion Python</h1>
      </header>

      <section style={estiloSeccion}>
        <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
          <h2 style={estiloColumna}>Qué es Python?</h2>
          {<p>
            Python es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de software, la ciencia de datos y el machine learning (ML). Los desarrolladores utilizan Python porque es eficiente y fácil de aprender, además de que se puede ejecutar en muchas plataformas diferentes. El software Python se puede descargar gratis, se integra bien a todos los tipos de sistemas y aumenta la velocidad del desarrollo.</p>}
          {/* ... */}
        </div>
        <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
          <h2 style={estiloColumna}>¿Cómo se utiliza Python?</h2>
          {<p>
            El lenguaje Python se aplica a varios casos de uso en el desarrollo de aplicaciones, incluidos los ejemplos siguientes:

            Desarrollo web del lado del servidor
            El desarrollo web del lado del servidor incluye las funciones complejas de backend que los sitios web llevan a cabo para mostrar información al usuario. Por ejemplo, los sitios web deben interactuar con las bases de datos, comunicarse con otros sitios web y proteger los datos cuando se los envía a través de la red.

            Python es útil para escribir código del lado del servidor debido a que ofrece muchas bibliotecas que constan de código preescrito para crear funciones de backend complejas. Los desarrolladores también utilizan un amplio rango de marcos de Python que proporcionan todas las herramientas necesarias para crear aplicaciones web con mayor rapidez y facilidad. Por ejemplo, los desarrolladores pueden crear la aplicación web esqueleto en segundos porque no deben escribirla desde cero. Pueden probarla por medio de las herramientas de prueba del marco, sin depender de herramientas de prueba externas.</p>}
        </div>
      </section>

      <footer style={estiloFooter}>
        <div>
          <h4 style={estiloH4}>Mas sobre Python!!!</h4>
          <a style={estiloH4} href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
            ¡¡¡Click aqui!!!
          </a>
          <p></p>
        </div>
        <Link to="/">
          <Button variant="primary" style={btnVolver}>Volver a la Página Principal</Button>
        </Link>
      </footer>
    </div>
  );
};

export default PPython;