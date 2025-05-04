import { useState } from "react";
import { Search, Calendar, Heart, ArrowRight, User, Clock } from "lucide-react";

// Komponen utama
export default function HealthArticlesSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredCardId, setHoveredCardId] = useState(null);

  // Data artikel kesehatan
  const healthArticles = [
    {
      id: 1,
      title: "10 Cara Menjaga Kesehatan Jantung",
      excerpt:
        "Temukan tips sederhana untuk menjaga kesehatan jantung Anda setiap hari.",
      category: "jantung",
      image: "/api/placeholder/600/400",
      author: "dr. Anita Setiawan",
      date: "28 Apr 2025",
      readTime: "5 menit",
      featured: true,
    },
    {
      id: 2,
      title: "Nutrisi Penting untuk Menguatkan Sistem Imun",
      excerpt:
        "Makanan apa saja yang dapat meningkatkan daya tahan tubuh secara alami.",
      category: "nutrisi",
      image: "/api/placeholder/600/400",
      author: "dr. Budi Santoso",
      date: "26 Apr 2025",
      readTime: "4 menit",
      featured: false,
    },
    {
      id: 3,
      title: "Manfaat Olahraga Rutin bagi Kesehatan Mental",
      excerpt:
        "Hubungan antara aktivitas fisik dan kesejahteraan mental yang sering terabaikan.",
      category: "mental",
      image: "/api/placeholder/600/400",
      author: "dr. Citra Dewi",
      date: "24 Apr 2025",
      readTime: "6 menit",
      featured: false,
    },
    {
      id: 4,
      title: "Panduan Tidur Berkualitas untuk Kesehatan Optimal",
      excerpt:
        "Pola tidur yang baik untuk meningkatkan kesehatan dan produktivitas Anda.",
      category: "gaya-hidup",
      image: "/api/placeholder/600/400",
      author: "dr. Dian Pratama",
      date: "22 Apr 2025",
      readTime: "5 menit",
      featured: true,
    },
    {
      id: 5,
      title: "Deteksi Dini Diabetes: Gejala yang Tidak Boleh Diabaikan",
      excerpt:
        "Kenali tanda-tanda awal diabetes untuk penanganan yang lebih efektif.",
      category: "penyakit",
      image: "/api/placeholder/600/400",
      author: "dr. Eko Pranoto",
      date: "20 Apr 2025",
      readTime: "7 menit",
      featured: false,
    },
    {
      id: 6,
      title: "Menjaga Kesehatan Tulang dan Sendi di Usia Lanjut",
      excerpt: "Langkah-langkah mencegah osteoporosis dan masalah persendian.",
      category: "lansia",
      image: "/api/placeholder/600/400",
      author: "dr. Farida Husna",
      date: "18 Apr 2025",
      readTime: "4 menit",
      featured: false,
    },
  ];

  // Filter artikel berdasarkan tab yang aktif
  const filteredArticles =
    activeTab === "all"
      ? healthArticles
      : activeTab === "featured"
      ? healthArticles.filter((article) => article.featured)
      : healthArticles.filter((article) => article.category === activeTab);

  // Mengatur artikel featured di bagian atas
  const featuredArticles = healthArticles.filter((article) => article.featured);
  const latestArticle = featuredArticles[0] || healthArticles[0];

  return (
    <div className="w-full bg-white">
      {/* Hero Section dengan artikel unggulan */}
      <div className="relative bg-gradient-to-r from-blue-50 to-teal-50 py-12 px-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 space-y-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Artikel Unggulan
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                {latestArticle.title}
              </h1>
              <p className="text-gray-600 text-lg">{latestArticle.excerpt}</p>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <User size={16} className="text-blue-500" />
                  <span>{latestArticle.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} className="text-blue-500" />
                  <span>{latestArticle.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} className="text-blue-500" />
                  <span>{latestArticle.readTime}</span>
                </div>
              </div>

              <button className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200">
                Baca Selengkapnya
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={latestArticle.image}
                  alt={latestArticle.title}
                  className="w-full h-64 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
                    {latestArticle.category.charAt(0).toUpperCase() +
                      latestArticle.category.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Artikel Kesehatan */}
      <div className="container mx-auto py-16 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Artikel Kesehatan Terbaru
            </h2>
            <p className="text-gray-600">
              Temukan informasi terkini untuk hidup sehat dan sejahtera
            </p>
          </div>

          <div className="mt-4 md:mt-0 relative">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Cari artikel..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search
                size={20}
                className="absolute left-3 top-2.5 text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Tabs kategori */}
        <div className="mb-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
          <div className="flex space-x-2 min-w-max">
            {[
              "all",
              "featured",
              "jantung",
              "nutrisi",
              "mental",
              "gaya-hidup",
              "penyakit",
              "lansia",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab === "all"
                  ? "Semua"
                  : tab === "featured"
                  ? "Unggulan"
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Grid artikel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              onMouseEnter={() => setHoveredCardId(article.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className={`w-full h-48 object-cover transition-transform duration-500 ${
                    hoveredCardId === article.id ? "scale-105" : ""
                  }`}
                />
                <div className="absolute top-3 right-3">
                  <button className="p-2 bg-white/80 hover:bg-white rounded-full text-gray-700 hover:text-red-500 transition-colors duration-200">
                    <Heart size={20} />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-3">
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
                    {article.category.charAt(0).toUpperCase() +
                      article.category.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                      {article.author
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </div>
                    <div className="text-xs text-gray-600">
                      <p className="font-medium">
                        {article.author.split(" ")[0]}
                      </p>
                      <p>{article.date}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock size={14} />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol untuk melihat lebih banyak artikel */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition-colors duration-200">
            Lihat Lebih Banyak Artikel
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Dapatkan Artikel Kesehatan Terbaru
            </h2>
            <p className="text-blue-100 mb-8">
              Berlangganan newsletter kami untuk mendapatkan informasi dan tips
              kesehatan terbaru langsung ke email Anda.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center gap-3">
              <input
                type="email"
                placeholder="Masukkan alamat email Anda"
                className="px-4 py-3 w-full sm:w-96 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
              />
              <button className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors duration-200">
                Berlangganan
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Kami menghargai privasi Anda. Anda dapat berhenti berlangganan
              kapan saja.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
