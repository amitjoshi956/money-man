import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import mongoose from 'mongoose'

export const AddNewTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault()
        const _id = mongoose.Types.ObjectId().toHexString()
        addTransaction({ _id, text, amount: parseInt(amount) })
        setText('')
        setAmount(0)
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label>
                    <input type="number"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                        placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
