const {Schema, model} = require('mongoose'); // pulling out the parts we want to use on mongoose programme

const toDo = new Schema({
    toDo: { type:String, unique: true, required: true},
    timeUploaded: {type: Date, required: true}
    },  {
    toObject: { // adding another object to our User object
        virtuals: true //we want to be able to use toObject method thru Schema, its already an object method within Schema.
    }
});


// toDo.statics.functionName() if we want to use a function within a class. 

module.exports = model('toDoList', toDo); 