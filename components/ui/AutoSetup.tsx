'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Zap, ArrowRight, Play, Download, AlertCircle, CheckCircle } from 'lucide-react'
import { Button } from './Button'

export function AutoSetup() {
  const [copiedCommand, setCopiedCommand] = useState('')
  const [currentStep, setCurrentStep] = useState(1)

  const generateRealOneLineCommand = () => {
    // 実際のGitHubリポジトリを使用
    const githubBaseUrl = 'https://raw.githubusercontent.com/daideguchi/cursor-rules-templates/main/rules'
    return `mkdir -p .cursor/rules/dev-rules && curl -fsSL "${githubBaseUrl}/uiux.mdc" -o ".cursor/rules/uiux.mdc" && curl -fsSL "${githubBaseUrl}/rules.mdc" -o ".cursor/rules/rules.mdc" && curl -fsSL "${githubBaseUrl}/todo.mdc" -o ".cursor/rules/todo.mdc" && curl -fsSL "${githubBaseUrl}/globals.mdc" -o ".cursor/rules/globals.mdc" && curl -fsSL "${githubBaseUrl}/dev-rules/testing-guidelines.mdc" -o ".cursor/rules/dev-rules/testing-guidelines.mdc" && curl -fsSL "${githubBaseUrl}/dev-rules/coding-standards.mdc" -o ".cursor/rules/dev-rules/coding-standards.mdc" && curl -fsSL "${githubBaseUrl}/dev-rules/git-workflow.mdc" -o ".cursor/rules/dev-rules/git-workflow.mdc" && echo "🎉 完全なCursor Rules環境を適用完了！"`
  }

  const oneLineCommand = generateRealOneLineCommand()

  const copyCommand = (command: string) => {
    navigator.clipboard.writeText(command)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(''), 2000)
  }

  const steps = [
    {
      number: 1,
      title: 'コマンドをコピー',
      description: '下のボタンでコマンドをコピーします',
      icon: Copy,
      color: 'blue'
    },
    {
      number: 2,
      title: 'ターミナルで実行',
      description: 'プロジェクトのルートディレクトリで実行',
      icon: Play,
      color: 'green'
    },
    {
      number: 3,
      title: 'Cursor再起動',
      description: 'エディタを再起動してルールを適用',
      icon: CheckCircle,
      color: 'purple'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* メインヘッダー */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6"
        >
          <Zap className="w-8 h-8 text-white" />
        </motion.div>
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          3ステップで完了！
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          プロ仕様のCursor AI環境を<span className="font-bold text-blue-600">たった1つのコマンド</span>で構築できます
        </p>
      </div>

      {/* ステップガイド */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isActive = currentStep === step.number
          const isCompleted = currentStep > step.number
          
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 rounded-xl border-2 transition-all ${
                isActive 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                  : isCompleted
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isActive 
                    ? 'bg-blue-500 text-white' 
                    : isCompleted
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                </div>
                <span className={`ml-3 text-sm font-medium ${
                  isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-500'
                }`}>
                  ステップ {step.number}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* メインアクション */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
            <span className="text-gray-400 text-sm font-mono">ターミナル</span>
          </div>
          <Button
            onClick={() => {
              copyCommand(oneLineCommand)
              setCurrentStep(2)
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white"
            size="sm"
          >
            {copiedCommand === oneLineCommand ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                コピー完了！
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                コマンドをコピー
              </>
            )}
          </Button>
        </div>
        
        <div className="bg-black rounded-lg p-4 overflow-x-auto">
          <code className="text-green-400 text-sm font-mono whitespace-pre-wrap break-all">
            {oneLineCommand}
          </code>
        </div>
        
        {copiedCommand === oneLineCommand && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 bg-green-900/20 border border-green-500 rounded-lg"
          >
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">コマンドをコピーしました！</span>
            </div>
            <p className="text-green-300 text-sm mt-1">
              プロジェクトのルートディレクトリでターミナルを開き、このコマンドを実行してください
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* 効果の説明 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center justify-center">
          <Zap className="w-7 h-7 mr-3 text-yellow-500" />
          このコマンドで何が起こるか
        </h3>
        
        {/* ビフォーアフター */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-700">
            <h4 className="font-bold text-red-700 dark:text-red-400 mb-4 flex items-center">
              <span className="text-2xl mr-2">😵‍💫</span>
              実行前（今の状態）
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">❌</span>
                <span className="text-gray-600 dark:text-gray-400">AIが「どうやって作ればいいですか？」</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">❌</span>
                <span className="text-gray-600 dark:text-gray-400">プロジェクトのルールを理解していない</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">❌</span>
                <span className="text-gray-600 dark:text-gray-400">毎回同じ説明を繰り返す必要がある</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">❌</span>
                <span className="text-gray-600 dark:text-gray-400">チームメンバーごとに違うコードスタイル</span>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-700 dark:text-green-400 mb-4 flex items-center">
              <span className="text-2xl mr-2">🎉</span>
              実行後（理想の状態）
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✅</span>
                <span className="text-gray-600 dark:text-gray-400">AIが「プロジェクト仕様通りに作ります！」</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✅</span>
                <span className="text-gray-600 dark:text-gray-400">技術スタックとルールを完全理解</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✅</span>
                <span className="text-gray-600 dark:text-gray-400">一度設定すれば永続的に効果継続</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✅</span>
                <span className="text-gray-600 dark:text-gray-400">チーム全体で統一されたコード品質</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* 作成されるファイル */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="text-2xl mr-3">📁</span>
            作成される7つの専門ファイル
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { 
                file: '.cursor/rules/uiux.mdc', 
                desc: 'UI/UX設計ルール',
                icon: '🎨',
                detail: 'デザインシステム、レスポンシブ対応'
              },
              { 
                file: '.cursor/rules/rules.mdc', 
                desc: '基本開発ルール',
                icon: '⚙️',
                detail: 'TypeScript、React、Next.js設定'
              },
              { 
                file: '.cursor/rules/todo.mdc', 
                desc: 'タスク管理ルール',
                icon: '📋',
                detail: 'プロジェクト進捗管理、優先度設定'
              },
              { 
                file: '.cursor/rules/globals.mdc', 
                desc: 'グローバル設定',
                icon: '🌍',
                detail: '全体的なプロジェクト方針'
              },
              { 
                file: 'dev-rules/testing-guidelines.mdc', 
                desc: 'テストガイドライン',
                icon: '🧪',
                detail: 'ユニットテスト、統合テスト'
              },
              { 
                file: 'dev-rules/coding-standards.mdc', 
                desc: 'コーディング規約',
                icon: '📝',
                detail: '命名規則、フォーマット、品質基準'
              },
              { 
                file: 'dev-rules/git-workflow.mdc', 
                desc: 'Git運用ルール',
                icon: '🔀',
                detail: 'ブランチ戦略、コミット規約'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-start">
                  <span className="text-2xl mr-3 mt-1">{item.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white mb-1">
                      {item.desc}
                    </div>
                    <code className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded block mb-2">
                      {item.file}
                    </code>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* 得られる効果 */}
        <div>
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="text-2xl mr-3">🚀</span>
            即座に得られる6つの効果
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: 'AIがプロジェクト構造を深く理解',
                desc: '「ボタン作って」→あなたのプロジェクト仕様通りのコンポーネントが完成',
                icon: '🧠'
              },
              {
                title: 'コード生成の精度が大幅向上',
                desc: '技術スタック、命名規則、フォルダ構成を完全に把握した提案',
                icon: '🎯'
              },
              {
                title: 'チーム全体で一貫したコーディング',
                desc: '誰が使っても同じ品質・同じスタイルのコードが自動生成',
                icon: '👥'
              },
              {
                title: 'UI変更の承認フローを自動化',
                desc: '「デザインを勝手に変更しないで」などの制約を自動遵守',
                icon: '🔒'
              },
              {
                title: 'テストとGit運用の最適化',
                desc: 'プロジェクトのテスト方針とGitフローに沿った開発支援',
                icon: '⚡'
              },
              {
                title: 'プロジェクト固有の最適な提案',
                desc: '汎用的でなく、あなたのプロジェクトに特化したアドバイス',
                icon: '✨'
              }
            ].map((effect, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700"
              >
                <div className="flex items-start">
                  <span className="text-2xl mr-3 mt-1">{effect.icon}</span>
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-white mb-2">
                      {effect.title}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {effect.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* 実行イメージ */}
        <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-xl border border-green-200 dark:border-green-700">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            つまり、こういうこと
          </h4>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 text-3xl mb-4">
              <span>🤖</span>
              <span className="text-xl">+</span>
              <span>📚</span>
              <span className="text-xl">=</span>
              <span>✨</span>
            </div>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              <strong>AI</strong> + <strong>あなたのプロジェクトルール</strong> = <strong>専属の開発パートナー</strong>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              まるで長年一緒に働いている同僚のように、あなたの好みとルールを完璧に理解してくれます
            </p>
          </div>
        </div>
      </motion.div>

      {/* 注意事項 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg"
      >
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">
              重要な注意事項
            </h4>
            <ul className="text-sm text-yellow-700 dark:text-yellow-400 space-y-1">
              <li>• プロジェクトのルートディレクトリで実行してください</li>
              <li>• 既存の.cursor/rulesディレクトリがある場合は上書きされます</li>
              <li>• コマンド実行後、Cursorエディタの再起動が必要です</li>
              <li>• インターネット接続が必要です（GitHubからファイルをダウンロード）</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 