'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: number;
  imageUrl: string;
  capacity: number;
  ticketsSold: number;
  className?: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  date,
  time,
  location,
  price,
  imageUrl,
  capacity,
  ticketsSold,
  className,
}) => {
  const progress = Math.min((ticketsSold / capacity) * 100, 100);
  const isFree = price === 0;

  return (
    <Link href={`/events/${id}`} className={cn("group block", className)}>
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-primary/50">
        
        {/* Cover Image */}
        <div className="aspect-[16/9] relative overflow-hidden bg-muted">
           <div 
             className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
             style={{ backgroundImage: imageUrl.startsWith('linear-gradient') ? imageUrl : `url(${imageUrl})` }}
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
           
           {/* Price Badge */}
           <div className="absolute top-4 right-4">
              <span className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-black shadow-lg backdrop-blur-md",
                isFree ? "bg-success text-white" : "bg-primary text-white"
              )}>
                {isFree ? 'FREE' : `$${price}`}
              </span>
           </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
           <div className="space-y-1">
             <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest">
                <Calendar size={12} />
                <span>{date} • {time}</span>
             </div>
             <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-1">
                {title}
             </h3>
           </div>

           <div className="flex items-center gap-1.5 text-xs text-muted font-medium">
              <MapPin size={14} className="text-secondary" />
              <span className="line-clamp-1">{location}</span>
           </div>

           {/* Urgency Progress Bar */}
           <div className="space-y-2 pt-2">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                 <span className={cn(progress > 80 ? "text-error" : "text-muted")}>
                    {progress > 80 ? '🔥 Filling fast!' : 'Tickets remaining'}
                 </span>
                 <span className="text-foreground">{capacity - ticketsSold} left</span>
              </div>
              <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                 <div 
                   className={cn(
                     "h-full transition-all duration-1000 ease-out",
                     progress > 90 ? "bg-error" : progress > 70 ? "bg-secondary" : "bg-primary"
                   )}
                   style={{ width: `${progress}%` }}
                 />
              </div>
           </div>
        </div>
      </div>
    </Link>
  );
};
