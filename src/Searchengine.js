import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Searchengine.css";

export default function SearchEngine() {
  return (
    <div className="container">
      <form className="searchEngine" id="search-engine">
        <input type="text" placeholder="Enter a city" id="city-input" />
        <input
          type="submit"
          value="Search"
          className="btn btn-success"
          id="search"
        />
        <input
          type="submit"
          value="My location"
          className="btn btn-primary"
          id="current"
        />
      </form>
    </div>
  );
}