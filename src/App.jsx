import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import EditProductPage from "./pages/EditProductPage"
import ProductsPage from "./pages/ProductsPage"
import ProfilePage from "./pages/ProfilePage"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import KeycloakRoute from "./routes/KeycloakRoute"
import { ROLES } from "./const/roles"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<EditProductPage />} />
        <Route
          path="/profile"
          element={
            <KeycloakRoute role={ROLES.User}>
              <ProfilePage />
            </KeycloakRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
