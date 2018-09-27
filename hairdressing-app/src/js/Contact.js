import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

 const Contact = () => {
    return (
        <div className="title">
          <h1>Contact </h1>
          <p>Adress: Rådmansgatan 39B 113 58 Stockholm, Sverige</p>
          <p title="Phone">
          <p> Telefonnr:</p> (++46) 737 75 03 03 </p>
          <Form>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>Full name</Label>
                <Col sm={3}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter your name" />
                </Col> 
              </FormGroup>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>Email</Label>
                <Col sm={3}>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
                </Col>  
              </FormGroup>
              <FormGroup row>
              <Label for="exampleText" sm={2}>Meddelande</Label>
              <Col sm={3}>
              <Input type="textarea" name="text" id="exampleText" />  
              </Col>
            </FormGroup>
            <Button color="primary">Skicka meddelande</Button>
        </Form>
             
        </div>
    )
  }

  export default Contact;