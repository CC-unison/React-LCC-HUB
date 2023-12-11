import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LandingPage from './LandingPage.tsx'
import AuthProvider from './AuthProvider.tsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import NotFound from './error-page.tsx'
import Dashboard from './dashboard.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    errorElement: <NotFound/>
  },
  {path:"dashboard",
  element: <Dashboard/>}
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
