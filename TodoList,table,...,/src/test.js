import React from "react";
import './App.css';
class App extends React.Component {
// Constructor
constructor(props) {
super(props);
this.state = {
items: [],
DataisLoaded: false
};
}
// ComponentDidMount is used to
// execute the code
componentDidMount() {
fetch(
"https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((json) => {
this.setState({
items: json,
DataisLoaded: true
});
})
}
render() {
const { DataisLoaded, items } = this.state;
if (!DataisLoaded) return "Pleses wait some time...." ;
return (
Fetch data from an api in react {
items.map((item) => (
User_Name: { item.username };
Full_Name: { item.name };
User_Email: { item.email }
))
}
);
}
}
export default App;



