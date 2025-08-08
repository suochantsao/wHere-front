import Header from "@/components/layout/Header";
import Feature from "@/components/ui/Feature";
import Step from "@/components/ui/Step";
import Testimonial from "@/components/ui/Testimonial";

export default function Home() {
  return (
    <main className="font-sans">
      <div className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-no-repeat h-screen">
        <Header />
        <section className="flex justify-center gap-8 p-8 items-center pt-[35vh]">
          <div className="text-center">
            <p className="text-2xl font-bold mb-2">
              為多地生活的你打造專屬的儲物記錄。
            </p>
            <p className="mb-4 text-gray-600">
              用 wHere，記住每一樣東西放在哪裡，從此不再翻箱倒櫃。
            </p>
            <div className="space-x-2 mt-8">
              <button className="bg-black text-white px-4 py-2 rounded">
                開始使用
              </button>
              <button className="bg-white px-4 py-2 rounded">瞭解更多</button>
            </div>
          </div>
        </section>
      </div>

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
        <div className="text-center mt-8">
          © 2025 Storage Solution. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
