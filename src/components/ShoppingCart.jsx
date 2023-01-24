import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Navbar from './Navbar';
import { AddToCart } from '../Features/countSlice';
import { useDispatch} from 'react-redux';
function ShoppingCart(props) {
    const[ users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(()=>{
        fetch("https://api.github.com/users").then((response)=> response.json())
        .then((data)=> setUsers(data));
    }, []);
    const dispatch= useDispatch();
    
  return (
    <>
    <Navbar count={count}/>
    <div className='container'>
      <h1 className='my-5'> Shopping Cart Items</h1>
      
        <div className="row">
          {  users.map((element, index)=>
          <div className="col-md-4 my-3" key={index}>
              <div className="card" style={{width: "18rem"}}>
              <img src={element.avatar_url} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{element.login}</h5>
                <p className="card-text">{element.subscriptions_url}</p>
                <button className="btn btn-primary" onClick={()=> {
                    dispatch(AddToCart(element)) 
                    setCount(count+1)}}>Add to Cart</button>
              </div>
            </div>
            </div>
          )
          }
        </div>
    </div>
    </>
  )
}
export default ShoppingCart
