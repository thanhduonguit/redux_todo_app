import * as types from './../constant/ActionTypes';

// Generate Data
const generateString = () => {
  return Math.floor( (1+Math.random() ) * 0x10000).toString(16).substring(1);
}	
const generateID = () => {
  return generateString() + '-' + generateString() + '-' + generateString() + generateString() 
  + '-' + generateString() + generateString() + '-' + generateString();
}

// Find index
const findIndex = (tasks, id) => {
  let result = -1;
  tasks.forEach((task, index) => {
    if(task.id === id){
      result = index
    }
  });
  return result;
} 

const data = JSON.parse(localStorage.getItem('tasks'));
const initialState = data ? data : [];
const myReducer = (state = initialState, action) => {
  let id = '';
  let index = -1;
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    // SAVE TASK
    case types.SAVE_TASK:
      const task = {
        id: action.task.id,
        name: action.task.name,
        status: (action.task.status === 'true' || action.task.status === true) ? true : false
      };
      if (!task.id) {
        // add task
        task.id = generateID();
        state.push(task);
      } else {
        // update task
        index = findIndex(state, task.id);
        state[index] = task;
      }
      localStorage.setItem('tasks', JSON.stringify(state))
      return [...state];

    // UPDATE STATUS
    case types.UPDATE_STATUS_TASK:
      id = action.id;
      index = findIndex(state, id);
      // clone task mới = task cũ && status = !status
      //xóa task cũ => push task mới
      let cloneTask = {...state[index]};
      cloneTask.status = !cloneTask.status;
      state[index] = cloneTask;
      localStorage.setItem('tasks',JSON.stringify(state));
      return [...state];

    // DELETE
    case types.DELETE_TASK:
      id = action.id;
      index = findIndex(state, id);
      state.splice(index, 1);
      localStorage.setItem('tasks',JSON.stringify(state));
      return [...state];
    default: return state;
  }
}

export default myReducer;