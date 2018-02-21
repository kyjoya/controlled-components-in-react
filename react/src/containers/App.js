import React, { Component } from 'react';
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      submisionError: '',
      taskDescription: ''
    }
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/tasks`)
    .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status}`
          error = new Error(errorMessage)
          throw(error)
        }
      }
    )
    .then(response => (response.json()))
    .then(body => {
      let bodyParsed = body.tasks
      this.setState({
        tasks: bodyParsed
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(`api/v1/tasks`, {
      method: 'POST',
      body: JSON.stringify({ task: { description: this.state.taskDescription }})
    })
    .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status}`
          error = new Error(errorMessage)
          throw(error)
        }
      }
    )
    .catch(error => console.error(`Error in fetch: ${error.message}`))

    this.setState({
      tasks: this.state.tasks.concat(this.state.taskDescription)
    })
  }

  handleDescriptionChange(e) {
    e.preventDefault()
    this.setState({
      taskDescription: e.target.value
    })
  }
  render() {
    return (
      <div>
        <TaskList tasks={this.state.tasks } />
        <TaskForm taskDescription={this.state.taskDescription }
          submissionError={ this.state.submissionError }
          handleSubmit={ this.handleSubmit }
          handleDescriptionChange={ this.handleDescriptionChange } />
      </div>
    )
  }
}

export default App;
