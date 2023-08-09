import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductsPage from './pages/Products';
import SingleProductPage from './pages/SingleProductPage';

import { store } from './store'
import { Provider } from 'react-redux'
import CartPage from './pages/CartPage';
import AddProduct from './pages/AddProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: "products/:id",
        element: <SingleProductPage />
      },
      {
        path: "/cart",
        element: <CartPage />
      }, {
        path: '/add-product',
        element: <AddProduct />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider >
  </>
);