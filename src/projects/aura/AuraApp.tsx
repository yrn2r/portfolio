import { Routes, Route } from 'react-router-dom'
import './styles/aura.css'

import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'

import AuraLayout from './components/AuraLayout'
import AuraHome from './pages/AuraHome'
import FragrancePage from './pages/FragrancePage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import AuraNotFound from './pages/AuraNotFound'

export default function AuraApp() {
  return (
    <div className="aura-scope">
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route element={<AuraLayout />}>
              <Route index element={<AuraHome />} />

              <Route
                path="fragrance/:slug"
                element={<FragrancePage />}
              />

              <Route
                path="cart"
                element={<CartPage />}
              />

              <Route
                path="checkout"
                element={<CheckoutPage />}
              />

              <Route
                path="*"
                element={<AuraNotFound />}
              />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </div>
  )
}
