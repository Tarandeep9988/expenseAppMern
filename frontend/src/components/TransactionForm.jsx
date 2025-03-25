import React from 'react'

const TransactionForm = ({toggleForm}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white/50 flex justify-center items-center">
      <form className="border w-150 bg-white text-black rounded-xl">
        <div className="flex items-center justify-between p-2">
          <h2 className="text-center text-2xl">Add Transaction Details</h2>
          <div>
            <img
              src="./images/cross-svgrepo-com.svg"
              alt="cross-button"
              className="w-8 p-2 cursor-pointer"
              onClick={toggleForm}
            />
          </div>
        </div>
        <div className="flex flex-col p-4 [&>label]:mt-5 [&>input]:border [&>input]:border-gray-500 [&>input]:rounded [&>input]:p-1 border-y border-gray-400">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter Transaction Name"
          />
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            name="amount"
            id="amount"
            placeholder="Enter your Amount"
          />
          <label htmlFor="category">Category</label>
          <select name="category" id="category" className='border border-gray-500 rounded p-1'>
          <option value="">Choose...</option>
            <option value="Groceries">Groceries</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Tip">Tip</option>
            <option value="Food">Food</option>
            <option value="Medical">Medical</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Transportation">Transportation</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name='description' placeholder='Enter Description'/>
          <label htmlFor="transactionType">Transaction Type</label>
          <select name="transactionType" id="transactionType" className='border border-gray-500 rounded p-1'>
          <option value="">Choose...</option>
            <option value="Groceries">Groceries</option>
            <option value="Credit">Credit</option>
            <option value="Expense">Expense</option>
          </select>
          <label htmlFor="date">Date</label>
          <input type="date" id='date' name='date' className='cursor-pointer'/>
        </div>
        <div className='flex p-4 gap-2 justify-end'>
            <button className='bg-gray-500 text-white p-3 rounded cursor-pointer' onClick={toggleForm}>Close</button>
            <button className='bg-blue-500 text-white p-3 rounded cursor-pointer'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm