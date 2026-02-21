import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import './index.css'
import App from './App.jsx'
import AdminPage from './pages/AdminPage.jsx'

function AppWrapper() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true })
  }, [])

  return null;
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<App />} />
  //       <Route path="/admin" element={<AdminPage />} />
  //     </Routes>
  //   </BrowserRouter>
  // )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)
