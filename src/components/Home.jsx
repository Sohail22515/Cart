import React from 'react'
import '../styles/home.scss'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice'; // Import fetchProducts

const Home = () => {

    const dispatch = useDispatch();
    const { items: productList, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts()); // Fetch products when component mounts
    }, [dispatch]);

    const addToCartHandler = (id) => {
        dispatch({ type: 'cart/addToCart', payload: id });
        toast.success("Added to cart")
    };

    return (
        <div className="home">
            {loading && <h2>Loading Products...</h2>}
            {error && <h2 style={{ color: 'white', backgroundColor: 'red', padding: '10px', textAlign: 'center' }}>
                Something went wrong
            </h2>}
            {productList.map((product) => (
                <ProductCard
                    key={product.id}
                    imgSrc={product.image}
                    name={product.title}
                    price={product.price}
                    id={product.id}
                    handler={addToCartHandler}
                />
            ))}
        </div>
  )
}

const ProductCard =({name,id,price,handler,imgSrc})=>(
    <div className='productCard'>
        <img src={imgSrc} alt={name}/>
        <p>{name}</p>
        <h4>₹{price}</h4>
        <button onClick={()=>handler({name,price,id,quantity:1,imgSrc})}>Add to Cart</button>
    </div>

)


export default Home
