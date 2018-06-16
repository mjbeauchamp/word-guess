const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3005;

let categories = {
    animals: ['cat', 'dog', 'rabbit', 'unicorn', 'dragon', 'fox', 'bear', 'wolf', 'coyote', 'otter', 'shark', 'skunk', 'mouse', 'moose', 'elk', 'rat', 'hedgehog', 'whale', 'donkey', 'pangolin', 'ant eater', 'horse', 'buffalo', 'elephant', 'zebra', 'tiger', 'leopard', 'lion', 'pig', 'cow'],
    history: ['George Washington', 'Abraham Lincoln', 'Booker T. Washington', 'Betsy Ross', 'Battle of Waterloo', 'Harriet Tubman', 'King Tut', 'Cleopatra', 'Napoleon', 'Revolutionary War', 'Civil War'],
    movies: ['Star Wars', 'Scott Pilgrim vs. the World', 'Thor: Ragnarok', 'The Imitation Game', 'Moonrise Kingdom', 'Indiana Jones', 'Paul Blart: Mall Cop', 'Harry Potter', 'Watership Down', 'Pirates of the Caribbean', 'Oh Brother, Where Art Thou?', 'Star Trek', 'The Avengers', 'Black Panther'],
    food: ['apple', 'banana', 'corn dog', 'watermelon', 'cotton candy', 'ice cream', 'pizza', 'chocolate', 'lollipop', 'apple pie', 'chocolate cake', 'popsicle', 'lemon drops', 'pasta', 'peanut butter', 'sugar', 'pineapple', 'mango', 'papaya', 'strawberry', 'blueberry', 'raspberry', 'bread', 'pancakes', 'french toast', 'strudel', 'peach', 'apricot', 'carrots', 'spinach', 'broccoli'],
    books: ['Pride and Prejudice', 'Hamlet', 'Watership Down', '1984', 'Romeo and Juliet', 'The Great Gatsby', 'A Christmas Carol', 'Farenheit 451']
}

app.get("/api/list_grid", (req, res) => {
    res.send(categories);
});

app.post("/api/list_grid", (req, res) => {
    let newCategory = req.body.titleInput;
    let newList = req.body.wordList;
    categories[newCategory] = newList;
    res.send(categories);
});








app.listen(port, () => {
    console.log('Server is listening on port ' + port)
});