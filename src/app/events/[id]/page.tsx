import { MOCK_EVENTS } from '@/lib/mock';
import Link from 'next/link';

// In Next.js App router, dynamic route params must be awaited in page props 
// depending on next.js 15 version, but in generic usage they are props.params
export default async function EventDetails({ params }: { params: { id: string } }) {
  // We need to resolve params first for Next 15+
  const resolvedParams = await params;
  const event = MOCK_EVENTS.find(e => e.id === resolvedParams.id);

  if (!event) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>Event not found</h2>
        <Link href="/events" className="btn btn-outline mt-4">Back to Events</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '2rem 0', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ height: '300px', background: event.imageUrl, borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }}></div>
      
      <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{event.title}</h1>
            <p className="text-muted" style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
              Organized by <span style={{ color: 'var(--primary)', fontWeight: 500 }}>{event.organizer}</span>
            </p>
          </div>
          
          <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.05)', padding: '1rem 2rem', borderRadius: 'var(--radius-md)' }}>
            <span style={{ display: 'block', fontSize: '2rem', fontWeight: 700, color: event.price === 0 ? 'var(--success)' : 'inherit' }}>
              {event.price === 0 ? 'Free' : `$${event.price}`}
            </span>
            <span className="text-muted text-sm">{event.availableTickets} tickets left</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', margin: '2rem 0', padding: '1.5rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
          <div>
            <span className="text-muted text-sm mb-2" style={{ display: 'block' }}>Date and Time</span>
            <p style={{ fontWeight: 500 }}>{event.date} • {event.time}</p>
          </div>
          <div>
            <span className="text-muted text-sm mb-2" style={{ display: 'block' }}>Location</span>
            <p style={{ fontWeight: 500 }}>{event.location}</p>
          </div>
        </div>

        <div>
           <h3 style={{ marginBottom: '1rem' }}>About this event</h3>
           <p style={{ lineHeight: 1.8, color: '#e2e8f0' }}>{event.description}</p>
           <p style={{ lineHeight: 1.8, color: '#e2e8f0', marginTop: '1rem' }}>
             Join us for an unforgettable experience at {event.title}. Bring your friends, enjoy the atmosphere, and make memories that will last a lifetime. Check-in starts 1 hour before the event time.
           </p>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link href={`/checkout/${event.id}`} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.25rem' }}>
          {event.price === 0 ? 'RSVP Now' : 'Buy Ticket'}
        </Link>
      </div>
    </div>
  );
}
