'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Home() {
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
          <span className="eco-hero-highlight">Sustainable Innovation</span>
        </h1>
        
        <p style={{ 
          color: '#fff', 
          fontSize: '1.3rem', 
          lineHeight: '1.6', 
          marginTop: '2rem', 
          maxWidth: '600px',
          marginBottom: '3rem'
        }}>
          We help forward-thinking companies achieve environmental excellence while driving business growth. 
          Our AI-powered sustainability solutions create measurable impact for your bottom line and the planet.
        </p>
        
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '3rem' }}>
          <div style={{ 
            background: 'rgba(255,255,255,0.05)', 
            padding: '2rem', 
            borderRadius: '12px', 
            border: '1px solid rgba(255,255,255,0.1)',
            flex: '1',
            minWidth: '250px'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0ce449' }}>🌱</div>
            <h3 style={{ color: '#0ce449', fontSize: '1.3rem', marginBottom: '0.8rem', fontWeight: '600' }}>Carbon Reduction</h3>
            <p style={{ color: '#fff', lineHeight: '1.5' }}>
              Average 40% reduction in carbon emissions across all client projects
            </p>
          </div>
          
          <div style={{ 
            background: 'rgba(255,255,255,0.05)', 
            padding: '2rem', 
            borderRadius: '12px', 
            border: '1px solid rgba(255,255,255,0.1)',
            flex: '1',
            minWidth: '250px'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0ce449' }}>💰</div>
            <h3 style={{ color: '#0ce449', fontSize: '1.3rem', marginBottom: '0.8rem', fontWeight: '600' }}>Cost Savings</h3>
            <p style={{ color: '#fff', lineHeight: '1.5' }}>
              $2.3M average annual savings through sustainable optimization
            </p>
          </div>
          
          <div style={{ 
            background: 'rgba(255,255,255,0.05)', 
            padding: '2rem', 
            borderRadius: '12px', 
            border: '1px solid rgba(255,255,255,0.1)',
            flex: '1',
            minWidth: '250px'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0ce449' }}>🤖</div>
            <h3 style={{ color: '#0ce449', fontSize: '1.3rem', marginBottom: '0.8rem', fontWeight: '600' }}>AI-Powered</h3>
            <p style={{ color: '#fff', lineHeight: '1.5' }}>
              Machine learning algorithms optimize sustainability outcomes
            </p>
          </div>
        </div>
        
        <div style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <button style={{
            background: 'linear-gradient(135deg, #ffb366, #ff8c00)',
            color: '#fff',
            padding: '1rem 2.5rem',
            borderRadius: '8px',
            border: 'none',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Start Your Journey
          </button>
          
          <button style={{
            background: 'transparent',
            color: '#ffb366',
            padding: '1rem 2.5rem',
            borderRadius: '8px',
            border: '2px solid #ffb366',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#ffb366';
            e.target.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#ffb366';
          }}
          >
            View Our Portfolio
          </button>
        </div>
      </div>
    </section>
  );
} 