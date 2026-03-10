import Link from 'next/link';
import { MOCK_EVENTS } from '@/lib/mock';
import { Search, MapPin, Calendar, Users, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-20 blur-[120px]" />
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30" 
            className="w-full h-full object-cover grayscale opacity-40 scale-105 animate-pulse duration-[10s]"
            alt="Hero background"
          />
        </div>

        <div className="container relative z-20 text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Find your next <br />
              <span className="text-gradient">experience.</span>
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
              The premium platform for exclusive events, secure ticketing, and unforgettable memories.
            </p>
          </div>

          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative flex items-center bg-card border border-border rounded-xl p-2 h-16 shadow-2xl">
              <Search className="ml-4 w-6 h-6 text-muted" />
              <input 
                type="text" 
                placeholder="Search events, cities, or artists..." 
                className="bg-transparent border-none outline-none flex-1 px-4 text-lg placeholder:text-muted/50"
              />
              <button className="btn btn-primary h-full px-8 rounded-lg text-sm font-bold uppercase tracking-wider">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Feed Grid */}
      <section className="container">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
              <TrendingUp className="w-4 h-4" />
              Trending Now
            </div>
            <h2 className="text-3xl font-bold">Recommended for You</h2>
          </div>
          <Link href="/events" className="text-primary hover:text-primary-hover font-semibold transition-colors flex items-center gap-1">
            View All Events <span className="text-xl">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_EVENTS.map((event) => {
            const progress = ((250 - event.availableTickets) / 250) * 100;
            return (
              <div key={event.id} className="group cursor-pointer">
                <Link href={`/events/${event.id}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-card border border-border shadow-sm group-hover:shadow-2xl transition-all duration-500">
                    <img 
                      src={`https://images.unsplash.com/photo-${1501281668930 + parseInt(event.id) * 1000}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt={event.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md">
                      {event.price === 0 ? 'FREE' : `$${event.price}`}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                       <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          {event.date}
                       </div>
                    </div>
                  </div>
                </Link>

                <div className="space-y-3 px-1">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-muted text-sm pb-1">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>

                  {/* Urgency Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
                      <span className={progress > 80 ? "text-error" : "text-muted"}>
                        {progress > 80 ? "Almost Sold Out!" : "Tickets Remaining"}
                      </span>
                      <span className="text-muted">{event.availableTickets} LEFT</span>
                    </div>
                    <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full transition-all duration-1000 ease-out",
                          progress > 80 ? "bg-error" : "bg-primary"
                        )}
                        style={{ width: `${100 - (event.availableTickets/250)*100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Organizer Call to Action */}
      <section className="container py-20">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm overflow-hidden relative">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
          <div className="space-y-4 max-w-xl">
            <h2 className="text-4xl font-bold leading-tight">Host your own event.</h2>
            <p className="text-muted text-lg">
              Everything you need to create, sell, and manage tickets for your next big experience. Join 1000+ organizers today.
            </p>
          </div>
          <Link href="/login?role=organizer" className="btn btn-primary text-lg px-8 py-4 whitespace-nowrap relative z-10">
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  );
}

// Utility class helper
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

