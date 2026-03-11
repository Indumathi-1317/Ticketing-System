'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<'attendee' | 'organizer'>('attendee');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement mock or actual Firebase sign-in
    alert(`Mock: ${isLogin ? 'Logged in' : 'Signed up'} as ${role}`);
  };

  return (
    <div className="container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px', margin: '2rem 0' }}>
        <h2 className="text-center" style={{ marginBottom: '0.5rem' }}>
          {isLogin ? 'Welcome Back' : 'Create an Account'}
        </h2>
        <p className="text-center text-muted" style={{ marginBottom: '2rem', fontSize: '0.875rem' }}>
          {isLogin ? 'Sign in to access your tickets and events.' : 'Join to discover or create amazing events.'}
        </p>

        <div className="flex" style={{ gap: '0.5rem', marginBottom: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.25rem', borderRadius: 'var(--radius-md)' }}>
          <button
            onClick={() => setRole('attendee')}
            style={{
              flex: 1, padding: '0.5rem', borderRadius: 'var(--radius-sm)',
              background: role === 'attendee' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              color: role === 'attendee' ? 'var(--foreground)' : 'var(--text-muted)',
            }}
          >
            Attendee
          </button>
          <button
            onClick={() => setRole('organizer')}
            style={{
              flex: 1, padding: '0.5rem', borderRadius: 'var(--radius-sm)',
              background: role === 'organizer' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              color: role === 'organizer' ? 'var(--foreground)' : 'var(--text-muted)',
            }}
          >
            Organizer
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name</label>
              <input type="text" id="name" className="form-input" placeholder="John Doe" required />
            </div>
          )}
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input type="email" id="email" className="form-input" placeholder="you@example.com" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input type="password" id="password" className="form-input" placeholder="••••••••" required />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center mt-6">
          <button onClick={() => setIsLogin(!isLogin)} style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 500 }}>
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}
