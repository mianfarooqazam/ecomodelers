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
      <h1 className="eco-hero-title">
        An overnight success,<br />
        <span className="eco-hero-highlight">businesses</span> in the making
      </h1>
    </section>
  );
} 