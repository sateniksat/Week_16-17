import React, { Component } from 'react'

export default class TodoItem2 extends Component {
  render() {
    return (
      <li style={{background:"white",color:'black',display:'flex', justifyContent:"space-between"}}>
          {this.props.index} - 
          {this.props.title}
          <div style={{display:"flex"}}>
          <button onClick={this.props.remove}>x</button>
          <button onClick={this.props.doneTodo}>done</button>
          {/* <button onClick={void 0}>x</button> */}
          </div>
      </li>
    )
  }
}