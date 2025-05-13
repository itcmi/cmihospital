import { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// Assume image imports are handled correctly
import ClinicExterior from "@assets/kanker.jpg";

const layanan = [
  {
    nama: "Pengobatan Kanker",
    deskripsi:
      "Terapi kanker tanpa tindakan invasif seperti kemoterapi atau operasi dengan pendekatan holistik dan teknologi modern.",
    image: ClinicExterior,
    icon: "🩺",
    features: [
      "Terapi non-invasif",
      "Pendekatan holistik",
      "Minim efek samping",
    ],
  },
  {
    nama: "Pengobatan Jantung",
    deskripsi:
      "Penanganan penyakit jantung tanpa operasi pemasangan ring atau bypass melalui metode terapi terkini.",
    image: ClinicExterior,
    icon: "❤️",
    features: [
      "Tanpa operasi bypass",
      "Metode terapi terkini",
      "Pendekatan preventif",
    ],
  },
  {
    nama: "Pengobatan Diabetes",
    deskripsi:
      "Manajemen diabetes tanpa suntik insulin dan ketergantungan obat seumur hidup dengan pendekatan terintegrasi.",
    image: ClinicExterior,
    icon: "🩸",
    features: [
      "Manajemen nutrisi",
      "Terapi terintegrasi",
      "Pendekatan holistik",
    ],
  },
  {
    nama: "Pengobatan Ginjal",
    deskripsi:
      "Terapi gagal ginjal untuk mengurangi frekuensi cuci darah dan meningkatkan kualitas hidup pasien.",
    image: ClinicExterior,
    icon: "💧",
    features: [
      "Peningkatan kualitas hidup",
      "Program preventif",
      "Terapi farmakologis",
    ],
  },
  {
    nama: "Laboratorium Avicena",
    deskripsi:
      "Fasilitas laboratorium modern untuk pemeriksaan diagnostik menyeluruh dengan teknologi tinggi dan akurasi tinggi.",
    image: ClinicExterior,
    icon: "🔬",
    features: [
      "Diagnostik komprehensif",
      "Teknologi modern",
      "Hasil cepat dan akurat",
    ],
  },
];

const LayananUnggulan = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const serviceRef = useRef(null);
  const detailsRef = useRef(null);
  const isInView = useInView(detailsRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  // Check if we're on mobile on mount and on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Start animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const scrollToService = (index) => {
    setActiveTab(index);
    if (serviceRef.current && isMobile) {
      serviceRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const tabVariants = {
    inactive: { scale: 1, opacity: 0.9 },
    active: {
      scale: 1.05,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Background decoration - subtle blue gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center text-blue-600 font-medium text-sm px-4 py-1.5 bg-blue-50 rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
            Pelayanan Medis Terbaik
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
            Layanan Unggulan <span className="text-blue-500">CMI</span>
          </h2>

          <div className="h-1 w-16 bg-blue-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Pendekatan holistik dengan teknologi modern untuk penanganan
            penyakit kronis, memberikan kesembuhan dan kualitas hidup yang lebih
            baik.
          </p>
        </motion.div>

        <div ref={serviceRef}>
          {/* Services Navigation - Tabs for large screens, horizontal scroll for mobile */}
          <div className="mb-8 overflow-hidden">
            <motion.div
              className={`flex ${
                isMobile
                  ? "overflow-x-auto hide-scrollbar pb-4"
                  : "flex-wrap justify-center"
              } gap-3`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {layanan.map((item, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => scrollToService(idx)}
                  variants={tabVariants}
                  initial="inactive"
                  animate={activeTab === idx ? "active" : "inactive"}
                  whileHover="hover"
                  className={`flex items-center px-5 py-3 rounded-xl text-sm font-medium shadow-sm transition-all whitespace-nowrap ${
                    activeTab === idx
                      ? `bg-blue-600 text-white shadow-md`
                      : `bg-blue-50 text-blue-600 hover:shadow`
                  }`}
                >
                  <span className="mr-2 text-lg">{item.icon}</span>
                  {item.nama}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Featured Service Card */}
          <motion.div
            ref={detailsRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="mb-8"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-blue-100">
              <div className="flex flex-col lg:flex-row">
                {/* Service Image Section */}
                <motion.div
                  variants={itemVariants}
                  className="relative w-full lg:w-2/5"
                >
                  <div className="aspect-w-16 aspect-h-9 lg:aspect-none lg:h-full">
                    <img
                      src={layanan[activeTab].image}
                      alt={layanan[activeTab].nama}
                      className="w-full h-full object-cover"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-blue-900/60 to-transparent">
                      <div className="absolute bottom-0 left-0 p-6 lg:hidden">
                        <h3 className="text-xl font-bold text-white flex items-center">
                          <span className="text-2xl mr-2">{layanan[activeTab].icon}</span>
                          {layanan[activeTab].nama}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Service Details Section */}
                <motion.div
                  variants={itemVariants}
                  className="w-full lg:w-3/5 p-6 md:p-8"
                >
                  {/* Title - only visible on desktop */}
                  <div className="hidden lg:flex items-center mb-4">
                    <span className="text-3xl mr-3">{layanan[activeTab].icon}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-blue-700">
                      {layanan[activeTab].nama}
                    </h3>
                    <span className="ml-auto bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                      {activeTab + 1}/{layanan.length}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {layanan[activeTab].deskripsi}
                  </p>

                  {/* Features List */}
                  <div>
                    <h4 className="text-blue-700 font-medium mb-3">
                      Fitur Utama:
                    </h4>
                    <ul className="space-y-2">
                      {layanan[activeTab].features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mt-1">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 3L4.5 8.5L2 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-gray-600">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Simple pagination indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-4 space-x-2"
          >
            {layanan.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToService(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeTab === idx ? "w-6 bg-blue-600" : "bg-blue-200 hover:bg-blue-300"
                }`}
                aria-label={`View service ${idx + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-10 md:h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.17,97.92,155.17,72.72,224.37,64.08Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default LayananUnggulan;