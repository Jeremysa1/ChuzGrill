import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ChevronLeft, Menu, Play, Terminal } from 'lucide-react';

// --- COMPONENTES REUTILIZABLES --- //

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center max-w-3xl mx-auto mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
    {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
  </div>
);

const ImagePlaceholder = ({ className = "aspect-video", text = "Image Placeholder" }) => (
  <div className={`bg-gray-200 w-full flex items-center justify-center border border-gray-300 rounded-lg ${className}`}>
    <span className="text-gray-400 font-medium text-sm">{text}</span>
  </div>
);

const Button = ({ variant = 'primary', children, className = '' }) => {
  const baseStyle = "px-6 py-3 rounded-full font-semibold transition-colors duration-200 inline-flex items-center justify-center";
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800",
    secondary: "bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-50",
    outline: "bg-transparent text-gray-900 border border-gray-300 hover:border-gray-900"
  };
  return <button className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>;
};

// --- ESTRUCTURA PRINCIPAL DE LA PÁGINA --- //

export default function App() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo Placeholder */}
            <div className="w-32 h-8 bg-gray-300 rounded"></div>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-gray-900">Products</a>
              <a href="#" className="hover:text-gray-900">Resources</a>
              <a href="#" className="hover:text-gray-900">About</a>
              <a href="#" className="hover:text-gray-900">Pricing</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hidden md:block text-sm font-medium hover:text-gray-600">Log In</a>
            <Button variant="primary" className="hidden md:flex py-2 text-sm">Get Started</Button>
            <Menu className="md:hidden w-6 h-6 text-gray-600" />
          </div>
        </div>
      </header>

      <main className="pt-20">
        
        {/* 1. HERO SECTION */}
        <section className="bg-gray-50 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Integrate your <br/> POS or Middleware
              </h1>
              <p className="text-xl text-gray-600 max-w-md">
                Streamline operations and grow your business with our robust integration solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary">Get Started Now</Button>
                <Button variant="outline">Contact Sales</Button>
              </div>
            </div>
            <div className="relative">
              <ImagePlaceholder className="aspect-[4/3] rounded-2xl shadow-xl" text="Hero Image / Graphic" />
            </div>
          </div>
        </section>

        {/* 2. BENEFITS SECTION (3 Columns) */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Benefits of integrating your system" />
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-8 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col items-center text-center">
                  <ImagePlaceholder className="w-32 h-32 rounded-full mb-6" text="Icon" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Benefit Title {item}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. PRODUCTS SECTION (3 Columns) */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Integrate with any product" />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Marketplace', desc: 'Reach new customers on our app.' },
                { title: 'Commerce Platform', desc: 'Build your own online ordering channel.' },
                { title: 'Drive on Demand', desc: 'Fulfill orders with our driver network.' }
              ].map((prod, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm flex flex-col">
                  <ImagePlaceholder className="aspect-video rounded-none" text="Product Image" />
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{prod.title}</h3>
                    <p className="text-gray-600 mb-6 flex-1">{prod.desc}</p>
                    <Button variant="outline" className="w-full text-sm">Learn More</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. LOGO GRID SECTION */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionHeading 
              title="Explore our preferred integrations" 
              subtitle="Connect seamlessly with the tools you already use every day."
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-20 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 font-medium text-sm">Partner Logo {i+1}</span>
                </div>
              ))}
            </div>
            <Button variant="secondary">See all integrations</Button>
          </div>
        </section>

        {/* 5. RESOURCES CAROUSEL SECTION */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <SectionHeading title="Resources to help you integrate" />
            
            {/* Carousel Arrows (Wireframe representation) */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow border text-gray-500 hidden xl:block"><ChevronLeft /></button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow border text-gray-500 hidden xl:block"><ChevronRight /></button>

            <div className="grid md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                  <ImagePlaceholder className="aspect-video rounded-none" text="Article Image" />
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 hover:underline cursor-pointer">How to integrate your POS system efficiently</h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">Learn the best practices for connecting your middleware to our platform without downtime.</p>
                    <div className="flex justify-between items-center text-xs text-gray-400">
                      <span>May 24, 2024</span>
                      <a href="#" className="font-semibold text-gray-900 hover:underline">Read Guide &rarr;</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIAL SECTION */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <ImagePlaceholder className="aspect-square rounded-xl bg-gray-800 border-gray-700 text-gray-600" text="Customer Photo" />
            <div className="space-y-8">
              <blockquote className="text-3xl lg:text-4xl font-light leading-tight">
                "The integration between our systems and this platform was seamless. It saved us countless hours of manual work."
              </blockquote>
              <div>
                <p className="font-bold text-lg">John Doe</p>
                <p className="text-gray-400">CTO, Enterprise Restaurant Group</p>
              </div>
              <Button variant="outline" className="border-gray-500 text-white hover:bg-gray-800 hover:border-white">
                <Play className="w-4 h-4 mr-2" /> Watch Video
              </Button>
            </div>
          </div>
        </section>

        {/* 7. DEVELOPER API SECTION */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Build an integration with our Developer API</h2>
              <p className="text-gray-600 text-lg">
                Access powerful tools, comprehensive documentation, and dedicated support to build custom solutions for your business.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-gray-900"/> RESTful APIs and Webhooks</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-gray-900"/> Sandboxes for testing</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-gray-900"/> Dedicated technical support</li>
              </ul>
              <div className="pt-4 flex gap-4">
                <Button variant="primary">Read Docs</Button>
                <Button variant="outline">Request Access</Button>
              </div>
            </div>
            {/* Terminal Window Mockup */}
            <div className="bg-gray-900 rounded-xl p-6 shadow-2xl relative overflow-hidden">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                <div className="w-3 h-3 rounded-full bg-gray-700"></div>
              </div>
              <div className="font-mono text-sm space-y-4 text-gray-400">
                <p><span className="text-gray-100">POST</span> /v1/orders/create</p>
                <p>{`{`}</p>
                <p className="pl-4">"store_id": "12345",</p>
                <p className="pl-4">"items": [</p>
                <p className="pl-8">{`{ "id": "item_1", "qty": 2 }`}</p>
                <p className="pl-4">]</p>
                <p>{`}`}</p>
                <p className="text-gray-500 mt-4"># Status: 200 OK</p>
              </div>
              <Terminal className="absolute bottom-4 right-4 text-gray-700 w-16 h-16 opacity-20" />
            </div>
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Frequently Asked Questions" />
            <div className="space-y-4">
              {[
                "How do I get started with the integration?",
                "What middleware systems do you support?",
                "Is there a cost to integrate?",
                "How long does the certification process take?"
              ].map((question, idx) => (
                <div key={idx} className="border border-gray-200 bg-white rounded-lg">
                  <button 
                    className="w-full flex justify-between items-center p-6 text-left font-semibold text-gray-900 focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  >
                    {question}
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      This is a wireframe placeholder answer. In a real application, this would contain the detailed explanation for the frequently asked question above. It demonstrates the expanded state of the accordion component.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. BOTTOM CTA */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-100 rounded-3xl p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">Partner with us today</h2>
                <p className="text-lg text-gray-600">Join thousands of merchants growing their business with our integrated technology platform.</p>
                <Button variant="primary" className="mt-4">Get Started</Button>
              </div>
              <div className="md:w-1/2 w-full">
                <ImagePlaceholder className="aspect-[4/3] rounded-xl" text="Final CTA Image" />
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-16 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-gray-800 pb-12">
            <div>
              <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Get to Know Us</h5>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Investors</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Products</h5>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white">Marketplace</a></li>
                <li><a href="#" className="hover:text-white">Storefront</a></li>
                <li><a href="#" className="hover:text-white">Drive</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Doing Business</h5>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white">Merchants</a></li>
                <li><a href="#" className="hover:text-white">Developers</a></li>
                <li><a href="#" className="hover:text-white">Partners</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Resources</h5>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">API Docs</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 items-center">
              <div className="w-24 h-6 bg-gray-700 rounded"></div> {/* Footer Logo */}
              <span>© 2024 Company Name</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
