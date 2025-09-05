export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      {/* Hero Section */}
      <section className="relative text-center py-24 sm:py-32 px-4 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-slate-800 dark:to-blue-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)] dark:invert"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in-down">
            The John Nash Society
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Exploring the strategic mind through game theory, mathematics, and collaborative innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-transform duration-200 hover:scale-105 shadow-lg">
              Join Our Community
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Upcoming Events
            </button>
          </div>
        </div>
      </section>

      {/* Who was John Nash Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              The Mind Behind the Theory
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              An introduction to the life and legacy of John Nash.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">A Towering Intellect</h3>
              <p className="mb-4">
                John Nash (1928 – 2015) was an American mathematician whose work fundamentally
                shaped game theory, economics, and mathematics. He’s most famous for the concept
                of the <strong className="font-semibold">Nash Equilibrium</strong>, a stable outcome in a game where no player can
                improve their situation by unilaterally changing strategy.
              </p>
              <p>
                Awarded the 1994 Nobel Prize in Economic Sciences, his pioneering
                analysis of equilibria in non-cooperative games remains a cornerstone of modern economics.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg">Personal Life</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Struggled with schizophrenia for decades before a remarkable recovery and return to academia.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg">Global Impact</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">The Nash Equilibrium is applied in economics, international relations, biology, and AI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* What We Do Section */}
      <section className="py-16 sm:py-24 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">What We Do</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Our initiatives are designed to foster learning, collaboration, and innovation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Academic Engagement */}
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">Academic Engagement</h3>
              <p className="text-slate-600 dark:text-slate-300">Host seminars, workshops, and talks on game theory, economics, decision science, and mathematics.</p>
            </div>
            {/* Interdisciplinary Projects */}
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">Interdisciplinary Projects</h3>
              <p className="text-slate-600 dark:text-slate-300">Collaborate with business, economics, political science, and computer science clubs on case studies and simulations.</p>
            </div>
            {/* Innovation & Problem-Solving */}
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">Innovation & Problem-Solving</h3>
              <p className="text-slate-600 dark:text-slate-300">Run an annual “Nash Innovation Challenge” to solve global problems using game-theoretic approaches.</p>
            </div>
            {/* Artificial Intelligence */}
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">Artificial Intelligence</h3>
              <p className="text-slate-600 dark:text-slate-300">Merge AI with Game Theory, working with the Servino Center and utilizing Quantum Computing to advance research.</p>
            </div>
            {/* Mental Health & Resilience */}
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">Mental Health & Resilience</h3>
              <p className="text-slate-600 dark:text-slate-300">Dedicate initiatives to mental health awareness, inspired by Nash’s life journey and resilience.</p>
            </div>
            {/* Community & Outreach */}
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">Community & Outreach</h3>
              <p className="text-slate-600 dark:text-slate-300">Mentor younger students and build outreach programs with local schools to inspire interest in problem-solving.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Mission
            </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-12">
              To foster a community of curious minds who explore the principles of game theory,
              mathematics, and strategic thinking inspired by John Nash, while promoting collaboration,
              innovation, and resilience in the face of challenges.
          </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Vision
            </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              To be a leading student hub that cultivates future thinkers, innovators, and problem-solvers
              who apply the lessons of John Nash's work and life to create positive impact in academia,
              industry, and society.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Why Not Change The World?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Become a part of a community dedicated to solving complex problems and making an impact.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-transform duration-200 hover:scale-105 shadow-lg">
            Become a Member
          </button>
        </div>
      </section>

      
    </div>
  );
}
