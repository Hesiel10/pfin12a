import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import javascriptlogo from '../imagenes/JavaScript-logo.png';

const PJavaScript = () => {
    const estiloPaginajavascript = {
        background: '#6A9113',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #141517, #6A9113)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #141517, #6A9113)',
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
        background: '#141212',
        borderColor: '#6F8468',
        color: '#FFFBFB',
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
        background: '#6A9113',
    };

    const estiloH4 = {
        fontFamily: 'Arial, sans-serif',
        color: '#ffffff',
        fontSize: '15px',
    };


    return (
        <div style={estiloPaginajavascript}>
            <header style={estiloHeader}>
                <img
                    src={javascriptlogo}
                    alt="Javascript Logo"
                    style={estiloLogo}
                />
                <h1>Lenguaje de Progrmacion JavaScript</h1>
            </header>

            <section style={estiloSeccion}>
                <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
                    <h2 style={estiloColumna}>¿Qué es JavaScript?</h2>
                    {<p>
                        JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc., puedes apostar que probablemente JavaScript está involucrado. Es la tercera capa del pastel de las tecnologías web estándar, dos de las cuales (HTML y CSS) hemos cubierto con mucho más detalle en otras partes del Área de aprendizaje.</p>}
                    <p>HTML es el lenguaje de marcado que usamos para estructurar y dar significado a nuestro contenido web, por ejemplo, definiendo párrafos, encabezados y tablas de datos, o insertando imágenes y videos en la página.
                        CSS es un lenguaje de reglas de estilo que usamos para aplicar estilo a nuestro contenido HTML, por ejemplo, establecer colores de fondo y tipos de letra, y distribuir nuestro contenido en múltiples columnas.
                        JavaScript es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes y prácticamente todo lo demás. (Está bien, no todo, pero es sorprendente lo que puedes lograr con unas pocas líneas de código JavaScript).</p>
                </div>
                <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
                    <h2 style={estiloColumna}>¿Para qué se utiliza JavaScript?</h2>
                    {<p>
                        Anteriormente, las páginas web eran estáticas, similares a las páginas de un libro. Una página estática mostraba principalmente información en un diseño fijo y no todo aquello que esperamos de un sitio web moderno. JavaScript surgió como una tecnología del lado del navegador para hacer que las aplicaciones web fueran más dinámicas. Por medio de JavaScript, los navegadores eran capaces de responder a la interacción de los usuarios y cambiar la distribución del contenido en la página web.

                        A medida que el lenguaje evolucionó, los desarrolladores de JavaScript establecieron bibliotecas, marcos y prácticas de programación y comenzaron a utilizarlo fuera de los navegadores web. En la actualidad, puede utilizar JavaScript para el desarrollo tanto del lado del cliente como del lado del servidor. En las siguientes subsecciones se presentan algunos casos de uso comunes:

                        Anteriormente, las páginas web eran estáticas, similares a las páginas de un libro. Una página estática mostraba principalmente información en un diseño fijo y no todo aquello que esperamos de un sitio web moderno. JavaScript surgió como una tecnología del lado del navegador para hacer que las aplicaciones web fueran más dinámicas. Por medio de JavaScript, los navegadores eran capaces de responder a la interacción de los usuarios y cambiar la distribución del contenido en la página web.

                        A medida que el lenguaje evolucionó, los desarrolladores de JavaScript establecieron bibliotecas, marcos y prácticas de programación y comenzaron a utilizarlo fuera de los navegadores web. En la actualidad, puede utilizar JavaScript para el desarrollo tanto del lado del cliente como del lado del servidor. En las siguientes subsecciones se presentan algunos casos de uso comunes</p>}
                </div>
            </section>

            <footer style={estiloFooter}>
                <div>
                    <h4 style={estiloH4} >Mas sobre JavaScript!!!</h4>
                    <a href="https://lenguajejs.com/" target="_blank" rel="noopener noreferrer">
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

export default PJavaScript;