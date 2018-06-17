const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3005;

let categories = [
    {
        title: "animals",
        list: ['cat', 'dog', 'rabbit', 'unicorn', 'dragon', 'fox', 'bear', 'wolf', 'coyote', 'otter', 'shark', 'skunk', 'mouse', 'moose', 'elk', 'rat', 'hedgehog', 'whale', 'donkey', 'pangolin', 'ant eater', 'horse', 'buffalo', 'elephant', 'zebra', 'tiger', 'leopard', 'lion', 'pig', 'cow'],
        idNum: 1
    },
    {
        title: "history",
        list: ['George Washington', 'Abraham Lincoln', 'Booker T. Washington', 'Betsy Ross', 'Battle of Waterloo', 'Harriet Tubman', 'King Tut', 'Cleopatra', 'Napoleon', 'Revolutionary War', 'Civil War'],
        idNum: 2
    },
    {   
        title: "movies",
        list: ['Star Wars', 'Scott Pilgrim vs. the World', 'Thor: Ragnarok', 'The Imitation Game', 'Moonrise Kingdom', 'Indiana Jones', 'Paul Blart: Mall Cop', 'Harry Potter', 'Watership Down', 'Pirates of the Caribbean', 'Oh Brother, Where Art Thou?', 'Star Trek', 'The Avengers', 'Black Panther'],
        idNum: 3
    },
    {
        title: "food",
        list: ['apple', 'banana', 'corn dog', 'watermelon', 'cotton candy', 'ice cream', 'pizza', 'chocolate', 'lollipop', 'apple pie', 'chocolate cake', 'popsicle', 'lemon drops', 'pasta', 'peanut butter', 'sugar', 'pineapple', 'mango', 'papaya', 'strawberry', 'blueberry', 'raspberry', 'bread', 'pancakes', 'french toast', 'strudel', 'peach', 'apricot', 'carrots', 'spinach', 'broccoli'],
        idNum: 4
    },
    {
        title: "books",
        list: ['Pride and Prejudice', 'Hamlet', 'Watership Down', '1984', 'Romeo and Juliet', 'The Great Gatsby', 'A Christmas Carol', 'Farenheit 451'],
        idNum: 5
    }
]

let idNum = 6;

app.get("/api/list_grid", (req, res) => {
    res.send({categories: categories, idNum: idNum});
});

app.post("/api/list_grid", (req, res) => {
    let newTitle = req.body.titleInput;
    let newList = req.body.wordList;
    let id = req.body.idNum;
    let newCategory = {
        title: newTitle,
        list: newList,
        idNum: id
    };
    categories.push(newCategory);
    idNum++;
    res.send({categories: categories, idNum: idNum});
});








app.listen(port, () => {
    console.log('Server is listening on port ' + port)
});