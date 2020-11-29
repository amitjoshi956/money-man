import React, { useContext } from 'react'

import { GlobalContext } from '../../context/GlobalState'

export const Balance = () => {
    const context = useContext(GlobalContext)
    const balance = calcBalance(context.transactions)
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>Rs {balance}</h1>
        </div>
    )
}

const calcBalance = (transactions) => {
    let balance = 0
    for (let transaction of transactions)
        balance += transaction.amount

    return balance
}