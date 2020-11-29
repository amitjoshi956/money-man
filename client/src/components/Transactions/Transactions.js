import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import Transaction from './Transaction/Transaction'

export const Transactions = () => {
    const { transactions, getTransactions } = useContext(GlobalContext)

    useEffect(() => {
        getTransactions()
    }, [])

    const transactionsList = transactions.map(transaction => (
        <Transaction key={transaction._id}
            transaction={transaction} />
    ))

    return (
        <div>
            <h3>History</h3>
            <ul id='list' className='list'>
                {transactionsList}
            </ul>
        </div>
    )
}
