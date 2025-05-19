import { useState, useEffect } from "react";
import { Clock, User, EyeIcon, ChevronRight, ArrowLeftCircle, Share2, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

// Data dummy sesuai struktur tabel
const articleData = {
  id: 1,
  id_artikel: "ART001",
  judul_id: "5 Manfaat Olahraga Teratur untuk Kesehatan Jantung",
  judul_en: "5 Benefits of Regular Exercise for Heart Health",
  gambar_artikel1: "/api/placeholder/800/400",
  gambar_artikel2: "/api/placeholder/400/300",
  info_gambar1: "Aktivitas olahraga jantung",
  info_gambar2: "Dokter memeriksa pasien",
  isi_artikel_id1: "Jantung merupakan organ vital yang perlu dijaga kesehatannya. Salah satu cara terbaik untuk menjaga kesehatan jantung adalah dengan berolahraga secara teratur. Menurut para ahli, olahraga minimal 30 menit setiap hari dapat mengurangi risiko penyakit jantung hingga 35%.\n\nBerikut adalah 5 manfaat olahraga teratur untuk kesehatan jantung:\n\n1. Menurunkan tekanan darah\nOlahraga aerobik dapat membantu mengurangi tekanan darah tinggi, yang merupakan faktor risiko utama penyakit jantung. Aktivitas fisik membantu jantung memompa darah lebih efisien, mengurangi tekanan pada arteri.",
  isi_artikel_id2: "2. Memperbaiki kadar kolesterol\nOlahraga teratur dapat meningkatkan kolesterol baik (HDL) dan menurunkan kadar trigliserida. Kombinasi ini membantu mengurangi penumpukan plak di arteri.\n\n3. Membantu mengontrol berat badan\nKelebihan berat badan memberi beban ekstra pada jantung. Olahraga membantu membakar kalori dan mempertahankan berat badan ideal.\n\n4. Mengurangi stres\nStres kronis berkontribusi pada risiko penyakit jantung. Olahraga memicu pelepasan endorfin, hormon yang membantu mengurangi stres dan meningkatkan suasana hati.\n\n5. Memperkuat otot jantung\nSeperti otot lainnya, jantung menjadi lebih kuat dan lebih efisien dengan latihan teratur. Jantung yang lebih kuat memompa lebih banyak darah dengan usaha lebih sedikit.\n\nMulailah dengan aktivitas sederhana seperti berjalan cepat, berenang, atau bersepeda. Konsultasikan dengan dokter sebelum memulai program olahraga baru, terutama jika Anda memiliki kondisi kesehatan yang sudah ada sebelumnya.",
  isi_artikel_en1: "The heart is a vital organ that needs to be kept healthy. One of the best ways to maintain heart health is through regular exercise. According to experts, exercising for at least 30 minutes every day can reduce the risk of heart disease by up to 35%.\n\nHere are 5 benefits of regular exercise for heart health:\n\n1. Lowers blood pressure\nAerobic exercise can help reduce high blood pressure, which is a major risk factor for heart disease. Physical activity helps the heart pump blood more efficiently, reducing pressure on the arteries.",
  isi_artikel_en2: "2. Improves cholesterol levels\nRegular exercise can increase good cholesterol (HDL) and lower triglyceride levels. This combination helps reduce plaque buildup in the arteries.\n\n3. Helps control weight\nExcess weight puts extra strain on the heart. Exercise helps burn calories and maintain an ideal weight.\n\n4. Reduces stress\nChronic stress contributes to the risk of heart disease. Exercise triggers the release of endorphins, hormones that help reduce stress and improve mood.\n\n5. Strengthens heart muscle\nLike other muscles, the heart becomes stronger and more efficient with regular training. A stronger heart pumps more blood with less effort.\n\nStart with simple activities like brisk walking, swimming, or cycling. Consult your doctor before starting a new exercise program, especially if you have pre-existing health conditions.",
  keyword: "olahraga, jantung, kesehatan jantung, manfaat olahraga, penyakit jantung",
  slug1: "5-manfaat-olahraga-teratur-untuk-kesehatan-jantung",
  slug2: "5-benefits-of-regular-exercise-for-heart-health",
  tagar: "kesehatan, jantung, olahraga, pencegahan",
  id_kategori: 2,
  id_sub_kategori: 5,
  hitung_tayang: 1250,
  status_publish: 1,
  id_penulis_artikel: 3,
  id_user: 7,
  kode_user: "USR007",
  date_publish: "2025-05-10 08:30:00",
  created_at: "2025-05-08 14:20:10",
  updated_at: "2025-05-10 08:30:00",
  // Data tambahan untuk UI
  kategori_nama: "Kesehatan Jantung",
  sub_kategori_nama: "Tips & Pencegahan",
  penulis_nama: "dr. Amelia Putri, Sp.JP",
  penulis_foto: "/api/placeholder/80/80"
};

// Tag populer untuk sidebar
const popularTags = [
  "Kesehatan Jantung", "Nutrisi", "Olahraga", "Vaksinasi", 
  "Diabetes", "Kesehatan Mental", "Hipertensi", "COVID-19"
];

// Artikel terkait untuk sidebar
const relatedArticles = [
  {
    id: 2,
    judul: "Makanan Sehat untuk Jantung Anda",
    gambar: "/api/placeholder/120/80",
    date: "12 Mei 2025",
    slug: "makanan-sehat-untuk-jantung-anda"
  },
  {
    id: 3,
    judul: "Kenali Tanda-tanda Serangan Jantung",
    gambar: "/api/placeholder/120/80",
    date: "3 Mei 2025",
    slug: "kenali-tanda-tanda-serangan-jantung"
  },
  {
    id: 4,
    judul: "Tips Menjaga Kesehatan Jantung di Usia Muda",
    gambar: "/api/placeholder/120/80",
    date: "28 April 2025",
    slug: "tips-menjaga-kesehatan-jantung-di-usia-muda"
  }
];

export default function ArticlePage() {
  const [language, setLanguage] = useState("id");
  const [showShareOptions, setShowShareOptions] = useState(false);
  
  // Format tanggal publikasi
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(language === "id" ? "id-ID" : "en-US", options);
  };
  
  // Konten berdasarkan bahasa
  const title = language === "id" ? articleData.judul_id : articleData.judul_en;
  const content1 = language === "id" ? articleData.isi_artikel_id1 : articleData.isi_artikel_en1;
  const content2 = language === "id" ? articleData.isi_artikel_id2 : articleData.isi_artikel_en2;
  
  return (
    <div className="bg-white min-h-screen font-sans my-34">
      
      
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600">Beranda</a>
            <ChevronRight className="h-4 w-4 mx-1" />
            <a href="#" className="hover:text-blue-600">{articleData.kategori_nama}</a>
            <ChevronRight className="h-4 w-4 mx-1" />
            <a href="#" className="hover:text-blue-600">{articleData.sub_kategori_nama}</a>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-gray-800 font-medium truncate max-w-xs">{title}</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article Content */}
          <div className="lg:w-2/3">
            <a href="#" className="inline-flex items-center text-blue-600 mb-6 hover:underline">
              <ArrowLeftCircle className="h-5 w-5 mr-1" />
              <span>{language === "id" ? "Kembali ke Artikel" : "Back to Articles"}</span>
            </a>
            
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Article Header */}
              <div className="p-6 pb-2">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
                
                <div className="flex flex-wrap items-center text-sm text-gray-600 gap-y-2 mb-4">
                  <div className="flex items-center mr-6">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{formatDate(articleData.date_publish)}</span>
                  </div>
                  <div className="flex items-center mr-6">
                    <User className="h-4 w-4 mr-1" />
                    <span>{articleData.penulis_nama}</span>
                  </div>
                  <div className="flex items-center mr-6">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    <span>{articleData.hitung_tayang.toLocaleString()} {language === "id" ? "kali dibaca" : "views"}</span>
                  </div>
                  <div className="relative">
                    <button 
                      className="flex items-center text-blue-600 hover:text-blue-800"
                      onClick={() => setShowShareOptions(!showShareOptions)}
                    >
                      <Share2 className="h-4 w-4 mr-1" />
                      <span>{language === "id" ? "Bagikan" : "Share"}</span>
                    </button>
                    
                    {showShareOptions && (
                      <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 px-3 z-10">
                        <div className="flex space-x-3">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Facebook className="h-5 w-5" />
                          </button>
                          <button className="text-blue-400 hover:text-blue-600">
                            <Twitter className="h-5 w-5" />
                          </button>
                          <button className="text-pink-600 hover:text-pink-800">
                            <Instagram className="h-5 w-5" />
                          </button>
                          <button className="text-blue-700 hover:text-blue-900">
                            <Linkedin className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {articleData.tagar.split(", ").map((tag, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full hover:bg-blue-100"
                    >
                      #{tag}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Main Image */}
              <div className="relative">
                <img 
                  src={articleData.gambar_artikel1} 
                  alt={articleData.info_gambar1} 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 text-sm">
                  {articleData.info_gambar1}
                </div>
              </div>
              
              {/* Article Body */}
              <div className="p-6">
                <div className="prose max-w-none text-gray-800">
                  {content1.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
                
                {/* Secondary Image (if available) */}
                {articleData.gambar_artikel2 && (
                  <div className="my-6 relative">
                    <img 
                      src={articleData.gambar_artikel2} 
                      alt={articleData.info_gambar2} 
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    {articleData.info_gambar2 && (
                      <div className="mt-2 text-sm text-gray-600 italic">
                        {articleData.info_gambar2}
                      </div>
                    )}
                  </div>
                )}
                
                <div className="prose max-w-none text-gray-800">
                  {content2.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              {/* Author Info */}
              <div className="p-6 bg-blue-50">
                <div className="flex items-center">
                  <img 
                    src={articleData.penulis_foto} 
                    alt={articleData.penulis_nama} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-white"
                  />
                  <div className="ml-4">
                    <p className="text-lg font-bold text-gray-900">{articleData.penulis_nama}</p>
                    <p className="text-gray-600 text-sm">
                      {language === "id" ? "Dokter Spesialis Jantung dan Pembuluh Darah di CMI Klinik Utama" : "Cardiologist at CMI Main Clinic"}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Popular Tags */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {language === "id" ? "Tag Populer" : "Popular Tags"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Related Articles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {language === "id" ? "Artikel Terkait" : "Related Articles"}
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((article) => (
                  <a key={article.id} href={`#${article.slug}`} className="flex group">
                    <img 
                      src={article.gambar} 
                      alt={article.judul} 
                      className="w-24 h-16 object-cover rounded"
                    />
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                        {article.judul}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{article.date}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-6">
                <a 
                  href="#" 
                  className="w-full block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                  {language === "id" ? "Artikel Lainnya" : "More Articles"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    
    </div>
  );
}