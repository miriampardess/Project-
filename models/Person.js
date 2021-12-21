const  mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    age: {type: Number},
    name: {type: String}
})

 

module.exports = mongoose.model('Person',PersonSchema);
