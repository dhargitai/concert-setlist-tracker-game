"use client"

import type React from "react"
import { useState } from "react"
import { Music } from "lucide-react"

interface SetlistSlotProps {
  slotId: string
  slotNumber: number
  song: string | null
  onSongDrop: (songTitle: string, slotId: string) => void
}

export default function SetlistSlot({ slotId, slotNumber, song, onSongDrop }: SetlistSlotProps) {
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const songTitle = e.dataTransfer.getData("text/plain")
    if (songTitle) {
      onSongDrop(songTitle, slotId)
    }
    setIsDragOver(false)
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        setlist-slot
        ${song ? "filled" : ""}
        ${isDragOver ? "drag-over" : ""}
      `}
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dead-purple text-white flex items-center justify-center">
        <span className="font-dead text-sm">{slotNumber}</span>
      </div>

      <div className="flex-1">
        {song ? (
          <span className="font-dead-body text-black">{song}</span>
        ) : (
          <div className="flex items-center gap-2 text-gray-500">
            <Music className="w-4 h-4" />
            <span className="font-dead-body text-sm">DROP SONG HERE</span>
          </div>
        )}
      </div>
    </div>
  )
}
