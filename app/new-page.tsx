'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, BookOpen, Zap, Download, Code, Sparkles, Rocket, Target, Settings } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { Button } from '@/components/ui/Button'
import { CodeSnippet } from '@/components/ui/CodeSnippet'
import { SectionNavigation } from '@/components/ui/SectionNavigation'
import { AutoSetup } from '@/components/ui/AutoSetup'

export default function NewHome() {
  const [isTocOpen, setIsTocOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />

      <div className="flex">
        {/* Table of Contents */}
        <TableOfContents
          isOpen={isTocOpen}
          onClose={() => setIsTocOpen(false)}
        />

        {/* Main Content */}
        <main className="flex-1 pt-16">
          {/* Hero Section - Problem Statement */}
          <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-red-900/20 dark:via-orange-900/20 dark:to-yellow-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg"
                >
                  <span className="text-4xl">🤔</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="text-red-600 dark:text-red-400">こんな経験</span>
                  <br />
                  <span className="text-gray-900 dark:text-white">ありませんか？</span>
                </h1>

                {/* Problem Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16"
                >
                  {[
                    {
                      emoji: '🤖',
                      title: 'AIが的外れな提案をする',
                      description: 'プロジェクトの構成や使用技術を理解してくれない'
                    },
                    {
                      emoji: '🔄',
                      title: '毎回同じ説明をする',
                      description: 'コーディング規約やプロジェクトルールを毎回説明'
                    },
                    {
                      emoji: '😅',
                      title: '生成コードが微妙',
                      description: '使えないコードが生成されて修正に時間がかかる'
                    },
                    {
                      emoji: '👥',
                      title: 'チームで一貫性がない',
                      description: 'メンバーごとにAIの使い方やルールがバラバラ'
                    },
                  ].map((problem, index) => (
                    <motion.div
                      key={problem.title}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-red-500"
                    >
                      <div className="text-4xl mb-4">{problem.emoji}</div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {problem.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {problem.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Solution Teaser */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="mt-16 p-8 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-2xl border border-green-200 dark:border-green-700"
                >
                  <h2 className="text-3xl font-bold mb-4 text-green-700 dark:text-green-400">
                    ✨ でも、大丈夫！
                  </h2>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                    これらの問題は<strong>「Cursor」と「Cursor Rules」</strong>で全て解決できます
                  </p>
                  <Button
                    onClick={() => document.getElementById('what-is-cursor')?.scrollIntoView({ behavior: 'smooth' })}
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    解決方法を見る
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* What is Cursor Section */}
          <section id="what-is-cursor" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">Cursor</span>とは？
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  次世代AI統合開発環境 - あなたのコーディングパートナー
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    🚀 CursorはAIを内蔵したコードエディタ
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: '🧠',
                        title: 'Claude 3.5 Sonnet搭載',
                        description: '最先端のAIがコードを理解し、的確な提案をします'
                      },
                      {
                        icon: '⚡',
                        title: 'リアルタイム補完',
                        description: 'タイピング中に最適なコードを瞬時に提案'
                      },
                      {
                        icon: '💬',
                        title: 'チャット形式で相談',
                        description: 'プロジェクト全体を理解したAIと対話しながら開発'
                      },
                      {
                        icon: '🔧',
                        title: 'コマンド実行',
                        description: 'ファイル編集、リファクタリング、バグ修正を自動実行'
                      }
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                      >
                        <span className="text-2xl">{feature.icon}</span>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-xl p-6 text-green-400 font-mono text-sm overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="ml-4 text-gray-400">Cursor AI Editor</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-blue-400">💬 あなた: Reactのコンポーネントを作って</div>
                    <div className="text-green-400">🤖 Cursor: このプロジェクトのTypeScript設定に合わせて...</div>
                    <div className="bg-gray-800 p-3 rounded mt-4">
                      <div className="text-purple-400">const</div>
                      <div className="text-yellow-400 ml-4">Button</div>
                      <div className="text-white ml-8">{'= ({ children, onClick }: ButtonProps) => {'}</div>
                      <div className="text-gray-500 ml-12">{'// プロジェクトのスタイルに合致したコード'}</div>
                      <div className="text-white ml-8">{'}'}</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Transition to Cursor Rules */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-xl p-8 border border-yellow-200 dark:border-yellow-700">
                  <h3 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">
                    🎯 でも、もっと賢くできます
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    Cursorがあなたのプロジェクトを深く理解し、<br />
                    チーム全体で一貫した最高品質のコードを生成するには？
                  </p>
                  <Button
                    onClick={() => document.getElementById('cursor-rules')?.scrollIntoView({ behavior: 'smooth' })}
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
                  >
                    <Target className="w-5 h-5 mr-2" />
                    答えは「Cursor Rules」
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Cursor Rules Section */}
          <section id="cursor-rules" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Settings className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">Cursor Rules</span>とは？
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  AIに「あなたのプロジェクトのルール」を教える魔法の設定ファイル
                </p>
              </motion.div>

              {/* Before/After Comparison */}
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {/* Before */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-700"
                >
                  <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-400 flex items-center">
                    <span className="text-2xl mr-2">😵</span>
                    Cursor Rules なし
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-red-600 dark:text-red-400">
                      <span className="mr-2">❌</span>
                      プロジェクト構造を理解しない
                    </div>
                    <div className="flex items-center text-red-600 dark:text-red-400">
                      <span className="mr-2">❌</span>
                      一般的すぎるコード生成
                    </div>
                    <div className="flex items-center text-red-600 dark:text-red-400">
                      <span className="mr-2">❌</span>
                      毎回ルールを説明する必要
                    </div>
                    <div className="flex items-center text-red-600 dark:text-red-400">
                      <span className="mr-2">❌</span>
                      チームで統一性がない
                    </div>
                  </div>
                </motion.div>

                {/* After */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700"
                >
                  <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-400 flex items-center">
                    <span className="text-2xl mr-2">✨</span>
                    Cursor Rules あり
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-green-600 dark:text-green-400">
                      <span className="mr-2">✅</span>
                      プロジェクト専用AI
                    </div>
                    <div className="flex items-center text-green-600 dark:text-green-400">
                      <span className="mr-2">✅</span>
                      最適化されたコード生成
                    </div>
                    <div className="flex items-center text-green-600 dark:text-green-400">
                      <span className="mr-2">✅</span>
                      一度設定すれば永続的
                    </div>
                    <div className="flex items-center text-green-600 dark:text-green-400">
                      <span className="mr-2">✅</span>
                      チーム全体で統一された品質
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* How it works */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                  🔮 Cursor Rulesの仕組み
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      step: '1',
                      title: 'ルール設定',
                      description: 'プロジェクトのルールをMarkdownファイルに記述',
                      icon: '📝'
                    },
                    {
                      step: '2', 
                      title: 'AI学習',
                      description: 'CursorがルールをAIに適用して理解',
                      icon: '🧠'
                    },
                    {
                      step: '3',
                      title: '最適化',
                      description: 'プロジェクトに特化したコードを生成',
                      icon: '🚀'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                        {item.step}
                      </div>
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Transition to kinopee */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl p-8 border border-indigo-200 dark:border-indigo-700">
                  <h3 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">
                    ⭐ 実は、最強のCursor Rulesがあります
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    <strong>「kinopee」</strong>という開発者が作成した、<br />
                    実戦で磨き上げられた最高品質のCursor Rules
                  </p>
                  <Button
                    onClick={() => document.getElementById('kinopee-rules')?.scrollIntoView({ behavior: 'smooth' })}
                    size="lg"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    kinopee Rulesを導入する
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* kinopee Rules Setup */}
          <section id="kinopee-rules" className="py-24 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">kinopee Rules</span>
                  <br />
                  ワンクリック導入
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  実戦で磨かれた最高品質のCursor Rules - 3ステップで完了
                </p>
              </motion.div>

              {/* kinopee Rules特徴 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                    🌟 kinopee Rulesの特徴
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        icon: '🎯',
                        title: '精密な最適化',
                        description: 'プロジェクト構造を深く理解したAI提案'
                      },
                      {
                        icon: '🚫',
                        title: '手戻り防止',
                        description: 'バージョン後退やエラーループを自動回避'
                      },
                      {
                        icon: '🤝',
                        title: 'チーム統一',
                        description: '一貫したコーディングスタイルで品質向上'
                      }
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {feature.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <AutoSetup />
            </div>
          </section>

          {/* Footer CTA */}
          <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  🎉 これで完璧！
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  kinopee Cursor Rulesの導入で、あなたの開発効率は飛躍的に向上します。<br />
                  チーム全体で一貫した高品質なコードを生成しましょう。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => document.getElementById('kinopee-rules')?.scrollIntoView({ behavior: 'smooth' })}
                    size="lg"
                    className="bg-white text-black hover:bg-gray-100"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    今すぐ設定する
                  </Button>
                  <Button
                    onClick={() => setIsTocOpen(true)}
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    詳細ガイドを見る
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Navigation */}
          <SectionNavigation />

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg z-50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        </main>
      </div>
    </div>
  )
} 