'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function InvestorsPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
    );
  }, []);

  return (
    <section className="eco-page-section" id="investors-section" ref={sectionRef}>
      <h1 className="eco-page-title eco-page-title-above-line">Investors</h1>
      <p className="eco-page-desc">Discover investment opportunities with us. We partner with forward-thinking investors to create lasting value and impact.</p>
    </section>
  );
} 