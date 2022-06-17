const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  carTag: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  grade: { type: String, required: true },
  dismissed: { type: Boolean, required: true }
}, {
  timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;