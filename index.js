require('dotenv').config()
const express = require('express')
const routes = require('./routes/patients')
const users = require('./routes/users')
const auth = require('./routes/auth')
const hematology = require('./routes/hematologys')
const glucometry = require('./routes/glucometrys')
const cors = require('cors')
const app = express();


app.use(cors())
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hospital')
    .then(() => console.log('Connected to mongodb successfully'))
    .catch(err => console.log('not connected'))

app.use(express.json())
app.use('/api/patients', routes)
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/api/hematology', hematology)
app.use('/api/glucometry', glucometry)

const port = process.env.PORT || 4500;
app.listen(port, () => {
    console.log(`listening to port number ${port}`);
})

