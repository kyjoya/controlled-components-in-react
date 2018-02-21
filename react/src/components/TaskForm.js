import React, { Component } from 'react';

const TaskForm = (props) => {
  return (
    <div>
      <h1>New Task</h1>
      <form onSubmit={props.handleSubmit }>
        <span id="error">{ props.submissionError }</span>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description"
          value={props.taskDescription} onChange={props.handleDescriptionChange } />
        <input type="submit" value="Add Task!" id="new-task-submit-button" />
      </form>
    </div>
  )
}

export default TaskForm
