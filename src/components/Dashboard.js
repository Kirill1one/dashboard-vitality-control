
import { Link } from "react-router-dom";
import "../styles/styles.css";

function Dashboard() {
  return (

    <div className="container">
      <div className="item-links">

        <Link to="/food">Трекер еды</Link>
        <br />
        <br />
        <Link to="/water">Трекер воды</Link>
        <br />
        <br />
        <Link to="/charts">Трекер каллорий</Link>

      </div>

    </div>

  );
}

export default Dashboard;
