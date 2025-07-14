'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CompaniesPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
    );
  }, []);

  return (
    <section className="eco-page-section" id="companies-section" ref={sectionRef}>
      <h1 className="eco-page-title eco-page-title-above-line">Companies</h1>
      <p className="eco-page-desc">Meet the innovative companies we work with. Each one is committed to driving positive change in their industry.</p>
    </section>
  );
} 