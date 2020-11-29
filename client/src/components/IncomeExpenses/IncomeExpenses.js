import React, { useContext } from 'react'

import { GlobalContext } from '../../context/GlobalState'

export const IncomeExpenses = () => {
    const context = useContext(GlobalContext)
    const [income, expenses] = filterIncomeAndExpenses(context.transactions)

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p id='money-plus' className='money plus'>Rs {income}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p id='money-minus' className='money minus'>Rs {Math.abs(expenses)}</p>
            </div>
        </div>
    )
}

const filterIncomeAndExpenses = (transactions) => {
    let filteredData = [0, 0]

    for (let transaction of transactions) {
        let index = transaction.amount > 0 ? 0 : 1
        filteredData[index] += transaction.amount
    }

    return filteredData
}