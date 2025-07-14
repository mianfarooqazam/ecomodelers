'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function WhyUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
    );
  }, []);

  return (
    <section className="eco-page-section" ref={sectionRef}>
      <h1 className="eco-page-title-above-line">Why Choose Eco Modelers</h1>
      <div className="eco-page-divider"></div>
      
      <div className="eco-page-content">
        <h2 className="eco-page-title">Sustainable Innovation at Its Core</h2>
        <p className="eco-page-desc">
          We are pioneers in sustainable business modeling, combining cutting-edge technology with environmental consciousness to create solutions that benefit both your business and the planet.
        </p>
        
        <div className="eco-features-grid" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="eco-feature-card" style={{ background: '#111', padding: '2rem', borderRadius: '12px', border: '1px solid #222' }}>
            <h3 style={{ color: '#0ce449', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '600' }}>Expert Sustainability</h3>
            <p style={{ color: '#fff', lineHeight: '1.6' }}>
              Our team consists of certified sustainability professionals with decades of combined experience in environmental modeling and green business practices.
            </p>
          </div>
          
          <div className="eco-feature-card" style={{ background: '#111', padding: '2rem', borderRadius: '12px', border: '1px solid #222' }}>
            <h3 style={{ color: '#0ce449', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '600' }}>Proven Results</h3>
            <p style={{ color: '#fff', lineHeight: '1.6' }}>
              We&apos;ve helped over 200+ companies reduce their carbon footprint by an average of 40% while increasing profitability through sustainable practices.
            </p>
          </div>
          
          <div className="eco-feature-card" style={{ background: '#111', padding: '2rem', borderRadius: '12px', border: '1px solid #222' }}>
            <h3 style={{ color: '#0ce449', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '600' }}>Innovation First</h3>
            <p style={{ color: '#fff', lineHeight: '1.6' }}>
              We leverage the latest AI and machine learning technologies to create predictive models that optimize both environmental impact and business performance.
            </p>
          </div>
          
          <div className="eco-feature-card" style={{ background: '#111', padding: '2rem', borderRadius: '12px', border: '1px solid #222' }}>
            <h3 style={{ color: '#0ce449', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '600' }}>Comprehensive Support</h3>
            <p style={{ color: '#fff', lineHeight: '1.6' }}>
              From initial assessment to implementation and ongoing optimization, we provide end-to-end support for your sustainability journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 