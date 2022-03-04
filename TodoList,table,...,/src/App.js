// import logo from './logo.svg';
import "./App.css";
import ToDoList from './ToDoList';
import Home from "./Home";
import Timer from "./Timer";
// import List from "./List";
import Person from "./Person";
import Person2 from "./Person2";

/// ctl+space

function App() {
  return (
    // <Home/>
    <div className="App">
      <header className="App-header">
        <Timer />
        <ToDoList/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

<Person2/>
        <Person />

        {/* <List/> */}
      </header>
      <Home />
    </div>
  );
}

export default App;
// function App() {

//   // export default App
//   return (
//   //  <Table/>
//     // <div className="App">
//       <Home/>
//     // </div>
//   );
// }

// export default App;
