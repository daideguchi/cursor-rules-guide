"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  BookOpen,
  Zap,
  Download,
  GitBranch,
  Settings,
  ChevronDown,
  Code,
  Sparkles,
  Rocket,
  Target,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { TableOfContents } from "@/components/layout/TableOfContents";
import { SideNavigation } from "@/components/layout/SideNavigation";
import { Button } from "@/components/ui/Button";
import { CodeSnippet } from "@/components/ui/CodeSnippet";
import { SectionNavigation } from "@/components/ui/SectionNavigation";
import { AutoSetup } from "@/components/ui/AutoSetup";

export default function Home() {
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
          <section
            id="hero"
            className="relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-red-900/20 dark:via-orange-900/20 dark:to-yellow-900/20"
          >
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
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg"
                >
                  <span className="text-white font-bold text-2xl">🤔</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="text-red-600 dark:text-red-400">
                    こんな経験
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">
                    ありませんか？
                  </span>
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
                      emoji: "🤖",
                      title: "AIが的外れな提案をする",
                      description:
                        "プロジェクトの構成や使用技術を理解してくれない",
                    },
                    {
                      emoji: "🔄",
                      title: "毎回同じ説明をする",
                      description:
                        "コーディング規約やプロジェクトルールを毎回説明",
                    },
                    {
                      emoji: "😅",
                      title: "生成コードが微妙",
                      description:
                        "使えないコードが生成されて修正に時間がかかる",
                    },
                    {
                      emoji: "👥",
                      title: "チームで一貫性がない",
                      description: "メンバーごとにAIの使い方やルールがバラバラ",
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
                    これらの問題は<strong>「Cursor」と「Cursor Rules」</strong>
                    で全て解決できます
                  </p>
                  <Button
                    onClick={() =>
                      document
                        .getElementById("what-is-cursor")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
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

          {/* One Command Setup Section */}
          <section
            id="one-command-setup"
            className="py-24 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">ワンコマンド</span>
                  <br />
                  自動設定
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  このコマンドで一発で最低限の設定が完了します
                </p>
              </motion.div>

              <AutoSetup />
            </div>
          </section>

          {/* What is Cursor Section */}
          <section
            id="what-is-cursor"
            className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
          >
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
                        icon: "🧠",
                        title: "Claude 3.5 Sonnet搭載",
                        description:
                          "最先端のAIがコードを理解し、的確な提案をします",
                      },
                      {
                        icon: "⚡",
                        title: "リアルタイム補完",
                        description: "タイピング中に最適なコードを瞬時に提案",
                      },
                      {
                        icon: "💬",
                        title: "チャット形式で相談",
                        description:
                          "プロジェクト全体を理解したAIと対話しながら開発",
                      },
                      {
                        icon: "🔧",
                        title: "コマンド実行",
                        description:
                          "ファイル編集、リファクタリング、バグ修正を自動実行",
                      },
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
                    <div className="text-blue-400">
                      💬 あなた: Reactのコンポーネントを作って
                    </div>
                    <div className="text-green-400">
                      🤖 Cursor: このプロジェクトのTypeScript設定に合わせて...
                    </div>
                    <div className="bg-gray-800 p-3 rounded mt-4">
                      <div className="text-purple-400">const</div>
                      <div className="text-yellow-400 ml-4">Button</div>
                      <div className="text-white ml-8">
                        {"= ({ children, onClick }: ButtonProps) => {"}
                      </div>
                      <div className="text-gray-500 ml-12">
                        {"// プロジェクトのスタイルに合致したコード"}
                      </div>
                      <div className="text-white ml-8">{"}"}</div>
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
                    Cursorがあなたのプロジェクトを深く理解し、
                    <br />
                    チーム全体で一貫した最高品質のコードを生成するには？
                  </p>
                  <Button
                    onClick={() =>
                      document
                        .getElementById("cursor-rules")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
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
          <section
            id="cursor-rules"
            className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
          >
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
                      step: "1",
                      title: "ルール設定",
                      description:
                        "プロジェクトのルールをMarkdownファイルに記述",
                      icon: "📝",
                    },
                    {
                      step: "2",
                      title: "AI学習",
                      description: "CursorがルールをAIに適用して理解",
                      icon: "🧠",
                    },
                    {
                      step: "3",
                      title: "最適化",
                      description: "プロジェクトに特化したコードを生成",
                      icon: "🚀",
                    },
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
                    <strong>「kinopee」</strong>という開発者が作成した、
                    <br />
                    実戦で磨き上げられた最高品質のCursor Rules
                  </p>
                  <Button
                    onClick={() =>
                      document
                        .getElementById("kinopee-rules")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
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
          <section
            id="kinopee-rules"
            className="py-24 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
          >
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

              <AutoSetup />
            </div>
          </section>

          {/* Claude Code AI Team Development Guide */}
          <section id="claude-code-ai-guide" className="py-16 bg-white">
            <style jsx global>{`
              .claude-guide {
                font-family: "Noto Sans JP", sans-serif;
                line-height: 1.8;
                color: #2d3748;
              }

              .claude-guide h1 {
                background: linear-gradient(135deg, #1a202c, #2d3748);
                color: white;
                padding: 3rem 2rem;
                margin: 0 0 3rem 0;
                border-radius: 12px;
                text-align: center;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
              }

              .claude-guide h2 {
                color: #1a202c;
                font-size: 2.25rem;
                font-weight: 700;
                margin: 3rem 0 1.5rem 0;
                padding-bottom: 0.75rem;
                border-bottom: 3px solid #4299e1;
                display: flex;
                align-items: center;
              }

              .claude-guide h3 {
                color: #2b6cb0;
                font-size: 1.5rem;
                font-weight: 600;
                margin: 2rem 0 1rem 0;
              }

              .claude-guide h4 {
                color: #2c5282;
                font-size: 1.25rem;
                font-weight: 600;
                margin: 1.5rem 0 0.75rem 0;
              }

              .claude-guide p {
                margin-bottom: 1.25rem;
                text-align: justify;
                font-size: 1.1rem;
              }

              .claude-guide ul,
              .claude-guide ol {
                margin: 1rem 0 1.5rem 2rem;
                font-size: 1.05rem;
              }

              .claude-guide li {
                margin-bottom: 0.5rem;
                line-height: 1.7;
              }

              .highlight-box {
                background: linear-gradient(135deg, #ebf8ff, #bee3f8);
                border-left: 5px solid #4299e1;
                padding: 1.5rem;
                margin: 2rem 0;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(66, 153, 225, 0.15);
              }

              .warning-section {
                background: linear-gradient(135deg, #fffbeb, #fed7aa);
                border-left: 5px solid #f59e0b;
                padding: 1.5rem;
                margin: 2rem 0;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(245, 158, 11, 0.15);
              }

              .success-section {
                background: linear-gradient(135deg, #f0fff4, #c6f6d5);
                border-left: 5px solid #38a169;
                padding: 1.5rem;
                margin: 2rem 0;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(56, 161, 105, 0.15);
              }

              .organization-visual {
                background: linear-gradient(135deg, #f7fafc, #edf2f7);
                padding: 2.5rem;
                border-radius: 12px;
                margin: 2rem 0;
                text-align: center;
                border: 2px solid #e2e8f0;
              }

              .role-hierarchy {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1.5rem;
              }

              .role-level {
                display: flex;
                justify-content: center;
                gap: 2rem;
                flex-wrap: wrap;
              }

              .role-box {
                background: white;
                padding: 1.5rem;
                border-radius: 10px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                border: 3px solid;
                min-width: 200px;
                text-align: center;
              }

              .role-president {
                border-color: #e53e3e;
                background: linear-gradient(135deg, #fed7d7, #feb2b2);
              }

              .role-manager {
                border-color: #3182ce;
                background: linear-gradient(135deg, #bee3f8, #90cdf4);
              }

              .role-worker {
                border-color: #38a169;
                background: linear-gradient(135deg, #c6f6d5, #9ae6b4);
              }

              .comparison-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                margin: 2rem 0;
              }

              .comparison-item {
                background: white;
                padding: 2rem;
                border-radius: 10px;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
                border-top: 4px solid #4299e1;
              }

              .step-guide {
                background: #f7fafc;
                padding: 2rem;
                border-radius: 10px;
                margin: 2rem 0;
                border: 1px solid #e2e8f0;
              }

              .step-item {
                display: flex;
                align-items: flex-start;
                margin-bottom: 2rem;
                gap: 1rem;
              }

              .step-number {
                background: linear-gradient(135deg, #4299e1, #3182ce);
                color: white;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 1.2rem;
                flex-shrink: 0;
              }

              .code-example {
                background: #1a202c;
                color: #68d391;
                padding: 1.5rem;
                border-radius: 8px;
                font-family: "Courier New", monospace;
                margin: 1rem 0;
                border-left: 4px solid #68d391;
                overflow-x: auto;
              }

              .feature-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
                margin: 2rem 0;
              }

              .feature-item {
                text-align: center;
                padding: 1.5rem;
                background: white;
                border-radius: 10px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                border-top: 3px solid #4299e1;
              }

              .table-container {
                overflow-x: auto;
                margin: 2rem 0;
                border-radius: 10px;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
              }

              .pricing-table {
                width: 100%;
                border-collapse: collapse;
                background: white;
              }

              .pricing-table th {
                background: #1a202c;
                color: white;
                padding: 1.25rem;
                font-weight: 600;
                text-align: center;
              }

              .pricing-table td {
                padding: 1.25rem;
                text-align: center;
                border-bottom: 1px solid #e2e8f0;
              }

              .pricing-table tr:hover {
                background: #f7fafc;
              }

              .conclusion-cta {
                background: linear-gradient(135deg, #4299e1, #3182ce);
                color: white;
                padding: 3rem;
                border-radius: 12px;
                text-align: center;
                margin: 3rem 0;
                box-shadow: 0 8px 32px rgba(66, 153, 225, 0.3);
              }

              .cta-buttons {
                display: flex;
                gap: 1rem;
                justify-content: center;
                flex-wrap: wrap;
                margin-top: 2rem;
              }

              .cta-button {
                padding: 0.75rem 2rem;
                border-radius: 8px;
                font-weight: 600;
                text-decoration: none;
                transition: all 0.3s ease;
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
              }

              .cta-primary {
                background: white;
                color: #3182ce;
              }

              .cta-secondary {
                background: transparent;
                color: white;
                border: 2px solid white;
              }

              .cta-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
              }

              @media (max-width: 768px) {
                .claude-guide h2 {
                  font-size: 1.875rem;
                }
                .role-level {
                  flex-direction: column;
                  align-items: center;
                }
                .comparison-grid {
                  grid-template-columns: 1fr;
                }
                .cta-buttons {
                  flex-direction: column;
                  align-items: center;
                }
              }
            `}</style>

            <link
              href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
              rel="stylesheet"
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 claude-guide">
              {/* Header */}
              <h1>
                <i className="fas fa-robot mr-4"></i>
                Claude Code AI開発チーム構築 完全マスターガイド
                <br />
                <span style={{ fontSize: "1.5rem", opacity: 0.9 }}>
                  最新のAI開発手法で、あなたのチームを10倍高速化
                </span>
              </h1>

              {/* Section 1: Claude Codeとは？ */}
              <h2>
                <i className="fas fa-lightbulb text-yellow-500 mr-3"></i>
                Claude Codeとは？
              </h2>

              <p>
                Claude
                Codeは、Anthropic社が開発した革新的なAI開発システムです。従来のソフトウェア開発手法を根本的に変革し、
                人間とAIが真の意味で協働する新しい開発パラダイムを提供します。単なるコード補完ツールではなく、
                実際のチームメンバーとして機能するAI組織を構築することで、開発効率を劇的に向上させることができます。
              </p>

              <h3>基本概念と革新性</h3>
              <p>
                Claude
                Codeの最大の特徴は、AIが「補助ツール」ではなく「チームメンバー」として機能することです。
                これまでのAI支援開発では、人間が主導権を握り、AIは限定的な支援を行うに留まっていました。
                しかし、Claude
                Codeでは、プロジェクトの要件定義から実装、テスト、デプロイメントまでの全工程において、
                AIチームが主体的に作業を分担し、協調して高品質なソフトウェアを開発します。
              </p>

              <div className="highlight-box">
                <h4>
                  <i className="fas fa-star mr-2"></i>重要なポイント
                </h4>
                <p>
                  Claude
                  Codeでは、AIが単純な指示実行者ではなく、創造的な問題解決能力を持つチームメンバーとして機能します。
                  各AIには専門分野が割り当てられ、人間の開発者と同様に責任を持って作業を遂行します。
                </p>
              </div>

              <h3>従来開発手法との根本的違い</h3>
              <div className="comparison-grid">
                <div className="comparison-item">
                  <h4 style={{ color: "#e53e3e" }}>従来の開発手法</h4>
                  <ul>
                    <li>人間が全工程を手動で実行</li>
                    <li>個人のスキルレベルに依存</li>
                    <li>作業の属人化が発生</li>
                    <li>品質のばらつきが大きい</li>
                    <li>開発速度に限界がある</li>
                  </ul>
                </div>
                <div className="comparison-item">
                  <h4 style={{ color: "#38a169" }}>Claude Code開発手法</h4>
                  <ul>
                    <li>AIチームが組織的に分業</li>
                    <li>一定水準以上の品質を保証</li>
                    <li>知識とスキルの標準化</li>
                    <li>24時間継続的な開発が可能</li>
                    <li>従来の10倍の開発速度を実現</li>
                  </ul>
                </div>
              </div>

              <h3>主要機能と特徴</h3>
              <p>
                Claude
                Codeは以下の3つの主要機能を通じて、革新的な開発体験を提供します：
              </p>

              <div className="feature-grid">
                <div className="feature-item">
                  <i className="fas fa-users text-4xl text-blue-500 mb-3"></i>
                  <h4>AI組織構築</h4>
                  <p>
                    プロジェクトの性質に応じて最適なAIチーム構成を自動生成。
                    フロントエンド、バックエンド、品質管理など、専門分野に特化したAIメンバーが協働します。
                  </p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-cogs text-4xl text-green-500 mb-3"></i>
                  <h4>自動品質管理</h4>
                  <p>
                    コードレビュー、テスト作成、バグ検出から修正まで、
                    品質管理の全プロセスをAIが自動化。一貫した高品質なコードを保証します。
                  </p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-rocket text-4xl text-purple-500 mb-3"></i>
                  <h4>高速開発</h4>
                  <p>
                    並列処理とAIの高速実行能力により、従来手法の10倍の開発速度を実現。
                    複雑なプロジェクトも短期間で完成させることができます。
                  </p>
                </div>
              </div>

              {/* Section 2: AI組織の仕組み */}
              <h2>
                <i className="fas fa-sitemap text-blue-500 mr-3"></i>
                AI組織の仕組み
              </h2>

              <p>
                Claude
                Codeの核心は、階層化されたAI組織構造にあります。従来の開発チームと同様に、
                明確な役割分担と責任体系を持つAIメンバーが協働することで、効率的かつ高品質な開発を実現します。
                この組織構造は、実際の企業組織をモデルとして設計されており、各AIが専門性を活かしながら
                全体最適を図る仕組みとなっています。
              </p>

              <h3>組織構成と役割分担</h3>
              <div className="organization-visual">
                <h4 style={{ marginBottom: "2rem" }}>AI開発チーム組織図</h4>

                <div className="role-hierarchy">
                  {/* President */}
                  <div className="role-level">
                    <div className="role-box role-president">
                      <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                        👑
                      </div>
                      <h4>PRESIDENT</h4>
                      <p style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>
                        最終意思決定者
                      </p>
                      <p style={{ fontSize: "0.8rem", color: "#666" }}>
                        プロジェクト全体の方向性決定
                        <br />
                        技術選択と品質基準の設定
                      </p>
                    </div>
                  </div>

                  <div style={{ fontSize: "2rem", color: "#666" }}>↓</div>

                  {/* Manager */}
                  <div className="role-level">
                    <div className="role-box role-manager">
                      <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                        🎯
                      </div>
                      <h4>MANAGER</h4>
                      <p style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>
                        中間管理職
                      </p>
                      <p style={{ fontSize: "0.8rem", color: "#666" }}>
                        タスク分散と品質管理
                        <br />
                        進捗監視と問題解決
                      </p>
                    </div>
                  </div>

                  <div style={{ fontSize: "2rem", color: "#666" }}>↓</div>

                  {/* Workers */}
                  <div className="role-level">
                    <div className="role-box role-worker">
                      <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                        ⚡
                      </div>
                      <h4>WORKER 1</h4>
                      <p style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>
                        フロントエンド専門
                      </p>
                      <p style={{ fontSize: "0.8rem", color: "#666" }}>
                        UI/UX実装とレスポンシブ対応
                      </p>
                    </div>
                    <div className="role-box role-worker">
                      <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                        🔧
                      </div>
                      <h4>WORKER 2</h4>
                      <p style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>
                        バックエンド専門
                      </p>
                      <p style={{ fontSize: "0.8rem", color: "#666" }}>
                        API設計とデータベース構築
                      </p>
                    </div>
                    <div className="role-box role-worker">
                      <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                        🧪
                      </div>
                      <h4>WORKER 3</h4>
                      <p style={{ fontSize: "0.9rem", margin: "0.5rem 0" }}>
                        品質管理専門
                      </p>
                      <p style={{ fontSize: "0.8rem", color: "#666" }}>
                        テスト作成とバグ検出・修正
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3>各役職の詳細な責任範囲</h3>
              <h4>PRESIDENT（プレジデント）</h4>
              <p>
                プロジェクト全体の統括責任者として、技術的な意思決定を行います。
                要件定義の解釈、アーキテクチャの選択、品質基準の設定など、
                プロジェクトの成功を左右する重要な判断を担当します。
                また、開発チーム全体のパフォーマンスを監視し、必要に応じて戦略の調整を行います。
              </p>

              <h4>MANAGER（マネージャー）</h4>
              <p>
                プレジデントの方針を受けて、具体的な作業計画を立案・実行します。
                各ワーカーへのタスク分散、進捗管理、品質チェック、問題解決などの
                日常的な管理業務を担当します。また、ワーカー間の連携を調整し、
                全体の作業効率を最適化する役割も果たします。
              </p>

              <h4>WORKER（ワーカー）</h4>
              <p>
                それぞれの専門分野において、実際のコーディング作業を行います。
                フロントエンド、バックエンド、品質管理の3つの専門領域に分かれ、
                各自が高度な専門知識を活用して効率的な実装を行います。
                相互に連携しながら、統合された高品質なソフトウェアを構築します。
              </p>

              <h3>コミュニケーションフローと作業プロセス</h3>
              <div className="step-guide">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div>
                    <h4>要件定義と方針決定</h4>
                    <p>
                      PREMIENTがプロジェクトの要件を分析し、全体的な開発方針を決定します。
                      技術スタック、アーキテクチャパターン、品質基準などを設定し、
                      開発チーム全体の方向性を明確にします。
                    </p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">2</div>
                  <div>
                    <h4>タスク分散と計画立案</h4>
                    <p>
                      MANAGERがプレジデントの方針を受けて、具体的な作業計画を作成します。
                      各ワーカーの専門性を考慮して最適なタスク配分を行い、
                      効率的な並行開発を可能にする作業スケジュールを策定します。
                    </p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">3</div>
                  <div>
                    <h4>専門分野での並行開発</h4>
                    <p>
                      各WORKERが自身の専門分野で集中的に開発を行います。
                      フロントエンド、バックエンド、品質管理の作業が同時並行で進むことで、
                      従来の順次開発と比較して大幅な時間短縮を実現します。
                    </p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">4</div>
                  <div>
                    <h4>統合・レビュー・品質保証</h4>
                    <p>
                      MANAGERが各ワーカーの成果物を統合し、全体的な品質チェックを実施します。
                      コードレビュー、統合テスト、パフォーマンス検証などを経て、
                      最終的にPREMIENTが品質基準への適合を確認します。
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3: メリット・デメリット */}
              <h2>
                <i className="fas fa-balance-scale text-purple-500 mr-3"></i>
                メリット・デメリット
              </h2>

              <p>
                Claude
                Code開発手法の導入には、革新的なメリットと同時に考慮すべき課題も存在します。
                ここでは、実際の導入検討において重要となる両面を詳細に解説し、
                あなたの組織にとって最適な判断材料を提供します。
              </p>

              <h3>Claude Code導入の主要メリット</h3>

              <h4>1. 劇的な開発速度向上（10倍の効率化）</h4>
              <p>
                Claude
                Codeの最大の魅力は、従来開発と比較して10倍の開発速度を実現することです。
                これは単純な作業の高速化ではなく、AI組織による並列処理、自動化された品質管理、
                専門知識の即座な活用によって達成される包括的な効率化です。
                複雑なWebアプリケーションであっても、従来なら数ヶ月かかる開発を数週間で完成させることが可能になります。
              </p>

              <h4>2. 24時間継続開発体制</h4>
              <p>
                AIチームは人間と異なり、休憩や睡眠を必要としません。
                プロジェクトの緊急性に応じて、文字通り24時間体制での開発を継続することができます。
                これにより、タイトなスケジュールのプロジェクトや、グローバルな時差を考慮した開発において、
                圧倒的な競争優位性を獲得できます。
              </p>

              <h4>3. 一貫した高品質保証</h4>
              <p>
                人間の開発者は体調や経験により品質にばらつきが生じがちですが、
                AIチームは常に一定水準以上の品質を維持します。
                コーディング規約の遵守、セキュリティベストプラクティスの適用、
                パフォーマンス最適化などが自動的に組み込まれ、品質の標準化が実現されます。
              </p>

              <h4>4. 専門知識の即座な活用</h4>
              <p>
                各AIワーカーは、それぞれの専門分野において最新の技術トレンドと
                ベストプラクティスを常に把握しています。新しいフレームワークや
                ライブラリが登場した際も、迅速にキャッチアップして開発に活用することができます。
              </p>

              <div className="success-section">
                <h4>
                  <i className="fas fa-chart-line mr-2"></i>
                  効率比較：開発手法別パフォーマンス
                </h4>
                <div className="comparison-grid">
                  <div
                    className="comparison-item"
                    style={{ textAlign: "center" }}
                  >
                    <div
                      style={{
                        fontSize: "3rem",
                        margin: "1rem 0",
                        color: "#e53e3e",
                      }}
                    >
                      🐌
                    </div>
                    <h4 style={{ color: "#e53e3e" }}>従来開発</h4>
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: "#e53e3e",
                      }}
                    >
                      1x
                    </div>
                    <p>基準速度・人的リソース依存</p>
                  </div>
                  <div
                    className="comparison-item"
                    style={{ textAlign: "center" }}
                  >
                    <div
                      style={{
                        fontSize: "3rem",
                        margin: "1rem 0",
                        color: "#f59e0b",
                      }}
                    >
                      🚶
                    </div>
                    <h4 style={{ color: "#f59e0b" }}>部分AI活用</h4>
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: "#f59e0b",
                      }}
                    >
                      3x
                    </div>
                    <p>コード補完・部分自動化</p>
                  </div>
                  <div
                    className="comparison-item"
                    style={{ textAlign: "center" }}
                  >
                    <div
                      style={{
                        fontSize: "3rem",
                        margin: "1rem 0",
                        color: "#38a169",
                      }}
                    >
                      🚀
                    </div>
                    <h4 style={{ color: "#38a169" }}>Claude Code</h4>
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: "#38a169",
                      }}
                    >
                      10x
                    </div>
                    <p>完全AI組織・並列処理</p>
                  </div>
                </div>
              </div>

              <h3>導入時の課題と対策</h3>

              <h4>1. 初期設定の複雑性</h4>
              <p>
                Claude
                Code環境の構築には、従来の開発環境セットアップよりも多くの設定項目があります。
                AI組織の構成定義、各ワーカーの専門分野設定、コミュニケーションフローの調整など、
                初回セットアップには相応の時間と技術的理解が必要です。
                ただし、一度適切に構築すれば、その後の運用は大幅に簡素化されます。
              </p>

              <h4>2. AIへの適切な依存度管理</h4>
              <p>
                高度な自動化により、開発者がAIに過度に依存するリスクがあります。
                重要なのは、AIを活用しながらも、システムの全体像を理解し、
                必要に応じて人間が介入できる体制を維持することです。
                定期的な技術レビューと、開発者のスキル維持プログラムの実施が推奨されます。
              </p>

              <h4>3. 学習投資の必要性</h4>
              <p>
                Claude
                Codeを効果的に活用するためには、チームメンバーの学習投資が不可欠です。
                AI組織の管理方法、効果的な指示の出し方、品質管理の手法など、
                新しいスキルセットの習得が必要になります。
                しかし、この投資は中長期的に大きなリターンをもたらします。
              </p>

              <div className="warning-section">
                <h4>
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  導入前の重要な検討事項
                </h4>
                <ul>
                  <li>組織の技術的成熟度とClaude Code導入の適合性評価</li>
                  <li>初期投資コストと中長期的なROIの算出</li>
                  <li>既存開発プロセスとの統合計画の策定</li>
                  <li>チームメンバーの学習計画とサポート体制の構築</li>
                  <li>品質保証とリスク管理体制の確立</li>
                </ul>
              </div>

              {/* Section 4: 必要な環境 */}
              <h2>
                <i className="fas fa-desktop text-green-500 mr-3"></i>
                必要な環境
              </h2>

              <p>
                Claude
                Code開発環境を構築するためには、適切なハードウェア仕様と必要なソフトウェアの準備が重要です。
                ここでは、効率的な開発を行うための推奨環境と、各プラットフォームでの具体的な要件を詳しく解説します。
                事前に環境を整えることで、スムーズな導入と安定した運用を実現できます。
              </p>

              <h3>ハードウェア要件とシステム仕様</h3>
              <p>
                Claude
                CodeはAI処理を多用するため、従来の開発環境よりも高いシステム仕様が推奨されます。
                特にメモリ容量とストレージ速度は、AI組織の応答性能に直接影響するため、
                可能な限り推奨仕様以上の環境を準備することをお勧めします。
              </p>

              <h4>Windows環境での要件</h4>
              <p>
                <i className="fab fa-windows text-blue-500 mr-2"></i>
                <strong>Windows 10 以降</strong>（Windows 11推奨）が必要です。
                メモリ容量は最低8GB、推奨16GB以上を確保してください。
                ストレージは50GB以上の空き容量が必要で、SSDの使用を強く推奨します。
                また、Windows Subsystem for Linux (WSL2) の有効化により、
                Linux環境との互換性を向上させることができます。
              </p>

              <h4>macOS環境での要件</h4>
              <p>
                <i className="fab fa-apple text-gray-700 mr-2"></i>
                <strong>macOS Big Sur 以降</strong>が対応バージョンです。 Apple
                Silicon (M1/M2) チップでも完全対応しており、
                特にAI処理においては高いパフォーマンスを発揮します。
                メモリ仕様はWindows環境と同様で、8GB以上（推奨16GB）、
                ストレージは50GB以上の空き容量が必要です。
              </p>

              <h4>Linux環境での要件</h4>
              <p>
                <i className="fab fa-linux text-orange-500 mr-2"></i>
                <strong>Ubuntu 20.04 以降</strong>を基準としていますが、
                CentOS、Fedora、Debian系ディストリビューションでも動作します。
                Linux環境では、カーネルバージョン5.4以降、 glibc
                2.31以降が必要です。コンテナ技術（Docker）の活用により、
                より柔軟な環境構築が可能になります。
              </p>

              <h3>必須ソフトウェアとツール</h3>
              <p>
                Claude Code環境では、以下のソフトウェアが必須となります。
                各ツールは特定の役割を担っており、すべて適切にインストール・設定する必要があります。
              </p>

              <h4>Git - バージョン管理システム</h4>
              <p>
                <i className="fab fa-git-alt text-red-500 mr-2"></i>
                プロジェクトのバージョン管理とAI組織間でのコード共有に使用します。
                Git
                2.25以降が推奨バージョンです。GitHubまたはGitLabとの連携により、
                リモートリポジトリでのチーム開発も可能になります。
                初回セットアップ時には、ユーザー名とメールアドレスの設定を忘れずに行ってください。
              </p>

              <h4>tmux - ターミナルマルチプレクサ</h4>
              <p>
                <i className="fas fa-terminal text-green-500 mr-2"></i>
                複数のAIワーカーが並行して作業するため、ターミナルセッションの管理が重要です。
                tmuxにより、各AIワーカーの作業状況を個別に監視し、
                必要に応じて介入することができます。バージョン3.0以降を使用してください。
              </p>

              <h4>Node.js - JavaScript実行環境</h4>
              <p>
                <i className="fab fa-node-js text-green-600 mr-2"></i>
                Claude CodeのコアエンジンはNode.js上で動作します。 LTS版（Long
                Term Support）の最新バージョンを使用してください。
                npmまたはyarnパッケージマネージャーも同時にインストールされ、
                依存関係の管理に使用されます。
              </p>

              <h4>Cursor - AI統合開発環境</h4>
              <p>
                <i className="fas fa-code text-blue-500 mr-2"></i>
                Claude CodeとネイティブでCursor IDEが統合されています。 従来のVS
                Codeの機能に加えて、AI組織との直接的なインタラクションが可能です。
                最新版のCursorをダウンロードし、Claude
                Code拡張機能を有効化してください。
              </p>

              <h3>料金プランと導入コスト</h3>
              <p>
                Claude
                Codeは、個人から企業まで幅広いニーズに対応する料金プランを提供しています。
                初期学習やプロトタイプ開発には無料プランが利用でき、
                本格的な開発には有料プランが推奨されます。
                各プランの特徴を理解して、あなたの開発規模に最適なプランを選択してください。
              </p>

              <div className="table-container">
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>プラン</th>
                      <th>月額料金</th>
                      <th>使用制限</th>
                      <th>適用対象</th>
                      <th>主な特徴</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>無料プラン</strong>
                      </td>
                      <td>$0</td>
                      <td>月200回まで</td>
                      <td>個人学習</td>
                      <td>基本機能・学習目的</td>
                    </tr>
                    <tr>
                      <td>
                        <strong style={{ color: "#3182ce" }}>Proプラン</strong>
                      </td>
                      <td>$20</td>
                      <td>月500回まで</td>
                      <td>個人開発者</td>
                      <td>高速処理・優先サポート</td>
                    </tr>
                    <tr>
                      <td>
                        <strong style={{ color: "#805ad5" }}>
                          Businessプラン
                        </strong>
                      </td>
                      <td>$40</td>
                      <td>無制限</td>
                      <td>チーム開発</td>
                      <td>無制限利用・チーム管理</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="highlight-box">
                <h4>
                  <i className="fas fa-calculator mr-2"></i>コスト効果の試算例
                </h4>
                <p>
                  従来の開発手法で月額50万円のプロジェクトを想定した場合、
                  Claude
                  Code導入により開発効率が10倍向上すれば、実質的なコストは月額5万円相当になります。
                  Businessプラン（$40/月）のコストを考慮しても、圧倒的なコストパフォーマンスを実現できます。
                </p>
              </div>

              {/* Section 5: セットアップ手順 */}
              <h2>
                <i className="fas fa-cog text-orange-500 mr-3"></i>
                セットアップ手順
              </h2>

              <p>
                Claude Code環境の構築は、6つのステップで完了します。
                各ステップを順序通りに実行することで、確実にAI開発チームを立ち上げることができます。
                初回セットアップには30分程度の時間を要しますが、一度構築すれば継続的に利用できます。
              </p>

              <h3>ステップバイステップ導入ガイド</h3>
              
              <div className="step-guide">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div>
                    <h4>Cursor IDEのインストールと初期設定</h4>
                    <p>
                      まず、Claude Code対応のCursor IDEをインストールします。
                      公式サイトから最新版をダウンロードし、あなたのオペレーティングシステムに応じてインストールを実行してください。
                      macOSユーザーはHomebrewを利用することで、コマンドラインからの簡単インストールが可能です。
                    </p>
                    <div className="code-example">
                      <code>
                        # macOSの場合（Homebrew使用）<br />
                        brew install --cask cursor<br />
                        <br />
                        # Windowsの場合<br />
                        # 公式サイトからインストーラーをダウンロードして実行<br />
                        # https://cursor.sh/download<br />
                        <br />
                        # Linuxの場合<br />
                        wget https://cursor.sh/linux/cursor.AppImage<br />
                        chmod +x cursor.AppImage
                      </code>
                    </div>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">2</div>
                  <div>
                    <h4>Claude API キーの取得と設定</h4>
                    <p>
                      Anthropic社のアカウントを作成し、Claude APIキーを取得します。
                      取得したAPIキーは環境変数として設定し、Claude Codeが認証情報にアクセスできるようにします。
                      セキュリティの観点から、APIキーは適切に管理し、公開リポジトリにコミットしないよう注意してください。
                    </p>
                    <div className="code-example">
                      <code>
                        # 環境変数への設定（bash/zsh）<br />
                        export ANTHROPIC_API_KEY="your-api-key-here"<br />
                        <br />
                        # 永続化のため.bashrcまたは.zshrcに追加<br />
                        echo 'export ANTHROPIC_API_KEY="your-api-key-here"' &gt;&gt; ~/.bashrc<br />
                        <br />
                        # Windows PowerShellの場合<br />
                        $env:ANTHROPIC_API_KEY="your-api-key-here"
                      </code>
                    </div>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">3</div>
                  <div>
                    <h4>新規プロジェクトの作成と初期化</h4>
                    <p>
                      Claude Code対応のプロジェクトを新規作成します。
                      プロジェクトディレクトリを作成し、Claude Code の初期化コマンドを実行することで、
                      必要な設定ファイルとディレクトリ構造が自動生成されます。
                    </p>
                    <div className="code-example">
                      <code>
                        # プロジェクトディレクトリの作成<br />
                        mkdir my-claude-project<br />
                        cd my-claude-project<br />
                        <br />
                        # Claude Code プロジェクトの初期化<br />
                        claude-code init<br />
                        <br />
                        # Gitリポジトリの初期化（推奨）<br />
                        git init<br />
                        git add .<br />
                        git commit -m "Initial Claude Code project setup"
                      </code>
                    </div>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">4</div>
                  <div>
                    <h4>AI チーム構成の設定とカスタマイズ</h4>
                    <p>
                      プロジェクトの性質に応じて、AIチームの構成を設定します。
                      対話形式のセットアップウィザードが起動し、プロジェクトタイプ、
                      技術スタック、チーム規模などを選択することで、最適なAI組織が構築されます。
                    </p>
                    <div className="code-example">
                      <code>
                        # AIチーム設定の開始<br />
                        claude-code team setup<br />
                        <br />
                        # 設定例：<br />
                        # - プロジェクトタイプ: Web Application<br />
                        # - フロントエンド: React + TypeScript<br />
                        # - バックエンド: Node.js + Express<br />
                        # - データベース: PostgreSQL<br />
                        # - チーム規模: 標準（3ワーカー）
                      </code>
                    </div>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">5</div>
                  <div>
                    <h4>システム動作テストと検証</h4>
                    <p>
                      すべての設定が正常に動作するかテストを実行します。
                      AIチームの通信テスト、API接続確認、開発環境の動作検証を行い、
                      問題がないことを確認してから本格的な開発を開始します。
                    </p>
                    <div className="code-example">
                      <code>
                        # システム全体のテスト実行<br />
                        claude-code test<br />
                        <br />
                        # 詳細な診断情報の表示<br />
                        claude-code diagnose<br />
                        <br />
                        # AIチーム個別のヘルスチェック<br />
                        claude-code team status
                      </code>
                    </div>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">6</div>
                  <div>
                    <h4>開発開始とAIチーム運用</h4>
                    <p>
                      すべての設定が完了し、テストも正常に通過すれば、Claude Code AIチーム開発を開始できます。
                      Cursor IDE内でAI組織と直接コミュニケーションを取りながら、
                      効率的な開発プロセスを体験してください。
                    </p>
                    <div className="success-section">
                      <h4><i className="fas fa-check-circle mr-2"></i>セットアップ完了</h4>
                      <p>
                        おめでとうございます！Claude Code AI開発環境の構築が完了しました。
                        これで従来の10倍の開発速度を実現する革新的な開発体験を始めることができます。
                        まずは小さなプロジェクトから始めて、AIチームとの協働に慣れていくことをお勧めします。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6: 実際の開発事例 */}
              <h2>
                <i className="fas fa-project-diagram text-red-500 mr-3"></i>
                実際の開発事例
              </h2>

              <p>
                理論だけでなく、実際のプロジェクトでClaude Codeがどのような成果を上げているのかを、
                具体的な開発事例を通じて紹介します。この事例は、従来の開発手法と比較して
                75%の時間短縮を実現した実際のプロジェクトです。
              </p>

              <h3>ケーススタディ：紅茶専門店ECサイト「TeaTime Paradise」</h3>
              
              <div className="highlight-box">
                <h4><i className="fas fa-leaf mr-2"></i>プロジェクト概要</h4>
                <p>
                  <strong>サイト名：</strong>TeaTime Paradise<br />
                  <strong>業種：</strong>紅茶専門店のオンラインショップ<br />
                  <strong>開発期間：</strong>2週間（従来手法では8週間予定）<br />
                  <strong>チーム構成：</strong>人間開発者1名 + Claude Code AIチーム<br />
                  <strong>技術スタック：</strong>React.js、Node.js、Express、MongoDB、Stripe決済
                </p>
              </div>

              <h3>プロジェクトの背景と要件</h3>
              <p>
                クライアントは、実店舗を運営する紅茶専門店で、コロナ禍を機にオンライン販売を開始したいという要望がありました。
                限られた予算と短い納期の中で、以下の機能を持つ本格的なECサイトの構築が求められました：
              </p>

              <ul>
                <li>商品カタログ表示機能（高品質な商品画像と詳細説明）</li>
                <li>ショッピングカート機能（数量変更、合計金額計算）</li>
                <li>ユーザー認証システム（会員登録、ログイン、プロフィール管理）</li>
                <li>決済システム連携（クレジットカード、銀行振込対応）</li>
                <li>管理者ダッシュボード（商品管理、注文管理、売上分析）</li>
                <li>レスポンシブデザイン（PC、タブレット、スマートフォン対応）</li>
              </ul>

              <h3>AI チームの役割分担と作業プロセス</h3>
              <p>
                このプロジェクトでは、3つの専門分野に特化したAIワーカーが効率的に作業を分担しました：
              </p>

              <h4>WORKER 1 - フロントエンド専門</h4>
              <p>
                Reactコンポーネントの設計から実装まで、ユーザーインターフェース全体を担当しました。
                商品一覧ページ、商品詳細ページ、ショッピングカート、ユーザー認証画面など、
                全てのページコンポーネントを一貫したデザインシステムで構築。
                CSS-in-JSを活用したスタイリングと、レスポンシブデザインの実装も同時に行いました。
              </p>

              <h4>WORKER 2 - バックエンド専門</h4>
              <p>
                RESTful APIの設計・実装、データベース設計、セキュリティ実装を担当しました。
                商品データの管理、ユーザー認証、注文処理、決済システムとの連携など、
                ECサイトに必要な全てのサーバーサイド機能を構築。
                また、パフォーマンス最適化とセキュリティ対策も同時に実装しました。
              </p>

              <h4>WORKER 3 - 品質管理専門</h4>
              <p>
                テストケースの作成、バグ検出・修正、パフォーマンス最適化を担当しました。
                ユニットテスト、統合テスト、エンドツーエンドテストを包括的に実装し、
                品質の高いコードベースを維持。継続的インテグレーション（CI）の設定も行いました。
              </p>

              <h3>開発プロセスと時間短縮の要因</h3>
              <p>
                従来の開発手法では、フロントエンド、バックエンド、テスト工程を順次実行するため、
                8週間の開発期間が必要と見積もられていました。しかし、Claude Code AIチームでは、
                以下の要因により劇的な時間短縮を実現しました：
              </p>

              <h4>1. 並列処理による効率化</h4>
              <p>
                3つのワーカーが同時並行で作業を進めることで、従来の順次処理と比較して
                大幅な時間短縮を実現。フロントエンドの画面設計と同時にバックエンドのAPI開発が進み、
                テスト工程も開発と並行して実行されました。
              </p>

              <h4>2. AI による高速コーディング</h4>
              <p>
                人間の開発者が数時間かけて実装する機能を、AIワーカーは数分で完成させます。
                また、コーディング規約やベストプラクティスが自動的に適用されるため、
                後工程での修正作業も最小限に抑えられました。
              </p>

              <h4>3. 自動化された品質管理</h4>
              <p>
                テストケースの作成、バグ検出、修正作業が自動化されているため、
                従来の手動テスト工程と比較して大幅な時間短縮を実現。
                また、品質の一貫性も向上しました。
              </p>

              <div className="success-section">
                <h4><i className="fas fa-chart-line mr-2"></i>プロジェクト成果</h4>
                <p>
                  <strong>開発期間：</strong>2週間（従来手法の8週間から75%短縮）<br />
                  <strong>品質指標：</strong>バグ発生率が従来比50%減少<br />
                  <strong>クライアント満足度：</strong>期待を上回る仕上がりで高評価<br />
                  <strong>運用実績：</strong>リリース後3ヶ月で売上が実店舗の30%に到達<br />
                  <strong>メンテナンス性：</strong>清潔で保守しやすいコードベースを実現
                </p>
              </div>

              <h3>学習ポイントと今後への示唆</h3>
              <p>
                この事例から、Claude Code AIチームの導入により、単なる開発速度の向上だけでなく、
                品質の向上、コスト削減、クライアント満足度の向上など、
                多面的なメリットが得られることが実証されました。
                特に、中小企業や個人事業主にとって、限られたリソースで高品質なシステムを
                構築できる可能性を示す重要な事例となっています。
              </p>

              {/* Section 7: 運用のコツ */}
              <div className="card mb-8">
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    <i className="fas fa-lightbulb text-yellow-500 mr-3"></i>
                    運用のコツ
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-blue-600">
                        効果的な指示方法
                      </h3>
                      <div className="space-y-4">
                        <div className="success-box p-4 rounded-lg">
                          <h4 className="font-bold text-green-800 mb-2">
                            ✅ 良い指示例
                          </h4>
                          <p className="text-sm text-green-700">
                            「React
                            でログイン画面を作成してください。メール認証機能付きで、Material-UI
                            を使用し、レスポンシブデザインにしてください。」
                          </p>
                        </div>

                        <div className="warning-box p-4 rounded-lg">
                          <h4 className="font-bold text-yellow-800 mb-2">
                            ⚠️ 避けるべき指示例
                          </h4>
                          <p className="text-sm text-yellow-700">
                            「ログイン画面を作って」（詳細不足）
                          </p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="font-bold mb-3 text-purple-600">
                          指示のポイント
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <span className="text-blue-500 mr-2">1️⃣</span>
                            <span>具体的な技術スタックを明記</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-blue-500 mr-2">2️⃣</span>
                            <span>期待する機能を詳細に記述</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-blue-500 mr-2">3️⃣</span>
                            <span>デザイン要件を明確化</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-blue-500 mr-2">4️⃣</span>
                            <span>性能要件があれば明記</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 text-green-600">
                        プロジェクト管理
                      </h3>
                      <div className="space-y-4">
                        <div className="info-box p-4 rounded-lg">
                          <h4 className="font-bold text-blue-800 mb-2">
                            <i className="fas fa-tasks mr-2"></i>
                            タスク分割
                          </h4>
                          <p className="text-sm text-blue-700">
                            大きな機能を小さなタスクに分割し、AI
                            チームに適切に割り当てることで効率が向上します。
                          </p>
                        </div>

                        <div className="info-box p-4 rounded-lg">
                          <h4 className="font-bold text-blue-800 mb-2">
                            <i className="fas fa-sync mr-2"></i>
                            定期レビュー
                          </h4>
                          <p className="text-sm text-blue-700">
                            AI
                            が生成したコードを定期的にレビューし、品質を维持することが重要です。
                          </p>
                        </div>

                        <div className="info-box p-4 rounded-lg">
                          <h4 className="font-bold text-blue-800 mb-2">
                            <i className="fas fa-database mr-2"></i>
                            バージョン管理
                          </h4>
                          <p className="text-sm text-blue-700">
                            Git を活用して、AI
                            による変更履歴を適切に管理し、必要に応じてロールバック可能にします。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-center text-purple-800">
                      品質向上テクニック
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <i className="fas fa-check-double text-3xl text-green-500 mb-3"></i>
                        <h4 className="font-bold text-gray-800 mb-2">
                          多段階レビュー
                        </h4>
                        <p className="text-sm text-gray-600">
                          AI チーム内での相互レビューを実施
                        </p>
                      </div>
                      <div className="text-center">
                        <i className="fas fa-vial text-3xl text-blue-500 mb-3"></i>
                        <h4 className="font-bold text-gray-800 mb-2">
                          自動テスト
                        </h4>
                        <p className="text-sm text-gray-600">
                          CI/CD パイプラインでの自動品質チェック
                        </p>
                      </div>
                      <div className="text-center">
                        <i className="fas fa-chart-line text-3xl text-orange-500 mb-3"></i>
                        <h4 className="font-bold text-gray-800 mb-2">
                          パフォーマン ス監視
                        </h4>
                        <p className="text-sm text-gray-600">
                          リアルタイムでの性能測定と最適化
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 8: トラブル解決 */}
              <div className="card mb-8">
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    <i className="fas fa-tools text-red-500 mr-3"></i>
                    トラブル解決
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-red-600">
                        <i className="fas fa-exclamation-triangle mr-2"></i>
                        技術的問題
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="warning-box p-4 rounded-lg">
                          <h4 className="font-bold text-yellow-800 mb-2">
                            問題: API接続エラー
                          </h4>
                          <p className="text-sm text-yellow-700 mb-3">
                            Claude API への接続が失敗する場合
                          </p>
                          <div className="command-prompt text-xs">
                            <code>
                              # API キーの確認
                              <br />
                              echo $ANTHROPIC_API_KEY
                              <br />
                              <br />
                              # ネットワーク接続テスト
                              <br />
                              curl -I https://api.anthropic.com
                            </code>
                          </div>
                        </div>

                        <div className="warning-box p-4 rounded-lg">
                          <h4 className="font-bold text-yellow-800 mb-2">
                            問題: メモリ不足
                          </h4>
                          <p className="text-sm text-yellow-700 mb-3">
                            大規模なプロジェクトでメモリが不足する場合
                          </p>
                          <div className="command-prompt text-xs">
                            <code>
                              # メモリ使用量確認
                              <br />
                              free -h
                              <br />
                              <br />
                              # プロセス優先度調整
                              <br />
                              nice -n 10 claude-code start
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 text-blue-600">
                        <i className="fas fa-robot mr-2"></i>
                        AI組織問題
                      </h3>
                      <div className="space-y-4">
                        <div className="info-box p-4 rounded-lg">
                          <h4 className="font-bold text-blue-800 mb-2">
                            問題: 役割分担の混乱
                          </h4>
                          <p className="text-sm text-blue-700 mb-3">
                            AI
                            チームメンバー間で作業が重複したり、漏れが発生する場合
                          </p>
                          <ul className="text-xs space-y-1">
                            <li>• チーム設定を再構成</li>
                            <li>• より具体的なタスク定義</li>
                            <li>• 定期的な進捗確認の実施</li>
                          </ul>
                        </div>

                        <div className="info-box p-4 rounded-lg">
                          <h4 className="font-bold text-blue-800 mb-2">
                            問題: コード品質の低下
                          </h4>
                          <p className="text-sm text-blue-700 mb-3">
                            生成されるコードの品質が期待を下回る場合
                          </p>
                          <ul className="text-xs space-y-1">
                            <li>• より詳細な要件定義</li>
                            <li>• コーディング規約の明確化</li>
                            <li>• レビュープロセスの強化</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 text-green-600">
                        <i className="fas fa-first-aid mr-2"></i>
                        緊急対処法
                      </h3>
                      <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                        <h4 className="font-bold text-red-800 mb-4 text-center">
                          🚨 緊急時の対処手順
                        </h4>
                        <div className="timeline">
                          <div className="timeline-item">
                            <h5 className="font-bold text-red-700">
                              Step 1: 状況把握
                            </h5>
                            <p className="text-sm text-red-600">
                              ログファイルを確認し、エラーの原因を特定
                            </p>
                          </div>
                          <div className="timeline-item">
                            <h5 className="font-bold text-red-700">
                              Step 2: 一時停止
                            </h5>
                            <p className="text-sm text-red-600">
                              AI チームの動作を一時停止し、被害拡大を防止
                            </p>
                          </div>
                          <div className="timeline-item">
                            <h5 className="font-bold text-red-700">
                              Step 3: バックアップ復元
                            </h5>
                            <p className="text-sm text-red-600">
                              最新の安定版からのロールバック実行
                            </p>
                          </div>
                          <div className="timeline-item">
                            <h5 className="font-bold text-red-700">
                              Step 4: 原因修正
                            </h5>
                            <p className="text-sm text-red-600">
                              根本原因を修正し、再発防止策を実施
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 success-box p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-green-800 text-center">
                      <i className="fas fa-phone mr-2"></i>
                      サポート体制
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div>
                        <i className="fas fa-book text-2xl text-blue-500 mb-2"></i>
                        <h4 className="font-bold">ドキュメント</h4>
                        <p className="text-sm text-gray-600">
                          詳細なマニュアルと FAQ
                        </p>
                      </div>
                      <div>
                        <i className="fas fa-users text-2xl text-green-500 mb-2"></i>
                        <h4 className="font-bold">コミュニティ</h4>
                        <p className="text-sm text-gray-600">
                          ユーザー同士の情報交換
                        </p>
                      </div>
                      <div>
                        <i className="fas fa-headset text-2xl text-purple-500 mb-2"></i>
                        <h4 className="font-bold">技術サポート</h4>
                        <p className="text-sm text-gray-600">
                          24時間対応のヘルプデスク
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="text-center py-12">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-4">
                    <i className="fas fa-rocket mr-3"></i>
                    Claude Code AI開発チーム
                  </h2>
                  <h3 className="text-2xl font-bold mb-6">
                    あなたの開発を次のレベルへ
                  </h3>
                  <p className="text-xl mb-6 opacity-90">
                    最新のAI技術で、開発効率を10倍向上させ、
                    <br />
                    一貫した高品質なコードを生成しましょう。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                      <i className="fas fa-play mr-2"></i>
                      今すぐ始める
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
                      <i className="fas fa-info-circle mr-2"></i>
                      詳細を見る
                    </button>
                  </div>
                </div>
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
                  kinopee Cursor
                  Rulesの導入で、あなたの開発効率は飛躍的に向上します。
                  <br />
                  チーム全体で一貫した高品質なコードを生成しましょう。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() =>
                      document
                        .getElementById("kinopee-rules")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
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
  );
}
