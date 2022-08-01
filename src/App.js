import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import NoMatch from './NoMatch';
import About from './pages/About';
import Gallery from './pages/Gallery';
import GalleryLight from './pages/GalleryLight';
import Notices from './pages/Notices';
import Contact from './pages/Contact';
import Login from './components/Login';

const One = () => <h1>Ones</h1>;
const Two = () => <h1>Two</h1>;

const login = localStorage.getItem("isLoggedIn");

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
          <Route path="/login1">
            <Redirect to={{pathname: "/contact", search: "?utm=your+face" }}/>
          </Route>
          

          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <GalleryLight />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

          {login ? (
            <Route path="/notices">
              <Notices />
            </Route>
          ) : (
            <Route path="/login">
              <Login />
            </Route>
          )}

          
          <Redirect from="/old-path" to="/new-path" />
          <Route path="/new-path">
            <One />
            <Two />
            <h1>{new Date().toLocaleTimeString()}</h1>
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
