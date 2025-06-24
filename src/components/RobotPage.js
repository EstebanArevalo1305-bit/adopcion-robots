import React, { useEffect, useState } from 'react';
import RobotList from './RobotList';
import RobotDetail from './RobotDetail';
import banner from '../assets/banner.PNG';

export default function RobotPage() {
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/josejbocanegra/aa5fb56863c326ebb3d558f8a225d223/raw/5c55db5012e5fc24862e05847ff1f2927aea11db/robots.json')
      .then(res => res.json())
      .then(data => setRobots(data))
      .catch(err => {
        console.error('Error al cargar robots:', err);
        setRobots([]);
      });
  }, []);

  return (
    <div className="container my-4">
      <div className="text-center mb-4">
        <img
          src={banner}
          alt="Banner Robots"
          className="img-fluid d-block mx-auto"
          style={{
            width: '100%',
            maxWidth: '1000px',
            height: 'auto',
            borderRadius: '12px',
            objectFit: 'cover',
          }}
        />
        <h2 className="fw-bold mt-3 text-primary"> Adopta un Robot con Robot Lovers!</h2>
      </div>

      <div className="row gx-4">
        <div className="col-md-7">
          <RobotList robots={robots} onSelect={setSelectedRobot} />
        </div>
        <div className="col-md-5">
          <RobotDetail robot={selectedRobot} />
        </div>
      </div>
    </div>
  );
}
