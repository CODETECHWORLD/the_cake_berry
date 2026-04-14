import React from 'react'

export default function Contact() {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [sent, setSent] = React.useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Build WhatsApp message
    const text = encodeURIComponent(
      `Hello The Cake Berry!\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919962744544?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="py-12 sm:py-20 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#14141c] mb-4">
              Get In <span className="text-[#c83c50]">Touch</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Ready to order your custom cake? Contact us today and let's create something special!
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10 sm:mb-16">

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#14141c] mb-2 flex items-center gap-3">
                  <i className="fa-solid fa-location-dot text-[#c83c50] text-2xl w-8"></i> Address
                </h3>
                <p className="text-gray-600 text-sm sm:text-base pl-11">
                  No69B, Dr Devaraj Nagar Rd, Mohan Nagar,<br />
                  Balaji Nagar, Madambakkam, Chennai,<br />
                  Tamil Nadu 600126
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#14141c] mb-2 flex items-center gap-3">
                  <i className="fa-solid fa-phone text-[#c83c50] text-2xl w-8"></i> Phone
                </h3>
                <a href="tel:09962744544" className="text-[#c83c50] font-semibold text-sm sm:text-base hover:underline pl-11 block">
                  099627 44544
                </a>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#14141c] mb-2 flex items-center gap-3">
                  <i className="fa-solid fa-clock text-[#c83c50] text-2xl w-8"></i> Hours
                </h3>
                <p className="text-gray-600 text-sm sm:text-base pl-11">
                  Monday – Sunday<br />
                  9:30 AM – 9:00 PM
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#14141c] mb-2 flex items-center gap-3">
                  <i className="fa-brands fa-whatsapp text-[#c83c50] text-2xl w-8"></i> WhatsApp
                </h3>
                <a
                  href="https://wa.me/919962744544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c83c50] font-semibold text-sm sm:text-base hover:underline pl-11 block"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-[#14141c] mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#f7eded] focus:outline-none focus:ring-2 focus:ring-[#c83c50] text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#14141c] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-[#f7eded] focus:outline-none focus:ring-2 focus:ring-[#c83c50] text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#14141c] mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your cake order..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#f7eded] focus:outline-none focus:ring-2 focus:ring-[#c83c50] text-sm resize-none"
                />
              </div>
              <button type="submit" className="btn btn-primary w-full py-3 text-sm sm:text-base">
                {sent
                  ? <span><i className="fa-solid fa-check mr-2"></i>Opening WhatsApp…</span>
                  : <span><i className="fa-brands fa-whatsapp mr-2"></i>Send via WhatsApp</span>
                }
              </button>
            </form>
          </div>

          {/* Showcase Image */}
          <div className="bg-[#f7eded] rounded-2xl h-64 sm:h-80 overflow-hidden shadow-md">
            <img
              src="public/cakes/cake-5.jpg"
              alt="Cake showcase"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
