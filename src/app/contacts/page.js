'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ContactsPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
    );
  }, []);

  return (
    <section className="eco-page-section" id="contacts-section" ref={sectionRef}>
      <h1 className="eco-page-title eco-page-title-above-line">Contacts</h1>
      <p className="eco-page-desc">Reach out to us at contact@growpartners.com or call us at (123) 456-7890. We look forward to connecting with you!</p>
    </section>
  );
} 