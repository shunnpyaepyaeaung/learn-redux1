import tallyReducer from '../../redux/tally/tallyReducer';

import { combineReducers } from 'redux';

var combine = {
    tally: tallyReducer
}

export default combineReducers(combine)