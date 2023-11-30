import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/shop';
import Product from './Pages/product';
import Cart from './Pages/cart';
import loginSigneUp from './Pages/loginSigneUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/man.jpg'
import women_banner from './Components/Assests/women.jpg'
import kid_banner from './Components/Assests/kid.jpg'
import ShopCategory from './Pages/ShopCategory';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids"/>}/>
        <Route path='/product' element={<Product />}>
        <Route path='/productId' element={<Product />}/>
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/loginSigneUp' element={<loginSigneUp/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
