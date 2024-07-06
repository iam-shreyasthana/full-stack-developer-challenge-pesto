import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  return (
    <div style={{ marginTop: 16}}>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
