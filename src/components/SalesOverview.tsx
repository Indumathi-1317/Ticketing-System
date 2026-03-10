'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Mon', sales: 4000, tickets: 24 },
  { name: 'Tue', sales: 3000, tickets: 13 },
  { name: 'Wed', sales: 2000, tickets: 98 },
  { name: 'Thu', sales: 2780, tickets: 39 },
  { name: 'Fri', sales: 1890, tickets: 48 },
  { name: 'Sat', sales: 2390, tickets: 38 },
  { name: 'Sun', sales: 3490, tickets: 43 },
];

export default function SalesOverview() {
  return (
    <div className="h-[300px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 12 }} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e2128', border: '1px solid #334155', borderRadius: '8px' }}
            itemStyle={{ color: '#8b5cf6' }}
          />
          <Area 
            type="monotone" 
            dataKey="sales" 
            stroke="var(--color-primary)" 
            fillOpacity={1} 
            fill="url(#colorSales)" 
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
