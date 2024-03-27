import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../Redux/action/counter.action';

function Counter(props) {

    const counterval = useSelector(state => state.counter)
    console.log(counterval);


    const dispatch = useDispatch();

    const handleInc = () =>{
        dispatch(increment());
    }

    const handleDec = () =>{
        dispatch(decrement());
    }

    return (
            <div>
            <h1> increment Decrement Couter </h1>
            <button onClick={handleInc}> + </button>
            {counterval.count}
            <button onClick={handleDec}> - </button>
        </div>


        // <div>
        //     <h1> increment decrement </h1>
        //     <button onclick={ () => dispatch(increment())}> + </button>
        //     {0}
        //     <button onclick={ () => dispatch(decrement())}> - </button>
        // </div>
    );
}

export default Counter;


