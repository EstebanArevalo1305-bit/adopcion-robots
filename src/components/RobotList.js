import React from 'react';
import './RobotList.css';

export default function RobotList({ robots, onSelect }) {
  if (!Array.isArray(robots)) return null;

  return (
    <div className="table-responsive">
      <table className="table table-hover table-robot shadow rounded">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Modelo</th>
            <th>Empresa Fabricante</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <tr key={robot.id} onClick={() => onSelect(robot)} style={{ cursor: 'pointer' }}>
              <td>{robot.id}</td>
              <td>{robot.nombre}</td>
              <td>{robot.modelo}</td>
              <td>{robot.empresaFabricante}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
