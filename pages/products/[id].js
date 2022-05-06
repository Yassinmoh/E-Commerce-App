import React from 'react'
import Image from 'next/image'
import styles from '../../styles/SingleProduct.module.css'
import Head from 'next/head'


const SingleProduct = ({ product }) => {
    const { title, price, description, category, image, } = product
    return (
        <>
        <Head>
            <title>{title}</title>
        </Head>
        <div className="container">
            <div className={styles.product}>
                <div>
                    <Image src={image} width="420" height="500" />
                </div>
                <div>
                    <h2>{title}</h2>
                    <h3>{category}</h3>
                    <h1>${price}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default SingleProduct

export const getStaticPaths = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()

    const paths = products.map(product => {
        return {
            params: {
                id: product.id.toString()
            }
        }
    })

    return { paths, fallback: false }
}


export const getStaticProps = async (context) => {
    const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
    const product = await res.json()

    return {
        props: {
            product: product
        }
    }
}

