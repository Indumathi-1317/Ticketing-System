'use client';

import { MOCK_EVENTS } from '@/lib/mock';
import Link from 'next/link';
import SalesOverview from '@/components/SalesOverview';
import { Plus, Users, DollarSign, Calendar, Settings, CreditCard, ChevronRight } from 'lucide-react';

export default function OrganizerDashboard() {
  const organizerEvents = MOCK_EVENTS.slice(0, 2);

  return (
    <div className="container py-12 space-y-12 animate-in fade-in duration-700">
      {/* Header & Stats */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Organizer Mission Control</h1>
          <p className="text-muted mt-1">Manage your events, analyze sales, and grow your community.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/events/new" className="btn btn-primary shadow-lg shadow-primary/20">
            <Plus className="w-5 h-5" />
            Create Event
          </Link>
          <button className="btn btn-outline">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-br from-primary/10 to-transparent flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-primary/20 rounded-xl text-primary">
              <DollarSign className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold text-success uppercase tracking-widest">+12% vs last week</span>
          </div>
          <div className="mt-6">
            <p className="text-muted text-sm font-medium uppercase tracking-widest">Total Revenue</p>
            <h3 className="text-4xl font-black mt-1">$24,580</h3>
          </div>
        </div>

        <div className="card flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-secondary/20 rounded-xl text-secondary">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold text-success uppercase tracking-widest">+48 new today</span>
          </div>
          <div className="mt-6">
            <p className="text-muted text-sm font-medium uppercase tracking-widest">Total Attendees</p>
            <h3 className="text-4xl font-black mt-1">1,429</h3>
          </div>
        </div>

        <div className="card flex flex-col justify-between border-dashed border-2 hover:border-primary transition-colors cursor-pointer group">
          <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors w-fit">
            <CreditCard className="w-6 h-6 text-muted group-hover:text-primary transition-colors" />
          </div>
          <div className="mt-6">
            <p className="text-muted text-sm font-medium">Stripe Account</p>
            <h3 className="text-2xl font-bold mt-1">Complete Onboarding</h3>
            <p className="text-[10px] text-muted uppercase tracking-widest mt-2 flex items-center gap-1 group-hover:text-primary transition-colors">
              Link Bank Account <ChevronRight className="w-3 h-3" />
            </p>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 card">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Sales Analytics</h3>
            <select className="bg-transparent border-none text-muted text-sm outline-none cursor-pointer">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <SalesOverview />
        </div>

        <div className="lg:col-span-1 card flex flex-col h-full">
           <h3 className="text-xl font-bold mb-6">Real-time Sales Feed</h3>
           <div className="flex-1 space-y-4 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
              {[
                { name: 'Alex M.', event: 'Neon Symphony', time: '2m ago', price: '$45' },
                { name: 'Sarah J.', event: 'Tech Summit', time: '15m ago', price: '$299' },
                { name: 'Dave K.', event: 'Neon Symphony', time: '1h ago', price: '$45' },
                { name: 'Emma L.', event: 'Food Festival', time: '2h ago', price: 'FREE' },
              ].map((sale, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-transparent hover:border-border transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                      {sale.name.split(' ')[0][0]}
                    </div>
                    <div>
                      <p className="text-xs font-bold">{sale.name} <span className="text-muted font-normal">bought</span></p>
                      <p className="text-[10px] text-muted">{sale.event} • {sale.time}</p>
                    </div>
                  </div>
                  <span className="text-xs font-black">{sale.price}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Events Table */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">Manage Your Events</h3>
        <div className="grid grid-cols-1 gap-4">
          {organizerEvents.map((event) => (
            <div key={event.id} className="group card flex flex-col md:flex-row items-center gap-6 p-4 hover:border-primary transition-all">
               <div 
                 className="w-full md:w-32 h-24 rounded-xl bg-cover bg-center border border-border" 
                 style={{ backgroundImage: `url(https://images.unsplash.com/photo-${1501281668930 + parseInt(event.id) * 1000})` }}
               />
               
               <div className="flex-1 text-center md:text-left">
                 <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{event.title}</h4>
                 <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                       <Calendar className="w-3 h-3" />
                       {event.date}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                       <Users className="w-3 h-3" />
                       {250 - event.availableTickets} / 250 sold
                    </div>
                 </div>
               </div>

               <div className="flex items-center gap-3 w-full md:w-fit">
                 <Link href={`/events/${event.id}/guests`} className="btn btn-outline flex-1 md:flex-none py-2 px-4 text-xs font-bold uppercase tracking-widest bg-white/5">
                   Guests
                 </Link>
                 <button className="btn btn-primary flex-1 md:flex-none py-2 px-4 text-xs font-bold uppercase tracking-widest">
                   Edit
                 </button>
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

