const MentorsRouter = require('express').Router();
const MentorModel = require('../Models/Mentors.model');
var mongoose = require("mongoose");

MentorsRouter.get('/',(req,res,next) => {
    MentorModel.find()
    .then(mentors => {
        return res.status(200).json({
            result : mentors,
            success : true,
            message : "Mentors fetched Successfully!!!"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "Mentors not fetched",
            Error : err
        })
    })
})


MentorsRouter.post('/createMentor', (req,res,next) => {
    const data = req.body;
    const NewMentor = new MentorModel(data);
    NewMentor.save()
    .then(result => {
        return res.status(200).json({
            result : result,
        success : true,
        message : "Mentor Added Successfully!!"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "Mentor Failed to Add!",
            Error : err
        })
    })
})

MentorsRouter.patch('/:mentorId', (req,res,next) => {
    const updatedData = req.body;
    const {mentorId} = req.params;
    const Id = new mongoose.Types.ObjectId(mentorId);
    MentorModel.findOneAndUpdate(
        {_id: Id}, updatedData, {new: true})
    .then((response) => {
        if(response && response._id){
            return res.status(200).json({
                result : response,
                success : true,
                message : "Mentor Updated"
        })
    }
})
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "Mentor failed to Update",
            Error : err
        })
    })
})


MentorsRouter.get('/:mentorName', (req,res,next) => {
    const {mentorName} = req.params;
    MentorModel.find()
    .then(response => {
        const matchedData = response.filter(item => item.name === mentorName);
        return res.status(200).json({
            result : matchedData,
            success : true,
            message : "Mentor details found"
        })
    })
    .catch(err => {
        return res.status(401).json({
            success : false,
            message : "Mentor details not found",
            Error : err
        })
    })
})


module.exports = MentorsRouter;