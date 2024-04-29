import { useEffect, useState } from 'react'
import axios from 'axios'
import { Box } from 'react-bulma-components'
import Header from './Components/Header/Header'
import './App.css'
import Main from './Components/Main/Main'
import { Route, Routes } from 'react-router-dom'
import Product from './Components/Product/Product'
function App() {
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   axios
  //   .get('https://api.escuelajs.co/api/v1/products?limit=20&offset=0')
  //   .then((res) => {
  //     console.log(res);
  //   }).catch((e) => {
  //     console.log(e);
  //   })
  // },[])
  return (
    <div className='wrappe' style={{width:'100%'}}>
        <Header />
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/product/card/:id' element={<Product/>}/>
        </Routes>
    </div>
  )
}

export default App
    