import React from 'react'
import { Container,Card, Row, Col, CardTitle } from 'react-bootstrap'
import NNNN from '../component/image/NNNN.jpg';
import { Button } from 'react-bootstrap';

const about = () => {
  return (
    <>
      <Container  border='none'>
         <CardTitle className='bg-black text-white text-center p-3 m-8'>About Me</CardTitle>
                
        <Row >
          <Col md={6} > 
          <Card style={{width:'100'}} className='p-4 m-4  '>
                 <img style={{borderRadius:'0.5rem'}} className='text-center'   src={NNNN} alt="logo..." />        
           </Card>
          </Col>
          <Col md={6}>
          <Card style={{fontfamily: 'Tilt Neon'}} className='p-5 m-4 border-none '>
               <h1> Frontend Developer </h1>
               <Card.Text style={{fontfamily: 'Bakbak One'}}>
               As a frontend developer, I create visually engaging and user-friendly websites and applications. I excel in HTML, CSS, and JavaScript, crafting responsive designs and seamless user experiences. I collaborate closely with design and back-end teams, ensuring pixel-perfect implementation and optimal performance. I'm passionate about the latest web technologies and trends, continuously enhancing the digital landscapes I build. My work is the bridge between creative concepts and functional, intuitive interfaces, enhancing user engagement and brand presence.
          </Card.Text>    
           </Card>
          </Col>
        </Row>
        {/* worK i know */}
        <Card  className='p-4'>
          <h1 className='text-center p-4 my-3'>
         <u  >Work I Know</u>
        <ul className='text-center p-4 my-3'> 
          <h2>React.JS Developer</h2>
          <h2>HTML CSS JavaScript</h2>
          <h2>React Material UI</h2>
          <h2>React Bootstrap</h2>
          <h2>Git & GitHub</h2>
          <h2>API Call</h2>
        </ul>
          </h1>
        </Card>
        <Card className='text-center py-2 my-3 '>
          <h1 >
           <u > Experince</u>
            </h1>
            <h1 >5-6 Month experiences in Bryttek Solutions as a React JS Developer </h1>
            <Button style={{width:'80'}} href='https://bryttek.com/'>Visit </Button>  
        </Card>
      </Container>
    </>
  )
}

export default about
