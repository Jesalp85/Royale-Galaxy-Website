import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export default function EmiCalculator({ onOpenLeadModal }) {
  const [loanAmount, setLoanAmount] = useState(3500000); // 35 Lakhs default
  const [interestRate, setInterestRate] = useState(8.5); // 8.5% default
  const [tenureYears, setTenureYears] = useState(20); // 20 years default

  const calculateEmi = () => {
    const p = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;
    if (p <= 0 || r <= 0 || n <= 0) return 0;
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const monthlyEmi = calculateEmi();
  const totalPayment = monthlyEmi * tenureYears * 12;
  const totalInterest = Math.max(0, totalPayment - loanAmount);
  const principalPercentage = Math.round((loanAmount / totalPayment) * 100) || 50;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="calculator" className="section-padding" style={{ background: 'var(--bg-card)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px' }}>
          <div className="badge-gold" style={{ marginBottom: '12px' }}>
            <Calculator size={14} /> Smart Financial Planning
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
            Home Loan <span className="text-gold" style={{ display: 'inline-block' }}>EMI Estimator</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            Calculate your monthly payment for 1 BHK or 2 BHK residences at Royale Galaxy. Major banks approved.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div
          className="glass-panel"
          style={{
            padding: '24px 16px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}
        >
          {/* Sliders Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {/* Loan Amount Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '600' }}>
                  Loan Amount
                </label>
                <span style={{ color: 'var(--gold-light)', fontWeight: '700', fontSize: '1rem' }}>
                  {formatCurrency(loanAmount)}
                </span>
              </div>
              <input
                type="range"
                min="1500000"
                max="8000000"
                step="100000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--gold-primary)',
                  cursor: 'pointer',
                  height: '6px'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.72rem', marginTop: '4px' }}>
                <span>₹15 Lakhs</span>
                <span>₹80 Lakhs</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '600' }}>
                  Interest Rate (p.a)
                </label>
                <span style={{ color: 'var(--gold-light)', fontWeight: '700', fontSize: '1rem' }}>
                  {interestRate}%
                </span>
              </div>
              <input
                type="range"
                min="7.0"
                max="12.0"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--gold-primary)',
                  cursor: 'pointer',
                  height: '6px'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.72rem', marginTop: '4px' }}>
                <span>7.0%</span>
                <span>12.0%</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '600' }}>
                  Loan Tenure
                </label>
                <span style={{ color: 'var(--gold-light)', fontWeight: '700', fontSize: '1rem' }}>
                  {tenureYears} Years
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--gold-primary)',
                  cursor: 'pointer',
                  height: '6px'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.72rem', marginTop: '4px' }}>
                <span>5 Years</span>
                <span>30 Years</span>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div
            className="glass-card hover-card-lift shimmer-card"
            style={{
              background: 'rgba(7, 10, 16, 0.85)',
              border: '1px solid var(--border-gold)',
              borderRadius: '12px',
              padding: '24px 18px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Estimated Monthly EMI
              </div>
              <div className="font-display text-gold" style={{ fontSize: 'clamp(2rem, 5vw, 2.6rem)', fontWeight: '800', margin: '6px 0' }}>
                {formatCurrency(monthlyEmi)}
              </div>
              <div style={{ color: 'var(--gold-light)', fontSize: '0.78rem' }}>
                Per Month
              </div>
            </div>

            {/* Breakdown Stats */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Principal Loan:</span>
                <span style={{ color: '#FFF', fontWeight: '700' }}>{formatCurrency(loanAmount)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Total Interest:</span>
                <span style={{ color: '#FFF', fontWeight: '700' }}>{formatCurrency(totalInterest)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: '700' }}>
                <span style={{ color: 'var(--text-primary)' }}>Total Repayment:</span>
                <span style={{ color: 'var(--gold-light)' }}>{formatCurrency(totalPayment)}</span>
              </div>
            </div>

            {/* Visual ratio bar */}
            <div style={{ width: '100%' }}>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden', display: 'flex' }}>
                <div style={{ width: `${principalPercentage}%`, background: 'var(--gold-primary)' }} />
                <div style={{ width: `${100 - principalPercentage}%`, background: '#3B82F6' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', marginTop: '4px', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--gold-primary)' }}>Principal ({principalPercentage}%)</span>
                <span style={{ color: '#3B82F6' }}>Interest ({100 - principalPercentage}%)</span>
              </div>
            </div>

            <button
              onClick={() => onOpenLeadModal(`Bank Loan Assistance for ${formatCurrency(loanAmount)}`)}
              className="btn-gold"
              style={{ width: '100%', justifyContent: 'center', padding: '11px', fontSize: '0.86rem' }}
            >
              Check Pre-Approved Bank Offers <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
