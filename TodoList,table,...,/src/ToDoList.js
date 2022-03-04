import React, {Component} from "react";
import TodoItem from './TodoItem';


class ToDoList extends Component{
constructor(props){
    super(props)
    this.state={
        value: '',
        list:['todo homework','test','gym','food'],
        done:["---------"]
    }
    this.addTodo=this.addTodo.bind(this);
    this.removeTodo=this.removeTodo.bind(this);
    this.doneTodo=this.doneTodo.bind(this);

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
                {this.state.list.map((todo,i)=> <TodoItem  index={i+1} title={todo} remove={() => this.removeTodo(todo)} doneTodo={() => this.doneTodo(todo)}/>)}
                <h3>Done list</h3>
                {this.state.done.map((todo,i)=><li>{todo}</li> )}
            </ul>
        )
    }
}
export default ToDoList