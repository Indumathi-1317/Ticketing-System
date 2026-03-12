import Link from 'next/link';

export default function Home() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h1 style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
          Discover the Most <br />
          <span className="text-gradient">Bharat Events</span> near you.
        </h1>
        <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Your all-in-one platform for epic experiences. Book your tickets securely, track RSVPs, and manage your access with our digital QR ticketing.
        </p>
        <div className="flex gap-4 justify-center" style={{ justifyContent: 'center' }}>
          <Link href="/events" className="btn btn-primary" style={{ fontSize: '1.125rem' }}>
            Explore Events
          </Link>
          <Link href="/login?role=organizer" className="btn btn-outline" style={{ fontSize: '1.125rem' }}>
            Organize an Event
          </Link>
        </div>
      </section>

      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Trending Now</h2>
            <p className="text-muted">Don't miss out on these popular upcoming events.</p>
          </div>
          <Link href="/events" style={{ color: 'var(--primary)', fontWeight: '500' }}>View All →</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Mock Event 1 */}
          <div className="card">
            <div style={{ height: '180px', background: 'url("/indian_cultural_event_1773327220314.png") center/cover', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}></div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Vibrant Bollywood Night</h3>
            <p className="text-muted text-sm mb-4">🎵 Mumbai, MH • Apr 15, 2026</p>
            <div className="flex justify-between items-center">
              <span style={{ fontWeight: 600, fontSize: '1.5rem', color: 'var(--success)' }}>₹1,499</span>
              <Link href="/events/1" className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Get Tickets</Link>
            </div>
          </div>

          {/* Mock Event 2 */}
          <div className="card">
            <div style={{ height: '180px', background: 'url("/mumbai_tech_conference_1773327716138.png") center/cover', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}></div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>India Tech Summit</h3>
            <p className="text-muted text-sm mb-4">💻 Bangalore, KA • May 10, 2026</p>
            <div className="flex justify-between items-center">
              <span style={{ fontWeight: 600, fontSize: '1.5rem', color: 'var(--success)' }}>₹4,999</span>
              <Link href="/events/2" className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Get Tickets</Link>
            </div>
          </div>

          {/* Mock Event 3 */}
          <div className="card">
            <div style={{ height: '180px', background: 'url("/delhi_food_festival_1773327749790.png") center/cover', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}></div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Delhi Food Festival</h3>
            <p className="text-muted text-sm mb-4">🍔 New Delhi, DL • Jun 02, 2026</p>
            <div className="flex justify-between items-center">
              <span style={{ fontWeight: 600, fontSize: '1.5rem', color: 'var(--success)' }}>Free</span>
              <Link href="/events/3" className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>RSVP Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
