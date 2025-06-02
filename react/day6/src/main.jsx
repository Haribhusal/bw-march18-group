import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RootLayout from './layouts/RootLayout.jsx'
import Openion from './pages/Openion.jsx'
import Video from './pages/Video.jsx'
import Economy from './pages/Economy.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import NewsDetails from './components/NewsDetails.jsx'

const ourRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'openion',
        element: <Openion />
      },
      {
        path: 'video',
        element: <Video />
      },
      {
        path: 'economy',
        element: <Economy />
      },
      {
        path: 'news-details/:id',
        element: <NewsDetails />
      }
    ]
  },


]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={ourRoutes} />
)
