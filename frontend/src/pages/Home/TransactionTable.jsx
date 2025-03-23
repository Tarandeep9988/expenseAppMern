import React from 'react'

const TransactionTable = ({transactions}) => {
    console.log(transactions);
    
  return (
    <table className='w-full'>
        <thead className='bg-white text-black'>
            <tr className='[&>th]:p-1'>
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Category</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {transactions.map((transaction, index) => (
                <tr key={index} className='border-b border-b-white'>
                    <td>{transaction.date}</td>
                    <td>{transaction.title}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.transactionType}</td>
                    <td>{transaction.description}</td>
                    <td>Pending</td>
                </tr>
            ))}
            {/* <tr className='border-b border-b-white'>
                <td>something</td>
                <td>something</td>
                <td>something</td>
                <td>something</td>
                <td>something</td>
                <td>something</td>
            </tr> */}
        </tbody>
    </table>
  )
}

export default TransactionTable