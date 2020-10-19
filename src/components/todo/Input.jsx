import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from '../../redux/todo/todoAction';

function Input() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('')
    function add(value){
        dispatch(addtodo(value))
        setInput('')
    }
    return (
        <div className="justify-content-center" style={{display:'flex'}}>
            
            <div className="mx-sm-3 mb-2" style={{display:'flex'}}>
                <input 
                value={input}
                onKeyPress={(e)=>{
                    if(e.key === 'Enter'){
                        add(input)
                    }
                }}
                onChange={(e)=>{
                    setInput(e.target.value)
                }}
                type="text" 
                className="form-control" 
                placeholder="Add task..." 
                />
            </div>
            <button 
            onClick={()=>{
                add(input)
            }}
            type="submit" className="btn btn-outline-info mb-2">Add</button>
        </div>

    )
}

export default Input
