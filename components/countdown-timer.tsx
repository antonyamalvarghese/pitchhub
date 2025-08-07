'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface CountdownTimerProps {
  deadline: Date
  className?: string
}

export function CountdownTimer({ deadline, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState('')
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime()
      const deadlineTime = deadline.getTime()
      const difference = deadlineTime - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

        if (days > 0) {
          setTimeLeft(`${days}d ${hours}h`)
        } else if (hours > 0) {
          setTimeLeft(`${hours}h ${minutes}m`)
        } else {
          setTimeLeft(`${minutes}m`)
        }
        setIsExpired(false)
      } else {
        setTimeLeft('Expired')
        setIsExpired(true)
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 60000)

    return () => clearInterval(interval)
  }, [deadline])

  return (
    <span className={cn(
      isExpired ? 'text-red-600 font-semibold' : 'text-gray-600',
      className
    )}>
      {timeLeft}
    </span>
  )
}
