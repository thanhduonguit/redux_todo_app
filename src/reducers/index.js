import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import updateTask from './updateTask';
import filterTable from './filterTable';
import search from './search';
import sort from './sort';

const myReducer = combineReducers({
  tasks,
  isDisplayForm,
  updateTask,
  filterTable,
  search,
  sort
});

export default myReducer;