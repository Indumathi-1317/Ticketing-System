import { MOCK_EVENTS } from '@/lib/mock';
import Link from 'next/link';
import { Calendar, MapPin, Clock, Users, Shield, Share2, Info } from 'lucide-react';

export default async function EventDetails({ params }: { params: { id: string } }) {
  const resolvedParams = await params;
  const event = MOCK_EVENTS.find(e => e.id === resolvedParams.id);

  if (!event) {
    return (
      <div className="container min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
        <h2 className="text-3xl font-bold">Event not found</h2>
        <p className="text-muted">The event you are looking for might have been cancelled or moved.</p>
        <Link href="/events" className="btn btn-outline">Back to Events</Link>
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* Hero Header */}
      <div className="relative h-[400px] w-full mt-4">
        <div className="container h-full relative z-10">
          <div 
            className="w-full h-full rounded-3xl bg-cover bg-center border border-border overflow-hidden shadow-2xl relative"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-${1501281668930 + parseInt(event.id) * 1000})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4 text-white">
                <div className="flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-3 py-1 rounded-full w-fit">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Featured Event</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{event.title}</h1>
                <div className="flex flex-wrap items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="btn btn-outline bg-white/5 border-white/20 text-white hover:bg-white/10">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-border">
                <Info className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold">About the Experience</h2>
              </div>
              <div className="prose prose-invert max-w-none text-muted leading-relaxed text-lg space-y-6">
                <p>
                  Experience the magic of {event.title}. {event.description}
                </p>
                <div className="bg-card p-6 rounded-2xl border border-border border-l-4 border-l-primary">
                  <p className="italic text-foreground">
                    "This isn't just an event; it's a curated journey through sound, light, and atmosphere. We've spent months perfecting every detail to ensure you have the night of your life."
                  </p>
                  <p className="mt-4 font-bold text-sm">— {event.organizer}</p>
                </div>
                <p>
                  Our goal is to create spaces where people feel connected and inspired. From the moment you walk through the door, you’ll be transported into a world of curated experiences.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                  {['Premium Audio Setup', 'Immersive Visuals', 'Safe & Inclusive Space', 'Exclusive Lounge Access'].map((item) => (
                    <li key={item} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-border">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b border-border">
                <MapPin className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold">Location</h2>
              </div>
              <div className="w-full h-[300px] rounded-2xl bg-border/20 border border-border overflow-hidden relative group">
                {/* Mock Map remains */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b')] bg-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-background/40 backdrop-blur-sm group-hover:bg-background/20 transition-all duration-500">
                  <div className="p-4 bg-primary rounded-full shadow-2xl animate-bounce">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white tracking-tight">{event.location}</h3>
                  <p className="text-white/80 mt-2 font-medium">Click to open in Google Maps</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="card p-8 space-y-8 shadow-2xl border-primary/20 bg-gradient-to-br from-card to-background">
                <div className="space-y-2">
                  <span className="text-muted text-sm font-bold uppercase tracking-widest">Price per ticket</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-foreground">
                      {event.price === 0 ? 'FREE' : `$${event.price}`}
                    </span>
                    {event.price > 0 && <span className="text-muted font-medium">USD</span>}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted">
                      <Users className="w-4 h-4" />
                      Availability
                    </div>
                    <span className="font-bold text-primary">{event.availableTickets} tickets left</span>
                  </div>
                  <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary" 
                      style={{ width: `${(event.availableTickets / 250) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <Link 
                    href={`/checkout/${event.id}`} 
                    className="btn btn-primary w-full py-5 text-xl font-bold shadow-xl shadow-primary/20"
                  >
                    {event.price === 0 ? 'RSVP Now' : 'Buy Tickets'}
                  </Link>
                  <p className="text-[10px] text-center text-muted uppercase tracking-widest">
                    No hidden fees • Secure Payment
                  </p>
                </div>

                <div className="pt-6 border-t border-border flex flex-col gap-4">
                   <div className="flex items-start gap-3">
                      <div className="p-2 bg-success/10 rounded-lg">
                        <Shield className="w-4 h-4 text-success" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">Verified Event</p>
                        <p className="text-[11px] text-muted">Tickets are authentic and guaranteed.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">Fast Check-in</p>
                        <p className="text-[11px] text-muted">Show your QR code on arrival.</p>
                      </div>
                   </div>
                </div>
              </div>

               <div className="text-center">
                  <button className="text-primary hover:text-primary-hover font-bold text-sm tracking-widest uppercase">
                     Contact Organizer
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

