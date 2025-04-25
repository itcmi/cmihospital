import HeroImage from "@assets/getahbening.jpg";
import PhotoHeroOne from "../../../assets/kanker.jpg";
import PhotoHeroTwo from "../../../assets/cmi.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white pt-16">
      <img
        alt="Gedung Klinik Utama CMI"
        className="absolute inset-0 w-full h-full object-cover brightness-[.55]"
        src={HeroImage}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-start">
          {/* Konten teks */}
          <div className="animate-fade-in">
            <h1 className="uppercase font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 text-left drop-shadow-lg">
              Solusi Penyakit Kronis
              <br />
              Tanpa Operasi & Efek Samping
            </h1>
            <p className="text-white/90 font-extralight text-base sm:text-lg mb-10 text-left leading-relaxed">
              Klinik Utama CMI menggabungkan ilmu kedokteran modern dan klasik
              Timur untuk memberikan perawatan yang menyeluruh, efektif, dan
              minim risiko. Fokus kami adalah membantu Anda pulih tanpa perlu
              operasi, kemoterapi, atau cuci darah.
            </p>
            <div className="flex justify-start space-x-6">
              <button className="bg-emerald-500 hover:bg-rose-600 transition duration-300 text-white font-semibold text-sm rounded-full px-6 py-3 shadow-xl">
                Konsultasi Sekarang
              </button>
              <button className="text-white font-semibold text-sm flex items-center space-x-2 hover:underline transition">
                <span>Kenali Layanan Kami</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Konten media */}
          <div className="space-y-6 animate-fade-in">
            {/* Video */}
            <div className="group relative w-full rounded-2xl overflow-hidden shadow-xl border border-white/10 transition-transform duration-300 hover:scale-[1.01]">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20 z-10 pointer-events-none" />
              <iframe
                className="w-full h-full aspect-video z-0 relative"
                src="https://www.youtube.com/embed/05kMbB0YzKo?si=JmTmjoyaLk6qPOLp"
                title="Video Klinik Utama CMI"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Dua foto */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src={PhotoHeroOne}
                alt="Pelayanan CMI"
                className="w-full h-auto rounded-xl shadow-lg border border-white/10 object-cover transition-transform duration-300 hover:scale-105"
              />
              <img
                src={PhotoHeroTwo}
                alt="Dokter CMI"
                className="w-full h-auto rounded-xl shadow-lg border border-white/10 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Hero;
