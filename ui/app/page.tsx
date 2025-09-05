export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              The John Nash Society
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Exploring the strategic mind through game theory, mathematics, and
              innovative thinking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
                Join Our Community
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl"></div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-8 shadow-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center">
              To foster a community of curious minds who explore the principles
              of game theory, mathematics, and strategic thinking inspired by
              John Nash, while promoting collaboration, innovation, and
              resilience in the face of challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 sm:py-24 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Vision
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center mb-6">
              To be a leading student hub that cultivates future thinkers,
              innovators, and problem-solvers who apply the lessons of John
              Nash's work and life to create positive impact in academia,
              industry, and society.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 text-center italic">
              To bring this vision to reality...
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Join the Conversation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Connect with fellow strategic thinkers and explore the fascinating
            world of game theory and mathematical reasoning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Become a Member
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">The John Nash Society</h3>
            <p className="text-slate-400 mb-6">
              Cultivating strategic thinking through mathematics and game theory
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Events
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Resources
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
