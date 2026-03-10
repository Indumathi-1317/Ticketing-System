import { MOCK_EVENTS } from '@/lib/mock';
import Link from 'next/link';
import { Calendar, MapPin, Clock, Share2, Heart, ShieldCheck, Ticket, Users, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

export default async function EventDetails({ params }: { params: { id: string } }) {
  const resolvedParams = await params;
  const event = MOCK_EVENTS.find(e => e.id === resolvedParams.id);

  if (!event) {
    return (
      <div className="container min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold mb-4">Event not found</h2>
        <Link href="/events" className="btn btn-outline">
           <ArrowLeft size={18} /> Back to Events
        </Link>
      </div>
    );
  }

  const progress = (event.ticketsSold / event.capacity) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="relative h-[50vh] w-full overflow-hidden">
         <div 
           className="absolute inset-0 bg-cover bg-center h-full w-full scale-105 blur-2xl opacity-50"
           style={{ backgroundImage: event.imageUrl.startsWith('linear-gradient') ? event.imageUrl : `url(${event.imageUrl})` }}
         />
         <div className="container relative h-full flex items-end pb-12">
            <div 
              className="w-full h-full max-h-[400px] rounded-[32px] overflow-hidden shadow-2xl border border-white/10"
              style={{ background: event.imageUrl.startsWith('linear-gradient') ? event.imageUrl : `url(${event.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
         </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
             <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                   <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-widest border border-primary/20">
                      {event.organizer}
                   </span>
                   <span className="text-muted text-sm">•</span>
                   <div className="flex items-center gap-1 text-muted text-sm font-medium">
                      <Users size={14} />
                      <span>{event.capacity} Capacity</span>
                   </div>
                </div>
                <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
                   {event.title}
                </h1>
                <p className="text-xl text-muted leading-relaxed font-medium">
                   Experience an unforgettable event that brings together the best of {event.title.toLowerCase()} in the heart of {event.location}.
                </p>
             </div>

             <div className="flex flex-wrap gap-8 items-center py-8 border-y border-border/50">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                      <Calendar size={24} />
                   </div>
                   <div>
                      <p className="text-xs font-black uppercase text-muted tracking-widest">Date</p>
                      <p className="font-bold">{event.date}</p>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <Clock size={24} />
                   </div>
                   <div>
                      <p className="text-xs font-black uppercase text-muted tracking-widest">Time</p>
                      <p className="font-bold">{event.time}</p>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-success/10 flex items-center justify-center text-success">
                      <MapPin size={24} />
                   </div>
                   <div>
                      <p className="text-xs font-black uppercase text-muted tracking-widest">Venue</p>
                      <p className="font-bold">{event.location}</p>
                   </div>
                </div>
             </div>

             {/* Rich Text Description */}
             <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-black mb-6">About this experience</h3>
                <div className="space-y-6 text-muted leading-loose text-lg">
                   <p>{event.description}</p>
                   <p>Join us at the premium venue in {event.location} for a night of {event.title}. This event features exclusive performances, high-end production, and a dedicated community of enthusiasts.</p>
                   <ul className="space-y-4 list-none p-0">
                      {[
                        'Professional sound and lighting systems',
                        'Expertly curated lineup of world-class performers',
                        'Interactive digital experiences and immersive stages',
                        'VIP access areas and complimentary beverage stations'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 bg-card/50 p-4 rounded-xl border border-border/50 transition-colors hover:border-primary/30">
                           <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                              <ShieldCheck size={12} className="text-primary" />
                           </div>
                           <span className="font-medium text-foreground/80">{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>
             </div>

             {/* Mock Map Integration */}
             <div>
                <h3 className="text-2xl font-black mb-6 italic">Location & Arrival</h3>
                <div className="h-80 rounded-[32px] overflow-hidden bg-muted relative border border-border">
                   <div className="absolute inset-0 bg-slate-800 opacity-80" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4 max-w-xs p-6 bg-card/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
                         <MapPin size={40} className="mx-auto text-secondary animate-bounce" />
                         <p className="text-sm font-bold leading-tight">{event.location}</p>
                         <button className="text-xs font-black uppercase tracking-widest text-primary hover:text-white transition-colors">
                            Open in Google Maps
                         </button>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4">
             <div className="sticky top-28 space-y-6">
                <div className="p-8 rounded-[32px] bg-card border-2 border-primary/20 shadow-[-20px_20px_60px_-15px_rgba(139,92,246,0.3)]">
                   <div className="flex justify-between items-center mb-8">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-muted italic">Ticket Price</span>
                      <p className="text-4xl font-black text-white">
                         {event.price === 0 ? 'FREE' : `$${event.price}`}
                      </p>
                   </div>

                   <div className="space-y-3 mb-10">
                      <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                         <span className={cn(progress > 80 ? "text-error" : "text-primary")}>
                            {progress > 80 ? "Selling fast! 🔥" : "Available Tickets"}
                         </span>
                         <span className="text-white">{event.availableTickets} left</span>
                      </div>
                      <div className="h-2 w-full bg-border/50 rounded-full overflow-hidden">
                         <div 
                           className={cn(
                             "h-full transition-all duration-1000",
                             progress > 90 ? "bg-error" : progress > 70 ? "bg-secondary" : "bg-primary"
                           )}
                           style={{ width: `${progress}%` }}
                         />
                      </div>
                   </div>

                   <div className="space-y-4">
                      <Link 
                        href={`/checkout/${event.id}`} 
                        className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-primary/30 active:scale-95 group"
                      >
                         <Ticket className="transition-transform group-hover:rotate-12" />
                         {event.price === 0 ? 'RESERVE NOW' : 'SECURE TICKETS'}
                      </Link>
                      <button className="w-full flex items-center justify-center gap-3 bg-muted/10 hover:bg-muted/20 text-foreground py-4 rounded-2xl font-bold transition-all border border-border">
                         <Share2 size={18} /> share
                      </button>
                   </div>

                   <p className="mt-8 text-[10px] text-center text-muted leading-relaxed font-bold uppercase tracking-widest">
                      ✓ Instant QR ticket delivery<br />
                      ✓ Secure encryption through Stripe<br />
                      ✓ 24/7 guest support available
                   </p>
                </div>

                <div className="p-6 rounded-3xl bg-secondary/5 border border-secondary/20">
                   <h4 className="text-sm font-black uppercase text-secondary tracking-widest mb-3 flex items-center gap-2">
                      <Heart size={14} fill="currentColor" /> Organizer Note
                   </h4>
                   <p className="text-xs text-muted leading-relaxed italic">
                      "We can't wait to see you there! We've prepared something truly special for this session. Doors open exactly 45 minutes before start."
                   </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
