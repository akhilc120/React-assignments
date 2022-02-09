import React from "react";
//import logo from "./logo.svg";
import "./App.css";
const Appointment = {
  Name: "Akhil Reddy",
  EmployeeID: "00005152",
  appointment: new Date().toLocaleDateString(),
  Email: "akhilreddymannem8@gmail.com",
  Phone: "9966973213",
  Status:"In Process",
  Door:"Mark",
  Time:new Date().toLocaleTimeString(),
  Date:new Date().toLocaleDateString(),
  Image:"https://www.w3schools.com/howto/img_avatar.png",
  Address:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
};
var arrow = "<";
var rightarrow = ">";
function App() {
  return (
    <div className="site-container">
      {
        /* Start Your code here */
        <>
          <header>
            <a href="#"><div className="arrow"> {arrow} </div></a>
            <div className="first-div">
              <strong>{Appointment.Name}</strong>
              <span>{Appointment.EmployeeID}</span>
            </div>
            <div className="three">
              <button>Print</button>
            </div>
          </header>
          <div className="customer-info sectionpart">
            <div className="infoSection">
              <strong>Appointment on</strong>
              <span>9:00AM ({Appointment.appointment})</span>
            </div>
            <div className="infoSection">
              <strong>Email:</strong>
              <span>{Appointment.Email}</span>
            </div>
            <div className="infoSection">
              <strong>Phone</strong>
              <span>{Appointment.Phone}</span>
            </div>
          </div>
          <div className="order-info sectionpart">
            <div className="disipline">
              <strong>Status</strong>
              <ul>
                <li>{Appointment.Status}</li>
              </ul>
            </div>
            <div className="disipline">
              <strong>Door</strong>
              <span>{Appointment.Door}</span>
            </div>
            <div className="disipline">
              <strong>Time</strong>
              <div>
                <span>{Appointment.Time} ({Appointment.Date})</span>
              </div>
            </div>
          </div>
          <div className="product-list sectionpart">
            <div className="lastSection">
              <input type="checkbox"></input>
            </div>
            <div className="lastSection">
              <img src={Appointment.Image} width="100" height="100"alt="profile_pic"/>
            </div>
            <div className="lastSection">
              <strong>Address</strong>
              <p>{Appointment.Address}</p>
            </div>
            <a href="#"><div className="lastSection arrow">{rightarrow}</div></a>
          </div>
        </>
      }
    </div>
  );
}
export default App;