import "./App.css";

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/dandee-logo.png" alt="Dandee" className="h-8 w-auto" />
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-purple-600 transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('download')} className="text-gray-700 hover:text-purple-600 transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-purple-50 to-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <img src="/dandee-logo.png" alt="Dandee" className="mx-auto h-24 w-auto mb-8" />
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Get It Done,
              <span className="text-purple-600 block">Get It Dandee</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The ultimate home services platform connecting homeowners with trusted contractors. 
              From repairs to renovations, Dandee makes home improvement simple and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('download')}
                className="bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
              >
                Download for iOS
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Home Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dandee brings together homeowners and trusted contractors in one seamless platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-purple-50">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Trusted Contractors</h3>
              <p className="text-gray-600">
                Connect with verified, reviewed contractors in your area. Get quotes, check ratings, and book services with confidence.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-purple-50">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick & Easy Booking</h3>
              <p className="text-gray-600">
                Request services, get instant quotes, and schedule appointments all from your phone. No more phone calls or waiting.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-purple-50">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparent Pricing</h3>
              <p className="text-gray-600">
                Get upfront quotes, compare prices, and pay securely through the app. No hidden fees or surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Dandee?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're revolutionizing the home services industry by making it easier than ever to find reliable contractors and get quality work done.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Verified contractors with background checks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Real customer reviews and ratings</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">Secure payment and insurance protection</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">24/7 customer support</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img src="/dandee-logo.png" alt="Dandee" className="mx-auto h-48 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Download Dandee today and experience the future of home services. Available on iOS devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Download for iOS
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/dandee-logo-white.png" alt="Dandee" className="h-8 w-auto mb-4" />
              <p className="text-gray-400">
                Get It Done, Get It Dandee. The ultimate home services platform.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Home Repairs</li>
                <li>Renovations</li>
                <li>Cleaning</li>
                <li>Landscaping</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dandee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
