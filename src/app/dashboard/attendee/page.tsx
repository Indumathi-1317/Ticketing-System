'use client';

import { MOCK_EVENTS } from '@/lib/mock';
import Link from 'next/link';

export default function AttendeeDashboard() {
  const myTickets = MOCK_EVENTS.slice(2, 4); // Mock two purchased tickets

  const handleTransfer = (id: string) => {
    const email = prompt("Enter the email address to transfer this ticket to:");
    if (email) {
      alert(`Transfer initiated to ${email}. They will receive an email shortly!`);
    }
  };

  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
      <div className="flex justify-between items-center mb-8">
        <h1 style={{ fontSize: '2.5rem', marginBottom: 0 }}>My Tickets</h1>
        <Link href="/events" className="btn btn-primary">
          Discover Events
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
        {myTickets.map((event) => (
          <div key={event.id} className="card" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem', padding: '1rem' }}>
             <div style={{ width: '150px', height: '100px', background: event.imageUrl, borderRadius: 'var(--radius-md)' }}></div>
             
             <div style={{ flex: 1 }}>
               <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{event.title}</h3>
               <p className="text-muted text-sm">{event.date} • {event.time}</p>
               <p className="text-muted text-sm mt-2">📍 {event.location}</p>
             </div>

             <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
               <Link href={`/ticket/${event.id}`} className="btn btn-secondary text-center">View QR Code</Link>
               <button onClick={() => handleTransfer(event.id)} className="btn btn-outline" style={{ color: 'var(--foreground)' }}>Transfer Ticket</button>
             </div>
          </div>
        ))}

        {myTickets.length === 0 && (
          <div className="card text-center" style={{ padding: '4rem 0' }}>
            <p className="text-muted mb-4" style={{ fontSize: '1.25rem' }}>You don't have any upcoming tickets.</p>
            <Link href="/events" className="btn btn-primary">Find an Event</Link>
          </div>
        )}
      </div>
    </div>
  );
}
