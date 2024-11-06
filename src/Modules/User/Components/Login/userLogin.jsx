"use client";
import React, { useState } from 'react'
import {loginUserAPI} from '../../Services/allAPI'
import { useRouter } from 'next/navigation';
import styles from './login.module.css'
import Link from 'next/link';

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
    <div className={styles.main}>
        <div className={styles.container}>
            <h2 className={styles.heading}>Sign In</h2>
            <p className={styles.name}>Email or Phone Number</p>
            <input type="text" placeholder='Enter email address' name='email' value={userDetail.email}  onChange={handleChange} />

            <p className={styles.name}>Password</p>
            <input type="password" placeholder='Enter password' name='password' value={userDetail.password} onChange={handleChange} />

            <div>
                <button className={styles.loginButton} onClick={handleLogin}>Login</button>
            </div>

            <p className={styles.signinText}>Already have an account? <Link href="/register" className={styles.link}>Sign Up</Link></p>
        </div>
    </div>
  )
}

export default Login