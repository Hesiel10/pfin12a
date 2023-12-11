import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import cmaslogo from '../imagenes/Cmas-logo.png';

const PCMas = () => {
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
                    src={cmaslogo}
                    alt="C+ Logo"
                    style={estiloLogo}
                />
                <h1>Lenguaje de Progrmacion C+</h1>
            </header>

            <section style={estiloSeccion}>
                <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
                    <h2 style={estiloColumna}>¿Qué es C+?</h2>
                    {<p>
                        El lenguaje de programación C empezó a ser utilizado en la década de los 70. Para ser más exactos, C nació en 1978 con la publicación de “The C Programming Language”, popularmente conocido como “La Biblia de C” y escrito por Brian Kernighan y Dennis Ritchie. Este lenguaje estuvo muy unido a UNIX, ya que se usó para definir el sistema operativo, el compilador y los programas que funcionaban en UNIX. En definitiva, C fue diseñado con el objetivo de darle al programador un control sobre sus programas, permitiendo la programación de bajo nivel.</p>}
                    <p>¿En qué se diferencia C de otros lenguajes “C”?</p>
                    <p>
                        Además de C, podemos encontrar otros lenguajes que comparten la raíz del nombre y algunas características. Existe el caso de C with Classes, más conocido como C++ al realizar un juego con el operador incremento (++) de C.

                        C++ fue creado en la primera mitad de los años 80 por Bjarne Stroustrup, que trató de darle a C mecanismos que permitieran usar este lenguaje en la programación orientada a objetos. En un principio, C++ era compatible con C, lo que quiere decir es que cualquier programa escrito en C era un programa válido también en el lenguaje C++... situación que no se daba al contrario. Esto tenía un claro objetivo: favorecer la adopción del nuevo lenguaje por parte de los profesionales que utilizaban C y que buscaban dar el salto a la programación orientada a objeto.

                        Con la llegada del nuevo milenio, Anders Hejlsberg de Microsoft mejoró C++, creando C# (pudiéndose interpretar como C++++) y diseñando un lenguaje destinado para la programación de alto nivel. Con este nuevo y mejorado lenguaje, Microsoft pretendía competir con Java, que había ido ganando adeptos por su facilidad de uso frente a C++.
                    </p>
                </div>
                <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
                    <h2 style={estiloColumna}>¿Dónde se utiliza todavía C?</h2>
                    {<p>
                        Aunque ya no es tan popular como en la década de los 70, muchos proyectos se inician todavía hoy con programación en C aunque sea un lenguaje de alto nivel. Por poner algún ejemplo, tanto el kernel de Microsoft Windows como el de Mac y Linux, al igual que los de iOS, Android y Windows Phone, están escritos en C. Las bases de datos más populares del mundo, entre las que podemos destacar Oracle, PostgreSQL y MySQL, y que son utilizadas en todo tipo de sistemas financieros, gubernamentales, salud, educación y similares. Otro uso también es la realización de películas en 3D, que son creadas a partir de aplicaciones escritas en C gracias a la rapidez y eficiencia del lenguaje.</p>}
                </div>
            </section>

            <footer style={estiloFooter}>
                <div>
                    <h4 style={estiloH4}>Mas sobre C+!!!</h4>
                    <a style={estiloH4} href="https://visualstudio.microsoft.com/es/vs/features/cplusplus/" target="_blank" rel="noopener noreferrer">
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

export default PCMas;