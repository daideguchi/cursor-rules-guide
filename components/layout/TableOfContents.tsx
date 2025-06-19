'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, BookOpen, X } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

interface TocItem {
  id: string
  title: string
  icon: string
  description: string
  subsections?: { id: string; title: string }[]
}

interface TableOfContentsProps {
  isOpen: boolean
  onClose: () => void
}

const tocItems: TocItem[] = [
  {
    id: 'hero',
    title: 'はじめに',
    icon: '🤔',
    description: 'こんな経験ありませんか？',
    subsections: [],
  },
  {
    id: 'what-is-cursor',
    title: 'Cursorとは？',
    icon: '💻',
    description: 'AI統合開発環境の理解',
    subsections: [],
  },
  {
    id: 'cursor-rules',
    title: 'Cursor Rulesとは？',
    icon: '🎯',
    description: '基本概念と効果の理解',
    subsections: [],
  },
  {
    id: 'mdc-files',
    title: '.mdcファイルの正体',
    icon: '📄',
    description: 'ファイル形式と構造の学習',
    subsections: [],
  },
  {
    id: 'custom-rules',
    title: 'カスタムルール運用',
    icon: '⚙️',
    description: 'チーム開発での実践的運用戦略',
    subsections: [
      { id: 'rule-types', title: 'Rule Type分類' },
      { id: 'custom-commands', title: 'カスタムコマンド' },
      { id: 'team-strategy', title: 'チーム運用戦略' },
      { id: 'local-testing', title: 'ローカルテスト手法' },
    ],
  },
  {
    id: 'setup-custom-rules',
    title: 'カスタムルールセットアップ',
    icon: '🚀',
    description: '実戦で磨かれた設定例',
    subsections: [],
  },
]

export function TableOfContents({ isOpen, onClose }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>('')
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  // 各セクションのrefを作成
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // 各セクションの可視性を監視
  const sectionInView = useInView({
    threshold: 0.2,
    rootMargin: '-20% 0px -80% 0px',
  })

  // セクションの可視性が変更されたときの処理
  useEffect(() => {
    const currentRefs = sectionRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-20% 0px -80% 0px',
      }
    );

    // 各セクションを監視
    Object.values(currentRefs).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      Object.values(currentRefs).forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  // セクションへのスクロール
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // ヘッダーの高さ分のオフセット
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
    if (window.innerWidth < 1024) {
      onClose()
    }
  }

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: -320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -320, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-16 left-0 bottom-0 w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-50 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-primary-600" />
                  <h3 className="text-lg font-semibold">目次</h3>
                </div>
                <button
                  onClick={onClose}
                  className="lg:hidden p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>読み進み度</span>
                  <span>{Math.round((tocItems.findIndex(item => item.id === activeSection) + 1) / tocItems.length * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${(tocItems.findIndex(item => item.id === activeSection) + 1) / tocItems.length * 100}%` 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* TOC Items */}
              <nav className="space-y-1">
                {tocItems.map((item, index) => {
                  const isActive = activeSection === item.id
                  const isExpanded = expandedSections.has(item.id)
                  const hasSubsections = item.subsections && item.subsections.length > 0

                  return (
                    <div key={item.id} className="space-y-1">
                      <motion.button
                        onClick={() => {
                          scrollToSection(item.id)
                          if (hasSubsections) {
                            toggleSection(item.id)
                          }
                        }}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-200 group ${
                          isActive
                            ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 shadow-sm'
                            : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                        }`}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 flex-1">
                            <span className="text-lg">{item.icon}</span>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium truncate">
                                {item.title}
                              </h4>
                              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          {hasSubsections && (
                            <ChevronRight 
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isExpanded ? 'rotate-90' : ''
                              }`} 
                            />
                          )}
                        </div>
                      </motion.button>

                      {/* Subsections */}
                      <AnimatePresence>
                        {hasSubsections && isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-6 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                              {item.subsections?.map((subsection) => (
                                <button
                                  key={subsection.id}
                                  onClick={() => scrollToSection(subsection.id)}
                                  className="block w-full text-left p-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                                >
                                  {subsection.title}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 