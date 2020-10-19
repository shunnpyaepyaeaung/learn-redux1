import React from 'react';
import Buttons from './Buttons';
import Count from './Count';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/tally/tallyAction';


function Tally() {
    const dispatch = useDispatch();
    function plus(){
        dispatch(increment(1))
    }
    function minus(){
        dispatch(decrement(1))
    }
    return (
        <div>
            <h1>Tally Counter</h1>
            <Count/>
            <Buttons click={plus} icon="plus" color='teal'/>
            <Buttons click={minus} icon="minus" color='red'  />
        </div>
    )
}

export default Tally
