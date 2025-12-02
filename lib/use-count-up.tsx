"use client"

import { useState, useEffect } from "react"

export function useCountUp(end: number, duration = 2000, start = 0) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      if (progress < duration) {
        const nextCount = Math.floor((progress / duration) * (end - start) + start)
        setCount(nextCount)
        animationFrame = requestAnimationFrame(countUp)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(countUp)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, start])

  return count
}

