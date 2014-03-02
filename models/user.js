var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var userSchema = new Schema({
  name:     { type: String },
  surname:  { type: String },
  email:    { type: String },
  gender:   { type: String, enum:
  ['Masculino', 'Femenino']},
});

module.exports = mongoose.model('User', userSchema);