// import { Link } from "react-router-dom";
import "./Eror.css";

const Error = () => {
  return (
      <div id="error404">
        <div className="error-container">
        <h1 className="error-code">404</h1>
        <p className="error-message">Error not found</p>
        {/* <ul>
          <li>
            <Link to="home">avtoelon uz</Link>
          </li>
        </ul> */}
      </div>
      </div>
  );
};

export default Error;
