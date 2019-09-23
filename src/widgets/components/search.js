import React from "react";
import "./search.css";
import { Prompt } from "react-router";

const Search = props => (
  <form className="Search" onSubmit={props.handleSubmit}>
    <Prompt when={props.prompt} message="¿Are you sure to leave this page?" />
    <input
      ref={props.setRef}
      type="text"
      placeholder="Busca tu video favorito"
      className="Search-input"
      name="search"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
);

export default Search;
