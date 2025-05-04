import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import ClinicExterior from "@assets/Gedungcmi.jpg";
import DoctorConsultation from "@assets/kanker.jpg";
import MedicalTeam from "@assets/kankeranak.png";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-28 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background decorative elements - adjusted for header */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-0 w-48 h-48 md:w-64 md:h-64 bg-blue-100 rounded-full opacity-20 blur-xl md:blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-emerald-100 rounded-full opacity-20 blur-xl md:blur-3xl" />
      </div>

      {/* Main content container with safe margins */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 gap-6 md:gap-12">
        {/* Text content - now properly spaced below header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left mt-6 md:mt-0"
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-2 md:mb-4">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full mr-2"></span>
            Klinik Spesialis Penyakit Kronis
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Penanganan <span className="text-blue-600">Penyakit Kronis</span>{" "}
            Secara Holistik
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Di Klinik Utama CMI, kami menghadirkan pendekatan integratif yang
            memadukan kedokteran modern dengan pengobatan klasik Timur,
            memberikan solusi holistik untuk kanker, jantung, diabetes, dan
            gagal ginjal dengan minimal efek samping.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              Jadwalkan Konsultasi
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base">
              Layanan Kami
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 md:pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((item) => (
                <img
                  key={item}
                  src={`https://randomuser.me/api/portraits/women/${
                    item + 40
                  }.jpg`}
                  alt="Patient"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="text-xs sm:text-sm text-black">
              <p className="font-medium">9000+ Pasien</p>
              <p>Percayakan Kesehatan Mereka</p>
            </div>
          </div>
        </motion.div>

        {/* Carousel section - professional design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative rounded-xl md:rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-xl lg:shadow-2xl border-2 border-white/20 backdrop-blur-sm">
            {/* Professional badge with subtle animation */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-6 left-6 z-20 bg-white/90 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center"
            >
              <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
              Update Terkini
            </motion.div>

            {/* Enhanced Swiper Carousel */}
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              loop
              className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[480px] group"
            >
              {/* SwiperSlide ... */}
              {[
                {
                  img: ClinicExterior,
                  title: "Fasilitas Modern & Nyaman",
                  desc: "Lingkungan terapeutik yang dirancang untuk kenyamanan pasien",
                },
                {
                  img: DoctorConsultation,
                  title: "Konsultasi Spesialis",
                  desc: "Tim dokter berpengalaman dalam penanganan penyakit kronis",
                },
                {
                  img: MedicalTeam,
                  title: "Pendekatan Holistik",
                  desc: "Integrasi pengobatan modern dan terapi klasik Timur",
                },
              ].map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative w-full h-full">
                    {/* Professional image with zoom effect */}
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        loading="eager"
                      />
                    </div>

                    {/* Sophisticated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Content with professional typography */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white space-y-2">
                      <div className="max-w-2xl mx-auto">
                        <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-3 border border-white/20">
                          <span className="text-xs font-medium tracking-wider">
                            KLINIK UTAMA CMI
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-base opacity-90 font-light">
                          {item.desc}
                        </p>
                        <div className="mt-4 flex items-center">
                          <span className="w-8 h-px bg-white/50 mr-2"></span>
                          <span className="text-xs tracking-wider">
                            DISCOVER MORE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation buttons with hover effect */}
            <div className="swiper-button-prev !left-4 !text-white/90 !w-10 !h-10 after:!text-xl hover:!bg-white/10 !rounded-full !transition-all !duration-300"></div>
            <div className="swiper-button-next !right-4 !text-white/90 !w-10 !h-10 after:!text-xl hover:!bg-white/10 !rounded-full !transition-all !duration-300"></div>
          </div>
        </motion.div>
      </div>

      {/* Adjusted wave background */}
      <div className="absolute bottom-0 left-0 w-full z-0 h-32 md:h-48 lg:h-64">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#0118D8", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#00BFFF", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs> */}
          <path
            fill="#155dfc"
            d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,138.7C672,128,768,128,864,138.7C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
