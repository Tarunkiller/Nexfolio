"use client"

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const data = [
  { name: "Jan", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Feb", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Mar", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Apr", total: Math.floor(Math.random() * 50) + 10 },
  { name: "May", total: Math.floor(Math.random() * 50) + 10 },
  { name: "Jun", total: Math.floor(Math.random() * 50) + 10 },
]

export function ActivityChart() {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
            itemStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
          <Area
            type="monotone"
            dataKey="total"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorTotal)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
