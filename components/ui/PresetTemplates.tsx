'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Download, Star, Users, TrendingUp } from 'lucide-react'
import { Button } from './Button'

interface PresetTemplate {
  id: string
  name: string
  description: string
  icon: string
  popularity: number
  downloads: string
  config: {
    name: string
    type: string
    language: string
    framework: string
    description: string
  }
  features: string[]
  tags: string[]
}

const presetTemplates: PresetTemplate[] = [
  {
    id: 'nextjs-app',
    name: 'Next.js 14 App Router',
    description: 'TypeScript + Tailwind CSS + App Router完全対応',
    icon: '⚛️',
    popularity: 95,
    downloads: '12.3k',
    config: {
      name: 'nextjs-project',
      type: 'web',
      language: 'typescript',
      framework: 'nextjs',
      description: 'Next.js 14 App RouterとTailwind CSSを使用したモダンWebアプリケーション'
    },
    features: [
      'App Router最適化',
      'TypeScript完全対応',
      'Tailwind CSS統合',
      'SSR/SSG対応',
      'API Routes',
      'Server Components'
    ],
    tags: ['React', 'TypeScript', 'SSR', 'Popular']
  },
  {
    id: 'react-vite',
    name: 'React + Vite',
    description: '高速開発環境でのReactアプリケーション',
    icon: '🚀',
    popularity: 88,
    downloads: '8.7k',
    config: {
      name: 'react-vite-app',
      type: 'web',
      language: 'typescript',
      framework: 'react',
      description: 'ViteとTypeScriptを使用した高速React開発環境'
    },
    features: [
      'Vite高速ビルド',
      'Hot Module Replacement',
      'TypeScript対応',
      'ESLint + Prettier',
      'Testing Library',
      'PWA対応'
    ],
    tags: ['React', 'Vite', 'Fast', 'Modern']
  },
  {
    id: 'fastapi-python',
    name: 'FastAPI Backend',
    description: 'Python AsyncWebAPIの構築',
    icon: '🐍',
    popularity: 82,
    downloads: '6.1k',
    config: {
      name: 'fastapi-backend',
      type: 'api',
      language: 'python',
      framework: 'fastapi',
      description: 'FastAPIを使用した高性能AsyncWebAPI'
    },
    features: [
      'Async/Await対応',
      'OpenAPI自動生成',
      'Pydantic validation',
      'SQLAlchemy ORM',
      'JWT認証',
      'Docker対応'
    ],
    tags: ['Python', 'API', 'Async', 'Backend']
  },
  {
    id: 'svelte-kit',
    name: 'SvelteKit',
    description: 'Svelteを使用したフルスタックアプリ',
    icon: '🧡',
    popularity: 76,
    downloads: '4.2k',
    config: {
      name: 'sveltekit-app',
      type: 'web',
      language: 'typescript',
      framework: 'svelte',
      description: 'SvelteKitによる高性能フルスタックアプリケーション'
    },
    features: [
      'Svelte 5対応',
      'File-based routing',
      'SSR/SPA/Hybrid',
      'TypeScript統合',
      'Vite powered',
      'Progressive Enhancement'
    ],
    tags: ['Svelte', 'TypeScript', 'Modern', 'Performance']
  },
  {
    id: 'rust-axum',
    name: 'Rust + Axum',
    description: 'Rustで構築する高性能Web API',
    icon: '🦀',
    popularity: 71,
    downloads: '2.8k',
    config: {
      name: 'rust-axum-api',
      type: 'api',
      language: 'rust',
      framework: 'axum',
      description: 'AxumとTokioを使用したRust製高性能WebAPI'
    },
    features: [
      'Async/Await対応',
      'Type-safe routing',
      'Serde JSON',
      'SQLx database',
      'トレーシング対応',
      'Zero-cost abstractions'
    ],
    tags: ['Rust', 'Performance', 'Type-safe', 'Modern']
  },
  {
    id: 'vue-nuxt',
    name: 'Nuxt 3',
    description: 'Vue.jsフルスタックフレームワーク',
    icon: '💚',
    popularity: 84,
    downloads: '7.5k',
    config: {
      name: 'nuxt3-app',
      type: 'web',
      language: 'typescript',
      framework: 'vue',
      description: 'Nuxt 3による Vue.js フルスタックアプリケーション'
    },
    features: [
      'Vue 3 Composition API',
      'Auto-imports',
      'File-based routing',
      'SSR/SPA/SSG',
      'Nitro Engine',
      'TypeScript ネイティブ'
    ],
    tags: ['Vue', 'TypeScript', 'SSR', 'Fullstack']
  }
]

interface PresetTemplatesProps {
  onSelectPreset: (preset: PresetTemplate) => void
}

export function PresetTemplates({ onSelectPreset }: PresetTemplatesProps) {
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null)

  const handleSelectPreset = (preset: PresetTemplate) => {
    setSelectedPreset(preset.id)
    onSelectPreset(preset)
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">
          <Star className="w-8 h-8 inline-block mr-2" />
          人気フレームワークテンプレート
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          よく使われる開発環境の設定をワンクリックで適用
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {presetTemplates.map((preset, index) => (
          <motion.div
            key={preset.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 ${
              selectedPreset === preset.id 
                ? 'border-purple-500 ring-2 ring-purple-500/20' 
                : 'border-transparent hover:border-purple-200 dark:hover:border-purple-700'
            }`}
            onClick={() => handleSelectPreset(preset)}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-3xl mb-2">{preset.icon}</div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                  {preset.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {preset.description}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center text-xs text-gray-500 mb-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {preset.popularity}%
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Download className="w-3 h-3 mr-1" />
                  {preset.downloads}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {preset.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Features */}
            <div className="mb-4">
              <h5 className="font-semibold text-sm mb-2">主な機能</h5>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                {preset.features.slice(0, 3).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
                {preset.features.length > 3 && (
                  <li className="text-purple-600 dark:text-purple-400">
                    +{preset.features.length - 3}個の機能...
                  </li>
                )}
              </ul>
            </div>

            {/* Action Button */}
            <Button
              variant={selectedPreset === preset.id ? "primary" : "outline"}
              size="sm"
              className="w-full"
              onClick={(e) => {
                e.stopPropagation()
                handleSelectPreset(preset)
              }}
            >
              <Zap className="w-4 h-4 mr-2" />
              {selectedPreset === preset.id ? '選択済み' : 'このテンプレートを使用'}
            </Button>
          </motion.div>
        ))}
      </div>

      {selectedPreset && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 border border-purple-200 dark:border-purple-700"
        >
          <h4 className="font-bold mb-2 text-purple-800 dark:text-purple-300">
            ✅ 選択済み: {presetTemplates.find(p => p.id === selectedPreset)?.name}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            このテンプレートの設定が自動的に適用されました。カスタムセットアップセクションで詳細を確認・編集できます。
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-3">
            <div className="flex items-center text-green-700 dark:text-green-300">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">
                プロジェクト設定が自動更新されました！
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
} 