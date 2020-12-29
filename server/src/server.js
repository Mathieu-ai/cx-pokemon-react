const express = require('express');
const cors = require('cors');
const pokemons = require('./routes/pokemons');

console.log('starting server')

const app = express();
app.use(cors())         
app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use( function(req, res, next) {         // pour un meilleure analyse des traces
    console.log(  req.method, req.originalUrl );
    next();
})

app.use("/pokemons/", pokemons,);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})