"use client";
import React, { useState } from 'react'
import {loginUserAPI} from '../../Services/allAPI'
import { useRouter } from 'next/navigation';

function Login() {
    const [userDetail,setUserDetail] = useState({
        email:'',
        password: ''
    })
    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Update userDetail state based on input name
        setUserDetail({
            ...userDetail,
            [name]: value,
        });
    };

    const handleLogin = async() => {

        try{
            const res = await loginUserAPI(userDetail);
            if(res.status==200){
                const token = res.data.token;
                sessionStorage.setItem('token',token)
                alert('Login successful')
                router.push('/')
            }
            else{
                alert('Login Failed')
            }
        }

        catch(error){
            console.log(error);
            
        }
        
    }

  return (
    <div>
        <div className="container">
            <input type="text" placeholder='Enter email address' name='email' value={userDetail.email}  onChange={handleChange} />
            <input type="password" placeholder='Enter password' name='password' value={userDetail.password} onChange={handleChange} />

            <div>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login