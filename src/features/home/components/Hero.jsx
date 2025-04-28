// import { motion } from "framer-motion";
// import BackgroundImage from "@assets/Gedungcmi.jpg"; // Pakai 1 background saja

// const Hero = () => {
//   return (
//     <section
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-100"
//       style={{
//         backgroundImage: `url(${BackgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

//       {/* Konten Utama */}
//       <div className="relative z-10 max-w-7xl w-full px-6 sm:px-10">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//           {/* Kolom Teks */}
//           <motion.div
//             className="flex-1 text-center lg:text-left space-y-6"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
//               Harapan Baru untuk Kesehatan Anda
//             </h1>
//             <h2 className="text-2xl text-shadow-black font-semibold">
//               Metode Penyembuhan Ibnu Sina
//             </h2>
//             <p className="text-gray-200 text-base md:text-lg max-w-md leading-relaxed">
//               Metode Penyembuhan Ibnu Sina tanpa operasi, kemoterapi, atau cuci
//               darah. Klinik Utama CMI mengutamakan kesembuhan alami untuk Anda
//               dan keluarga.
//             </p>

//             {/* Tombol */}
//             <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
//               <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full px-8 py-3 shadow-md transition">
//                 Mulai Konsultasi
//               </button>
//               <a
//                 href="#kisah-pasien"
//                 className="text-white border border-white hover:bg-white hover:text-rose-600 font-medium rounded-full px-8 py-3 transition"
//               >
//                 Lihat Kisah Pasien
//               </a>
//             </div>
//           </motion.div>

//           {/* Kolom Video */}
//           <motion.div
//             className="flex-1 w-full"
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
//               <iframe
//                 className="w-full h-full"
//                 src="https://www.youtube.com/embed/05kMbB0YzKo?si=JmTmjoyaLk6qPOLp"
//                 title="Testimoni Pasien CMI"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import BackgroundImage from "@assets/Gedungcmi.jpg"; // Background Hero
import Info1 from "@assets/kanker.jpg"; // Gambar Carousel
import Info2 from "@assets/kanker.jpg";
import Info3 from "@assets/kanker.jpg";

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay gelap tipis */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Konten Utama */}
        <div className="relative z-10 max-w-7xl w-full px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Teks */}
            <motion.div
              className="flex-1 text-center lg:text-left space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Harapan Baru untuk Kesehatan Anda
              </h1>
              <p className="text-gray-200 text-base md:text-lg max-w-md leading-relaxed">
                Metode Penyembuhan Ibnu Sina di Klinik Utama CMI, solusi alami
                tanpa operasi.
              </p>

              <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
                <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full px-8 py-3 shadow-md transition">
                  Mulai Konsultasi
                </button>
                <a
                  href="#kisah-pasien"
                  className="text-white border border-white hover:bg-white hover:text-rose-600 font-medium rounded-full px-8 py-3 transition"
                >
                  Lihat Kisah Pasien
                </a>
              </div>
            </motion.div>

            {/* Video */}
            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/05kMbB0YzKo?si=JmTmjoyaLk6qPOLp"
                  title="Testimoni Pasien CMI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAROUSEL SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Informasi Penting
          </h2>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 4000 }}
            loop
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={Info1}
                  alt="Info 1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Pemeriksaan Gratis
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Dapatkan layanan pemeriksaan kesehatan tanpa biaya setiap
                    hari Senin.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={Info2}
                  alt="Info 2"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Promo Detoks Darah
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Program spesial untuk meningkatkan vitalitas tubuh Anda.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={Info3}
                  alt="Info 3"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Paket Penyembuhan Anak
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Solusi penyembuhan aman untuk anak-anak dengan metode alami.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Hero;
