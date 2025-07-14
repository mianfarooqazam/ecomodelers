'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import BlurFocus from "../components/BlurFocus";

export default function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
    );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section className="eco-hero-section" ref={sectionRef}>
      <div style={{ maxWidth: '1200px', width: '100%', color: '#fff' }}>
        <h1 className="eco-hero-title">
          Transforming Business Through<br />
          <span className="eco-hero-highlight">
            <BlurFocus sentence="Sustainable Innovation" />
          </span>
        </h1>
        <p style={{ color: '#fff', fontSize: '1.3rem', lineHeight: '1.6', marginTop: '2rem', maxWidth: '600px', marginBottom: '3rem' }}>
          Let&apos;s discuss how we can help you achieve your sustainability goals while driving business growth. Get in touch with our team today.
        </p>
        <div className="eco-contact-grid" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          {/* Contact Form */}
          <div className="eco-contact-form" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222' }}>
            <h3 style={{ color: '#0ce449', fontSize: '1.8rem', marginBottom: '2rem', fontWeight: '600' }}>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required style={{ marginBottom: '1rem', width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #333', background: '#222', color: '#fff' }} />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required style={{ marginBottom: '1rem', width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #333', background: '#222', color: '#fff' }} />
              <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleInputChange} style={{ marginBottom: '1rem', width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #333', background: '#222', color: '#fff' }} />
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required style={{ marginBottom: '1rem', width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #333', background: '#222', color: '#fff', minHeight: '120px' }} />
              <button type="submit" style={{ background: 'linear-gradient(135deg, #ffb366, #ff8c00)', color: '#fff', padding: '1rem 2.5rem', borderRadius: '8px', border: 'none', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer', transition: 'transform 0.2s' }}>Send</button>
            </form>
          </div>
          <div className="eco-contact-info">
            <h3 style={{ color: '#ffb366', fontSize: '1.8rem', marginBottom: '2rem', fontWeight: '600' }}>Get in Touch</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem', color: '#ffb366', marginTop: '0.2rem' }}>📍</div>
                <div>
                  <h4 style={{ color: '#ffb366', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '600' }}>Office Location</h4>
                  <p style={{ color: '#e0e0e0', lineHeight: '1.6' }}>
                    123 Sustainability Drive<br />
                    Green Business District<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem', color: '#ffb366', marginTop: '0.2rem' }}>📧</div>
                <div>
                  <h4 style={{ color: '#ffb366', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '600' }}>Email</h4>
                  <p style={{ color: '#e0e0e0', lineHeight: '1.6' }}>
                    hello@ecomodelers.com<br />
                    support@ecomodelers.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 