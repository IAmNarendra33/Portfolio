import React from 'react'
import { Container } from 'react-bootstrap'

const footer = () => {
  return (
    <>
      <footer  style={{ display: 'flex', flex: 1 }}  className='bg-dark '>
        <Container className='bg text-white  text-center'>
          <p>copyright &copy; This is My Portfoliao  </p>
        </Container>
      </footer>
    </>
  )
}

export default footer
