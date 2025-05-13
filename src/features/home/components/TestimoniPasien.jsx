import { useState } from "react";
import { ArrowRight, ArrowLeft, Quote, User } from "lucide-react";

export default function PatientTestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Data testimoni pasien (contoh)
  const testimonials = [
    {
      id: 1,
      title: "Perjuangan Hendra Melawan Penyakit Ginjal Turunan",
      tag: "#PengobatanNyamanCmi",
      story:
        "Penyakit ini pernah dialami oleh Hendra Johari (45). Setelah mengalami penurunan fungsi ginjal akibat ginjal polikistik, ia memutuskan untuk menjalani transplantasi ginjal di Siloam Hospitals Asri. Proses perawatan yang nyaman dan tim medis yang profesional membuat Hendra mampu melewati masa-masa sulit dengan penuh semangat. Saat ini, Hendra telah kembali menjalani aktivitas normal dan rutin melakukan kontrol kesehatan.",
      image: "/api/placeholder/800/600",
    },
    {
      id: 2,
      title: "Kesembuhan Anita dari Kanker Payudara Stadium 3",
      tag: "#PengobatanNyamanCmi",
      story:
        "Anita (38) berhasil melawan kanker payudara stadium 3 setelah menjalani pengobatan intensif selama 8 bulan. Berkat dukungan tim medis Siloam, Anita dapat kembali menjalani aktivitas normal dan berbagi pengalaman pada sesama penderita kanker. Kini Anita menjadi motivator bagi banyak pasien kanker dan aktif dalam komunitas survivor kanker payudara. Ia selalu menekankan pentingnya deteksi dini dan pengobatan yang tepat.",
      image: "/api/placeholder/800/600",
    },
    {
      id: 3,
      title: "Perjalanan Melewati Stroke di Usia Muda",
      tag: "#PengobatanNyamanCmi",
      story:
        "Dimas (32) mengalami stroke mendadak di tengah aktivitas kerjanya sebagai eksekutif muda. Berkat penanganan cepat dan rehabilitasi intensif di Siloam Hospitals, Dimas mampu pulih sepenuhnya dan kembali aktif bekerja dalam waktu 6 bulan. Pengalaman ini mengubah perspektif hidupnya dan membuatnya lebih memperhatikan keseimbangan hidup dan kesehatan. Dimas juga menjadi lebih peduli dengan gejala-gejala kecil yang sebelumnya sering ia abaikan.",
      image: "/api/placeholder/800/600",
    },
  ];

  // Fungsi untuk menampilkan testimoni berikutnya
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Fungsi untuk menampilkan testimoni sebelumnya
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Mendapatkan testimoni saat ini
  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="w-full bg-amber-100 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Cerita Kesembuhan Pasien
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Kisah inspiratif dari pasien-pasien yang berhasil melawan penyakit
            mereka berkat perawatan dan dukungan dari tim medis kami.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              {/* Bagian gambar */}
              <div className="relative h-64 md:h-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent py-4">
                  <div className="flex justify-between items-center px-6">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-all duration-300"
                      aria-label="Testimoni sebelumnya"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <div className="text-white text-sm">
                      {currentTestimonial + 1} / {testimonials.length}
                    </div>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-all duration-300"
                      aria-label="Testimoni berikutnya"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bagian konten */}
              <div className="p-6 md:p-10 relative">
                <div className="absolute top-6 right-6 text-blue-500 opacity-20">
                  <Quote size={48} />
                </div>
                
                <div className="mb-6">
                  <p className="text-blue-600 font-medium text-sm">
                    {testimonial.tag}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mt-2 mb-6 text-left">
                    {testimonial.title}
                  </h3>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {testimonial.story}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Baca Selengkapnya
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                  >
                    Lihat Semua Cerita
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Indikator testimoni */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  currentTestimonial === index
                    ? "bg-blue-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Lihat testimoni ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}