'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateEvent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate event creation API call
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard/organizer');
    }, 1500);
  };

  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Create New Event</h1>

      <form onSubmit={handleCreate} className="card" style={{ padding: '2rem' }}>
        <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Event Details</h3>
        
        <div className="form-group">
          <label className="form-label" htmlFor="title">Event Title</label>
          <input type="text" id="title" className="form-input" required placeholder="Epic Summer Festival" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="desc">Description</label>
          <textarea id="desc" rows={4} className="form-input" required placeholder="Tell people what your event is about..." />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="date">Date</label>
            <input type="date" id="date" className="form-input" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="time">Time</label>
            <input type="time" id="time" className="form-input" required />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="location">Location</label>
          <input type="text" id="location" className="form-input" required placeholder="123 Example St, City, State" />
        </div>

        <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Ticketing</h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="price">Ticket Price ($)</label>
            <input type="number" id="price" className="form-input" required placeholder="0 for Free" min="0" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="capacity">Total Capacity</label>
            <input type="number" id="capacity" className="form-input" required placeholder="e.g. 500" min="1" />
          </div>
        </div>

        <div className="form-group mb-8">
           <label className="form-label" htmlFor="cover">Cover Image URL</label>
           <input type="url" id="cover" className="form-input" placeholder="https://..." />
        </div>

        <div className="flex justify-between items-center" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
          <button type="button" onClick={() => router.back()} className="btn btn-outline">Cancel</button>
          <button type="submit" disabled={loading} className="btn btn-primary" style={{ padding: '0.75rem 2.5rem' }}>
             {loading ? 'Publishing...' : 'Publish Event'}
          </button>
        </div>
      </form>
    </div>
  );
}
