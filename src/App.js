import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize=15;
  render() {
    return (
      <div>
        <Router>
        <Navbar category="business"/>
          <Routes>
            <Route exact path="/"              element={<News pageSize={this.pageSize} key="home" country="us" category="general"/>} />
            <Route exact path="/business"      element={<News pageSize={this.pageSize} key="business" country="us" category="business"/>} />
            <Route exact path="/entertainment" element={<News pageSize={this.pageSize} key="entertainment" country="us" category="entertainment"/>} />
            <Route exact path="/general"       element={<News pageSize={this.pageSize} key="general" country="us" category="general"/>} />
            <Route exact path="/health"        element={<News pageSize={this.pageSize} key="health" country="us" category="health"/>} />
            <Route exact path="/science"       element={<News pageSize={this.pageSize} key="science" country="us" category="science"/>} />
            <Route exact path="/sports"        element={<News pageSize={this.pageSize} key="sports" country="us" category="sports"/>} />
            <Route exact path="/technology"    element={<News pageSize={this.pageSize} key="technology" country="us" category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}
