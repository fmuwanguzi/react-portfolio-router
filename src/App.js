import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'
import PastProjects from './components/PastProjects'
import Weather from './components/Weather'
import Github from './components/Github'


import './App.css';

function App() {
  return (
  <BrowserRouter>
  <div className="App">
    <Nav />
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path='/pastprojects' component={PastProjects}/>
    <Route path='/weather' component={Weather}/>
    <Route path='/pastprojects' component={PastProjects}/>
    <Route path='/github' conponent={Github} />

  </div>
  </BrowserRouter>
  );
}

export default App;
