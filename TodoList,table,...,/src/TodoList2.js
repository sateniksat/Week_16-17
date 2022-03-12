import React, {PureComponent} from "react";
import TodoItem2 from './TodoItem2.js';
import Done from './Done.js';


class ToDoList2 extends PureComponent{
constructor(props){
    super(props)
    this.state={
        value: '',
        list:[],
        done:[]
    }
    this.addTodo=this.addTodo.bind(this);
    this.removeTodo=this.removeTodo.bind(this);
    this.doneTodo=this.doneTodo.bind(this);

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

addTodo(){
    this.setState({list:[this.state.value,...this.state.list],value:''})
}
removeTodo(todo){
    // let list=this.state.list.filter(item=> item!==todo);
    // this.setState({list:list})

    this.setState(state=>{
        let list=state.list.filter(item=> item!==todo)
        // return state.list.splice(i,1)
        return {list}
    })
}
doneTodo(todo){
    this.removeTodo(todo);
    this.setState({done:[...this.state.done,todo]})
}
    render(){

        return(
            <ul>
                <li>
                    <input type="text" value={this.state.value} onChange={e=>{this.setState({value:e.target.value})}}/>

                    {/* </input> */}
                    <button onClick={this.addTodo}>add</button>
                </li>
                {/* <li>test</li>
                <li>gym</li>
                <li>food</li> */}
                {/* {this.state.list.map(todo=> <li>{todo}</li>)} */}
                {this.state.list.map((item,i)=> <TodoItem2 
                                        key={item.id}
                                        index={i + 1}
                                        title={item.todo}
                                        remove={() => this.removeTodo(item)}
                                        doneTodo={() => this.doneTodo(item)}
             />)}
                <h3>Done list</h3>
                {this.state.done.map((todo,i)=><li>{todo.todo}</li> )}
                <h3>DONE PERCENT</h3>
                <div>
                <Done done={this.state.done.length} list={this.state.list.length} />
                </div>
            </ul>
        )
    }
}
export default ToDoList2