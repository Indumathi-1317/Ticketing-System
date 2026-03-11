'use client';

import { MOCK_EVENTS } from '@/lib/mock';
import Link from 'next/link';
import { use } from 'react';

export default function GuestList({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const event = MOCK_EVENTS.find(e => e.id === resolvedParams.id);

  if (!event) {
    return <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}><h2>Event not found</h2></div>;
  }

  // Mock guest list
  const guests = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", ticketType: "General Admission", status: "Checked-in", timestamp: "7:45 PM" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", ticketType: "General Admission", status: "Checked-in", timestamp: "7:50 PM" },
    { id: 3, name: "Charlie Davis", email: "charlie@example.com", ticketType: "VIP", status: "Pending", timestamp: "-" },
    { id: 4, name: "Diana Prince", email: "diana@example.com", ticketType: "VIP", status: "Pending", timestamp: "-" },
  ];

  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem', maxWidth: '1000px' }}>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>Guest List</h1>
          <p className="text-muted">{event.title}</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-outline">Export CSV</button>
          <Link href="/dashboard/organizer" className="btn btn-primary">Back to Dashboard</Link>
        </div>
      </div>

      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '300px' }}>
            <input type="text" placeholder="Search guests..." className="form-input" style={{ width: '100%' }} />
          </div>
          <div>
            <span style={{ fontWeight: 600 }}>{guests.filter(g => g.status === 'Checked-in').length} / {guests.length}</span> Checked-in
          </div>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 500, color: 'var(--text-muted)' }}>Name</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 500, color: 'var(--text-muted)' }}>Email</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 500, color: 'var(--text-muted)' }}>Ticket Type</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 500, color: 'var(--text-muted)' }}>Status</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 500, color: 'var(--text-muted)' }}>Check-in Time</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest, idx) => (
              <tr key={guest.id} style={{ borderTop: '1px solid var(--border-color)', background: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.01)' }}>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>{guest.name}</td>
                <td style={{ padding: '1rem 1.5rem', color: '#cbd5e1' }}>{guest.email}</td>
                <td style={{ padding: '1rem 1.5rem' }}>{guest.ticketType}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <span style={{
                    color: guest.status === 'Checked-in' ? 'var(--success)' : '#eab308',
                    background: guest.status === 'Checked-in' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(234, 179, 8, 0.1)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.875rem'
                  }}>
                    {guest.status}
                  </span>
                </td>
                <td style={{ padding: '1rem 1.5rem', color: '#cbd5e1' }}>{guest.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
