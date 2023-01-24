import React from 'react'
import {useSelector} from 'react-redux'
import Navbar from './Navbar'

function AddItem() {
  const CartItem = useSelector((state) => state.ShoppingStore.data)
  // console.log("Data at AddItem: ",element)
  return (
    <>
    <Navbar/>
    <div className='container'>

      <h1>You Hava Add these Items</h1>
      <div className="row">
          { CartItem ?  CartItem.map((element, index)=>
          <div className="col-md-4 my-3">
              <div className="card" style={{width: "18rem"}}>
              <img src={element.avatar_url} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{element.login}</h5>
                <p className="card-text">{element.subscriptions_url}</p>
                <button className="btn btn-primary">Buy</button>
              </div>
            </div>
            </div>
           ) : <h1>Server Down</h1>
          }
        </div>
    </div>
    </>
  )
}
export default AddItem
