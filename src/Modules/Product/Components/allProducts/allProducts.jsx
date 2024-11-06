"use client";
import React, { useEffect, useState } from 'react'
import { allProductsAPI, addToCartAPI } from '../../Services/allAPI'
import Image from 'next/image';
import styles from './allProducts.module.css'
import heart from '@/Themes/Images/heart.svg'
import badge from '@/Themes/Images/badge.svg'
import { useRouter } from 'next/navigation';


function AllProducts() {
  const [products, setProducts] = useState([])
  const router = useRouter()

  const getAllproducts = async () => {
    try{
      const res = await allProductsAPI()
      const result = res.data;
      setProducts(result.data)
    }
    catch{
      alert('Something went Wrong')
    }
  }

  const addtoCart = async (id) => {
    const token = sessionStorage.getItem('token')
    if(token){
      const res = await addToCartAPI(id)
      if (res.status == 200) {
        const details = res.data;
        alert(details.message)
      }
      else {
        alert('Cannot add Product')
      }
    }
    else{
      router.push('/login')
    }

  }

  useEffect(() => {
    getAllproducts()
  }, [])

  return (
    <div>
      {/* <div className={styles.container}>
        {products.map(item => (
          <div key={item._id} className={styles.card}>
            <Image src={item.image} alt='' height={170} width={180} />
            <div className={styles.content}>
              <h4>{item.name} </h4>
              <p>{item.productID} </p>
              <h5>Price: {item.price} </h5>
            </div>
            <button onClick={() => addtoCart(item)}>Add to cart</button>
          </div>
        ))}

      </div> */}

      <div className={styles.collection}>
        <div className={styles.heading}>Our Collections</div>
        <div className={styles.info}>
          <div className={styles.count}>Showing {products.length} results</div>
        </div>

        <div className={styles.cards}>
          {products.map(item => (
            <div key={item._id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <div className={styles.imageBlock}>
                  <Image src={item.image} alt="Product" className={styles.productImage} height={170} width={150} />

                </div>
                <div className={styles.heartWrapper}>
                  <Image src={heart} alt="Heart" className={styles.heartImage} height={15} width={15} />

                </div>

                <div className={styles.badgeWrapper}>
                  <Image src={badge} alt="Heart" className={styles.badgeWrapper} height={40} width={250} />

                </div>
              </div>

              <div className={styles.detailsBlock}>
                <div className={styles.head1}>{item.name}</div>
                <p className={styles.subhead1}>{item.desc} </p>
                <p className={styles.price}>$ {item.price} </p>
                  <button className={styles.buyButton} onClick={() => addtoCart(item)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllProducts