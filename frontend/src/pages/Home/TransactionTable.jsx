import React from 'react'

const TransactionTable = () => {
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
            <tr className='border-b border-b-white'>
                <td>something</td>
                <td>something</td>
                <td>something</td>
                <td>something</td>
                <td>something</td>
                <td>something</td>
            </tr>
        </tbody>
    </table>
  )
}

export default TransactionTable