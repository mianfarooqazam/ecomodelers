'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import BlurFocus from "../components/BlurFocus";
import SpotlightCard from "../components/SpotlightCard";

export default function Services() {
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
          We offer a full spectrum of sustainability services designed to transform your business operations and create lasting environmental impact.
        </p>
        <div className="eco-services-grid" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
          <SpotlightCard className="eco-service-card" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222' }}>
            <h3 style={{ color: '#0ce449', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '600', textAlign: 'center' }}>Buildings Energy Simulation and Analysis</h3>
            <p style={{ color: '#e0e0e0', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Comprehensive analysis of your current environmental impact, including carbon footprint calculation, resource usage assessment, and sustainability gap analysis.
            </p>
            <ul style={{ color: '#e0e0e0', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              <li>Carbon footprint measurement</li>
              <li>Resource efficiency audit</li>
              <li>Compliance gap analysis</li>
              <li>Stakeholder impact assessment</li>
            </ul>
          </SpotlightCard>
          
          <SpotlightCard className="eco-service-card" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222' }}>
            <h3 style={{ color: '#0ce449', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '600', textAlign: 'center' }}>Energy Assessment
            </h3>
            <p style={{ color: '#e0e0e0', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Development of customized sustainability roadmaps aligned with your business objectives and environmental goals.
            </p>
            <ul style={{ color: '#e0e0e0', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              <li>Goal setting and target development</li>
              <li>Implementation roadmap creation</li>
              <li>Risk assessment and mitigation</li>
              <li>Performance metrics definition</li>
            </ul>
          </SpotlightCard>
          
          <SpotlightCard className="eco-service-card" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222' }}>
            <h3 style={{ color: '#0ce449', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '600', textAlign: 'center' }}>Code Compliance and Certification
            </h3>
            <p style={{ color: '#e0e0e0', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Advanced predictive modeling using machine learning to optimize sustainability outcomes and business performance.
            </p>
            <ul style={{ color: '#e0e0e0', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              <li>Predictive analytics</li>
              <li>Scenario modeling</li>
              <li>Optimization algorithms</li>
              <li>Real-time monitoring</li>
            </ul>
          </SpotlightCard>
          
          <SpotlightCard className="eco-service-card" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222' }}>
            <h3 style={{ color: '#0ce449', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '600', textAlign: 'center' }}>Retrofit Solutions
            </h3>
            <p style={{ color: '#e0e0e0', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Hands-on support throughout the implementation process, ensuring successful adoption of sustainable practices.
            </p>
            <ul style={{ color: '#e0e0e0', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              <li>Change management</li>
              <li>Training and education</li>
              <li>Process optimization</li>
              <li>Technology integration</li>
            </ul>
          </SpotlightCard>
          
          <SpotlightCard className="eco-service-card" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222' }}>
            <h3 style={{ color: '#0ce449', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '600', textAlign: 'center' }}>Renewable Energy Integration
            </h3>
            <p style={{ color: '#e0e0e0', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Ongoing monitoring and reporting to track progress, identify opportunities, and ensure continuous improvement.
            </p>
            <ul style={{ color: '#e0e0e0', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              <li>KPI tracking</li>
              <li>Progress reporting</li>
              <li>Benchmark analysis</li>
              <li>Continuous optimization</li>
            </ul>
          </SpotlightCard>
          
          <SpotlightCard className="eco-service-card" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222' }}>
            <h3 style={{ color: '#0ce449', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '600', textAlign: 'center' }}>HVAC Optimization</h3>
            <p style={{ color: '#e0e0e0', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Assistance with sustainability certifications and compliance requirements to enhance your market position.
            </p>
            <ul style={{ color: '#e0e0e0', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              <li>ISO 14001 certification</li>
              <li>LEED compliance</li>
              <li>ESG reporting</li>
              <li>Regulatory compliance</li>
            </ul>
          </SpotlightCard>

          <SpotlightCard className="eco-service-card" style={{ background: '#111', padding: '2.5rem', borderRadius: '16px', border: '1px solid #222' }}>
            <h3 style={{ color: '#0ce449', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '600', textAlign: 'center' }}>Energy Audits for Buildings and Industry
            </h3>
            <p style={{ color: '#e0e0e0', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Assistance with sustainability certifications and compliance requirements to enhance your market position.
            </p>
            <ul style={{ color: '#e0e0e0', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              <li>ISO 14001 certification</li>
              <li>LEED compliance</li>
              <li>ESG reporting</li>
              <li>Regulatory compliance</li>
            </ul>
          </SpotlightCard>

          
        </div>
      </div>
    </section>
  );
} 