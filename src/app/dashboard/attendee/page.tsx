'use client';

import { MOCK_EVENTS } from '@/lib/mock';
import Link from 'next/link';
import { 
  Plus, 
  MapPin, 
  Calendar, 
  Ticket as TicketIcon, 
  Search, 
  ChevronRight, 
  CreditCard,
  History,
  Compass,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AttendeeDashboard() {
  const myTickets = MOCK_EVENTS.slice(2, 5); // Mock purchased tickets

  return (
    <div className="min-h-screen bg-[#0f1115]">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container px-4 py-12 md:py-20 mx-auto space-y-16">
        
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
           <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
                 <Compass size={14} />
                 <span>Attendee Portal</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter shrink-0">Hey, Alex!</h1>
              <p className="text-muted font-medium max-w-sm">Ready for your next experience? Here are your upcoming events.</p>
           </div>
           <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none p-4 rounded-2xl bg-card border border-border text-muted hover:text-white transition-all shadow-lg active:scale-95">
                 <History size={24} />
              </button>
              <button className="flex-1 md:flex-none p-4 rounded-2xl bg-card border border-border text-muted hover:text-white transition-all shadow-lg active:scale-95">
                 <Settings size={24} />
              </button>
              <Link href="/events" className="flex-[2] md:flex-none inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-gray-200 transition-all shadow-xl active:scale-95">
                 <span>Discover</span>
                 <ArrowRight size={16} />
              </Link>
           </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <QuickStat label="Upcoming Events" value={myTickets.length} icon={Calendar} color="primary" />
           <QuickStat label="Total Experience Hours" value="24h" icon={History} color="secondary" />
           <QuickStat label="Saved Experiences" value="12" icon={Heart} color="error" />
        </div>

        {/* Ticket Feed */}
        <div className="space-y-8">
           <div className="flex items-center justify-between border-b border-border/50 pb-4">
              <h2 className="text-xl font-black flex items-center gap-3">
                 <TicketIcon className="text-primary rotate-12" />
                 Your Active Tickets
              </h2>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">View all history</span>
           </div>

           <div className="grid grid-cols-1 gap-6">
              {myTickets.map((event) => (
                <Link 
                  key={event.id}
                  href={`/ticket/${event.id}`}
                  className="group relative overflow-hidden p-1 rounded-[32px] transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                   {/* Gradient Border Glow */}
                   <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-border to-secondary/20 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]" />
                   
                   <div className="bg-card border border-border rounded-[31px] p-6 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                      {/* Event Image */}
                      <div 
                        className="w-full md:w-32 h-32 rounded-2xl shrink-0 overflow-hidden relative shadow-lg"
                        style={{ background: event.imageUrl, backgroundSize: 'cover' }}
                      >
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                         <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                            <span className="text-[10px] font-black text-white uppercase tracking-tighter">Verified</span>
                         </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1 space-y-4 text-center md:text-left">
                         <div className="space-y-1">
                            <h3 className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">{event.title}</h3>
                            <p className="text-xs font-bold text-muted flex justify-center md:justify-start items-center gap-3 uppercase tracking-widest">
                               <span className="flex items-center gap-1.5"><Calendar size={12} /> {event.date}</span>
                               <span className="opacity-20">•</span>
                               <span className="flex items-center gap-1.5"><MapPin size={12} /> {event.location}</span>
                            </p>
                         </div>
                         <div className="flex flex-wrap justify-center md:justify-start gap-2">
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-muted">General Admission</span>
                            <span className="px-3 py-1 bg-success/10 border border-success/20 rounded-lg text-[10px] font-black uppercase tracking-widest text-success flex items-center gap-1.5">
                               <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                               Active Access
                            </span>
                         </div>
                      </div>

                      {/* Management */}
                      <div className="flex flex-col gap-2 w-full md:w-auto">
                         <button className="w-full px-8 py-3 rounded-2xl bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                            Open QR <ChevronRight size={14} />
                         </button>
                         <button className="w-full px-8 py-3 rounded-2xl bg-muted/10 text-muted text-xs font-black uppercase tracking-widest border border-border hover:bg-white/5 transition-all">
                            Transfer
                         </button>
                      </div>
                   </div>
                </Link>
              ))}
           </div>
        </div>

        {/* Discovery Feed Preview */}
        <div className="space-y-8 pt-8">
           <div className="flex items-center justify-between border-b border-border/50 pb-4">
              <h2 className="text-xl font-black flex items-center gap-3">
                 <Compass className="text-secondary rotate-12" />
                 Suggested For You
              </h2>
              <Link href="/events" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:underline transition-all underline-offset-4">Explore More</Link>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {MOCK_EVENTS.slice(0, 4).map(e => (
                <Link key={e.id} href={`/events/${e.id}`} className="group space-y-3">
                   <div className="aspect-square rounded-3xl overflow-hidden bg-card border border-border relative">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ background: e.imageUrl }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                   </div>
                   <p className="text-xs font-black truncate group-hover:text-primary transition-colors">{e.title}</p>
                </Link>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}

function QuickStat({ label, value, icon: Icon, color }: any) {
  return (
    <div className="p-8 rounded-[32px] bg-card border border-border shadow-xl space-y-4 hover:border-primary/40 transition-all group">
       <div className={cn(
         "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110",
         color === 'primary' ? "bg-primary/10 text-primary" : 
         color === 'secondary' ? "bg-secondary/10 text-secondary" : "bg-error/10 text-error"
       )}>
          <Icon size={24} />
       </div>
       <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">{label}</p>
          <p className="text-4xl font-black mt-1">{value}</p>
       </div>
    </div>
  );
}

function Heart({ size = 24, className = "", fill = "none" }: any) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function Settings({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
