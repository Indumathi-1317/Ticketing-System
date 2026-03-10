'use client';

import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Calendar, MapPin, Clock, Ticket as TicketIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TicketCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: number;
  userName: string;
  userEmail: string;
  status: 'Active' | 'Used' | 'Transferred';
  className?: string;
}

export const TicketCard: React.FC<TicketCardProps> = ({
  id,
  title,
  date,
  time,
  location,
  price,
  userName,
  userEmail,
  status,
  className,
}) => {
  const ticketId = `TKT-${id}-${Math.floor(Math.random() * 1000000)}`;

  return (
    <div className={cn("relative max-w-md w-full mx-auto", className)}>
      {/* Golden Ticket Container */}
      <div className="bg-[#1e2128] border-2 border-border rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.02]">
        
        {/* Top Section - Branding/Event Image */}
        <div className="h-32 bg-gradient-to-r from-primary to-secondary relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse"></div>
            <h3 className="text-white text-3xl font-bold z-10 drop-shadow-lg tracking-wider uppercase italic">Admission</h3>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-6 relative">
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4 animate-in fade-in slide-in-from-top-2 duration-700">
             <span className={cn(
               "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest",
               status === 'Active' ? "bg-success/20 text-success border border-success/30" : 
               status === 'Used' ? "bg-muted/20 text-muted border border-muted/30" : 
               "bg-secondary/20 text-secondary border border-secondary/30"
             )}>
                {status}
             </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-black text-foreground tracking-tight leading-none">{title}</h2>
            <div className="flex items-center gap-2 text-muted text-sm font-medium">
               <Calendar size={14} /> <span>{date}</span>
               <span className="opacity-30">•</span>
               <Clock size={14} /> <span>{time}</span>
            </div>
          </div>

          {/* Ticket Information Grid */}
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border/50">
             <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-muted">Attendee</span>
                <p className="text-sm font-bold truncate leading-tight">{userName}</p>
                <p className="text-[10px] text-muted truncate">{userEmail}</p>
             </div>
             <div className="space-y-1 text-right">
                <span className="text-[10px] uppercase tracking-widest text-muted">Price</span>
                <p className="text-lg font-black text-success leading-tight">{price === 0 ? 'FREE' : `$${price}`}</p>
             </div>
          </div>

          <div className="flex items-start gap-2 pt-2 text-xs text-muted leading-relaxed">
             <MapPin size={12} className="mt-0.5 shrink-0" />
             <span>{location}</span>
          </div>

          {/* Perforated Divider */}
          <div className="relative h-px w-full border-t-2 border-dashed border-border/50 my-6">
             <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0f1115] border-r border-border/50"></div>
             <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0f1115] border-l border-border/50"></div>
          </div>

          {/* QR Code Section */}
          <div className="flex flex-col items-center justify-center space-y-4 pt-2">
             <div className="p-4 bg-white rounded-2xl shadow-inner-lg group transition-transform hover:scale-105 duration-500">
                <QRCodeCanvas 
                  value={ticketId} 
                  size={160} 
                  level="H"
                  includeMargin={false}
                  className="rounded-lg"
                />
             </div>
             <div className="text-center space-y-1">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-muted">Ticket ID</span>
                <p className="text-xs font-mono font-medium tracking-tighter opacity-70">{ticketId}</p>
             </div>
          </div>
        </div>

        {/* Footer Design Element */}
        <div className="h-6 bg-border/20 flex items-center justify-between px-8">
           {[...Array(12)].map((_, i) => (
             <div key={i} className="w-1.5 h-1.5 rounded-full bg-border/30"></div>
           ))}
        </div>
      </div>

      {/* Background Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-10 -z-10 animate-pulse"></div>
    </div>
  );
};
