import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import Dropdown from "react-bootstrap/Dropdown";

const Categories = () => {
 

  return (
    <div className="hidden lg:flex">
      <nav className="navbar bg-blac navbar-expand-lg navbar-light categories-container">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 categories">
          <li
           
            className="nav-item navbar-item"
          >
            <Link className={"text-white"} aria-current="page" to="/shops">
              Shop
           
            </Link>
          </li>
          <li  className="nav-item navbar-item">
            <Link className="nav-link" aria-current="page" to="/">
              Airtime & Bills
            </Link>
          </li>
          <li className="nav-item navbar-item">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic_">
                Movies & Events
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/">Events</Dropdown.Item>
                <Dropdown.Item href="/">Movies</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li className="nav-item navbar-item">
            <Link className="nav-link" aria-current="page" to="/">
              Experience
            </Link>
          </li>

          <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic_">
              Flights & Hotels
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/">Flights</Dropdown.Item>
              <Dropdown.Item href="/">Hotels</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <li  className="nav-item navbar-item">
            <Link className="nav-link" aria-current="page" to="/">
              Vouchers
            </Link>
          </li>

          <li  className="nav-item navbar-item">
            <Link className="nav-link" aria-current="page" to="/">
              Discount
              {/* <select name="drop-down" id="greeting-drop" className="drop-item">
                <option value="greeting">Special Offers</option>
              </select> */}
            </Link>
          </li>
          <li className="nav-item navbar-item">
            <Link className="nav-link" to="/">
              Meals
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Categories;
