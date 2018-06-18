// let messages = [];
// let id = 0;

let categories = [
    {
        title: "animals",
        list: ['cat', 'dog', 'rabbit', 'unicorn', 'dragon', 'fox', 'bear', 'wolf', 'coyote', 'otter', 'shark', 'skunk', 'mouse', 'moose', 'elk', 'rat', 'hedgehog', 'whale', 'donkey', 'pangolin', 'ant eater', 'horse', 'buffalo', 'elephant', 'zebra', 'tiger', 'leopard', 'lion', 'pig', 'cow', 'panda', 'raccoon', 'hampster', 'polar bear', 'koala', 'kangaroo', 'jaguar', 'antelope', 'chicken', 'bat', 'wombat', 'giraffe', 'ostrich', 'crocodile', 'alligator', 'snake','python', 'hippo', 'goat', 'sheep', 'mountain goat', 'deer', 'pony', 'puppy', 'kitten', 'squirrel', 'monkey', 'gorilla', 'chipmunk', 'porcupine', 'mole', 'gopher', 'star fish', 'parrot', 'eagle', 'sparrow', 'robin'],
        idNum: 1
    },
    {
        title: "history",
        list: ['George Washington', 'Abraham Lincoln', 'Booker T. Washington', 'Betsy Ross', 'Battle of Waterloo', 'Harriet Tubman', 'King Tut', 'Cleopatra', 'Napoleon', 'Revolutionary War', 'Civil War', 'Babylon', 'Thomas Jefferson', 'the Black Plague', 'The Brothers Grimm', 'The Industrial Revolution', 'World War II', 'Caesar', 'Henry VIII', 'Beowulf', 'The Epic of Gilgamesh', 'Zeus', 'Athena', 'Ancient Egypt', 'Nefertiti', 'Hammurabi'],
        idNum: 2
    },
    {   
        title: "movies",
        list: ['Star Wars', 'Guardians of the Galaxy', 'Joe vs. the Volcano', 'Scott Pilgrim vs. the World', 'Thor: Ragnarok', 'The Imitation Game', 'Moonrise Kingdom', 'Indiana Jones', 'Paul Blart: Mall Cop', 'Harry Potter', 'Watership Down', 'Pirates of the Caribbean', 'Oh Brother, Where Art Thou?', 'Star Trek', 'The Avengers', 'Black Panther', 'Jurassic Park', 'The Hobbit', 'Lord of the Rings', 'The Little Mermaid', 'The Lion King', 'Cinderella', 'The Avengers', 'Super 8', 'Young Frankenstein', 'Stranger than Fiction', 'The Secret Life of Walter Mitty', 'Captain America', 'Iron Man', 'Miss Congeniality', 'Zoolander', 'A Christmas Story', 'Elf', 'The Nightmare Before Christmas', 'Beauty and the Beast'],
        idNum: 3
    },
    {
        title: "food",
        list: ['apple', 'banana', 'corn dog', 'watermelon', 'cotton candy', 'ice cream', 'pizza', 'chocolate', 'lollipop', 'apple pie', 'chocolate cake', 'popsicle', 'lemon drops', 'pasta', 'peanut butter', 'sugar', 'pineapple', 'mango', 'papaya', 'strawberry', 'blueberry', 'raspberry', 'bread', 'pancakes', 'french toast', 'strudel', 'peach', 'apricot', 'carrots', 'spinach', 'broccoli', 'sushi', 'granola bar', 'Skittles', 'Oreos', 'pad thai', 'curry', 'rice', 'beans', 'corn', 'marshmallow', 'cracker', 'cookie', 'chocolate chips', 'steak', 'bacon', 'brownies', 'blackberry', 'gooseberry', 'grapefruit', 'lime', 'lemon', 'coconut', 'flour', 'salt', 'pepper', 'tomato', 'eggplant', 'celery', 'bubblegum', 'frozen yogurt'],
        idNum: 4
    },
    {
        title: "books",
        list: ['Pride and Prejudice', 'Hamlet', 'Watership Down', '1984', 'Romeo and Juliet', 'The Great Gatsby', 'A Christmas Carol', 'Farenheit 451', 'The Hobbit', 'The Golden Compass', 'Moby Dick', 'To Kill a Mockingbird', 'Little Women', 'Frankenstein', 'The Scarlet Letter', 'Dracula', 'Lord of the Flies', 'Lord of the Rings', 'Animal Farm', 'Anne of Green Gables', 'Treasure Island', 'Robinson Crusoe', 'Mark Twain', 'Charles Dickens', 'Tom Sawyer', 'Huckleberry Finn', 'The Secret Garden', 'Oliver Twist', 'The Call of the Wild', 'White Fang', 'On the Road', 'Great Expectations', 'Jane Eyre', 'The Last of the Mohicans', 'The Odyssey'],
        idNum: 5
    },
    {
        title: "music",
        list: ['The Pixies', 'Simon and Garfunkle', 'AC/DC', 'Elton John', 'The Chainsmokers', 'Beyonce', 'The Decemberists', 'Ed Sheeran', 'Halsey', 'Hozier', 'Iron & Wine', 'Johnny Flynn', 'The Killers', 'Lady Gaga', 'The Lumineers', 'Of Monsters and Men', 'OK Go', 'The Shins', 'Madonna', 'Michael Jackson', 'Elvis', 'Snow Patrol', 'Death Cab for Cutie', 'Fall Out Boy', 'Panic at the Disco', 'Flight of the Conchords', 'Justin Timberlake', 'Adele', 'Cher', 'Mick Jagger', 'Led Zeppelin', 'Neutral Milk Hotel', 'Rihanna', 'Bob Marley', 'Bing Crosby', 'David Bowie', 'Stevie Nicks', 'Fleetwood Mac', 'Frank Sinatra', 'The Immigrant Song', 'Twinkle Twinkle Little Star', 'Rainbow Connection', 'Mouse Rat'],
        idNum: 6
    }
]

let idNum = 7;

module.exports = {
    read: (req, res) => {
        res.send({categories: categories, idNum: idNum});
    },
    create: (req, res) => {
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
    },
    update: (req, res) => {
        let newTitle = req.body.titleInput;
        let newList = req.body.wordList;
        let id = parseInt(req.params.id);
        categories.forEach((val, i, arr) => {
            if(val.idNum===id){
                arr[i] = {
                    title: newTitle,
                    list: newList,
                    idNum: id
                };
            }
        });
        res.send({categories: categories, idNum: idNum});
    }, 
    delete: (req, res) => {
        let delId = parseInt(req.params.id);
        console.log(delId)
        let indexNum;
        if(delId>6){
            categories.forEach((val, i) => {
                if(val.idNum===delId){
                    indexNum = i;
                }
            })
            idNum--;
            categories.splice(indexNum, 1);
        }
        res.send({categories: categories, idNum: delId});
    }
 }