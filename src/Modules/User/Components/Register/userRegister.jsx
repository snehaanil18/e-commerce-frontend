"use client";
import React, { useState } from 'react'
import { registerUserAPI } from '../../Services/allAPI';
import { useRouter } from 'next/navigation';
import styles from './register.module.css'
import Link from 'next/link';

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

    const handleRegister = async () => {

        try {
            const res = await registerUserAPI(userDetail);

            if (res.status == 200) {
                alert('Successfully Registered!')
                router.push('/login')
            }
            else {
                alert('Register Failed!')
            }
        }
        catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    <h2 className={styles.heading}>Sign Up</h2>
                    <p className={styles.name}>Name</p>
                    <input type="text" placeholder='Enter username' name='username' value={userDetail.username} onChange={handleChange} />

                    <p className={styles.name}>Email or Phone Number</p>
                    <input type="text" placeholder='Enter email address' name='email' value={userDetail.email} onChange={handleChange} />

                    <p className={styles.name}>Password</p>
                    <input type="password" placeholder='Enter password' name='password' value={userDetail.password} onChange={handleChange} />

                    <div className={styles.signUp}>
                        <button onClick={handleRegister}>Register</button>
                    </div>

                    <p className={styles.signinText}>Already have an account? <Link href="/login"
                        className={styles.link}>Sign In</Link></p>

                </div>
            </div>
        </div>
    )
}

export default Register