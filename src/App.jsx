import Home from "./components/Home"
import React from 'react'
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserSort from "./components/UserSort"
import KambanBoard from "./components/StatusSort"
import PrioritySort from "./components/PrioritySort"

function App() {

  return (
    <div>
      <BrowserRouter>
          <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/user-sort" element={<UserSort />} />
            <Route path="/status-sort" element={<KambanBoard />} />
            <Route path="/priority-sort" element={<PrioritySort />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App