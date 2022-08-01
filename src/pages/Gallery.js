import '../App.css';
import { Container, Row, Col, Breadcrumb, Form, Button } from 'react-bootstrap';


function Gallery() {
    const imageName = 'Image1.jpg';
    return(
        <Container>
            
            <img style={{height:"100px"}} src={`/images/${imageName}`} />&nbsp;
            <img style={{height:"100px"}} src={`/images/Image2.jpg`} />
        </Container>
    )
}

export default Gallery;
