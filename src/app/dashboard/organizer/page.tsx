'use client';

import { MOCK_EVENTS } from '@/lib/mock';
import Link from 'next/link';

export default function OrganizerDashboard() {
  const organizerEvents = MOCK_EVENTS.slice(0, 2); // Mocking that this user organized the first two events

  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
      <div className="flex justify-between items-center mb-8">
        <h1 style={{ fontSize: '2.5rem', marginBottom: 0 }}>Organizer Dashboard</h1>
        <Link href="/events/new" className="btn btn-primary">
          + Create New Event
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
        {organizerEvents.map((event) => (
          <div key={event.id} className="card" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem', padding: '1rem' }}>
            <div style={{ width: '150px', height: '100px', background: event.imageUrl, borderRadius: 'var(--radius-md)' }}></div>

            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{event.title}</h3>
              <p className="text-muted text-sm">{event.date} • {event.time}</p>
            </div>

            <div style={{ textAlign: 'center', padding: '0 2rem' }}>
              <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 700 }}>{250 - event.availableTickets}</span>
              <span className="text-muted text-sm">Tickets Sold</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href={`/events/${event.id}/guests`} className="btn btn-outline">Guest List</Link>
              <button className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>Edit</button>
            </div>
          </div>
        ))}

        {organizerEvents.length === 0 && (
          <div className="card text-center" style={{ padding: '4rem 0' }}>
            <p className="text-muted mb-4" style={{ fontSize: '1.25rem' }}>You haven't created any events yet.</p>
            <Link href="/events/new" className="btn btn-primary">Create Your First Event</Link>
          </div>
        )}
      </div>
    </div>
  );
}
