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
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-primary/30`}>
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
           <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
              <Link href="/" className="group flex items-center gap-2">
                 <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white scale-90 group-hover:scale-100 group-hover:rotate-12 transition-all duration-300">
                    <span className="font-black text-xl">E</span>
                 </div>
                 <span className="text-2xl font-black tracking-tighter">
                   Eventify<span className="text-primary italic">.</span>
                 </span>
              </Link>
              
              <div className="hidden md:flex items-center gap-8">
                 <Link href="/events" className="text-sm font-bold text-muted hover:text-white transition-colors">Explore</Link>
                 <Link href="/dashboard/attendee" className="text-sm font-bold text-muted hover:text-white transition-colors">My Wallet</Link>
                 <Link href="/dashboard/organizer" className="text-sm font-bold text-muted hover:text-white transition-colors">Console</Link>
              </div>

              <div className="flex items-center gap-4">
                 <Link href="/login" className="px-6 py-2.5 rounded-2xl bg-white text-black text-sm font-black hover:bg-gray-200 transition-all active:scale-95 shadow-lg shadow-white/5">
                    Connect
                 </Link>
              </div>
           </nav>
        </header>
        
        <main className="pt-20">
          {children}
        </main>

        <footer className="border-t border-border/50 py-12 mt-20">
           <div className="container mx-auto px-6 text-center text-muted">
              <p className="text-xs font-bold uppercase tracking-[0.4em]">© 2026 Eventify Protocol Labs</p>
           </div>
        </footer>
      </body>
    </html>
  );
}
