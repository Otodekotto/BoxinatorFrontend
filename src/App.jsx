import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import EditProductPage from "./pages/EditProductPage"
import ProductsPage from "./pages/ProductsPage"
import ProfilePage from "./pages/ProfilePage"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import KeycloakRoute from "./routes/KeycloakRoute"
import { ROLES } from "./const/roles"
import { Provider } from "react-redux"
import store from "./components/redux/store"
import ScrollToTop from "./components/scrollToTop/ScrollToTop"
import { Box } from "@mui/material"

function App() {
  return (
    <Provider store={store}>
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
        <Box sx={{ paddingTop: "3rem" }}>
          <ScrollToTop />
          <Footer />
        </Box>
      </BrowserRouter>
    </Provider>
  )
}

export default App
