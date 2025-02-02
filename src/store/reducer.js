import {CHANGE_INPUT_VALUE,ADD_LIST,DELETE_LIST} from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if(action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === ADD_LIST){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(state.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === DELETE_LIST){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }
  return state;
}