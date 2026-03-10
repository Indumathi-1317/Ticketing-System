'use client';

import { MOCK_EVENTS } from '@/lib/mock';
import TicketCard from '@/components/TicketCard';
import Link from 'next/link';
import { use } from 'react';
import { ChevronLeft, Download, Share2 } from 'lucide-react';

export default function Ticket({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const event = MOCK_EVENTS.find(e => e.id === resolvedParams.id);

  if (!event) {
    return (
      <div className="container min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
        <h2 className="text-3xl font-bold">Ticket not found</h2>
        <Link href="/events" className="btn btn-primary">Browse Events</Link>
      </div>
    );
  }

  // Use a stable mock ticket ID for this view
  const ticketId = `E-TKT-${2026}${event.id}X99`;

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-2xl mx-auto space-y-8">
        
        {/* Navigation / Actions */}
        <div className="flex items-center justify-between animate-in fade-in slide-in-from-top-4 duration-700">
          <Link href="/dashboard/attendee" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors font-medium">
            <ChevronLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <div className="flex gap-2">
            <button className="p-2 border border-border rounded-lg hover:bg-white/5 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-2 border border-border rounded-lg hover:bg-white/5 transition-colors">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* The Golden Ticket */}
        <div className="flex justify-center py-4">
          <TicketCard 
            event={{
              title: event.title,
              date: event.date,
              time: event.time,
              location: event.location,
              imageUrl: `https://images.unsplash.com/photo-${1501281668930 + parseInt(event.id) * 1000}`,
              status: 'Active'
            }}
            ticketId={ticketId}
          />
        </div>

        {/* Helpful Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
           <div className="bg-card/50 border border-border p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                 <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
              </div>
              <div>
                 <h4 className="font-bold">Entry Information</h4>
                 <p className="text-sm text-muted mt-1 leading-relaxed">
                   Please arrive at least 30 minutes before the start time. Check-in is located at the main north entrance.
                 </p>
              </div>
           </div>

           <div className="bg-card/50 border border-border p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl">
                 <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
              </div>
              <div>
                 <h4 className="font-bold">Digital Only</h4>
                 <p className="text-sm text-muted mt-1 leading-relaxed">
                   Sustainable ticketing. No need to print this. Just show the QR code on your mobile device.
                 </p>
              </div>
           </div>
        </div>

        <div className="text-center pt-8 opacity-40 hover:opacity-100 transition-opacity">
           <p className="text-[10px] uppercase tracking-[0.3em] font-bold">Generated securely by Eventify Protocol</p>
        </div>
      </div>
    </div>
  );
}

