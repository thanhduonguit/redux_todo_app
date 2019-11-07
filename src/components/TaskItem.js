import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {

  // Update Status
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  }

  // Delete
  onDeleteTask = () => {
    this.props.onDeleteTask(this.props.task.id);
    this.props.onCloseForm();
  }

  // Update
  onUpdateTask = () => {
    this.props.onOpenForm();
    this.props.onUpdateTask(this.props.task);
  }

  render() {
    let { task, index } = this.props;
    return ( 
      <tr>
        <td>{ index }</td>
        <td>{ task.name }</td>
        <td className="text-center">
          <button 
            type="button" 
            className={ task.status === true ? 'btn btn-success' : 'btn btn-secondary'}
            onClick={ this.onUpdateStatus }
          >
            { task.status === true ? 'Done' : 'Not Done'}
          </button>
        </td>       
        <td className="text-center">
          <button 
            type="button" 
            className="btn btn-warning"
            onClick={ this.onUpdateTask }
          >
            <i className="fas fa-pencil-alt mr-1"></i>Edit
          </button>&nbsp;&nbsp;
          <button 
            type="button" 
            className="btn btn-danger"
            onClick={ this.onDeleteTask }
          >
            <i className="fas fa-trash-alt mr-1"></i>Delete
          </button>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus : (id) => {
      dispatch(actions.updateStatusTask(id))
    },
    onDeleteTask : (id) => {
      dispatch(actions.deleteTask(id))
    },
    onCloseForm : () => {
      dispatch(actions.closeForm())
    },
    onOpenForm : () => {
      dispatch(actions.openForm())
    },
    onUpdateTask : (task) => {
      dispatch(actions.updateTask(task))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);