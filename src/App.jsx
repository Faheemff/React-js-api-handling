import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'


const App = () => {


  const [data, setData] = useState([])


  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10');

    setData(response.data);
  }

  useEffect(()=> {
    getData();
  }, []);

  return (
    <div className='p-10'>
      <div className='p-5 mt-5 bg-gray-950'>
        {data.map(function (elem, indx) {
          return <div key={indx} className='bg-gray-50 text-black flex items-center justify-between w-full px-6 py-7 rounded'>
            <img className='h-40' src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default App