import ForgotPasswordPage from '@/pages/forgotPassword/ForgotPasswordPage'
import LoginPage from '@/pages/login/LoginPage'
import SignUpPage from '@/pages/signUp/SignUpPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
