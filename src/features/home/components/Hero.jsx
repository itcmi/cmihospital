// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { motion } from "framer-motion";
// import ClinicExterior from "@assets/Gedungcmi.jpg";
// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={ClinicExterior}
//           alt="Medical background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-white mix-blend-multiply" />
//       </div>

//       {/* Main content container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24 lg:py-28 relative z-10 w-full">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//           {/* Text content */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
//           >
//             <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
//               <span className="w-2 h-2 bg-blue-200 rounded-full mr-2"></span>
//               Klinik Spesialis Penyakit Kronis
//             </div>

//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
//               Penanganan <span className="text-blue-200">Penyakit Kronis</span>{" "}
//               Secara Holistik
//             </h1>

//             <p className="text-base md:text-lg text-gray-200 max-w-2xl">
//               Di Klinik Utama CMI, kami menghadirkan pendekatan integratif yang
//               memadukan kedokteran modern dengan pengobatan klasik Timur,
//               memberikan solusi holistik untuk kanker, jantung, diabetes, dan
//               gagal ginjal dengan minimal efek samping.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
//                 Jadwalkan Konsultasi
//               </button>
//               <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-3 rounded-lg transition-all duration-300">
//                 Layanan Kami
//               </button>
//             </div>

//             {/* Endorsement section */}
//             <div className="flex items-center justify-center lg:justify-start gap-4 pt-6">
//               <div className="flex -space-x-3">
//                 {[1, 2, 3, 4].map((item) => (
//                   <div
//                     key={item}
//                     className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
//                   >
//                     <img
//                       src={`/api/placeholder/100/100`}
//                       alt="Patient"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//               <div className="text-sm md:text-base text-white">
//                 <p className="font-bold">9000+ Pasien</p>
//                 <p className="text-gray-200">Percayakan Kesehatan Mereka</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Form Card */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="w-full lg:w-5/12 bg-white rounded-2xl shadow-2xl p-6 md:p-8"
//           >
//             <div className="text-center mb-6">
//               <h3 className="text-2xl font-bold text-gray-800">
//                 Konsultasi Gratis
//               </h3>
//               <p className="text-gray-600 mt-1">
//                 Dapatkan analisis kondisi kesehatan Anda
//               </p>
//             </div>

//             <form className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Nama Lengkap
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Masukkan nama lengkap"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Nomor Telepon
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Contoh: 081234567890"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="condition"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Keluhan Kesehatan
//                 </label>
//                 <select
//                   id="condition"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="">Pilih keluhan utama</option>
//                   <option value="kanker">Kanker</option>
//                   <option value="jantung">Penyakit Jantung</option>
//                   <option value="diabetes">Diabetes</option>
//                   <option value="ginjal">Gagal Ginjal</option>
//                   <option value="other">Lainnya</option>
//                 </select>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
//               >
//                 Kirim & Jadwalkan Konsultasi
//               </button>
//             </form>

//             <p className="text-xs text-gray-500 text-center mt-4">
//               Dengan mengisi form ini, Anda menyetujui kebijakan privasi kami
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Floating doctor badge - optional */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 1 }}
//         className="absolute bottom-8 md:bottom-12 right-8 md:right-12 z-20 hidden md:flex items-center bg-white rounded-full pl-2 pr-5 py-2 shadow-lg"
//       >
//         <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-blue-600"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//             />
//           </svg>
//         </div>
//         <div className="text-left">
//           <p className="text-sm font-bold text-gray-800">
//             Tim Dokter Spesialis
//           </p>
//           <p className="text-xs text-gray-600">Siap Membantu Anda</p>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useState } from "react";
import ClinicExterior from "@assets/Gedungcmi.jpg";

const Hero = () => {
  // State untuk form
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    condition: "",
    notes: "",
  });

  // Handler untuk perubahan input
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handler untuk submit form ke WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    // Nomor WhatsApp tujuan (tanpa +)
    const waNumber = "628119161166"; // Ganti dengan nomor WA yang sebenarnya

    // Buat pesan untuk WhatsApp
    const message = `*Konsultasi Baru*
Nama: ${formData.name}
Telepon: ${formData.phone}
Keluhan: ${formData.condition}
Catatan: ${formData.notes}`;

    // Encode pesan untuk URL WhatsApp
    const encodedMessage = encodeURIComponent(message);

    // Buat URL WhatsApp
    const waURL = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    // Buka WhatsApp di tab baru
    window.open(waURL, "_blank");
  };

  return (
    <section className="relative my-32 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ClinicExterior}
          alt="Klinik CMI Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-white mix-blend-multiply" />
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-24 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 space-y-7 text-center lg:text-left"
          >
            <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-medium border border-white/20">
              <span className="w-2 h-2 bg-blue-200 rounded-full mr-2 animate-pulse"></span>
              Klinik Spesialis Penyakit Kronis
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Penanganan <span className="text-blue-200">Penyakit Kronis</span>{" "}
              Secara Holistik
            </h1>

            <p className="text-base md:text-lg text-gray-100 max-w-2xl leading-relaxed">
              Di Klinik Utama CMI, kami menghadirkan pendekatan integratif yang
              memadukan kedokteran modern dengan pengobatan klasik Timur,
              memberikan solusi holistik untuk kanker, jantung, diabetes, dan
              gagal ginjal dengan minimal efek samping.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-blue-500/50">
                Jadwalkan Konsultasi
              </button>
              <button className="bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 focus:ring-4 focus:ring-white/30">
                Layanan Kami
              </button>
            </div>

            

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-white text-sm">Dokter Berpengalaman</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <span className="text-white text-sm">Perawatan Personal</span>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full lg:w-5/12 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-blue-600 text-white py-4 px-6 text-center">
              <h3 className="text-2xl font-bold">Konsultasi Gratis</h3>
              <p className="text-blue-100 mt-1 text-sm">
                Dapatkan analisis kondisi kesehatan Anda
              </p>
            </div>

            <form className="p-6 md:p-8 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nomor WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Contoh: 081234567890"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="condition"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Keluhan Kesehatan <span className="text-red-500">*</span>
                </label>
                <select
                  id="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                >
                  <option value="">Pilih keluhan utama</option>
                  <option value="Kanker">Kanker</option>
                  <option value="Penyakit Jantung">Penyakit Jantung</option>
                  <option value="Diabetes">Diabetes</option>
                  <option value="Gagal Ginjal">Gagal Ginjal</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Detail Keluhan
                </label>
                <textarea
                  id="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Jelaskan keluhan Anda secara detail (opsional)"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-1.008c-.1.018-.209.033-.316.033-.778 0-1.406-.6-1.406-1.34 0-.242.069-.474.19-.68A6.56 6.56 0 013 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
                Kirim via WhatsApp
              </button>

              <p className="text-xs text-gray-500 text-center">
                Dengan mengisi form ini, Anda menyetujui{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  kebijakan privasi
                </a>{" "}
                kami
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
