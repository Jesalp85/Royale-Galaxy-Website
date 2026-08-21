import React, { useState, useRef } from 'react';
import { ShieldCheck, MapPin, Download, Calendar, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onOpenLeadModal }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const tiltX = sectionRef.current ? ((mousePos.x / sectionRef.current.clientWidth) - 0.5) * -16 : 0;
  const tiltY = sectionRef.current ? ((mousePos.y / sectionRef.current.clientHeight) - 0.5) * -16 : 0;

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '90px',
        paddingBottom: '60px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background Image Layer with Parallax Shift */}
      <div
        style={{
          position: 'absolute',
          inset: '-20px',
          backgroundImage: `linear-gradient(to bottom, rgba(7, 10, 16, 0.55) 0%, rgba(7, 10, 16, 0.88) 70%, rgba(7, 10, 16, 1) 100%), url('/assets/3d-views/CAM-02 (ARIAL VIEW).jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: isHovered ? `translate3d(${tiltX}px, ${tiltY}px, 0) scale(1.04)` : 'scale(1)',
          transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.6s ease-out',
          zIndex: 0
        }}
      />

      {/* Mouse Spotlight Glow Layer */}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 1,
            background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.22) 0%, rgba(212, 175, 55, 0.06) 45%, transparent 75%)`,
            transition: 'background 0.05s ease-out'
          }}
        />
      )}

      {/* Floating Gold Cursor Halo */}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1.5px solid rgba(247, 231, 180, 0.8)',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.6), inset 0 0 10px rgba(212, 175, 55, 0.3)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 3,
            transition: 'transform 0.04s ease-out',
            background: 'rgba(212, 175, 55, 0.08)'
          }}
        />
      )}
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          {/* Developer Logo & RERA Badge Header */}
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <img
              src="/assets/royale-group-logo-light-cropped.png"
              alt="Royale Group"
              style={{
                height: '42px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.6))'
              }}
            />
            <div className="badge-gold pulse-animation" style={{ padding: '6px 12px', fontSize: 'clamp(0.68rem, 2.5vw, 0.8rem)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={14} style={{ flexShrink: 0 }} />
              <span>MAHARERA REGISTERED: PR1330002502267</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(1.7rem, 5.5vw, 4.2rem)',
              fontWeight: '700',
              lineHeight: '1.2',
              color: '#FFFFFF',
              marginBottom: '16px',
              letterSpacing: '-0.3px',
              wordBreak: 'break-word',
              overflowWrap: 'break-word'
            }}
          >
            ROYALE GALAXY <br />
            <span className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: '600', display: 'inline-block' }}>
              Where Luxury Becomes a Legacy
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
              color: 'var(--text-secondary)',
              maxWidth: '680px',
              marginBottom: '28px',
              lineHeight: '1.6'
            }}
          >
            A landmark residential tower by <strong style={{ color: '#FFF' }}>Royale Group</strong> in Kalyan East. Presenting luxury <strong style={{ color: 'var(--gold-light)' }}>1, 2, 3 & 4 BHK Balcony Homes</strong> with Sky Terrace Amenities, Grand Entrance Lobby, and seamless city access.
          </p>

          {/* Key USPs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '12px',
              marginBottom: '32px'
            }}
            className="hero-usps-grid"
          >
            {[
              { label: '05 Mins to Metro', sub: 'Upcoming Line 5 Station' },
              { label: 'Rooftop Sky Park', sub: 'Yoga, Gym & Gazebo' },
              { label: '85+ Parking Spaces', sub: 'Tower & Visitor Parking' },
              { label: 'Retail-Free Upper Tower', sub: 'Peaceful Private Living' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="hover-card-lift glass-card"
                style={{
                  background: 'rgba(14, 20, 34, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  cursor: 'pointer'
                }}
              >
                <CheckCircle2 size={16} className="icon-glow-target" style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
                <div style={{ minWidth: 0 }}>
                  <div className="title-glow-target" style={{ color: '#FFF', fontWeight: '700', fontSize: '0.84rem', lineHeight: '1.3' }}>{item.label}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.72rem', marginTop: '2px' }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <button
              onClick={() => onOpenLeadModal('Download Brochure')}
              className="btn-gold"
              style={{ padding: '13px 26px', fontSize: '0.92rem' }}
            >
              <Download size={16} /> Download Instant Brochure
            </button>

            <button
              onClick={() => onOpenLeadModal('Book Site Visit')}
              className="btn-outline-gold"
              style={{ padding: '12px 24px', fontSize: '0.9rem' }}
            >
              <Calendar size={16} /> Schedule VIP Site Visit
            </button>
          </div>

          {/* Address Tag */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '24px', color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
            <MapPin size={15} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
            <span>Malang Road, Near Varsha Complex, Adivali Dhokali, Kalyan (E) - 421306</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-usps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 380px) {
          .hero-usps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
