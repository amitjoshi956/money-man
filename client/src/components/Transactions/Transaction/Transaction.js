import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'

const Transaction = (props) => {
    const { _id, text, amount } = props.transaction
    const sign = amount < 0 ? '-' : '+'
    const { deleteTransaction } = useContext(GlobalContext)

    return (
        <li className={amount < 0 ? 'minus' : 'plus'}>
            {text} <span>{sign + Math.abs(amount)} Rs</span>
            <button className='delete-btn' onClick={() => deleteTransaction(_id)}>x</button>
        </li>
    )
}

export default Transaction