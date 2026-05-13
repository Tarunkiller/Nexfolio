"use client"

import { Bell, Search, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b bg-background/80 glass px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <Button variant="ghost" size="icon" className="-m-2.5 p-2.5 text-muted-foreground lg:hidden">
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-5 w-5" aria-hidden="true" />
      </Button>

      {/* Separator */}
      <div className="h-6 w-px bg-border lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 items-center">
        <form className="relative flex flex-1" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <Search
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-muted-foreground pl-3"
            aria-hidden="true"
          />
          <Input
            id="search-field"
            className="block h-full w-full border-0 py-0 pl-10 pr-0 text-foreground bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-sm"
            placeholder="Search commands, projects, or users (Cmd+K)"
            type="search"
            name="search"
          />
        </form>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <Button variant="ghost" size="icon" className="-m-2.5 p-2.5 text-muted-foreground hover:text-foreground">
            <span className="sr-only">View notifications</span>
            <Bell className="h-5 w-5" aria-hidden="true" />
          </Button>

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-border" aria-hidden="true" />

          {/* Profile dropdown */}
          <div className="flex items-center gap-x-4">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-accent cursor-pointer flex items-center justify-center text-primary-foreground font-bold text-xs shadow-md">
              JD
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
