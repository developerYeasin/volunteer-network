import React from 'react';
import Navbar from '../Navbar/Navbar';
import EventBox from './EventBox';
import './Event.css';

const Event = () => {
    return (
        <div>
            <Navbar/>
            <div className="container event-container">
                <div className="row">
                    <EventBox/>
                    <EventBox/>
                    <EventBox/>
                    <EventBox/>
                </div>
            </div>
        </div>
    );
};

export default Event;