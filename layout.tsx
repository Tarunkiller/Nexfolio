import * as React from "react"
import { Shield } from "lucide-react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-sm space-y-6">
          {children}
        </div>
      </div>
      <div className="hidden lg:flex flex-col items-center justify-center p-8 bg-muted/30 glass border-l">
        <Shield className="w-24 h-24 text-primary mb-8 animate-pulse" />
        <h2 className="text-3xl font-bold tracking-tight text-center max-w-md">
          Secure Access to Your Digital Portfolio
        </h2>
        <p className="text-muted-foreground text-center max-w-md mt-4">
          Manage your projects, track analytics, and monitor performance in one unified dashboard.
        </p>
      </div>
    </div>
  )
}
