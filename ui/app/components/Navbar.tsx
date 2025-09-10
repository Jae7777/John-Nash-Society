import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-background shadow-md sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="">
              <Image
                src="/john-nash-society-banner-dark.svg"
                alt="John Nash Society"
                height={63}
                width={112}
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/about"
                className="text-foreground text-lg hover:bg-blue-300/10 px-6 py-2 rounded-md duration-200"
              >
                About
              </Link>
              <Link
                href="/#events"
                className="text-foreground text-lg hover:bg-blue-300/10 px-6 py-2 rounded-md duration-200"
              >
                Events
              </Link>
              <Link
                href="/leadership"
                className="text-foreground text-lg hover:bg-blue-300/10 px-6 py-2 rounded-md duration-200"
              >
                Leadership
              </Link>
              <Link
                href="/#contact"
                className="text-foreground text-lg hover:bg-blue-300/10 px-6 py-2 rounded-md duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Gradient border/shadow at the bottom */}
      <div className="absolute left-0 right-0 bottom-0 h-0.5 pointer-events-none bg-gradient-to-r from-[#1e2126] via-[#233b5e] to-[#404957]" />
    </nav>
  );
};

export default Navbar;
