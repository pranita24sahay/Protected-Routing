import React from 'react';
import './Dashboard.css';
const Dashboard = (props) => {
  return (
    <div>
      <h1>Welcome!</h1>
      <h3>You are an authorized user.</h3>
      <p>Secret Page</p>
      <button onClick={props.handleLogout} className="  button-style-1 btn1">Log Out</button>
    </div>
  )
};

export default Dashboard;