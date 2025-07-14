'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

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
    <section className="eco-page-section" ref={sectionRef}>
      <h1 className="eco-page-title-above-line">Contact Us</h1>
      <div className="eco-page-divider"></div>
      
      <div className="eco-page-content">
        <h2 className="eco-page-title">Ready to Transform Your Business?</h2>
        <p className="eco-page-desc">
          Let&apos;s discuss how we can help you achieve your sustainability goals while driving business growth. Get in touch with our team today.
        </p>
        
        <div className="eco-contact-grid" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          {/* Contact Form */}
          <div className="eco-contact-form" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222' }}>
            <h3 style={{ color: '#0ce449', fontSize: '1.8rem', marginBottom: '2rem', fontWeight: '600' }}>Send us a Message</h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#fff',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #ffb366, #ff8c00)',
                  color: '#fff',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  marginTop: '1rem'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
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
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem', color: '#ffb366', marginTop: '0.2rem' }}>📞</div>
                <div>
                  <h4 style={{ color: '#ffb366', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '600' }}>Phone</h4>
                  <p style={{ color: '#e0e0e0', lineHeight: '1.6' }}>
                    +1 (415) 555-0123<br />
                    Mon-Fri: 9:00 AM - 6:00 PM PST
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem', color: '#ffb366', marginTop: '0.2rem' }}>💼</div>
                <div>
                  <h4 style={{ color: '#ffb366', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '600' }}>Business Hours</h4>
                  <p style={{ color: '#e0e0e0', lineHeight: '1.6' }}>
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '3rem', padding: '2rem', background: '#111', borderRadius: '12px', border: '1px solid #0ce449' }}>
              <h4 style={{ color: '#0ce449', fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '600' }}>Emergency Support</h4>
              <p style={{ color: '#fff', lineHeight: '1.6', marginBottom: '1rem' }}>
                For urgent sustainability compliance issues or immediate consultation needs, contact our 24/7 support line.
              </p>
              <p style={{ color: '#ffb366', fontWeight: '600' }}>
                Emergency: +1 (415) 555-9999
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 