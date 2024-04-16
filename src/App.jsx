import React from 'react'
import Home from './pages/Home'
import './globals.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Header from './components/Header'
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='*' element="No Page" />
        </Routes>
      </Router>
    </>
  )
}

export default App
