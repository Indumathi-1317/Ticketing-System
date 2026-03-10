import Link from 'next/link';
import { MOCK_EVENTS } from '@/lib/mock';
import { EventCard } from '@/components/EventCard';
import { Search, SlidersHorizontal, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function EventsList() {
  return (
    <div className="container py-24 space-y-12 min-h-screen">
      
      {/* Search and Filter Header */}
      <div className="space-y-8 max-w-4xl">
         <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter">Explore Events</h1>
            <p className="text-lg text-muted font-medium">Find world-class experiences, festivals, and workshops near you.</p>
         </div>

         <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative group">
               <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <Search size={20} className="text-muted group-focus-within:text-primary transition-colors" />
               </div>
               <input 
                 type="text" 
                 placeholder="Search by artist, venue, or name..." 
                 className="w-full bg-card border border-border rounded-2xl pl-14 pr-6 py-5 text-sm font-medium focus:outline-none focus:border-primary transition-all shadow-xl"
               />
            </div>
            <div className="flex items-center gap-3">
               <button className="flex items-center gap-3 px-6 py-5 bg-card border border-border rounded-2xl text-sm font-black uppercase tracking-widest hover:border-primary/50 transition-all">
                  <MapPin size={18} className="text-primary" /> Location
               </button>
               <button className="flex items-center gap-3 px-6 py-5 bg-card border border-border rounded-2xl text-sm font-black uppercase tracking-widest hover:border-primary/50 transition-all">
                  <SlidersHorizontal size={18} className="text-secondary" /> Filters
               </button>
            </div>
         </div>
      </div>

      {/* Discovery Grid */}
      <div className="pt-8">
         <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/50">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted">{MOCK_EVENTS.length} Events found</span>
            <div className="flex gap-4">
               {['All', 'Today', 'This Week', 'This Weekend'].map((t) => (
                 <button key={t} className="text-xs font-bold text-muted hover:text-white transition-colors">
                   {t}
                 </button>
               ))}
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
           {MOCK_EVENTS.map((event) => (
             <EventCard 
               key={event.id}
               id={event.id}
               title={event.title}
               date={event.date}
               time={event.time}
               location={event.location}
               price={event.price}
               imageUrl={event.imageUrl}
               capacity={event.capacity}
               ticketsSold={event.ticketsSold}
               className="animate-in fade-in zoom-in-95 duration-500"
             />
           ))}
         </div>
      </div>

      {/* Pagination Mockup */}
      <div className="flex justify-center pt-16 gap-2">
         {[1, 2, 3, '...', 12].map((p, i) => (
           <button 
             key={i} 
             className={cn(
               "w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm transition-all",
               p === 1 ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-card border border-border text-muted hover:text-white hover:border-primary/50"
             )}
           >
             {p}
           </button>
         ))}
      </div>
    </div>
  );
}
