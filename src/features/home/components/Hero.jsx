import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
// import ClinicExterior from "@assets/Gedungcmi.jpg";
import DoctorConsultation from "@assets/kanker.jpg";
import MedicalTeam from "@assets/kankeranak.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section className="relative pt-24 pb-20 md:pt-28 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
//       {/* Background decorative elements - adjusted for header */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         <div className="absolute top-1/4 left-0 w-48 h-48 md:w-64 md:h-64 bg-blue-100 rounded-full opacity-20 blur-xl md:blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-emerald-100 rounded-full opacity-20 blur-xl md:blur-3xl" />
//       </div>

//       {/* Main content container with safe margins */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 gap-6 md:gap-12">
//         {/* Text content - now properly spaced below header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left mt-6 md:mt-0"
//         >
//           <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-2 md:mb-4">
//             <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full mr-2"></span>
//             Klinik Spesialis Penyakit Kronis
//           </div>

//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//             Penanganan <span className="text-blue-600">Penyakit Kronis</span>{" "}
//             Secara Holistik
//           </h1>

//           <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
//             Di Klinik Utama CMI, kami menghadirkan pendekatan integratif yang
//             memadukan kedokteran modern dengan pengobatan klasik Timur,
//             memberikan solusi holistik untuk kanker, jantung, diabetes, dan
//             gagal ginjal dengan minimal efek samping.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
//               Jadwalkan Konsultasi
//             </button>
//             <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base">
//               Layanan Kami
//             </button>
//           </div>

//           <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 md:pt-4">
//             <div className="flex -space-x-2">
//               {[1, 2, 3].map((item) => (
//                 <img
//                   key={item}
//                   src={`https://randomuser.me/api/portraits/women/${
//                     item + 40
//                   }.jpg`}
//                   alt="Patient"
//                   className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white"
//                 />
//               ))}
//             </div>
//             <div className="text-xs sm:text-sm text-black">
//               <p className="font-medium">9000+ Pasien</p>
//               <p>Percayakan Kesehatan Mereka</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Carousel section - professional design */}
//       </div>

