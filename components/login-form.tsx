'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserIcon, LockIcon, SunIcon, MoonIcon } from "lucide-react"

export function LoginForm() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for user's preference in localStorage or system preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
      (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    // Apply dark mode class to the document
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-400 to-sky-200 dark:from-gray-900 dark:to-gray-700 bg-cover bg-center bg-no-repeat transition-colors duration-300">
      <div className="w-full max-w-md p-8 rounded-lg backdrop-blur-sm bg-white/30 dark:bg-black/30 shadow-xl transition-colors duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">Login</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="text-gray-800 dark:text-white"
          >
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="sr-only">
              Username
            </Label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="username"
                placeholder="Username"
                type="text"
                className="pl-10 bg-white/20 dark:bg-gray-800/50 border-white/30 dark:border-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
            <div className="relative">
              <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="password"
                placeholder="Password"
                type="password"
                className="pl-10 bg-white/20 dark:bg-gray-800/50 border-white/30 dark:border-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-gray-800 dark:text-gray-200 hover:underline">
              Forgot password?
            </a>
          </div>
          <Button className="w-full bg-sky-600 text-white hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-sky-600">Login</Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-800 dark:text-gray-200">
          {"Don't have an account? "}
          <a href="#" className="font-medium text-sky-600 dark:text-sky-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  )
}