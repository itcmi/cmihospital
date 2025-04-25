const VideoSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        Video Kegiatan & Edukasi
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-5xl mx-auto">
        {/* YouTube */}
        <div className="w-full md:w-1/3 aspect-video">
          <iframe
            src="https://www.youtube.com/embed/KG0h1W_c3yQ"
            className="w-full h-full rounded-xl"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        {/* Instagram Embed */}
        <div className="w-full md:w-1/3 aspect-video bg-white rounded-xl shadow flex items-center justify-center">
          <p className="text-sm text-gray-500">Embed Instagram (dummy)</p>
        </div>
        {/* TikTok Embed */}
        <div className="w-full md:w-1/3 aspect-video bg-white rounded-xl shadow flex items-center justify-center">
          <p className="text-sm text-gray-500">Embed TikTok (dummy)</p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
