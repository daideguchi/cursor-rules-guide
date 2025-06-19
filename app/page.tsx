'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, BookOpen, Zap, Download, GitBranch, Settings, ChevronDown, Code, Sparkles, Rocket, Target, Users, AlertTriangle, PlayCircle, CheckCircle } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { TableOfContents } from '@/components/layout/TableOfContents'
import { SideNavigation } from '@/components/layout/SideNavigation'
import { Button } from '@/components/ui/Button'
import { CodeSnippet } from '@/components/ui/CodeSnippet'
import { SectionNavigation } from '@/components/ui/SectionNavigation'
import { AutoSetup } from '@/components/ui/AutoSetup'

export default function Home() {
  const [isTocOpen, setIsTocOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)

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
        {/* Side Navigation */}
        <SideNavigation
          isOpen={isSideNavOpen}
          onToggle={() => setIsSideNavOpen(!isSideNavOpen)}
        />

        {/* Table of Contents */}
        <TableOfContents
          isOpen={isTocOpen}
          onClose={() => setIsTocOpen(false)}
        />

        {/* Main Content */}
        <main className="flex-1 pt-16 lg:ml-80">
          {/* Hero Section - Simple Introduction */}
          <section id="hero" className="py-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Cursor Rules 完全ガイド
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
                  エディタは使えるけど、もっと効率的に開発したい方へ。<br />
                  AIを使ったプログラミングを段階的にマスターしましょう。
                </p>
                
                {/* Learning Path Overview */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 max-w-2xl mx-auto">
                  <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-4">
                    このガイドで身につくこと
                  </h2>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">Cursorの基本理解</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">AI開発の実践方法</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">プロジェクト別設定</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">チーム運用ノウハウ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI-Driven Development Overview */}
          <section id="ai-driven-development" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-green-900/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  🚀 AI駆動開発の全体像
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                  開発やタスクを爆速で正確に行うための2つの革新的手法
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Cursor Rules */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📋</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Cursor Rules
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      個人開発者向け・基本手法
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">1</span>
                      </span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">AIアシスタントの専門化</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          .mdcファイルでAIに専門知識と作業ルールを教え込む
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">2</span>
                      </span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">一貫した高品質コード</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          プロジェクト固有のルールで統一された開発スタイル
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">3</span>
                      </span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">3-10倍の開発速度</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          AI支援により劇的な効率化を実現
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                    <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">適用範囲</h5>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• 個人プロジェクト</li>
                      <li>• 小〜中規模チーム開発</li>
                      <li>• Webアプリ、モバイルアプリ、API開発</li>
                      <li>• データサイエンス・機械学習</li>
                    </ul>
                  </div>
                  
                  <button
                    onClick={() => document.getElementById('level-1')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Cursor Rulesを学ぶ
                  </button>
                </div>

                {/* Claude Code Company */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🏭</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Claude Code Company
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold">
                      上級者向け・並列処理手法
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">1</span>
                      </span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">AIエージェント組織化</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          複数のClaude Codeを「社員」として組織的に運用
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">2</span>
                      </span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">大規模タスクの並列処理</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          複雑なプロジェクトを分割して同時進行
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">3</span>
                      </span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">80%以上の時間短縮</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          従来手法を大幅に上回る効率化を実現
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 mb-6">
                    <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">適用範囲</h5>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• 大規模プロジェクト</li>
                      <li>• レガシーシステム改修</li>
                      <li>• 技術調査・学習</li>
                      <li>• 複数機能の同時開発</li>
                    </ul>
                  </div>
                  
                  <button
                    onClick={() => document.getElementById('level-5')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Claude Code Companyを学ぶ
                  </button>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  📊 2つの手法の比較
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">項目</th>
                        <th className="text-center py-3 px-4 font-semibold text-blue-600 dark:text-blue-400">Cursor Rules</th>
                        <th className="text-center py-3 px-4 font-semibold text-purple-600 dark:text-purple-400">Claude Code Company</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-gray-400">
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 px-4 font-medium">難易度</td>
                        <td className="py-3 px-4 text-center">⭐⭐☆☆☆ 初心者〜中級者</td>
                        <td className="py-3 px-4 text-center">⭐⭐⭐⭐⭐ 上級者</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 px-4 font-medium">設定時間</td>
                        <td className="py-3 px-4 text-center">5分（ワンコマンド）</td>
                        <td className="py-3 px-4 text-center">30分〜1時間</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 px-4 font-medium">効率化倍率</td>
                        <td className="py-3 px-4 text-center">3〜10倍</td>
                        <td className="py-3 px-4 text-center">5〜20倍</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 px-4 font-medium">適用規模</td>
                        <td className="py-3 px-4 text-center">個人〜小チーム</td>
                        <td className="py-3 px-4 text-center">大規模プロジェクト</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">推奨順序</td>
                        <td className="py-3 px-4 text-center">🥇 まずはここから</td>
                        <td className="py-3 px-4 text-center">🥈 Cursor Rules習得後</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Path Navigation */}
          <section id="learning-path" className="py-16 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  段階的学習パス
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  あなたのレベルに合わせて進んでください。順番通りでも、興味のある部分からでもOKです。
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  {
                    level: 'レベル1',
                    title: 'はじめの一歩',
                    description: 'Cursorって何？AIコーディングの基本を理解',
                    time: '10分',
                    icon: <PlayCircle className="w-6 h-6" />,
                    color: 'blue',
                    href: '#level-1'
                  },
                  {
                    level: 'レベル2',
                    title: 'ワンコマンド体験',
                    description: '最高品質のCursor Rulesを3ステップで導入',
                    time: '5分',
                    icon: <Rocket className="w-6 h-6" />,
                    color: 'green',
                    href: '#level-2'
                  },
                  {
                    level: 'レベル3',
                    title: 'プロジェクト適用',
                    description: 'あなたのプロジェクトに合わせてカスタマイズ',
                    time: '15分',
                    icon: <Settings className="w-6 h-6" />,
                    color: 'purple',
                    href: '#level-3'
                  },
                  {
                    level: 'レベル4',
                    title: 'チーム運用',
                    description: 'チーム開発での活用と継続的改善',
                    time: '20分',
                    icon: <Users className="w-6 h-6" />,
                    color: 'orange',
                    href: '#level-4'
                  },
                  {
                    level: 'レベル5',
                    title: 'AI組織運用',
                    description: 'Claude Code Companyで大規模開発を並列処理',
                    time: '30分',
                    icon: <span className="text-lg">🏭</span>,
                    color: 'red',
                    href: '#level-5'
                  }
                ].map((level, index) => (
                  <motion.div
                    key={level.level}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => document.querySelector(level.href)?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <div className={`bg-white dark:bg-gray-900 rounded-lg p-6 border-2 hover:border-${level.color}-500 transition-all duration-200 h-full`}>
                      <div className={`flex items-center justify-center w-12 h-12 bg-${level.color}-100 dark:bg-${level.color}-900/30 rounded-lg mb-4 text-${level.color}-600 dark:text-${level.color}-400`}>
                        {level.icon}
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                        {level.level}
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        {level.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {level.description}
                      </p>
                      <div className={`text-${level.color}-600 dark:text-${level.color}-400 text-sm font-medium`}>
                        学習時間: {level.time}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Level 1: First Steps */}
          <section id="level-1" className="py-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                  <PlayCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    レベル1: はじめの一歩
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Cursorとは何か、AIコーディングの基本を理解しましょう
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                {/* What is Cursor */}
                <div id="what-is-cursor">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Cursorって何？
                  </h3>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                      CursorはMicrosoftのVS Codeをベースに、最新のAI技術（GPT-4、Claude）を統合したプログラミング専用エディタです。
                      普通のエディタとは違い、AIがあなたのコーディングパートナーとして常に隣にいてくれます。
                    </p>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">🤔 もっと簡単に言うと...</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        プログラミングって、コンピューターに「こんなことをして」と指示を出すことです。
                        でも、その指示の書き方（プログラミング言語）はとても複雑で、覚えるのが大変でした。
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Cursorは、そこに「とても賢いAIアシスタント」が付いているエディタ（文章を書くソフト）です。
                        あなたが「ログイン画面を作りたい」と普通の日本語で言うだけで、
                        AIが「分かりました！こんなコードはどうですか？」と提案してくれます。
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        まるで、プログラミングがとても上手な先輩が隣に座って、
                        「ここはこう書くといいよ」「このエラーはこうやって直すんだよ」と
                        教えてくれているような感じです。
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">従来の開発フロー</h4>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">1</div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">仕様書やドキュメントを読み込む（30分〜1時間）</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">2</div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">コードを一行ずつ手作業で記述（2〜4時間）</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">3</div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">エラーやバグを自力で調査・修正（1〜2時間）</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">4</div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">テストコードの作成とデバッグ（1時間）</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                          <p className="text-sm font-semibold text-red-600">合計: 4.5〜8時間</p>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-green-200 dark:border-green-700">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Cursorでの開発フロー</h4>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">1</div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">「ログイン機能を作って」と自然言語で指示（30秒）</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">2</div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">AIが最適なコードを自動生成（10〜30分）</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">3</div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">エラーがあれば原因と修正案を即座に提示（5〜10分）</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 mt-1 text-xs font-bold">4</div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">テストコードも一緒に生成済み（追加時間なし）</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-green-200 dark:border-green-600">
                          <p className="text-sm font-semibold text-green-600">合計: 45分〜1.5時間</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3">実際の開発現場での声</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                                                     <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                             &ldquo;React Nativeは初めてだったけど、Cursorが手取り足取り教えてくれるから、3日でアプリのプロトタイプが完成した&rdquo;
                           </p>
                           <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">- スタートアップCTO</p>
                         </div>
                         <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                           <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                             &ldquo;SQLが苦手だったけど、複雑な集計クエリもCursorに聞けば即座に解決。データ分析の効率が5倍になった&rdquo;
                           </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">- データアナリスト</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* VS Code vs Cursor */}
                <div id="cursor-vs-vscode">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    VS Codeとの違い
                  </h3>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 mb-12">
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                      「VS Codeと何が違うの？」という疑問をお持ちの方も多いでしょう。
                      CursorはVS Codeをベースにしていますが、AI機能が根本的に異なります。
                    </p>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 mb-6">
                      <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-4">📚 身近な例で説明すると...</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        <strong>VS Code + GitHub Copilot</strong>は、「辞書付きのワープロ」のようなものです。
                        文章を書いているときに「この単語の次はこれかな？」と予測してくれますが、
                        文章全体の構成や内容は自分で考える必要があります。
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>Cursor</strong>は、「優秀な家庭教師付きのワープロ」です。
                        「読書感想文を書きたい」と言うだけで、「どんな本について書きますか？」
                        「構成はこうしましょう」「この部分はもう少し詳しく書いてみませんか？」
                        と、最初から最後まで一緒に考えてくれます。
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                        <h4 className="font-bold text-gray-700 dark:text-gray-400 mb-4 text-center">VS Code + GitHub Copilot</h4>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                          <li className="flex items-start">
                            <span className="text-yellow-500 mr-2">⚠️</span>
                            <span>コード補完が主な機能</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-yellow-500 mr-2">⚠️</span>
                            <span>プロジェクト全体の理解が限定的</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-yellow-500 mr-2">⚠️</span>
                            <span>複数ファイルの同時編集が困難</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-yellow-500 mr-2">⚠️</span>
                            <span>自然言語での指示に制限</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                        <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-4 text-center">Cursor</h4>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">✅</span>
                            <span>プロジェクト全体を理解したAI支援</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">✅</span>
                            <span>複数ファイルの同時生成・編集</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">✅</span>
                            <span>自然言語で複雑な指示が可能</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">✅</span>
                            <span>Cursor Rulesでカスタマイズ可能</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3">🎯 実際の違いを体感してみましょう</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        例：「ユーザー認証機能を作って」という指示の場合
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">VS Code + Copilot:</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            一つずつファイルを開いて、関数ごとに補完を受ける必要がある
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">Cursor:</p>
                          <p className="text-xs text-blue-600 dark:text-blue-400">
                            ログイン画面、API、データベース設計まで一度に生成可能
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Coding Revolution */}
                <div id="ai-coding-revolution">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    AI開発の革命的メリット
                  </h3>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 mb-12">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Rocket className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3">開発速度 3-10倍</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          従来1日かかっていた機能実装が、わずか数時間で完成
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3">学習コスト激減</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          新しい技術も、AIが教えながら実装してくれるので習得が早い
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Target className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3">品質の標準化</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          ベストプラクティスに基づいたコードが自動生成される
                        </p>
                      </div>
                    </div>
                    
                                          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 mb-6">
                        <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🎯 中学生でも分かる例で説明</h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          <strong>従来のプログラミング</strong>は、「外国語の辞書を使って、一文字ずつ手紙を書く」ようなものでした。
                          分からない単語があるたびに辞書を引いて、文法を確認して、とても時間がかかりました。
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          <strong>AI駆動開発</strong>は、「その外国語がペラペラの友達が隣にいて、一緒に手紙を書いてくれる」感じです。
                          あなたが「こんな内容の手紙を書きたい」と日本語で言うだけで、
                          友達が「じゃあこんな風に書こうか」と提案してくれます。
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                          間違いがあれば「ここはこう直した方がいいよ」と教えてくれるし、
                          「もっとかっこいい表現にしようか」と改善案も出してくれます。
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4">🚀 実際の開発現場での変化</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-2">従来の開発</h5>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <li>• ドキュメント読み込み：30分〜1時間</li>
                            <li>• コード実装：2〜4時間</li>
                            <li>• デバッグ・修正：1〜2時間</li>
                            <li>• テスト作成：1時間</li>
                            <li className="font-semibold text-red-600">合計：4.5〜8時間</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-2">AI駆動開発</h5>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <li>• 要件を自然言語で指示：30秒</li>
                            <li>• AI自動コード生成：10〜30分</li>
                            <li>• AI支援デバッグ：5〜10分</li>
                            <li>• テスト自動生成：追加時間なし</li>
                            <li className="font-semibold text-green-600">合計：45分〜1.5時間</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cursor Features Deep Dive */}
                <div id="cursor-features">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Cursorの革新的な機能たち
                  </h3>
                  
                  <div className="grid gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                          <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Tab補完（神機能）</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        コードを書き始めると、Tabキー一回で次に書くであろうコードを予測・自動補完。
                        まるでAIが頭の中を読んでいるかのような体験です。
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">あなたが書いたコード:</p>
                        <code className="text-sm text-blue-600 dark:text-blue-400">const handleSubmit = (</code>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-2">Tabキーを押すと...</p>
                                                 <code className="text-sm text-green-600 dark:text-green-400">
                           {`const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // バリデーション処理
  // API送信処理
}`}
                         </code>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                          <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Cmd+K（コードジェネレーター）</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Cmd+Kを押して自然言語で指示すると、その場でコードを生成・編集。
                        「この関数にエラーハンドリングを追加して」「この部分をTypeScript化して」など、何でもOK。
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">実際の指示例:</p>
                        <ul className="space-y-1">
                                                     <li className="text-sm text-gray-700 dark:text-gray-300">・ &ldquo;この関数にローディング状態を追加して&rdquo;</li>
                           <li className="text-sm text-gray-700 dark:text-gray-300">・ &ldquo;エラーが起きた時のtry-catch文を書いて&rdquo;</li>
                           <li className="text-sm text-gray-700 dark:text-gray-300">・ &ldquo;レスポンシブ対応のCSSを追加して&rdquo;</li>
                           <li className="text-sm text-gray-700 dark:text-gray-300">・ &ldquo;このAPIレスポンスの型定義を作って&rdquo;</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                          <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Cmd+L（チャット機能）</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        現在のコードファイルの内容を理解した上で、AIとチャット形式で相談可能。
                        「なぜこのエラーが出るの？」「この関数をもっと効率的にするには？」など、何でも聞けます。
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">👤 あなた:</p>
                                                         <p className="text-sm text-gray-700 dark:text-gray-300">&ldquo;このReactコンポーネントのパフォーマンスを改善したいです&rdquo;</p>
                           </div>
                           <div>
                             <p className="text-sm font-medium text-green-600 dark:text-green-400">🤖 Cursor AI:</p>
                             <p className="text-sm text-gray-700 dark:text-gray-300">&ldquo;コードを分析しました。以下の3つの改善案があります：1) useMemoDでの値のメモ化、2) useCallbackでの関数のメモ化、3) 不要な再レンダリングの防止。具体的な実装コードも提示しますね。&rdquo;</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why AI Coding */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    なぜAIコーディングが革命的なのか？
                  </h3>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-8 mb-8">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                      AI開発の3つの革命的メリット
                    </h4>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center border border-green-200 dark:border-green-700">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Rocket className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h5 className="font-bold text-gray-900 dark:text-white mb-3">開発速度 3-10倍</h5>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                          従来1日かかっていた機能実装が、わずか数時間で完成
                        </p>
                        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                          <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">実例</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            ユーザー認証システム<br />
                            従来: 8時間 → AI活用: 1.5時間
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center border border-blue-200 dark:border-blue-700">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h5 className="font-bold text-gray-900 dark:text-white mb-3">学習コスト 80%削減</h5>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                          新技術習得時間を大幅短縮、実践しながら自然に身につく
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                          <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">実例</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            TypeScript習得<br />
                            従来: 2週間 → AI活用: 3日
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center border border-purple-200 dark:border-purple-700">
                        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Target className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h5 className="font-bold text-gray-900 dark:text-white mb-3">品質向上 50%</h5>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                          ベストプラクティス自動適用でバグ率大幅減少
                        </p>
                        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                          <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">実例</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            本番バグ発生率<br />
                            従来: 15件/月 → AI活用: 7件/月
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Real World Examples */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      実際のプロジェクトでの成果事例
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-4">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                          <h5 className="font-semibold text-gray-900 dark:text-white">ECサイト構築プロジェクト</h5>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">開発期間</span>
                            <span className="font-medium text-gray-900 dark:text-white">3ヶ月 → 6週間</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">チーム規模</span>
                            <span className="font-medium text-gray-900 dark:text-white">5名 → 3名</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">開発コスト</span>
                            <span className="font-medium text-green-600">60%削減</span>
                          </div>
                          <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              決済システム、在庫管理、レコメンド機能すべてをAIアシスト開発で効率化
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-4">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                          <h5 className="font-semibold text-gray-900 dark:text-white">モバイルアプリ開発</h5>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">プロトタイプ</span>
                            <span className="font-medium text-gray-900 dark:text-white">2週間 → 3日</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">テストコード</span>
                            <span className="font-medium text-gray-900 dark:text-white">100%自動生成</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">新技術習得</span>
                            <span className="font-medium text-blue-600">実践と同時進行</span>
                          </div>
                          <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              React Native初心者がプロダクション品質のアプリを短期間で開発
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Success Factors */}
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 mt-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Sparkles className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2" />
                      AI開発成功の秘訣
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white mb-2">✅ 成功パターン</h5>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• 具体的で明確な指示を出す</li>
                          <li>• プロジェクト固有のルール設定</li>
                          <li>• 段階的な機能追加</li>
                          <li>• AIとの対話を重視</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white mb-2">❌ 失敗パターン</h5>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• 曖昧な要求でAIに丸投げ</li>
                          <li>• プロジェクト特性を考慮しない</li>
                          <li>• 生成コードのレビューを怠る</li>
                          <li>• 一度に複雑すぎる実装を要求</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* But... */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    でも、課題もあります
                  </h3>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      AIは確かに強力ですが、あなたのプロジェクトの特徴は知りません。
                    </p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <li>• 使用する技術スタック（React、Vue、Pythonなど）</li>
                      <li>• プロジェクトの構成やファイル配置</li>
                      <li>• チームのコーディング規約</li>
                      <li>• 設計方針やパフォーマンス要件</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 mt-4 font-semibold">
                      ここで登場するのが「Cursor Rules」です！
                    </p>
                  </div>
                </div>

                {/* Next Level Button */}
                <div className="text-center pt-8">
                  <Button
                    onClick={() => document.getElementById('level-2')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    レベル2: ワンコマンド体験に進む
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Level 2: One Command Setup */}
          <section id="level-2" className="py-20 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                  <Rocket className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    レベル2: ワンコマンド体験
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    実戦で磨かれた最高品質のCursor Rulesをたった3ステップで導入
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                {/* Auto Setup Section */}
                <div id="auto-setup">
                  <AutoSetup />
                </div>

                {/* Cursor Rules Explanation */}
                <div id="cursor-rules-explanation">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Cursor Rulesって何？
                  </h3>
                  
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                      Cursor RulesはAIに「あなたのプロジェクトの作り方」を教える設定ファイルです。
                      まるで新しく入った開発者に「うちの会社ではこんな風にコードを書くんだよ」と
                      教えるマニュアルのようなものです。
                    </p>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6">
                      <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🏠 家庭のルールで例えると...</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        家族にはそれぞれ「家庭のルール」がありますよね。
                        「靴は玄関で揃える」「食事の前は手を洗う」「宿題は夕食前に終わらせる」など。
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        新しく家に来た人（お友達やお客さん）に、いちいち
                        「うちでは靴はこう置くんだよ」「お箸はここにあるよ」と説明するのは大変です。
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>Cursor Rules</strong>は、AIに対する「家庭のルールブック」です。
                        一度書いておけば、AIは「この家（プロジェクト）のやり方」を覚えて、
                        いつも同じように、きちんとしたコードを書いてくれるようになります。
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                        <h4 className="font-bold text-red-700 dark:text-red-400 mb-4">❌ Cursor Rulesなしの場合</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li>• AIが毎回違うスタイルでコードを書く</li>
                          <li>• プロジェクトの構造を理解してくれない</li>
                          <li>• 使いたい技術を指定するのに毎回説明が必要</li>
                          <li>• チームメンバーによって生成されるコードがバラバラ</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                        <h4 className="font-bold text-green-700 dark:text-green-400 mb-4">✅ Cursor Rulesありの場合</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li>• 一貫したスタイルでコードが生成される</li>
                          <li>• プロジェクトの構造を理解して適切な場所にファイルを作成</li>
                          <li>• 使用技術を自動的に判断して最適なコードを生成</li>
                          <li>• チーム全員が同じ品質のコードを書ける</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                      <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-4">💡 実際の効果</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        例えば、「ユーザー登録機能を作って」と指示した場合：
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Cursor Rulesなし:</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            「どの技術を使いますか？」「ファイルはどこに置きますか？」「どんなスタイルで書きますか？」
                            と毎回質問される
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Cursor Rulesあり:</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            プロジェクトの設定を理解して、適切な場所に適切な技術で
                            一貫したスタイルのコードを自動生成
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MDC Files Explanation */}
                <div id="mdc-files">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    .mdcファイルの仕組み
                  </h3>
                  
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                      .mdcファイルは、AIへの「取扱説明書」です。一度設定すれば、
                      あなたの専属AIアシスタントとして、いつでも同じ品質でコードを書いてくれます。
                    </p>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 mb-6">
                      <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-4">🎨 絵を描く時の例で考えてみよう</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        美術の授業で、新しく来た先生に絵を描いてもらうとします。
                        何も説明しないと、先生は「どんな絵を描けばいいの？」と困ってしまいます。
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        そこで、あなたは先生に説明書を渡します：<br/>
                        <strong>「設定」</strong>：水彩絵の具を使って、A4の紙に描いてください<br/>
                        <strong>「指示」</strong>：明るい色を使って、楽しい雰囲気にしてください<br/>
                        <strong>「参考」</strong>：この写真のような感じで描いてください
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>.mdcファイル</strong>も同じです。AIという「とても優秀な先生」に、
                        「どんな道具で」「どんな風に」「何を参考にして」コードを書いてほしいかを
                        教えるための説明書なのです。
                      </p>
                    </div>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          📝 .mdcファイルの3つの部分
                        </h4>
                        
                        <div className="space-y-4">
                          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500">
                            <h5 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">1. 設定部分（上の方）</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              「このプロジェクトはNext.jsを使います」「TypeScriptで書いてください」
                              といった基本的な設定を書く部分
                            </p>
                          </div>
                          
                          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
                            <h5 className="font-semibold text-green-700 dark:text-green-400 mb-2">2. 指示部分（真ん中）</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              「デザインを勝手に変更しないで」「セキュリティを重視して」
                              といった、あなたの要望を書く部分
                            </p>
                          </div>
                          
                          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border-l-4 border-orange-500">
                            <h5 className="font-semibold text-orange-700 dark:text-orange-400 mb-2">3. 参照部分（下の方）</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              「このファイルを参考にして」「この書き方に合わせて」
                              といった、お手本を示す部分
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          🎯 実際のファイル例
                        </h4>
                        
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                          <div className="space-y-4">
                            <div className="border-l-4 border-blue-500 pl-4">
                              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">設定部分の例:</p>
                              <code className="text-xs text-gray-700 dark:text-gray-300">
                                # プロジェクト設定<br/>
                                - Next.js 14 を使用<br/>
                                - TypeScript で型安全性を保つ<br/>
                                - Tailwind CSS でスタイリング
                              </code>
                            </div>
                            
                            <div className="border-l-4 border-green-500 pl-4">
                              <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">指示部分の例:</p>
                              <code className="text-xs text-gray-700 dark:text-gray-300">
                                # 重要なルール<br/>
                                - レスポンシブデザインを必ず実装<br/>
                                - アクセシビリティを考慮<br/>
                                - セキュリティを最優先
                              </code>
                            </div>
                            
                            <div className="border-l-4 border-orange-500 pl-4">
                              <p className="text-sm font-medium text-orange-600 dark:text-orange-400 mb-1">参照部分の例:</p>
                              <code className="text-xs text-gray-700 dark:text-gray-300">
                                # 参考ファイル<br/>
                                - components/ui/Button.tsx を参考に<br/>
                                - 既存のAPIパターンに合わせて
                              </code>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
                        <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-3">
                          ✨ つまり、.mdcファイルは...
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          あなたの開発スタイルを覚えて、いつでも同じ品質でコードを書いてくれる
                          <strong>「専属アシスタント」</strong>を作るためのファイルなのです！
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-8">
                <Button
                  onClick={() => document.getElementById('level-3')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  レベル3: プロジェクト適用に進む
                </Button>
              </div>
            </div>
          </section>

          {/* Level 3: Project Application */}
          <section id="level-3" className="py-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                  <Settings className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    レベル3: プロジェクト適用
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    あなたのプロジェクトに合わせてCursor Rulesをカスタマイズしましょう
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                {/* Simplified Project Selection */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    あなたの作りたいものはどれですか？
                  </h3>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">🎯 まずは「何を作りたいか」を決めよう</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      プログラミングで作れるものは、大きく分けて3つあります。
                      どれを作りたいかによって、AIに教える内容（Cursor Rules）が変わってきます。
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      まずは「自分が何を作りたいのか」を決めて、それに合った設定を選びましょう。
                      最初は1つだけ選んで、慣れてきたら他のものにも挑戦してみてください。
                    </p>
                  </div>
                  
                  <div className="max-w-2xl mx-auto space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
                      <div className="flex items-center">
                        <span className="text-4xl mr-4">🌐</span>
                        <div>
                                                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">ウェブサイト</h4>
                        <p className="text-xl text-gray-600 dark:text-gray-400">ホームページやショッピングサイトなど</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
                      <div className="flex items-center">
                        <span className="text-4xl mr-4">📱</span>
                        <div>
                                                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">スマホアプリ</h4>
                        <p className="text-xl text-gray-600 dark:text-gray-400">iPhone・Android対応のアプリ</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 border-2 border-orange-200 dark:border-orange-700">
                      <div className="flex items-center">
                        <span className="text-4xl mr-4">🔧</span>
                        <div>
                                                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">サーバー・データベース</h4>
                        <p className="text-xl text-gray-600 dark:text-gray-400">データを保存・処理するシステム</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Project Customization */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    カスタマイズはたった3ステップ
                  </h3>
                  
                  <div className="max-w-2xl mx-auto space-y-6">
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 flex items-center">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mr-6 text-xl font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">技術を選ぶ</h4>
                        <p className="text-lg text-gray-600 dark:text-gray-400">使いたい技術（React、Pythonなど）を決める</p>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 flex items-center">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mr-6 text-xl font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">ルールを設定する</h4>
                        <p className="text-lg text-gray-600 dark:text-gray-400">「こんな風に作って」という設定を書く</p>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 flex items-center">
                      <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mr-6 text-xl font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">実際に使ってみる</h4>
                        <p className="text-lg text-gray-600 dark:text-gray-400">AIがあなたの指示通りにコードを書いてくれる</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-8">
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                      まずは上の3つから始めて、慣れてきたら少しずつ追加していくのがコツです！
                    </p>
                    <div className="inline-block bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        💡 <strong>初心者の方へ：</strong> 難しく考えず、「AIに教えたいこと」を普通の言葉で書くだけでOKです
                      </p>
                    </div>
                  </div>

                </div>

                {/* Detailed Project Guides */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                    プロジェクトタイプ別 詳細ガイド
                  </h3>
                  
                  {/* Web Application Guide */}
                  <div className="mb-12">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-blue-500 pl-4">
                      🌐 Webアプリケーション開発でのCursor Rules活用法
                    </h4>
                    
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                        Webアプリケーション開発において、Cursor RulesはフルスタックなAI支援を提供します。
                        フロントエンドからバックエンドまで一貫した開発パターンを維持し、
                        レスポンシブデザインとSEO最適化を自動化できます。
                      </p>
                      
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
                        <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">🏪 Webサイトって何？身近な例で説明</h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          <strong>Webサイト・Webアプリ</strong>は、スマホやパソコンのブラウザ（Safari、Chrome等）で見るものです。
                          例えば：Amazon（ネットショップ）、YouTube（動画サイト）、Twitter（SNS）、
                          学校のホームページなど、「インターネットで見れるもの」すべてです。
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                          これらを作るのがWebアプリケーション開発です。
                          お店のホームページから、みんなが使うSNSまで、
                          インターネット上のあらゆるサービスを作ることができます。
                        </p>
                      </div>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">📋 Cursor Rules設定の基本パターン</h5>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
                        <p className="text-blue-800 dark:text-blue-200 font-semibold mb-4">
                          💡 基本設定テンプレート
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm">
                          <pre className="whitespace-pre-wrap">
{`# Webアプリケーション開発 Cursor Rules

## プロジェクト概要
Next.js 14 + TypeScript を使用したフルスタック開発

## コード生成の原則
- Server Components を優先し、必要時のみ Client Components 使用
- TypeScript strict mode で型安全性を保つ
- Tailwind CSS でユーティリティファーストなスタイリング
- SEO最適化とアクセシビリティを常に考慮

## アーキテクチャパターン
- app/ ディレクトリ構造を採用
- API Routes で RESTful エンドポイント構築
- Middleware でセキュリティとパフォーマンス最適化
- 動的ルーティングと Static Site Generation の適切な使い分け`}
                          </pre>
                        </div>
                      </div>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">🎯 効果的なプロンプト戦略</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>ページコンポーネント生成時：</strong><br />
                        「レスポンシブ対応のランディングページを作成。SEO最適化とアクセシビリティ対応も含めて」
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>API エンドポイント作成時：</strong><br />
                        「CRUD操作完備のユーザー管理API。バリデーション、エラーハンドリング、認証も含めて」
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        <strong>パフォーマンス最適化時：</strong><br />
                        「画像最適化とキャッシュ戦略を実装。Core Web Vitals を意識した高速化をして」
                      </p>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">⚡ 開発効率向上のポイント</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        再利用可能なコンポーネントライブラリの構築により、ページ開発時間を75%短縮。
                        APIエンドポイントの自動生成とテストコードの同時作成により、
                        バックエンド開発効率が80%向上します。SEO対策とアクセシビリティも
                        ルールに組み込むことで、品質担保を自動化できます。
                      </p>
                      
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <p className="text-blue-800 dark:text-blue-200 font-semibold">
                          🎯 Cursor Rules活用効果
                          <br />
                          • ページ開発：1ページ2日 → 半日（75%短縮）
                          <br />
                          • API開発：1エンドポイント1日 → 2時間（80%短縮）
                          <br />
                          • SEO対策の実装漏れ：ゼロ（自動化）
                          <br />
                          • コンポーネント再利用率：95%向上
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile App Guide */}
                  <div className="mb-12">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-green-500 pl-4">
                      📱 モバイルアプリ開発でのCursor Rules活用法
                    </h4>
                    
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                        モバイルアプリ開発では、Cursor RulesによるAI支援が特に威力を発揮します。
                        コンポーネントの再利用性、プラットフォーム固有の最適化、
                        そして一貫したUIパターンの実装において、大幅な効率化を実現できます。
                      </p>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6">
                        <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">📱 モバイルアプリって何？身近な例で説明</h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          <strong>モバイルアプリ</strong>は、スマホにダウンロードして使うアプリのことです。
                          例えば：LINE（メッセージアプリ）、Instagram（写真SNS）、ゲームアプリ、
                          電卓アプリ、カメラアプリなど、スマホの画面にアイコンがあるものです。
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                          これらを作るのがモバイルアプリ開発です。
                          みんなが毎日使っているスマホアプリを、自分で作ることができるようになります。
                          iPhoneでもAndroidでも動くアプリを、一度に作ることも可能です。
                        </p>
                      </div>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">📋 Cursor Rules設定の基本パターン</h5>
                      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
                        <p className="text-green-800 dark:text-green-200 font-semibold mb-4">
                          💡 基本設定テンプレート
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm">
                          <pre className="whitespace-pre-wrap">
{`# モバイルアプリ開発 Cursor Rules

## プロジェクト概要
React Native + Expo を使用したクロスプラットフォーム開発

## コード生成の原則
- TypeScript を使用し、型安全性を保つ
- 関数コンポーネントとHooksパターンを採用
- プラットフォーム固有コードは Platform.OS で分岐
- レスポンシブデザインで様々な画面サイズに対応

## 必須パッケージとの連携
- React Navigation for ナビゲーション
- React Native Elements for UIコンポーネント  
- AsyncStorage for ローカルデータ保存
- 必要に応じてネイティブ機能（カメラ、位置情報等）を統合`}
                          </pre>
                        </div>
                      </div>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">🎯 効果的なプロンプト戦略</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>コンポーネント生成時：</strong><br />
                        「iOS・Android両対応のログイン画面コンポーネントを作成して。バリデーション付きで、タッチIDにも対応」
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>ナビゲーション構築時：</strong><br />
                        「タブナビゲーションとスタックナビゲーションを組み合わせた構造で、ディープリンク対応も含めて」
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        <strong>最適化要求時：</strong><br />
                        「リスト表示の パフォーマンスを改善して。大量データでもスムーズにスクロールできるように」
                      </p>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">⚡ 開発効率向上のポイント</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        共通UIパターンの自動生成により、画面開発時間を70%短縮。
                        プラットフォーム固有の調整も、適切なCursor Rules設定により
                        AIが自動的に最適なコードを提案し、手動調整の手間を大幅に削減します。
                        状態管理パターンの統一により、バグの発生率も60%減少し、
                        チーム開発での一貫性も格段に向上します。
                      </p>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <p className="text-green-800 dark:text-green-200 font-semibold">
                          🎯 Cursor Rules活用効果
                          <br />
                          • 画面開発：1画面3日 → 1日（70%短縮）
                          <br />
                          • バグ発生率：60%削減
                          <br />
                          • コードレビュー時間：50%短縮
                          <br />
                          • チーム間コードの一貫性：95%向上
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Backend/API Guide */}
                  <div className="mb-12">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-orange-500 pl-4">
                      🔧 Backend/API開発でのCursor Rules活用法
                    </h4>
                    
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                        Backend/API開発では、Cursor Rulesがセキュリティ、パフォーマンス、
                        スケーラビリティの三要素を統合的に支援します。マイクロサービス設計から
                        データベース最適化まで、エンタープライズレベルの品質を自動化できます。
                      </p>
                      
                      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 mb-6">
                        <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-4">🔧 Backend/APIって何？身近な例で説明</h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          <strong>Backend（バックエンド）</strong>は、「裏側で動いているシステム」のことです。
                          レストランで例えると、お客さんが見えるホール（フロントエンド）に対して、
                          厨房（バックエンド）で料理を作ったり、材料を管理したりする部分です。
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          <strong>API</strong>は、「システム同士が話すための言葉」です。
                          例えば、天気アプリで「今日の天気は？」と聞くと、
                          気象庁のシステムから「晴れです」という答えが返ってきます。
                          この「質問と回答のやりとり」がAPIです。
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                          Backend/API開発は、この「裏側のシステム」と「システム同士の会話」を作ることです。
                          ユーザーには見えませんが、すべてのアプリやWebサイトの基盤となる重要な部分です。
                        </p>
                      </div>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">📋 Cursor Rules設定の基本パターン</h5>
                      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg mb-6">
                        <p className="text-orange-800 dark:text-orange-200 font-semibold mb-4">
                          💡 基本設定テンプレート
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm">
                          <pre className="whitespace-pre-wrap">
{`# Backend/API開発 Cursor Rules

## プロジェクト概要
Node.js + Express + PostgreSQL を使用したRESTful API

## コード生成の原則
- Clean Architecture パターンを採用
- TypeScript strict mode で型安全性を保つ
- OpenAPI 仕様に準拠したAPI設計
- セキュリティファーストの実装

## セキュリティ要件
- JWT による認証・認可システム
- Rate limiting と CORS の適切な設定
- SQL injection, XSS, CSRF 対策の実装
- 機密データの暗号化と環境変数管理

## パフォーマンス最適化
- データベースクエリの最適化
- Redis を使用したキャッシュ戦略
- 非同期処理とエラーハンドリング
- ログ管理とモニタリングの実装`}
                          </pre>
                        </div>
                      </div>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">🎯 効果的なプロンプト戦略</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>認証システム構築時：</strong><br />
                        「JWT認証付きユーザー管理API。ロール管理、パスワードリセット、メール認証も含めて」
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>データベース連携時：</strong><br />
                        「PostgreSQL連携のCRUD API。トランザクション処理、バリデーション、ページネーション付きで」
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        <strong>外部サービス連携時：</strong><br />
                        「Stripe決済API連携。Webhook処理、エラーハンドリング、ログ出力も含めて」
                      </p>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">⚡ 開発効率向上のポイント</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        APIエンドポイントの自動生成とテスト作成により開発時間を85%短縮。
                        セキュリティ要件の自動実装でセキュリティ監査の工数を90%削減。
                        データベース設計パターンの標準化により、保守性が大幅に向上し、
                        チーム間での技術債務を最小限に抑制できます。
                      </p>
                      
                      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                        <p className="text-orange-800 dark:text-orange-200 font-semibold">
                          🎯 Cursor Rules活用効果
                          <br />
                          • API開発：1エンドポイント1日 → 2時間（85%短縮）
                          <br />
                          • セキュリティ実装：自動化により工数90%削減
                          <br />
                          • テストカバレッジ：95%以上を自動達成
                          <br />
                          • データベース最適化：自動的にインデックス提案
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Data Science Guide */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-purple-500 pl-4">
                      🔬 データサイエンス/ML開発でのCursor Rules活用法
                    </h4>
                    
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                        データサイエンス/ML開発では、Cursor Rulesが実験から本番運用まで
                        一貫したワークフローを支援します。探索的データ分析から機械学習モデルの
                        デプロイメントまで、MLOpsのベストプラクティスを自動化できます。
                      </p>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">📋 Cursor Rules設定の基本パターン</h5>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-6">
                        <p className="text-purple-800 dark:text-purple-200 font-semibold mb-4">
                          💡 基本設定テンプレート
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm">
                          <pre className="whitespace-pre-wrap">
{`# データサイエンス/ML開発 Cursor Rules

## プロジェクト概要
Python + pandas + scikit-learn を使用したML開発

## コード生成の原則
- Jupyter Notebook での再現可能な実験環境
- pandas を使った効率的なデータ処理パイプライン
- scikit-learn/PyTorch での標準的なML実装
- MLflow による実験管理とモデル追跡

## データ処理要件
- データ品質チェックとクレンジングの自動化
- 特徴量エンジニアリングのパターン化
- データリークとバイアスの検出
- 適切なデータ分割と検証戦略

## モデル開発とデプロイ
- クロスバリデーションによる性能評価
- ハイパーパラメータ最適化の自動化
- モデル解釈性の確保
- Docker による本番環境デプロイ`}
                          </pre>
                        </div>
                      </div>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">🎯 効果的なプロンプト戦略</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>探索的データ分析時：</strong><br />
                        「売上データの探索的分析。欠損値処理、外れ値検出、相関分析、可視化も含めて」
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        <strong>機械学習モデル構築時：</strong><br />
                        「顧客離脱予測モデル。特徴量選択、クロスバリデーション、性能評価も含めて」
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        <strong>本番デプロイ時：</strong><br />
                        「モデルをAPIとしてデプロイ。バッチ予測、モニタリング、ログ出力も含めて」
                      </p>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">⚡ 開発効率向上のポイント</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        データ前処理パイプラインの自動生成により分析準備時間を80%短縮。
                        モデル評価とハイパーパラメータ最適化の自動化により実験効率が90%向上。
                        MLOpsパイプラインの標準化により、モデルの本番運用までの時間を
                        従来の数ヶ月から数週間に短縮できます。
                      </p>
                      
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <p className="text-purple-800 dark:text-purple-200 font-semibold">
                          🎯 Cursor Rules活用効果
                          <br />
                          • データ前処理：1週間 → 1日（80%短縮）
                          <br />
                          • モデル実験：数十回の実験を自動化（90%効率化）
                          <br />
                          • 本番デプロイ：数ヶ月 → 数週間
                          <br />
                          • 再現性：100%確保（環境統一）
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Next Level Button */}
                <div className="text-center pt-8">
                  <Button
                    onClick={() => document.getElementById('level-4')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    レベル4: チーム運用に進む
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Level 4: Team Operations */}
          <section id="level-4" className="py-20 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-4">
                  <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    レベル4: チーム運用
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    チーム開発でのCursor Rules活用と継続的改善
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                {/* Simple Team Setup */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                    チームで使うと、もっとすごいことが起きます
                  </h3>
                  
                  <div className="max-w-2xl mx-auto space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-4xl">👥</span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">みんな同じようにコードが書ける</h4>
                      <p className="text-xl text-gray-600 dark:text-gray-400">新しく入った人も、ベテランと同じクオリティで開発できる</p>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-4xl">⚡</span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">スピードが2倍以上早くなる</h4>
                      <p className="text-xl text-gray-600 dark:text-gray-400">みんなが同じルールでAIを使うから、チーム全体が速くなる</p>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-4xl">🎯</span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">バグが半分に減る</h4>
                      <p className="text-xl text-gray-600 dark:text-gray-400">AIが一貫したコードを書くから、ミスが格段に少なくなる</p>
                    </div>
                  </div>
                </div>

                {/* Simple Getting Started */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                    さあ、始めてみましょう！
                  </h3>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
                    <div className="text-center mb-8">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">今すぐ体験してみませんか？</h4>
                      <p className="text-lg text-gray-600 dark:text-gray-400">レベル2の3ステップ設定で、すぐに始められます</p>
                    </div>
                                         
                     <div className="flex justify-center">
                      <Button
                        onClick={() => document.getElementById('level-2')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold rounded-xl"
                      >
                        レベル2: 3ステップ設定を試す
                      </Button>
                    </div>
                  </div>

                </div>

                {/* Advanced Team Practices */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                    チームで使うともっとすごいことが起きる
                  </h3>
                  
                  {/* ROI Measurement */}
                  <div className="mb-12">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-blue-500 pl-4">
                      📈 実際にどれくらい効果があるの？
                    </h4>
                    
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                        「本当に効果があるの？」「どれくらい早くなるの？」「費用対効果は？」
                        そんな疑問にお答えします。実際にCursor Rulesを導入したチームの
                        リアルな数字をご紹介します。これを見れば、導入する価値が分かります。
                      </p>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">開発スピードが劇的にアップ</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        例えば、お問い合わせフォームを作る場合、普通なら1日かかる作業が
                        2〜3時間で完成してしまいます。これは50〜70%の時間短縮です。
                        バグ修正も60%早くなるので、「あのバグまだ直らないの？」
                        なんてイライラすることもなくなります。
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        新しく入った人の教育期間も、普通なら3週間かかるところが
                        1週間で済むようになります。なぜなら、AIが同じようなコードを書いてくれるので、
                        「この人のコード、読みにくいなあ...」ということがなくなるからです。
                        ドキュメント作成も80%早くなるので、「資料作りに時間取られて開発できない...」
                        なんてこともありません。
                      </p>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">品質も格段に良くなる</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        「また本番でバグが見つかった...」「緊急メンテナンスで休日出勤...」
                        そんなトラブルが50%減ります。AIが一貫したコードを書いてくれるので、
                        人によってバラバラなコードになることがなく、バグが入り込みにくくなります。
                        テストも95%カバーできるようになるので、安心してリリースできます。
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        コードの読みやすさも95%向上するので、「この人が書いたコード、何してるか分からない...」
                        ということがなくなります。セキュリティの問題も60%減るので、
                        「ハッキングされたらどうしよう...」という心配も減ります。
                      </p>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">お金の面でもメリット大</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        開発コストが30〜50%削減されます。これは人を減らすという意味ではなく、
                        同じ人数でもっとたくさんの機能を作れるようになるということです。
                        メンテナンスの費用も40%減るので、「古いシステムの保守にお金がかかって、
                        新しいことができない...」という悩みも解決します。
                        リリースも2〜3倍早くできるようになるので、競合他社より早く新機能を出せます。
                        投資した分は3〜6ヶ月で回収できるので、とてもお得です。
                        チームのメンバーも80%以上が「仕事が楽になった」と感じるので、
                        離職率も下がります。
                      </p>
                    </div>
                  </div>

                  {/* Implementation Roadmap */}
                  <div className="mb-12">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-green-500 pl-4">
                      🗺️ チーム導入のロードマップ（3ヶ月計画）
                    </h4>
                    
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                        チーム全体でCursor RulesとAI駆動開発を成功させるには、段階的かつ体系的なアプローチが重要です。
                        3ヶ月間の計画的な導入により、チームのスキル向上と組織的な変革を同時に実現できます。
                        この期間でチーム全体の開発文化が根本的に変わり、持続可能な高速開発体制が確立されます。
                      </p>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6">
                        <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🏫 学校のクラブ活動で例えると...</h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          新しいクラブ（プログラミング部）を作って、みんなで一緒に上達していく感じです。
                          最初は基本的な練習から始めて、だんだん難しいことにも挑戦していきます。
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          <strong>1ヶ月目</strong>：基本的な道具の使い方を覚える（Cursorの操作方法）<br/>
                          <strong>2ヶ月目</strong>：実際に作品を作ってみる（本格的な開発）<br/>
                          <strong>3ヶ月目</strong>：コンテストに出場できるレベルになる（チーム全体で高速開発）
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                          3ヶ月後には、みんなが「プログラミングって楽しい！」「こんなに早く作れるなんて！」
                          と感じられるようになります。
                        </p>
                      </div>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">第1ヶ月: 基盤構築期</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        最初の2週間は準備フェーズとして、チーム全員がCursorの基本操作を習得することから始めます。
                        個人差を最小限に抑えるため、共通のテンプレートを使った基本的なCursor Rules設定を全員で実施し、
                        現在の開発フローの詳細な分析と課題の洗い出しを行います。
                        測定指標を明確に設定し、改善効果を客観的に評価できるベースラインを確立します。
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        3〜4週目の試行フェーズでは、リスクの低い小規模な機能（2〜3機能）を選定し、
                        実際のプロダクションコードでの試験運用を開始します。
                        この段階で発見される問題点と改善点を詳細に記録し、
                        週1回30分の定期的な知識共有会を通じてチーム全体のスキル向上を図ります。
                        初期のルール調整とプロジェクト特有のカスタマイズも並行して実施し、
                        次の段階に向けた最適な設定を確立します。
                      </p>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">第2ヶ月: 最適化期</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        5〜6週目の本格運用フェーズでは、実際のプロダクション機能開発にCursor Rulesを全面適用します。
                        プロジェクト固有の要件に応じたルールの追加と精密化を行い、
                        コードレビュープロセスもAI生成コードに最適化されたフローに改善します。
                        この段階から開発速度の定量測定を本格開始し、
                        改善効果を数値で可視化することで、チームのモチベーション向上を図ります。
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        7〜8週目の改善フェーズでは、蓄積された経験をもとにベストプラクティス集を作成し、
                        チーム間での横断的なナレッジ共有体制を確立します。
                        効率化のボトルネックを特定して最適化を行い、
                        CI/CDパイプラインやテスト自動化との統合により、
                        開発からデプロイまでの全工程でAIの恩恵を受けられる環境を構築します。
                      </p>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">第3ヶ月: 成熟期</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        9〜10週目の拡張フェーズでは、成功パターンを他のプロジェクトや部署に横展開し、
                        組織全体のAI駆動開発能力を向上させます。
                        高度なプロンプト技術の習得により、より複雑な要件にも対応できるスキルを身につけ、
                        定型作業の自動化フローを構築することで、さらなる効率向上を実現します。
                        社内でのメンター制度を確立し、継続的なスキル向上とナレッジ共有の仕組みを作ります。
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        最終的な11〜12週目の定着フェーズでは、3ヶ月間の取り組みによるROI効果を詳細に測定し、
                        経営陣への報告資料を作成します。継続的な改善プロセスを制度として確立し、
                        新しく参加するメンバーが迅速にチームに溶け込めるオンボーディングプロセスを整備します。
                        成功事例のドキュメント化と社内共有により、組織全体の知的資産として活用できる体制を構築し、
                        長期的な競争優位性の基盤を確立します。
                      </p>
                    </div>
                  </div>

                  {/* Best Practices Collection */}
                  <div className="mb-12">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-orange-500 pl-4">
                      💡 チーム開発でのベストプラクティス集
                    </h4>
                    
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                        チーム開発でCursor Rulesを最大限活用するには、技術的な側面だけでなく、
                        コミュニケーション、品質管理、継続的改善の仕組みを体系的に構築することが重要です。
                        以下のベストプラクティスは、多くの成功チームで実証された効果的なアプローチです。
                      </p>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">効果的なコミュニケーション戦略</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        定期的な知識共有会は、チーム全体のスキル向上に欠かせません。
                        週1回30分という短時間でも、各メンバーが発見した効率的なプロンプトや
                        新しい活用方法を共有することで、チーム全体の生産性が向上します。
                        Slackの#cursor-tipsチャンネルのような専用の情報共有スペースを設け、
                        日々の小さな発見やコツをリアルタイムで共有できる環境を整備することが重要です。
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        ペアプログラミングは、新しい技術やプロンプト手法を試す際に特に効果的です。
                        2人1組で実施することで、一人では気づかない改善点や効率化のアイデアが生まれ、
                        同時に知識の共有と標準化が進みます。月1回のCursor Rulesの定期見直しでは、
                        チーム全体で運用上の課題を洗い出し、ルールの改善と最適化を継続的に行います。
                        これにより、プロジェクトの成長に合わせて開発環境も進化し続けます。
                      </p>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">確実な品質管理手法</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        AI生成コードのレビューは、品質維持の最重要プロセスです。
                        生成されたコードは必ず人間がレビューし、特にセキュリティと性能の観点から
                        厳格にチェックする必要があります。AIは効率的なコードを生成しますが、
                        ビジネス要件や非機能要件の微細な部分では人間の判断が不可欠です。
                        効果的なプロンプトはチーム共有ライブラリとして蓄積し、
                        同様の機能開発で再利用することで、品質の安定性と開発速度の両立を実現します。
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        段階的な導入戦略も重要で、まず重要度の低い機能から始めて
                        徐々に適用範囲を拡大することで、リスクを最小限に抑えながら経験を蓄積できます。
                        AI生成に問題が発生した場合の手動対応手順を事前に明確化し、
                        フォールバック計画を準備しておくことで、プロジェクトの継続性を保証します。
                      </p>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">データ駆動の継続的改善</h5>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        効果測定は、改善の方向性を定めるための重要な指針です。
                        週次での開発効率とバグ発生率の測定により、AI駆動開発の効果を定量的に把握し、
                        問題の早期発見と対策を可能にします。異なるプロンプト手法の効果を
                        A/Bテストで比較検証することで、最も効果的なアプローチを科学的に特定できます。
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        Cursor公式のアップデートや新機能の積極的な取り入れにより、
                        常に最新の機能を活用した開発環境を維持します。
                        月1回の社内勉強会では、他チームとの知見共有と相互学習を通じて、
                        組織全体のAI駆動開発能力を底上げし、部門を越えたナレッジの蓄積と活用を促進します。
                        このような継続的な学習と改善のサイクルにより、
                        チームの技術力と競争優位性が持続的に向上し続けます。
                      </p>
                    </div>
                  </div>

                  {/* Success Stories */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-purple-500 pl-4">
                      🎉 実際のチーム成功事例
                    </h4>
                    
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">事例1: スタートアップA社（開発チーム8名）</h5>
                      <div className="mb-6">
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                          <strong>導入前の課題:</strong> MVP開発に6ヶ月を予定していたが、人手不足で遅延が懸念されていた。
                        </p>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-3"><strong>導入した施策:</strong></p>
                        <ul className="text-gray-600 dark:text-gray-400 mb-3">
                          <li>React + TypeScript専用のCursor Rulesを整備</li>
                          <li>週2回のペアプログラミングでAI活用スキルを共有</li>
                          <li>コンポーネント設計パターンをルール化</li>
                        </ul>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-3"><strong>結果:</strong></p>
                        <ul className="text-green-600 dark:text-green-400">
                          <li>MVP開発期間: 6ヶ月 → 2ヶ月（67%短縮）</li>
                          <li>開発コスト: 60%削減</li>
                          <li>シードラウンド調達成功（予定より4ヶ月早期）</li>
                        </ul>
                        
                                                 <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400">
                           &ldquo;AIアシスト開発により、技術的負債を最小限に抑えながら高速プロトタイピングが実現できた。
                           特にUI コンポーネントの統一性が劇的に向上し、デザイナーとの連携もスムーズになった。&rdquo;
                           <br />
                           - CTO
                         </blockquote>
                      </div>
                      
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">事例2: 企業B社（エンジニアチーム25名）</h5>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                          <strong>導入前の課題:</strong> 大規模チームでのコード品質のばらつきと、新機能リリースの遅延が慢性化。
                        </p>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-3"><strong>導入した施策:</strong></p>
                        <ul className="text-gray-600 dark:text-gray-400 mb-3">
                          <li>チーム横断的なCursor Rules標準化</li>
                          <li>段階的導入（3チーム → 全体展開）</li>
                          <li>定量的な効果測定とKPI追跡</li>
                          <li>新人オンボーディングプロセスの改善</li>
                        </ul>
                        
                                                 <p className="text-gray-600 dark:text-gray-400 mb-3"><strong>結果:</strong></p>
                         <ul className="text-green-600 dark:text-green-400">
                           <li>新機能リリース頻度: 月1回 → 週2回</li>
                           <li>バグ修正時間: 平均3日 → 1日</li>
                           <li>新人即戦力化: 1ヶ月 → 1週間</li>
                           <li>開発者満足度: 85%が&ldquo;業務効率が大幅改善&rdquo;と回答</li>
                         </ul>
                         
                         <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600 dark:text-gray-400">
                           &ldquo;統一されたCursor Rulesにより、コード品質の標準化と開発速度の向上を両立できた。
                           特に新人エンジニアの成長速度が目に見えて向上し、チーム全体のスキルレベルが底上げされた。&rdquo;
                           <br />
                           - 開発部長
                         </blockquote>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Troubleshooting */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    よくある課題と解決法
                  </h3>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Q. AIが期待通りに動作しない</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          A. プロンプトをより具体的に書き換え、コンテキストを追加しましょう
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Q. チームメンバーによって使い方が違う</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          A. 使用例やベストプラクティスをドキュメント化し、定期的にハンズオンを実施
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Q. 古いプロジェクトへの適用が難しい</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          A. 段階的に導入し、新機能開発から始めて徐々に適用範囲を拡大
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Level 5: Claude Code Company */}
          <section id="level-5" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm font-semibold mb-4">
                  Level 5: Expert
                </span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  🏭 Claude Code Company - AIエージェント組織の構築
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  複数のClaude Codeインスタンスを組織のように運用し、大規模タスクを並列処理で効率化
                </p>
              </div>

              <div className="space-y-16">
                {/* AI Agent Concept */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                    🤖 AIエージェントとは？
                  </h3>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-8 mb-8">
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-6">👥 あなたの分身・AI社員を作り上げるイメージ</h4>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-4">🧠 AIエージェントの基本概念</h5>
                                                 <p className="text-gray-700 dark:text-gray-300 mb-4">
                           AIエージェントとは、あなたの&ldquo;分身&rdquo;として働く専門的なAIです。
                           まるで優秀な社員を雇うように、それぞれに専門分野と役割を与えて、
                           チームとして協力させることができます。
                         </p>
                         <p className="text-gray-700 dark:text-gray-300">
                           従来の&ldquo;1つのAIに全部お任せ&rdquo;から、
                           &ldquo;専門チームで効率的に分担&rdquo;へと進化した開発手法です。
                         </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-4">💼 エンジニア界隈での役割例</h5>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                              <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">PM</span>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">プロジェクトマネージャー（全体統括）</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">SE</span>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">システムエンジニア（設計・分析）</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                              <span className="text-green-600 dark:text-green-400 text-xs font-bold">CODE</span>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">コーダー（実装・テスト）</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Visual Comparison */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-6 text-center">
                        🔄 従来のAI活用 vs AIエージェント活用
                      </h5>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Traditional AI */}
                        <div className="text-center">
                          <h6 className="font-semibold text-red-600 dark:text-red-400 mb-4">❌ 従来のAI活用</h6>
                          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-4">
                            <div className="flex flex-col items-center space-y-3">
                              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                                <span className="text-2xl">🤖</span>
                              </div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">1つのAIが全部担当</span>
                            </div>
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                            <p>• 複雑なタスクで混乱しやすい</p>
                            <p>• 専門性が浅くなりがち</p>
                            <p>• 処理が逐次的で時間がかかる</p>
                          </div>
                        </div>

                        {/* AI Agent Team */}
                        <div className="text-center">
                          <h6 className="font-semibold text-green-600 dark:text-green-400 mb-4">✅ AIエージェント活用</h6>
                          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
                            <div className="grid grid-cols-3 gap-2">
                              <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-1">
                                  <span className="text-lg">👑</span>
                                </div>
                                <span className="text-xs text-gray-600 dark:text-gray-400">PM</span>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-1">
                                  <span className="text-lg">🎯</span>
                                </div>
                                <span className="text-xs text-gray-600 dark:text-gray-400">SE</span>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-1">
                                  <span className="text-lg">💻</span>
                                </div>
                                <span className="text-xs text-gray-600 dark:text-gray-400">CODER</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">専門チームで分担</p>
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                            <p>• 各分野の専門性が高い</p>
                            <p>• 並列処理で圧倒的に高速</p>
                            <p>• 複雑なプロジェクトも対応可能</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Organization Theory */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mt-8">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-center">
                      🏛️ なぜ「組織」にするとこんなに効果的なの？
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-4">📚 組織論から見たAIエージェント</h5>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          実は、AIエージェントチームの効果は「組織論」という学問で説明できます。
                          経営学者のヘンリー・ミンツバーグが提唱した「組織の5つの構成要素」理論によると、
                          効果的な組織には明確な役割分担と階層構造が必要とされています。
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                          AIエージェントも同じで、それぞれが専門分野を持ち、
                          明確な指揮系統で動くことで、1つのAIでは不可能な成果を生み出せるのです。
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-4">🎯 なぜ5つの役職なの？</h5>
                        <div className="space-y-3 text-gray-700 dark:text-gray-300">
                          <p className="text-sm">
                            <strong>社会学の研究</strong>では、小さなチームの理想的な人数は「5±2人」とされています。
                            これは「ダンバー数」の研究から導かれた知見です。
                          </p>
                          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                            <h6 className="font-semibold text-sm mb-2">Claude Code Companyの5つの役職</h6>
                            <div className="space-y-2 text-sm">
                              <div>👑 <strong>PRESIDENT</strong>：全体のビジョンと品質管理</div>
                              <div>📋 <strong>MANAGER</strong>：タスク調整と進捗管理</div>
                              <div>🎨 <strong>WORKER1</strong>：デザイン・UI担当</div>
                              <div>📊 <strong>WORKER2</strong>：データ・分析担当</div>
                              <div>🧪 <strong>WORKER3</strong>：テスト・品質担当</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-4">🔬 科学的根拠：なぜ組織化すると効率が上がるのか</h5>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h6 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">専門化の効果</h6>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            アダム・スミスの「分業論」：同じ作業を繰り返すことで、
                            その分野の専門性が飛躍的に向上します。
                          </p>
                        </div>
                        
                        <div>
                          <h6 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">並列処理の力</h6>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            複数の作業を同時進行することで、
                            全体の処理時間が大幅に短縮されます。
                          </p>
                        </div>
                        
                        <div>
                          <h6 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">品質向上効果</h6>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            複数の視点でチェックすることで、
                            ミスや見落としが大幅に減少します。
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>💡 面白い事実：</strong>
                        GoogleやAppleなどの大企業も、実際には小さなチーム（5-7人）を基本単位として組織を構成しています。
                        これは「Two-Pizza Rule」（2枚のピザで足りる人数）として知られる組織運営の鉄則です。
                        AIエージェントも、この人間社会で実証済みの組織論を応用しているのです。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Claude Code Company Introduction */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                    🏭 Claude Code Companyとは？
                  </h3>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4">🏢 会社組織のようなAI運用</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Claude Code Companyは、複数のClaude Codeインスタンスを「社員」として扱い、
                      それぞれに異なる役割とタスクを割り当てて並列処理を行う革新的な開発手法です。
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      まるで本当の会社のように、「部長」（あなた）が「部下」（各Claude Codeインスタンス）に
                      指示を出し、部下同士が連携しながらプロジェクトを進めていきます。
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      従来の「1人のAIアシスタント」から「AIチーム」へと発展させることで、
                      大規模なプロジェクトでも驚異的な効率化を実現できます。
                    </p>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mt-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-3">🎯 実際の成果例</h5>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-green-600 dark:text-green-400 font-semibold">EmotiFlow アンケートシステム</p>
                          <p className="text-gray-600 dark:text-gray-400">開発時間: 3時間で完成</p>
                        </div>
                        <div>
                          <p className="text-green-600 dark:text-green-400 font-semibold">革新的アイデア生成</p>
                          <p className="text-gray-600 dark:text-gray-400">12個のユニークな提案</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-5 gap-4 mb-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-3">
                        <span className="text-xl">👑</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">PRESIDENT</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        ビジョンを決める最高責任者
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                      <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-3">
                        <span className="text-xl">🎯</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">MANAGER</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        チームをまとめる中間管理職
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                        <span className="text-xl">🎨</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">WORKER1</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        デザイン・UI/UX担当
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
                        <span className="text-xl">📊</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">WORKER2</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        データ処理・分析担当
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                      <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-3">
                        <span className="text-xl">🧪</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">WORKER3</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        テスト・品質管理担当
                      </p>
                    </div>
                  </div>
                </div>

                {/* Setup Guide */}
                <div id="claude-company-setup">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-purple-500 pl-4">
                    🛠️ Claude Code Company セットアップガイド
                  </h3>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-8 mb-8">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4">📋 必要な準備</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-3">ソフトウェア要件</h5>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li>• Claude Code (claude CLI)</li>
                          <li>• tmux (ターミナルマルチプレクサ)</li>
                          <li>• Unix系OS (macOS/Linux推奨)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-3">推奨環境</h5>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li>• Claude Pro ($20/月) またはAPI</li>
                          <li>• 大画面ディスプレイ (複数pane表示)</li>
                          <li>• 高速インターネット接続</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">ステップ1: 自動セットアップスクリプトの実行（推奨）</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        <a href="https://github.com/Akira-Papa/Claude-Code-Communication" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                          GitHubリポジトリ
                        </a>から自動セットアップスクリプトをダウンロードして使用することを強く推奨します。
                      </p>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
                        <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">🚀 ワンコマンドセットアップ</h5>
                        <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
{`# リポジトリをクローン
git clone https://github.com/Akira-Papa/Claude-Code-Communication.git
cd Claude-Code-Communication

# 実行権限を付与
chmod +x setup.sh

# 自動セットアップ実行（30秒で完了）
./setup.sh`}
                        </pre>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🖥️ 自動で作成される画面構成</h5>
                        <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
{`┌─────────────────┐
│   PRESIDENT     │ ← 社長の画面（紫色）
└─────────────────┘

┌────────┬────────┐
│ boss1  │worker1 │ ← マネージャー（赤）と作業者1（青）
├────────┼────────┤
│worker2 │worker3 │ ← 作業者2と3（青）
└────────┴────────┘`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">ステップ1-B: 手動セットアップ（上級者向け）</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        自動セットアップが使えない場合の手動構築方法です。
                      </p>
                      
                      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">tmuxセッション開始</h5>
                        <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
{`# multiagentという名前でセッション開始
tmux new-session -d -s multiagent

# 4つのpaneに分割
tmux split-window -h
tmux split-window -v
tmux select-pane -t 0
tmux split-window -v

# セッションにアタッチ
tmux attach-session -t multiagent`}
                        </pre>
                      </div>

                      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">pane構成の確認</h5>
                        <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
{`# 各paneのIDを確認
tmux list-panes -F "#{pane_index}: #{pane_id} #{pane_current_command}"

# 出力例:
# 0: %0 zsh  (boss1 - マネージャー)
# 1: %1 zsh  (worker1 - 作業者1)
# 2: %2 zsh  (worker2 - 作業者2)
# 3: %3 zsh  (worker3 - 作業者3)`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">ステップ2: 魔法の言葉を入力（30秒）</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        セットアップが完了したら、PRESIDENTのpaneで以下の「魔法の言葉」を入力します。
                        すると自動的にAI組織が動き出します！
                      </p>
                      
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 mb-4">
                        <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">✨ 魔法の言葉</h5>
                        <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
{`あなたはpresidentです。おしゃれな充実したIT企業のホームページを作成して。`}
                        </pre>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
                        <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🎬 自動で起こること</h5>
                        <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                          <li>1. 社長がマネージャーに指示</li>
                          <li>2. マネージャーが3人の作業者に仕事を割り振り</li>
                          <li>3. みんなで協力して開発</li>
                          <li>4. 完成したら社長に報告</li>
                        </ol>
                      </div>

                      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                        <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                          <strong>注意:</strong> 各画面でブラウザでのClaude認証が必要な場合があります。
                          <code>--dangerously-skip-permissions</code>オプションは自己責任で使用してください。
                        </p>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">ステップ3: エージェント間コミュニケーション</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        各エージェント間でメッセージを送信する専用システムが用意されています。
                      </p>
                      
                      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">メッセージ送信コマンド</h5>
                        <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
{`# 基本フォーマット
./agent-send.sh [相手の名前] "[メッセージ]"

# 使用例
./agent-send.sh boss1 "新しいプロジェクトです"
./agent-send.sh worker1 "UIを作ってください"
./agent-send.sh worker2 "データベース設計をお願いします"`}
                        </pre>
                      </div>

                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">🗣️ 実際のやり取り例</h5>
                        <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                          <p><strong>社長 → マネージャー：</strong></p>
                          <p className="ml-4 italic">&ldquo;あなたはboss1です。アンケートシステム開発プロジェクトを開始してください。革新的なアイデアで実現してください。&rdquo;</p>
                          <p><strong>マネージャー → 作業者：</strong></p>
                          <p className="ml-4 italic">&ldquo;あなたはworker1です。UIデザインの革新的アイデアを3つ以上提案してください。&rdquo;</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">ステップ3: 報連相システムの構築</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        部下からメイン（あなた）への報告システムを設定します。
                      </p>

                      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">報告フォーマット</h5>
                        <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
{`# 部下からメインへの報告コマンド
tmux send-keys -t %22 '[pane番号] 報告内容' && sleep 0.1 && tmux send-keys -t %22 Enter

# 使用例:
tmux send-keys -t %22 '[pane1] タスク完了しました' && sleep 0.1 && tmux send-keys -t %22 Enter
tmux send-keys -t %22 '[pane3] エラーが発生しました：詳細内容' && sleep 0.1 && tmux send-keys -t %22 Enter`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Task Management */}
                <div id="claude-company-tasks">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-green-500 pl-4">
                    📋 タスク管理と指示方法
                  </h3>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-8">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-4">🎯 効果的なタスク分割の考え方</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      大きなプロジェクトを部下たちが並列処理できるように分割することが重要です。
                      各部下が独立して作業できるタスクに分けることで、最大の効率化を実現できます。
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-3">✅ 良いタスク分割例</h5>
                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <li>• 機能別の実装（ログイン、決済、検索など）</li>
                          <li>• ファイル別の修正作業</li>
                          <li>• 異なる技術領域（フロント、バック、DB）</li>
                          <li>• 独立したドキュメント作成</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-3">❌ 避けるべき分割例</h5>
                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <li>• 同じファイルの異なる部分</li>
                          <li>• 相互依存の強いタスク</li>
                          <li>• 順序が重要な作業</li>
                          <li>• 一人でやった方が早い簡単な作業</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">基本的なタスク指示テンプレート</h4>
                      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                        <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono whitespace-pre-wrap">
{`tmux send-keys -t %27 "cd 'ワーキングディレクトリ' && あなたはpane1です。[具体的なタスク内容]。完了時は tmux send-keys -t %22 '[pane1] タスク完了' && sleep 0.1 && tmux send-keys -t %22 Enter で報告してください。" && sleep 0.1 && tmux send-keys -t %27 Enter`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">並列タスク実行例</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Webアプリケーション開発での実際の使用例：
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                        <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono whitespace-pre-wrap">
{`# 部下1: ログイン機能の実装
tmux send-keys -t %27 "あなたはpane1でログイン機能担当です。React + TypeScriptでログインコンポーネントを作成し、バリデーション機能も含めてください。完了時は tmux send-keys -t %22 '[pane1] ログイン機能完了' && sleep 0.1 && tmux send-keys -t %22 Enter で報告。" && sleep 0.1 && tmux send-keys -t %27 Enter &

# 部下2: API エンドポイントの作成
tmux send-keys -t %28 "あなたはpane2でAPI担当です。Node.js + Expressでユーザー認証APIを作成してください。JWT認証も含めて実装。完了時は tmux send-keys -t %22 '[pane2] API実装完了' && sleep 0.1 && tmux send-keys -t %22 Enter で報告。" && sleep 0.1 && tmux send-keys -t %28 Enter &

# 部下3: データベース設計
tmux send-keys -t %25 "あなたはpane3でDB担当です。ユーザー管理用のPostgreSQLテーブル設計とマイグレーションファイルを作成してください。完了時は tmux send-keys -t %22 '[pane3] DB設計完了' && sleep 0.1 && tmux send-keys -t %22 Enter で報告。" && sleep 0.1 && tmux send-keys -t %25 Enter &

wait`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Best Practices */}
                <div id="claude-company-best-practices">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-orange-500 pl-4">
                    💡 Claude Code Company 運用のベストプラクティス
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">🧠 トークン管理戦略</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        複数のインスタンスを同時運用するため、トークン使用量の管理が重要です。
                      </p>
                      <div className="space-y-3">
                        <div className="bg-gray-50 dark:bg-gray-900 rounded p-3">
                          <h5 className="font-semibold text-sm text-gray-900 dark:text-white">/clearコマンドの活用</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            タスク完了時や文脈が変わる時に実行
                          </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-900 rounded p-3">
                          <h5 className="font-semibold text-sm text-gray-900 dark:text-white">使用量監視</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            ccusageコマンドで定期的にチェック
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">📊 効果的な監視方法</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        部下の状況を適切に把握するための監視テクニック。
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-900 rounded p-3">
                        <pre className="text-xs text-gray-800 dark:text-gray-200 font-mono">
{`# 全paneの状況確認
for pane in %27 %28 %25 %29 %26; do
  echo "=== $pane ==="
  tmux capture-pane -t $pane -p | tail -5
done`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6">
                    <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-4">⚠️ 注意事項とリスク管理</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-3">コスト管理</h5>
                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <li>• Claude Pro ($20/月) 推奨</li>
                          <li>• 従量課金の場合は使用量に注意</li>
                          <li>• 定期的な/clear実行でトークン節約</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-3">セキュリティ</h5>
                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <li>• --dangerously-skip-permissionsは慎重に</li>
                          <li>• 重要なファイルのバックアップ必須</li>
                          <li>• 本番環境での使用は要検討</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Use Cases */}
                <div id="claude-company-use-cases">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-blue-500 pl-4">
                    🎯 実践的な活用例
                  </h3>

                  {/* EmotiFlow Case Study */}
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-8 mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      🎨 実際の成果物：EmotiFlow アンケートシステム
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white mb-4">📊 プロジェクト概要</h5>
                        <div className="space-y-3 text-gray-700 dark:text-gray-300">
                          <p><strong>開発時間:</strong> わずか3時間で完成</p>
                          <p><strong>特徴:</strong> 絵文字で感情を表現できるアンケート</p>
                          <p><strong>技術:</strong> HTML, CSS, JavaScript（バニラ）</p>
                          <p><strong>機能:</strong> リアルタイム結果表示、レスポンシブ対応</p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-bold text-gray-900 dark:text-white mb-4">🏭 AI組織の役割分担</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                            <span className="text-gray-700 dark:text-gray-300"><strong>PRESIDENT:</strong> ビジョン策定・品質管理</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                            <span className="text-gray-700 dark:text-gray-300"><strong>MANAGER:</strong> タスク分割・進捗管理</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                            <span className="text-gray-700 dark:text-gray-300"><strong>WORKER1:</strong> UI/UXデザイン</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                            <span className="text-gray-700 dark:text-gray-300"><strong>WORKER2:</strong> データ処理ロジック</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                            <span className="text-gray-700 dark:text-gray-300"><strong>WORKER3:</strong> テスト・品質保証</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg p-6">
                      <h5 className="font-bold text-gray-900 dark:text-white mb-4">💡 革新的なアイデア（12個生成）</h5>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <h6 className="font-semibold text-blue-600 dark:text-blue-400">UI/UX革新</h6>
                          <ul className="text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                            <li>• 絵文字による感情表現</li>
                            <li>• スライダー式評価システム</li>
                            <li>• アニメーション付きフィードバック</li>
                            <li>• カラーグラデーション評価</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-semibold text-green-600 dark:text-green-400">データ可視化</h6>
                          <ul className="text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                            <li>• リアルタイムチャート更新</li>
                            <li>• インタラクティブグラフ</li>
                            <li>• レスポンシブデザイン</li>
                            <li>• モバイル最適化</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-semibold text-orange-600 dark:text-orange-400">ユーザビリティ</h6>
                          <ul className="text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                            <li>• 3クリックで完了</li>
                            <li>• 直感的な操作性</li>
                            <li>• アクセシビリティ対応</li>
                            <li>• 多言語対応準備</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">🚀 体験してみる</h5>
                      <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
{`# GitHubからダウンロード
git clone https://github.com/Akira-Papa/Claude-Code-Communication.git
cd Claude-Code-Communication/emotiflow-mvp

# ローカルサーバーで起動
python -m http.server 8000

# ブラウザで http://localhost:8000 を開く`}
                      </pre>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">例1: ECサイト開発プロジェクト</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        5人の部下で並列開発し、開発時間を80%短縮した実例：
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-4">
                          <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">部下1-2: フロントエンド</h5>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            商品一覧・詳細画面、ショッピングカート機能
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 rounded p-4">
                          <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">部下3-4: バックエンド</h5>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            API設計・実装、決済システム連携
                          </p>
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-900/20 rounded p-4">
                          <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">部下5: インフラ</h5>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            DB設計、デプロイ設定、監視システム
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 bg-green-100 dark:bg-green-900/30 rounded p-3">
                        <p className="text-green-800 dark:text-green-200 font-semibold text-sm">
                          結果: 通常3ヶ月のプロジェクトを3週間で完成 (80%短縮)
                        </p>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">例2: レガシーシステムのリファクタリング</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        大規模なコードベースを並列でモダン化：
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
                          <span className="text-gray-700 dark:text-gray-300">各部下が異なるモジュールを担当</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-sm">2</span>
                          <span className="text-gray-700 dark:text-gray-300">TypeScript化、テスト追加、パフォーマンス改善を並列実行</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-sm">3</span>
                          <span className="text-gray-700 dark:text-gray-300">部下間でベストプラクティスを共有</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">例3: 技術調査・学習プロジェクト</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        新技術の評価を効率的に実施：
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-900 rounded p-4">
                        <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono whitespace-pre-wrap">
{`# 各部下に異なるフレームワークを調査させる例
部下1: Next.js 14の新機能調査とサンプル実装
部下2: Astroの性能評価とベンチマーク
部下3: Remixの開発体験レポート作成
部下4: SvelteKitとの比較分析
部下5: 各技術の統合レポート作成`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Troubleshooting */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    🔧 よくある問題と解決法
                  </h3>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Q. 部下が応答しなくなった</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          A. tmux capture-paneで状況確認後、/clearコマンドでリセット。必要に応じて再起動。
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Q. トークン使用量が急激に増加</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          A. 全部下に/clearを実行し、タスクをより具体的で短いものに分割して再指示。
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Q. 部下同士の作業が競合する</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          A. タスク分割を見直し、依存関係のない独立したタスクに再構成する。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  あなたもCursor Rulesマスターに！
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  このガイドで学んだことを実践すれば、AI駆動開発の真の力を体験できます。
                  まずはレベル2のワンコマンド導入から始めてみましょう。
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8 max-w-3xl mx-auto">
                  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4">🎓 中学生のあなたへ</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    プログラミングって難しそう...と思っていませんか？
                    でも、Cursor Rulesを使えば、まるで「とても優秀な先輩」が隣にいて、
                    いつでも教えてくれるような感じでプログラミングができます。
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    「ゲームを作りたい」「自分のWebサイトを作りたい」「アプリを作りたい」
                    そんな夢も、AIの力を借りれば、思っているより早く実現できるかもしれません。
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    まずは「レベル2のワンコマンド導入」から始めてみてください。
                    きっと「プログラミングって、こんなに楽しいんだ！」と感じられるはずです。
                  </p>
                </div>
              </div>

              {/* Learning Journey Summary */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  🎯 あなたの学習の旅
                </h3>
                
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">基本理解</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      CursorとAI開発の基礎を学習
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">実践体験</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      ワンコマンドで即座に効果を実感
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">カスタマイズ</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      プロジェクトに合わせて最適化
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-orange-600 dark:text-orange-400 font-bold">4</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">チーム展開</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      組織全体で効果を最大化
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 dark:text-red-400 font-bold">5</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI組織化</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Claude Code Companyで並列処理
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  🔑 重要なポイント
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">個人開発者の方へ</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• まずはレベル2のワンコマンド設定から始める</li>
                      <li>• 小さなプロジェクトで効果を実感する</li>
                      <li>• 徐々にCursor Rulesをカスタマイズしていく</li>
                      <li>• 新しい技術学習にAIを活用する</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">チーム・企業の方へ</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• 段階的導入で リスクを最小化</li>
                      <li>• チーム標準のCursor Rulesを策定</li>
                      <li>• 定期的な知識共有会を実施</li>
                      <li>• ROI測定で効果を可視化</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  🚀 次のステップ
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button
                    onClick={() => document.getElementById('level-2')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    ワンコマンド導入を試す
                  </Button>
                  <Button
                    onClick={() => document.getElementById('learning-path')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    学習パスを確認する
                  </Button>
                  <Button
                    onClick={() => document.getElementById('level-5')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Claude Code Companyを学ぶ
                  </Button>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
                  <p className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">
                    💡 最後に一言
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    AI駆動開発は「魔法」ではありません。適切な設定と継続的な学習により、
                    誰でも習得できる実用的なスキルです。このガイドを参考に、
                    あなたの開発ライフを次のレベルに押し上げてください！
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <SectionNavigation />

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50 transition-colors"
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