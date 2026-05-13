"use client"

import * as React from "react"
import Link from "next/link"
import { Github, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <Card className="border-none shadow-none bg-transparent lg:bg-card lg:border lg:shadow-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="space-y-2">
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
        <Button className="w-full" asChild>
          <Link href="/dashboard">
            Sign In <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button variant="outline" className="w-full">
          <Github className="mr-2 h-4 w-4" />
          Github
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center space-y-2">
        <div className="text-sm text-muted-foreground text-center">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline font-medium">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
