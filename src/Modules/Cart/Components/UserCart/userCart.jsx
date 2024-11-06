"use client";
import React, { useEffect, useState } from 'react'
import { userCartsAPI, incrementCartsAPI, decrementCartsAPI } from '../../Services/allAPI'
import styles from './carts.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';


function UserCart() {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const token = sessionStorage.getItem('token')
    const router = useRouter()

    if(!token){
        router.push('/login')
    }

    const getCart = async () => {
        const reqbody = {
            name: 'cart'
        }
        const res = await userCartsAPI(reqbody)
        const details = res.data;
        setCart(details.data)
        setTotal(details.cartTotal)
    }

    const incrementCart = async (product) => {

        const reqbody = {
            name: product.name,
            productID: product.productID,
            image: product.image,
            price: product.price
        }
        const res = await incrementCartsAPI(reqbody)
        if (res.status == 200) {
            const details = res.data;
            getCart();
            alert(details.message)
        }
        else {
            alert('Add to Cart Failed')
        }
    }

    const decrementCart = async (product) => {

        const reqbody = {
            name: product.name,
            productID: product.productID,
            price: product.price
        }
        const res = await decrementCartsAPI(reqbody)
        if (res.status == 200) {
            const details = res.data;
            getCart();
            alert(details.message)
        }
        else {
            alert('Remove from Cart Failed')
        }
    }

    useEffect(() => {
        getCart()
    }, [])

    return (
        <div>
            <div className={styles.container}>
                {/* <table className={styles.table}>
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
                        {cart?.length > 0 ? cart.map(item => (
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
                        )) : 'cart is empty'}
                    </tbody>


                </table> */}
                {/* <div className={styles.card}>
                    <h3>Cart Total: Rs. {total} </h3>
                </div> */}
            </div>

            {/* <div className={styles.count}>
                <h2>0{cart.length} Items</h2>
            </div> */}

            <div className={styles.cartContainer}>
                <div className={styles.productList}>
                    {cart?.length > 0 ? cart.map(item => (
                        <div key={item._id} className={styles.productContainer}>
                            <div className={styles.productItem}>
                                <Image src={item.image} alt='product' height={200} width={200} />
                                <div className={styles.productDetails}>
                                    <div>
                                        <h3>{item.name} </h3>
                                    </div>
                                    <p className={styles.pid}>{item.productID}</p>
                                    
                                    <p className={styles.price}>${item.totalamount} </p>
                                    <div className={styles.quantityControls}>
                                        <button className={styles.qty} onClick={() => decrementCart(item)}>-</button>
                                        <span className={styles.quantity}> Qty: {item.quantity} </span>
                                        <button className={styles.qty} onClick={() => incrementCart(item)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : 'cart is empty'}
                </div>
                <div className={styles.summary}>
                    <h3>Order Details</h3>
                    <div className={styles.summaryItem}>
                        <span>Bag total</span>
                        <span>${total} </span>
                    </div>
                    <button className={styles.checkout}>Go to Checkout</button>
                </div>
            </div>


        </div>
    )
}

export default UserCart