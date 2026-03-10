'use client';

import { MOCK_EVENTS } from '@/lib/mock';
import Link from 'next/link';
import { use, useState } from 'react';
import { Search, ChevronLeft, Download, UserCheck, UserPlus, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GuestList({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const event = MOCK_EVENTS.find(e => e.id === resolvedParams.id);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock guest list with state for "Check-in" toggle
  const [guests, setGuests] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", ticketType: "General Admission", status: "Checked-in", timestamp: "7:45 PM" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", ticketType: "General Admission", status: "Checked-in", timestamp: "7:50 PM" },
    { id: 3, name: "Charlie Davis", email: "charlie@example.com", ticketType: "VIP", status: "Pending", timestamp: "-" },
    { id: 4, name: "Diana Prince", email: "diana@example.com", ticketType: "VIP", status: "Pending", timestamp: "-" },
  ]);

  if (!event) {
    return <div className="container min-h-[60vh] flex items-center justify-center"><h2>Event not found</h2></div>;
  }

  const toggleCheckIn = (id: number) => {
    setGuests(prev => prev.map(g => {
      if (g.id === id) {
        const isChecked = g.status === 'Checked-in';
        return {
          ...g,
          status: isChecked ? 'Pending' : 'Checked-in',
          timestamp: isChecked ? '-' : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      }
      return g;
    }));
  };

  const filteredGuests = guests.filter(g => 
    g.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    g.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-12 space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <Link href="/dashboard/organizer" className="flex items-center gap-1 text-xs font-bold text-primary uppercase tracking-widest mb-2">
            <ChevronLeft className="w-3 h-3" />
            Back to Mission Control
          </Link>
          <h1 className="text-4xl font-bold tracking-tight">Guest List</h1>
          <p className="text-muted">{event.title} • {event.date}</p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-outline bg-white/5 border-border">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
          <button className="btn btn-primary">
            <UserPlus className="w-4 h-4" />
            Add Guest
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         <div className="card text-center p-6 bg-gradient-to-br from-primary/10 to-transparent">
            <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Total RSVPs</p>
            <h3 className="text-3xl font-black mt-2">{guests.length}</h3>
         </div>
         <div className="card text-center p-6 bg-gradient-to-br from-success/10 to-transparent">
            <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Checked In</p>
            <h3 className="text-3xl font-black mt-2">{guests.filter(g => g.status === 'Checked-in').length}</h3>
         </div>
         <div className="card text-center p-6">
            <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Pending</p>
            <h3 className="text-3xl font-black mt-2">{guests.filter(g => g.status === 'Pending').length}</h3>
         </div>
         <div className="card text-center p-6">
            <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Check-in Rate</p>
            <h3 className="text-3xl font-black mt-2">{Math.round((guests.filter(g => g.status === 'Checked-in').length / guests.length) * 100)}%</h3>
         </div>
      </div>

      <div className="card p-0 overflow-hidden border-border bg-card/30">
        <div className="p-6 border-b border-border flex flex-col md:flex-row justify-between items-center gap-4 bg-white/5">
          <div className="relative w-full md:w-96">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
             <input 
               type="text" 
               placeholder="Search guest by name or email..." 
               className="form-input pl-10 h-10 text-sm"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
          </div>
          <button className="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-widest hover:text-foreground p-2">
            <Filter className="w-3 h-3" />
            More Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-border">
                <th className="p-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted pl-8">Attendee</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted">Ticket Type</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted text-center">Status</th>
                <th className="p-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted text-right pr-8">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredGuests.map((guest) => (
                <tr key={guest.id} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 pl-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-white shadow-xl shadow-primary/10">
                        {guest.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">{guest.name}</p>
                        <p className="text-xs text-muted font-medium">{guest.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-xs font-medium px-2 py-1 rounded bg-white/5 border border-border">
                      {guest.ticketType}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className={cn(
                        "text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border",
                        guest.status === 'Checked-in' 
                          ? "bg-success/10 text-success border-success/20" 
                          : "bg-warning/10 text-yellow-500 border-yellow-500/20"
                      )}>
                        {guest.status}
                      </span>
                      {guest.status === 'Checked-in' && (
                        <span className="text-[10px] text-muted font-medium italic">{guest.timestamp}</span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-right pr-8">
                    <button 
                      onClick={() => toggleCheckIn(guest.id)}
                      className={cn(
                        "p-2 rounded-lg transition-all",
                        guest.status === 'Checked-in'
                          ? "bg-success/20 text-success hover:bg-success/30"
                          : "bg-white/5 text-muted hover:bg-white/10 hover:text-foreground px-4 text-xs font-bold uppercase tracking-widest flex items-center gap-2 ml-auto"
                      )}
                    >
                      {guest.status === 'Checked-in' ? (
                        <UserCheck className="w-5 h-5" />
                      ) : (
                        <>
                          <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                          Check-in
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredGuests.length === 0 && (
          <div className="p-20 text-center space-y-4">
             <Search className="w-12 h-12 text-muted mx-auto opacity-20" />
             <p className="text-muted">No guests found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