//       {/* Adjusted wave background */}
//       <div className="absolute bottom-0 left-0 w-full z-0 h-32 md:h-48 lg:h-64">
//         <svg
//           viewBox="0 0 1440 320"
//           className="w-full h-full"
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="#155dfc"
//             d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,138.7C672,128,768,128,864,138.7C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="w-full lg:w-1/2"
//         >
//           <div className="relative rounded-xl md:rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-xl lg:shadow-2xl border-2 border-white/20 backdrop-blur-sm">
//             {/* Professional badge with subtle animation */}
//             <motion.div
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               transition={{
//                 duration: 0.6,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//               }}
//               className="absolute top-6 left-6 z-20 bg-white/90 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center"
//             >
//               <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
//               Update Terkini
//             </motion.div>

//             {/* Enhanced Swiper Carousel */}
//             <Swiper
//               modules={[Navigation, Autoplay, Pagination]}
//               autoplay={{
//                 delay: 6000,
//                 disableOnInteraction: false,
//                 pauseOnMouseEnter: true,
//               }}
//               navigation={{
//                 nextEl: ".swiper-button-next",
//                 prevEl: ".swiper-button-prev",
//               }}
//               pagination={{
//                 clickable: true,
//                 dynamicBullets: true,
//               }}
//               loop
//               className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[480px] group"
//             >
//               {/* SwiperSlide ... */}
//               {[
//                 {
//                   img: ClinicExterior,
//                   title: "Fasilitas Modern & Nyaman",
//                   desc: "Lingkungan terapeutik yang dirancang untuk kenyamanan pasien",
//                 },
//                 {
//                   img: DoctorConsultation,
//                   title: "Konsultasi Spesialis",
//                   desc: "Tim dokter berpengalaman dalam penanganan penyakit kronis",
//                 },
//                 {
//                   img: MedicalTeam,
//                   title: "Pendekatan Holistik",
//                   desc: "Integrasi pengobatan modern dan terapi klasik Timur",
//                 },
//               ].map((item, idx) => (
//                 <SwiperSlide key={idx}>
//                   <div className="relative w-full h-full">
//                     {/* Professional image with zoom effect */}
//                     <div className="absolute inset-0 overflow-hidden">
//                       <img
//                         src={item.img}
//                         alt={item.title}
//                         className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
//                         loading="eager"
//                       />
//                     </div>

//                     {/* Sophisticated gradient overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

//                     {/* Content with professional typography */}
//                     <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white space-y-2">
//                       <div className="max-w-2xl mx-auto">
//                         <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-3 border border-white/20">
//                           <span className="text-xs font-medium tracking-wider">
//                             KLINIK UTAMA CMI
//                           </span>
//                         </div>
//                         <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
//                           {item.title}
//                         </h3>
//                         <p className="text-sm md:text-base opacity-90 font-light">
//                           {item.desc}
//                         </p>
//                         <div className="mt-4 flex items-center">
//                           <span className="w-8 h-px bg-white/50 mr-2"></span>
//                           <span className="text-xs tracking-wider">
//                             DISCOVER MORE
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* Custom navigation buttons with hover effect */}
//             <div className="swiper-button-prev !left-4 !text-white/90 !w-10 !h-10 after:!text-xl hover:!bg-white/10 !rounded-full !transition-all !duration-300"></div>
//             <div className="swiper-button-next !right-4 !text-white/90 !w-10 !h-10 after:!text-xl hover:!bg-white/10 !rounded-full !transition-all !duration-300"></div>
//           </div>
//         </motion.div>

import { motion } from "framer-motion";
import ClinicExterior from "@assets/Gedungcmi.jpg";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ClinicExterior}
          alt="Medical background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60 mix-blend-multiply" />
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24 lg:py-28 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-200 rounded-full mr-2"></span>
              Klinik Spesialis Penyakit Kronis
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Penanganan <span className="text-blue-200">Penyakit Kronis</span>{" "}
              Secara Holistik
            </h1>

            <p className="text-base md:text-lg text-gray-200 max-w-2xl">
              Di Klinik Utama CMI, kami menghadirkan pendekatan integratif yang
              memadukan kedokteran modern dengan pengobatan klasik Timur,
              memberikan solusi holistik untuk kanker, jantung, diabetes, dan
              gagal ginjal dengan minimal efek samping.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                Jadwalkan Konsultasi
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                Layanan Kami
              </button>
            </div>

            {/* Endorsement section */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                  >
                    <img
                      src={`/api/placeholder/100/100`}
                      alt="Patient"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm md:text-base text-white">
                <p className="font-bold">9000+ Pasien</p>
                <p className="text-gray-200">Percayakan Kesehatan Mereka</p>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-5/12 bg-white rounded-2xl shadow-2xl p-6 md:p-8"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Konsultasi Gratis
              </h3>
              <p className="text-gray-600 mt-1">
                Dapatkan analisis kondisi kesehatan Anda
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Contoh: 081234567890"
                />
              </div>

              <div>
                <label
                  htmlFor="condition"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Keluhan Kesehatan
                </label>
                <select
                  id="condition"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Pilih keluhan utama</option>
                  <option value="kanker">Kanker</option>
                  <option value="jantung">Penyakit Jantung</option>
                  <option value="diabetes">Diabetes</option>
                  <option value="ginjal">Gagal Ginjal</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
              >
                Kirim & Jadwalkan Konsultasi
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              Dengan mengisi form ini, Anda menyetujui kebijakan privasi kami
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating doctor badge - optional */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 md:bottom-12 right-8 md:right-12 z-20 hidden md:flex items-center bg-white rounded-full pl-2 pr-5 py-2 shadow-lg"
      >
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <div className="text-left">
          <p className="text-sm font-bold text-gray-800">
            Tim Dokter Spesialis
          </p>
          <p className="text-xs text-gray-600">Siap Membantu Anda</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
