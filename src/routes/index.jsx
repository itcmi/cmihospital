// src/routes/index.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "@/features/home/pages/HomePage";
import Error from "@/features/Error/Error";
import Login from "@/features/Auth/Login";
import Register from "@/features/Auth/Register";
import Auth from "@/features/Auth/Auth";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
