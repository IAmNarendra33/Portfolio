import React from 'react'
import Restu from '../component/image/Restu.png'
import Calculator from '../component/image/Calculator.png'
import Fitness from '../component/image/Fitness.png'
import Weather from '../component/image/Weather.png'
import Todoapp from '../component/image/Todoapp.png'
import BMI from '../component/image/BMI.png'
import {Card,CardImg,Col,Container,Row,CardTitle,Button} from 'react-bootstrap'

const project = () => {
  return (
    <>
       <Container>
        <CardTitle className=' bg-dark text-white text-center py-2'>
          <h1>My Projects</h1>
        </CardTitle>
        <Row className='py-2'>
      <Col md={4}>
      <Card  style={{width:'100'}} >
        <CardImg  src={Restu} className='text - center py-5'/>
        <CardTitle >Restaurant Website </CardTitle>
        
        <Button href='https://narensa33-restaurants.firebaseapp.com/' style={{width:'80'}} >  Visit </Button>
      </Card>
      </Col>
      <Col md={4}>
      <Card style={{width:'100'}}>
        <CardImg  src={Calculator} className='text - center'/>
        <CardTitle>Calculator App</CardTitle>
        
        <Button href='https://narensa33calculator.firebaseapp.com/' style={{width:'80'}}> Visit </Button>
      </Card>
      </Col>
      <Col md={4}>
      <Card style={{width:'100'}}>
        <CardImg  src={Fitness} className='text - center'/>
        <CardTitle>Fitness WebApp </CardTitle>
        
        <Button href='https://nrensa33-fitness-own-gtm.firebaseapp.com/' style={{width:'80'}}> Visit </Button>
      </Card>
      </Col></Row>
      <Row>
      <Col md={4}>
      <Card style={{width:'100'}}>
        <CardImg  src={Weather} className='text - center'/>
        <CardTitle>Weather App </CardTitle>
        
        <Button href='https://narendra33-weatherapp.firebaseapp.com/' style={{width:'80'}}> Visit </Button>
      </Card>
      </Col>
      <Col md={4}>
      <Card style={{width:'100'}}>
        <CardImg  src={Todoapp} className='text - center py-5'/>
        <CardTitle>Todo Webapp</CardTitle>
        <Button href='https://narensa33-todo-listapp-reactproject.firebaseapp.com/' style={{width:'80'}}> Visit </Button>
      </Card>
      </Col>
      <Col md={4}>
      <Card style={{width:'100'}}>
        <CardImg  src={BMI} className='text - center'/>
        <CardTitle>BMI Calculator </CardTitle>
        
        <Button href='https://narensa33-bmi-calculator.firebaseapp.com/' style={{width:'80'}}> Visit </Button>
      </Card>
      </Col>
      </Row>
    </Container>  
    </>
  )
}

export default project
