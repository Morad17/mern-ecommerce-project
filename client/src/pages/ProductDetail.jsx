import React from 'react'

const ProductDetail = ({ match }) => {
    const [product, setProduct] = useState({})

    useEffect( ()=>{
        const getProduct = async() => {
            const {data} = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        getProduct()
    }, [match])
  return (
    <>
        <div className="product-detail-container">
            <div className="">{product.name}</div>
            <img src={product.image} alt={product.name} />
        </div>
    </>
  )
}

export default ProductDetail