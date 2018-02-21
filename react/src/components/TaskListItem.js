import React, { Component } from 'react'

const TaskListItem = (props) => {
  return (
    <li>{props.task.description}</li>
  )
}

export default TaskListItem
