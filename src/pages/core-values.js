'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CoreValues() {
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
      <div className="eco-page-content">
        <h2 className="eco-page-title">The Principles That Drive Us</h2>
        <p className="eco-page-desc">
          Our core values are the foundation of everything we do. They guide our decisions, shape our relationships, and inspire our commitment to creating a sustainable future.
        </p>
        <div className="eco-values-grid" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
          <div className="eco-value-card" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#0ce449' }}>🌱</div>
            <h3 style={{ color: '#0ce449', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '600' }}>Sustainability First</h3>
            <p style={{ color: '#fff', lineHeight: '1.7', fontSize: '1.1rem' }}>
              Every decision we make prioritizes environmental impact. We believe that sustainable practices are not just good for the planet—they&apos;re essential for long-term business success.
            </p>
          </div>
          <div className="eco-value-card" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#0ce449' }}>💡</div>
            <h3 style={{ color: '#0ce449', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '600' }}>Innovation Excellence</h3>
            <p style={{ color: '#fff', lineHeight: '1.7', fontSize: '1.1rem' }}>
              We constantly push the boundaries of what&apos;s possible, leveraging cutting-edge technology to create solutions that are both innovative and environmentally responsible.
            </p>
          </div>
          <div className="eco-value-card" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#0ce449' }}>🌍</div>
            <h3 style={{ color: '#0ce449', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '600' }}>Global Impact</h3>
            <p style={{ color: '#fff', lineHeight: '1.7', fontSize: '1.1rem' }}>
              We recognize that environmental challenges are global, and we&apos;re committed to creating solutions that contribute to a healthier planet for future generations.
            </p>
          </div>
          <div className="eco-value-card" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#0ce449' }}>🎯</div>
            <h3 style={{ color: '#0ce449', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '600' }}>Purpose-Driven</h3>
            <p style={{ color: '#fff', lineHeight: '1.7', fontSize: '1.1rem' }}>
              Our work is driven by a higher purpose: to accelerate the transition to a sustainable economy while helping businesses thrive in the process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 