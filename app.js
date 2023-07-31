const express = require('express');
const APP_SERVER = express();

APP_SERVER.get('/', (req, res, next) => {
    res.send(`
    <h1>Day 39 Task NodeJS Assign-Mentor</h1>

    <h2>Deployed Link</h2>
    <p><a target="_blank" href="https://assign-mentor-csug.onrender.com/">https://assign-mentor-csug.onrender.com/</a></p>

    <h2>To GET all Mentor detail</h2>
    <p>GET Method: <a target="_blank" href="https://assign-mentor-csug.onrender.com/mentor">https://assign-mentor-csug.onrender.com/mentor</a></p>

    <h2>To Create a New Mentor</h2>
    <p>POST Method: <a target="_blank" href="https://assign-mentor-csug.onrender.com/mentor/createMentor">https://assign-mentor-csug.onrender.com/mentor/createMentor</a></p>

    <hr />

    <h2>To GET all Student detail</h2>
    <p>GET Method: <a target="_blank" href="https://assign-mentor-csug.onrender.com/student">https://assign-mentor-csug.onrender.com/student</a></p>

    <h2>To Create a New Student</h2>
    <p>POST Method: <a target="_blank" href="https://assign-mentor-csug.onrender.com/student/createStudent">https://assign-mentor-csug.onrender.com/student/createStudent</a></p>

    <hr />

    <h2>To GET a certain Mentor detail</h2>
    <p>GET Method: <a target="_blank" href="https://assign-mentor-csug.onrender.com/mentor/Sachin">https://assign-mentor-csug.onrender.com/mentor/Sachin</a></p>

    <h2>To GET a certain Students detail</h2>
    <p>GET Method: <a target="_blank" href="https://assign-mentor-csug.onrender.com/student/SKY">https://assign-mentor-csug.onrender.com/student/SKY</a></p>

    <h2>To ASSIGN a Student to Mentor</h2>
    <p>PATCH Method: <a target="_blank" href="https://assign-mentor-csug.onrender.com/mentor/64c7151467c3fef91e372c34">https://assign-mentor-csug.onrender.com/mentor/64c7151467c3fef91e372c34</a></p>

    <h2>To RE-ASSIGN a Mentor to Student</h2>
    <p>PATCH Method: <a target="_blank" href="https://assign-mentor-csug.onrender.com/student/64c718d567c3fef91e372c48">https://assign-mentor-csug.onrender.com/student/64c718d567c3fef91e372c48</a></p>
    `);
  });
  

APP_SERVER.use('/mentor', require('./Controllers/Mentors.Controller'));
APP_SERVER.use('/student', require('./Controllers/Students.Controller'));


module.exports = APP_SERVER;