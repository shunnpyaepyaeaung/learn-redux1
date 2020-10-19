import { ADD, UPDATE, DELETE } from './todoAction';

function todoReducer(state=[{task:'to eat',done:false}],action){
    switch(action.type){
        case ADD:
            console.log('work reducer')
            return [...state,{
                task:action.payload,
                done: false
            }]
        case UPDATE:
            return state.map((e,i)=>{
                if(i === action.payload){
                    e.done = !e.done
                }
                return e
            })
        case DELETE:
            return state.filter((e,i)=>i !== action.payload)
        default:
            return state
    }
}

export default todoReducer;