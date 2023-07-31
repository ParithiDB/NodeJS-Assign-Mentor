const studentsRouter = require('express').Router();
const { default: mongoose } = require('mongoose');
const studentModel = require('../Models/Students.model');

studentsRouter.get('/',(req,res,next) => {
    studentModel.find()
    .then(students => {
        return res.status(200).json({
            result : students,
            success : true,
            message : "Students fetched Successfully"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "Students fetch Failed!",
            Error : err
        })
    })
})


studentsRouter.post('/createStudent',(req,res,next) => {
    const data = req.body;
    const NewStudent = new studentModel(data);
    NewStudent.save()
    .then(result => {
        return res.status(200).json({
            result : result,
            success : true,
            message : "Student created SuccessFully"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "Student creation Failed",
            Error : err
        })
    })

})


studentsRouter.patch('/:studentId', (req,res,next) => {
    const updatedData = req.body;
    const {studentId} = req.params;
    const updateStudent = new mongoose.Types.ObjectId(studentId);
    studentModel.findOneAndUpdate(
        {_id:updateStudent},updatedData,{new:true})
    .then(response => {
        return res.status(200).json({
            result : response,
            success : true,
            message : "Student update Successfull"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "Student update failed",
            Error : err
        })
    })
})


studentsRouter.get('/:studentName', (req,res,next) => {
    const {studentName} = req.params;
    studentModel.find()
    .then(response => {
        const matchedData = response.filter(item => item.name === studentName);
        return res.status(200).json({
            result : matchedData,
            success : true,
            message : "Student detail found"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "Student not found",
            Error : err
        })
    })
})

module.exports = studentsRouter;