"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        {/* Left: Brand */}
        <a href="/" className="text-xl font-bold dark:text-honey-light bg-gradient-to-r from-honey-medium via-honey-medium to-honey-dark bg-clip-text text-transparent">
          Premium Organic Products
        </a>

        {/* Center: Nav links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-honey-medium">Products</a>
          <a href="#" className="hover:text-honey-medium">About</a>
          <a href="#" className="hover:text-honey-medium">Stores</a>
          <a href="#" className="hover:text-honey-medium">Contact</a>
        </div>

        {/* Right: Theme Toggle */}
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  )
}
