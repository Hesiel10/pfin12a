import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Gologo from '../imagenes/golang-logo.png';

const PGo = () => {
    const estiloPaginaGo = {
        background: '#BBD2C5',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #536976, #BBD2C5)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #536976, #BBD2C5)',
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
        width: '220px',
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
        background: '#BBD2C5',
        borderColor: '#040404',
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
        background: '#536976',
    };

    const estiloH4 = {
        fontFamily: 'Arial, sans-serif',
        color: '#ffffff',
        fontSize: '15px',
    };


    return (
        <div style={estiloPaginaGo}>
            <header style={estiloHeader}>
                <img
                    src={Gologo}
                    alt="Go Logo"
                    style={estiloLogo}
                />
                <h1>Lenguaje de Progrmacion Go</h1>
            </header>

            <section style={estiloSeccion}>
                <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
                    <h2 style={estiloColumna}>¿Qué es Go?</h2>
                    {<p>
                        El Lenguaje de programación Go. ¿Es el C del siglo XXI? ¿Qué es Go y por qué hay tanto hype detrás? Intentamos resolver las dudas sobre este nuevo participante en el mundo de la programación.

                        Go es un lenguaje de programación relativamente nuevo, su lanzamiento oficial fue a finales de 2009 (aunque su primera versión estable fue en 2012), por lo que no lleva ni una década entre nosotros. ¿Y qué hace que el lenguaje Go sea lo que todos esperan? Más allá de que haya sido desarrollado por Google, puntualmente por Ken Thompson, Rob Pike y Robert Griesemer —que no es poco—, las características de Go y su desempeño son las que nominan a este lenguaje de programación como el enésimo sustituto natural de C</p>}
                    <h2 style={estiloColumna}>Características de Go</h2>
                    <p>El Lenguaje Go, al igual que C y C++, es un lenguaje compilado y concurrente, o en otras palabras: soporta canales de comunicación basados en el lenguaje CSP. Sin embargo, dentro de las características de Go aparece su concurrencia. En Go es diferente a los criterios de programación basados en bloqueos como pthreads. Los creadores de Go, además, se inspiraron en la versatilidad y las cualidades de otros lenguajes como Python, C++ y Java (entre otros), para conseguir un lenguaje con las siguientes características, algunas únicas, y otras compartidas con otros lenguajes compilados.

                        Simplicidad
                        Otra de las características de Go es su simplicidad. Lenguajes como C++, Java o C# son más pesados y voluminosos que Go. La simplicidad es la característica principal de Go. Con una sintaxis clara, limpia y organizada, la idea de la programación en Go es diferenciarse de la complejidad de C. Comparando ambos lenguajes compilados, vemos que Go utiliza inferencia implícita de tipos para así poder evitar la declaración explícita de variables que tienen lugar en C.</p>
                </div>
                <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
                    <h2 style={estiloColumna}>Ventajas o fortalezas</h2>
                    {<p>Es un lenguaje concurrente que soporta canales de comunicación CSP.</p>}
                    {<p>Cuenta con un recolector de basura que permite elevar al máximo la eficiencia y el rendimiento, y reducir al mínimo la latencia.</p>}
                    {<p>Tiene una sintaxis clara y concisa. Evita, además, la declaración explícita de variables.</p>}
                    {<p>Es un lenguaje innovador, que toma lo mejor de los lenguajes modernos para dar vida a un lenguaje eficiente, claro y sencillo.</p>}
                    {<p>Posee una comunidad activa de desarrolladores que contribuyen con bibliotecas, herramientas y recursos. Esto proporciona un buen soporte para los desarrolladores.</p>}
                    <h2 style={estiloColumna}>¿Cuál es la diferencia entre C y Go?</h2>
                    {<p>
                        A pesar de que conocer C puede ayudar a simplificar la curva de aprendizaje de Go por las similitudes entre ellos, existen varias diferencias notables entre estos dos lenguajes de programación. A continuación, citamos cuáles son:

                        Go está orientado a objetos, mientras que C no lo está.
                        Las declaraciones de Go se realizan al revés que en C, para que sea mucho más fácil de leer e interpretar.
                        Go no emplea aritmética de punteros como en C. Esto lo convierte en un lenguaje mucho más seguro.
                        Colocar punto y coma al final del código es opcional en Go.
                        En Go, los signos + y – no son expresiones.</p>}

                </div>
            </section>

            <footer style={estiloFooter}>
                <div>
                    <h4 style={estiloH4}>Mas sobre Go!!!</h4>
                    <a style={estiloH4} href="https://go.dev/" target="_blank" rel="noopener noreferrer">
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

export default PGo;