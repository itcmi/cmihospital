const artikel = [
  {
    judul: "Cara Menjaga Kesehatan Ginjal",
    deskripsi: "Tips menjaga kesehatan ginjal sehari-hari.",
    tanggal: "20 April 2025",
  },
  {
    judul: "Cegah Diabetes Sejak Dini",
    deskripsi: "Pola makan dan gaya hidup untuk mencegah diabetes.",
    tanggal: "18 April 2025",
  },
];

const ArtikelTerbaru = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Artikel Terbaru</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {artikel.map((a, i) => (
          <div key={i} className="border p-6 rounded-2xl shadow-md bg-white">
            <p className="text-sm text-gray-400">{a.tanggal}</p>
            <h3 className="text-xl font-semibold">{a.judul}</h3>
            <p className="text-gray-700 mt-2">{a.deskripsi}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtikelTerbaru;
