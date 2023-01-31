import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkout } from '../Features/countSlice'
export default function TotalPayment() {
  const sub_total = useSelector((state)=> state.ShoppingStore.TotalPrice)
  const dispatch = useDispatch();
  const taxes= sub_total/90*10
  const total = sub_total+taxes;
  const handleCheckOut= ()=>{
    if(sub_total>0){
      dispatch(checkout())
      alert("Your order Sucessfull")
    }
    else{
      alert("Please order something")
    }
  }
  return (
    <>
      <h1>Your Total Payment</h1>
      <hr />
      <div className="row">
      <p className='col-md'>Price</p>
      <p className='col-md'>{sub_total}</p>
      </div>
      <hr />
      <div className="row">
      <p className='col-md'>Taxes</p>
      <p className='col-md'>{Math.round(taxes)}</p>
      </div>
      <hr />
      <div className="row">
      <p className='col-md'>Total Price</p>
      <p className='col-md'>{Math.round(total)}</p>
      </div>
      <button className='btn btn-lg btn-success'
       style={{marginLeft: "100px", marginTop:"20px"}} onClick={handleCheckOut}>Checkout</button>
    </>
  )
}
