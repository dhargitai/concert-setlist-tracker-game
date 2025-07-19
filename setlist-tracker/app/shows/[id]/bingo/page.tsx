"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Search, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import SongCard from "@/components/SongCard"
import BingoBoard from "@/components/BingoBoard"
import CelebrationModal from "@/components/CelebrationModal"

const deadSongs = [
  "Truckin'",
  "Sugar Magnolia",
  "Fire on the Mountain",
  "Eyes of the World",
  "Ripple",
  "Friend of the Devil",
  "Casey Jones",
  "Uncle John's Band",
  "Touch of Grey",
  "Shakedown Street",
  "China Cat Sunflower",
  "I Know You Rider",
  "Scarlet Begonias",
  "Tennessee Jed",
  "Box of Rain",
  "Bertha",
  "Deal",
  "Jack Straw",
  "Estimated Prophet",
  "Help on the Way",
  "Slipknot!",
  "Franklin's Tower",
  "The Other One",
  "Dark Star",
  "St. Stephen",
  "Playing in the Band",
  "Drums",
  "Space",
  "Not Fade Away",
  "Good Lovin'",
  "Turn On Your Love Light",
  "Morning Dew",
  "Stella Blue",
  "Brokedown Palace",
  "Attics of My Life",
]

export default function BingoGame() {
  const params = useParams()
  const showId = params.id as string
  const [bingoCard, setBingoCard] = useState<(string | null)[]>(Array(25).fill(null))
  const [searchTerm, setSearchTerm] = useState("")
  const [showCelebration, setShowCelebration] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredSongs = deadSongs.filter((song) => song.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleSongDrop = (songTitle: string, cellIndex: number) => {
    const newCard = [...bingoCard]
    newCard[cellIndex] = songTitle
    setBingoCard(newCard)
  }

  const handleClearCard = () => {
    setBingoCard(Array(25).fill(null))
  }

  const checkForBingo = () => {
    if (bingoCard.every((cell) => cell !== null)) {
      setShowCelebration(true)
    }
  }

  useEffect(() => {
    checkForBingo()
  }, [bingoCard])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-dead-cream">
      {/* Purple Header Banner */}
      <div className="purple-banner">SETLIST BINGO - DRAG SONGS TO YOUR CARD!</div>

      {/* Navigation */}
      <div className="bg-dead-cream border-b-2 border-black py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href={`/shows/${showId}`}>
            <Button variant="ghost" className="font-dead-body">
              <ArrowLeft className="w-4 h-4 mr-2" />
              BACK TO GAMES
            </Button>
          </Link>

          <h1 className="text-3xl md:text-4xl font-dead text-black">SETLIST BINGO</h1>

          <Button onClick={handleClearCard} className="btn-yellow font-dead-body">
            <RotateCcw className="w-4 h-4 mr-2" />
            CLEAR CARD
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Bingo Board */}
          <div className="lg:col-span-3">
            <BingoBoard bingoCard={bingoCard} onSongDrop={handleSongDrop} />
          </div>

          {/* Song Selection */}
          <div className="space-y-6">
            <Card className="dead-card p-6">
              <h2 className="font-dead text-xl text-black mb-4 text-center">SONG COLLECTION</h2>

              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search songs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-2 border-black font-dead-body"
                />
              </div>

              <div className="max-h-96 overflow-y-auto space-y-3">
                {filteredSongs.map((song) => (
                  <SongCard key={song} title={song} isDraggable={true} />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      <CelebrationModal
        isOpen={showCelebration}
        onClose={() => setShowCelebration(false)}
        title="BINGO CARD COMPLETE!"
        message="Your vibes have been captured! May the music play on! 🌹"
      />
    </div>
  )
}
