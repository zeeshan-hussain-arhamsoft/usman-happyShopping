import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Accessories from './Components/Accessories/Accessories';
import OrderNumDetails from './Components/OrderNumDetails/OrderNumDetails';
import OrdersDetails from './Components/OrdersDetails/OrdersDetails';
import AddToCartItems from './Components/AddToCartItems/AddToCartItems';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import './App.css';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/Accessories' element={<Accessories/>}/>
				<Route path='/AddToCartItems' element={<AddToCartItems/>}/>
				<Route path='/ShoppingCart' element={<ShoppingCart/>} />
				<Route path='/OrdersDetails' element={<OrdersDetails/>}/>
				<Route path='/OrderNumDetails' element={<OrderNumDetails/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
