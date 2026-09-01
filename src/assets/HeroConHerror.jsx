function Hero({ title, subtitle, buttonText, onButtonClick }) {
  return (
    <section className="text-center py-20 px-6 bg-gradient-to-r from-primary to-secondary text-white">
      <h1 className="text-5xl font-bold mb-4 font-display">{title}</h1>
      <p className="text-xl mb-8 opacity-90">{subtitle}</p>
      <button
        type="button"
        onClick={onButtonClick}
        className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
      >
        {buttonText}
      </button>
    </section>
  );
}

export default Hero;