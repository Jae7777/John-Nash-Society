import Image from "next/image";
import { BsDash } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export function Hero() {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:aspect-video">
        <div className="hidden lg:flex flex-col p-16 bg-black/10 aspect-auto h-full justify-center">
          <div className="flex gap-2 ">
            <div className="flex flex-col items-center md:items-start w-full">
              <FaQuoteLeft className="mb-2 self-start size-12 xl:size-16" />
              <blockquote className="text-4xl xl:text-5xl font-semibold px-12 leading-snug ">
                Classes will dull your mind, destroy the potential for authentic
                creativity.
              </blockquote>
              <FaQuoteRight className="mt-2 self-end size-12 xl:size-16" />
            </div>
          </div>
          <div className="flex gap-2 items-center justify-end pt-8 xl:pt-12">
            <BsDash className="size-16" />
            <p className="text-xl xl:text-2xl text-foreground/90">
              <span className="font-semibold">John Nash</span>, A Beautiful Mind
            </p>
          </div>
        </div>
        <div className="p-4 md:p-8 lg:p-16 bg-foreground aspect-square lg:aspect-auto">
          <div className="relative h-full w-full">
            <Image
              src="/john-nash.webp"
              alt="John Nash"
              fill
              className="absolute object-cover grayscale"
            />
            {/* overlay on the image */}
            <div className="absolute lg:hidden flex-col text-center md:text-start bg-gradient-to-b from-transparent to-black/70 bottom-0 px-6">
              <div className="flex gap-2 ">
                <div className="flex flex-col items-center md:items-start w-full">
                  <FaQuoteLeft className="mb-2 self-start size-4 md:size-8" />
                  <blockquote className="text-xl sm:text-3xl md:text-4xl font-semibold px-12 leading-snug text-center md:text-start ">
                    Classes will dull your mind, destroy the potential for
                    authentic creativity.
                  </blockquote>
                  <FaQuoteRight className="mt-2 self-end size-4 md:size-8" />
                </div>
              </div>
              <div className="flex gap-2 items-center justify-end py-4">
                <BsDash className="size-8" />
                <p className="text-lg md:text-xl text-foreground/90">
                  <span className="font-semibold">John Nash</span>, A Beautiful
                  Mind
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
