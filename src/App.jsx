import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import { features } from './data/features';
import heroBg from './assets/hero-bg.jpg';

function App() {
  // Datos del Navbar
  const links = [
    { id: 1, name: "Inicio", href: "#" },
    { id: 2, name: "Características", href: "#features" },
    { id: 3, name: "Precios", href: "#prices" },
    { id: 4, name: "Contacto", href: "#contact" },
  ];

  // Datos del Footer
  const socials = [
    { id: 1, name: "Facebook", url: "#", icon: "📘" },
    { id: 2, name: "Instagram", url: "#", icon: "📸" },
    { id: 3, name: "LinkedIn", url: "#", icon: "🔗" },
  ];

  // Handlers
  const handleHeroClick = () => {
    alert("¡Gracias por tu interés! Te contactaremos pronto.");
  };
  const handleDemoClick = () => {
  alert("¡Mirá la demo en acción!");
};

  const handleFeatureClick = (title) => {
    alert(`Hiciste clic en: ${title}`);
  };

  return (
    <div className="min-h-screen bg-surface">
      <Navbar logo="S&S" links={links} />
      <Hero
  title="Gestioná tu stock y ventas de forma simple"
  subtitle="La herramienta que tu negocio necesita para crecer"
  buttonText="Probar gratis"
  buttonText2="Ver Demo"             
  onButtonClick={handleHeroClick}
  onButtonClick2={handleDemoClick}
  backgroundImage={heroBg}   
/>
      <FeatureSection
        features={features}
        onFeatureClick={handleFeatureClick}
      />
      <Footer name="S&S - Sistema de Stock y Ventas" socials={socials} />
    </div>
  );
}

export default App;