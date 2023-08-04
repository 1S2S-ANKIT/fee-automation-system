const mongoose = require('mongoose');

const db = 'mongodb+srv://dilsekhpatnaik7:Jesusdilsekh77@cluster0.5mwkqbf.mongodb.net/labbasedproject?retryWrites=true&w=majority'
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));