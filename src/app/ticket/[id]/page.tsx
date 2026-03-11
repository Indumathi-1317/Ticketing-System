'use client';

import { QRCodeCanvas } from 'qrcode.react';
import { MOCK_EVENTS } from '@/lib/mock';
import Link from 'next/link';
import { use } from 'react';

export default function Ticket({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const event = MOCK_EVENTS.find(e => e.id === resolvedParams.id);

  if (!event) {
    return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}><h2>Event not found</h2></div>;
  }

  // Generate a mock ticket ID
  const ticketId = `TKT-${event.id}-${Math.floor(Math.random() * 1000000)}`;

  return (
    <div className="container" style={{ padding: '4rem 0', display: 'flex', justifyContent: 'center' }}>
      <div className="card" style={{ maxWidth: '450px', width: '100%', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ height: '100px', background: event.imageUrl, margin: '-1.5rem -1.5rem 1.5rem -1.5rem' }}></div>

        <div style={{ padding: '1rem' }}>
          <div style={{ display: 'inline-block', background: 'white', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
            <QRCodeCanvas value={ticketId} size={200} />
          </div>

          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{event.title}</h2>
          <p className="text-muted" style={{ marginBottom: '1.5rem' }}>{event.date} • {event.time}</p>

          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px dashed var(--border-color)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <span className="text-sm text-muted" style={{ display: 'block' }}>Ticket ID</span>
              <span style={{ fontWeight: 600 }}>{ticketId}</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="text-sm text-muted" style={{ display: 'block' }}>Price</span>
              <span style={{ fontWeight: 600 }}>{event.price === 0 ? 'Free' : `$${event.price}`}</span>
            </div>
          </div>

          <p className="text-sm text-muted" style={{ marginBottom: '2rem' }}>
            Present this QR code at the entrance. Valid for 1 person.
          </p>

          <Link href="/events" className="btn btn-outline" style={{ width: '100%' }}>
            Browse More Events
          </Link>
        </div>
      </div>
    </div>
  );
}
