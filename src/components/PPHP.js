import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import phplogo3 from '../imagenes/PHP-logo3.png';

const PPHP = () => {
    const estiloPaginaPhp = {
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
    const videoUrl = 'https://www.youtube.com/embed/iqGUAKI0xsI?si=6s8QKioss-3xYowX';


    return (
        <div style={estiloPaginaPhp}>
            <header style={estiloHeader}>
                <img
                    src={phplogo3}
                    alt="PHP Logo"
                    style={estiloLogo}
                />
                <h1>Lenguaje de Progrmacion PHP</h1>
            </header>

            <section style={estiloSeccion}>
                <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
                    <h2 style={estiloColumna}>¿Qué es PHP?</h2>
                    {<p>
                        PHP es un lenguaje de programación de uso general que se utiliza, sobre todo, en el entorno del desarrollo web. Este lenguaje se utiliza generalmente para desarrollar el backend de una web, el lado del servidor. Aun así, tiene numerosas utilidades en frontend. Es por esto que es uno de los principales lenguajes de programación en el mundo de la programación web.
                        <h2 style={estiloColumna}>Características y particularidades</h2>
                        PHP tiene una característica que lo diferencia de los demás lenguajes, y es que está diseñado para incrustarse en HTML. Esto significa que un documento HTML puede contener elementos de PHP integrados, siempre y cuando se sigan unas normas determinadas.

                        Una de las particularidades de PHP es que el código donde se integre se ejecutará en el lado del servidor y sólo después se enviará al cliente. En consecuencia, el cliente únicamente recibirá el resultado del script, no el código que lo conforma. Esto significa que, al ejecutar un archivo PHP, este llega al navegador en forma de HTML. Debido a esto, el código incrustado será invisible para los usuarios.

                        Con esto deberías hacerte una idea de qué es lo que diferencia PHP de los demás lenguajes, incluso de aquellos utilizados en desarrollo web. </p>}
                </div>
                <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
                    <h2 style={estiloColumna}>¿Para qué sirve el PHP?</h2>
                    {<p>
                        Ahora que ya tienes una idea de las características de este lenguaje, vamos a responder a otra pregunta clave: ¿Qué se puede hacer con PHP?¿Para qué sirve exactamente?

                        En primer lugar, hay que destacar que nos centraremos en explicar para qué sirve PHP en el contexto del desarrollo web, su aplicación más popular.

                        Como se ha mencionado, PHP es un lenguaje que puede incrustarse en HTML para añadirle nuevas funcionalidades. HTML es un código estático que, en consecuencia, crea webs puramente estáticas: haga lo que haga el usuario, el código no variará y, por ello, la página tampoco. </p>}
                    <h2 style={estiloColumna}>Principales ventajas del PHP</h2>
                    {<p>
                        Lenguaje de código abierto y con una extensa comunidad detrás.
                        Fácil integración en las bases de datos. Además, puede ser usado en la gran mayoría.
                        Ofrece seguridad. Es muy útil para evitar ataques informáticos.
                        Lenguaje multiplataforma y aceptado por los navegadores más populares (los mismos que aceptan HTML).
                        Relativamente fácil de aprender. Cuenta con una sintaxis muy clara y puede usarse en proyectos simples. Al mismo tiempo, también es ideal para proyectos de alta complejidad.
                        Permite trabajar con una gran cantidad de datos, por lo que es ideal incluso para las webs más populares. </p>}

                </div>
            </section>

            <footer style={estiloFooter}>
                <div>
                    <h4 style={estiloH4}>Mas sobre PHP!!!</h4>
                    <a style={estiloH4} href="https://www.php.net/manual/es/index.php" target="_blank" rel="noopener noreferrer">
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

export default PPHP;