const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold mb-4">The John Nash Society</h3>
        <p className="text-slate-400 mb-6">
          Cultivating strategic thinking through mathematics and game theory.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="/about"
            className="text-slate-400 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="/events"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Events
          </a>
          <a
            href="/members"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Members
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Join Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;