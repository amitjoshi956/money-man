const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const path = require('path')

const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })

// connect db
const connectDB = require('./config/db')
connectDB()

// routes
const transactions = require('./routes/transactions')

const app = express()
app.use(express.json())

// morgan setup for dev env
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api/transactions/', transactions)

// production setup
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))