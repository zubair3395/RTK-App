import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Navbar from './Navbar';
import { AddToCart} from '../Features/countSlice';
import { useDispatch} from 'react-redux';
function ShoppingCart() {
    const[ collection, setCollection] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(()=>{
        fetch(" http://localhost:3004/Collection").then((response)=> response.json())
        .then((data)=> setCollection(data));
    }, []);
    const dispatch= useDispatch();
  return (
    <>
    <Navbar count={count}/>
   
    <div className='container'>
      <h1 className='my-5'> Shopping Cart Items</h1>
      
        <div className="row">
          { collection.length > 0 ? collection.map((element, index)=>
          <div className="col-md-4 my-3" key={index}>
              <div className="card" style={{width: "18rem"}}>
              <img src={element.image} className="card-img-top" alt="..." style={{height:"15rem", width:"18rem"}}/>
              <div className="card-body">
                <h5 className="card-title">{element.category}</h5>
                <p className="card-text">{element.price}</p>
                <button className="btn btn-primary" onClick={()=> {
                    dispatch(AddToCart(element)) 
                    setCount(count+1)}}>Add to Cart</button>
              </div>
            </div>
            </div>
          ) : <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
          }
        </div>
    </div>
    </>
  )
}
export default ShoppingCart
