'use client'

import { useState, useEffect, useCallback } from 'react'

export function ProgressBarProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0)

  const updateProgress = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    setProgress(Math.min(scrollPercent, 100))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [updateProgress])

  return (
    <>
      <div 
        className="progress-bar"
        style={{ width: `${progress}%` }}
      />
      {children}
    </>
  )
} 