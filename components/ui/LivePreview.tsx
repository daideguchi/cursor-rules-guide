'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Eye, Copy, Check } from 'lucide-react'
import { Button } from './Button'
import { CodeSnippet } from './CodeSnippet'

interface PreviewFile {
  name: string
  content: string
  language: string
}

interface LivePreviewProps {
  files: PreviewFile[]
}

export function LivePreview({ files }: LivePreviewProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [copiedFile, setCopiedFile] = useState('')

  const copyContent = (content: string, fileName: string) => {
    navigator.clipboard.writeText(content)
    setCopiedFile(fileName)
    setTimeout(() => setCopiedFile(''), 2000)
  }

  if (!files.length) {
    return (
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
        <Eye className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        <p className="text-gray-500 dark:text-gray-400">プロジェクト名を入力すると、生成されるファイルをプレビューできます</p>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold flex items-center">
            <Eye className="w-5 h-5 mr-2" />
            ライブプレビュー
          </h4>
          <div className="text-sm text-gray-500">
            {files.length}ファイル生成
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex overflow-x-auto">
          {files.map((file, index) => (
            <button
              key={file.name}
              onClick={() => setActiveTab(index)}
              className={`flex items-center px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === index
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <FileText className="w-4 h-4 mr-2" />
              {file.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <div>
              <h5 className="font-bold text-gray-900 dark:text-gray-100">
                {files[activeTab]?.name}
              </h5>
              <p className="text-sm text-gray-500">
                {files[activeTab]?.content.split('\n').length} 行
              </p>
            </div>
            <Button
              onClick={() => copyContent(files[activeTab]?.content || '', files[activeTab]?.name || '')}
              variant="outline"
              size="sm"
            >
              {copiedFile === files[activeTab]?.name ? 
                <Check className="w-4 h-4 mr-2" /> : 
                <Copy className="w-4 h-4 mr-2" />
              }
              コピー
            </Button>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden">
            <CodeSnippet
              code={files[activeTab]?.content || ''}
              language={files[activeTab]?.language || 'text'}
              showCopyButton={false}
            />
          </div>
        </motion.div>
      </div>

      {/* File Structure Visualization */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900">
        <h6 className="font-bold text-sm mb-2 text-gray-700 dark:text-gray-300">📁 生成されるファイル構造</h6>
        <div className="font-mono text-xs text-gray-600 dark:text-gray-400">
          <div>your-project/</div>
          {files.map((file, index) => (
            <div key={index} className="ml-2">
              {index === files.length - 1 ? '└── ' : '├── '}
              {file.name.includes('/') ? (
                <>
                  {file.name.split('/').slice(0, -1).join('/')}/
                  <br />
                  <span className="ml-4">
                    └── {file.name.split('/').slice(-1)[0]}
                  </span>
                </>
              ) : (
                file.name
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 