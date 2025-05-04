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
    color: "from-pink-600 to-purple-600",
    colorLight: "bg-pink-50",
    colorText: "text-pink-600",
    colorBorder: "border-pink-300",
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
    color: "from-red-600 to-rose-600",
    colorLight: "bg-red-50",
    colorText: "text-red-600",
    colorBorder: "border-red-300",
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
    color: "from-orange-600 to-amber-600",
    colorLight: "bg-orange-50",
    colorText: "text-orange-600",
    colorBorder: "border-orange-300",
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
    color: "from-cyan-600 to-blue-600",
    colorLight: "bg-cyan-50",
    colorText: "text-cyan-600",
    colorBorder: "border-cyan-300",
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
    color: "from-emerald-600 to-teal-600",
    colorLight: "bg-emerald-50",
    colorText: "text-emerald-600",
    colorBorder: "border-emerald-300",
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
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-blue-50 rounded-full opacity-30 blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center text-blue-600 font-medium text-sm px-4 py-1.5 bg-blue-50 rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
            Pelayanan Medis Terbaik
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-blue-500 inline-block text-transparent bg-clip-text">
            Layanan Unggulan <span className="text-blue-500">CMI</span>
          </h2>

          <div className="h-1 w-24 bg-blue-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Pendekatan holistik dengan teknologi modern untuk penanganan
            penyakit kronis, memberikan kesembuhan dan kualitas hidup yang lebih
            baik.
          </p>
        </motion.div>

        <div ref={serviceRef}>
          {/* Services Navigation - Tabs for large screens, horizontal scroll for mobile */}
          <div className="mb-12 overflow-hidden">
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
                      ? `bg-gradient-to-r ${item.color} text-white shadow-md`
                      : `${item.colorLight} ${item.colorText} hover:shadow`
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
            className="mb-16"
          >
            <div className="bg-white backdrop-blur-sm bg-opacity-80 rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-100">
              {/* Card Header - Service Name Banner */}
              <motion.div
                variants={itemVariants}
                className={`w-full h-20 bg-gradient-to-r ${layanan[activeTab].color} flex items-center justify-between px-6 md:px-10`}
              >
                <div className="flex items-center">
                  <span className="text-3xl mr-4">
                    {layanan[activeTab].icon}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {layanan[activeTab].nama}
                  </h3>
                </div>
                <div
                  className={`w-12 h-12 rounded-full ${layanan[activeTab].colorLight} ${layanan[activeTab].colorText} flex items-center justify-center font-bold`}
                >
                  {activeTab + 1}/{layanan.length}
                </div>
              </motion.div>

              <div className="flex flex-col lg:flex-row">
                {/* Service Image Section */}
                <motion.div
                  variants={itemVariants}
                  className="relative w-full lg:w-1/2"
                >
                  <div className="aspect-w-16 aspect-h-9 lg:aspect-none lg:h-full">
                    <img
                      src={layanan[activeTab].image}
                      alt={layanan[activeTab].nama}
                      className="w-full h-full object-cover"
                    />

                    {/* Image Overlay Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 to-transparent`}
                    >
                      {/* Mobile-only CTA Button */}
                      <div className="absolute bottom-6 left-6 lg:hidden">
                        <button
                          className={`bg-white text-gray-900 font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2 group`}
                        >
                          <span>Konsultasi</span>
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center ${layanan[activeTab].colorLight} ${layanan[activeTab].colorText} group-hover:translate-x-1 transition-transform`}
                          >
                            →
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Service Details Section */}
                <motion.div
                  variants={itemVariants}
                  className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-between"
                >
                  {/* Description */}
                  <div>
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                      {layanan[activeTab].deskripsi}
                    </p>

                    {/* Features List */}
                    <div className="mb-8">
                      <h4 className="text-gray-900 font-semibold mb-4">
                        Fitur Utama:
                      </h4>
                      <ul className="space-y-3">
                        {layanan[activeTab].features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div
                              className={`flex-shrink-0 w-5 h-5 ${layanan[activeTab].colorLight} ${layanan[activeTab].colorText} rounded-full flex items-center justify-center mt-1`}
                            >
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
                  </div>

                  {/* Desktop CTA Button */}
                  <div className="hidden lg:block">
                    <button
                      className={`bg-gradient-to-r ${layanan[activeTab].color} hover:opacity-90 text-white font-medium px-8 py-3 rounded-xl shadow-md transition-all duration-300 flex items-center space-x-2 group`}
                    >
                      <span>Konsultasi Sekarang</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Services Overview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {layanan.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white border ${
                  idx === activeTab
                    ? layanan[idx].colorBorder
                    : "border-gray-100"
                }`}
              >
                <div
                  className={`h-2 ${
                    idx === activeTab
                      ? `bg-gradient-to-r ${item.color}`
                      : "bg-gray-100"
                  }`}
                ></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-2xl ${item.colorLight} ${item.colorText} w-10 h-10 rounded-full flex items-center justify-center`}
                    >
                      {item.icon}
                    </span>
                    <h3 className="font-semibold text-gray-900">{item.nama}</h3>
                  </div>

                  <p className="text-gray-600 text-sm mb-5 line-clamp-2">
                    {item.deskripsi}
                  </p>

                  <button
                    onClick={() => scrollToService(idx)}
                    className={`text-sm ${
                      idx === activeTab
                        ? `${item.colorText} font-medium`
                        : "text-gray-500"
                    } flex items-center gap-1 hover:gap-2 transition-all duration-300`}
                  >
                    {idx === activeTab ? "Sedang Dilihat" : "Lihat Detail"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="#"
              className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-full text-lg font-medium shadow-md hover:shadow-lg transition-all group"
            >
              <span>Jadwalkan Konsultasi dengan Dokter</span>
              <span className="ml-2 w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-12 md:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
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
