import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NavBar from '../../components/NavBar'
import ControllerBox from './ControllerBox'
import TransactionTable from './TransactionTable'

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const userId = '67dfdcd754ace97a3345a849';
    const getData = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/getTransaction/', {
            userId,
            "type": "all",
            "frequency": "custom"
        });
        // console.log(response.data.transactions);
        setTransactions(response.data.transactions); 
      } catch (e) {
        console.log(e);
      }
    }
    getData();

  }, []);
  return (
    <>
      <div>
        <NavBar />
        <div className='mx-80 mt-10'>
          <ControllerBox />
          <TransactionTable transactions={transactions} />
        </div>
      </div>
    </>
  )
}

export default Home