const { INCREMENT, DECREMENT } = require("./tallyAction");

function tallyReducer(state=0,action){
    switch(action.type){
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            if(state - 1 >= 0)
            return state - 1;
        default:
            return state
    }
}

export default tallyReducer;