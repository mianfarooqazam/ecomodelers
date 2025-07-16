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
     <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
      <h1 className="eco-hero-title" style={{ marginLeft: 'auto', marginRight: 'auto', color: '#0ce449' }}>
            Meet The Team Who Can Make It Possible<br />
            <span className="eco-hero-highlight" style={{ display: 'inline-block' }}>
           
          </span>
          </h1>
          
          
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