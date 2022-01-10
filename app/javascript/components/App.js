import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Airlines from './Airlines/Airlines'
import Airline from './Airline/Airline'

function App() {
  return (
    //inside of App, you can set all routes for the App by using Switch
    <Router>
      <Routes>
        <Route path='/' element={<Airlines />} />
        <Route path="/airlines/:slug" element={<Airline />} />
      </Routes>
    </Router>
  )
}

export default App
