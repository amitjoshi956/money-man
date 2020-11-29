const { Number } = require('mongoose')
const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please enter the transaction name']
    },
    amount: {
        type: Number,
        required: [true, 'Please enter a positive or negative amount']
    },
    creationTime: {
        type: Date,
        defaultTime: Date.now
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema)