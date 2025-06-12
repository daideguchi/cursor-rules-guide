'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { Button } from './Button'

interface CodeSnippetProps {
  code: string
  language?: string
  title?: string
  className?: string
  showCopyButton?: boolean
}

export function CodeSnippet({ code, language = 'text', title, className = '', showCopyButton = true }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative bg-gray-900 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg ${className}`}
    >
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-700 border-b border-gray-700">
          <span className="text-sm text-gray-300 font-medium">{title}</span>
          <span className="text-xs text-gray-500 uppercase tracking-wide">{language}</span>
        </div>
      )}
      
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
          <code className="text-gray-100 font-mono">{code}</code>
        </pre>
        
        {showCopyButton && (
          <Button
            onClick={copyToClipboard}
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-600 backdrop-blur-sm"
            animated={true}
          >
            <motion.div
              key={copied ? 'check' : 'copy'}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </motion.div>
          </Button>
        )}
      </div>
    </motion.div>
  )
} 