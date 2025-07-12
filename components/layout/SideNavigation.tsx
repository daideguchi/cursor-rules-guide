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
    title: 'はじめに',
    description: 'Cursor Rules完全ガイドの概要'
  },
  {
    id: 'ai-driven-development',
    title: 'AI駆動開発の全体像',
    description: '2つの革新的手法の比較'
  },
  {
    id: 'learning-path',
    title: '段階的学習パス',
    description: '5つのレベルで体系的に学習'
  },
  {
    id: 'level-1',
    title: 'レベル1: はじめの一歩',
    description: 'Cursorとは？AIコーディングの基本',
    children: [
      { id: 'what-is-cursor', title: 'Cursorって何？' },
      { id: 'cursor-vs-vscode', title: 'VS Codeとの違い' },
      { id: 'ai-coding-revolution', title: 'AI開発の革命的メリット' },
      { id: 'cursor-features', title: 'Cursorの主要機能' }
    ]
  },
  {
    id: 'level-2',
    title: 'レベル2: ワンコマンド体験',
    description: '最高品質のCursor Rulesを3ステップで導入',
    children: [
      { id: 'auto-setup', title: '自動セットアップ' },
      { id: 'cursor-rules-explanation', title: 'Cursor Rulesとは？' },
      { id: 'mdc-files', title: '.mdcファイルの仕組み' }
    ]
  },
  {
    id: 'level-3',
    title: 'レベル3: プロジェクト適用',
    description: 'プロジェクトタイプ別のCursor Rules活用法',
    children: [
      { id: 'web-development', title: 'Webアプリケーション開発' },
      { id: 'mobile-development', title: 'モバイルアプリ開発' },
      { id: 'backend-development', title: 'Backend/API開発' },
      { id: 'data-science', title: 'データサイエンス/ML開発' }
    ]
  },
  {
    id: 'level-4',
    title: 'レベル4: チーム運用',
    description: 'チーム開発での活用と継続的改善',
    children: [
      { id: 'roi-measurement', title: 'ROI測定と効果分析' },
      { id: 'implementation-roadmap', title: '3ヶ月導入ロードマップ' },
      { id: 'best-practices', title: 'ベストプラクティス集' },
      { id: 'success-stories', title: '実際のチーム成功事例' }
    ]
  },
  {
    id: 'level-5',
    title: 'レベル5: Claude Code Company',
    description: 'AIエージェント組織による並列処理',
    children: [
      { id: 'claude-company-setup', title: 'セットアップガイド' },
      { id: 'claude-company-tasks', title: 'タスク管理と指示方法' },
      { id: 'claude-company-best-practices', title: '運用ベストプラクティス' },
      { id: 'claude-company-use-cases', title: '実践的な活用例' }
    ]
  },
  {
    id: 'conclusion',
    title: 'まとめ',
    description: 'Cursor Rulesマスターへの道'
  }
]

export function SideNavigation({ isOpen, onToggle }: SideNavigationProps) {
  const [activeSection, setActiveSection] = useState('')
  const [expandedSections, setExpandedSections] = useState<string[]>(['level-1', 'level-2', 'level-3', 'level-4', 'level-5'])

  useEffect(() => {
    const handleScroll = () => {
      // 全てのセクションIDを収集（親と子の両方）
      const allSectionIds: string[] = []
      navigationItems.forEach(item => {
        allSectionIds.push(item.id)
        if (item.children) {
          item.children.forEach(child => allSectionIds.push(child.id))
        }
      })

      const sections = allSectionIds.map(id => document.getElementById(id)).filter(Boolean)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(allSectionIds[i])
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

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

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
      <aside className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-40 overflow-y-auto shadow-lg">
        <div className="p-6">
          <h2 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">
            📚 目次
          </h2>
          
          <nav className="space-y-1">
            {navigationItems.map((item, index) => (
              <div key={item.id}>
                <motion.button
                  onClick={() => {
                    if (item.children) {
                      toggleSection(item.id)
                    } else {
                      scrollToSection(item.id)
                    }
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
                        item.children 
                          ? expandedSections.includes(item.id) ? 'rotate-90' : ''
                          : activeSection === item.id ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`}
                    />
                  </div>
                </motion.button>

                {/* 子メニュー */}
                {item.children && expandedSections.includes(item.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-4 mt-1 space-y-1"
                  >
                    {item.children.map((child, childIndex) => (
                      <motion.button
                        key={child.id}
                        onClick={() => scrollToSection(child.id)}
                        className={`w-full text-left p-2 rounded-md transition-all duration-200 text-sm ${
                          activeSection === child.id
                            ? 'bg-blue-100 dark:bg-blue-800/30 text-blue-700 dark:text-blue-300 border-l-2 border-blue-500'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400'
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: childIndex * 0.03 }}
                      >
                        {child.title}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Progress Indicator */}
          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                学習進捗
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {(() => {
                  if (activeSection.includes('level-1') || activeSection === 'what-is-cursor' || activeSection === 'cursor-vs-vscode' || activeSection === 'ai-coding-revolution' || activeSection === 'cursor-features') return '25%'
                  if (activeSection.includes('level-2') || activeSection === 'auto-setup' || activeSection === 'cursor-rules-explanation' || activeSection === 'mdc-files') return '50%'
                  if (activeSection.includes('level-3') || activeSection === 'web-development' || activeSection === 'mobile-development' || activeSection === 'backend-development' || activeSection === 'data-science') return '75%'
                  if (activeSection.includes('level-4') || activeSection === 'roi-measurement' || activeSection === 'implementation-roadmap' || activeSection === 'best-practices' || activeSection === 'success-stories') return '100%'
                  return '10%'
                })()}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <motion.div
                className="bg-blue-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: (() => {
                    if (activeSection.includes('level-1') || activeSection === 'what-is-cursor' || activeSection === 'cursor-vs-vscode' || activeSection === 'ai-coding-revolution' || activeSection === 'cursor-features') return '25%'
                    if (activeSection.includes('level-2') || activeSection === 'auto-setup' || activeSection === 'cursor-rules-explanation' || activeSection === 'mdc-files') return '50%'
                    if (activeSection.includes('level-3') || activeSection === 'web-development' || activeSection === 'mobile-development' || activeSection === 'backend-development' || activeSection === 'data-science') return '75%'
                    if (activeSection.includes('level-4') || activeSection === 'roi-measurement' || activeSection === 'implementation-roadmap' || activeSection === 'best-practices' || activeSection === 'success-stories') return '100%'
                    return '10%'
                  })()
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 space-y-2">
            <button
              onClick={() => scrollToSection('level-2')}
              className="w-full p-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium text-sm hover:from-green-600 hover:to-blue-600 transition-all"
            >
              ⚡ ワンコマンド設定
            </button>
            <button
              onClick={() => scrollToSection('level-3')}
              className="w-full p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium text-sm hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              🚀 プロジェクト適用
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