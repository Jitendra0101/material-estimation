import './cssfiles/Signup.css'
import React,{useState} from 'react';
import axios from 'axios'


function Signup()
{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')


    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/",{
                email,password
            })
        }
        catch(e){
            console.log(e);

        }
    }


    return(
        <div className='maindiv'>
            <div className='innerdiv1'>
                <h1>Sign-up</h1>
                <form action='POST'>

                    <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id="" />
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id="" />
                    <input type="submit"  onClick={submit} />

                </form>
            </div>
        </div>
    );
}
export default Signup;