const layanan = [
  {
    nama: "Rawat Inap",
    deskripsi: "Kenyamanan dan perawatan intensif bagi pasien.",
    icon: "🛏️",
  },
  {
    nama: "IGD 24 Jam",
    deskripsi: "Pelayanan gawat darurat siap 24/7.",
    icon: "🚑",
  },
  {
    nama: "Laboratorium",
    deskripsi: "Pemeriksaan laboratorium lengkap dan cepat.",
    icon: "🧪",
  },
];

const LayananUnggulan = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Layanan Unggulan</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {layanan.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-2xl p-6 text-center"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.nama}</h3>
            <p className="text-gray-600">{item.deskripsi}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LayananUnggulan;
