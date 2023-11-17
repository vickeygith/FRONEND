import React from 'react' ;//rafce to auto code
import { Container, Button } from 'react-bootstrap';
import "../style/Home.css"
const Home = () => {
  return (
    <Container>
        <h1> Welcome to our Website</h1>
        <p> We are here to serve you</p>
        <Button variant="primary" type="submit"> Get Started </Button>
    </Container>
  )
}

export default Home