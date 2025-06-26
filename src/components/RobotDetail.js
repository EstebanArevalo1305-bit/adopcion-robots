import React, { useState } from 'react';
import './RobotDetail.css';

export default function RobotDetail({ robot }) {
  const [adoptado, setAdoptado] = useState(false);

  if (!robot) {
    return (
      <div className="text-muted small">
        Selecciona un robot para ver los detalles.
      </div>
    );
  }

  const handleAdoptar = () => {
    setAdoptado(true);
    setTimeout(() => setAdoptado(false), 3000);
  };

  return (
    <div className="robot-detail card shadow-sm p-3">
      <h4 className="text-center text-primary">{robot.nombre}</h4>
      <img
        src={robot.imagen}
        alt={robot.nombre}
        className="img-fluid mb-3 d-block mx-auto"
        style={{ maxHeight: '180px', objectFit: 'contain' }}
      />
      <ul className="list-unstyled small">
        <li><strong>Año de fabricación:</strong> {robot.añoFabricacion}</li>
        <li><strong>Capacidad de procesamiento:</strong> {robot.capacidadProcesamiento}</li>
        <li><strong>Características adicionales:</strong> {robot.humor}</li>
      </ul>

      <div className="text-center mt-3">
        <button className="btn btn-success" onClick={handleAdoptar}>
          Adoptar 🤖
        </button>
        {adoptado && (
          <div className="alert alert-success mt-3 p-2">
            ¡Has adoptado a <strong>{robot.nombre}</strong> con éxito! 🎉
          </div>
        )}
      </div>
    </div>
  );
}
