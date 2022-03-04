import React, { Component } from 'react'

export class Clock extends Component {
    constructor(props){
        super(props);
        this.state={
            date:new Date()
        }
    }
    // setTime=()=>{
    //     this.setState({
    //         time: new Date()
    //     })
    // }
componentDidMount(){
    this.timerID=setInterval(() => {
        this.tick()
    }, 1000);
}

componentWillUnmount(){
    clearInterval(this.timerID);
}
tick(){
    this.setState({
        date:new Date()
    })
}



  render() {
    return (
      <div>
          <div>Clock</div>
          <div>
              {this.state.date.toLocaleTimeString()}
          </div>
      </div>
    )
  }
}

export default Clock