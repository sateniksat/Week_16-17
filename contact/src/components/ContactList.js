import React, { Component } from "react";
// import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Table } from "react-bootstrap";


export default class ContactList extends Component {
  render() {
    // const contactsItemsNodes = this.props.contacts.map((name) => {
    //   return <ListGroupItem key={name}>{name}</ListGroupItem>;
    // });

    // return <ListGroup>{contactsItemsNodes}</ListGroup>;

    return(
      <Table striped bordered hover>
  <thead>
    <tr>
      {/* <th>#</th> */}
      <th>Name</th>
      <th>Phone Number</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
  {this.props.contacts.map((contact)=>{
            // console.log(contact);
                   return( <tr key={contact.phone}>
                    {/* <td>{contact.id}</td> */}
                    <td>{contact.fname} {contact.lname}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.email}</td>
                  </tr>)
        })}
  </tbody>
</Table>
    )
  }
}
