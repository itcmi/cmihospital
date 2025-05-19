import React from "react";
import Logo from "../assets/logo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaChevronRight,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Handler untuk form subscribe
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Implementasi logika subscribe di sini
    alert("Terima kasih telah berlangganan newsletter kami!");
  };

  return (
    <footer className="bg-gradient-to-b from-blue-700 to-blue-900 text-white">
      {/* Contact Info Bar */}
      <div className="bg-blue-800 py-4 border-b border-blue-600/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <FaPhoneAlt className="text-blue-300" />
            <a
              href="tel:+62(022) 253 1000"
              className="hover:text-blue-200 transition-colors"
            >
              +62 821-2159-0000
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FaEnvelope className="text-blue-300" />
            <a
              href="mailto:info@cmihospital.com"
              className="hover:text-blue-200 transition-colors"
            >
              info@cmihospital.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FaMapMarkerAlt className="text-blue-300" />
            <span>
              Jl. Tubagus Ismail VII, Sekeloa, Kecamatan Coblong, Kota Bandung,
              Jawa Barat 40134
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <motion.div
        className="max-w-7xl mx-auto pt-12 pb-8 px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Tentang Kami */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 flex items-center justify-center mr-3">
                <img
                  src={Logo}
                  alt="CMI Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-white">CMI Hospital</h2>
            </div>

            <p className="text-blue-100 leading-relaxed mb-6">
              CMI Hospital memberikan pelayanan kesehatan dengan menggabungkan
              dua keilmuan kedokteran, yaitu Ilmu Kedokteran Barat (Konvensional
              Modern) dengan Ilmu Kedokteran Klasik berdasarkan buku The Canon
              of Medicine (Al Qanun fii At-Tibb) karya dr. Ibnu Sina secara
              terintegrasi.
            </p>

            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>

          {/* Layanan Kami */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-500 inline-block">
              Layanan Kami
            </h3>
            <ul className="space-y-3">
              {[
                "Penanganan Penyakit Kanker",
                "Penanganan Penyakit Jantung",
                "Penanganan Penyakit Diabetes",
                "Penanganan Penyakit Ginjal",
                "Medical Check Up",
                "Konsultasi Kesehatan",
                "Pemeriksaan Laboratorium",
              ].map((item, index) => (
                <li key={index} className="flex items-center group">
                  <FaChevronRight className="mr-2 text-blue-300 text-xs group-hover:translate-x-1 transition-transform" />
                  <a
                    href="#"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Menu Navigasi */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-500 inline-block">
              Menu Navigasi
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Beranda", "/"],
                ["Tentang Kami", "#"],
                ["Layanan", "#"],
                ["Dokter", "#"],
                ["Galeri", "#"],
                ["Testimoni", "#"],
                ["Artikel", "/artikel-kesehatan"],
                ["Kontak", "#"],
                ["FAQ", "#"],
                ["Karir", "#"],
              ].map(([label, url], index) => (
                <div key={index} className="flex items-center group">
                  <FaChevronRight className="mr-2 text-blue-300 text-xs group-hover:translate-x-1 transition-transform" />
                  <a
                    href={url}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Informasi & Subscribe */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-500 inline-block">
              Hubungi Kami
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <p className="text-blue-100">
                  Jl. Tubagus Ismail VII, Sekeloa, Kecamatan Coblong, Kota
                  Bandung, Jawa Barat 40134
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <p className="text-blue-100">
                  <a
                    href="tel:+628123456789"
                    className="hover:text-white transition-colors"
                  >
                    +62 812-3456-789
                  </a>
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <FaClock className="text-sm" />
                </div>
                <div className="text-blue-100">
                  <p>Senin - Sabtu: 08.00 - 17.00</p>
                  <p className="font-medium text-blue-200">IGD: 24 Jam</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-white">
                Berlangganan Newsletter
              </h4>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  placeholder="Email Anda"
                  required
                  className="w-full px-4 py-3 pr-12 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                  aria-label="Subscribe"
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </form>
              <p className="text-xs text-blue-200 mt-2">
                Dapatkan informasi terbaru & promo spesial dari kami
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      </div>

      {/* Copyright & Bottom Links */}
      <div className="max-w-7xl mx-auto py-6 px-6 lg:px-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-blue-200 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-medium text-white">CMI Hospital</span>. All
            Rights Reserved by{" "}
            <a
              href="https://cmihospital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors"
            >
              PT. Canon Medicinae Indonesia
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-blue-200">
            <a href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/628123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-50"
        aria-label="Chat via WhatsApp"
      >
        <svg
          fill="currentColor"
          className="w-7 h-7 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
