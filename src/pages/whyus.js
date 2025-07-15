'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import BlurFocus from "../components/BlurFocus";

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
    <section className="eco-hero-section" ref={sectionRef}>
     <div style={{ maxWidth: '1200px', width: '100%', color: '#fff', textAlign: 'center' }}>
      <h1 className="eco-hero-title" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          Why Us<br />
          <span className="eco-hero-highlight" style={{ display: 'inline-block' }}>
            <BlurFocus sentence="Sustainable Innovation" />
          </span>
        </h1>
        <p style={{ color: '#fff', fontSize: '1.3rem', lineHeight: '1.6', marginTop: '2rem', maxWidth: '700px', marginBottom: '1.5rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'justify' }}>
          <span style={{ fontWeight: '600', color: '#0ce449' }}>Ecomodelers</span> stands at the <span style={{ fontWeight: '600', color: '#0ce449' }}>forefront of energy optimization</span>, delivering comprehensive solutions across both built environments and industrial systems. Our <span style={{ fontWeight: '600', color: '#0ce449' }}>multidisciplinary team</span>—comprised of experts in mechanical engineering, energy systems, and HVAC—brings deep technical knowledge and practical experience to every project. Utilizing advanced platforms such as <span style={{ fontWeight: '600', color: '#0ce449' }}>eQuest, DesignBuilder, IES-VE,</span> and <span style={{ fontWeight: '600', color: '#0ce449' }}>RetScreen Expert</span>, we analyze and enhance energy performance with precision.
        </p>
        <div style={{ background: 'rgba(12, 228, 73, 0.08)', borderLeft: '4px solid #0ce449', padding: '1.5rem 2rem', borderRadius: '10px', maxWidth: '700px', margin: '0 auto 3rem auto', color: '#fff', fontSize: '1.15rem', lineHeight: '1.7', textAlign: 'justify' }}>
          We are committed to driving innovation in energy efficiency, system integration, and sustainability. Whether it&apos;s a complex industrial facility or a commercial building, our clients benefit from actionable strategies that reduce consumption, lower emissions, and deliver lasting value. <span style={{ fontWeight: '600', color: '#0ce449' }}>With Ecomodelers, you&apos;re not just meeting energy goals—you’re setting new standards for performance and responsibility.</span>
        </div>
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