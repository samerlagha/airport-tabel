import React, { useState } from "react";
import * as flightActions from "../../store/flights.actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.scss";

const Header = () => {
  const [searchValue, setValue] = useState("");

  return (
    <header className="header">
      <h2 className="title">ПОШУК РЕЙСУ</h2>
      <form className="search-form">
        <div className="icon">
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </div>
        <input
          name="search"
          className="search-value"
          type="text"
          value={searchValue}
          onChange={() => setValue(event.target.value)}
          placeholder="Номер рейсу "
        />

        <Link
          to={`/departure?search=${searchValue}`}
          
          style={{ textDecoration: "none", color: "black" }}
        >
          <button className="search-btn" type="submit">
          ПОШУК
          </button>
        </Link>
      </form>
    </header>
  );
};

export default connect(null, flightActions)(Header);
