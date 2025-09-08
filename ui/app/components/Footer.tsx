import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-background text-foreground py-12">
      {/* Gradient border/shadow at the top */}
      <div className="absolute left-0 right-0 top-0 h-0.5 pointer-events-none bg-gradient-to-r from-[#404957] via-[#233b5e] to-[#1e2126]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Image
          src='/john-nash-society-banner-dark.svg'
          alt="John Nash Society"
          height={90}
          width={160}
          className="mx-auto"
        />
        <p className="text-foreground/80 my-6">
          Cultivating strategic thinking through mathematics and game theory.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="/about"
            className="text-foreground/80 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="/events"
            className="text-foreground/80 hover:text-white transition-colors"
          >
            Events
          </a>
          <a
            href="/members"
            className="text-foreground/80 hover:text-white transition-colors"
          >
            Members
          </a>
          <a
            href="/#contact"
            className="text-foreground/80 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;