import React from "react";


function Project(props) {
  return (
  <div className="jumbotron">
    <h1 className="display-4">{props.name} <a href={props.repo} className="card-link dark-color"><i className="fab fa-github fa-1x"></i></a>
    <a href={props.deployed} className="card-link dark-color"><i class="fas fa-mobile-alt fa-1x"></i></a> </h1>
    <p className="lead">{props.description}</p>
    <p className="lead">Technologies used include {props.technologies}</p>
  </div>
  );
}

export default Project;