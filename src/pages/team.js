'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Team() {
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
        <h2 className="eco-page-title">Meet the Sustainability Experts</h2>
        <p className="eco-page-desc">
          Our diverse team of sustainability professionals brings together decades of experience in environmental science, business strategy, and cutting-edge technology.
        </p>
        
        <div className="eco-team-grid" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
          <div className="eco-team-member" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222', textAlign: 'center' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #0ce449, #0a8d36)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              SM
            </div>
            <h3 style={{ color: '#0ce449', fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: '600' }}>Sarah Mitchell</h3>
            <p style={{ color: '#e0e0e0', fontSize: '1.1rem', marginBottom: '1rem' }}>Chief Sustainability Officer</p>
            <p style={{ color: '#e0e0e0', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Former VP of Environmental Affairs at Fortune 100 companies. PhD in Environmental Science with 15+ years leading sustainability initiatives.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem' }}>ESG Strategy</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem' }}>Carbon Management</span>
            </div>
          </div>
          
          <div className="eco-team-member" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222', textAlign: 'center' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #0ce449, #0a8d36)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              DJ
            </div>
            <h3 style={{ color: '#0ce449', fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: '600' }}>David Johnson</h3>
            <p style={{ color: '#e0e0e0', fontSize: '1.1rem', marginBottom: '1rem' }}>Head of AI & Analytics</p>
            <p style={{ color: '#e0e0e0', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Machine learning expert with focus on environmental modeling. Led AI teams at Google and developed predictive sustainability algorithms.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem' }}>Machine Learning</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem' }}>Predictive Analytics</span>
            </div>
          </div>
          
          <div className="eco-team-member" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222', textAlign: 'center' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #0ce449, #0a8d36)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              MC
            </div>
            <h3 style={{ color: '#0ce449', fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: '600' }}>Maria Chen</h3>
            <p style={{ color: '#e0e0e0', fontSize: '1.1rem', marginBottom: '1rem' }}>Director of Operations</p>
            <p style={{ color: '#e0e0e0', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Supply chain optimization specialist with expertise in circular economy principles. Former consultant at McKinsey Sustainability Practice.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem' }}>Supply Chain</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem' }}>Circular Economy</span>
            </div>
          </div>
          
          <div className="eco-team-member" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222', textAlign: 'center' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #0ce449, #0a8d36)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              RK
            </div>
            <h3 style={{ color: '#0ce449', fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: '600' }}>Robert Kim</h3>
            <p style={{ color: '#e0e0e0', fontSize: '1.1rem', marginBottom: '1rem' }}>Lead Data Scientist</p>
            <p style={{ color: '#e0e0e0', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              PhD in Environmental Engineering with focus on life cycle assessment. Developed carbon tracking systems used by 500+ companies globally.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem' }}>LCA Expert</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem' }}>Carbon Tracking</span>
            </div>
          </div>
          
          <div className="eco-team-member" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222', textAlign: 'center' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #0ce449, #0a8d36)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              AL
            </div>
            <h3 style={{ color: '#0ce449', fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: '600' }}>Amanda Lee</h3>
            <p style={{ color: '#e0e0e0', fontSize: '1.1rem', marginBottom: '1rem' }}>Senior Sustainability Consultant</p>
            <p style={{ color: '#e0e0e0', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Certified LEED AP with 12 years in green building certification. Specializes in sustainable infrastructure and renewable energy integration.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem' }}>LEED Expert</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem' }}>Green Building</span>
            </div>
          </div>
          
          <div className="eco-team-member" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222', textAlign: 'center' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #0ce449, #0a8d36)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              TP
            </div>
            <h3 style={{ color: '#0ce449', fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: '600' }}>Thomas Patel</h3>
            <p style={{ color: '#e0e0e0', fontSize: '1.1rem', marginBottom: '1rem' }}>Business Development Director</p>
            <p style={{ color: '#e0e0e0', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Former investment banker specializing in ESG investments. Helps clients understand the financial benefits of sustainability initiatives.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem' }}>ESG Investing</span>
              <span style={{ background: 'rgba(12,228,73,0.2)', color: '#0ce449', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem' }}>Financial Strategy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 