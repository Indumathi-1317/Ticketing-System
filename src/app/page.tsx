import Link from 'next/link';
import { MOCK_EVENTS } from '@/lib/mock';
import { EventCard } from '@/components/EventCard';
import { Search, MapPin, Compass, Sparkles } from 'lucide-react';

export default function Home() {
  const trendingEvents = MOCK_EVENTS.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[100px] -z-10" />

        <div className="container px-4 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm font-bold rounded-full bg-primary/10 text-primary border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Sparkles size={14} />
            <span>Discover Top Experiences</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
            Find your next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary leading-tight">
              unforgettable experience
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-muted text-lg mb-12 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            Book secure tickets, track your RSVPs, and manage your access with our next-gen digital ticketing system.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative group animate-in fade-in zoom-in-95 duration-700 delay-300">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-500" />
            <div className="relative flex items-center bg-[#1e2128] border border-border rounded-2xl p-2 shadow-2xl">
               <div className="flex-1 flex items-center px-4 gap-3">
                  <Search className="text-muted" size={20} />
                  <input 
                    type="text" 
                    placeholder="Concerts, festivals, workshops..." 
                    className="w-full bg-transparent border-none outline-none py-3 text-foreground placeholder:text-muted/50 font-medium"
                  />
               </div>
               <div className="hidden md:flex items-center px-4 gap-2 border-l border-border/50">
                  <MapPin className="text-primary" size={20} />
                  <input 
                    type="text" 
                    placeholder="San Francisco, CA" 
                    className="w-32 bg-transparent border-none outline-none text-foreground placeholder:text-muted/50 font-medium text-sm"
                  />
               </div>
               <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/40 active:scale-95">
                  Find Events
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Categories */}
      <section className="py-12 border-y border-border/50 bg-black/20">
         <div className="container px-4 mx-auto flex flex-wrap justify-center gap-4 md:gap-8">
            {['Music', 'Nightlife', 'Tech', 'Food & Drink', 'Arts', 'Sports'].map((cat) => (
              <button key={cat} className="px-6 py-2 rounded-full border border-border bg-card/50 hover:border-primary hover:bg-primary/5 text-sm font-bold text-muted hover:text-primary transition-all">
                {cat}
              </button>
            ))}
         </div>
      </section>

      {/* Trending Section */}
      <section className="py-24 container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
           <div>
              <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-2">
                 <Compass size={16} />
                 <span>Trending Now</span>
              </div>
              <h2 className="text-4xl font-black">Popular Experiences</h2>
           </div>
           <Link href="/events" className="group flex items-center gap-2 text-muted hover:text-primary font-bold transition-colors">
              <span>Explore all events</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingEvents.map((event) => (
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
            />
          ))}
        </div>
      </section>

      {/* Organizer CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 mx-auto">
           <div className="relative rounded-[32px] overflow-hidden bg-primary/5 border border-primary/20 p-12 md:p-20 text-center">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent -z-10" />
              <h2 className="text-4xl md:text-5xl font-black mb-6">Host your own event.</h2>
              <p className="max-w-xl mx-auto text-muted text-lg mb-10 leading-relaxed">
                Join thousands of creators who use Eventify to sell tickets, manage guests, and grow their community.
              </p>
              <Link href="/login?role=organizer" className="inline-flex items-center gap-3 bg-foreground text-background px-10 py-4 rounded-2xl font-black text-lg hover:opacity-90 transition-opacity">
                Get Started as Organizer
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
