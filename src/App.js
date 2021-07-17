import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from './Components/Layout/Navbar';
import Home from './Components/ContentPages/Home'
import About from './Components/ContentPages/About';
import Blog from './Components/ContentPages/Blog';
import Contact from './Components/ContentPages/Contact';
import Education from './Components/ContentPages/Education';
import Projects from './Components/ContentPages/Projects';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/education" component={Education} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
