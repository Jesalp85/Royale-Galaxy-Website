import React, { useState } from 'react';
import { MapPin, Navigation, Train, School, Cross, ShoppingBag, Clock } from 'lucide-react';

export default function LocationSection({ onOpenLeadModal }) {
  const [activeCategory, setActiveCategory] = useState('transit');

  const locations = {
    transit: [
      { name: 'Upcoming Metro Station', time: '05 Mins', detail: 'Line 5 Metro connection' },
      { name: 'Vithalwadi Railway Station', time: '10 Mins', detail: 'Central Line suburban rail' },
      { name: 'Dombivli Railway Station', time: '10 Mins', detail: 'Fast suburban transit' },
      { name: 'Kalyan Railway Station', time: '12 Mins', detail: 'Major Central Railway junction' },
      { name: 'Kalyan Dombivli Link Way', time: '02 Mins', detail: 'Direct arterial highway connection' },
      { name: 'Thane City Hub', time: '35 Mins', detail: 'Via Kalyan-Shilphata road' },
      { name: 'Navi Mumbai International Airport', time: '40 Mins', detail: 'Upcoming international airport' }
    ],
    education: [
      { name: 'Arya Gurukul Global School', time: '05 Mins', detail: 'CBSE affiliated premier school' },
      { name: 'Holy Cross English School', time: '05 Mins', detail: 'Reputed ICSE/State institution' },
      { name: 'Shivaji Rao Jondhale College', time: '05 Mins', detail: 'Engineering & Pharmacy campus' },
      { name: 'Saket College of Arts & Commerce', time: '10 Mins', detail: 'Higher education institution' },
      { name: 'Lok Kalyan Public School', time: '10 Mins', detail: 'K-12 English medium school' },
      { name: 'Ideal School & College', time: '10 Mins', detail: 'Secondary & Junior college' },
      { name: 'Model College Kalyan', time: '12 Mins', detail: 'Autonomous college campus' }
    ],
    medical: [
      { name: 'Suman Hospital', time: '02 Mins', detail: 'Multi-specialty emergency care' },
      { name: 'Adivali ICU Hospital', time: '02 Mins', detail: 'Critical ICU & trauma unit' },
      { name: 'Jan Kalyan Hospital', time: '05 Mins', detail: 'General healthcare & maternity' },
      { name: 'Fortis Hospital', time: '15 Mins', detail: 'Super-specialty tertiary care' },
      { name: 'AIMS Hospital Kalyan', time: '15 Mins', detail: 'Advanced medical diagnostics' }
    ],
    shopping: [
      { name: 'Patel Mart & R Mart', time: '05 Mins', detail: 'Daily grocery & superstore' },
      { name: 'Metro Junction Mall', time: '10 Mins', detail: 'INOX cinema, food court & retail' },
      { name: 'Sarvoday Mall', time: '10 Mins', detail: 'Shopping & entertainment hub' },
      { name: 'Reliance Smart Bazaar', time: '10 Mins', detail: 'Hypermarket shopping' },
      { name: 'D-Mart Kalyan East', time: '15 Mins', detail: 'Discount retail & household goods' }
    ]
  };

  const currentList = locations[activeCategory];

  return (
    <section id="location" className="section-padding" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 36px' }}>
          <div className="badge-gold" style={{ marginBottom: '12px' }}>
            <MapPin size={14} /> Prime Malang Road Connectivity
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(1.6rem, 4.5vw, 2.8rem)',
              color: '#FFF',
              marginBottom: '14px',
              wordBreak: 'break-word',
              overflowWrap: 'break-word'
            }}
          >
            Connected To Everything <span className="text-gold" style={{ display: 'inline-block' }}>That Matters</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
            Positioned in the rapidly advancing corridor of Kalyan East. Royale Galaxy offers effortless access to railway stations, upcoming metro, schools, and hospitals.
          </p>
        </div>

        {/* Location Category Tabs */}
        <div className="horizontal-scroll-track" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '32px', width: '100%' }}>
          {[
            { id: 'transit', label: 'Transit & Metro', icon: <Train size={14} /> },
            { id: 'education', label: 'Schools & Colleges', icon: <School size={14} /> },
            { id: 'medical', label: 'Hospitals & Care', icon: <Cross size={14} /> },
            { id: 'shopping', label: 'Malls & Retail', icon: <ShoppingBag size={14} /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '9px 16px',
                borderRadius: '24px',
                border: activeCategory === tab.id ? '1px solid var(--gold-primary)' : '1px solid rgba(255, 255, 255, 0.1)',
                background: activeCategory === tab.id ? 'var(--gold-gradient)' : 'rgba(14, 20, 34, 0.7)',
                color: activeCategory === tab.id ? '#070A10' : 'var(--text-secondary)',
                fontWeight: activeCategory === tab.id ? '700' : '500',
                cursor: 'pointer',
                transition: 'var(--transition)',
                fontSize: '0.82rem',
                textAlign: 'center'
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Layout: Left List, Right Map & Address */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'start'
          }}
        >
          {/* Distance Timeline Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {currentList.map((item, idx) => (
              <div
                key={idx}
                className="glass-card hover-slide-item"
                style={{
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  cursor: 'pointer'
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div className="title-glow-target" style={{ color: '#FFF', fontWeight: '700', fontSize: '0.92rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', marginTop: '2px' }}>{item.detail}</div>
                </div>
                <div
                  className="icon-glow-target"
                  style={{
                    background: 'rgba(212, 175, 55, 0.12)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: '16px',
                    padding: '4px 10px',
                    color: 'var(--gold-light)',
                    fontWeight: '700',
                    fontSize: '0.78rem',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    flexShrink: 0
                  }}
                >
                  <Clock size={12} /> {item.time}
                </div>
              </div>
            ))}
          </div>

          {/* Map & Address Box */}
          <div className="glass-panel hover-card-lift" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'var(--gold-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#070A10',
                  flexShrink: 0
                }}
              >
                <MapPin size={18} />
              </div>
              <div>
                <h3 className="font-serif" style={{ color: '#FFF', fontSize: '1.1rem' }}>
                  Site Address
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                  Adivali Dhokali, Malang Road, Kalyan East
                </p>
              </div>
            </div>

            {/* Embedded Interactive Map */}
            <div
              style={{
                width: '100%',
                height: '240px',
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid var(--border-gold)'
              }}
            >
              <iframe
                title="Royale Galaxy Site Location"
                src="https://maps.google.com/maps?q=Royale+Galaxy+Malang+Road+Adivali+Dhokali+Kalyan+East&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            <button
              onClick={() => onOpenLeadModal('Get Location Map & Directions')}
              className="btn-gold"
              style={{ justifyContent: 'center', padding: '11px', fontSize: '0.88rem' }}
            >
              <Navigation size={15} /> Get Driving Directions & Site Map
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
