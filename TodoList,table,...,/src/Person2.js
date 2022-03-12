import React, { PureComponent } from "react";
// import TodoItem2 from "./TodoItem2";
import "bootstrap/dist/css/bootstrap.min.css";
import {Form} from "react-bootstrap";
import ToDoList2 from "./TodoList2";


export class Person extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "1",
      profiles: [],
    };
  }

  componentDidMount() {
    fetch("/json/profiles.json")
      .then((response) => response.json())
      .then((res) => {
        this.setState({ profiles: res });
      });
  }
  render() {
    return (
      <div>
        <div>Person</div>
        <h3>RADIO</h3>
        <div key={`inline-radio`} className="mb-3">
          {this.state.profiles.map((profile) => {
            return (
              <Form.Check
                inline
                label={profile.name}
                onChange={(e) => {
                  this.setState({ currentUser: e.target.id });
                }}
                checked={this.state.currentUser === profile.id}
                name={"profile2"}
                type="radio"
                id={profile.id}
              />
            );
          })}
        </div>

        <ToDoList2  user={this.state.currentUser}/>
      </div>
    );
  }
}

export default Person;
