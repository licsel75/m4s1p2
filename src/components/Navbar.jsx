function Navbar({ logo, links }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-primary">{logo}</h1>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href} className="text-gray-700 hover:text-secondary transition-colors">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;