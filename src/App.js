import logo from './logo.svg';
import './App.css';
import React from "react";
import cross from "./crossDelete.png";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [count, setCount] = React.useState(0);

      function addItem() {
        const name = document.getElementById("myInput").value;

        const newTask = {
          id: Math.floor(Math.random()*1000),
          value: name
      }
      /*
        const itemIds = tasks.map((i) => i.id);
        setTasks([...tasks, allTasks.find((i) => !itemIds.includes(i.id))]);
            */
      setTasks([...tasks, newTask]);
      setCount(tasks.length);
      }

      function removeItem(task) {
        setTasks(tasks.filter((i) => i.id !== task.id));
        setCount(tasks.length);      
      }
      
      function CountDisplay(props){
        return <div className='titleToDos'>You have {props.children} Todos</div>
      }

      return (
        <div className="keys">
          <CountDisplay children={count}/>
          <hr></hr>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {tasks.map((task) => (
              // Ajouter la propriété key à l'élément <li>, lui donner la valeur de item.id
              <li>
                <label>{task.value}</label>
                <img src={cross} className='crossDelete' alt="React Image" onClick={() => removeItem(task)} />
                <hr></hr>
              </li>

            ))}
          </ul>
          <input placeholder='Enter Item' id="myInput"></input>
          <button onClick={addItem}>Submit</button>

        </div>
      );










  return (
    <div className="App">
      <header className="App-header">
        <boutton>Add Task</boutton>
      </header>
    </div>
  );
}

export default App;
