import React, { Component } from 'react';
import Styles from './TimerClass.module.css'

class TimerClass extends Component {
// 1. it is used to initialize state value or binding methods.
    constructor(props) {
        super(props);
            this.state = {
                time:new Date()
            }
    }
tick =() =>{
    this.setState({
        time:new Date()
    });
}
    
//3. it is called after mounting, it is mostly used to get data from server
componentDidMount = () =>{
    console.log("3. componentDidMount");
    this.timerRef = setInterval(this.tick,1000);
}
    
//4. it is called when state or props value chaged.
componentDidUpdate = (prevProps, prevState) =>{
    
    if(this.state.time  !== prevState.time) {
        console.log("4. componentDidUpdate");
    }
}

// 5. it is used to realse occupied resources when we move to another component.

componentWillUnmount = () =>{
    clearInterval(this.timeRef)
}
    render() {
        return (
            <div className={Styles.timer}>
                <h2 className={Styles.demo}> Class Base Timer </h2>
                <h3 className={Styles.time}> {this.state.time.toLocaleTimeString()}</h3>
            </div>
        );
    }
}

export default TimerClass;