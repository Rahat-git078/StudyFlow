const NotFound = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080B16] flex items-center justify-center px-6">
      <div className="absolute top-[-150px] left-[-100px] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-150px] right-[-100px] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-2xl w-full text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm">
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
          ERROR 404 — PAGE NOT FOUND
        </div>

        <h1 className="text-[120px] sm:text-[180px] font-black leading-none tracking-tighter bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent select-none">
          404
        </h1>

        <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-white">
          Oops! Lost in Space?
        </h2>

        <p className="mt-5 text-gray-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg shadow-purple-500/20 hover:scale-105 hover:shadow-purple-500/40 transition-all duration-300"
          >
            <span aria-hidden="true">⌂</span>
            Back to Home
          </a>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 text-gray-300 font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <span aria-hidden="true">←</span>
            Go Back
          </button>
        </div>

        <div className="mt-20 pt-6 border-t border-white/10">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Your Website. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;