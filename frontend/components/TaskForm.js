import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Basic validation

    onSubmit({ title, description, status });
    setTitle('');
    setDescription('');
    setStatus('To Do');
  };

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        type="text"
        className='input-field'
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        className='textarea-field'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select className='select-box' value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button className='button button-primary' type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
