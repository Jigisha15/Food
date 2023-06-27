import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import LandingPage from './pages/LandingPage/LandingPage'
import About from './pages/About/About'
import Menu from './pages/Menu/Menu'
import Testimonials from './pages/Testimonials/Testimonials'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

import MenuDisplay from './pages/MenuDisplay/MenuDisplay'

import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            Component={LandingPage}
          />
          <Route
            path="/about"
            Component={About}
          />
          <Route
            path="/menu"
            Component={Menu}
          />
          <Route
            path="/testimonials"
            Component={Testimonials}
          />
          <Route
            path="/login"
            Component={Login}
          />
          <Route
            path="/register"
            Component={Register}
          />
          <Route
            path="/menudisplay"
            Component={MenuDisplay}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
