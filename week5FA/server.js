// server-express.js
const express = require('express');
const app = express() // initialize app
const port = 3000

// GET callback function returns a response message
app.get('/', (req, res) => {
    res.send('Hello World! Welcome to Node.js');
});

let counter = 0;


app.get('/visits', (req, res) => {
	counter += 1
      // Text formatting from ‘text formatting’ JavaScript prelab section
	res.send(`There have been ${counter} visits to this session`);
});

app.get('/rock', (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt)
    if(rndInt === 3){
        res.send("Bot picked Scissors, You Win!");
    } else if(rndInt === 1){
        res.send("Bot Picked Rock, You Tie!");
    } else if (rndInt === 2){
        res.send("Bot Picked Paper, You Suck!");
    }
});
app.get('/paper', (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt)
    if(rndInt === 3){
        res.send("Bot picked Scissors, You Suck!");
    } else if(rndInt === 1){
        res.send("Bot Picked Rock, You Win!");
    } else if (rndInt === 2){
        res.send("Bot Picked Paper, You Tie!");
    }
});
app.get('/scissors', (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt)
    if(rndInt === 3){
        res.send("Bot picked Scissors, You Tie!");
    } else if(rndInt === 1){
        res.send("Bot Picked Rock, You Suck!");
    } else if (rndInt === 2){
        res.send("Bot Picked Paper, You Win")
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});