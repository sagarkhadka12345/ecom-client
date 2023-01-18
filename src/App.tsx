import React from "react";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import LoginForm from "./components/LoginForm";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateItem from "./components/CreateItem/CreateItem";
import Footer from "./components/Footer";
import RegistrationForm from "./components/Registration/RegistrationForm";
import MainLandingPage from "./components/MainLandingPage";
import Order from "./components/Order/Order";
import Success from "./components/Success";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainLandingPage />} />
            <Route path="/catalogue" element={<ProductPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/carts" element={<Cart />} />
            <Route path="/item" element={<CreateItem />} />
            <Route path="/success" element={<Success />} />
            <Route path="/orders" element={<Order />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        {/* <ReactComponent/> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
