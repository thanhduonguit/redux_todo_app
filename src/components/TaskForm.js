import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name : '',
      status: false
    }
  }

  // Update
  UNSAFE_componentWillMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status
      })
    }
  }

  UNSAFE_componentWillReceiveProps(nextPprops) {
    if (nextPprops && nextPprops.updateTask) {
      this.setState({
        id: nextPprops.updateTask.id,
        name: nextPprops.updateTask.name,
        status: nextPprops.updateTask.status
      })
    } else if (!nextPprops.updateTask) {
      // console.log('update -> add')
      this.onClear()
    }
  }

  // Close Form
  onCloseForm = () => {
    this.props.onCloseForm()
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if(name === 'status'){
        value = target.value === 'true' ? true : false;
    }
    this.setState({
        [name] : value
    });
  }

  // Submit Form
  onSaveTask = (event) => {
    event.preventDefault();
    this.props.onSaveTask(this.state);
    this.onCloseForm();
  }

  // Clear Form
  onClear = () => {
    this.setState({
      name: '',
      status: false
    });
  }

  render() {
    let { id } = this.state;
    if (!this.props.isDisplayForm) return null
    return (
      <div className="card">
        <h3  className="card-header text-center">
          { id !== '' ? 'Update ToDo' : 'Add ToDo'}   
          <i 
            className="fas fa-times-circle ml-5"
            onClick={ this.onCloseForm }
          ></i>
        </h3>
        <div className="card-body">
          <form onSubmit={ this.onSaveTask }>
            <div className="form-group">
              <label>Name: </label>
              <input 
                type="text" 
                className="form-control" 
                name="name" 
                value={ this.state.name }
                onChange={ this.onChange }
              />
            </div>
            <label>Status: </label>
            <select 
              className="form-control"
              name="status"
              value={ this.state.status }
              onChange={ this.onChange }
            >
              <option value={ true }>Done</option>
              <option value={ false }>Not Done</option>
            </select>
            <div className="mt-4 ">
              <button type="submit" className="btn btn-success">
                <i className="fas fa-plus mr-2"></i>Save
              </button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button 
                type="button" 
                className="btn btn-danger"
                onClick={ this.onClear }
              >
                <i className="fas fa-times mr-2"></i>Exit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm : state.isDisplayForm,
    updateTask : state.updateTask
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask : (task) => {
      dispatch(actions.saveTask(task))
    },
    onCloseForm : () => {
      dispatch(actions.closeForm())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);