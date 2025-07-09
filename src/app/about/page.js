'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AboutPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
    );
  }, []);

  return (
    <section className="eco-page-section" id="about-section" ref={sectionRef}>
      <h1 className="eco-page-title eco-page-title-above-line">About Us</h1>
      <p className="eco-page-desc">We are passionate about sustainable business growth. Our team brings together expertise from various industries to help companies thrive in a changing world.</p>
    </section>
  );
} 