import FeatureCard from './FeatureCard';

function FeatureSection({ features, onFeatureClick }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-text font-display">
        Características principales
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            isNew={feature.isNew}
            onSelect={onFeatureClick}
          />
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;