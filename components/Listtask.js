import React from "react";
import AddTask from "./Addtask";


const ListTask = ({ value,index,fun ,ins}) => {
  const handleDelete = () => {
    fun(value);
  };
  const handleEdit=()=>{
    ins(value)
  }
  return (
    <>
      <div
        className=""
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <p>{value}</p>
        </div>
        <div>
          <i class="bi bi-pencil-square m-3" onClick={()=>handleEdit()}></i>
          <i class="bi bi-trash m-3" onClick={() => handleDelete()}></i>
        </div>
      </div>
    </>
  );
};

export default ListTask;
