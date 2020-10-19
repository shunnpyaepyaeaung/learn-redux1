export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export function addtodo(val){
    console.log('todo action work')
    return{
        type: ADD,
        payload:val
    }
}

export function updatetodo(index){
    return{
        type: UPDATE,
        payload: index
    }
}

export function deletetodo(index){
    return{
        type: DELETE,
        payload: index
    }
}