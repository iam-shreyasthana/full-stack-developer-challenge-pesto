import React from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const handleUpdateStatus = () => {
    // Update status logic
  };

  const handleDelete = () => {
    // Delete task logic
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleUpdateStatus}>Update Status</button>
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
};

export default TaskItem;
