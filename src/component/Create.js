import axios from 'axios';
import React, { useState } from 'react'

function Create() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/users',{
            e_name:name,
            e_age : age,
            e_email:email
        });
    }
  return (
    <>
        <div className='row'>
            <div className='col-md-4'>
                <div className='bg-primary p-4 text-center'>
                    <h1> Create Data </h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label> Enter Name: </label>
                        <input type='text' placeholder='Enter name' className='form-control' onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className='form-group'>
                        <label> Enter Age: </label>
                        <input type='number' placeholder='Enter Age' className='form-control' onChange={(e) => setAge(e.target.value)}/>
                    </div>

                    <div className='form-group'>
                        <label> Enter Email: </label>
                        <input type='email' placeholder='Enter email' className='form-control' onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <br/>

                    <div className='d-grid'>
                    <input type='submit' value='Submit' className='btn btn-primary'/>
                    </div>
                </form>

                {/* {name}
                <br/>
                {age}
                <br/>
                {email} */}
                {/* data last ma show krse  */}
            </div>
        </div>
    </>
    
  )
}

export default Create