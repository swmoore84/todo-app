import React, { useState } from 'react';

const PendingItems = ({ todo, handleSubmit }) => {
  const [editing, setEditing] = useState(false);
  const [pendingTodo, setPendingTodo] = useState(todo);

  const handleClick = () => {
    setEditing(true);
  }

  const handleChange = (event) => {
    setPendingTodo({
      ...pendingTodo,
      title: event.target.value
    })
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
      handleSubmit(pendingTodo);
    }
  }

  return editing ? (
    <div className="form-check editing">
      <input className="form-check-input" disabled type="checkbox" defaultChecked={pendingTodo.completed} id={`checkbox${pendingTodo.id}`} />
      <input type="text" className="form-control-plaintext" id="staticEmail2" value={pendingTodo.title} onChange={handleChange} onKeyDown={handleKeyDown} autoFocus />
    </div>
  ) : (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultChecked={pendingTodo.completed} id={`checkbox${pendingTodo.id}`} />
      <label className="form-check-label" htmlFor={`checkbox${pendingTodo.id}`} onClick={handleClick} >
        {pendingTodo.title}
      </label>
    </div>
  )
};

export default PendingItems;
