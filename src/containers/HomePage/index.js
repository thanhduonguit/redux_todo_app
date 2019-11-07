import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/homeAction';



class HomePage extends Component {

  simpleAction = (event) => {
    console.log('123')
    this.props.simpleAction();
    console.log(this.props.homeReducer.count)
  }

  render() {
    return (
      <div className="danger">
        <button onClick={this.simpleAction}>Test redux action</button>
        <div>Count: {this.props.homeReducer.count}</div>
      </div>
      
    );
  }


}

const mapStateToProps = state => ({
  ...state,
 })

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);