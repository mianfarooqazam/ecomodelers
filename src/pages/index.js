'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import BlurFocus from "../components/BlurFocus";

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
    <>
      <section className="eco-hero-section" ref={sectionRef}>
      <div style={{ maxWidth: '1200px', width: '100%', color: '#fff', textAlign: 'center' }}>
      <h1 className="eco-hero-title" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Transforming Business Through<br />
            <span className="eco-hero-highlight" style={{ display: 'inline-block' }}>
            <BlurFocus sentence="Sustainable Innovation" />
          </span>
          </h1>
          
          <p style={{ color: '#fff', fontSize: '1.3rem', lineHeight: '1.6', marginTop: '2rem', maxWidth: '700px', marginBottom: '1.5rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'justify' }}>
          Energy efficiency is no longer a luxury — it`&apos;s a necessity. Whether it`&apos;s a commercial high-rise, industrial facility, or residential building, Ecomodelers delivers smart energy solutions that reduce consumption, lower costs, and enhance sustainability.

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
              background: 'transparent',
              color: '#0ce449',
              padding: '1rem 2.5rem',
              borderRadius: '8px',
              border: '2px solid #0ce449',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#0ce449';
              e.target.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#0ce449';
            }}
            >
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </>
  );
} 