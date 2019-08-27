import React, { Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/containers/home";
import Header from "../pages/components/header";
// import Playlist from './src/playlist/components/playlist';
import data from "../api.json";
// console.log('Hola mundo!' )

const homeContainer = document.getElementById("home-container");

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
render(
  <BrowserRouter>
    <Fragment>
      <Header />
      <Home data={data} />
    </Fragment>
  </BrowserRouter>,
  homeContainer
);
