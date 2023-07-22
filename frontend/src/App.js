import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Feedback from './components/Feedback/Feedback'

import LandingPage from './pages/LandingPage/LandingPage'
import About from './pages/About/About'
import Menu from './pages/Menu/Menu'
import Testimonials from './pages/Testimonials/Testimonials'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Cart from './pages/Cart/Cart'

import Bhaji from './pages/FoodItems/Bhaji'
import Bread from './pages/FoodItems/Bread'
import Chicken from './pages/FoodItems/Chicken'
import Drinks from './pages/FoodItems/Drinks'
import Fish from './pages/FoodItems/Fish'
import Mutton from './pages/FoodItems/Mutton'
import Sweets from './pages/FoodItems/Sweets'
import Thali from './pages/FoodItems/Thali'
import Nashta from './pages/FoodItems/Nashta'

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
          <Route
            path="/bhaji"
            Component={Bhaji}
          />

          <Route
            path="/chicken"
            Component={Chicken}
          />
          <Route
            path="/drinks"
            Component={Drinks}
          />
          <Route
            path="/fish"
            Component={Fish}
          />
          <Route
            path="/mutton"
            Component={Mutton}
          />
          <Route
            path="/sweets"
            Component={Sweets}
          />
          <Route
            path="/thali"
            Component={Thali}
          />
          <Route
            path="/nashta"
            Component={Nashta}
          />
          <Route
            path="/cart"
            Component={Cart}
          />
          <Route
            path="/feedback"
            Component={Feedback}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
