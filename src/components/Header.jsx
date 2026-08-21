import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Download, Menu, X, ShieldCheck } from 'lucide-react';

export default function Header({ onOpenLeadModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: '3D Gallery', href: '#gallery' },
    { name: 'Residences & Plans', href: '#floorplans' },
    { name: 'Rooftop Amenities', href: '#amenities' },
    { name: 'Location', href: '#location' },
    { name: 'EMI Calculator', href: '#calculator' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(7, 10, 16, 0.95)' : 'linear-gradient(to bottom, rgba(7, 10, 16, 0.95), rgba(7, 10, 16, 0))',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.2)' : 'none',
        boxShadow: isScrolled ? '0 8px 25px rgba(0, 0, 0, 0.7)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        {/* Brand Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', minWidth: 0 }}>
          <img
            src="/assets/royale-group-logo-light-cropped.png"
            alt="Royale Group Logo"
            style={{
              height: '48px',
              width: 'auto',
              maxHeight: '48px',
              objectFit: 'contain',
              flexShrink: 0,
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5))'
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', gap: '24px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: '500',
                transition: 'color 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--gold-light)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <a
            href="tel:+919152525268"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: '600',
              padding: '6px 12px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            className="call-btn-desktop"
          >
            <Phone size={14} style={{ color: 'var(--gold-primary)' }} />
            +91 91 52 52 52 68
          </a>

          <button
            onClick={() => onOpenLeadModal('Download Brochure')}
            className="btn-outline-gold header-btn-desktop"
            style={{ padding: '7px 14px', fontSize: '0.82rem' }}
          >
            <Download size={14} /> Brochure
          </button>

          <button
            onClick={() => onOpenLeadModal('Book Site Visit')}
            className="btn-gold header-btn-desktop"
            style={{ padding: '8px 16px', fontSize: '0.82rem' }}
          >
            <Calendar size={14} /> Book Visit
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid var(--border-gold)',
              borderRadius: '8px',
              color: 'var(--gold-light)',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(7, 10, 16, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-gold)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            maxHeight: 'calc(100vh - 68px)',
            overflowY: 'auto'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal('Download Brochure');
              }}
              className="btn-outline-gold"
              style={{ justifyContent: 'center' }}
            >
              <Download size={16} /> Download E-Brochure
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal('Book Site Visit');
              }}
              className="btn-gold"
              style={{ justifyContent: 'center' }}
            >
              <Calendar size={16} /> Schedule VIP Site Visit
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .call-btn-desktop { display: flex !important; }
          .header-btn-desktop { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 1023px) {
          .header-btn-desktop { display: none !important; }
        }
        @media (max-width: 480px) {
          .header-subtitle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
