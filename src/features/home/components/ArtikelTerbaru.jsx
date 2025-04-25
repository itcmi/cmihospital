import Gambarsatu from "../../../assets/kanker.jpg";
const artikel = [
  {
    judul: "Cara Menjaga Kesehatan Ginjal",
    deskripsi: "Tips menjaga kesehatan ginjal sehari-hari.",
    tanggal: "20 April 2025",
    gambar: Gambarsatu, // Gambar random
  },
  {
    judul: "Cegah Diabetes Sejak Dini",
    deskripsi: "Pola makan dan gaya hidup untuk mencegah diabetes.",
    tanggal: "18 April 2025",
    gambar: Gambarsatu, // Gambar random
  },
];

const ArtikelTerbaru = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-red-600">
        Artikel Terbaru
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artikel.map((a, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={a.gambar}
              alt={a.judul}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-400">{a.tanggal}</p>
              <h3 className="text-xl font-semibold mt-1 text-gray-800">
                {a.judul}
              </h3>
              <p className="text-gray-600 mt-2">{a.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtikelTerbaru;
