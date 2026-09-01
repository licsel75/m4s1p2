function FeatureCard({ title, description, icon, isNew, onSelect }) {
  const handleClick = () => {
    onSelect(title);
  };

  return (
    <article className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {isNew && (
        <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
          🆕 Nuevo
        </span>
      )}
      <p className="text-gray-600">{description}</p>
      <button
        type="button"
        onClick={handleClick}
        className="mt-4 text-secondary font-medium hover:underline"
      >
        Ver más →
      </button>
    </article>
  );
}

export default FeatureCard;