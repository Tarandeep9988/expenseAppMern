import React from 'react'

const ControllerBox = () => {
  return (
    <div className='text-xl'>
        <div className='flex justify-between items-center'>
        <div>
            <p>Select Frequency</p>
            <select name="freq" id="freq" className='bg-white text-black rounded-sm cursor-pointer'>
                <option value="lastWeek">Last Week</option>
                <option value="lastMonth">Last Month</option>
                <option value="lastYear">Last Year</option>
                <option value="custom">Custom</option>
            </select>
        </div>
        <div>
            <p>Type</p>
            <select name="type" id="type" className='bg-white text-black rounded-sm cursor-pointer'>
                <option value="all">All</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
        </div>
        <div>
            <button className='bg-blue-500 p-2 rounded-lg cursor-pointer'>Add new</button>
        </div>
    </div>
    <div className='flex justify-center items-center my-10'>
        <button className='bg-blue-500 p-2 rounded-lg cursor-pointer'>Reset Filter</button>
    </div>
    </div>
  )
}

export default ControllerBox    