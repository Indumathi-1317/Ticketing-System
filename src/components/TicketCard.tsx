'use client';

import { QRCodeCanvas } from 'qrcode.react';
import { cn } from '@/lib/utils';
import { Calendar, MapPin, Clock, Ticket as TicketIcon } from 'lucide-react';

interface TicketCardProps {
  event: {
    title: string;
    date: string;
    time: string;
    location: string;
    imageUrl?: string;
    status?: 'Active' | 'Used' | 'Transferred';
  };
  ticketId: string;
}

export default function TicketCard({ event, ticketId }: TicketCardProps) {
  const statusColors = {
    Active: 'bg-success/10 text-success border-success/20',
    Used: 'bg-muted/10 text-muted border-muted/20',
    Transferred: 'bg-secondary/10 text-secondary border-secondary/20',
  };

  return (
    <div className="max-w-md w-full mx-auto animate-in fade-in zoom-in duration-500">
      {/* Top Banner section */}
      <div 
        className="h-24 bg-cover bg-center rounded-t-2xl relative overflow-hidden flex items-end p-4 border-x border-t border-border"
        style={{ backgroundImage: event.imageUrl?.includes('gradient') ? event.imageUrl : `url(${event.imageUrl || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30'})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <h3 className="relative text-xl font-bold text-white tracking-tight">{event.title}</h3>
      </div>

      {/* Main Ticket Body */}
      <div className="bg-card border-x border-border p-6 space-y-6 relative overflow-hidden">
        {/* Left/Right Perforations (Visual effect) */}
        <div className="absolute -left-3 top-[-1px] w-6 h-6 bg-background rounded-full border border-border" />
        <div className="absolute -right-3 top-[-1px] w-6 h-6 bg-background rounded-full border border-border" />

        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-muted">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-muted">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{event.time}</span>
            </div>
            <div className="flex items-center gap-3 text-muted">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{event.location}</span>
            </div>
          </div>

          <div className={cn(
            "px-3 py-1 rounded-full text-xs font-bold border",
            statusColors[event.status || 'Active']
          )}>
            {event.status || 'Active'}
          </div>
        </div>

        {/* Perforation Line */}
        <div className="flex items-center gap-2 py-2">
          <div className="h-[1px] flex-1 border-t border-dashed border-border" />
          <TicketIcon className="w-4 h-4 text-border" />
          <div className="h-[1px] flex-1 border-t border-dashed border-border" />
        </div>

        {/* QR Code Section */}
        <div className="flex flex-col items-center justify-center space-y-4 pt-2">
          <div className="bg-white p-3 rounded-xl shadow-lg transform transition-transform hover:scale-105">
            <QRCodeCanvas 
              value={ticketId} 
              size={180} 
              level="H" 
              includeMargin={false}
              className="rounded-sm"
            />
          </div>
          <div className="text-center">
            <span className="text-[10px] text-muted uppercase tracking-[0.2em]">Scan for Entry</span>
            <p className="font-mono text-sm font-bold tracking-wider mt-1">{ticketId}</p>
          </div>
        </div>
      </div>

      {/* Bottom section with perforated edge effect */}
      <div className="bg-card border-x border-b border-border rounded-b-2xl p-4 pt-0 relative">
        <div className="absolute -left-3 top-[-1px] w-6 h-6 bg-background rounded-full border border-border shadow-inner" />
        <div className="absolute -right-3 top-[-1px] w-6 h-6 bg-background rounded-full border border-border shadow-inner" />
        
        {/* Ticket Perforated Edge Bottom */}
        <div className="pt-6 pb-2 border-t border-dashed border-border flex justify-center space-x-1 opacity-50">
           {Array.from({length: 12}).map((_, i) => (
             <div key={i} className="w-2 h-2 rounded-full bg-border" />
           ))}
        </div>
      </div>
    </div>
  );
}
