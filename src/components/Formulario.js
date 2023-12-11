import React, { useState } from 'react';

function Formulario() {
  const estiloFormulario = {
    border: '2px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '20px',
  };
  
  const estiloBtnContainer = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const estiloBtnEnviar = {
    flex: '1',
    backgroundColor: '#28a745',
    borderRadius: '8px',
    padding: '10px 20px',
    fontSize: '18px',
    marginRight: '5px',
    cursor: 'pointer',
  };

  const estiloBtnLimpiar = {
    flex: '1',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '10px 20px',
    fontSize: '18px',
    marginLeft: '5px',
    cursor: 'pointer',
  };

  const [campos, setCampos] = useState({
    nombreCompleto: '',
    edad: '',
    email: '',
  });

  const limpiarCampos = () => {
    setCampos({
      nombreCompleto: '',
      edad: '',
      email: '',
    });
  };

  const actualizarCampo = (campo, valor) => {
    setCampos((prevCampos) => ({
      ...prevCampos,
      [campo]: valor,
    }));
  };

  const enviarFormulario = () => {
    alert('Formulario enviado', campos);
  };

  return (
    <div>
      <div className="mb-3" style={estiloFormulario}>
        <label htmlFor="nombreCompleto" className="form-label">
          Ingrese su nombre completo
        </label>
        <input
          type="text"
          className="form-control"
          id="nombreCompleto"
          value={campos.nombreCompleto}
          onChange={(e) => actualizarCampo('nombreCompleto', e.target.value)}
        />
      </div>
      <div className="mb-3" style={estiloFormulario}>
        <label htmlFor="edad" className="form-label">
          Ingrese su edad
        </label>
        <input
          type="number"
          className="form-control"
          id="edad"
          value={campos.edad}
          onChange={(e) => actualizarCampo('edad', e.target.value)}
        />
      </div>
      <div className="mb-3" style={estiloFormulario}>
        <label htmlFor="email" className="form-label">
          Ingrese su email de contacto
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="nombre@ejemplo.com"
          value={campos.email}
          onChange={(e) => actualizarCampo('email', e.target.value)}
        />
      </div>

      <div style={estiloBtnContainer}>
        <button style={estiloBtnEnviar} onClick={enviarFormulario}>
          Enviar
        </button>
        <button style={estiloBtnLimpiar} onClick={limpiarCampos}>
          Limpiar
        </button>
      </div>
    </div>
  );
}

export default Formulario;