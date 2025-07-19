"use client"

import type React from "react"
import { Music } from "lucide-react"

interface SongCardProps {
  title: string
  isDraggable?: boolean
}

export default function SongCard({ title, isDraggable = false }: SongCardProps) {
  const handleDragStart = (e: React.DragEvent) => {
    if (isDraggable) {
      e.dataTransfer.setData("text/plain", title)
      e.dataTransfer.effectAllowed = "copy"
    }
  }

  return (
    <div draggable={isDraggable} onDragStart={handleDragStart} className="song-card">
      <div className="flex items-center space-x-3">
        <Music className="w-5 h-5 text-dead-purple flex-shrink-0" />
        <span className="font-dead-body text-black text-sm truncate">{title}</span>
      </div>
    </div>
  )
}
