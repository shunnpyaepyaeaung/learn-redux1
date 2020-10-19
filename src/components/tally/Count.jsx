import React from 'react';
import { useSelector } from 'react-redux';


function Count() {
    const count = useSelector(state=>state.tally)
    return (
        <div id='count'>
            {count}
        </div>
    )
}

export default Count
