'use client';

import { MOCK_EVENTS } from '@/lib/mock';
import Link from 'next/link';
import { 
  Plus, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Search, 
  MoreVertical, 
  ExternalLink,
  CreditCard,
  Settings,
  LayoutDashboard,
  Calendar
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { cn } from '@/lib/utils';

const chartData = [
  { name: 'Mon', sales: 400 },
  { name: 'Tue', sales: 300 },
  { name: 'Wed', sales: 900 },
  { name: 'Thu', sales: 600 },
  { name: 'Fri', sales: 1200 },
  { name: 'Sat', sales: 1500 },
  { name: 'Sun', sales: 1100 },
];

export default function OrganizerDashboard() {
  const organizerEvents = MOCK_EVENTS.slice(0, 3);
  const totalTickets = organizerEvents.reduce((acc, e) => acc + e.ticketsSold, 0);
  const totalRevenue = organizerEvents.reduce((acc, e) => acc + (e.ticketsSold * e.price), 0);

  return (
    <div className="min-h-screen bg-[#0f1115]">
      
      {/* Sidebar Layout Mockup */}
      <div className="flex">
        {/* Navigation Rail */}
        <aside className="hidden lg:flex flex-col w-20 bg-card border-r border-border h-screen sticky top-0 py-8 items-center gap-10">
           <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black shadow-lg shadow-primary/30">
              E
           </div>
           <nav className="flex flex-col gap-6">
              {[LayoutDashboard, Calendar, Users, CreditCard, Settings].map((Icon, i) => (
                <button key={i} className={cn(
                  "p-3 rounded-2xl transition-all",
                  i === 0 ? "bg-primary/10 text-primary shadow-inner" : "text-muted hover:text-white hover:bg-muted/10"
                )}>
                  <Icon size={24} />
                </button>
              ))}
           </nav>
        </aside>

        {/* Main Console */}
        <div className="flex-1 p-6 md:p-12 space-y-12">
           
           {/* Header */}
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                 <h1 className="text-4xl font-black tracking-tight mb-2">Organizer Console</h1>
                 <p className="text-muted font-medium">Monitoring your events performance and sales.</p>
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                 <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-card border border-border text-foreground font-bold hover:bg-muted/5 transition-all">
                    <ChartBarIcon size={18} /> Export Analytics
                 </button>
                 <Link href="/events/new" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-primary text-white font-bold hover:bg-primary-hover shadow-xl shadow-primary/20 active:scale-95 transition-all transition-transform">
                    <Plus size={20} className="stroke-[3]" /> Create Event
                 </Link>
              </div>
           </div>

           {/* Stats Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Total Tickets Sold" value={totalTickets.toLocaleString()} trend="+12.5%" icon={Users} color="primary" />
              <StatCard title="Gross Revenue" value={`$${totalRevenue.toLocaleString()}`} trend="+8.2%" icon={DollarSign} color="success" />
              <StatCard title="Active Events" value={organizerEvents.length} trend="Live" icon={Calendar} color="secondary" />
              <StatCard title="Conversion Rate" value="64.2%" trend="+4.1%" icon={TrendingUp} color="primary" />
           </div>

           {/* Sales Chart */}
           <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2 p-8 rounded-[32px] bg-card border border-border shadow-2xl space-y-8">
                 <div className="flex items-center justify-between">
                    <div>
                       <h3 className="text-xl font-black">Sales Momentum</h3>
                       <p className="text-xs text-muted font-medium uppercase tracking-widest mt-1">Last 7 Days (Global Across Events)</p>
                    </div>
                    <div className="flex gap-2">
                       {['Day', 'Week', 'Month'].map(t => (
                         <button key={t} className={cn(
                           "px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                           t === 'Week' ? "bg-white text-black" : "bg-muted/10 text-muted hover:bg-muted/20"
                         )}>
                           {t}
                         </button>
                       ))}
                    </div>
                 </div>

                 <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={chartData}>
                          <defs>
                             <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" vertical={false} />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} />
                          <YAxis hide />
                          <Tooltip 
                            contentStyle={{backgroundColor: '#1e2128', border: '1px solid #334155', borderRadius: '12px', fontSize: '10px'}}
                            itemStyle={{color: 'white', fontWeight: 800}}
                          />
                          <Area type="monotone" dataKey="sales" stroke="var(--primary)" strokeWidth={4} fillOpacity={1} fill="url(#colorSales)" />
                       </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </div>

              {/* Stripe Onboarding Callout */}
              <div className="p-8 rounded-[32px] bg-gradient-to-br from-primary/20 to-secondary/10 border-2 border-primary/20 flex flex-col justify-center items-center text-center space-y-6">
                 <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M19.1 14.1c-1.8 0-3.3.4-4.5 1.1-.9.5-1.5 1.4-1.5 2.5 0 1.9 1.6 2.8 4.7 3.5l2.4.6c1.5.3 2.1.8 2.1 1.7 0 .9-1 1.4-2.6 1.4-2 0-3.9-.7-5.3-1.6L12 26.6c1.9 1.4 4.8 2.3 7.9 2.3 1.9 0 3.6-.5 4.8-1.4 1.1-.8 1.7-2 1.7-3.4 0-2.1-1.7-3-4.8-3.7l-2.4-.6c-1.4-.3-2-.7-2-1.5 0-.7.8-1.2 2.2-1.2 1.7 0 3.3.5 4.3 1.1l2-3.1c-1.6-1-3.9-1.3-6.6-1.3l.001.2z" fill="#635BFF"/>
                    </svg>
                 </div>
                 <h3 className="text-2xl font-black">Link Stripe Payouts</h3>
                 <p className="text-sm text-muted">Initialize your merchant account to start receiving funds directly to your bank account.</p>
                 <button className="w-full py-4 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl active:scale-95">
                    Connect Account
                 </button>
              </div>
           </div>

           {/* Event Management Table */}
           <div className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                 <h3 className="text-2xl font-black italic">Live Event Inventory</h3>
                 <div className="relative w-full md:w-80 group">
                    <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-primary transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Search events..." 
                      className="w-full bg-card border border-border rounded-2xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-all"
                    />
                 </div>
              </div>

              <div className="bg-card border border-border rounded-[32px] overflow-hidden shadow-2xl">
                 <table className="w-full border-collapse">
                    <thead>
                       <tr className="border-b border-border bg-muted/5">
                          <th className="text-left px-8 py-6 text-[10px] font-black uppercase tracking-widest text-muted">Event Details</th>
                          <th className="text-left px-8 py-6 text-[10px] font-black uppercase tracking-widest text-muted">Ticket Status</th>
                          <th className="text-left px-8 py-6 text-[10px] font-black uppercase tracking-widest text-muted">Revenue</th>
                          <th className="text-right px-8 py-6 text-[10px] font-black uppercase tracking-widest text-muted">Actions</th>
                       </tr>
                    </thead>
                    <tbody>
                       {organizerEvents.map((event) => (
                         <tr key={event.id} className="border-b border-border/50 group hover:bg-white/[0.02] transition-colors">
                            <td className="px-8 py-6">
                               <div className="flex items-center gap-4">
                                  <div 
                                    className="w-14 h-14 rounded-2xl shrink-0"
                                    style={{ background: event.imageUrl, backgroundSize: 'cover' }}
                                  />
                                  <div>
                                     <p className="font-bold text-white group-hover:text-primary transition-all">{event.title}</p>
                                     <p className="text-xs text-muted font-medium">{event.date} • {event.location}</p>
                                  </div>
                               </div>
                            </td>
                            <td className="px-8 py-6">
                               <div className="space-y-2 max-w-[120px]">
                                  <div className="flex justify-between text-[10px] font-black italic">
                                     <span>{Math.round((event.ticketsSold / event.capacity) * 100)}%</span>
                                     <span>{event.ticketsSold}/{event.capacity}</span>
                                  </div>
                                  <div className="h-1 w-full bg-muted/20 rounded-full overflow-hidden">
                                     <div 
                                       className="h-full bg-primary"
                                       style={{ width: `${(event.ticketsSold / event.capacity) * 100}%` }}
                                     />
                                  </div>
                               </div>
                            </td>
                            <td className="px-8 py-6">
                               <p className="font-black text-white text-lg">${(event.ticketsSold * event.price).toLocaleString()}</p>
                            </td>
                            <td className="px-8 py-6 text-right">
                               <div className="flex justify-end gap-2">
                                  <Link href={`/events/${event.id}/guests`} className="p-2 rounded-xl bg-muted/10 text-muted hover:bg-primary/20 hover:text-primary transition-all">
                                     <Users size={18} />
                                  </Link>
                                  <button className="p-2 rounded-xl bg-muted/10 text-muted hover:bg-secondary/20 hover:text-secondary transition-all">
                                     <Settings size={18} />
                                  </button>
                                  <button className="p-2 rounded-xl bg-muted/10 text-muted hover:text-white transition-all">
                                     <MoreVertical size={18} />
                                  </button>
                               </div>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
                 <div className="p-6 bg-muted/5 flex justify-center border-t border-border">
                    <button className="text-[10px] font-black uppercase tracking-[0.3em] text-muted hover:text-primary transition-colors flex items-center gap-2">
                       View All Events <ExternalLink size={12} />
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, icon: Icon, color }: any) {
  return (
    <div className="p-8 rounded-[32px] bg-card border border-border shadow-xl space-y-4 hover:border-primary/30 transition-all cursor-default group">
       <div className="flex justify-between items-start">
          <div className={cn(
            "p-3 rounded-2xl bg-opacity-10",
            color === 'primary' ? "bg-primary text-primary" : 
            color === 'success' ? "bg-success text-success" : "bg-secondary text-secondary"
          )}>
             <Icon size={24} />
          </div>
          <span className={cn(
            "text-[10px] font-black px-2 py-1 rounded-lg",
            trend.includes('+') ? "bg-success/10 text-success" : "bg-muted/10 text-muted"
          )}>{trend}</span>
       </div>
       <div>
          <h4 className="text-[10px] font-black uppercase tracking-widest text-muted">{title}</h4>
          <p className="text-3xl font-black mt-1 group-hover:scale-105 transition-transform origin-left">{value}</p>
       </div>
    </div>
  );
}

function ChartBarIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20V10" />
      <path d="M18 20V4" />
      <path d="M6 20v-4" />
    </svg>
  );
}
