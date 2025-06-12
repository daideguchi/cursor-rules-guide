'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { Button } from './Button'
import { CodeSnippet } from './CodeSnippet'

interface TemplateCardProps {
  title: string
  description: string
  code: string
  language?: string
  tags: string[]
  category: string
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  className?: string
}

export function TemplateCard({ 
  title, 
  description, 
  code, 
  language = 'typescript',
  tags, 
  category, 
  difficulty = 'beginner',
  className = '' 
}: TemplateCardProps) {
  const [copied, setCopied] = useState(false)
  const [showCode, setShowCode] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-300',
    intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-300',
    advanced: 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-300'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{description}</p>
        </div>
        <Button
          onClick={copyToClipboard}
          variant="outline"
          size="sm"
          className={`ml-4 ${copied ? 'bg-green-100 border-green-300 text-green-700' : ''}`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-1" />
              コピー済み
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-1" />
              コピー
            </>
          )}
        </Button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}>
          {difficulty}
        </span>
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Toggle Code View */}
      <div className="space-y-4">
        <Button
          onClick={() => setShowCode(!showCode)}
          variant="ghost"
          size="sm"
          className="w-full"
        >
          {showCode ? 'コードを隠す' : 'コードを表示'}
        </Button>

        {showCode && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CodeSnippet
              code={code}
              language={language}
              title={title}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
} 