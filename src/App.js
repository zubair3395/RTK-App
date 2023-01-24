import './App.css';
import ShoppingCart from './components/ShoppingCart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddItem from './components/AddItem';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, incrementByAmount } from './Features/countSlice';
function App() {
  // const count = useSelector((state) => state.counter.value)
  // const name = useSelector((state) => state.counter.data.payload)
  // const dispatch = useDispatch()
  //  console.log("Name: ", name)
  return (

    <>
     <BrowserRouter>
       <Routes> 
         <Route path="/" element={<ShoppingCart/>}/>
         <Route path='/addcart' element={<AddItem/>}/>
       </Routes>
     </BrowserRouter>
    </>
    // <div className="App">
    //   <h1>You have Enter name- {name}</h1>
    //   <h1>Total count- {count} </h1>
    //   <button style={{margin: "10px"}} onClick={()=> dispatch(increment("Zubair"))}>Increment</button>
    //   <button onClick={()=> dispatch(decrement())}>Decrement</button>
    //    <button style={{margin: "10px"}} onClick={()=> dispatch(incrementByAmount(10))}>Payload</button>
    // </div>
  );
}

export default App;
