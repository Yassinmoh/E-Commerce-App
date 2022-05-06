import React from 'react'
import Image from 'next/image'
const Products = ({ product }) => {
    return (
        <>

            <div className="product">
                <div>
                    {
                        <Image src={product.image} width="200" height="200" />
                    }
                </div>
                <ul>
                    <li>{product.title}</li>
                    <li>${product.price}</li>
                </ul>
            </div>
        </>
    )
}
export default Products




