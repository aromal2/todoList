import React, { useState, useEffect, useRef } from "react";
import "./Todo.css";
import ListTask from "./Listtask";

const AddTask = () => {
  const [value, setValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [edited, setEdited] = useState(false);
  const foc = useRef(null);

  const addItem = (e) => {
    e.preventDefault();
    if (value.length !== 0) {
      if (todos.some((list) => list === value)) {
        alert("already exist");
      } else {
      
        
        setTodos([...todos, value]);
        setValue("");
      }
    } else {
      alert("write anything");
    }
  };

  const editItem = (e) => {
    e.preventDefault();
    const index = todos.indexOf(prevValue);
    if (todos.length > 1) {
      console.log('set');
      const newArray = [
        ...todos.slice(0, index),
        value,
        ...todos.slice(index + todos.length-1),
      ];
      setTodos(newArray);
    }else{
    todos.length = 0
    todos.push(value)
    }
    setEdited(false);
    setValue("");
    setPrevValue("");
  }

  const editTodo = (value) => {
    setEdited(true);
    setPrevValue(value);
    setValue(value);
  };

  const deleteTodo = (value) => {
    const filtered = todos.filter((val) => val !== value);

    setTodos(filtered);
  };
  // Function to focus the input field

  useEffect(() => {
    foc.current.focus();
  }, [todos, edited]);

  return (
    <>
      <form className="input-container">
        <input
          ref={foc}
          type="text"
          className="input"
          value={value}
          placeholder="Add a new text"
          onChange={(e) => setValue(e.target.value)}
        />
        {edited ? (
          <button className="btn btn-dark" onClick={editItem}>
            EDIT
          </button>
        ) : (
          <button className="btn btn-info" onClick={addItem}>
            ADD
          </button>
        )}
      </form>
      <div>
        <ul>
          {todos.map((val, index) => (
            <ListTask
              value={val}
              index={index}
              fun={deleteTodo}
              ins={editTodo}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default AddTask;
