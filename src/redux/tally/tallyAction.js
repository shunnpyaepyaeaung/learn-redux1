export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function increment(val){
    return{
        type:INCREMENT,
        payload:val
    }
}

export function decrement(val){
    return{
        type:DECREMENT,
        payload:val
    }
}