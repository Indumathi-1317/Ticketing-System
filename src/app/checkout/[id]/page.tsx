'use client';

import { MOCK_EVENTS } from '@/lib/mock';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, use } from 'react';

export default function Checkout({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const resolvedParams = use(params);
  
  const event = MOCK_EVENTS.find(e => e.id === resolvedParams.id);

  if (!event) {
    return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}><h2>Event not found</h2></div>;
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      router.push(`/ticket/${event.id}`);
    }, 1500);
  };

  return (
    <div className="container" style={{ padding: '4rem 0', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Complete Registration</h1>

      <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{event.title}</h3>
        <p className="text-muted text-sm">{event.date} • {event.time}</p>
        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between' }}>
          <span>Total</span>
          <span style={{ fontWeight: 600, fontSize: '1.25rem' }}>{event.price === 0 ? 'Free' : `$${event.price}`}</span>
        </div>
      </div>

      <form onSubmit={handleCheckout} className="card" style={{ padding: '2rem' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Attendee Details</h3>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Full Name</label>
          <input type="text" id="name" className="form-input" required placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input type="email" id="email" className="form-input" required placeholder="john@example.com" />
        </div>

        {event.price > 0 && (
          <>
            <h3 style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>Payment Information</h3>
            <div className="form-group">
              <label className="form-label" htmlFor="card">Card Number</label>
              <input type="text" id="card" className="form-input" required placeholder="0000 0000 0000 0000" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="exp">Expiry</label>
                <input type="text" id="exp" className="form-input" required placeholder="MM/YY" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cvc">CVC</label>
                <input type="text" id="cvc" className="form-input" required placeholder="123" />
              </div>
            </div>
          </>
        )}

        <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
          {loading ? 'Processing...' : event.price === 0 ? 'Confirm RSVP' : `Pay $${event.price}`}
        </button>
      </form>
    </div>
  );
}
