import tallyReducer from '../../redux/tally/tallyReducer';
import todoReducer from '../todo/todoReducer';
import { combineReducers } from 'redux';

var combine = {
    tally: tallyReducer,
    todo: todoReducer
}

export default combineReducers(combine)