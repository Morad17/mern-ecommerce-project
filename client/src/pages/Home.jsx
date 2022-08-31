import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const getProducts = async() => {
            const {data} = await axios.get("/api/products")
            setProducts(data)
        }
        getProducts()
    }, [])
    return (
    <div>
        <h1>Welcome to My Shop</h1>
        {
            products.map((product)=>{
                return(
                    <div className="">{product.name}</div>
                )
                
            })
        }
    </div>
  )
}

export default Home