'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './Button'

interface SectionNavigationProps {
  previousSection?: {
    id: string
    title: string
  }
  nextSection?: {
    id: string
    title: string
  }
  className?: string
}

export function SectionNavigation({ previousSection, nextSection, className = '' }: SectionNavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (!previousSection && !nextSection) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex justify-between items-center py-8 border-t border-gray-200 dark:border-gray-700 ${className}`}
    >
      <div className="flex-1">
        {previousSection && (
          <Button
            onClick={() => scrollToSection(previousSection.id)}
            variant="ghost"
            size="lg"
            className="group text-left p-4 h-auto flex-col items-start hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300"
          >
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              <ChevronLeft className="w-4 h-4 mr-1" />
              前のセクション
            </div>
            <div className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {previousSection.title}
            </div>
          </Button>
        )}
      </div>

      <div className="flex-1 flex justify-end">
        {nextSection && (
          <Button
            onClick={() => scrollToSection(nextSection.id)}
            variant="ghost"
            size="lg"
            className="group text-right p-4 h-auto flex-col items-end hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300"
          >
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              次のセクション
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
            <div className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {nextSection.title}
            </div>
          </Button>
        )}
      </div>
    </motion.div>
  )
} 