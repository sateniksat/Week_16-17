import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.idnumber=0;
  }
  handleChangeInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.idnumber++;
    this.state.id=this.idnumber;
    this.props.onAddContact(this.state);
    console.log(this.state)
  }

  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)} className="my-5">
        <Form.Group controlId="firstNameInput">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            name="fname"
            onChange={(e) => {
              this.handleChangeInput(e);
            }}
            type="text"
          />
        </Form.Group>
        <Form.Group controlId="lastNameInput">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            name="lname"
            onChange={(e) => {
              this.handleChangeInput(e);
            }}
            type="text"
          />
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            name="phone"
            onChange={(e) => {
              this.handleChangeInput(e);
            }}
            type="phone"
          />
        </Form.Group>
        <Form.Group controlId="emailaddress">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control
            name="email"
            onChange={(e) => {
              this.handleChangeInput(e);
            }}
            type="email"
          />
        </Form.Group>
        <Button type="submit" className="my-3">
          Submit
        </Button>
      </Form>
    );
  }
}
