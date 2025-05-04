import React from "react";
import HeroImage from "@assets/Gedungcmi.jpg";
const TentangKami = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:flex lg:items-center lg:justify-between">
        {/* Kiri: Teks */}
        <div className="max-w-xl z-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Klinik Utama <span className="text-red-500">CMI</span>{" "}
          </h1>
          <p className="text-gray-600 mb-6">
            Tangani kanker, jantung, gagal ginjal, dan diabetes secara lebih
            aman tanpa tindakan invasif. Kami memadukan pengobatan medis modern
            dengan terapi klasik Timur yang berakar dari warisan keilmuan Ibnu
            Sina dalam Al-Qanun fi al-Tibb, membentuk metode integratif yang
            minim efek samping dan berfokus pada pemulihan menyeluruh serta
            peningkatan kualitas hidup Anda.
          </p>
          <button className="bg-red-500 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
            Konsultasi
          </button>
        </div>

        {/* Kanan: Gambar */}
        <div className="mt-10 lg:mt-0 lg:w-1/2 relative z-10 flex items-center justify-center">
          {/* Background Shape - Kanan Atas */}
          <svg
            className="absolute -top-6 -right-6 w-24 h-24 text-blue-800 opacity-30"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M45.4,-78.9C58.2,-70.4,67.9,-58.2,72.6,-44.7C77.4,-31.2,77.1,-15.6,74.8,-1.3C72.5,13.1,68.1,26.2,61.3,39.2C54.5,52.3,45.3,65.2,33.4,72.6C21.4,80.1,6.8,82.2,-7.2,83.2C-21.2,84.3,-34.5,84.2,-46.2,77.4C-57.9,70.5,-67.9,56.8,-72.4,42.2C-76.9,27.6,-75.8,12.1,-75.6,-3.8C-75.4,-19.7,-76.2,-36,-68.7,-47.2C-61.2,-58.4,-45.5,-64.5,-31.3,-72.2C-17,-80,-4.3,-89.3,8.9,-91.3C22,-93.3,44,-88.4,45.4,-78.9Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Decorative Border Wrapper */}
          <div className="relative rounded-3xl border-4 border-blue-700 shadow-xl p-2 bg-white">
            <img
              src={HeroImage}
              alt="Team High Five"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Left Bottom Shape */}
          <svg
            className="absolute -bottom-10 -left-10 w-20 h-20 text-emerald-100 opacity-20"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Background Lengkung Biru */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-56"
          preserveAspectRatio="none"
        >
          <path
            fill="#2563eb" // Tailwind warna biru-600
            d="M0,224L60,202.7C120,181,240,139,360,112C480,85,600,75,720,90.7C840,107,960,149,1080,160C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default TentangKami;
