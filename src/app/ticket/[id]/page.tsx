'use client';

import { MOCK_EVENTS } from '@/lib/mock';
import { TicketCard } from '@/components/TicketCard';
import Link from 'next/link';
import { use } from 'react';
import { Download, Share2, Info, ChevronLeft, Ticket, ExternalLink, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TicketWallet({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const event = MOCK_EVENTS.find(e => e.id === resolvedParams.id);

  if (!event) {
    return (
      <div className="container min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold mb-4">Ticket not found</h2>
        <Link href="/dashboard/attendee" className="btn btn-outline text-primary border-primary hover:bg-primary/5">
           Go to My Tickets
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-24">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] -z-10 opacity-30 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px] -z-10 opacity-30" />

      <div className="container px-4 py-12 max-w-4xl mx-auto">
        
        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
           <Link href="/dashboard/attendee" className="flex items-center gap-2 text-muted hover:text-white transition-colors group">
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold text-sm uppercase tracking-widest">Wallet</span>
           </Link>
           <div className="flex gap-4">
              <button className="p-3 rounded-2xl bg-card border border-border text-muted hover:text-primary transition-all shadow-lg active:scale-95">
                 <RefreshCw size={20} />
              </button>
              <button className="p-3 rounded-2xl bg-card border border-border text-muted hover:text-primary transition-all shadow-lg active:scale-95">
                 <Share2 size={20} />
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
           
           {/* Left: The Golden Ticket */}
           <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <TicketCard 
                id={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                price={event.price}
                userName="Alex Rivera"
                userEmail="alex.rivera@example.com"
                status="Active"
              />
           </div>

           {/* Right: Management Controls */}
           <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              <div className="space-y-2">
                 <h1 className="text-4xl font-black italic tracking-tighter">Your Access Pass</h1>
                 <p className="text-muted font-medium">Keep this ticket ready for check-in. This QR code is unique to you.</p>
              </div>

              {/* Status Tracker */}
              <div className="p-6 rounded-3xl bg-card border border-border shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 h-full w-1 bg-success" />
                 <h4 className="text-xs font-black uppercase text-muted tracking-widest mb-4">Verification Status</h4>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-2xl bg-success/10 flex items-center justify-center text-success">
                          <ShieldCheck size={28} />
                       </div>
                       <div>
                          <p className="font-black text-white">Verified</p>
                          <p className="text-[10px] text-muted font-bold tracking-widest uppercase">Blockchain IDs Sync Ready</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-xs font-bold text-muted">Confirmed on</p>
                       <p className="text-sm font-black text-white">{event.date}</p>
                    </div>
                 </div>
              </div>

              {/* Action Grid */}
              <div className="grid grid-cols-2 gap-4">
                 <button className="group p-6 rounded-[32px] bg-foreground text-background flex flex-col items-center gap-3 transition-all hover:opacity-90 active:scale-95">
                    <Download className="group-hover:translate-y-1 transition-transform" />
                    <span className="text-xs font-black uppercase tracking-widest">Save PDF</span>
                 </button>
                 <button className="group p-6 rounded-[32px] bg-primary text-white flex flex-col items-center gap-3 transition-all shadow-xl shadow-primary/20 active:scale-95">
                    <RefreshCw className="group-hover:rotate-180 duration-700 transition-transform" />
                    <span className="text-xs font-black uppercase tracking-widest">Update</span>
                 </button>
              </div>

              {/* Help & Details */}
              <div className="space-y-4">
                 <div className="p-6 rounded-[32px] bg-card/50 border border-border/50 hover:border-primary/30 transition-all">
                    <div className="flex gap-4">
                       <div className="shrink-0 w-10 h-10 rounded-xl bg-muted/20 flex items-center justify-center text-muted">
                          <Info size={20} />
                       </div>
                       <div className="space-y-1">
                          <h5 className="text-sm font-bold">Important Information</h5>
                          <p className="text-xs text-muted leading-relaxed">
                             Check-in starts 45 minutes before the event. Please ensure your device screen brightness is up for verification.
                          </p>
                       </div>
                    </div>
                 </div>

                 <div className="p-6 rounded-[32px] bg-card/50 border border-border/50 hover:border-secondary/30 transition-all flex items-center justify-between group cursor-pointer">
                    <div className="flex gap-4">
                       <div className="shrink-0 w-10 h-10 rounded-xl bg-muted/20 flex items-center justify-center text-muted">
                          <Ticket size={20} />
                       </div>
                       <div className="space-y-1">
                          <h5 className="text-sm font-bold group-hover:text-secondary transition-colors">Event Details</h5>
                          <p className="text-xs text-muted">View policies and organizer terms</p>
                       </div>
                    </div>
                    <ExternalLink size={16} className="text-muted group-hover:text-secondary translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function ShieldCheck({ size = 24, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
