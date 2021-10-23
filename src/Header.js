
import Navigation from './Navigation';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './aestree_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function Header() {

    return (
        <>
        <Container fluid>
            <Container className="pb-3">
                <Row>
                    <Col sm={3}>
                        <div className="text-center" style={{verticalAlign:'middle'}}>
                            <img className="mt-3" alt="No Logo" style={{width:80}} src={logo} />
                        </div>
                    </Col>
                    <Col sm={9}>
                        <div className="text-center">
                            <h1 className="agcsuktext" style={{fontFamily: 'olde_englishregular',fontSize: '45px',textShadow: '-1px 1px 3px #888888'}} >
                            <FontAwesomeIcon icon={faUser} />
                            {/** <FontAwesomeIcon icon={solid('user-secret')} /> */} 
                            Aayesha Enterprise</h1>
                                
                            <h6 style={{color: '#000', fontWeight: 'bold'}} >West Bengal</h6>
                            <h6 style={{color: '#000', fontWeight: 'bold'}} >Asansol</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        
        <Navigation />
        </>
    );
}


export default Header;