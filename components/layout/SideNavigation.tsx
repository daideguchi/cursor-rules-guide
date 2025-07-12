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
  sections?: Array<{
    id: string
    title: string
    subsections: Array<{ id: string; title: string }>
  }>
  activeSection?: string
}

const navigationItems: NavigationItem[] = [
  {
    id: 'hero',
    title: 'Cursor Rules 完全ガイド',
    description: 'AIを理想的な開発パートナーに'
  },
  {
    id: 'introduction',
    title: '1. はじめに：Cursor Rulesの力',
    description: 'AIを単なるツールから理想的な開発パートナーへ',
    children: [
      { id: 'introduction', title: 'Cursor Rulesとは？' },
      { id: 'introduction', title: '開発効率の劇的向上' },
      { id: 'introduction', title: '推奨動画' }
    ]
  },
  {
    id: 'when-to-use',
    title: '2. 設定すべきタイミング',
    description: 'AIの出力品質を改善する最適なタイミング',
    children: [
      { id: 'when-to-use', title: '効果的な設定時期' },
      { id: 'when-to-use', title: '活用場面の判断' }
    ]
  },
  {
    id: 'basics',
    title: '3. 基本設定とファイル構造',
    description: 'Cursor Rulesの基本的な書き方と構造',
    children: [
      { id: 'basics', title: 'ファイル構造' },
      { id: 'basics', title: '基本的な書き方' },
      { id: 'basics', title: '設定例' }
    ]
  },
  {
    id: 'rule-types',
    title: '4. ルールタイプの使い分け',
    description: '目的に応じたルールの種類と使い方',
    children: [
      { id: 'rule-types', title: 'プロジェクト全体ルール' },
      { id: 'rule-types', title: 'ファイルタイプ別ルール' },
      { id: 'rule-types', title: 'タスク特化ルール' }
    ]
  },
  {
    id: 'slash-commands',
    title: '5. スラッシュコマンド完全ガイド',
    description: 'より効率的な開発のためのコマンド活用',
    children: [
      { id: 'slash-commands', title: '基本コマンド' },
      { id: 'slash-commands', title: '高度なコマンド' },
      { id: 'slash-commands', title: 'カスタムコマンド' }
    ]
  },
  {
    id: 'best-practices',
    title: '6. 効果的なルール記述',
    description: '品質の高いルールを書くためのベストプラクティス',
    children: [
      { id: 'best-practices', title: '記述のコツ' },
      { id: 'best-practices', title: 'よくある間違い' },
      { id: 'best-practices', title: '改善方法' }
    ]
  },
  {
    id: 'practical-examples',
    title: '7. 実践的な活用例',
    description: '実際のプロジェクトでの活用パターン',
    children: [
      { id: 'practical-examples', title: 'Web開発' },
      { id: 'practical-examples', title: 'モバイル開発' },
      { id: 'practical-examples', title: 'API開発' }
    ]
  },
  {
    id: 'advanced-techniques',
    title: '8. 高度なテクニック',
    description: '上級者向けの応用テクニック'
  },
  {
    id: 'troubleshooting',
    title: '9. トラブルシューティング',
    description: 'よくある問題と解決方法'
  },
  {
    id: 'enterprise-cases',
    title: '10. 企業導入事例',
    description: '実際の企業での成功事例'
  },
  {
    id: 'industry-templates',
    title: '11. 業種別MDCテンプレート集',
    description: '業種別の専用テンプレート'
  },
  {
    id: 'asagami-integration',
    title: '12. asagami AI連携',
    description: '次世代学習システムとの連携'
  },
  {
    id: 'one-command-setup',
    title: '13. ワンコマンド環境構築',
    description: '即座にセットアップできる自動化ツール',
    children: [
      { id: 'one-command-setup', title: '自動セットアップ' },
      { id: 'one-command-setup', title: 'テンプレート選択' },
      { id: 'one-command-setup', title: 'カスタマイズ' }
    ]
  },
  {
    id: 'continuous-improvement',
    title: '14. 継続的改善の実践',
    description: 'チーム運用での活用と継続的改善'
  }
]

export function SideNavigation({ isOpen, onToggle, sections = [], activeSection = '' }: SideNavigationProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['introduction', 'when-to-use', 'basics', 'rule-types', 'slash-commands', 'best-practices', 'practical-examples', 'one-command-setup'])
  
  // Use passed sections or fallback to default navigationItems
  const items = sections.length > 0 ? sections : navigationItems

  // Scroll tracking is handled by parent component

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
            {items.map((item, index) => (
              <div key={item.id}>
                <motion.button
                  onClick={() => {
                    if ((item as any).subsections?.length > 0 || (item as any).children) {
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
                      {(item as any).description && (
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {(item as any).description}
                        </div>
                      )}
                    </div>
                    <ChevronRight 
                      className={`w-4 h-4 transition-transform ${
                        (item as any).subsections?.length > 0 || (item as any).children
                          ? expandedSections.includes(item.id) ? 'rotate-90' : ''
                          : activeSection === item.id ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`}
                    />
                  </div>
                </motion.button>

                {/* 子メニュー */}
                {((item as any).subsections?.length > 0 || (item as any).children) && expandedSections.includes(item.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-4 mt-1 space-y-1"
                  >
                    {((item as any).subsections || (item as any).children || []).map((child: any, childIndex: number) => (
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
                {Math.round(((navigationItems.findIndex(item => item.id === activeSection) + 1) / navigationItems.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <motion.div
                className="bg-blue-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${Math.max(10, ((navigationItems.findIndex(item => item.id === activeSection) + 1) / navigationItems.length) * 100)}%`
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 space-y-2">
            <button
              onClick={() => scrollToSection('one-command-setup')}
              className="w-full p-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium text-sm hover:from-green-600 hover:to-blue-600 transition-all"
            >
              ⚡ ワンコマンド設定
            </button>
            <button
              onClick={() => scrollToSection('practical-examples')}
              className="w-full p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium text-sm hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              🚀 実践的な活用例
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
            {items.map((item, index) => (
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
                    {(item as any).description && (
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {(item as any).description}
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
              onClick={() => {
                scrollToSection('one-command-setup')
                onToggle()
              }}
              className="w-full p-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium text-sm hover:from-green-600 hover:to-blue-600 transition-all"
            >
              ⚡ ワンコマンド設定
            </button>
            <button
              onClick={() => {
                scrollToSection('practical-examples')
                onToggle()
              }}
              className="w-full p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium text-sm hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              🚀 実践的な活用例
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  )
} 