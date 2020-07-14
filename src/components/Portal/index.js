import React from "react";
import { Link } from "react-router-dom";

function Portal(props) {
  return (
    <div className="jumbotron shadow-lg">
        <h1 className="display-4 text-center dark-color-text"><Link to={props.page}>{props.name}</Link></h1>
    </div>
  );
}



export default Portal;
