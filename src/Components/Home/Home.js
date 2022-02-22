import React from "react";
import Navbar from "../Navbar/Navbar";
import Box from "./Box";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        className="header-section"
        style={{ backgroundImage: `url('./images/goodEducation.png')` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center header-title">
                I grow by helping people need
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="search-bar text-center">
                <input type="text" placeholder="Search..." />
                <button className="primary-btn">Search</button>
              </div>
            </div>
          </div>
          <div className="row">
            <Box/>
            <Box/>
            <Box/>
            <Box/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
