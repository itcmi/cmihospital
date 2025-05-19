"use client";

import { useState, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  BookmarkIcon,
  ChevronRightIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Data kategori artikel kesehatan
const CATEGORIES = [
  { id: "all", name: "Semua Artikel" },
  { id: "tips", name: "Tips Kesehatan" },
  { id: "penyakit", name: "Informasi Penyakit" },
  { id: "gaya-hidup", name: "Gaya Hidup Sehat" },
  { id: "ibu-anak", name: "Kesehatan Ibu & Anak" },
  { id: "gizi", name: "Nutrisi & Gizi" },
  { id: "mental", name: "Kesehatan Mental" },
];

// Data artikel yang ditambahkan beberapa artikel baru
const ARTICLES = [
  {
    id: 1,
    title: "10 Cara Menjaga Kesehatan Jantung di Usia Muda",
    slug: "10-cara-menjaga-kesehatan-jantung-usia-muda",
    category: "tips",
    image: "/images/articles/heart-health.jpg",
    description:
      "Menjaga kesehatan jantung sejak dini sangat penting untuk mencegah penyakit kardiovaskular di masa depan.",
    author: "dr. Anisa Wijaya",
    date: "2025-05-10",
    readTime: "5 menit",
    views: 1240,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Mengenal Diabetes Tipe 2 dan Cara Pencegahannya",
    slug: "mengenal-diabetes-tipe-2-dan-cara-pencegahannya",
    category: "penyakit",
    image: "/images/articles/diabetes.jpg",
    description:
      "Diabetes tipe 2 dapat dicegah dengan pola hidup sehat dan pemahaman yang baik tentang faktor risikonya.",
    author: "dr. Budi Santoso, Sp.PD",
    date: "2025-05-05",
    readTime: "7 menit",
    views: 980,
  },
  {
    id: 3,
    title: "Panduan Nutrisi Seimbang untuk Ibu Hamil",
    slug: "panduan-nutrisi-seimbang-untuk-ibu-hamil",
    category: "ibu-anak",
    image: "/images/articles/pregnant-nutrition.jpg",
    description:
      "Nutrisi yang tepat selama kehamilan sangat penting untuk kesehatan ibu dan perkembangan optimal janin.",
    author: "dr. Dina Pratiwi, Sp.OG",
    date: "2025-04-28",
    readTime: "6 menit",
    views: 1560,
    isFeatured: true,
  },
  {
    id: 4,
    title: "Manfaat Olahraga Rutin untuk Kesehatan Mental",
    slug: "manfaat-olahraga-rutin-untuk-kesehatan-mental",
    category: "gaya-hidup",
    image: "/images/articles/exercise-mental-health.jpg",
    description:
      "Aktivitas fisik teratur tidak hanya bermanfaat untuk tubuh, tetapi juga sangat baik untuk kesehatan mental Anda.",
    author: "dr. Eko Prasetyo, Sp.KJ",
    date: "2025-04-22",
    readTime: "4 menit",
    views: 875,
  },
  {
    id: 5,
    title: "Pentingnya Sarapan Sehat untuk Produktivitas Harian",
    slug: "pentingnya-sarapan-sehat-untuk-produktivitas-harian",
    category: "gizi",
    image: "/images/articles/healthy-breakfast.jpg",
    description:
      "Sarapan yang bergizi dapat meningkatkan energi, konsentrasi dan produktivitas Anda sepanjang hari.",
    author: "dr. Fina Maharani, M.Gizi",
    date: "2025-04-15",
    readTime: "5 menit",
    views: 1120,
  },
  {
    id: 6,
    title: "Panduan Lengkap Imunisasi untuk Bayi dan Anak",
    slug: "panduan-lengkap-imunisasi-untuk-bayi-dan-anak",
    category: "ibu-anak",
    image: "/images/articles/child-immunization.jpg",
    description:
      "Jadwal imunisasi yang tepat sangat penting untuk melindungi anak dari berbagai penyakit berbahaya.",
    author: "dr. Gita Nurhasanah, Sp.A",
    date: "2025-04-10",
    readTime: "8 menit",
    views: 1890,
  },
  {
    id: 7,
    title: "Mengatasi Kecemasan dan Stres di Era Digital",
    slug: "mengatasi-kecemasan-dan-stres-di-era-digital",
    category: "mental",
    image: "/images/articles/digital-stress.jpg",
    description:
      "Strategi efektif untuk mengelola kecemasan dan stres yang semakin umum terjadi di era digital saat ini.",
    author: "dr. Hendra Wijaya, Sp.KJ",
    date: "2025-04-05",
    readTime: "6 menit",
    views: 1350,
  },
  {
    id: 8,
    title: "Panduan Deteksi Dini Kanker yang Perlu Diketahui",
    slug: "panduan-deteksi-dini-kanker-yang-perlu-diketahui",
    category: "penyakit",
    image: "/images/articles/cancer-detection.jpg",
    description:
      "Mengenal tanda-tanda awal berbagai jenis kanker dan kapan harus melakukan pemeriksaan rutin.",
    author: "dr. Indah Permata, Sp.PD-KHOM",
    date: "2025-03-28",
    readTime: "7 menit",
    views: 2100,
    isFeatured: true,
  },
];

export default function ArtikelKesehatan() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState(ARTICLES);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Efek untuk memfilter artikel berdasarkan pencarian dan kategori
  useEffect(() => {
    let result = [...ARTICLES];

    // Filter berdasarkan kategori
    if (selectedCategory !== "all") {
      result = result.filter(
        (article) => article.category === selectedCategory
      );
    }

    // Filter berdasarkan pencarian
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.description.toLowerCase().includes(query) ||
          article.author.toLowerCase().includes(query)
      );
    }

    // Urutkan artikel
    switch (sortBy) {
      case "newest":
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "oldest":
        result.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "popular":
        result.sort((a, b) => b.views - a.views);
        break;
    }

    setFilteredArticles(result);
    setCurrentPage(1); // Reset ke halaman pertama setiap kali filter berubah
  }, [selectedCategory, searchQuery, sortBy]);

  // Format tanggal ke format Indonesia
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  // Artikel yang ditampilkan di halaman saat ini
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Artikel unggulan/featured
  const featuredArticles = ARTICLES.filter(
    (article) => article.isFeatured
  ).slice(0, 3);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll ke atas setelah ganti halaman
    window.scrollTo({
      top: document.getElementById("articles-section").offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Helmet>
        <title>Artikel Kesehatan Terbaru 2025 - Klinik Utama CMI</title>
        <meta
          name="description"
          content="Temukan informasi dan tips kesehatan terkini dari tim dokter Klinik Utama CMI. Artikel kesehatan tentang gaya hidup sehat, penyakit, nutrisi, dan kesehatan ibu anak."
        />
        <meta
          name="keywords"
          content="artikel kesehatan, tips kesehatan, informasi medis, klinik cmi, kesehatan ibu anak, gizi, penyakit, kesehatan mental"
        />
        <meta
          property="og:title"
          content="Artikel Kesehatan Terbaru 2025 - Klinik Utama CMI"
        />
        <meta
          property="og:description"
          content="Informasi dan tips kesehatan terkini dari tim dokter Klinik Utama CMI"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://klinikutamacmi.com/artikel" />
        <meta
          property="og:image"
          content="https://klinikutamacmi.com/images/artikel-banner.jpg"
        />
        <link rel="canonical" href="https://klinikutamacmi.com/artikel" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "headline": "Artikel Kesehatan Terbaru - Klinik Utama CMI",
              "description": "Temukan informasi dan tips kesehatan terkini dari tim dokter Klinik Utama CMI.",
              "url": "https://klinikutamacmi.com/artikel",
              "publisher": {
                "@type": "Organization",
                "name": "Klinik Utama CMI",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://klinikutamacmi.com/images/logo.png"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <main className="bg-gray-50 min-h-screen pt-20 pb-16 my-14">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 mb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Artikel Kesehatan <span className="text-blue-200">Terbaru</span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 mb-8">
                Informasi dan tips kesehatan terkini dari tim dokter Klinik
                Utama CMI untuk membantu Anda menjaga kesehatan dan
                kesejahteraan keluarga.
              </p>

              {/* Search Bar */}
              <div className="mt-6 max-w-2xl mx-auto relative">
                <div className="relative ">
                  <input
                    type="text"
                    placeholder="Cari artikel kesehatan..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-4 pl-12 pr-16 bg-white rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
                    aria-label="Cari artikel"
                  />
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 bg-blue-600 rounded-full hover:bg-blue-700 w-10 h-10 flex items-center justify-center"
                    onClick={() => setShowFilters(!showFilters)}
                    aria-label="Toggle filters"
                  >
                    <AdjustmentsHorizontalIcon className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          {/* Featured Articles Section */}
          {searchQuery === "" && selectedCategory === "all" && (
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Artikel Unggulan
                </h2>
                <Link
                  to="/artikel/featured"
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <span>Lihat Semua</span>
                  <ArrowLongRightIcon className="h-5 w-5 ml-1" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredArticles.map((article) => (
                  <article
                    key={article.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow relative"
                  >
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        Unggulan
                      </span>
                    </div>
                    <Link to={`/artikel/${article.slug}`} className="block">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={article.image || "/api/placeholder/600/400"}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                        <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                          {CATEGORIES.find((cat) => cat.id === article.category)
                            ?.name || "Artikel"}
                        </span>
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-700">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {article.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center">
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>{formatDate(article.date)}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Filter Controls */}
          <div
            className={`bg-white rounded-lg shadow-md p-4 mb-8 transition-all duration-300 ${
              showFilters ? "max-h-96" : "max-h-16 overflow-hidden"
            }`}
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setShowFilters(!showFilters)}
            >
              <h2 className="font-semibold text-lg text-gray-800">
                <AdjustmentsHorizontalIcon className="h-5 w-5 inline mr-2 text-blue-600" />
                Filter & Urutkan
              </h2>
              <button
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                aria-label="Toggle filters"
              >
                {showFilters ? "Sembunyikan" : "Tampilkan"}
              </button>
            </div>

            {/* Filter Content */}
            <div
              className={`mt-6 grid gap-6 md:grid-cols-2 transition-opacity duration-300 ${
                showFilters ? "opacity-100" : "opacity-0"
              }`}
            >
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Kategori
                </h3>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                        selectedCategory === category.id
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Urutkan Berdasarkan
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="newest">Terbaru</option>
                  <option value="oldest">Terlama</option>
                  <option value="popular">Terpopuler</option>
                </select>
              </div>
            </div>
          </div>

          {/* Article Results */}
          <div id="articles-section" className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === "all"
                  ? "Semua Artikel"
                  : CATEGORIES.find((cat) => cat.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600 text-sm">
                {filteredArticles.length} artikel ditemukan
              </p>
            </div>

            {/* No Results */}
            {filteredArticles.length === 0 && (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <img
                  src="/images/no-results.svg"
                  alt="Tidak ada hasil"
                  className="w-32 h-32 mx-auto mb-4 opacity-70"
                />
                <p className="text-lg text-gray-700 mb-2 font-medium">
                  Tidak ada artikel yang ditemukan
                </p>
                <p className="text-gray-500 mb-6">
                  Coba ubah kata kunci pencarian atau filter
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Reset Pencarian
                </button>
              </div>
            )}

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <Link to={`/artikel/${article.slug}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image || "/api/placeholder/600/400"}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                        {CATEGORIES.find((cat) => cat.id === article.category)
                          ?.name || "Artikel"}
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {article.description}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{formatDate(article.date)}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          {article.views.toLocaleString()} pembaca
                        </span>
                        <span className="text-blue-600 text-sm font-medium flex items-center group-hover:underline">
                          Baca Selengkapnya
                          <ChevronRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex justify-center">
                <nav
                  className="flex items-center space-x-2"
                  aria-label="Pagination"
                >
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 rounded-md ${
                      currentPage === 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Sebelumnya
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    // Show ellipsis for large page counts
                    if (
                      totalPages > 7 &&
                      ((page > 2 && page < currentPage - 1) ||
                        (page > currentPage + 1 && page < totalPages - 1))
                    ) {
                      if (page === 3 || page === totalPages - 2) {
                        return (
                          <span key={page} className="px-3 py-2">
                            ...
                          </span>
                        );
                      }
                      return null;
                    }

                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-2 rounded-md ${
                          currentPage === page
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 rounded-md ${
                      currentPage === totalPages
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Selanjutnya
                  </button>
                </nav>
              </div>
            )}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 md:p-8">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-12">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <BookmarkIcon className="h-5 w-5 mr-2 text-blue-600" />
                  Dapatkan Artikel Terbaru
                </h3>
                <p className="text-gray-600">
                  Langganan newsletter kami untuk mendapatkan informasi
                  kesehatan terbaru dari tim dokter Klinik Utama CMI langsung ke
                  email Anda.
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-96">
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Alamat email Anda"
                    className="flex-1 px-4 py-3 rounded-l-md border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-r-md font-medium hover:bg-blue-700 transition"
                  >
                    Langganan
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-2">
                  Kami menghormati privasi Anda. Anda dapat berhenti
                  berlangganan kapan saja.
                </p>
              </div>
            </div>
          </div>

          {/* Related Health Topics */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Topik Kesehatan Populer
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CATEGORIES.filter((cat) => cat.id !== "all").map((category) => (
                <Link
                  key={category.id}
                  to={`/artikel/kategori/${category.id}`}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center justify-center text-center gap-2"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2">
                    {/* Ideally would have unique icons for each category */}
                    <BookmarkIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-gray-900">{category.name}</h3>
                  <p className="text-xs text-gray-500">
                    {
                      ARTICLES.filter(
                        (article) => article.category === category.id
                      ).length
                    }{" "}
                    artikel
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
