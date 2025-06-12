'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Menu, X, Sun, Moon, Monitor, Github, Download } from 'lucide-react'
import { useTheme } from '@/components/providers/ThemeProvider'
import { Button } from '@/components/ui/Button'
import { SearchModal } from '@/components/ui/SearchModal'

interface HeaderProps {
  onMenuToggle: () => void
  isMenuOpen: boolean
}

export function Header({ onMenuToggle, isMenuOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const themeOptions = [
    { value: 'light', icon: Sun, label: 'ライト' },
    { value: 'dark', icon: Moon, label: 'ダーク' },
    { value: 'system', icon: Monitor, label: 'システム' },
  ]

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80">
        <div className="h-16" />
      </header>
    )
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CR</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold gradient-text">
                Cursor Rules Guide
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                完全マスターガイド
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#introduction"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              はじめに
            </a>
            <a
              href="#setup"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              セットアップ
            </a>
            <a
              href="#templates"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              テンプレート
            </a>
            <a
              href="#troubleshooting"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              困った時は
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:flex"
            >
              <Search className="w-4 h-4" />
              <span className="ml-2 hidden md:block">検索</span>
            </Button>

            {/* Download Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('https://cursor.sh', '_blank')}
              className="hidden sm:flex glow-on-hover"
            >
              <Download className="w-4 h-4" />
              <span className="ml-2 hidden md:block">Cursor DL</span>
            </Button>

            {/* Theme Toggle */}
            <div className="relative">
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as any)}
                className="appearance-none bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {themeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* GitHub Link */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('https://github.com/cursor-rules', '_blank')}
              className="hidden sm:flex"
            >
              <Github className="w-4 h-4" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onMenuToggle}
              className="lg:hidden"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-4 space-y-3">
              <a
                href="#introduction"
                onClick={onMenuToggle}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                はじめに
              </a>
              <a
                href="#setup"
                onClick={onMenuToggle}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                セットアップ
              </a>
              <a
                href="#templates"
                onClick={onMenuToggle}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                テンプレート
              </a>
              <a
                href="#troubleshooting"
                onClick={onMenuToggle}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                困った時は
              </a>
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                  className="w-full mb-2"
                >
                  <Search className="w-4 h-4 mr-2" />
                  検索
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => window.open('https://cursor.sh', '_blank')}
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Cursor をダウンロード
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </motion.header>
  )
} 