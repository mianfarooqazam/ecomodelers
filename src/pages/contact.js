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
      <div style={{ maxWidth: '1200px', width: '100%', color: '#fff', textAlign: 'center' }}>
        <h1 className="eco-hero-title" style={{ marginLeft: 'auto', marginRight: 'auto',  color: '#0ce449' }}>
        How Can We Help ?<br />
          
        </h1>
        <p style={{ color: '#fff', fontSize: '1.3rem', lineHeight: '1.6', marginTop: '2rem', maxWidth: '600px', marginBottom: '3rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
        We’d love to hear from you! Whether you have a question, feedback, or a project in mind, just fill out the form or email us and we’ll get back to you quickly
        </p>
        <div className="eco-contact-grid" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
          {/* Contact Form on the left */}
          <div className="eco-contact-form" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}>
            <h3 style={{ color: '#0ce449', fontSize: '1.8rem', marginBottom: '2rem', fontWeight: '600', letterSpacing: '0.5px' }}>Send us a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required style={{ width: '100%', padding: '0.9rem', borderRadius: '8px', border: '1px solid #222', background: '#181818', color: '#fff', fontSize: '1rem', outline: 'none', transition: 'border 0.2s' }} />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required style={{ width: '100%', padding: '0.9rem', borderRadius: '8px', border: '1px solid #222', background: '#181818', color: '#fff', fontSize: '1rem', outline: 'none', transition: 'border 0.2s' }} />
              <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleInputChange} style={{ width: '100%', padding: '0.9rem', borderRadius: '8px', border: '1px solid #222', background: '#181818', color: '#fff', fontSize: '1rem', outline: 'none', transition: 'border 0.2s' }} />
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required style={{ width: '100%', padding: '0.9rem', borderRadius: '8px', border: '1px solid #222', background: '#181818', color: '#fff', fontSize: '1rem', minHeight: '120px', outline: 'none', transition: 'border 0.2s' }} />
              <button type="submit" style={{ background: 'linear-gradient(135deg, #0ce449 60%, #1aef7a 100%)', color: '#111', padding: '1rem 2.5rem', borderRadius: '8px', border: 'none', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer', transition: 'transform 0.2s', boxShadow: '0 2px 8px rgba(12,228,73,0.08)' }}>Send</button>
            </form>
          </div>
          {/* Contact Info on the right */}
          <div className="eco-contact-info" style={{ background: '#181818', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}>
            <h3 style={{ color: '#0ce449', fontSize: '1.8rem', marginBottom: '2rem', fontWeight: '600', letterSpacing: '0.5px' }}>Get in Touch</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                <div style={{ fontSize: '1.5rem', color: '#0ce449', marginTop: '0.2rem' }}>📍</div>
                <div>
                  <h4 style={{ color: '#0ce449', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '600' }}>Office Location</h4>
                  <p style={{ color: '#e0e0e0', lineHeight: '1.6', fontSize: '1rem', textAlign: 'justify' }}>
                    123 Sustainability Drive<br />
                    Green Business District<br />
                    Milan, Italy
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                <div style={{ fontSize: '1.5rem', color: '#0ce449', marginTop: '0.2rem' }}>📧</div>
                <div>
                  <h4 style={{ color: '#0ce449', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '600' }}>Email</h4>
                  <p style={{ color: '#e0e0e0', lineHeight: '1.6', fontSize: '1rem', textAlign: 'justify' }}>
                    hello@milanmodelers.com<br />
                    support@milanmodelers.com
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