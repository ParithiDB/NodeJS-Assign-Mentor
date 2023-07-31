const express = require('express');
const APP_SERVER = express();

APP_SERVER.get('/', (req, res, next) => {
    res.send(`
      <h1>Hall-Booking</h1>
      <h1>Day 38 Task NodeJS Hall-Booking</h1>
  
      <h3>Deployed Link</h3>
      <a target="_blank" href="https://hallbooking-cugq.onrender.com/"><i>https://hallbooking-cugq.onrender.com/</i></a>
  
      <h3>To GET all Users detail</h3>
      <p>GET Method: <a target="_blank" href="https://hallbooking-cugq.onrender.com/users"><i>https://hallbooking-cugq.onrender.com/users</i></a></p>
  
      <h3>To Create a New User</h3>
      <p>POST Method: <a target="_blank" href="https://hallbooking-cugq.onrender.com/users/createUser"><i>https://hallbooking-cugq.onrender.com/users/createUser</i></a></p>
  
      <hr/>
  
      <h3>To GET all Hall detail</h3>
      <p>GET Method: <a target="_blank" href="https://hallbooking-cugq.onrender.com/halls"><i>https://hallbooking-cugq.onrender.com/halls</i></a></p>
  
      <h3>To Create a New Hall</h3>
      <p>POST Method: <a target="_blank" href="https://hallbooking-cugq.onrender.com/halls/createHall"><i>https://hallbooking-cugq.onrender.com/halls/createHall</i></a></p>
  
      <hr/>
  
      <h3>To GET all Booking detail</h3>
      <p>GET Method: <a target="_blank" href="https://hallbooking-cugq.onrender.com/booking"><i>https://hallbooking-cugq.onrender.com/booking</i></a></p>
  
      <h3>To Create a New User</h3>
      <p>POST Method: <a target="_blank" href="https://hallbooking-cugq.onrender.com/booking/createBooking"><i>https://hallbooking-cugq.onrender.com/booking/createBooking</i></a></p>
  
      <h3>To GET all Booked Halls</h3>
      <p>GET Method: <a target="_blank" href="https://hallbooking-cugq.onrender.com/booking/bookedHall"><i>https://hallbooking-cugq.onrender.com/booking/bookedHall</i></a></p>
  
      <h3>To GET a certain User Booking Detail</h3>
      <p>GET Method:</p>
      <ul>
        <li><a target="_blank" href="https://hallbooking-cugq.onrender.com/booking/Sachin%20Tendulkar"><i>https://hallbooking-cugq.onrender.com/booking/Sachin%20Tendulkar</i></a></li>
        <li><a target="_blank" href="https://hallbooking-cugq.onrender.com/booking/Rahul%20Dravid"><i>https://hallbooking-cugq.onrender.com/booking/Rahul%20Dravid</i></a></li>
        <li><a target="_blank" href="https://hallbooking-cugq.onrender.com/booking/Sourav%20Ganguly"><i>https://hallbooking-cugq.onrender.com/booking/Sourav%20Ganguly</i></a></li>
        <li><a target="_blank" href="https://hallbooking-cugq.onrender.com/booking/VVS%20Laxman"><i>https://hallbooking-cugq.onrender.com/booking/VVS%20Laxman</i></a></li>
      </ul>
    `);
  });
  

APP_SERVER.use('/mentor', require('./Controllers/Mentors.Controller'));
APP_SERVER.use('/student', require('./Controllers/Students.Controller'));


module.exports = APP_SERVER;