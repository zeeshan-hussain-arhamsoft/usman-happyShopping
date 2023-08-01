import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Accessories from './Components/Accessories/Accessories';
import OrdersDetails from './Components/OrdersDetails/OrdersDetails';
import AddToCartItems from './Components/AddToCartItems/AddToCartItems';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import ContactDetails from './Components/ContactDetails/ContactDetails';
import Payment from './Components/Payment/Payment';
import Shipping from './Components/Shipping/Shipping';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import './App.css';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/accessories' element={<Accessories />} />
				<Route path='/addToCartItems' element={<AddToCartItems />} />
				<Route path='/shoppingCart' element={<ShoppingCart />} />
				<Route path='/ordersDetails' element={<OrdersDetails />} />
				<Route path='/contactDetails' element={<ContactDetails />} />
				<Route path='/payment' element={<Payment />} />
				<Route path='/shipping' element={<Shipping />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
