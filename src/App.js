import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'

import About from './components/About'

import Home from './components/Home'
import Selection from './components/selections/selection'
import Bubble from './components/bubble/bubble'
import Insertion from './components/insertion/appr4'
import Quick from './components/quick/appr5'
import Contact from './components/Contact'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
     
          <Route path='/about' component={About} />
          <Route exact path='/' component={Home} />
      
          <Route path='/selection' component={Selection} />
          <Route path='/bubble' component={Bubble} />
          <Route path='/insertion' component={Insertion} />
          <Route path='/quick' component={Quick} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;