"use client";
import React, { useState } from 'react'
import { registerUserAPI } from '../../Services/allAPI';
import { useRouter } from 'next/navigation';


function Register() {
    const [userDetail, setUserDetail] = useState({
        username: '',
        email: '',
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

    const handleRegister = async() => {

        try{
            const res = await registerUserAPI(userDetail);

            if(res.status==200){
                alert('Successfully Registered!')
                router.push('/login')
            }
            else{
                alert('Register Failed!')
            }
        }
        catch(error){
            console.log(error);     
        }
        
    }

    return (
        <div>
            <div>
                <div className="container">
                    <input type="text" placeholder='Enter username' name='username' value={userDetail.username} onChange={handleChange} />
                    <input type="text" placeholder='Enter email address' name='email' value={userDetail.email} onChange={handleChange} />
                    <input type="password" placeholder='Enter password' name='password' value={userDetail.password} onChange={handleChange} />

                    <div>
                        <button onClick={handleRegister}>Register</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Register