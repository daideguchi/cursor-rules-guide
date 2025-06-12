'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, BookOpen, Zap, Download, GitBranch, Settings, ChevronDown, Code, Sparkles, Rocket, Target, Users, AlertTriangle } from 'lucide-react'
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
                  <span className="text-white font-bold text-2xl">🤔</span>
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

          {/* Cursor Rules Setup */}
          <section id="cursor-rules-setup" className="py-24 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
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
                  <span className="gradient-text">Cursor Rules</span>
                  <br />
                  ワンコマンド導入
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  実戦で磨かれた最高品質のCursor Rules - 3ステップで完了
                </p>
              </motion.div>

              <AutoSetup />
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
              >
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    🚀 VS Codeベースの次世代AIコードエディタ
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    <strong>Claude</strong>、<strong>OpenAI</strong>、<strong>Gemini</strong>の主要なAIモデルをサポート。世界最高水準のコーディング支援を提供します。
                  </p>

                  {/* 3つのモード */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                      🎯 3つの主要モード
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {[
                        {
                          emoji: '💬',
                          title: 'Chat',
                          desc: 'AIアシスタントとして相談・解説'
                        },
                        {
                          emoji: '✍️',
                          title: 'Composer',
                          desc: 'ファイル作成・マルチファイル編集'
                        },
                        {
                          emoji: '🤖',
                          title: 'Agent',
                          desc: '自律的にタスクを完了実行（メイン機能）'
                        }
                      ].map((mode, index) => (
                        <motion.div
                          key={mode.title}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700"
                        >
                          <div className="text-center">
                            <span className="text-2xl block mb-2">{mode.emoji}</span>
                            <h5 className="font-bold text-purple-900 dark:text-purple-300 mb-1">
                              {mode.title}
                            </h5>
                            <p className="text-xs text-purple-700 dark:text-purple-400">
                              {mode.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* 対応AIモデル */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-orange-600 dark:text-orange-400 mb-4">
                      🤖 対応AIモデル（実際にサポートされているもの）
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {[
                        { name: 'Claude', models: 'claude-4-sonnet, claude-3.5-sonnet' },
                        { name: 'OpenAI', models: 'o3, gpt-4.1, gpt-4o' },
                        { name: 'Gemini', models: 'gemini-2.5-pro' }
                      ].map((provider, index) => (
                        <motion.div
                          key={provider.name}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-3 rounded-lg border border-orange-200 dark:border-orange-700"
                        >
                          <div className="text-center">
                            <h5 className="font-bold text-orange-900 dark:text-orange-300 mb-1">
                              {provider.name}
                            </h5>
                            <p className="text-xs text-orange-700 dark:text-orange-400">
                              {provider.models}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                                    </div>

                  {/* 最新機能 */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-4">
                      🚀 Cursor 1.0（2025年6月）最新機能
                    </h4>
                    {[
                      {
                        icon: '🧠',
                        title: '主要AIモデル対応',
                        description: 'Claude 4, o3, GPT-4.1, GPT-4o, Gemini 2.5 Pro'
                      },
                      {
                        icon: '🔍',
                        title: 'BugBot：自動コードレビュー',
                        description: 'GitHub PRを自動レビューし、バグを発見・修正提案'
                      },
                      {
                        icon: '☁️',
                        title: 'Background Agent（全ユーザー解放）',
                        description: '複数エージェントが並行してタスクを実行（リモート環境）'
                      },
                      {
                        icon: '🧠',
                        title: 'Memories機能（ベータ）',
                        description: 'プロジェクトごとに過去の会話を記憶し、継続学習'
                      },
                      {
                        icon: '🔗',
                        title: 'MCP：1クリック統合',
                        description: '外部ツール・APIとの簡単接続（OAuth対応）'
                      },
                      {
                        icon: '📊',
                        title: 'Jupyter Notebook完全対応',
                        description: 'データサイエンス向けセル単位編集機能'
                      },
                      {
                        icon: '📈',
                        title: 'Mermaid図表・テーブル表示',
                        description: 'チャット内で図表やマークダウンテーブルを表示'
                      },
                      {
                        icon: '⚡',
                        title: '新しいTab Model',
                        description: 'マルチファイル変更対応の強化されたオートコンプリート'
                      }
                    ].map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                        className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                      >
                        <span className="text-2xl">{feature.icon}</span>
                        <div>
                          <h5 className="font-bold text-gray-900 dark:text-white">
                            {feature.title}
                          </h5>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {feature.description}
                          </p>
                      </div>
                    </motion.div>
                  ))}
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
                  <h3 className="text-xl font-bold mb-6 text-red-700 dark:text-red-400 flex items-center">
                    <span className="text-2xl mr-2">😵</span>
                    Cursor Rules なし
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
                      <div className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">❌</span>
                        <div>
                          <h4 className="font-semibold text-red-700 dark:text-red-400 mb-1">
                            「Reactでボタン作って」→ 使えないコード
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            プロジェクトのスタイルやTypeScript設定を無視した一般的なコードが生成される
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
                      <div className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">❌</span>
                        <div>
                          <h4 className="font-semibold text-red-700 dark:text-red-400 mb-1">
                            毎回「このプロジェクトでは...」と説明
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            コーディング規約、フォルダ構成、使用ライブラリを毎回説明する必要がある
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
                      <div className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">❌</span>
                        <div>
                          <h4 className="font-semibold text-red-700 dark:text-red-400 mb-1">
                            チームメンバーごとに違うコード
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            同じ機能でも人によって全く違うスタイルのコードが生成される
                          </p>
                        </div>
                    </div>
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
                  <h3 className="text-xl font-bold mb-6 text-green-700 dark:text-green-400 flex items-center">
                    <span className="text-2xl mr-2">✨</span>
                    Cursor Rules あり
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✅</span>
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-400 mb-1">
                            「ボタン作って」→ 完璧なコード
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            プロジェクトのTailwind設定、TypeScript型、コンポーネント構造に完全対応
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✅</span>
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-400 mb-1">
                            一度設定すれば永続的に理解
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            プロジェクトルールを記憶し、常に最適なコードを提案してくれる
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✅</span>
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-400 mb-1">
                            チーム全体で統一された高品質コード
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            誰が書いても同じスタイル、同じ品質のコードが自動生成される
                          </p>
                        </div>
                    </div>
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


            </div>
          </section>

          {/* One Command Rules Section */}
          <section id="one-command-rules" className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">ワンコマンドで適用される</span>
                  <br />
                  <span className="text-gray-900 dark:text-white">6つのルール</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  上記のコマンド一つで、以下の6つの強力なルールがあなたのプロジェクトに適用されます
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: '🎨',
                    title: 'UI/UX設計ルール',
                    file: 'uiux.mdc',
                    description: 'デザインシステムとユーザー体験の統一',
                    features: [
                      'shadcn/uiベースのコンポーネント使用',
                      'レスポンシブデザインの自動適用',
                      'アクセシビリティ対応の徹底',
                      'デザインの一貫性保持'
                    ]
                  },
                  {
                    icon: '📋',
                    title: '全体管理ルール',
                    file: 'rules.mdc',
                    description: 'プロジェクト全体の品質管理と自動化',
                    features: [
                      'Git操作の自動化',
                      'コミット・プッシュの自動実行',
                      'プロジェクト構造の標準化',
                      'エラーハンドリングの統一'
                    ]
                  },
                  {
                    icon: '✅',
                    title: 'タスク管理ルール',
                    file: 'todo.mdc',
                    description: 'タスクの自動管理と進捗追跡',
                    features: [
                      'todo.mdファイルの自動更新',
                      '優先度付きタスク管理',
                      '進捗状況の可視化',
                      'チーム間での情報共有'
                    ]
                  },
                  {
                    icon: '🏗️',
                    title: 'グローバルルール',
                    file: 'globals.mdc',
                    description: 'プロジェクト横断的な開発指針',
                    features: [
                      '問題解決プロセスの標準化',
                      '品質管理の自動化',
                      'タスク分析の体系化',
                      '最終確認プロセスの徹底'
                    ]
                  },
                  {
                    icon: '💻',
                    title: 'コーディング規約',
                    file: 'coding-standards.mdc',
                    description: 'コードの書き方ルール',
                    features: [
                      'ファイル命名規則の統一',
                      'TypeScript安全性の確保',
                      'コード構造の標準化',
                      'ベストプラクティスの適用'
                    ]
                  },
                  {
                    icon: '🔄',
                    title: 'Git運用ルール',
                    file: 'git-workflow.mdc',
                    description: '変更履歴の管理ルール',
                    features: [
                      'ブランチ戦略の統一',
                      'コミットメッセージの標準化',
                      'プルリクエストの自動化',
                      'リリースプロセスの効率化'
                    ]
                  }
                ].map((rule, index) => (
                  <motion.div
                    key={rule.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-4xl mb-4">{rule.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {rule.title}
                    </h3>
                    <div className="text-sm text-indigo-600 dark:text-indigo-400 mb-3 font-mono bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">
                      {rule.file}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                      {rule.description}
                    </p>
                    <ul className="space-y-2">
                      {rule.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <span className="text-green-500 mr-2 mt-0.5">✓</span>
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl p-8 border border-purple-200 dark:border-purple-700">
                  <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-400">
                    🎯 これら全てが一度に適用されます
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    6つのルールファイルが連携して、あなたのプロジェクトを<br />
                    <strong>プロフェッショナルレベル</strong>に引き上げます
                  </p>
                  <Button
                    onClick={() => document.getElementById('mdc-explanation')?.scrollIntoView({ behavior: 'smooth' })}
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    .mdcファイルについて詳しく
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* .mdc File Explanation Section */}
          <section id="mdc-explanation" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">.mdcファイル</span>って何？
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  🤖 <strong>AIへの「お仕事マニュアル」</strong>です！<br />
                  一度作れば、AIがずっとあなたの好みを覚えてくれます
                </p>
              </motion.div>

              {/* Visual Analogy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 mb-12 border border-blue-200 dark:border-blue-700"
              >
                <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                  📚 例えるなら「新人スタッフへの指導書」
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h4 className="text-lg font-bold mb-4 text-red-600 dark:text-red-400 flex items-center">
                      <span className="text-2xl mr-2">😵‍💫</span>
                      指導書なしの新人
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <span className="text-red-500 mr-2 mt-1">❌</span>
                        <span className="text-gray-600 dark:text-gray-400">「どうやって作ればいいですか？」</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-500 mr-2 mt-1">❌</span>
                        <span className="text-gray-600 dark:text-gray-400">「会社のルールがわからない...」</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-500 mr-2 mt-1">❌</span>
                        <span className="text-gray-600 dark:text-gray-400">「毎回同じことを聞いてしまう」</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h4 className="text-lg font-bold mb-4 text-green-600 dark:text-green-400 flex items-center">
                      <span className="text-2xl mr-2">😊</span>
                      指導書ありの新人
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✅</span>
                        <span className="text-gray-600 dark:text-gray-400">「マニュアル通りに完璧！」</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✅</span>
                        <span className="text-gray-600 dark:text-gray-400">「会社のスタイルを理解済み」</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✅</span>
                        <span className="text-gray-600 dark:text-gray-400">「いつも一貫した仕事ぶり」</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step-by-step Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-12"
              >
                <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                  🔧 どうやって作るの？（3つのパーツ）
                </h3>
                <div className="space-y-8">
                  {[
                    {
                      number: '1',
                      icon: '📋',
                      title: '基本設定',
                      subtitle: '「うちの会社はこんな感じです」',
                      description: 'プロジェクトで使う技術やツールを書く',
                      example: '例：React + TypeScript + Tailwind CSS を使用',
                      color: 'from-blue-500 to-cyan-500'
                    },
                    {
                      number: '2',
                      icon: '📢',
                      title: '具体的な指示',
                      subtitle: '「これは絶対に守ってね」',
                      description: 'やってほしいこと・やってはダメなことを明記',
                      example: '例：「デザインを勝手に変更しないで」「毎回todo.mdを更新して」',
                      color: 'from-green-500 to-emerald-500'
                    },
                    {
                      number: '3',
                      icon: '📝',
                      title: '参考情報',
                      subtitle: '「詳しくはこっちを見て」',
                      description: 'より詳細なルールやガイドラインへの参照',
                      example: '例：コーディング規約のリンクや詳細な手順書',
                      color: 'from-purple-500 to-pink-500'
                    }
                  ].map((step, index) => (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-6"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <span className="text-white font-bold text-xl">{step.number}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-3xl">{step.icon}</span>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h4>
                        </div>
                        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {step.subtitle}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                          {step.description}
                        </p>
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                            {step.example}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Visual File Example */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                  📄 実際のファイルはこんな感じ
                </h3>
                <div className="bg-gray-900 rounded-xl p-6 text-green-400 font-mono text-sm overflow-hidden shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="ml-4 text-gray-400">📁 uiux.mdc - AIへの指導書</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-blue-900/30 p-3 rounded">
                      <div className="text-blue-300 mb-2">📋 基本設定</div>
                      <div className="text-blue-400 text-xs"># UI/UX 設計・実装ルール</div>
                      <div className="text-gray-400 text-xs">## 1. デザインシステム</div>
                    </div>
                    <div className="bg-green-900/30 p-3 rounded">
                      <div className="text-green-300 mb-2">📢 具体的な指示</div>
                      <div className="text-red-400 text-xs">- **既存の UI は承認なしでの変更を禁止**</div>
                      <div className="text-yellow-400 text-xs">- shadcn/ui をベースとしたコンポーネントの使用</div>
                    </div>
                    <div className="bg-purple-900/30 p-3 rounded">
                      <div className="text-purple-300 mb-2">📝 参考情報</div>
                      <div className="text-yellow-400 text-xs">- Tailwind CSS の使用</div>
                      <div className="text-yellow-400 text-xs">- モバイルファーストアプローチ</div>
                      <div className="text-gray-500 text-xs">...</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Final Impact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl p-8 border border-orange-200 dark:border-orange-700">
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl">🤖</span>
                      <span className="text-2xl">➕</span>
                      <span className="text-4xl">📚</span>
                      <span className="text-2xl">=</span>
                      <span className="text-4xl">✨</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-orange-700 dark:text-orange-400">
                    結果：あなただけの専属AI！
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    まるで<strong>長年一緒に働いている同僚</strong>のように<br />
                    あなたの好みやルールを完璧に理解してくれます
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">
                        🎯 毎回完璧なコード
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        「ボタン作って」→あなたのプロジェクトにピッタリのコードが完成
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">
                        🤝 チーム全体で統一
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        誰が使っても同じ品質・同じスタイルのコードが生成
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Best Practices Section */}
          <section id="best-practices" className="py-24 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">効果的な</span>
                  <br />
                  <span className="text-gray-900 dark:text-white">活用テクニック</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Cursor Rulesをさらに効果的に使うための実践的なコツ
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Do's */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700"
                >
                  <h3 className="text-2xl font-bold mb-6 text-green-700 dark:text-green-400 flex items-center">
                    <span className="text-2xl mr-3">✅</span>
                    推奨される使い方
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: '具体的なルールを書く',
                        description: '「デザインを変更しないで」ではなく「UI色は承認なしで変更禁止」',
                        icon: '🎯'
                      },
                      {
                        title: 'プロジェクト固有の情報を含める',
                        description: '使用ライブラリ、フォルダ構成、命名規則などを明記',
                        icon: '📂'
                      },
                      {
                        title: '定期的にルールを見直す',
                        description: 'プロジェクトの成長に合わせてルールをアップデート',
                        icon: '🔄'
                      },
                      {
                        title: 'チーム全体で共有する',
                        description: '全メンバーが同じルールファイルを使用',
                        icon: '👥'
                      }
                    ].map((tip, index) => (
                      <motion.div
                        key={tip.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-green-500"
                      >
                        <div className="flex items-start">
                          <span className="text-2xl mr-3 mt-1">{tip.icon}</span>
                          <div>
                            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-1">
                              {tip.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {tip.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Don'ts */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-700"
                >
                  <h3 className="text-2xl font-bold mb-6 text-red-700 dark:text-red-400 flex items-center">
                    <span className="text-2xl mr-3">❌</span>
                    避けるべき使い方
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: '曖昧な指示をする',
                        description: '「良い感じに」「適当に」などの主観的な表現',
                        icon: '🌫️'
                      },
                      {
                        title: 'ルールが多すぎる',
                        description: '1つのファイルに100個以上のルールを詰め込む',
                        icon: '📚'
                      },
                      {
                        title: 'メンテナンスしない',
                        description: '一度作ったら放置、古い情報のまま使い続ける',
                        icon: '🕸️'
                      },
                      {
                        title: '矛盾するルールを書く',
                        description: '「A使って」と「A使うな」が同じファイルにある',
                        icon: '⚡'
                      }
                    ].map((warning, index) => (
                      <motion.div
                        key={warning.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500"
                      >
                        <div className="flex items-start">
                          <span className="text-2xl mr-3 mt-1">{warning.icon}</span>
                          <div>
                            <h4 className="font-semibold text-red-700 dark:text-red-400 mb-1">
                              {warning.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {warning.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section id="use-cases" className="py-24 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">こんな場面で</span>
                  <br />
                  <span className="text-gray-900 dark:text-white">大活躍</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  実際のプロジェクトでCursor Rulesが威力を発揮する場面
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    icon: '🚀',
                    title: '新しいチームメンバー参加',
                    scenario: 'プロジェクトルールの説明時間を大幅短縮',
                    benefit: '初日からプロジェクトスタイルのコードが書ける',
                    example: '「コンポーネント作って」→自動的にプロジェクト仕様に準拠',
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: '🔄',
                    title: 'リファクタリング作業',
                    scenario: '大量のコードを一貫したスタイルに統一',
                    benefit: 'ルールに従って自動的に最適化されたコードに',
                    example: '「この関数をリファクタリング」→プロジェクト規約通りに改善',
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    icon: '⚡',
                    title: 'プロトタイピング',
                    scenario: '新機能のアイデアを素早く実装したい',
                    benefit: 'プロジェクトの品質を保ちながら高速開発',
                    example: '「ユーザー管理画面作って」→完全なCRUD画面が生成',
                    color: 'from-yellow-500 to-orange-500'
                  },
                  {
                    icon: '🐛',
                    title: 'バグ修正',
                    scenario: '既存コードの問題を特定・修正',
                    benefit: 'プロジェクトの文脈を理解した最適な修正案',
                    example: '「エラーの原因を調べて」→関連ファイルも含めた包括的な解決',
                    color: 'from-red-500 to-pink-500'
                  },
                  {
                    icon: '📱',
                    title: 'レスポンシブ対応',
                    scenario: 'モバイル・タブレット対応を追加',
                    benefit: 'デザインシステムに沿ったレスポンシブコード',
                    example: '「スマホ対応して」→ブレークポイント設定通りに自動調整',
                    color: 'from-purple-500 to-indigo-500'
                  },
                  {
                    icon: '🧪',
                    title: 'テストコード作成',
                    scenario: '新機能のテストを効率的に作成',
                    benefit: 'プロジェクトのテスト方針に従った高品質なテスト',
                    example: '「この機能のテスト書いて」→完全なテストスイートが完成',
                    color: 'from-teal-500 to-cyan-500'
                  }
                ].map((useCase, index) => (
                  <motion.div
                    key={useCase.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${useCase.color} rounded-lg flex items-center justify-center mb-4`}>
                      <span className="text-2xl">{useCase.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {useCase.title}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">シチュエーション</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{useCase.scenario}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">効果</p>
                        <p className="text-sm text-blue-700 dark:text-blue-300">{useCase.benefit}</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                        <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                          {useCase.example}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Troubleshooting Section */}
          <section id="troubleshooting" className="py-24 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">よくある質問</span>
                  <br />
                  <span className="text-gray-900 dark:text-white">& トラブルシューティング</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Cursor Rules使用時によくある疑問と解決方法
                </p>
              </motion.div>

              <div className="space-y-6 max-w-4xl mx-auto">
                {[
                  {
                    q: 'Cursor RulesがAIに認識されているか確認する方法は？',
                    a: 'チャットで「このプロジェクトのルールを教えて」と質問してみてください。設定したルールが返答に含まれれば正常に読み込まれています。',
                    icon: '🔍'
                  },
                  {
                    q: 'ルールが多すぎてAIが混乱しているようです',
                    a: 'ルールファイルを分割し、優先度の高いものから段階的に適用してください。1つのファイルは50-100行程度に抑えることを推奨します。',
                    icon: '📝'
                  },
                  {
                    q: 'チームメンバーが異なるルールを使っているかも？',
                    a: 'GitでCursor Rulesファイルをバージョン管理し、全員が同じファイルを使用していることを確認してください。',
                    icon: '👥'
                  },
                  {
                    q: 'ルールを変更したのに反映されません',
                    a: 'Cursorを再起動するか、新しいチャットセッションを開始してみてください。ファイルの保存も確認してください。',
                    icon: '🔄'
                  },
                  {
                    q: 'プロジェクトの途中からCursor Rulesを導入できる？',
                    a: 'はい、いつでも導入可能です。既存コードのスタイルを分析してルールに反映させることで、より効果的になります。',
                    icon: '⚡'
                  },
                  {
                    q: 'Cursor Rulesのベストプラクティスを知りたい',
                    a: '具体的で明確なルール、プロジェクト固有の情報、定期的な見直しがポイントです。上記の「効果的な活用テクニック」も参考にしてください。',
                    icon: '🎯'
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={faq.q}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-500 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-lg">{faq.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                          Q: {faq.q}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          A: {faq.a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                  Cursor Rulesの導入で、あなたの開発効率は飛躍的に向上します。<br />
                  チーム全体で一貫した高品質なコードを生成しましょう。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => document.getElementById('cursor-rules-setup')?.scrollIntoView({ behavior: 'smooth' })}
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