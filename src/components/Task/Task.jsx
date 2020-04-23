import React, { useEffect, useState } from 'react';
import './Task.scss';
import deleteIcon from '../../assets/img/delete.svg';
import markIcon from '../../assets/img/check-mark.svg';
import markIconComplete from '../../assets/img/check-mark-true.svg';
import cn from 'classnames';

const Task = ({ id, status = false, text, changeStatus, deleteTask }) => {
  const handleStatus = () => {
    changeStatus(id, status ? false : true);
  };

  const handleDelete = () => {
    deleteTask(id);
  };
  return (
    <li className="task">
      <button className="task__status" onClick={handleStatus}>
        <img src={status ? markIconComplete : markIcon} alt="#" />
      </button>
      <h3
        className={cn('task__text', { ['task__text_green']: status })}
        onClick={handleStatus}>
        {text}
      </h3>
      <button className="task__delete" onClick={handleDelete}>
        <img src={deleteIcon} alt="#" />
      </button>
    </li>
  );
};

export { Task };