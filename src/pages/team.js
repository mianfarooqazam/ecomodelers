'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import BlurFocus from "../components/BlurFocus";
import ProfileCard from "../components/ProfileCard";
import "../components/ProfileCard.css";

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
    <section className="eco-hero-section" ref={sectionRef}>
    
         <div style={{ maxWidth: '1200px', width: '100%', color: '#fff', textAlign: 'center' }}>
      <h1 className="eco-hero-title" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      Meet The Team <br />
            <span className="eco-hero-highlight" style={{ display: 'inline-block' }}>
            <BlurFocus sentence="Together, we’re more than a team" />
          </span>
          </h1>
          
          {/* <p style={{ color: '#fff', fontSize: '1.3rem', lineHeight: '1.6', marginTop: '2rem', maxWidth: '700px', marginBottom: '1.5rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'justify' }}>
          At the heart of our success is a passionate, diverse, and driven team. Every member brings unique skills, creativity, and commitment to excellence. Together, we push boundaries, embrace innovation, and deliver outstanding results.

          </p> */}
          
        <div className="eco-team-grid" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
          <ProfileCard
            name="Zahid Ullah"
            title="Chief Sustainability Officer"
            handle="zahidullah"
            status="Online"
            contactText="Contact"
            avatarUrl="/profile.jpg"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact Zahid')}
          />
          <ProfileCard
            name="David Johnson"
            title="Head of AI & Analytics"
            handle="davidjohnson"
            status="Online"
            contactText="Contact"
            avatarUrl="/eco-logo.jpeg"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact David')}
          />
          <ProfileCard
            name="Maria Chen"
            title="Director of Operations"
            handle="mariachen"
            status="Online"
            contactText="Contact"
            avatarUrl="/eco-logo.jpeg"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact Maria')}
          />
          <ProfileCard
            name="Robert Kim"
            title="Lead Data Scientist"
            handle="robertkim"
            status="Online"
            contactText="Contact"
            avatarUrl="/eco-logo.jpeg"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact Robert')}
          />
          <ProfileCard
            name="Amanda Lee"
            title="Senior Sustainability Consultant"
            handle="amandalee"
            status="Online"
            contactText="Contact"
            avatarUrl="/eco-logo.jpeg"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact Amanda')}
          />
          <ProfileCard
            name="Thomas Patel"
            title="Business Development Director"
            handle="thomaspatel"
            status="Online"
            contactText="Contact"
            avatarUrl="/eco-logo.jpeg"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact Thomas')}
          />
        </div>
      </div>
    </section>
  );
} 