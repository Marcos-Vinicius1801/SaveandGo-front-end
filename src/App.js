import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from './components/Button';
import Header from './components/Header';
import PigSection from './components/PigSection';
import CalltoAction from './components/CalltoAction';
import Testimonials from './components/Testimonials';

import userImg1 from '../src/assets/imgs/user1.png'
import userImg2 from '../src/assets/imgs/user2.png'
import Footer from './components/Footer';
 
// import axios from 'axios';

function App() {
  
  return (
    <div className="App">
      
      <Container fluid>
        <Row>
          <Col><Header/></Col>
        </Row>
        <Row>
          <Col><PigSection/></Col>
        </Row>
        <Row>
          <Col><CalltoAction/></Col>
        </Row>
        <Row>
          <Col><Testimonials personImg={userImg1} name="Maria Letícia" occupation="Analista de RH"/></Col>
        </Row>
        <Row>
        <Col><Testimonials personImg={userImg2} name="Tim Bushell" occupation="Designer Gráfico"/></Col> 
        </Row>
        <Row>
          <Col><Footer/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
