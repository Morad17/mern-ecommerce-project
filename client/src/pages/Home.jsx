import React, { useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { axios } from "axios"
import { listProduct } from '../Redux/Actions/ProductActions'
const Home = () => {
    const dispatch = useDispatch()
    const productList = useSelector((state)=> state.productList)
    const {loading, error, products } = productList

    useEffect(()=>{
        dispatch(listProduct())
    }, [dispatch])
    return (
    <div>
        <h1>Welcome to My Shop</h1>
        {
            loading ? (<p>Loading Spinner...</p>) : error ? (<p>Error : {error}</p>)
            : (<>
                {
                    products.map((product)=>{
                    return(
                    <div className="">{product.name}</div>
                        )
                        
                    })
                }
                </>)
        }
    </div>
  )
}

export default Home