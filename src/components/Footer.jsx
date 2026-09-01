function Footer({ name, socials }) {
  return (
    <footer className="bg-primary text-white text-center py-8 px-6">
      <p className="text-lg font-semibold font-display">{name}</p>
      <div className="flex justify-center gap-4 mt-4">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p className="text-sm opacity-50 mt-4">
        © {new Date().getFullYear()} - Todos los derechos reservados
      </p>
    </footer>
  );
}

export default Footer;