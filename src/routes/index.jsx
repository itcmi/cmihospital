// src/routes/index.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "@/features/home/pages/HomePage";
import Error from "@/features/Error/Error";
import Login from "@/features/Auth/Login";
import Register from "@/features/Auth/Register";
import Auth from "@/features/Auth/Auth";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ArtikelKesehatan from "../features/Articles/pages/Article";
import ArticlePage from "../features/Articles/pages/SingleArticle";
import AboutUs from "../features/AboutUs/pages/AboutUs";
import FacilitiesPage from "../features/Fasilitas/pages/FasilitasCmi";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="artikel-kesehatan" element={<ArtikelKesehatan />} />
        <Route path="tentang-kami" element={<AboutUs />} />
        <Route path="fasilitas" element={<FacilitiesPage />} />
        <Route path="artikel-kesehatan-single" element={<ArticlePage />} />
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
