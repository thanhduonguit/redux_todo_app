import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class Sort extends Component {

  onClick = (sortBy, sortValue) => {
    this.props.onSort({
      by: sortBy,
      value: sortValue
    })
  }

  render() {
    return (
      <Router>
        <div className="col-md-6">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sort
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div onClick={ () => { this.onClick('name', 1)} }>
                <Link to="" className={ (this.props.sort.by === 'name' && this.props.sort.value === 1) ? 'dropdown-item font-weight-bold' : 'dropdown-item' }>
                  A -> Z
                </Link>
              </div>
              <div onClick={ () => { this.onClick('name', -1)} }>
                <Link to="" className={ (this.props.sort.by === 'name' && this.props.sort.value === -1) ? 'dropdown-item font-weight-bold' : 'dropdown-item'} >
                  Z -> A
                </Link>
              </div>
              <div onClick={ () => { this.onClick('status', 1)} }>
                <Link to="" className={ (this.props.sort.by === 'status' && this.props.sort.value === 1) ? 'dropdown-item font-weight-bold' : 'dropdown-item'} >
                  Status: Done
                </Link>
              </div>
              <div onClick={ () => { this.onClick('status', -1)} }>
                <Link to="" className={ (this.props.sort.by === 'status' && this.props.sort.value === -1) ? 'dropdown-item font-weight-bold' : 'dropdown-item'} >
                  Status: Not Done
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

// có nghĩa là các state của store sẽ chuyển thành các props của component này
const mapStateToProps = (state) => {
  return { 
    sort : state.sort
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort : (sort) => {
      dispatch(actions.sortTask(sort))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);