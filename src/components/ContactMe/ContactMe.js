import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactMe() {
  return (

    <main className="min-h-screen text-white p-4 md:p-8 lg:p-16 font-sans" style={{ background: '#0c0c0c' }}>
      <Container className="max-w-6xl mx-auto">

        <h1 className="text-start text-4xl md:text-5xl lg:text-6xl font-light mb-4" style={{ marginBottom: "70px", marginTop: '70px', fontSize: "70px" }}>Contact Me</h1>
        <hr className="my-8 bg-gray-700" />


        <Row className="g-5" style={{ marginBottom: '220px', marginTop: '200px' }}>

          <Col md={6} className="mb-5 mb-md-0">
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-start">Get in touch</h2>
            <p className="text-base md:text-lg mb-4 text-start">
              <span className="font-semibold ">Email:</span>{' '}
              <a href="mailto:marufa.webdev@gmail.com" className="text-white hover:text-gray-300">
                marufa.webdev@gmail.com
              </a>
            </p>
            <p className="text-base md:text-lg mb-4 text-start">
              <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:+8801825897301" className="text-white hover:text-gray-300">
                01825897301
              </a>
            </p>
            <p className="text-base md:text-lg text-start">
              <span className="font-semibold">Address:</span> West Rampura, Dhaka-1219, Bangladesh
            </p>
          </Col>


          <Col md={6}>
            <Form>

           <div style={{display:'flex' ,gap:12}}>
               <Form.Group className="mb-4" controlId="formBasicName"    style={{width:'100%'}}>

                <Form.Control
                  type="text"
                  placeholder="Name"
                  className="bg-transparent border border-gray-500 text-white placeholder-gray-400 rounded-md p-3 focus:border-white focus:ring-0"
               
                />
              </Form.Group>


              <Form.Group className="mb-4" controlId="formBasicEmail"    style={{width:'100%'}}>

                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border border-gray-500 text-white placeholder-gray-400 rounded-md p-3 focus:border-white focus:ring-0"
                  style={{width:'100%'}}
                />
              </Form.Group>

           </div>

              <Form.Group className="mb-4" controlId="formBasicMessage">

                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Message"
                  className="bg-transparent border border-gray-500 text-white placeholder-gray-400 rounded-md p-3 focus:border-white focus:ring-0"
                  style={{ resize: 'vertical' }}
                />
              </Form.Group>


              <Button
                variant="outline-light"
                type="submit"
                className="px-5 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300"
                style={{ display: 'flex', justifyContent: "start" }}
              >
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
