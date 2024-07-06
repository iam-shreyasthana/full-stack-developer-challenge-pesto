import React from 'react';

const TaskFilter = ({ statuses, onSelectStatus }) => {
  return (
    <select className='taskfilter-select' onChange={(e) => onSelectStatus(e.target.value)}>
      <option value="all">All</option>
      {statuses.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
};

export default TaskFilter;
