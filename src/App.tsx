import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import {
  lazy,
  Suspense,
} from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Skeleton from './loading/skeleton';

const ProductList = lazy(() => import('./pages/ProductList'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const CartPage = lazy(() => import('./pages/CartPage'));

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Skeleton/>} >
      <Routes >
        <Route path='/' element={<ProductList/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
      </Suspense>
      </BrowserRouter>
      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  )
}

export default App
