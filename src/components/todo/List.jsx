import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deletetodo, updatetodo } from '../../redux/todo/todoAction';

function List() {
    const todolist = useSelector(state=>state.todo)
    const dispatch = useDispatch();
    function update(index){
        dispatch(updatetodo(index))
    }

    function deleteit(index){
        dispatch(deletetodo(index))
    }

    return (
        <ul className="list-group col-md-6 offset-md-3">
            {
                todolist.map((e,i)=>{
                    return <li 
                    key={i}
                    onClick={()=>{
                        update(i)
                    }}
                    onDoubleClick={()=>{
                        deleteit(i)
                    }}
                    className="list-group-item"
                    style={{textDecoration:e.done&&"line-through"}}
                    >{e.task}</li>

                })
            }
        </ul>

    )
}

export default List
