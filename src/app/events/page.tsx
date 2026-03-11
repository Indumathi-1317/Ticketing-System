import Link from 'next/link';
import { MOCK_EVENTS } from '@/lib/mock';
import { Search } from 'lucide-react';

export default function EventsList() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
      <div className="flex justify-between items-center mb-8">
        <h1 style={{ fontSize: '2.5rem', marginBottom: 0 }}>Explore Events</h1>
      </div>

      <div style={{ position: 'relative', marginBottom: '3rem' }}>
        <input
          type="text"
          placeholder="Search for events, cities, or categories..."
          className="form-input"
          style={{ paddingLeft: '3rem', fontSize: '1.125rem', height: '3.5rem' }}
        />
        <Search style={{ position: 'absolute', left: '1rem', top: '1rem', color: 'var(--border-color)', width: '20px', height: '20px' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
        {MOCK_EVENTS.map((event) => (
          <div key={event.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '180px', background: event.imageUrl, borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}></div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div className="flex justify-between mb-2">
                <span className="text-sm" style={{ color: 'var(--primary)', fontWeight: 600 }}>{event.date}</span>
                <span className="text-sm text-muted">{event.time}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{event.title}</h3>
              <p className="text-muted text-sm mb-4" style={{ flex: 1 }}>📍 {event.location}</p>

              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }} className="flex justify-between items-center">
                <span style={{ fontWeight: 600, fontSize: '1.25rem', color: event.price === 0 ? 'var(--success)' : 'inherit' }}>
                  {event.price === 0 ? 'Free' : `$${event.price}`}
                </span>
                <Link href={`/events/${event.id}`} className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
