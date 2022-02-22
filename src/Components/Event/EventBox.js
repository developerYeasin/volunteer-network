import React from 'react';

const EventBox = () => {
    return (
      <div className="col-md-6">
        <div className="event-box">
          <div className="event-img">
            <img src="./images/extraVolunteer.png" alt="" />
          </div>
          <div className="event-content">
            <h3 className="title">humanity more</h3>
            <p className="date">29 sep, 2021</p>
            <div className="cancel">
              <button className="primary-btn">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default EventBox;