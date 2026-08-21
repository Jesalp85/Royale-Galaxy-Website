import React, { useState, useEffect } from 'react';
import { Ruler, Check, Sparkles, Download, Lock } from 'lucide-react';

export default function FloorPlanExplorer({ onOpenLeadModal }) {
  const [activePlan, setActivePlan] = useState('1bhk');
  const [activeSpecTab, setActiveSpecTab] = useState('living');
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return localStorage.getItem('royale_galaxy_unlocked') === 'true';
  });

  useEffect(() => {
    const handleUnlock = () => {
      setIsUnlocked(true);
    };
    window.addEventListener('royale_unlocked', handleUnlock);
    return () => window.removeEventListener('royale_unlocked', handleUnlock);
  }, []);

  const plans = {
    '1bhk': {
      title: '1 BHK Premium Balcony Residence',
      carpet: '350.00 Sq. Ft. RERA Carpet Area',
      layoutImg: '/assets/brochure-pages/page_20.jpg',
      features: [
        'Spacious Living Room (9\'0" x 14\'0")',
        'Dedicated Balcony / Flower Bed (2\'6" Wide)',
        'Master Bedroom (9\'0" x 10\'6")',
        'Efficient Kitchen (7\'0" x 7\'3")',
        'Modern Bathroom with Premium CP Fittings',
        'Zero Space Wastage Layout'
      ]
    },
    '2bhk': {
      title: '2 BHK Luxury Master Suite Residence',
      carpet: '478.00 - 487.00 Sq. Ft. RERA Carpet Area',
      layoutImg: '/assets/brochure-pages/page_21.jpg',
      features: [
        'Grand Living Room (9\'0" x 14\'0")',
        'Attached Private Balcony (2\'6" Wide)',
        'Master Bedroom with Ensuite Toilet (9\'0" x 11\'0")',
        'Second Bedroom (9\'0" x 10\'6")',
        'Separate Kitchen Space with SS Sink',
        'Dual Ventilation Windows for Fresh Air'
      ]
    },
    'typical': {
      title: 'Typical Floor Layout (Floors 2nd to 14th)',
      carpet: 'Optimum 6 Units Per Floor Configuration',
      layoutImg: '/assets/brochure-pages/page_18.jpg',
      features: [
        'Wide 5\'0" Common Passage',
        '2 High-Speed Passenger Elevators (Schindler/Kone)',
        '1 Dedicated Service Elevator',
        'Refuge Floor Provision on 8th & 13th Floors',
        'Well-lit Staircases with Emergency Fire Doors',
        'CCTV Surveillance in All Passages'
      ]
    },
    'commercial': {
      title: 'Ground Floor Commercial Arcade (Shops 1-26)',
      carpet: 'Shops Ranging from 7\'0" x 15\'0" to 12\'9" x 9\'0"',
      layoutImg: '/assets/brochure-pages/page_16.jpg',
      features: [
        'Main Malang Road High-Footfall Frontage',
        'Clear Glass Shop Elevation Provisions',
        'Independent Commercial Entry & Parking',
        'Ideal for Retail Outlets, Clinics, Cafes & Banks',
        'Separate Utility Meter Connections',
        'High ROI Rental Opportunity'
      ]
    }
  };

  const specs = {
    living: [
      'Vitrified Tile Flooring (High Durability & Gloss)',
      'Acrylic Emulsion Paint for Internal Walls & Ceilings',
      'Concealed Conduits with Fire-Resistant Copper Wiring',
      'Branded Modular Switches (Anchor/Legrand or equivalent)',
      'Teakwood Frame Main Door with Designer Shutter'
    ],
    bedroom: [
      'Premium Vitrified Tile Flooring',
      'TV & AC Electrical Cable Points',
      'Powder-Coated Aluminium Sliding Windows',
      'Granite Window Sills',
      'Wide Space for Wardrobe & King Size Bed'
    ],
    kitchen: [
      'Vitrified Tile Flooring',
      'Stainless Steel Single Bowl Sink',
      'Granite Kitchen Platform Counter',
      'Electrical Points for Water Purifier, Exhaust Fan & Refrigerator',
      'Dado Tiles up to Beam Height'
    ],
    bathroom: [
      'Anti-skid / Vitrified Flooring & Wall Tiles',
      'Finest Quality Sanitary Ware & CP Fittings',
      'Hot & Cold Diverter Valves for All Showers',
      'Concealed Plumbing Lines',
      'Exhaust Fan Point & Geyser Provision'
    ],
    building: [
      'Earthquake Resistant RCC Framed Structure',
      'High-Speed Schindler, Kone or Equivalent Elevators',
      '24/7 CCTV Surveillance & Integrated Fire Protection',
      'EV Car Charging Station Provision',
      'Solar Water Heating Panels & Rainwater Harvesting System'
    ]
  };

  const currentPlan = plans[activePlan];

  return (
    <section id="floorplans" className="section-padding" style={{ background: 'var(--bg-card)' }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 36px' }}>
          <div className="badge-gold" style={{ marginBottom: '12px' }}>
            <Ruler size={14} /> Precision Engineering & Space Optimization
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
            Thoughtfully Planned <span className="text-gold" style={{ display: 'inline-block' }}>Floor Layouts</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            Designed with zero space wastage and optimal natural airflow. Select a layout below to inspect exact RERA carpet areas.
          </p>
        </div>

        {/* Plan Category Tabs */}
        <div className="horizontal-scroll-track" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '32px', width: '100%' }}>
          {[
            { id: '1bhk', label: '1 BHK (350 Sq.Ft)' },
            { id: '2bhk', label: '2 BHK (478-487 Sq.Ft)' },
            { id: 'typical', label: 'Typical Tower Plan' },
            { id: 'commercial', label: 'Ground Floor Shops (1-26)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActivePlan(tab.id)}
              style={{
                padding: '10px 16px',
                borderRadius: '10px',
                border: activePlan === tab.id ? '1px solid var(--gold-primary)' : '1px solid rgba(255, 255, 255, 0.1)',
                background: activePlan === tab.id ? 'var(--gold-gradient)' : 'rgba(7, 10, 16, 0.6)',
                color: activePlan === tab.id ? '#070A10' : 'var(--text-primary)',
                fontWeight: activePlan === tab.id ? '700' : '500',
                cursor: 'pointer',
                transition: 'var(--transition)',
                fontSize: '0.85rem',
                textAlign: 'center'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Floorplan Viewer Card */}
        <div
          className="glass-panel"
          style={{
            padding: '24px 16px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
            alignItems: 'center',
            marginBottom: '48px'
          }}
        >
          {/* Left: Floor Plan Graphic */}
          <div
            className="hover-card-lift"
            onClick={() => {
              if (!isUnlocked) {
                onOpenLeadModal(`Unlock Layout Drawing: ${currentPlan.title}`);
              }
            }}
            style={{
              position: 'relative',
              background: isUnlocked ? '#FFF' : 'rgba(14, 20, 34, 0.95)',
              borderRadius: '12px',
              padding: '12px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
              textAlign: 'center',
              cursor: 'pointer',
              overflow: 'hidden',
              minHeight: '320px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: isUnlocked ? 'none' : '1px solid var(--border-gold-bright)'
            }}
          >
            {isUnlocked ? (
              <>
                <img
                  src={currentPlan.layoutImg}
                  alt={currentPlan.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '360px',
                    objectFit: 'contain',
                    borderRadius: '6px'
                  }}
                />
                <div
                  style={{
                    fontSize: '0.7rem',
                    color: '#64748B',
                    marginTop: '8px',
                    fontStyle: 'italic'
                  }}
                >
                  *RERA Carpet Area includes internal wall area along with room dimensions.
                </div>
              </>
            ) : (
              <>
                <img
                  src={currentPlan.layoutImg}
                  alt={currentPlan.title}
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover',
                    borderRadius: '6px',
                    filter: 'blur(16px) brightness(0.35)',
                    opacity: 0.4
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '20px',
                    background: 'rgba(7, 10, 16, 0.75)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      background: 'var(--gold-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#070A10',
                      boxShadow: '0 0 25px rgba(212, 175, 55, 0.6)'
                    }}
                  >
                    <Lock size={24} />
                  </div>
                  <h4 className="font-serif text-gold" style={{ fontSize: '1.15rem', textAlign: 'center' }}>
                    Floor Plan & Carpet Area Locked
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', textAlign: 'center', maxWidth: '280px', lineHeight: '1.4' }}>
                    Fill out the quick inquiry form to instantly unlock full layout drawings & RERA carpet area.
                  </p>
                  <button className="btn-gold pulse-animation" style={{ padding: '9px 18px', fontSize: '0.82rem', marginTop: '4px' }}>
                    <Lock size={14} /> Unlock Floor Plan Now
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Right: Plan Metrics & Highlights */}
          <div>
            <div className="badge-gold" style={{ marginBottom: '10px' }}>
              RERA Approved Unit
            </div>
            <h3 className="font-display text-gold" style={{ fontSize: '1.4rem', marginBottom: '6px' }}>
              {currentPlan.title}
            </h3>
            <div
              style={{
                color: 'var(--gold-light)',
                fontWeight: '700',
                fontSize: '0.98rem',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Ruler size={16} />{' '}
              {isUnlocked ? (
                currentPlan.carpet
              ) : (
                <span
                  onClick={() => onOpenLeadModal(`Unlock Carpet Area: ${currentPlan.title}`)}
                  style={{
                    color: 'var(--gold-light)',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Lock size={14} /> Carpet Area Locked (Fill Form to View)
                </span>
              )}
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ color: '#FFF', fontWeight: '700', fontSize: '0.92rem', marginBottom: '10px' }}>
                Key Layout Highlights:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                {currentPlan.features.map((feat, idx) => (
                  <div key={idx} className="hover-slide-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.85rem', padding: '4px 8px', borderRadius: '6px' }}>
                    <div className="icon-glow-target" style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={11} style={{ color: 'var(--gold-primary)' }} />
                    </div>
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <button
                onClick={() => onOpenLeadModal(`Request Pricing: ${currentPlan.title}`)}
                className="btn-gold"
                style={{ padding: '10px 18px', fontSize: '0.85rem' }}
              >
                Get Price & Availability
              </button>
              <button
                onClick={() => onOpenLeadModal(`Download Layout PDF: ${currentPlan.title}`)}
                className="btn-outline-gold"
                style={{ padding: '10px 16px', fontSize: '0.85rem' }}
              >
                <Download size={14} /> Download Layout Sheet
              </button>
            </div>
          </div>
        </div>

        {/* Specifications Tabbed Accordion */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h3 className="font-serif" style={{ fontSize: '1.35rem', color: '#FFF' }}>
              Internal & External <span className="text-gold">Building Specifications</span>
            </h3>
          </div>

          <div className="horizontal-scroll-track" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '20px', width: '100%' }}>
            {[
              { id: 'living', label: 'Living Room' },
              { id: 'bedroom', label: 'Bedrooms' },
              { id: 'kitchen', label: 'Kitchen' },
              { id: 'bathroom', label: 'Bathrooms' },
              { id: 'building', label: 'Building & Eco Features' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSpecTab(tab.id)}
                style={{
                  padding: '7px 14px',
                  borderRadius: '16px',
                  border: activeSpecTab === tab.id ? '1px solid var(--gold-primary)' : '1px solid rgba(255,255,255,0.08)',
                  background: activeSpecTab === tab.id ? 'rgba(212, 175, 55, 0.18)' : 'transparent',
                  color: activeSpecTab === tab.id ? 'var(--gold-light)' : 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  fontWeight: '600',
                  textAlign: 'center'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            className="glass-card hover-card-lift"
            style={{
              padding: '20px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '12px'
            }}
          >
            {specs[activeSpecTab].map((spec, idx) => (
              <div key={idx} className="hover-slide-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '6px', borderRadius: '6px' }}>
                <Sparkles size={14} className="icon-glow-target" style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: 'var(--text-primary)', fontSize: '0.85rem' }}>{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
