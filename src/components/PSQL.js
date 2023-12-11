import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import sqllogo from '../imagenes/sql-logo.png';

const PSQL = () => {
    const estiloPaginasql = {
        background: '#EB5757',  /* fallback for old browsers */
  background: '-webkit-linear-gradient(to right, #000000, #EB5757)',  /* Chrome 10-25, Safari 5.1-6 */
  background: 'linear-gradient(to right, #000000, #EB5757)',
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
        background: '#000000',
        borderColor: '#040404',
        color:'#ffffff',
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
        background: '#EB5757',
    };

    const estiloH4 = {
        fontFamily: 'Arial, sans-serif',
        color: '#ffffff',
        fontSize: '15px',
    };


    return (
        <div style={estiloPaginasql}>
            <header style={estiloHeader}>
                <img
                    src={sqllogo}
                    alt="SQL Logo"
                    style={estiloLogo}
                />
                <h1>Lenguaje de Progrmacion SQL</h1>
            </header>

            <section style={estiloSeccion}>
                <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
                    <h2 style={estiloColumna}>¿Qué es SQL?</h2>
                    {<p>
                        El lenguaje de consulta estructurada (SQL) es un lenguaje de programación para almacenar y procesar información en una base de datos relacional. Una base de datos relacional almacena información en forma de tabla, con filas y columnas que representan diferentes atributos de datos y las diversas relaciones entre los valores de datos. Puede usar las instrucciones SQL para almacenar, actualizar, eliminar, buscar y recuperar información de la base de datos. También puede usar SQL para mantener y optimizar el rendimiento de la base de datos.</p>}
                    <h2 style={estiloColumna}>¿Por qué es importante SQL?</h2>
                    <p>El lenguaje de consulta estructurada (SQL) es un lenguaje de consulta popular que se usa con frecuencia en todos los tipos de aplicaciones. Los analistas y desarrolladores de datos aprenden y usan SQL porque se integra bien con los diferentes lenguajes de programación. Por ejemplo, pueden incrustar consultas SQL con el lenguaje de programación Java para crear aplicaciones de procesamiento de datos de alto rendimiento con los principales sistemas de bases de datos SQL, como Oracle o MS SQL Server. </p>
                </div>
                <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
                    <h2 style={estiloColumna}>¿Cuáles son los componentes de un sistema SQL?</h2>
                    {<p>Los sistemas de administración de bases de datos relacionales utilizan un lenguaje de consulta estructurada (SQL) para almacenar y administrar datos. El sistema almacena varias tablas de bases de datos que se relacionan entre sí. MS SQL Server, MySQL o MS Access son ejemplos de sistemas de administración de bases de datos relacionales. Los siguientes son los componentes de un sistema de este tipo. </p>}
                    <h2 style={estiloColumna}>Tabla SQL</h2>
                    {<p>Una tabla SQL es el elemento básico de una base de datos relacional. La tabla de la base de datos SQL se compone de filas y columnas. Los ingenieros de bases de datos crean relaciones entre varias tablas de bases de datos para optimizar el espacio de almacenamiento de datos.</p>}

                    <h2 style={estiloColumna}>¿Qué es MySQL?</h2>
                    {<p>
                        MySQL es un sistema de administración de bases de datos relacionales de código abierto ofrecido por Oracle. Los desarrolladores pueden descargar y usar MySQL sin pagar tarifas de licencia. Pueden instalar MySQL en diferentes sistemas operativos o servidores en la nube. MySQL es un sistema de base de datos popular para aplicaciones web. </p>}

                </div>
            </section>

            <footer style={estiloFooter}>
                <div>
                    <h4 style={estiloH4}>Mas sobre SQL!!!</h4>
                    <a style={estiloH4} href="https://datascientest.com/es/sql-todo-lo-que-necesitas-saber-sobre-el-lenguaje-de-programacion-de-bases-de-datos" target="_blank" rel="noopener noreferrer">
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

export default PSQL;