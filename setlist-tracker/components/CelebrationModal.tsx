"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface CelebrationModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
}

export default function CelebrationModal({ isOpen, onClose, title, message }: CelebrationModalProps) {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    if (isOpen) {
      const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
      }))
      setConfetti(particles)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      {/* Confetti */}
      {confetti.map((particle) => (
        <div
          key={particle.id}
          className="absolute top-0 w-3 h-3 bg-dead-yellow rounded-full animate-bounce"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: "3s",
          }}
        />
      ))}

      <Card className="dead-card max-w-md w-full bg-white">
        <CardHeader className="text-center relative">
          <Button onClick={onClose} variant="ghost" size="sm" className="absolute top-2 right-2">
            <X className="w-4 h-4" />
          </Button>

          <div className="mb-4">
            <div className="w-20 h-20 bg-dead-purple rounded-full flex items-center justify-center mx-auto">
              <span className="text-4xl">🎵</span>
            </div>
          </div>

          <h2 className="font-dead text-2xl text-black mb-4">{title}</h2>
        </CardHeader>

        <CardContent className="text-center pb-8">
          <p className="font-dead-body text-lg text-black mb-6 leading-relaxed">{message}</p>

          <Button onClick={onClose} className="btn-yellow font-dead text-lg px-8 py-3">
            KEEP ON TRUCKIN'!
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
