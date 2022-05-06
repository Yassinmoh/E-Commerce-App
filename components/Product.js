import React from 'react'
import Image from 'next/image'
import styles from '../styles/Product.module.css'
import Link from 'next/link'

const Products = ({ product }) => {
    return (
        <>

            <div className={styles.product}>
                <div>
                    {
                        <Image src={product.image} width="200" height="200" />
                    }
                </div>
                <ul>
                    <li>{product.title}</li>
                    <li>${product.price}</li>
                </ul>
                <Link href={`/products/${product.id}`}><a className="button">More Details</a></Link>
            </div>
        </>
    )
}
export default Products




