import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LandingPage from './LandingPage.tsx'
import AuthProvider from './AuthProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <AuthProvider>
    <LandingPage />
    </AuthProvider>
  </React.StrictMode>,
)
