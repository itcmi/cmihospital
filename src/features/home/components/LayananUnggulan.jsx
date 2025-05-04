import ClinicExterior from "@assets/kanker.jpg";
const layanan = [
  {
    nama: "Pengobatan Kanker",
    deskripsi:
      "Terapi kanker tanpa tindakan invasif seperti kemoterapi atau operasi dengan pendekatan holistik dan teknologi modern.",
    image: ClinicExterior,
    icon: "🩺",
  },
  {
    nama: "Pengobatan Jantung",
    deskripsi:
      "Penanganan penyakit jantung tanpa operasi pemasangan ring atau bypass melalui metode terapi terkini.",
    image: ClinicExterior,
    icon: "❤️",
  },
  {
    nama: "Pengobatan Diabetes",
    deskripsi:
      "Manajemen diabetes tanpa suntik insulin dan ketergantungan obat seumur hidup dengan pendekatan terintegrasi.",
    image: ClinicExterior,
    icon: "🩸",
  },
  {
    nama: "Pengobatan Ginjal",
    deskripsi:
      "Terapi gagal ginjal untuk mengurangi frekuensi cuci darah dan meningkatkan kualitas hidup pasien.",
    image: ClinicExterior,
    icon: "💧",
  },
  {
    nama: "Laboratorium Avicena",
    deskripsi:
      "Terapi gagal ginjal untuk mengurangi frekuensi cuci darah dan meningkatkan kualitas hidup pasien.",
    image: ClinicExterior,
    icon: "💧",
  },
];

const LayananUnggulan = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-600 to-blue-400 pt-0">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-40 pt-2">
        <div className="text-left text-white mb-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Layanan Unggulan{" "}
            <span className="text-white bg-gradient-to-r from-red-500 to-red-600 rounded-b-xl px-3 py-1 text-3xl shadow-md">
              CMI
            </span>
          </h2>
          <p className="text-lg max-w-2xl ml-0">
            Pelayanan terbaik dengan teknologi terkini dan tenaga medis
            profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Layanan utama di kiri */}
          <div className="lg:col-span-1 h-full">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={layanan[0].image}
                alt={layanan[0].nama}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {layanan[0].nama}
                </h3>
                <p className="text-white/90">{layanan[0].deskripsi}</p>
              </div>
            </div>
          </div>

          {/* Layanan lainnya di kanan */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {layanan.slice(1).map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden shadow-md group h-full min-h-[250px]"
              >
                <img
                  src={item.image}
                  alt={item.nama}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-5">
                  <h4 className="text-xl font-semibold text-white mb-1">
                    {item.nama}
                  </h4>
                  <p className="text-white/80 text-sm">{item.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tall white wave at bottom - covers half page */}
      <div className="absolute bottom-0 left-0 w-full z-0 h-1/2 min-h-[200px] max-h-[500px]">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,208C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default LayananUnggulan;
