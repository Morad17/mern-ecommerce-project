import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from "../Redux/Actions/ProductActions"

const ProductDetail = ({ match }) => {
    const dispatch = useDispatch()
    const productId = match.params.id
    const productDetails = useSelector((state)=> state.productDetails)
    const  {loading, error, product} = productDetails

    useEffect( ()=>{
        dispatch(listProductDetails(productId))
    }, [dispatch,productId])
  return (
    <>
        <div className="product-detail-container">
            {
              loading ? ( <p>Loading...</p> ): error ? (<p>Error {error}</p> ) :
              (
                <div className="">
                  <div className="">{product.name}name</div>
                  <img src={product.image} alt={product.name} />
                </div>
              )
            } 
            
        </div>
    </>
  )
}

export default ProductDetail