import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import offer_banner1 from './Components/Assets/banner1.png';
import offer_banner2 from './Components/Assets/banner2.png';
import offer_banner3 from './Components/Assets/banner3.png';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/face' element={<ShopCategory banner={offer_banner1} category="face"/>}/>
        <Route path='/body' element={<ShopCategory banner={offer_banner2} category="body"/>}/>
        <Route path='/hair' element={<ShopCategory banner={offer_banner3} category="hair"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
