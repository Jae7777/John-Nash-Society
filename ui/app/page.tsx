import { ContactForm } from "./components/ContactForm";
import { Events } from "./components/Events";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <Hero />

      <Events />

      <ContactForm />

      {/* <section className="container mx-auto mt-30">
        <p className="text-center text-6xl font-semibold">
          A New Light on Game Theory
        </p>
        <p className="text-center text-xl text-foreground/85 mt-5">
          Nash Equilibrium, which describes a stable outcome in a game where no
          player can improve their situation by unilaterally changing strategy,
          is a concept used in virtually every aspect of our lives. Explore how understanding game theory can help you across various fields.
        </p>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 pt-12">
          <div className="aspect-[2/3] w-full bg-black/10"></div>
          <div className="aspect-[2/3] w-full bg-black/10"></div>
          <div className="aspect-[2/3] w-full bg-black/10"></div>
        </div>
      </section> */}
    </div>
  );
}
