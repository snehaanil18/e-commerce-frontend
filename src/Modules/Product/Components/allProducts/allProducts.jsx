"use client";
import React, { useEffect, useState } from 'react'
import {allProductsAPI,addToCartAPI} from '../../Services/allAPI'
import Image from 'next/image';
import styles from './allProducts.module.css'

function AllProducts() {
  const [products,setProducts] = useState([])

  const getAllproducts = async() => {
    const res = await allProductsAPI()
    const result = res.data;
    setProducts(result.data)
  }

  const addtoCart = async(id) => {
    const res = await addToCartAPI(id)
    console.log(res);
    
    
  }

  useEffect(() => {
    getAllproducts()
  })

  return (
    <div className={styles.container}>
      {products.map(item => (
        <div key={item._id} className={styles.card}>
          <Image src={item.image} alt='' height={170} width={180} />
          <div className={styles.content}>
            <h4>{item.name} </h4>
            <p>{item.productID} </p>
          </div>
          <button onClick={() => addtoCart(item)}>Add to cart</button>
        </div>
      ))}

    </div>
  )
}

export default AllProducts