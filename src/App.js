import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/shop';
import Product from './Pages/product';
import Cart from './Pages/cart';
import loginSigneUp from './Pages/loginSigneUp';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/men' element={<shopCategory category="men"/>}/>
        <Route path='/women' element={<shopCategory category="women"/>}/>
        <Route path='/kids' element={<shopCategory category="kids"/>}/>
        <Route path='/product' element={<Product />}>
        <Route path='/productId' element={<Product />}/>
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/loginSigneUp' element={<loginSigneUp/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
