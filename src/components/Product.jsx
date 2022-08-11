import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { addCart,deleteCart, removeCart} from '../redux/actions/eActions';``
import { useParams, Link} from 'react-router-dom';


const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ addedCart, setAddedCart] = useState(false);
    const dispatch = useDispatch(); 
    
    const addProduct = (Product) => {
        dispatch(addCart(product));
        setAddedCart(true);
    }
    const delCartProduct = (Product) => {
        dispatch(deleteCart(product));
        setAddedCart(true);
    }
    const RemoveProduct = (Product) => {
        dispatch(removeCart(product));
        setAddedCart(false);
    }
    

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
  }
        getProduct();
    }, []);


    const Loading = () => {
        return(
            <>
            <div className="col-md-6">
            <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
             </div>
            </>
        )
    }
    const ApearProduct = () => {
        return (
            <>
            <div>
            <img  src={product.image} alt={product.title} height="180" width="180px" />
                          
                            <div>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>$ {product.price}</p>
  
                                {
                                    addedCart ? <button className="btn btn-outline-dark  ms-2 px-4 py-2" onClick={()=> RemoveProduct(product)}> Remove Cart</button>:<button className="btn btn-outline-dark ms-2 px-4 py-2" onClick={()=> addProduct(product)}> Add Cart</button>
                                }

{
                                  addedCart   ? <button className="btn btn-outline-dark  ms-2 px-4 py-2" onClick={()=> delCartProduct(product)}> Remove Cart</button>:<button className="btn btn-outline-dark ms-2 px-4 py-2" onClick={()=> addProduct(product)}> Add Cart</button>
                                }
                                
                                <Link to="/Cart" className="btn btn-dark ms-2 px-4 py-2"> Check Cart </Link>
                            </div>
            </div>
            </>
        )
    }


    return ( 
        <div>
            <div className="container py-10">
                <div className="row py-10">
                    {loading ? <Loading/> : <ApearProduct/> }
                </div>
            </div>
        </div>
    );
}
 
export default Product;