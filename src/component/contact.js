import { Button, Card, Container, Input } from '@mui/material';
import React from 'react';
import { CardText, Col, Row } from 'react-bootstrap';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_x1doid4', 'template_r8kwdlj', e.target, 'n-KOi51SeG6pI7-Lp')
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <Container className='text-center py-3 my-3 '>
        <h1>Contact Me</h1>
        <form className='p-4 my-2' onSubmit={sendEmail}>
          <Input type='text' name='name' placeholder='Enter Your Full Name' />
          <Input type='text' name='User_name' placeholder='Enter Your E-Mail Here' />
          <Col md>
            <textarea style={{ width: '100%', maxWidth: '600px', minHeight: '100px' }} className='m-2' name='message' type='text' placeholder='Set a message' />
          </Col>
          <Button className='py-3 my-3 bg-dark text-white' type='submit'>Submit</Button>
        </form>
        <Card>
          <u>
            <h1>Hire Me</h1>
          </u>
          <CardText>
            <h2>Contact Details</h2>
          </CardText>
          <Row>
            <Col>
              <h4>
                <CallIcon /> +916367277533
              </h4>
              <h4 >
                <InstagramIcon/> @kunwar_naren_sa_
              </h4>
              <h4>
                <WhatsAppIcon /> +916367277533
              </h4>
              <h4>
                <EmailIcon /> ns214625@gmail.com
              </h4>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default Contact;
