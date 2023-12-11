import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import cmasmaslogo from '../imagenes/Cmasmas-logo.png';

const PCMasMas = () => {
    const estiloPaginaPython = {
        background: '#44A08D',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #093637, #44A08D)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #093637, #44A08D)',
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
        background: '#44A08D',
        borderColor: '#6F8468',
        color: '#FFFBFB',
        borderRadius: '50px',
        padding: '10px 20px',
        fontSize: '15px',
        textDecoration: 'none',
        margin: '5px',
    };

    const estiloFooter = {
        background: '#1F2726',
        position: 'relative',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        padding: '10px',
    };

    const estiloH4 = {
        fontFamily: 'Arial, sans-serif',
        color: '#ffff',
        fontSize: '15px',
    };


    return (
        <div style={estiloPaginaPython}>
            <header style={estiloHeader}>
                <img
                    src={cmasmaslogo}
                    alt="C++ Logo"
                    style={estiloLogo}
                />
                <h1>Lenguaje de Progrmacion C++</h1>
            </header>

            <section style={estiloSeccion}>
                <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px', }}>
                    <h2 style={estiloColumna}>¿Qué es C++?</h2>
                    {<p>
                        C++ es un lenguaje de programación que proviene de la extensión del lenguaje C para que pudiese manipular objetos. A pesar de ser un lenguaje con muchos años, su gran potencia lo convierte en uno de los lenguajes de programación más demandados en los últimos años.</p>}
                    <p>Origen de C++</p>
                    <p>
                        C++ es un lenguaje de programación que proviene de la extensión del lenguaje C para que pudiese manipular objetos. A pesar de ser un lenguaje con muchos años, su gran potencia lo convierte en uno de los lenguajes de programación más demandados.

                        Fue diseñado a mediados de los años 80 por el danés Bjarne Stroustrup. Si intención fue la de extender el lenguaje de programación C (con mucho éxito en ese momento) para que tuviese los mecanismos necesarios para manipular objetos. Por lo tanto C++ contiene los paradigmas de la programación estructurada y orientada a objetos, por lo que se le conoce como un lenguaje de programación multiparadigma.
                    </p>
                </div>
                <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
                    <h2 style={estiloColumna}>Ventajas y desventajas de C++</h2>
                    {<p>
                        Las principales ventajas de programar en C++ son:

                        Alto rendimiento: Es una de sus principales características, el alto rendimiento que ofrece. Esto es debido a que puede hacer llamadas directas al sistema operativo, es un lenguaje compilado para cada plataforma, posee gran variedad de parámetros de optimización y se integra de forma directa con el lenguaje ensamblador.
                        Lenguaje actualizado: A pesar de que ya tiene muchos años, el lenguaje se ha ido actualizando, permitiendo crear, relacionar y operar con datos complejos y ha implementado múltiples patrones de diseño.
                        Multiplataforma
                        Las principales desventajas de C++ es que se trata de un lenguaje muy amplio (con muchos años y muchas líneas de código), tiene que tener una compilación por plataforma y su depuración se complica debido a los errores que surgen. Además el manejo de librerías es más complicado que otros lenguajes como Java o .Net y su curva de aprendizaje muy alta. </p>}
                    <p>Aplicaciones y usos de C++</p>
                    <p>
                        Bases de Datos: MySQL, una de las bases de datos más utilizadas está escrita en C++.
                        Navegadores WEB: Utilizan C++ porque necesitan rapidez a la hora de mostrar los resultados en pantalla.
                        Sistemas operativos: La columna principal tanto de Windows, como Linux o Mac OS, están escritas en C++. Su potencia y rapidez lo hace un lenguaje de programación ideal para programar un sistema operativo.
                        Compiladores: los compiladores de muchos lenguajes de programación están escritos en C++.
                        </p>
                        
                </div>
            </section>
            

            <footer style={estiloFooter}>
                <div>
                    <h4 style={estiloH4}>Mas sobre C++!!!</h4>
                    <a style={estiloH4} href="https://cplusplus.com/" target="_blank" rel="noopener noreferrer">
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

export default PCMasMas;