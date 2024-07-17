const mongoose = require('mongoose');

// Todo {
//     title: string;
//     dscription: string;
//     completed: boolean
// }




mongoose.connect("mongodb+srv://prem:prem1234@cluster0.idjmvt8.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}