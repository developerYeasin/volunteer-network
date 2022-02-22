import React from 'react';
import SideBar from '../SideBar/SideBar';
import ListContainer from './ListContainer';

const VolunteerList = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <ListContainer/>
        </div>
      </div>
    );
};

export default VolunteerList;