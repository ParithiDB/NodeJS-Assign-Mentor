const mongoose = require('mongoose');
const {Schema} = mongoose;

const mentorsSchema = new Schema({
    mentorName : {
        type: String, 
        required: true, 
        trim: true
    },
    assignedStudents : {
        type: Array, 
        required: true
    }
})

module.exports = mongoose.model("mentors",mentorsSchema);