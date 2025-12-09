import './Gazebo.css';
import { NavLink } from "react-router-dom";

function Hullabaloo() {
  return (
    <div className="gazebo-full-page">
      <div className="gazebo-nav-buttons">
        <NavLink to="/consoles" className="nav-link" style={{ color: 'white' }}>
          Consoles
        </NavLink>
      </div>
    <img src="/assets/hullabaloologo.png" width={600}/>
      <div className="gazebo-title">GAMES</div>

      <div className="gazebo-images">
        <NavLink to="/braakerout"><img src="/assets/games/braakerout.png" className="gazebo-img" /></NavLink>
        <NavLink to="/jimmylagoon"><img src="/assets/games/jimmylagoon.png" className="gazebo-img" /></NavLink>
        <NavLink to="/atomicinquiry"><img src="/assets/games/atomicinquiry.png" className="gazebo-img" /></NavLink>
        <NavLink to="/yummytreebark"><img src="/assets/games/yummytreebark.png" className="gazebo-img" /></NavLink>
        <NavLink to="/tryfallingsometime"><img src="/assets/games/tryfallingsometime.png" className="gazebo-img" /></NavLink>
      </div>
    </div>
  );
}

export default Hullabaloo;
