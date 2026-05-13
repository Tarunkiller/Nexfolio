"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FolderKanban, Settings, Bell, Search, Activity, Zap } from "lucide-react"

import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Analytics", href: "/analytics", icon: Activity },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-card/50 glass lg:block lg:w-64 lg:flex-col fixed inset-y-0 z-50">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <Zap className="w-5 h-5 text-primary" />
          <span>Nexus</span>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:text-primary",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
