const express = require('express');
const cors = require('cors');
const pokemons = require('./routes/pokemons');

console.log('starting server')

const app = express();
app.use(cors())         

app.use( function(req, res, next) {         
    console.log(  req.method, req.originalUrl );
    next();
})

app.use("/pokemons/", pokemons,);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})

