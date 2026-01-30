import { useState } from 'react'

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
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-serif text-xl font-semibold tracking-wide text-primary">
            AIM Partners
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-accent hover:text-primary transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-b from-background to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-primary mb-6 animate-fade-in-up opacity-0">
            AIM Partners Limited
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium tracking-wide mb-8 animate-fade-in-up opacity-0 animate-delay-100">
            Elevating Wines. Empowering Brands. Enriching Markets.
          </p>
          <p className="text-lg text-text/70 leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 animate-delay-200">
            Our new website is on the way — but our work has already begun.
            We connect exceptional wines with global opportunities, supporting producers, distributors, and market partners with strategic guidance, sales expertise, and long-term vision.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-accent text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 animate-fade-in-up opacity-0 animate-delay-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-8 text-center">
            About AIM Partners
          </h2>
          <div className="space-y-6 text-text/70 leading-relaxed text-lg">
            <p>
              Founded by Ivan Aquino and Marcos Marques, AIM Partners Limited brings together decades of international experience, passion for the wine industry, and a modern approach to global market growth.
            </p>
            <p>
              With over 20 years of experience in the wine business, Ivan Aquino leads with deep industry insight, commercial strategy, and a trusted global network. Alongside him, Marcos Marques contributes strategic development and business expansion expertise, ensuring every partnership is built for sustainable success.
            </p>
            <p className="text-accent font-medium">
              Together, we empower brands to reach new markets, maximize value, and create lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6 text-center">
            What We Do
          </h2>
          <p className="text-lg text-text/70 text-center mb-12">
            We help wine companies grow with clarity, strategy, and results:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              'Market Development & Expansion',
              'Brand Positioning & Portfolio Strategy',
              'Commercial & Distribution Partnerships',
              'Sales Strategy & Route-to-Market Support',
              'Private Label & Sourcing Solutions',
              'Consulting for Wineries, Distributors & Investors',
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white border border-primary/10 hover:border-accent/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                <span className="text-text font-medium">{service}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-text/70 italic">
            If you have a project, a wine to grow, or a market to enter — we can help.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-6 bg-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-10">
            Our Philosophy
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-white/90">
            <p>The world of wine evolves.</p>
            <p>Success demands experience, connection, and thoughtful action.</p>
            <p className="text-secondary font-medium">
              We believe in building brands with purpose, partners with integrity, and results that last.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-4 text-center">
            Contact
          </h2>
          <p className="text-lg text-text/70 text-center mb-12">
            Let's discuss your next market opportunity.
          </p>
          
          <div className="text-center mb-12">
            <a
              href="mailto:info@aimpartners.hk"
              className="text-xl text-accent hover:text-primary font-medium transition-colors"
            >
              info@aimpartners.hk
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-primary/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-primary/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-primary/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-accent text-white py-4 text-sm font-semibold uppercase tracking-wider transition-colors duration-300"
            >
              Send Message
            </button>
            {formStatus && (
              <p className="text-center text-sm text-text/70">{formStatus}</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-primary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/70 text-sm mb-2">
            AIM Partners Limited — Hong Kong / APAC
          </p>
          <p className="text-white/50 text-xs">
            © {currentYear} AIM Partners Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
