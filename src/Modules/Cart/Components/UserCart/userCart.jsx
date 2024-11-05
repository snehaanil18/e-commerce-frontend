"use client";
import React, { useEffect, useState } from 'react'
import {userCartsAPI, incrementCartsAPI, decrementCartsAPI} from '../../Services/allAPI'
import styles from './carts.module.css'

function UserCart() {
    const [cart,setCart] = useState([])
    const [total,setTotal] = useState(0)

    const getCart = async() => {
        const reqbody ={
            name:'cart'
        }
        const res = await userCartsAPI(reqbody)
        const details = res.data;
        setCart(details.data)
        setTotal(details.cartTotal)
    }

    const incrementCart = async(product) => {

        const reqbody = {
            name: product.name,
            productID : product.productID,
            image: product.image,
            price: product.price
        }
        const res = await incrementCartsAPI(reqbody)
        if(res.status == 200){
            const details = res.data;
            getCart();
            alert(details.message)
        }
        else{
            alert('Add to Cart Failed')
        }
    }

    const decrementCart = async(product) => {

        const reqbody = {
            name: product.name,
            productID : product.productID,
            price: product.price
        }
        const res = await decrementCartsAPI(reqbody)
        if(res.status == 200){
            const details = res.data;
            getCart();
            alert(details.message)
        }
        else{
            alert('Add to Cart Failed')
        }
    }

    useEffect(() => {
        getCart()
    },[])

    return (
        <div>
            <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>quantity</th>
                    <th>price</th>
                    <th>total amount</th>
                </tr>
                </thead>
               <tbody>
                {cart?.length>0? cart.map(item => (
               <tr key={item._id}>
                    <td>{item.productID} </td>
                    <td>{item.name} </td>
                    <td className={styles.qty}>
                    <button onClick={() => decrementCart(item)}>-</button>
                        {item.quantity}
                        <button onClick={() => incrementCart(item)}>+</button> 
                    </td>
                    <td>{item.price} </td>
                    <td>{item.totalamount} </td>
                </tr>
                )):'cart is empty'}
               </tbody>
              
   
            </table>
            </div>
            <div className={styles.card}>
                <h3>Cart Total: Rs. {total} </h3>
            </div>

        </div>
    )
}

export default UserCart