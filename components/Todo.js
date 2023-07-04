import React from "react";
import "./Todo.css";
import AddTask from "./Addtask";
import ListTask from "./Listtask";
import { useState } from "react";

const Todo = () => {
  return (
    <>
      <div className="todo-container">
        <div className="header ">TODO</div>
        <div className="add-task">
          <AddTask />
        </div>

        <div className="tasks"></div>
      </div>
    </>
  );
};

export default Todo;
