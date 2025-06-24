import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import './RobotDetail.css';

export default function RobotDetail({ robot }) {
  const [adoptado, setAdoptado] = useState(false);

  if (!robot) {
    return (
      <div className="text-muted small">
        <FormattedMessage id="sin_robot" />
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
        <li><strong><FormattedMessage id="detalle_anio" />:</strong> {robot.añoFabricacion}</li>
        <li><strong><FormattedMessage id="detalle_proc" />:</strong> {robot.capacidadProcesamiento}</li>
        <li><strong><FormattedMessage id="detalle_desc" />:</strong> {robot.humor}</li>
      </ul>

      <div className="text-center mt-3">
        <button className="btn btn-success" onClick={handleAdoptar}>
          <FormattedMessage id="adoptar" />
        </button>
        {adoptado && (
          <div className="alert alert-success mt-3 p-2">
            <FormattedMessage id="adopcion_exito" values={{ name: robot.nombre }} />
          </div>
        )}
      </div>
    </div>
  );
}
