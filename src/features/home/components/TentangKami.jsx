import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import GedungCMI from "@assets/cmi.webp";

const TentangKami = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [counter, setCounter] = useState({
    years: 0,
    patients: 0,
  });

  // Stats final values
  const stats = {
    years: 16,
    patients: 9000,
  };

  // Animate stats when component comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      // Animate counters
      const duration = 2000; // 2 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);

      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;

        setCounter({
          years: Math.floor(progress * stats.years),
          patients: Math.floor(progress * stats.patients),
        });

        if (frame === totalFrames) {
          clearInterval(counter);
          setCounter(stats);
        }
      }, frameDuration);
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="tentang-kami"
      ref={ref}
      className="relative bg-gradient-to-b from-white to-blue-50 py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title - Centered for all screen sizes */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-3">
            Tentang Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Klinik Utama <span className="text-blue-600">CMI</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
        </motion.div>

        {/* Main content grid - Reorders on mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Content section - First on mobile, second on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.p
                variants={itemVariants}
                className="text-gray-700 text-lg"
              >
                Tangani kanker, jantung, gagal ginjal, dan diabetes secara lebih
                aman tanpa tindakan invasif. Kami memadukan pengobatan medis
                modern dengan terapi klasik Timur yang teruji.
              </motion.p>

              <motion.p variants={itemVariants} className="text-gray-700">
                Pendekatan integratif kami berakar dari warisan keilmuan Ibnu
                Sina dalam Al-Qanun fi al-Tibb, membentuk metode pengobatan yang
                minim efek samping dan berfokus pada pemulihan menyeluruh serta
                peningkatan kualitas hidup pasien.
              </motion.p>

              {/* List with icons */}
              <motion.ul variants={itemVariants} className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Pendekatan holistik untuk penyakit kronis
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">Tim dokter berpengalaman</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Fasilitas medis modern dan nyaman
                  </p>
                </li>
              </motion.ul>

              {/* Stats pills - Horizontal layout */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 mt-8"
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-md flex items-center gap-2">
                  <span className="text-2xl font-bold text-blue-600">
                    {counter.years}+
                  </span>
                  <span className="text-gray-600">Tahun Pengalaman</span>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-md flex items-center gap-2">
                  <span className="text-2xl font-bold text-blue-600">
                    {counter.patients}+
                  </span>
                  <span className="text-gray-600">Pasien Puas</span>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center group">
                  Jadwalkan Konsultasi
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
              </motion.div>
            </motion.div>
          </div>

          {/* Image section - First on desktop, second on mobile */}
          <motion.div
            variants={imageVariants}
            className="order-1 lg:order-2 lg:col-span-7 relative flex justify-center"
          >
            {/* Hexagon shape container for image */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-10 w-20 h-20 bg-blue-100 rounded-full animate-pulse"></div>
              <div
                className="absolute -bottom-8 -left-12 w-28 h-28 bg-blue-200 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Image with hexagon mask */}
              <div className="relative overflow-hidden">
                {/* Hexagon clip path */}
                <div className="relative z-10 w-full max-w-lg">
                  <div className="aspect-w-4 aspect-h-3 md:aspect-h-4">
                    <div className="relative w-full h-full">
                      <img
                        src={GedungCMI}
                        alt="Gedung Klinik CMI"
                        className="object-cover w-full h-full rounded-3xl shadow-2xl"
                        style={{
                          clipPath:
                            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                          transformOrigin: "center",
                          transform: "scale(1.1)",
                        }}
                      />

                      {/* Gradient overlay */}
                      <div
                        className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent"
                        style={{
                          clipPath:
                            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Experience badge - Positioned outside the hexagon */}
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-xl z-20 border-4 border-white">
                  <span className="text-3xl font-bold">{counter.years}+</span>
                  <span className="text-xs">Tahun</span>
                  <span className="text-xs">Pengalaman</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-12 sm:h-16 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default TentangKami;
