import Image from "next/image";
import Link from "next/link";

const links = [
  {
    label: "About",
    href: "/about"
  },
  {
    label: "John Nash",
    href: "/about/john-nash"
  },
  {
    label: "Leadership",
    href: "/leadership"
  },
  {
    label: "Contact",
    href: "/#contact"
  },
  {
    label: "Activities",
    href: "/activities"
  },
  {
    label: "Lectures",
    href: "/lectures/1"
  }
]
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
          {links.map((link) => (
            <Link
              href={link.href}
              className="text-foreground/80 hover:text-white transition-colors"
              key={link.label}
          >
            {link.label}
          </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;