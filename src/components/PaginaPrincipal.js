
import React from 'react';
import { Link } from 'react-router-dom';
import PCarrusel from './PCarrusel';
import Formulario from './Formulario';
import Btn from './Btn';

const PaginaPrincipal = () => {
    const estiloPaginaPrincipal = {
        minHeight: '100vh',
        background: 'linear-gradient(to right, #9bc5c3, salmon)',
        color: '#fff',
    };


    const estiloHeader = {
        textAlign: 'center',
        padding: '20px 0',
        fontSize: '22px',
        fontWeight: 'bold',
    };

    const estiloBotonSuccess = {
        backgroundColor: '#FF7E67',
        color: '#ffffff',
        borderRadius: '8px',
        border: '2px solid ',
        padding: '10px 20px',
        fontSize: '18px',
        width: '150px',
        margin: '10px',

    };

    const estiloBotonContainer = {
        position: 'relative',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        textAlign: 'center',
        marginTop: '220px', // Ajusta este valor según sea necesario
    };



    return (
        <div style={estiloPaginaPrincipal}>
            <header style={estiloHeader}>
                <h1>Proyecto Final INF-122</h1>
                <h1>Pagina Principal</h1>
            </header>

            <div>
                <PCarrusel data-bs-theme="dark" style={{ maxWidth: '600px', margin: 'auto' }} />
            </div>

            <div style={{ maxWidth: '300px', margin: '20px auto' }}> <h1>Registrarse</h1>
                <Formulario />
            </div>
            <div style={estiloBotonContainer}>
                <Btn estiloBotonSuccess={estiloBotonSuccess} />
            </div>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h1>Como usar bootstrap en react</h1>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/XPBniyikjek?si=WAi6voEEYVtiFvVN"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default PaginaPrincipal;