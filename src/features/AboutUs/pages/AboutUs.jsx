import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import GedungCMI from "@assets/cmi.webp";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("sejarah");

  return (
    <div className="bg-white min-h-screen my-34">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Mengenal lebih dekat perusahaan kami dan perjalanan kami
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-blue-800 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto whitespace-nowrap">
            <button
              onClick={() => setActiveTab("sejarah")}
              className={`py-4 px-6 font-medium transition-colors duration-200 ${
                activeTab === "sejarah"
                  ? "text-blue-800 bg-white"
                  : "text-white hover:bg-blue-700"
              }`}
            >
              Sejarah
            </button>
            <button
              onClick={() => setActiveTab("visi-misi")}
              className={`py-4 px-6 font-medium transition-colors duration-200 ${
                activeTab === "visi-misi"
                  ? "text-blue-800 bg-white"
                  : "text-white hover:bg-blue-700"
              }`}
            >
              Visi & Misi
            </button>
            <button
              onClick={() => setActiveTab("lokasi")}
              className={`py-4 px-6 font-medium transition-colors duration-200 ${
                activeTab === "lokasi"
                  ? "text-blue-800 bg-white"
                  : "text-white hover:bg-blue-700"
              }`}
            >
              Lokasi & Kontak
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Sejarah */}
        {activeTab === "sejarah" && (
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Sejarah Perusahaan
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                  Awal Mula
                </h3>
                <p className="text-gray-700 mb-4">
                  Klinik Utama & Laboratorium CMI didirikan pada tanggal 8
                  Agustus 2008 dengan nama awal Poliklinik dan Laboratorium GR
                  Setra. Kepanjangan GR Setra adalah Glantrang Setra, diambil
                  dari Bahasa Sansekerta yang berarti Pemberani Suci. Berdirinya
                  klinik dan laboratorium ini berawal dari niat tulus PT Canon
                  Medicinae Indonesia untuk memberikan pelayanan kesehatan yang
                  lengkap bagi masyarakat untuk menangani penyakit umum dan 4
                  (empat) penyakit kronis yaitu kanker, diabetes melitus,
                  penyakit jantung koroner(PJK) dan gagal ginjal. Penanganan 4
                  (empat) penyakit kronis ini dilakukan dengan menggabungkan
                  metode pengobatan konvensional modern (medis barat) dan
                  pengobatan komplementer klasik timur secara terintegrasi
                  berdasarkan pada buku The Canon of Medicine (Al-Qanun fi
                  At-Thibb) Karya dr. Ibnu Sina (Avicenna), Bapak Kedokteran
                  Modern Dunia.
                </p>
              </div>
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/api/placeholder/600/400"
                  alt="Foto Perusahaan Lama"
                  className="w-full h-full object-cover"
                />
                <div className="p-4 bg-blue-900 text-white">
                  <p className="text-sm">GR SETRA CMI Tahun 2008</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={GedungCMI}
                  alt="Foto Perusahaan Sekarang"
                  className="w-full h-full object-cover"
                />
                <div className="p-4 bg-blue-900 text-white">
                  <p className="text-sm">Klinik Utama CMI Tahun 2025</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                  Perkembangan & Pencapaian
                </h3>
                <p className="text-gray-700 mb-4">
                  Pada awal berdiri, Poliklinik dan Laboratorium GR Setra
                  memiliki izin klinik sebagai klinik pratama dan hanya memiliki
                  6 (enam) ruang perawatan, namun karena tingginya antusias
                  warga akan metode pengobatan komplementer untuk penyakit
                  kronis tersebut, pada tahun 2011 Poli klinik dan Laboratorium
                  GR Setra memutuskan untuk melakukan renovasi gedungdan
                  meningkatkan fasilitasnya sehingga memiliki 84 ruang perawatan
                  yang didukung dengan teknologi yang mutakhir, sehingga di
                  tahun 2019 GR Setra dapat mengubah izin kliniknya menjadi
                  klinik utama dan kini dikenal sebagai Klinik Utama dan
                  Laboratorium CMI
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border border-blue-100 mb-8">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                Tonggak Sejarah
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded shadow">
                  <div className="font-bold text-blue-900 text-lg mb-1">
                    2008
                  </div>
                  <p className="text-gray-700">Pendirian GR SETRA</p>
                </div>
                {/* <div className="bg-white p-4 rounded shadow">
                  <div className="font-bold text-blue-900 text-lg mb-1">
                    2000
                  </div>
                  <p className="text-gray-700">Ekspansi pertama</p>
                </div> */}
                <div className="bg-white p-4 rounded shadow">
                  <div className="font-bold text-blue-900 text-lg mb-1">
                    2010
                  </div>
                  <p className="text-gray-700">Pendirian kantor pusat baru</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <div className="font-bold text-blue-900 text-lg mb-1">
                    2020
                  </div>
                  <p className="text-gray-700">Transformasi digital</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Visi & Misi */}
        {activeTab === "visi-misi" && (
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Visi & Misi Perusahaan
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Visi Kami</h3>
                <div className="h-1 w-24 bg-white mb-6"></div>
                <p className="text-lg mb-4">
                  "Menjadi Rumah Sakit Komplementer Terbaik di Dunia Didukung
                  oleh Ilmu dan Teknologi yang Mutakhir."
                </p>
                <p className="text-blue-100">
                  Kami berkomitmen untuk terus berada di garis depan teknologi,
                  menciptakan produk dan layanan yang tidak hanya memenuhi
                  kebutuhan saat ini tetapi juga mengantisipasi kebutuhan masa
                  depan.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg shadow border border-gray-200">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                  Misi Kami
                </h3>
                <div className="h-1 w-24 bg-blue-900 mb-6"></div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      1
                    </div>
                    <p className="text-gray-700">
                      Meningkatkan kesehatan pasien dengan menggabungkan ilmu
                      kedokteran barat dan ilmu kedokteran klasik timur secara
                      terintegrasi.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      2
                    </div>
                    <p className="text-gray-700">
                      Menjalin kerjasama dengan berbagai pihak dalam memperluas
                      jangkauan pelayanan.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      3
                    </div>
                    <p className="text-gray-700">
                      Meningkatkan kualitas SDM dengan pendidikan, pelatihan dan
                      penelitian yang berkesinambungan.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      4
                    </div>
                    <p className="text-gray-700">
                      Meningkatkan pengetahuan masyarakat dengan pemberian
                      edukasi kesehatan.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">
                Nilai-Nilai Perusahaan
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded shadow-md">
                  <h4 className="text-xl font-bold text-blue-900 mb-3">
                    Integritas
                  </h4>
                  <p className="text-gray-700">
                    Kami berkomitmen untuk selalu bertindak dengan kejujuran,
                    transparansi, dan etika tertinggi dalam setiap aspek bisnis
                    kami.
                  </p>
                </div>
                <div className="bg-white p-6 rounded shadow-md">
                  <h4 className="text-xl font-bold text-blue-900 mb-3">
                    Inovasi
                  </h4>
                  <p className="text-gray-700">
                    Kami terus mendorong batas-batas untuk menciptakan solusi
                    yang lebih baik, lebih cerdas, dan lebih efisien bagi klien
                    kami.
                  </p>
                </div>
                <div className="bg-white p-6 rounded shadow-md">
                  <h4 className="text-xl font-bold text-blue-900 mb-3">
                    Kolaborasi
                  </h4>
                  <p className="text-gray-700">
                    Kami percaya pada kekuatan kerja sama, baik di dalam tim
                    kami maupun dengan mitra dan klien kami.
                  </p>
                </div>
                <div className="bg-white p-6 rounded shadow-md">
                  <h4 className="text-xl font-bold text-blue-900 mb-3">
                    Keunggulan
                  </h4>
                  <p className="text-gray-700">
                    Kami berkomitmen untuk memberikan kualitas terbaik dalam
                    setiap produk dan layanan yang kami tawarkan.
                  </p>
                </div>
                <div className="bg-white p-6 rounded shadow-md">
                  <h4 className="text-xl font-bold text-blue-900 mb-3">
                    Keberlanjutan
                  </h4>
                  <p className="text-gray-700">
                    Kami bertanggung jawab terhadap dampak sosial dan lingkungan
                    dari kegiatan bisnis kami.
                  </p>
                </div>
                <div className="bg-white p-6 rounded shadow-md">
                  <h4 className="text-xl font-bold text-blue-900 mb-3">
                    Fokus Pelanggan
                  </h4>
                  <p className="text-gray-700">
                    Kepuasan klien adalah prioritas utama kami, dan kami selalu
                    berusaha untuk melebihi harapan mereka.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Lokasi & Kontak */}
        {activeTab === "lokasi" && (
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Lokasi & Kontak
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="bg-blue-900 text-white p-6 rounded-t-lg">
                  <h3 className="text-xl font-semibold">Kantor Pusat</h3>
                </div>
                <div className="bg-white p-6 rounded-b-lg shadow-lg border border-gray-200">
                  <div className="flex items-start mb-4">
                    <MapPin className="text-blue-800 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      Jl. Tubagus Ismail VII, Sekeloa, Kecamatan Coblong, Kota
                      Bandung
                      <br />
                      Jawa Barat, 40134
                      <br />
                      Indonesia
                    </p>
                  </div>

                  <div className="flex items-center mb-4">
                    <Phone className="text-blue-800 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">(021) 7890-1234</p>
                  </div>
                  <div className="flex items-center mb-4">
                    <Phone className="text-blue-800 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">+62 821-2159-0000</p>
                  </div>

                  <div className="flex items-center mb-4">
                    <Mail className="text-blue-800 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">info@cmihospital.com</p>
                  </div>

                  <div className="flex items-center">
                    <Clock className="text-blue-800 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">
                        Senin - Sabtu: 08.00 - 17.00
                      </p>
                      <p className="font-medium text-blue-800">IGD: 24 Jam</p>
                      {/* <p className="text-gray-700">Sabtu: 09.00 - 13.00</p> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-64 md:h-auto">
                {/* Map placeholder - in a real implementation, you would integrate Google Maps or another map service here */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-gray-700 font-medium mb-2">
                      Peta Lokasi Perusahaan
                    </p>

                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0651863383387!2d107.61663887573904!3d-6.8827948673500305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68bfa8371dbd07%3A0x96602a59adfec6bc!2sKlinik%20Utama%20CMI%20-%20Klinik%20Kanker%2C%20Jantung%2C%20Gagal%20Ginjal%20dan%20Diabetes!5e0!3m2!1sid!2sid!4v1747881562509!5m2!1sid!2sid"
                      width="725"
                      height="600"
                      style={{ border: 0 }}
                      allowfullscreen
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    />
                    <p className="text-gray-600 text-sm">
                      Maps Klinik Utama CMI Bandung
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">
                Hubungi Kami
              </h3>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <form className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="nama"
                    >
                      Nama
                    </label>
                    <input
                      type="text"
                      id="nama"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="telepon"
                    >
                      Telepon
                    </label>
                    <input
                      type="tel"
                      id="telepon"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+62 xxx xxxx xxxx"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="subjek"
                    >
                      Subjek
                    </label>
                    <input
                      type="text"
                      id="subjek"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Subjek pesan"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="pesan"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="pesan"
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors"
                    >
                      Kirim Pesan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
