import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ShopPage from './pages/shop_page';
import ProductPage from './pages/product_page';
import CartPage from './pages/cart_page';
import LoginPage from './pages/login_page';
import SignUpPage from './pages/signup_page';
import AdminPage from './pages/admin_page';
import UserPage from './pages/user_page';
import AddItemPage from './pages/add_item_page';
import AddUserPage from './pages/add_user_page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <App />,
  },
  {
    path: '/shop/:page',
    element: <ShopPage />
  },
  {
    path: '/product/:productId',
    element: <ProductPage />
  },
  {
    path: '/cart',
    element: <CartPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/signup',
    element: <SignUpPage />
  },
  {
    path: '/admin',
    element: <AdminPage />
  },
  {
    path: '/user',
    element: <UserPage />
  },
  {
    path: '/additem',
    element: <AddItemPage />
  },
  {
    path: '/adduser',
    element: <AddUserPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
