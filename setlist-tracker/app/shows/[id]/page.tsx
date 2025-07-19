"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Grid3X3, List, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const showData = {
  "aug-1-2025": {
    date: "August 1, 2025",
    venue: "Golden Gate Park",
    location: "San Francisco, CA",
    showTime: "7:00 PM PDT",
    guest: "Billy Strings",
  },
  "aug-2-2025": {
    date: "August 2, 2025",
    venue: "Golden Gate Park",
    location: "San Francisco, CA",
    showTime: "7:00 PM PDT",
    guest: "Sturgill Simpson",
  },
  "aug-3-2025": {
    date: "August 3, 2025",
    venue: "Golden Gate Park",
    location: "San Francisco, CA",
    showTime: "7:00 PM PDT",
    guest: "Trey Anastasio Band",
  },
}

const games = [
  {
    id: "bingo",
    title: "Setlist Bingo",
    description: "Fill your 5x5 bingo card with songs you think will be played tonight!",
    icon: Grid3X3,
    difficulty: "Easy",
    players: 847,
    color: "bg-pink-400",
  },
  {
    id: "fill-setlist",
    title: "Fill the Setlist",
    description: "Predict the exact order of songs for Set 1, Set 2, and Encore!",
    icon: List,
    difficulty: "Expert",
    players: 423,
    color: "bg-blue-400",
  },
]

export default function ShowPage() {
  const params = useParams()
  const showId = params.id as string
  const show = showData[showId as keyof typeof showData]
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !show) return null

  return (
    <div className="min-h-screen bg-dead-cream">
      {/* Purple Header Banner */}
      <div className="purple-banner">SETLIST GAMES AVAILABLE BELOW!</div>

      {/* Navigation */}
      <div className="bg-dead-cream border-b-2 border-black py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-4xl md:text-5xl dead-logo font-dead cursor-pointer">Setlist Tracker</h1>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="font-dead-body">
              <ArrowLeft className="w-4 h-4 mr-2" />
              BACK TO SHOWS
            </Button>
          </Link>
        </div>
      </div>

      {/* Show Info */}
      <div className="bg-gradient-to-b from-yellow-400 to-yellow-300 py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-dead text-black mb-4">{show.venue}</h1>
          <div className="flex flex-wrap justify-center gap-6 text-lg font-dead-body text-black mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {show.date} • {show.showTime}
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              {show.location}
            </div>
          </div>
          <div className="bg-black text-white px-6 py-3 rounded-full inline-block">
            <span className="font-dead text-lg">SPECIAL GUEST: {show.guest}</span>
          </div>
        </div>
      </div>

      {/* Game Selection */}
      <div className="bg-dead-cream py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-dead text-center text-black mb-12">Choose Your Game</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {games.map((game) => {
              const IconComponent = game.icon
              return (
                <Card key={game.id} className={`dead-card ${game.color} border-4 border-black`}>
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="font-dead text-2xl text-black mb-2">{game.title}</h3>
                    </div>

                    <p className="font-dead-body text-black mb-6 leading-relaxed text-lg">{game.description}</p>

                    <div className="flex justify-center gap-4 mb-6">
                      <span className="bg-white px-4 py-2 rounded-full font-dead text-sm text-black border-2 border-black">
                        {game.difficulty}
                      </span>
                      <span className="bg-white px-4 py-2 rounded-full font-dead text-sm text-black border-2 border-black">
                        {game.players} PLAYING
                      </span>
                    </div>

                    <Link href={`/shows/${showId}/${game.id}`}>
                      <Button className="w-full btn-yellow font-dead text-xl py-4 rounded-lg">START PLAYING</Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-8 text-center">
        <p className="font-dead-body">🎵 "ONCE IN A WHILE YOU GET SHOWN THE LIGHT" 🎵</p>
      </div>
    </div>
  )
}
