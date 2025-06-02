import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import CartPage from './pages/CartPage.jsx'
import RootLayout from './layouts/RootLayout.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ProductsPage from './pages/ProductsPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {

        path: 'products',
        element: <ProductsPage />
      },
      {
        path: 'cart',
        element: <CartPage />
      }
    ]
  },
  {
    path: "/about",
    element: <div>Hello about</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
