import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white pt-10 pb-6 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Informasi Klinik */}
        <div>
          <h2 className="text-xl font-bold mb-4">CMI Hospital</h2>
          <p className="text-white mb-2">
            Klinik Utama CMI menggabungkan teknologi modern dan pendekatan
            klasik Timur untuk solusi kesehatan yang menyeluruh, tanpa operasi &
            efek samping.
          </p>
          <p className="text-sm text-white">
            &copy; 2025 CMI Hospital. All rights reserved.
          </p>
        </div>

        {/* Kontak */}
        <div>
          <h2 className="text-xl font-bold mb-4">Kontak Kami</h2>
          <p className="text-white">
            WhatsApp:{" "}
            <a
              href="https://wa.me/6282121590000"
              className="text-green-400 hover:underline"
            >
              0821 2159 0000
            </a>
          </p>
          <p className="text-white">
            Email:{" "}
            <a href="mailto:info@cmihospital.com" className="hover:underline">
              info@cmihospital.com
            </a>
          </p>
          <p className="text-white flex items-center mt-2">
            <FaMapMarkerAlt className="mr-2" />
            Jl. Tubagus Ismail VII No. 21, Bandung
          </p>
          <a
            href="https://goo.gl/maps/EXAMPLE_MAP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:underline"
          >
            Lihat di Google Maps
          </a>
        </div>

        {/* Sosial Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Ikuti Kami</h2>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/6282121590000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.instagram.com/cmihospitals"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/cmihospital"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
