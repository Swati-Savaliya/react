import React, {useState, useEffect } from 'react';


function Timerfun(props) {
    //1.
    const [time,setTime] = useState(new Date());

    const tick =() =>{
        console.log("tick");
        setTime(new Date());
    }

    useEffect =(()=>{
        const timerRef = setInterval (tick,1000);


        return () =>{
            clearInterval(timerRef);
        }
    },[time]);

    return (
        <div>
            <h2> Function Base Timer Component </h2>
        </div>
    );
}

export default Timerfun;


// import React, { useState, useEffect } from 'react';
// import Styles from './Timerfun.module.css';

// function Timerfun () {
//     const [time, setTime] = useState(new Date());

//     const tick = () => {
//         setTime(new Date());
//     };

//     useEffect(() => {
//         console.log("Component did mount");
//         const timer = setInterval(tick, 1000);

//         return () => {
//             console.log("Component will unmount");
//             clearInterval(timer);
//         };
//     }, []); 

//     useEffect(() => {
//         console.log("Component did update");
//     }, [time]); 

//     return (
//         <div class={Styles.timer}>
//             <h2 class={Styles.demo}> Function Base Timer </h2>
//             <h3 class={Styles.time}>{time.toLocaleTimeString()}</h3>
//         </div>
//     );
// };

// export default Timerfun;
