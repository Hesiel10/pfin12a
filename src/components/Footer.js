import React from 'react';

const Footer = () => {
    const estiloFooter = {
        backgroundColor: 'salmon',
        textAlign: 'center',
        padding: '10px',
        bottom: 0,
        width: '100%',
        color: '#fff',
    };

    return (
        <div style={estiloFooter}>
            <p>Todos los derechos reservados &copy; 2023</p>
        </div>
    );
};

export default Footer;