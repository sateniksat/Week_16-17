import React, { Component } from "react";

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  loadHarryTodo(){
    fetch("/json/todo.json")
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      //   console.log("res",res);
      this.setState({ list: res });
      // console.log("list",this.state.list);
    });  
  }
  loadFarbodTodo(){
    fetch("/json/todo_farbod.json")
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      //   console.log("res",res);
      this.setState({ list: res });
      // console.log("list",this.state.list);
    });  
  }
  componentDidMount() {
    this.loadHarryTodo();
  }
  componentDidUpdate(prevProps,prevState){
      let currentUser=this.props.user;
      if(currentUser!== prevProps.user){
          if(currentUser==="1"){
              this.loadHarryTodo()
          }else{
              this.loadFarbodTodo()
          }
      }
  }
  render() {
    return (
      <div>
        <div>List</div>
        <ul>
            {this.state.list.map((item,i)=><li key={item.id}>{item.id}-{item.todo}</li>)}
        </ul>
      </div>
    );
  }
}

export default List;
