e.preventDefault()
if(!this.state.taskDescription) {
  this.setState({
    submissionError: 'Please specify a description'
  })
}
else {
  fetch('/api/v1/tasks', {
    method: 'post',
    body: JSON.stringify({task: {description: this.state.taskDescription}})
  })
  this.setState({
    submissionError: '',
    taskDescription: ''
  })
}
