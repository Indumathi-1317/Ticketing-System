import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Eventify | Premium Event Management',
  description: 'Manage and discover the best events. Buy tickets securely via Stripe.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navbar">
          <div className="container flex justify-between items-center">
            <Link href="/" className="nav-link" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--foreground)' }}>
              Eventify<span className="text-gradient">.</span>
            </Link>
            <div className="nav-links">
              <Link href="/events" className="nav-link">Explore Events</Link>
              <Link href="/login" className="btn btn-outline" style={{ padding: '0.4rem 1rem' }}>Login</Link>
            </div>
          </div>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
