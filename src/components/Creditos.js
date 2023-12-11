import React from 'react'

function Creditos() {
    const estiloCreditos = {
        background: '#355C7D',
        background: '-webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)',
        background: 'linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
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
    
     
    
      
    
      

  return (
    <div style={estiloCreditos}>
      <section style={estiloSeccion}>
        <div style={{ flex: 1, ...estiloContenido, marginLeft: '20px', marginRight: '20px' }}>
          <h2 style={estiloColumna}>Creditos</h2>
          {<p>Nombre: Alan Hesiel Callisaya Quequesani</p>}
          {<p>CI: 10028735</p>}
          {<p>INF-122 Paralelo "A"</p>}
          {<p>Diciembre 2023</p>}
        </div>
        
      </section>
    </div>
  )
}

export default Creditos