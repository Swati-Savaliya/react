import React from 'react';
import Styles from './Card.module.css'
function Card({ data, info }) {
    // console.log(data);
    return (
        <>
            {data && (
                
                    <div className={Styles.card}>
                        <p className="data"><b>ID:</b> {data.id}</p>
                        <p className="data"><b>Name: </b>{data.name}</p>
                        <p className="data"><b>Price:</b> {data.price}</p>
                        <p className="data"><b>Expiry:</b> {data.expiry}</p>
                        <p className="data"><b>Description:</b> {data.desc}</p>
                    </div>
            )}

            {info && (
                <div className={Styles.info}>
                        <p className="info"><b>ID:</b> {info.id}</p>
                        <p className="info"><b>Name: </b>{info.name}</p>
                        <p className="info"><b>Fees:</b> {info.fees}</p> 
                        <p className="info"><b>Degree:</b> {info.degree}</p> 
                        <p className="info"><b>Description:</b> {info.desc}</p> 
                </div>
            )}
        </>
    );
}

export default Card;
