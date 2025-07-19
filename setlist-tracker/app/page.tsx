"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const shows = [
  {
    id: "aug-1-2025",
    date: "August 1, 2025",
    venue: "Golden Gate Park",
    location: "San Francisco, CA",
    players: 1247,
    guest: "Billy Strings",
  },
  {
    id: "aug-2-2025",
    date: "August 2, 2025",
    venue: "Golden Gate Park",
    location: "San Francisco, CA",
    players: 892,
    guest: "Sturgill Simpson",
  },
  {
    id: "aug-3-2025",
    date: "August 3, 2025",
    venue: "Golden Gate Park",
    location: "San Francisco, CA",
    players: 1056,
    guest: "Trey Anastasio Band",
  },
]

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-dead-cream">
      {/* Purple Header Banner */}
      <div className="purple-banner">SETLIST GAMES AVAILABLE BELOW!</div>

      {/* Navigation */}
      <div className="bg-dead-cream border-b-2 border-black py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-4xl md:text-5xl dead-logo font-dead">Setlist Tracker</h1>
          <div className="hidden md:flex items-center gap-8 font-dead-body text-sm">
            <span className="text-black">SETLIST GAMES</span>
            <span className="text-black">LEADERBOARD</span>
            <span className="text-black">ABOUT</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-yellow-400 to-yellow-300 py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src="/images/dead-co-poster.png"
              alt="Dead & Company Golden Gate Park"
              className="w-full max-w-2xl mx-auto mb-8 rounded-lg shadow-2xl"
            />
            <h2 className="text-2xl md:text-3xl font-dead text-black mb-4">
              CELEBRATING 60 YEARS OF THE GRATEFUL DEAD'S MUSIC
            </h2>
            <h3 className="text-4xl md:text-6xl font-dead text-black mb-2">GOLDEN GATE PARK</h3>
            <p className="text-xl font-dead-body text-black mb-4">SAN FRANCISCO, CALIFORNIA</p>
            <p className="text-2xl md:text-3xl font-dead text-black">AUGUST 1, 2, 3, 2025</p>
          </div>
        </div>
      </div>

      {/* Game Selection */}
      <div className="bg-dead-cream py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-dead text-center text-black mb-4">Predict the Magic!</h2>
          <p className="text-center font-dead-body text-black mb-12 text-lg">
            Choose your show and start predicting tonight's musical journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {shows.map((show, index) => (
              <Card key={show.id} className="dead-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="bg-dead-purple text-white px-4 py-2 rounded-full inline-block mb-4">
                      <span className="font-dead text-sm">{show.date}</span>
                    </div>
                    <h3 className="font-dead text-xl text-black mb-2">{show.venue}</h3>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-dead-purple" />
                      <span className="font-dead-body text-black">{show.location}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Users className="w-4 h-4 text-dead-purple" />
                      <span className="font-dead-body text-black text-sm">{show.players} players</span>
                    </div>
                    <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-3 mb-6">
                      <p className="font-dead text-sm text-black">SPECIAL GUEST:</p>
                      <p className="font-dead text-lg text-black">{show.guest}</p>
                    </div>
                  </div>

                  <Link href={`/shows/${show.id}`}>
                    <Button className="w-full btn-yellow font-dead text-lg py-3 rounded-lg">ENTER SHOW</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-8 text-center">
        <p className="font-dead-body">🌹 KEEP ON TRUCKIN' AND MAY YOUR PREDICTIONS BE EVER GRATEFUL 🌹</p>
      </div>
    </div>
  )
}
