import { useState } from 'react'
import Silk from './components/Silk'
import WineAnimation from './components/WineAnimation'
import ServiceItem from './components/ServiceItem'
import VideoBackground from './components/VideoBackground'
import ContactAnimation from './components/ContactAnimation'
import hero1 from './assets/hero1.mp4'
import hero2 from './assets/hero2.mp4'
import revealContactAnim from './assets/reveal_contact.json'
import hoverContactAnim from './assets/hover_contact.json'
import marketDevelopmentAnim from './assets/What we do/marketDevelopment.json'
import brandPositioningAnim from './assets/What we do/BrandPositioning.json'
import commercialDistributionAnim from './assets/What we do/Commercial_Distribution.json'
import salesStratAnim from './assets/What we do/SalesStrat.json'
import sourcingAnim from './assets/What we do/sourcing.json'
import consultingAnim from './assets/What we do/consulting.json'
import marketDevelopmentHoverAnim from './assets/What we do/onhover/marketDevelopment_hover.json'
import brandPositioningHoverAnim from './assets/What we do/onhover/BrandPositioning_hover.json'
import commercialDistributionHoverAnim from './assets/What we do/onhover/Commercial_Distribution_hover.json'
import salesStratHoverAnim from './assets/What we do/onhover/SalesStrat_hover.json'
import sourcingHoverAnim from './assets/What we do/onhover/sourcing_hover.json'
import consultingHoverAnim from './assets/What we do/onhover/consulting_hover.json'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState('')
  const currentYear = new Date().getFullYear()

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:info@aimpartners.hk?subject=Contact from ${formData.name}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
    setFormStatus('Opening your email client...')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex justify-between items-center">
          <a href="#" className="font-serif text-2xl text-primary tracking-tight">
            AIM Partners
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold text-primary hover:text-accent transition-colors px-6 py-2.5 rounded-full border border-primary/20 hover:border-accent/30 hover:bg-accent/5"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20 relative overflow-hidden bg-primary-100">
        <VideoBackground videos={[hero1, hero2]} />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-8 animate-fade-in-up opacity-0 leading-[0.95] tracking-tight">
            AIM Partners
          </h1>
          <p className="text-xl md:text-3xl text-white/90 font-light tracking-wide mb-12 animate-fade-in-up opacity-0 animate-delay-100 max-w-3xl mx-auto">
            <span className="font-semibold">Connecting Wine.</span> <span className="font-semibold">Building Markets.</span>
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary hover:bg-accent hover:text-white px-10 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-500 animate-fade-in-up opacity-0 animate-delay-200 rounded-full"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-gradient-to-b from-white to-background-950 relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex justify-center mb-16">
            <div className="w-72">
              <WineAnimation />
            </div>
          </div>
          <div className="space-y-8 text-text-400 leading-relaxed text-lg md:text-xl text-center max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-light text-primary">
              Founded by <span className="font-semibold">Ivan Aquino</span> and <span className="font-semibold">Marcos Marques</span>, AIM Partners Limited brings together <span className="font-semibold">decades of international experience</span>, passion for the wine industry, and a modern approach to global market growth.
            </p>
            <p>
              With over <span className="font-semibold">20 years of experience</span> in the wine business, Ivan Aquino leads with deep industry insight, commercial strategy, and a trusted global network. Alongside him, Marcos Marques contributes strategic development and business expansion expertise, ensuring every partnership is built for <span className="font-semibold">sustainable success</span>.
            </p>
            <p className="text-accent font-semibold text-2xl md:text-3xl pt-8">
              Together, we empower brands to reach <span className="font-bold">new markets</span>, maximize <span className="font-bold">value</span>, and create <span className="font-bold">lasting impact</span>.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl text-primary mb-6 text-center tracking-tight">
            What We Do
          </h2>
          <p className="text-xl text-text-400 text-center mb-20 font-light">
            We help wine companies grow with <span className="font-semibold">clarity</span>, <span className="font-semibold">strategy</span>, and <span className="font-semibold">results</span>
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <ServiceItem 
              title="Market Development & Expansion" 
              description="New market entry support for wine exporters across Hong Kong, Mainland China, Singapore, Taiwan, Japan, and Southeast Asia. Strategic guidance for sustainable growth in APAC markets."
              animationData={marketDevelopmentAnim}
              hoverAnimationData={marketDevelopmentHoverAnim}
            />
            <ServiceItem 
              title="Brand Positioning & Portfolio Strategy" 
              description="Comprehensive brand building and marketing strategy services. We help wine exporters and distributors create compelling brand narratives and optimize their portfolio for target markets."
              animationData={brandPositioningAnim}
              hoverAnimationData={brandPositioningHoverAnim}
            />
            <ServiceItem 
              title="Commercial & Distribution Partnerships" 
              description="Connecting wine exporters with verified distributors and retailers across Asia-Pacific. Strategic partnership development with full transparency and compliance."
              animationData={commercialDistributionAnim}
              hoverAnimationData={commercialDistributionHoverAnim}
            />
            <ServiceItem 
              title="Sales Strategy & Route-to-Market Support" 
              description="Staff and sales-team training for distributors. Operational efficiency consulting and business development strategies to maximize market penetration and revenue growth."
              animationData={salesStratAnim}
              hoverAnimationData={salesStratHoverAnim}
            />
            <ServiceItem 
              title="Private Label & Sourcing Solutions" 
              description="Advisory services for private label development and strategic sourcing from Europe, the U.S., Australia, and South America. Connecting quality producers with distribution opportunities."
              animationData={sourcingAnim}
              hoverAnimationData={sourcingHoverAnim}
            />
            <ServiceItem 
              title="Consulting for Wineries, Distributors & Investors" 
              description="Long-term advisory contracts and retainer-based services for wine exporters, distributors, and investors. Strategic guidance for operational excellence and sustainable business growth."
              animationData={consultingAnim}
              hoverAnimationData={consultingHoverAnim}
            />
          </div>
          <p className="text-center text-xl text-text-400 font-light mt-20">
            If you have a <span className="font-semibold">project</span>, a <span className="font-semibold">wine to grow</span>, or a <span className="font-semibold">market to enter</span> — we can help.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-40 px-6 relative overflow-hidden bg-primary text-white">
        {/* Animated Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 1 }}>
          <Silk
            speed={5}
            scale={1}
            color="#1F2A44"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-5xl md:text-7xl mb-16 tracking-tight">
            Our Philosophy
          </h2>
          <div className="space-y-10 text-xl md:text-2xl leading-relaxed text-white/80 font-light">
            <p className="text-3xl md:text-4xl text-white">The world of wine <span className="font-semibold">evolves</span>.</p>
            <p>Success demands <span className="font-semibold">experience</span>, <span className="font-semibold">connection</span>, and <span className="font-semibold">thoughtful action</span>.</p>
            <p className="text-secondary font-semibold text-2xl md:text-3xl pt-8">
              We believe in building brands with <span className="font-bold">purpose</span>, partners with <span className="font-bold">integrity</span>, and results that <span className="font-bold">last</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-background-950 to-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl text-primary mb-6 text-center tracking-tight">
            Let's Talk
          </h2>
          <p className="text-xl text-text-400 text-center mb-12 font-light">
            Ready to discuss your <span className="font-semibold">next market opportunity</span>?
          </p>
          
          <div className="flex justify-center mb-12">
            <div className="w-48">
              <ContactAnimation 
                revealAnimation={revealContactAnim}
                hoverAnimation={hoverContactAnim}
              />
            </div>
          </div>
          
          <div className="text-center mb-12">
            <a
              href="mailto:info@aimpartners.hk"
              className="text-xl text-accent hover:text-primary font-semibold transition-colors inline-block"
            >
              info@aimpartners.hk
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 border border-primary/15 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none transition-all bg-white text-text-300 placeholder:text-text-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 border border-primary/15 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none transition-all bg-white text-text-300 placeholder:text-text-600"
                />
              </div>
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us about your project or inquiry..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 border border-primary/15 rounded-lg focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none transition-all resize-none bg-white text-text-300 placeholder:text-text-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-accent text-white py-4 text-sm font-bold uppercase tracking-widest transition-all duration-500 rounded-lg hover:shadow-xl hover:shadow-accent/20"
            >
              Send Message
            </button>
            {formStatus && (
              <p className="text-center text-sm text-text-400 font-medium">{formStatus}</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/80 text-base mb-3 font-light">
            AIM Partners Limited — Hong Kong / APAC
          </p>
          <p className="text-white/50 text-sm mb-4 font-light">
            © {currentYear} AIM Partners Limited. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-light">
            Video content by{' '}
            <a 
              href="https://www.freepik.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white/40 transition-colors"
            >
              Freepik
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
