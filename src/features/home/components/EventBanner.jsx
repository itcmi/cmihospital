// EventBanner.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const events = [
  {
    title: "Seminar Kesehatan Jantung",
    image: "/banners/jantung.jpg",
    description: "Ikuti seminar dengan dr. Ari tentang pencegahan penyakit jantung.",
    date: "21 Mei 2025",
    badge: "Seminar",
  },
  {
    title: "Pemeriksaan Gratis",
    image: "/banners/pemeriksaan.jpg",
    description: "Cek kesehatan Anda secara gratis setiap Jumat pertama bulan ini.",
    date: "7 Juni 2025",
    badge: "Gratis",
  },
  {
    title: "Donor Darah Bersama PMI",
    image: "/banners/donor.jpg",
    description: "Bergabunglah dalam aksi sosial kami untuk menyelamatkan nyawa.",
    date: "15 Juni 2025",
    badge: "Sosial",
  },
];

const EventBanner = () => {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg bg-white">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active bg-blue-600",
        }}
        className="h-full"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative h-full flex flex-col bg-gradient-to-r from-blue-50 to-white overflow-hidden">
              {/* Background overlay */}
              <div className="absolute inset-0 z-0 bg-pattern-dots opacity-20"></div>
              
              <div className="flex flex-col md:flex-row h-full">
                {/* Event content */}
                <div className="p-5 md:p-6 flex flex-col justify-center z-10 md:w-3/5">
                  <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit">
                    <span className="mr-1">•</span> {event.badge}
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    {event.description}
                  </p>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                  </div>
                  
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors w-fit mt-auto">
                    Daftar Sekarang
                  </button>
                </div>
                
                {/* Event image */}
                <div className="md:w-2/5 h-32 md:h-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-l from-blue-100/50 via-transparent to-transparent z-10 md:hidden"></div>
                  <img 
                    src={`/api/placeholder/800/400`} // Placeholder for the actual event image
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventBanner;