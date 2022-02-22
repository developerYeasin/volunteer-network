import React from 'react';
import { Link } from 'react-router-dom';

const Box = () => {
    return (
      <div className="col-lg-3">
        <Link to="event">
          <div className="card-img-item">
            <img src="./images/childSupport.png" alt="" className="w-100" />
            <h4>Child Support</h4>
          </div>
        </Link>
      </div>
    );
};

export default Box;