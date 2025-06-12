'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Menu, X } from 'lucide-react'

interface NavigationItem {
  id: string
  title: string
  description?: string
  children?: NavigationItem[]
}

interface SideNavigationProps {
  isOpen: boolean
  onToggle: () => void
}

const navigationItems: NavigationItem[] = [
  {
    id: 'hero',
    title: 'こんな経験ありませんか？',
    description: '開発現場でよくある問題'
  },
  {
    id: 'cursor-rules-setup',
    title: 'ワンコマンド導入',
    description: '3ステップで完了'
  },
  {
    id: 'what-is-cursor',
    title: 'Cursorとは？',
    description: 'AI統合開発環境の紹介'
  },
  {
    id: 'cursor-rules',
    title: 'Cursor Rulesとは？',
    description: 'AIの理解を深める設定'
  },
  {
    id: 'one-command-rules',
    title: 'ワンコマンドルール',
    description: '実戦で磨かれた最高品質'
  },
  {
    id: 'mdc-explanation',
    title: '.mdcファイルって何？',
    description: 'AIへのお仕事マニュアル'
  },
  {
    id: 'best-practices',
    title: '効果的な活用テクニック',
    description: '推奨される使い方と避けるべき使い方'
  },
  {
    id: 'use-cases',
    title: 'こんな場面で大活躍',
    description: '実際のプロジェクトでの活用例'
  },
  {
    id: 'troubleshooting',
    title: 'よくある質問',
    description: 'トラブルシューティング'
  }
]

export function SideNavigation({ isOpen, onToggle }: SideNavigationProps) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id)
          break
        }
      }
    }

    // 初期設定
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed top-20 left-4 z-50 lg:hidden bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>

      {/* Side Navigation */}
      <aside className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-40 overflow-y-auto">
        <div className="p-6">
          <h2 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">
            📚 目次
          </h2>
          
          <nav className="space-y-2">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 group ${
                  activeSection === item.id
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-700 dark:text-blue-300'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-sm mb-1">
                      {item.title}
                    </div>
                    {item.description && (
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {item.description}
                      </div>
                    )}
                  </div>
                  <ChevronRight 
                    className={`w-4 h-4 transition-transform ${
                      activeSection === item.id ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`}
                  />
                </div>
              </motion.button>
            ))}
          </nav>

          {/* Progress Indicator */}
          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                進捗
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {Math.round(((navigationItems.findIndex(item => item.id === activeSection) + 1) / navigationItems.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <motion.div
                className="bg-blue-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${((navigationItems.findIndex(item => item.id === activeSection) + 1) / navigationItems.length) * 100}%` 
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 space-y-2">
            <button
              onClick={() => scrollToSection('cursor-rules-setup')}
              className="w-full p-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium text-sm hover:from-green-600 hover:to-blue-600 transition-all"
            >
              ⚡ ワンコマンド設定
            </button>
            <button
              onClick={() => scrollToSection('one-command-rules')}
              className="w-full p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium text-sm hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              🚀 カスタムルール
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Side Navigation */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="lg:hidden fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-40 overflow-y-auto"
      >
        <div className="p-6">
          <h2 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">
            📚 目次
          </h2>
          
          <nav className="space-y-2">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id)
                  onToggle()
                }}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 group ${
                  activeSection === item.id
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-700 dark:text-blue-300'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-sm mb-1">
                      {item.title}
                    </div>
                    {item.description && (
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {item.description}
                      </div>
                    )}
                  </div>
                  <ChevronRight 
                    className={`w-4 h-4 transition-transform ${
                      activeSection === item.id ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`}
                  />
                </div>
              </motion.button>
            ))}
          </nav>

          {/* Progress Indicator */}
          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                進捗
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {Math.round(((navigationItems.findIndex(item => item.id === activeSection) + 1) / navigationItems.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <motion.div
                className="bg-blue-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${((navigationItems.findIndex(item => item.id === activeSection) + 1) / navigationItems.length) * 100}%` 
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 space-y-2">
            <button
              onClick={() => scrollToSection('cursor-rules-setup')}
              className="w-full p-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium text-sm hover:from-green-600 hover:to-blue-600 transition-all"
            >
              ⚡ ワンコマンド設定
            </button>
            <button
              onClick={() => scrollToSection('one-command-rules')}
              className="w-full p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium text-sm hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              🚀 カスタムルール
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  )
} 