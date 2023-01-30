import React from 'react'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { incrementQuantity, removeCart, decrementQuantity } from '../Features/countSlice'
import TotalPayment from './TotalPayment'

function AddItem() {
  const CartItem = useSelector((state) => state.ShoppingStore.data)
  const dispatch = useDispatch();
  const handleDelete = (element)=>{
    dispatch(removeCart(element))
  }
  const handleIncrement= (element)=>{
    dispatch(incrementQuantity(element))
  }
  const handleDecrement= (element)=>{
     dispatch(decrementQuantity(element))
  }
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg bg-light shadow">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">CartItem</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      </form>
    </div>
  </div>
</nav>
    </div>
    <div className='container my-5'>
      <div className="row">
        <div className="col-md-8 position-relative">
        <h1>You Have Add these Items</h1>
      <div className="row">
          { CartItem ?  CartItem.map((element, index)=>
            <div className="col-md-6 my-3" key={index}>
            <div className="card" style={{width: "18rem"}}>
            <img src={element.image} className="card-img-top" alt="..." style={{height:"15rem", width:"18rem"}}/>
            <div className="card-body">
              <h5 className="card-title">{element.category}</h5>
              <p className="card-text">{element.price}</p>
              <div className="row">
                <div className="col-md-4">
                <button className="btn btn-primary" onClick={()=>handleDelete(element.id)}>Delete</button>
                </div>
                <div className="col-md-8">
                  <button className='btn btn-secondary rounded-circle mx-2' onClick={()=>handleDecrement(index)}>-</button>
                  <span>{element.quantity}</span>
                  <button className='btn btn-secondary rounded-circle mx-2' onClick={()=> handleIncrement(index)}>+</button>
                </div>
              </div>

            </div>
          </div>
          </div>
           ) : <h1>Server Down</h1>
          }
        </div>
        </div>
        <div className="col-md-4">
          <TotalPayment/>
        </div>
    </div>

    </div>
    </>
  )
}
export default AddItem
