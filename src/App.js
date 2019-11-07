import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
  // Toggle Form: add task
  onToggleForm = () => {
    let { updateTask } = this.props;
    if (updateTask && updateTask !== '') {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }  
    this.props.onClearTask({
      id: '',
      name: '',
      status: false
    });
  }

  // Show Form
  onShowForm = () => {
    this.setState({
      isDisplayForm : true
    });
  }

  // Render
  render() {
    let { isDisplayForm } = this.props;
    return (
      <div className="container mt-3">
        <div>
          <h1 className="text-center">To Do App</h1>
        </div>
        <div className="row mt-5">
          <div className={ isDisplayForm ? 'col-md-4' : ''} >
            {/* TaskForm */}
            <TaskForm />
          </div>
          <div className={ isDisplayForm ? 'col-md-8' : 'col-md-12'}>
            <button 
              type="button" 
              className="btn btn-success"
              onClick={ this.onToggleForm }    
            >
              <span className="fa fa-plus mr-2"></span> Add ToDo
            </button>           
            {/* Control */}
            <Control />
            <br /> 
            <div className="col-md-12 p-0">  
              {/* TaskList */}
              <TaskList />         
            </div>       
          </div>
        </div>
      </div>
    );
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
    onToggleForm : () => {
      dispatch(actions.toggleForm());
    },
    onClearTask : (task) => {
      dispatch(actions.updateTask(task));
    },
    onOpenForm : () => {
      dispatch(actions.openForm());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);