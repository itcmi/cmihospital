import HeroImage from "../../../assets/cmi.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white pt-16">
      <img
        alt="Gedung Klinik Utama CMI"
        className="absolute inset-0 w-full h-full object-cover brightness-60"
        height="1080"
        src={HeroImage}
        width="1920"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <main className="max-w-3xl mt-20">
          <h1 className="uppercase font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 text-left ">
            Solusi Penyakit Kronis
            <br />
            Tanpa Operasi & Efek Samping
          </h1>
          <p className="text-white font-bold text-base sm:text-lg mb-10 text-left">
            Klinik Utama CMI menggabungkan ilmu kedokteran modern dan klasik
            Timur untuk memberikan perawatan yang menyeluruh, efektif, dan minim
            risiko. Fokus kami adalah membantu Anda pulih tanpa perlu operasi,
            kemoterapi, atau cuci darah.
          </p>
          <div className="flex justify-start space-x-6">
            <button className="bg-green-500 hover:bg-red-700 text-white font-semibold text-sm rounded-md px-5 py-2.5">
              Konsultasi Sekarang
            </button>
            <button className="text-white font-semibold text-sm flex items-center space-x-1 hover:underline">
              <span>Kenali Layanan Kami</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Hero;
