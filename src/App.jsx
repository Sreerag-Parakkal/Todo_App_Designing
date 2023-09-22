import React, { Component } from "react";

class App extends Component {

  constructor(props){
    
    super(props);

    this.state = {

      UserName:'John',
      toDosList:[
        {id:1,task:'Session At 9AM', done:false},
        {id:2,task:'Session At 10AM', done:true},
        {id:3,task:'Session At 12PM', done:false},
        {id:4,task:'Session At 1PM', done:false},
        {id:4,task:'Meeting At 4PM', done:true},
      ],
      newToDo:''

    }

  }

  render() {
    return (
      <div className="container">
        <div className="bg-primary py-3 text-center">
          <h3 className="text-light">{this.state.UserName}'s ToDo List</h3>
        </div>
        <div className="input-group my-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter New todo"
            aria-label="Enter New todo"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-primary"
            type="button"
            id="button-addon2"
          >
            Submit
          </button>
        </div>
        <table class="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">
                <h5>#</h5>
              </th>
              <th scope="col">
                <h5>Task</h5>
              </th>
              <th scope="col">
                <h5>Status</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.toDosList.map((todo) => (
              <tr>
              <th scope="row">{todo.id}</th>
              <td>{todo.task}</td>
              <td>{todo.done ? "true" : "false"}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
