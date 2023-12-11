import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import swiftlogo from '../imagenes/Swift-logo.png';

const PSwift = () => {
    const estiloPaginaswift = {
        background: '#8E0E00',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #1F1C18, #8E0E00)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #1F1C18, #8E0E00)',
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
        background: '#1F1C18',
    };

    const estiloH4 = {
        fontFamily: 'Arial, sans-serif',
        color: '#ffffff',
        fontSize: '15px',
    };


    return (
        <div style={estiloPaginaswift}>
            <header style={estiloHeader}>
                <img
                    src={swiftlogo}
                    alt="Swift Logo"
                    style={estiloLogo}
                />
                <h1>Lenguaje de Progrmacion Swift</h1>
            </header>

            <section style={estiloSeccion}>
                <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
                    <h2 style={estiloColumna}>¿Qué es Swift?</h2>
                    {<p>
                        El lenguaje de programación Swift es el utilizado actualmente para los desarrollos digitales de apps para entornos iOS y macOS. Es decir, que es el lenguaje ideal a la hora de programar una app que deba ser compatible con los dispositivos de la marca Apple.

                        La presentación de Swift tenía su explicación en la búsqueda de un lenguaje de programación que fuera más asequible que las opciones existentes en aquél momento, con Objective-C a la cabeza, además de ofrecer mejoras en cualquier desarrollo.

                        El éxito fue inmediato. Las características de Swift han motivado que se haya estandarizado como lenguaje de programación propio de iOS. En la actualidad, todo profesional que se precie, debe dominarlo, para poder trabajar en el desarrollo de cualquier app compatible.</p>}
                    <h2 style={estiloColumna}>Características de Swift</h2>
                    <p>Seguridad
                        La seguridad de Swift se basa en la menor probabilidad de cometer errores durante su escritura. </p>
                    <p>Sin errores
                        Swift, como lenguaje de programación, no tiene errores o, por lo menos, tiene menos probabilidades de que aparezcan </p>
                    <p>Velocidad de desarrollo
                        La rapidez también es una característica importante y diferencial del lenguaje de programación Swift.</p>
                    <p>Constante evolución
                        Por último, de sus características destacamos la evolución constante a la que está sometido el lenguaje de programación Swift. </p>
                </div>
                <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
                    <h2 style={estiloColumna}>Ventajas del lenguaje de programación Swift </h2>
                    {<p>El lenguaje de programación swift posee algunas características que podrían considerarse como grandes ventajas. Por ejemplo, es un lenguaje que proporciona un manejo o control avanzado sobre el flujo de información y datos, así como la posibilidad de prever errores con bastante antelación y manipulación.</p>}
                    {<p>Cuenta con una gran variedad de valores que permiten retornar a un punto de la programación o del desarrollo en caso de ser necesario. Sus iteraciones son cortas y claras. Se puede trabajar a través de métodos y protocolos, en conjunto con patrones de programación funcionales.</p>}
                    {<p>Todas estas características son ventajas que permiten desarrollar aplicaciones, sistemas o servicios de la nube con gran estabilidad, seguridad y rapidez. </p>}

                    <h2 style={estiloColumna}>¿Por qué aprender a programar Swift? </h2>
                    {<p>
                        Porque las características del lenguaje de programación SWIFT ofrecen una gran cantidad de herramientas para manipular y hacer uso y crear aplicaciones realmente eficientes.

                        Su facilidad de sintaxis le permite ser un lenguaje que no se dificulta demasiado en su aprendizaje.</p>}

                </div>
            </section>

            <footer style={estiloFooter}>
                <div>
                    <h4 style={estiloH4}>Mas sobre Swift!!!</h4>
                    <a style={estiloH4} href="https://www.apple.com/co/swift/" target="_blank" rel="noopener noreferrer">
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

export default PSwift;