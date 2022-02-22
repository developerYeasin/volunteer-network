import React from 'react';
import SideBar from '../SideBar/SideBar';
import Form from './Form';

const VolunteerAddForm = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <SideBar/>
          <Form/>
        </div>
      </div>
    );
};

export default VolunteerAddForm;