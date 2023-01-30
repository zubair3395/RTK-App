import './App.css';
import ShoppingCart from './components/ShoppingCart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddItem from './components/AddItem';
function App() {
  return (

    <>
     <BrowserRouter>
       <Routes> 
         <Route path="/" element={<ShoppingCart/>}/>
         <Route path='/addcart' element={<AddItem/>}/>
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
