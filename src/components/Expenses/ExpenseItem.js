import React, { useState } from 'react'
import Card from '../Display/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'


const ExpenseItem = (props) => {

    const [title, setTitle] = useState('');

    const changeTitle = () => {
        setTitle('Abhishek')
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div></div>
            <button onClick={changeTitle}>Update Title</button>
        </Card>
    )
}

export default ExpenseItem
