const Todo = require('../models/todoModel');

exports.getIndex =  (req, res) => { // localhost:3000/ home page
    res.render('index');
};
exports.getToDo = (req,res) => { // we are adding this function into this exports object
    res.render('todo')
};
exports.postToDo = async (req, res) => {
 
    let todo = new Todo ({
        toDo: req.body.toDo,
        timeUploaded: Date.now()
    });
    await todo.save().catch((error) => {
        console.log(error);
    })
    // let todo = await Todo.findOne({todo:req.query.todo}) 
    // res.redirect('todo', {todo: todo.toObject()});

    res.render('todo', {success: 'todo has been added to the list'});
};

