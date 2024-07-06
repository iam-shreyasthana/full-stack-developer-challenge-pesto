import React, { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [updatedStatus, setUpdatedStatus] = useState("");

  return (
    <div className='card'>
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p className='status-container'>Status: <select className='select-box-task' value={task.status} onChange={(e) => setUpdatedStatus(e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </p>
      </div>
      <div className='task-button-container'>
        <button className='button button-primary' onClick={() => onUpdate({status: updatedStatus, _id: task._id})}>Update Status</button>
        <button className='button button-danger' onClick={() => onDelete(task._id)}>Delete Task</button>
      </div>
    </div>
  );
};

export default TaskItem;
