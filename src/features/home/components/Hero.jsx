import { motion } from "framer-motion";
import Background from "@assets/background.svg";
import PhotoHeroOne from "../../../assets/kanker.jpg";
import PhotoHeroTwo from "../../../assets/cmi.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-rose-100 to-red-600 pt-16">
      <img
        alt="Background Klinik Utama CMI"
        className="absolute inset-0 w-full h-full object-cover brightness-[.75] blur-[1px] contrast-90"
        src={Background}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-center">
          {/* Teks Konten */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="font-headline text-left text-4xl sm:text-6xl md:text-7xl font-bold text-emerald-800 leading-tight mb-6 drop-shadow-xl">
              Harapan Baru untuk Kesehatan Anda
            </h1>
            <h2 className="text-left text-xl sm:text-3xl text-black font-medium mb-6">
              Diperkaya dengan Ilmu Kesehatan Warisan Ibnu Sina
            </h2>

            <p className="text-black/80 font-sans text-base sm:text-lg mb-10 text-left leading-relaxed max-w-xl">
              Di Klinik Utama CMI, kami memahami bahwa setiap kesembuhan adalah
              perjalanan emosional. Dengan pendekatan medis modern dan filosofi
              kesehatan Ibnu Sina, kami menghadirkan pemulihan tanpa operasi,
              tanpa kemoterapi, dan tanpa cuci darah.
            </p>

            <div className="flex justify-start space-x-6">
              <button className="bg-red-600 hover:bg-red-700 transition duration-300 text-white font-semibold text-sm rounded-full px-6 py-3 shadow-lg">
                Mulai Konsultasi
              </button>
              <button className="text-red-600 font-semibold text-sm flex items-center space-x-2 hover:underline transition">
                <span>Lihat Kisah Pasien</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </motion.div>

          {/* Media Konten */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Video Testimoni */}
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 transition-transform duration-300 hover:scale-[1.01]">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/20 z-10 pointer-events-none" />
              <iframe
                className="w-full h-full aspect-video z-0 relative"
                src="https://www.youtube.com/embed/05kMbB0YzKo?si=JmTmjoyaLk6qPOLp"
                title="Testimoni Pasien CMI"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </main>
      </div>
    </section>
  );
};

export default Hero;
