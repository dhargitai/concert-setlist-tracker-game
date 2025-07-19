"use client"

import type React from "react"
import { useState } from "react"
import { Music } from "lucide-react"
import { Card } from "@/components/ui/card"

interface BingoBoardProps {
  bingoCard: (string | null)[]
  onSongDrop: (songTitle: string, cellIndex: number) => void
}

export default function BingoBoard({ bingoCard, onSongDrop }: BingoBoardProps) {
  const [dragOverCell, setDragOverCell] = useState<number | null>(null)

  const handleDragOver = (e: React.DragEvent, cellIndex: number) => {
    e.preventDefault()
    setDragOverCell(cellIndex)
  }

  const handleDragLeave = () => {
    setDragOverCell(null)
  }

  const handleDrop = (e: React.DragEvent, cellIndex: number) => {
    e.preventDefault()
    const songTitle = e.dataTransfer.getData("text/plain")
    if (songTitle) {
      onSongDrop(songTitle, cellIndex)
    }
    setDragOverCell(null)
  }

  return (
    <Card className="dead-card p-8">
      <h2 className="font-dead text-2xl text-black text-center mb-8 bg-dead-purple text-white py-3 rounded-lg">
        YOUR BINGO CARD
      </h2>

      <div className="grid grid-cols-5 gap-3 max-w-2xl mx-auto">
        {bingoCard.map((song, index) => (
          <div
            key={index}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, index)}
            className={`
              bingo-cell
              ${song ? "filled" : ""}
              ${dragOverCell === index ? "drag-over" : ""}
            `}
          >
            {song ? (
              <span className="font-dead-body text-xs text-black leading-tight p-1">{song}</span>
            ) : (
              <Music className="w-6 h-6 text-dead-purple opacity-50" />
            )}
          </div>
        ))}
      </div>

      <p className="text-center mt-6 font-dead-body text-black">
        DRAG SONGS FROM THE COLLECTION TO FILL YOUR BINGO CARD!
      </p>
    </Card>
  )
}
