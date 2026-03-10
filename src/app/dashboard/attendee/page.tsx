'use client';

import { MOCK_EVENTS } from '@/lib/mock';
import Link from 'next/link';
import { Ticket, MapPin, Calendar, Clock, ArrowRightLeft, ExternalLink } from 'lucide-react';

export default function AttendeeDashboard() {
  const myTickets = MOCK_EVENTS.slice(2, 4);

  const handleTransfer = (id: string) => {
    const email = prompt("Enter the email address to transfer this ticket to:");
    if (email) {
      alert(`Transfer initiated to ${email}. They will receive an email shortly!`);
    }
  };

  return (
    <div className="container py-12 space-y-12 animate-in fade-in duration-700">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">My Experience Wallet</h1>
          <p className="text-muted mt-1">Access your tickets, manage transfers, and find your next memory.</p>
        </div>
        <Link href="/events" className="btn btn-primary">
          Discover More
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {myTickets.map((event) => (
          <div key={event.id} className="card group flex flex-col md:flex-row items-center gap-8 p-6 hover:border-primary transition-all">
             <div className="relative w-full md:w-48 h-32 rounded-2xl overflow-hidden border border-border">
                <img 
                  src={`https://images.unsplash.com/photo-${1501281668930 + parseInt(event.id) * 1000}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={event.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90 text-[10px] font-bold uppercase tracking-wider">
                  <Ticket className="w-3 h-3" />
                  Confirmed
                </div>
             </div>
             
             <div className="flex-1 space-y-3">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{event.title}</h3>
                <div className="flex flex-wrap gap-6 text-sm text-muted">
                   <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.date}
                   </div>
                   <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      {event.time}
                   </div>
                   <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {event.location}
                   </div>
                </div>
             </div>

             <div className="flex flex-col gap-3 w-full md:w-fit">
                <Link href={`/ticket/${event.id}`} className="btn btn-primary whitespace-nowrap">
                   <ExternalLink className="w-4 h-4" />
                   View Digital Ticket
                </Link>
                <button 
                  onClick={() => handleTransfer(event.id)} 
                  className="btn btn-outline text-xs uppercase tracking-widest font-bold bg-white/5"
                >
                   <ArrowRightLeft className="w-4 h-4" />
                   Transfer Ticket
                </button>
             </div>
          </div>
        ))}

        {myTickets.length === 0 && (
          <div className="card text-center py-20 bg-white/5 border-dashed border-2">
            <Ticket className="w-16 h-16 text-muted mx-auto mb-4 opacity-20" />
            <h3 className="text-xl font-bold">Your wallet is empty</h3>
            <p className="text-muted mt-2 mb-8">Ready to find your next great experience?</p>
            <Link href="/events" className="btn btn-primary px-8">Browse Events</Link>
          </div>
        )}
      </div>
    </div>
  );
}

