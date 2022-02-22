import React from "react";

const ListContainer = () => {
  return (
    <div className="col-md-8">
      <h2 className="list-container-title">Volunteer register list</h2>
      <div className="list-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Registering Date</th>
              <th>Volunteer list</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>yeain</td>
              <td>yehad@gamil.com</td>
              <td>23/23/2021</td>
              <td>ichamotin child club</td>
              <td>
                <button className="primary-btn">ac</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListContainer;
