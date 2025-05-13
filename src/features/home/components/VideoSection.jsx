import { useState, useEffect } from 'react';
import { Play, Instagram, Video } from 'lucide-react';

const SocialMediaVideosSection = () => {
  const [activeTab, setActiveTab] = useState('youtube');
  
  // Load social media embed scripts when component mounts
  useEffect(() => {
    const loadTikTokEmbedScript = () => {
      if (document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) return;
      
      const script = document.createElement('script');
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    };
    
    const loadInstagramEmbedScript = () => {
      if (document.querySelector('script[src="https://www.instagram.com/embed.js"]')) return;
      
      const script = document.createElement('script');
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    };
    
    if (activeTab === 'tiktok') {
      loadTikTokEmbedScript();
    } else if (activeTab === 'instagram') {
      loadInstagramEmbedScript();
    }
  }, [activeTab]);

  const socialMediaContent = {
    youtube: [
      {
        id: 'KG0h1W_c3yQ',
        title: 'Konsultasi Kesehatan Bersama Dr. Anita',
        views: '2.5K views'
      },
      {
        id: 'dQw4w9WgXcQ',
        title: 'Tips Hidup Sehat dari Klinik CMI',
        views: '1.8K views'
      },
      {
        id: '6dTvSa1AGYk',
        title: 'Layanan Unggulan Klinik Utama CMI',
        views: '3.2K views'
      }
    ],
    instagram: [
      {
        id: 'CvmcJTuSPSy',
        caption: 'Informasi Penting COVID-19 dari tim dokter CMI',
        likes: '345'
      },
      {
        id: 'CvkdP3IS1sR',
        caption: 'Mencegah Penyakit Jantung - Seminar Kesehatan CMI',
        likes: '289'
      },
      {
        id: 'CvhbTruSdS9',
        caption: 'Pentingnya Medical Check-up Rutin #CMI',
        likes: '421'
      }
    ],
    tiktok: [
      {
        id: '7351694667903192327',
        username: 'cmitv_grsetra',
        caption: '5 TIPS SEHAT SELAMA PUASA RAMADHAN',
        tags: ['CMI', 'RAMADHAN', 'PUASA', 'RSJANTUNG', 'RSKANKER', 'RSGINJAL', 'RSDIABETES', 'FYP']
      },
      {
        id: '7350123456789012345',
        username: 'cmitv_grsetra',
        caption: 'Tips Menjaga Kesehatan Mental Selama Pandemi',
        tags: ['CMI', 'KESEHATAN', 'MENTAL', 'PANDEMI']
      },
      {
        id: '7349876543210987654',
        username: 'cmitv_grsetra',
        caption: 'Langkah Sederhana Hidup Sehat Setiap Hari',
        tags: ['CMI', 'SEHAT', 'GAYA HIDUP', 'TIPS']
      }
    ]
  };

  const TabButton = ({ name, icon, active }) => (
    <button 
      onClick={() => setActiveTab(name)}
      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
        active 
          ? 'bg-blue-600 text-white shadow-md' 
          : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span className="font-medium">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
    </button>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'youtube':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {socialMediaContent.youtube.map((video) => (
              <div key={video.id} className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{video.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{video.views}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'instagram':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {socialMediaContent.instagram.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="p-4">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={`https://www.instagram.com/p/${post.id}/`}
                    data-instgrm-version="14"
                    style={{ 
                      background: '#FFF',
                      border: '0',
                      borderRadius: '3px',
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                      margin: '1px',
                      maxWidth: '540px',
                      minWidth: '326px',
                      padding: '0',
                      width: '99.375%'
                    }}
                  >
                    <div style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: '12px' }}>
                          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f3f3f3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Instagram size={24} className="text-pink-600" />
                          </div>
                        </div>
                        <div>
                          <strong>Klinik Utama CMI</strong>
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: '16px', textAlign: 'center' }}>
                      <p className="text-gray-700 mb-2">{post.caption}</p>
                      <p className="text-sm text-gray-500">{post.likes} likes</p>
                    </div>
                    <div style={{ padding: '12px', textAlign: 'center' }}>
                      <a
                        href={`https://www.instagram.com/p/${post.id}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-2 px-4 rounded"
                      >
                        Lihat di Instagram
                      </a>
                    </div>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        );
      case 'tiktok':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {socialMediaContent.tiktok.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="tiktok-embed-container" style={{ maxWidth: '100%', minHeight: '580px' }}>
                  <blockquote 
                    className="tiktok-embed" 
                    cite={`https://www.tiktok.com/@${post.username}/video/${post.id}`} 
                    data-video-id={post.id}
                    style={{ maxWidth: '605px', minWidth: '325px' }}
                  >
                    <section>
                      <a 
                        target="_blank" 
                        title={`@${post.username}`} 
                        href={`https://www.tiktok.com/@${post.username}?refer=embed`}
                      >
                        @{post.username}
                      </a> 
                      {post.caption}
                      {post.tags.map(tag => (
                        <a 
                          key={tag}
                          title={tag} 
                          target="_blank" 
                          href={`https://www.tiktok.com/tag/${tag.toLowerCase()}?refer=embed`}
                        >
                          #{tag}
                        </a>
                      ))}
                    </section>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Video Kegiatan & Edukasi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ikuti kegiatan dan dapatkan informasi kesehatan terbaru dari Klinik Utama CMI melalui berbagai platform sosial media kami.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <TabButton 
            name="youtube" 
            icon={<Play size={18} className={activeTab === 'youtube' ? 'text-white' : 'text-red-600'} />} 
            active={activeTab === 'youtube'} 
          />
          <TabButton 
            name="instagram" 
            icon={<Instagram size={18} className={activeTab === 'instagram' ? 'text-white' : 'text-pink-600'} />} 
            active={activeTab === 'instagram'} 
          />
          <TabButton 
            name="tiktok" 
            icon={<Video size={18} className={activeTab === 'tiktok' ? 'text-white' : 'text-black'} />} 
            active={activeTab === 'tiktok'} 
          />
        </div>

        {renderContent()}
      </div>
    </section>
  );
};

export default SocialMediaVideosSection;