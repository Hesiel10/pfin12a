import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import typescriptlogo from '../imagenes/typescript-logo.png';

const PTypeScript = () => {
  const estiloPaginaPython = {
    background: '#2b5876',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #4e4376, #2b5876)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #4e4376, #2b5876)',
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
    background: '#4e4376',
    borderColor: '#473353',
    color: '#ffffff',
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
    background: '#2b5876',
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
          src={typescriptlogo}
          alt="Python Logo"
          style={estiloLogo}
        />
        <h1>Lenguaje de Progrmacion TypeScript</h1>
      </header>

      <section style={estiloSeccion}>
        <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
          <h2 style={estiloColumna}>¿Qué Es TypeScript?</h2>
          {<p>
            TypeScript es un superconjunto de JavaScript que añade tipado estático opcional y funciones avanzadas a JavaScript. Ha sido desarrollado por Microsoft y se publicó por primera vez en octubre de 2012. Desde su lanzamiento en 2012, se ha extendido rápidamente entre la comunidad de desarrolladores web.

            Según la encuesta a desarrolladores de Stack Overflow de 2022, TypeScript resultó ser la 4ª tecnología más querida, con un 73,46%. TypeScript se creó para abordar algunas de las limitaciones de JavaScript, como su falta de tipado fuerte, que puede dar lugar a errores sutiles difíciles de detectar durante el desarrollo.</p>}
          <p>
            Si te dedicas al desarrollo Front-End o al desarrollo de software en general, seguramente hayas oído hablar de TypeScript, o incluso lo utilizas en tu día a día. Pero a los que simplemente tienen curiosidad por el mundo de la programación, a lo mejor, no les suena tanto. Lo que es seguro, es que todo el mundo conoce JavaScript. Así que vamos a explicar qué es TypeScript y por qué deberíamos usarlo por encima de JavaScript. También haremos una comparativa entre TypeScript y JavaScript y veremos un ejemplo real de programación con TS.


          </p>
        </div>
        <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
          <h2 style={estiloColumna}>¿Cómo funciona? </h2>
          {<p>
            TypeScript va un paso más allá de ECMAScript 6 o posterior y añade más funcionalidad a ECMAScript, como tipado fuerte, anotaciones o módulos.

            Como TypeScript es un superconjunto de JavaScript, todo el código escrito en JS es válido para TS. Pero no lo contrario. Esto lo podemos comprobar gracias a los navegadores web. Ya que no entienden el código escrito en TypeScript y, para que lo hagan, es necesario hacer una ‘’transpilación’’ del código a JavaScript.

            La transpilación es aplicable hacia cualquier versión de ECMAScript, tanto para navegadores antiguos como para navegadores más actuales.</p>}
            <h2 style={estiloColumna}>TypeScript vs. JavaScript</h2>
          {<p>
            Si profundizamos más en TypeScript y JavaScript, obtenemos una comparativa más exhaustiva de ambos:

            Tipado estático, genérico, estructural y enumerados: en JS no existen como tal los tipados, aunque los enumerados se pueden simular con clases sencillas. Mientras que TS es un lenguaje fuertemente tipado, donde se pueden crear tipos genéricos o interfaces.
            Modularización: TS ofrece un soporte directo para módulos, mientras que JS lo hace a través de ECMAScript 6.
            Tuplas: JS no las soporta, pero si TS.
            Orientación a objetos: la sintaxis de TS para la
            programación orientada a objetos
            es muy similar a la de otros lenguajes como
            Java
            o C#. Y además añade clases abstractas y modificadores de acceso, entre otras características. En JS también se puede programar orientado a objetos, pero es algo más complejo.
            Decoradores: JS no tiene soporte para decoradores, mientras que TS si.
            Interfaces: Como hemos mencionado, en TS las interfaces son imprescindibles, brindándote la posibilidad de crear escenarios más avanzados. En JS no existe soporte para interfaces.
            Con esta comparativa podemos observar que TypeScript es un lenguaje muchísimo más maduro que JavaScript . Y, aunque sea más difícil de aprender, la curva de aprendizaje tampoco es muy complicada en relación a los beneficios que te va a aportar como desarrollador para el futuro.</p>}

        </div>
      </section>

      <footer style={estiloFooter}>
        <div>
          <h4 style={estiloH4}>Mas sobre TypeScript!!!</h4>
          <a style={estiloH4} href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
            ¡¡¡Click aqui!!!
          </a>
          <p></p>
        </div>
        <Link to="/">
          <Button style={btnVolver}>Volver a la Página Principal</Button>
        </Link>
      </footer>
    </div>
  );
};

export default PTypeScript;