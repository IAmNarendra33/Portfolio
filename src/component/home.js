import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import NNNN from '../component/image/NNNN.jpg';


const Home = () => {
  return (
    <Container style={{color:'blue'}} >
    <Row>
      <Col md={6}>
        <Card className='p-6 m-5' style={{fontFamily: 'Tilt Neon'}}>
          <Card.Body>
            <h1  className='text-dark text-center p-4 m-4'>
              Hii, I am Narendra Singh Rajput
            </h1>
          </Card.Body>
        </Card>
      </Col>
      <Col md={5} > 
          <Card style={{width:'100'}} className='p-6 m-5 '>
                 <img style={{borderRadius:'0.5rem'}} className='text-center box-rodious-1 '  src={NNNN} alt="logo..." />        
           </Card>
          </Col>
    </Row>
  </Container>
  
  );
};

export default Home;
