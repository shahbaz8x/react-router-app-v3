import '../App.css';

import {React,useEffect} from "react";
import {
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import Staff from './about/Staff';
import Aestree from './about/Aestree';
import '../css/sliding-border.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function About() {
  let { path, url } = useRouteMatch();

  useEffect(() => {
    
    const tabs = document.querySelectorAll('.tabs2 > .nav > .nav-item')
    tabs.forEach((tab, index) => {
      tab.onclick = onTabClick;
      if(index === 0) setLineStyle(tab);
    });

  }, []);

  return (
    <Container className="py-3">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>About</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="py-1">About our Company</h2>
        <div>
            <div className="tabs2 position-relative" style={{borderBottom:'1px solid #aaa'}}>
                <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link" as={Link} exact to={`${url}`} activeClassName="active"> &#10047; </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" as={Link} to={`${url}/aestree`} activeClassName="active"> Aestree </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" as={Link} to={`${url}/staff`} activeClassName="active">Staff</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" as={Link} to={`${url}/employees`} activeClassName="active">Employee</NavLink>
                </li>
                </ul>
                <div className="line"></div>
            </div>
        </div>
      <Row>
        
            <Col sm={12} className="py-3">
                <Switch>
                    <Route exact path={path}>
                        <h5>The Company</h5>
                        <p>Aayesha Enterprise is a service provider company in Asansol, West Bengal whose primary role of business is to provide ERP Software, Mobile App and Bulk SMS to educational institutions. Beside this, we also design and develop Websites.</p>
                    </Route>
                    <Route path={`${path}/aestree`}>
                        <Aestree />
                    </Route>
                    <Route path={`${path}/staff`}>
                        <Staff />
                    </Route>
                    <Route path={`${path}/:topicId`}>
                        <Topic />
                    </Route>
                </Switch>
            </Col>
        </Row>
    </Container>
  );
}

function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();
  
    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    );
  }

  /* Plain JS section */
  function onTabClick(evt) {
    setLineStyle(evt.target)
  }
  
  function setLineStyle(tab) {
    let line = document.querySelector('.tabs2 > .line')
    line.style.left = tab.offsetLeft + "px";
    line.style.width = tab.clientWidth + "px";
  }
  
export default About;