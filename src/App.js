import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import NoMatch from './NoMatch';
import Contact from './pages/Contact';
import About from './pages/About';
import Notices from './pages/Notices';

const One = () => <h1>Ones</h1>;
const Two = () => <h1>Two</h1>;

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>


          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about-us">
            <Redirect to="/about" />
          </Route>
          <Route path="/login">
            <Redirect to={{pathname: "/contact", search: "?utm=your+face" }}/>
          </Route>
          

          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/notices">
            <Notices />
          </Route>

          
          <Redirect from="/old-path" to="/new-path" />
          <Route path="/new-path">
            <One />
            <Two />
          </Route>

          <Route path="/users/profile/:id">
            <One />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        
        <Footer />
      </Router>
    </React.Fragment>
  );
}


export default App;
