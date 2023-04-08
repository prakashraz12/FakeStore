import React from 'react'
import Home from './pages/Home'
import { ThemeProvider } from '@mui/material'
import { theme } from './Provider/Theme'
import SignleProductPage from './pages/SignleProductPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './module/Layout/Header'

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<SignleProductPage/>}/>
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
