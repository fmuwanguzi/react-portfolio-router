import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'
import PastProjects from './components/PastProjects'

import './App.css';

function App() {
  return (
  <BrowserRouter>
  <div className="App">
    <Nav />
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path='/pastprojects' component={PastProjects}/>


  </div>
  </BrowserRouter>
  );
}

export default App;
