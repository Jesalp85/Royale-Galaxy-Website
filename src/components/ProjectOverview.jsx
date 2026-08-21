import React from 'react';
import { Award, Building2, Compass, Layers, Trees } from 'lucide-react';

export default function ProjectOverview() {
  const usps = [
    {
      icon: <Building2 className="gold-text-solid" size={24} />,
      title: 'Retail-Free Upper Tower',
      desc: 'Ground floor dedicated commercial arcade ensures serene, noise-free residential living above.'
    },
    {
      icon: <Layers className="gold-text-solid" size={24} />,
      title: 'Minimal Wastage Layouts',
      desc: 'Architecturally optimized floor plans guaranteeing maximum usable RERA carpet space in every room.'
    },
    {
      icon: <Trees className="gold-text-solid" size={24} />,
      title: 'Expansive Green Views',
      desc: 'Thoughtfully oriented apartments offering uninhibited fresh air and panoramic views of Malangad hills.'
    },
    {
      icon: <Compass className="gold-text-solid" size={24} />,
      title: 'Spacious Balcony Homes',
      desc: 'Dedicated 2\'6" wide balcony and flower beds attached to living rooms and bedrooms.'
    }
  ];

  const specs = [
    {
      team: 'Architect',
      name: 'Dilip Tambday & Associates',
      desc: 'Acclaimed structural architecture firm creating iconic urban facades.'
    },
    {
      team: 'RCC Structural Consultant',
      name: 'Aarna Structural Consultant',
      desc: 'Earthquake-resistant design adhering to latest IS code guidelines.'
    },
    {
      team: 'Legal Advisor',
      name: 'Adv. K.T. Jain & Associates',
      desc: 'Clear legal title, bank approvals, and 100% compliant documentation.'
    },
    {
      team: '3D Visualizer & Elevation',
      name: 'Aim Render',
      desc: 'Cutting-edge elevation visualization bringing architectural luxury to reality.'
    }
  ];

  return (
    <section id="overview" className="section-padding" style={{ position: 'relative', background: 'var(--bg-darker)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <img
              src="/assets/royale-group-logo-light-cropped.png"
              alt="Royale Group Logo"
              style={{ height: '54px', width: 'auto', objectFit: 'contain' }}
            />
          </div>
          <div className="badge-gold" style={{ marginBottom: '12px', display: 'inline-flex' }}>
            <Award size={14} /> 20+ Years Legacy of Trust
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
            Crafted For Modern Luxury & <span className="text-gold" style={{ display: 'inline-block' }}>Enduring Value</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.88rem, 2vw, 1.02rem)', lineHeight: '1.6' }}>
            For over two decades, <strong>Royale Group</strong> has been shaping the landscape of Kalyan with an unwavering commitment to quality engineering, transparent pricing, and timely delivery. Royale Galaxy stands as our flagship sky address.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginBottom: '60px'
          }}
        >
          {usps.map((usp, i) => (
            <div
              key={i}
              className="glass-card shimmer-card hover-card-lift"
              style={{
                padding: '24px 20px',
                border: '1px solid var(--border-gold)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <div
                className="icon-glow-target"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'rgba(212, 175, 55, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  flexShrink: 0
                }}
              >
                {usp.icon}
              </div>
              <h3 className="font-serif title-glow-target" style={{ fontSize: '1.18rem', color: '#FFF' }}>
                {usp.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: '1.5' }}>
                {usp.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Project Technical Highlights Strip */}
        <div
          className="glass-panel stats-strip-grid"
          style={{
            padding: '28px 20px',
            marginBottom: '60px',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            textAlign: 'center'
          }}
        >
          {[
            { val: '6,629.01 sq.mt', label: 'Project Built-up Area' },
            { val: 'Royale Galaxy', label: 'Flagship Luxury Project' },
            { val: '135 Units', label: 'Residential & Commercial' },
            { val: '85 Bays', label: 'Dedicated Parking Spaces' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="hover-card-lift"
              style={{
                padding: '12px',
                borderRadius: '10px',
                background: 'rgba(7, 10, 16, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                cursor: 'pointer'
              }}
            >
              <div className="font-display text-gold title-glow-target" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: '800' }}>
                {stat.val}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Project Consultant Credits */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 className="font-display" style={{ fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', color: '#FFF' }}>
              Masterminds Behind <span className="text-gold">Royale Galaxy</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              Collaborating with industry leaders in architecture, engineering, and legal compliance.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px'
            }}
          >
            {specs.map((spec, idx) => (
              <div
                key={idx}
                className="glass-card hover-card-lift"
                style={{
                  background: 'rgba(14, 20, 34, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '10px',
                  padding: '18px'
                }}
              >
                <div style={{ color: 'var(--gold-primary)', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                  {spec.team}
                </div>
                <div className="title-glow-target" style={{ color: '#FFF', fontWeight: '700', fontSize: '1rem', marginBottom: '6px' }}>
                  {spec.name}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                  {spec.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .stats-strip-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
