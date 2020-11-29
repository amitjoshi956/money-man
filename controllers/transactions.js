const Transaction = require('../models/Transaction')

// @desc Get all transactions
// @route GET /api/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find()
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// @desc Add a new transaction
// @route POST /api/transactions
// @access Public
exports.addTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.create(req.body)
        return res.status(201).json({
            success: true,
            data: transaction
        })
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errorMessages = Object.values(error.errors).map(err => err.message)
            return res.status(400).json({
                success: false,
                error: errorMessages
            })
        }
        else {
            return res.status(500).json({
                success: false,
                error: 'Server error'
            })
        }
    }
}

// @desc Delete a transaction
// @route DELETE /api/transactions/:id
// @access Public
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id)
        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: `No transaction found with the given id: ${req.params.id}`
            })
        }

        await transaction.remove()
        res.status(200).json({
            success: true,
            data: {}
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}
