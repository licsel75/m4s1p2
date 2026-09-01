function Hero({
  title,
  subtitle,
  buttonText,
  buttonText2,
  onButtonClick,
  onButtonClick2,
  backgroundImage,
}) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-6 md:mt-10">
      <section
        className="text-center py-12 px-6 text-white relative min-h-[70vh] flex items-center justify-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Capa oscura encima de la imagen */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Contenido */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              onClick={onButtonClick}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              {buttonText}
            </button>
            <button
              type="button"
              onClick={onButtonClick2}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              {buttonText2}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;