import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

function Btn() {
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
        marginTop: '40px', // Ajusta este valor según sea necesario
    };


  return (
    <div style={estiloBotonContainer}>
    <Container style={{ marginTop: '20px', textAlign: 'center', flex: 1 }}>
        <Link to="/python">
            <Button variant="success" style={{ margin: '10px', ...estiloBotonSuccess }}>Python</Button>
        </Link>
        <Link to="/java">
            <Button variant="success" style={{ margin: '10px', ...estiloBotonSuccess }}>Java</Button>
        </Link>
        <Link to="/javaScript">
            <Button variant="success" style={{ margin: '10px', ...estiloBotonSuccess }}>JavaScript</Button>
        </Link>
        <Link to="/cmas">
            <Button variant="success" style={{ margin: '10px', ...estiloBotonSuccess }}>C+</Button>
        </Link>
        <Link to="/cmasmas">
            <Button variant="success" style={{ margin: '10px', ...estiloBotonSuccess }}>C++</Button>
        </Link>
        <Link to="/typescript">
            <Button variant="success" style={{ margin: '10px', ...estiloBotonSuccess }}>TypeScript</Button>
        </Link>
        <Link to="/php">
            <Button variant="success" style={{ margin: '10px', ...estiloBotonSuccess }}>PHP</Button>
        </Link>
        <Link to="/go">
            <Button variant="success" style={{ margin: '10px', ...estiloBotonSuccess }}>Go</Button>
        </Link>
        <Link to="/swift">
            <Button variant="success" style={{ margin: '10px', ...estiloBotonSuccess }}>Switf</Button>
        </Link>
        <Link to="/sql">
            <Button variant="success" style={{ margin: '10px', ...estiloBotonSuccess }}>SQL</Button>
        </Link>
    </Container>
    </div>
  )
}

export default Btn