const Feature = ({ title, description }) => (
    <div className="text-center px-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
);

const Step = ({ number, title }) => (
    <div className="text-center">
      <div className="w-10 h-10 rounded-full bg-gray-200 mx-auto mb-2 flex items-center justify-center font-bold">
        {number}
      </div>
      <p className="text-sm font-medium">{title}</p>
    </div>
);

const Testimonial = ({ name, role, quote }) => (
    <div className="bg-gray-100 p-4 rounded shadow text-sm">
      <p className="mb-2">"{quote}"</p>
      <p className="font-semibold">{name}</p>
      <p className="text-gray-500">{role}</p>
    </div>
);

export default function Home() {
  return (
      <main className="font-sans">
        {/* Header */}
        <header className="flex justify-between items-center p-4 border-b text-sm">
          <div className="font-bold">LOGO</div>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Product Features</a>
            <a href="#" className="hover:underline">Discussion Forum</a>
            <a href="#" className="hover:underline">About Us</a>
          </nav>
          <div className="space-x-2">
            <button className="text-sm px-3 py-1 border rounded">Login</button>
            <button className="text-sm px-3 py-1 bg-gray-800 text-white rounded">Register</button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-8 p-8 items-center">
          <div>
            <h1 className="text-2xl font-bold mb-2">Transform Your Space</h1>
            <p className="mb-4 text-gray-600">
              Organize smarter, live better with our innovative storage solution.
            </p>
            <div className="space-x-2">
              <button className="bg-black text-white px-4 py-2 rounded">Get Started</button>
              <button className="bg-gray-200 px-4 py-2 rounded">Learn More</button>
            </div>
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center rounded shadow">
            Product Image
          </div>
        </section>

        {/* Features */}
        <section className="grid md:grid-cols-3 gap-6 p-8 bg-gray-50">
          <Feature
              title="Smart Storage"
              description="Intelligent organization system that adapts to your needs"
          />
          <Feature
              title="Mobile Control"
              description="Manage your storage from anywhere, anytime"
          />
          <Feature
              title="Analytics"
              description="Track and optimize your space usage"
          />
        </section>

        {/* How It Works */}
        <section className="p-8 text-center">
          <h2 className="text-xl font-semibold mb-6">How It Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Step number="1" title="Sign Up" />
            <Step number="2" title="Setup System" />
            <Step number="3" title="Organize Items" />
            <Step number="4" title="Track & Manage" />
          </div>
        </section>

        {/* Testimonials */}
        <section className="p-8 bg-gray-50 text-center">
          <h2 className="text-xl font-semibold mb-6">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial
                name="Sarah Johnson"
                role="Home Owner"
                quote="Finally, a storage solution that makes sense!"
            />
            <Testimonial
                name="Mike Chan"
                role="Business Owner"
                quote="Transformed our inventory management."
            />
            <Testimonial
                name="Emily Davis"
                role="Professional Organizer"
                quote="The perfect tool for my clients."
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white p-8 text-sm">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-1">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Product</h3>
              <ul className="space-y-1">
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul className="space-y-1">
                <li>Blog</li>
                <li>Documentation</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-2">
                <span>🐦</span>
                <span>📘</span>
                <span>📸</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">© 2025 Storage Solution. All rights reserved.</div>
        </footer>
      </main>
  );
}
