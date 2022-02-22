import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VolunteerAddForm from './Components/Admin/VolunteerAddForm/VolunteerAddForm';
import VolunteerList from "./Components/Admin/VolunteerList/VolunteerList";
import Event from './Components/Event/Event';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import NoPage from './Components/NoPage/NoPage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>#Email{loggedInUser.email}</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="volunteer-list" element={<VolunteerList />} />
          <Route path="volunteer-add-form" element={<VolunteerAddForm />} />
          <Route
            path="event"
            element={
              <PrivateRoute>
                <Event />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;