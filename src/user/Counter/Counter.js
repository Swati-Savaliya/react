import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../Redux/action/counter.action';

function Counter(props) {
    const dispatch = useDispatch();

    const handleInc = () =>{
        dispatch(increment());
    }

    const handleDec = () =>{
        dispatch(decrement());
    }

    return (
        <div>
            <button onclick={handleInc}> + </button>
            {0}
            <button onclick={handleDec}> - </button>
        </div>
    );
}

export default Counter;