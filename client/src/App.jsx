import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import Header from './components/Header'
import { useState } from 'react'
import { getPhoneList } from './api/api'
import { useEffect } from 'react'
import { ThemeProvider } from '@emotion/react'
import { createTheme, responsiveFontSizes } from '@mui/material'
function App() {
  const [phones,setPhones] = useState([])
  const fetchPhones = async () => {
    const { data } = await getPhoneList()
    setPhones(data)
  }

  useEffect(() => {
    fetchPhones();
  },[])

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Home phones={phones}/>}/>
        <Route path='/detail/:id' exact element={<Detail/>}/>
        <Route path='/cart' exact element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
