import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../imagenes/img1.png';
import img4 from '../imagenes/img4.png';
import img3 from '../imagenes/img3.png';

function PCarrusel() {

    const estiloCarrusel = {
       
        display: 'flex', 
        justifyContent: 'center',  
      };
    
      const estiloImagen = {
        maxHeight: '300px', 
      };
      
  return (
    <div style={estiloCarrusel}><Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img1}
        alt="First slide"
        style={estiloImagen}
      />
      <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
        <h5>Progrmacion</h5>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img4}
        alt="Second slide"
        style={estiloImagen}
      />
      <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
        <h5>Progrmacion</h5>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img3}
        alt="Third slide"
        style={estiloImagen}
      />
      <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
        <h5>Progrmacion</h5>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></div>
  )
}

export default PCarrusel