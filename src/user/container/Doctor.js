import React from 'react';
import Card from '../component/Card';

import Styles from '../component/Card.module.css'

const docterdata = [
    {
        "id": 1,
        "name": "ABC",
        "fees": 10000,
        "degree":"MBBS",
        "desc" : "Naproxen, sold under the brand name Aleve among others, is a nonsteroidal anti-inflammatory drug used to treat pain, menstrual cramps, inflammatory diseases such as rheumatoid arthritis, gout and fever."
    },
    {
        "id": 2,
        "name": "DEF",
        "fees": 20000,
        "degree":"MBBS",
        "desc" : "Naproxen, sold under the brand name Aleve among others, is a nonsteroidal anti-inflammatory drug used to treat pain, menstrual cramps, inflammatory diseases such as rheumatoid arthritis, gout and fever."
    },
    {
        "id": 1,
        "name": "DEF",
        "fees": 30000,
        "degree":"MBBS",
        "desc" : "Naproxen, sold under the brand name Aleve among others, is a nonsteroidal anti-inflammatory drug used to treat pain, menstrual cramps, inflammatory diseases such as rheumatoid arthritis, gout and fever."
    },
    {
        "id": 1,
        "fees": "GHI",
        "time": 40000,
        "degree":"MBBS",
        "desc" : "Naproxen, sold under the brand name Aleve among others, is a nonsteroidal anti-inflammatory drug used to treat pain, menstrual cramps, inflammatory diseases such as rheumatoid arthritis, gout and fever."
    },
    {
        "id": 5,
        "fees": "JKL",
        "time": 50000,
        "degree":"MBBS",
        "desc" : "Naproxen, sold under the brand name Aleve among others, is a nonsteroidal anti-inflammatory drug used to treat pain, menstrual cramps, inflammatory diseases such as rheumatoid arthritis, gout and fever."
    },

    {
        "id": 6,
        "fees": "MNO",
        "time": 60000,
        "degree":"MBBS",
        "desc" : "Naproxen, sold under the brand name Aleve among others, is a nonsteroidal anti-inflammatory drug used to treat pain, menstrual cramps, inflammatory diseases such as rheumatoid arthritis, gout and fever."
    },
]

function Doctor() {
    return (
        <div className={Styles.information}>
            {
               docterdata.map((v,i)=>(
                    <Card  info={v} />
               )) 
            }
        </div>
    );
}

export default Doctor;

