'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import BlurFocus from "../components/BlurFocus";

export default function Portfolio() {
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
      <div style={{ maxWidth: '1200px', width: '100%', color: '#fff' }}>
        <h1 className="eco-hero-title">
          Transforming Business Through<br />
          <span className="eco-hero-highlight">
            <BlurFocus sentence="Sustainable Innovation" />
          </span>
        </h1>
        <p style={{ color: '#fff', fontSize: '1.3rem', lineHeight: '1.6', marginTop: '2rem', maxWidth: '600px', marginBottom: '3rem' }}>
          Discover how we&apos;ve helped organizations across industries achieve remarkable sustainability outcomes while driving business growth.
        </p>
        <div className="eco-portfolio-grid" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2.5rem' }}>
          <div className="eco-portfolio-item" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginRight: '1rem', color: '#0ce449' }}>🏭</div>
              <div>
                <h3 style={{ color: '#0ce449', fontSize: '1.6rem', fontWeight: '600', marginBottom: '0.5rem' }}>Manufacturing Giant</h3>
                <p style={{ color: '#fff', fontSize: '0.9rem' }}>Fortune 500 Company</p>
              </div>
            </div>
            <p style={{ color: '#fff', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Reduced carbon emissions by 45% across 12 facilities while increasing production efficiency by 23%. Implemented AI-driven predictive maintenance that saved $2.3M annually.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>Carbon Reduction</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>AI Implementation</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>Cost Savings</span>
            </div>
          </div>
          
          <div className="eco-portfolio-item" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginRight: '1rem', color: '#0ce449' }}>🏢</div>
              <div>
                <h3 style={{ color: '#0ce449', fontSize: '1.6rem', fontWeight: '600', marginBottom: '0.5rem' }}>Tech Startup</h3>
                <p style={{ color: '#fff', fontSize: '0.9rem' }}>SaaS Platform</p>
              </div>
            </div>
            <p style={{ color: '#fff', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Achieved carbon-neutral operations within 18 months. Implemented sustainable cloud infrastructure that reduced energy costs by 60% while improving performance.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>Carbon Neutral</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>Cloud Optimization</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>Energy Efficiency</span>
            </div>
          </div>
          
          <div className="eco-portfolio-item" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginRight: '1rem', color: '#0ce449' }}>🏥</div>
              <div>
                <h3 style={{ color: '#0ce449', fontSize: '1.6rem', fontWeight: '600', marginBottom: '0.5rem' }}>Healthcare Network</h3>
                <p style={{ color: '#fff', fontSize: '0.9rem' }}>Regional Hospital System</p>
              </div>
            </div>
            <p style={{ color: '#fff', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Reduced medical waste by 38% and implemented sustainable procurement practices. Achieved LEED certification for 3 new facilities while cutting operational costs by 25%.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>Waste Reduction</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>LEED Certification</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>Cost Optimization</span>
            </div>
          </div>
          
          <div className="eco-portfolio-item" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginRight: '1rem', color: '#0ce449' }}>🏪</div>
              <div>
                <h3 style={{ color: '#0ce449', fontSize: '1.6rem', fontWeight: '600', marginBottom: '0.5rem' }}>Retail Chain</h3>
                <p style={{ color: '#fff', fontSize: '0.9rem' }}>National Retailer</p>
              </div>
            </div>
            <p style={{ color: '#fff', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Implemented sustainable supply chain practices across 200+ locations. Reduced packaging waste by 52% and achieved 30% reduction in transportation emissions.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>Supply Chain</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>Waste Reduction</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>Transportation</span>
            </div>
          </div>
          
          <div className="eco-portfolio-item" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginRight: '1rem', color: '#0ce449' }}>🏗️</div>
              <div>
                <h3 style={{ color: '#0ce449', fontSize: '1.6rem', fontWeight: '600', marginBottom: '0.5rem' }}>Construction Firm</h3>
                <p style={{ color: '#fff', fontSize: '0.9rem' }}>Commercial Construction</p>
              </div>
            </div>
            <p style={{ color: '#fff', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Achieved 40% reduction in construction waste and 35% improvement in energy efficiency across all projects. Implemented sustainable material sourcing practices.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>Waste Management</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>Energy Efficiency</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>Material Sourcing</span>
            </div>
          </div>
          
          <div className="eco-portfolio-item" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginRight: '1rem', color: '#0ce449' }}>🏦</div>
              <div>
                <h3 style={{ color: '#0ce449', fontSize: '1.6rem', fontWeight: '600', marginBottom: '0.5rem' }}>Financial Institution</h3>
                <p style={{ color: '#fff', fontSize: '0.9rem' }}>Investment Bank</p>
              </div>
            </div>
            <p style={{ color: '#fff', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Developed ESG investment framework that generated 15% higher returns than traditional portfolios. Achieved carbon-neutral operations across all global offices.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>ESG Framework</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>Carbon Neutral</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>Investment Returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 