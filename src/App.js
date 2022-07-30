import React from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App =()=> {
  const pageSize=15;
  const apikKey=process.env.REACT_APP_KEY;
  
    return (
      <div>
        <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/"              element={<News apiKey={ apikKey} pageSize={ pageSize} key="home" country="us" category="general"/>} />
            <Route exact path="/business"      element={<News apiKey={ apikKey} pageSize={ pageSize} key="business" country="us" category="business"/>} />
            <Route exact path="/entertainment" element={<News apiKey={ apikKey} pageSize={ pageSize} key="entertainment" country="us" category="entertainment"/>} />
            <Route exact path="/general"       element={<News apiKey={ apikKey} pageSize={ pageSize} key="general" country="us" category="general"/>} />
            <Route exact path="/health"        element={<News apiKey={ apikKey} pageSize={ pageSize} key="health" country="us" category="health"/>} />
            <Route exact path="/science"       element={<News apiKey={ apikKey} pageSize={ pageSize} key="science" country="us" category="science"/>} />
            <Route exact path="/sports"        element={<News apiKey={ apikKey} pageSize={ pageSize} key="sports" country="us" category="sports"/>} />
            <Route exact path="/technology"    element={<News apiKey={ apikKey} pageSize={ pageSize} key="technology" country="us" category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
}
export default App;
