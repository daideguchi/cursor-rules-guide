'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  RefreshCw, 
  FileText, 
  Settings,
  Upload,
  Download
} from 'lucide-react'
import { Button } from './Button'
import { CodeSnippet } from './CodeSnippet'

interface ValidationResult {
  id: string
  name: string
  description: string
  status: 'pass' | 'fail' | 'warning'
  details: string
  solution?: string
  required: boolean
}

interface ConfigValidatorProps {
  onFixIssue?: (issueId: string) => void
}

export function ConfigValidator({ onFixIssue }: ConfigValidatorProps) {
  const [isValidating, setIsValidating] = useState(false)
  const [validationResults, setValidationResults] = useState<ValidationResult[]>([])
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const runValidation = async () => {
    setIsValidating(true)
    
    // シミュレーション: 実際の検証ロジック
    await new Promise(resolve => setTimeout(resolve, 2000))

    const mockResults: ValidationResult[] = [
      {
        id: 'project-rules-dir',
        name: '.cursor/rules ディレクトリ',
        description: 'Project Rules用のディレクトリ構造',
        status: uploadedFiles.some(f => f.webkitRelativePath.includes('.cursor/rules')) ? 'pass' : 'fail',
        details: '.cursor/rules/global.mdc ファイルが存在するかチェック',
        solution: 'mkdir -p .cursor/rules && touch .cursor/rules/global.mdc',
        required: true
      },
      {
        id: 'global-rules-file',
        name: 'global.mdc ファイル',
        description: 'カスタムルール メインファイル',
        status: uploadedFiles.some(f => f.name === 'global.mdc') ? 'pass' : 'fail',
                  details: 'カスタムグローバルルールが設定されているかチェック',
          solution: 'カスタムルールのglobal.mdcをダウンロードして配置',
        required: true
      },
      {
        id: 'technology-stack',
        name: 'technologystack.md',
        description: '技術スタック定義ファイル',
        status: uploadedFiles.some(f => f.name.includes('technologystack')) ? 'pass' : 'warning',
        details: 'プロジェクトの技術スタックが明確に定義されているかチェック',
        solution: '技術スタックを定義したファイルを作成',
        required: false
      },
      {
        id: 'directory-structure',
        name: 'directorystructure.md',
        description: 'ディレクトリ構造定義ファイル',
        status: uploadedFiles.some(f => f.name.includes('directorystructure')) ? 'pass' : 'warning',
        details: 'プロジェクトのディレクトリ構造が文書化されているかチェック',
        solution: 'ディレクトリ構造を定義したファイルを作成',
        required: false
      },
      {
        id: 'old-cursorrules',
        name: '旧.cursorrulesファイル',
        description: '競合する旧設定ファイルの確認',
        status: uploadedFiles.some(f => f.name === '.cursorrules') ? 'warning' : 'pass',
        details: '旧式の.cursorrulesファイルがProject Rulesと競合していないかチェック',
        solution: '.cursorrulesファイルを削除または名前変更',
        required: false
      },
      {
        id: 'cursor-version',
        name: 'Cursor バージョン',
        description: 'Project Rules対応バージョンの確認',
        status: 'warning',
        details: 'Cursor 0.42.0以降でProject Rulesが利用可能',
        solution: 'Cursorを最新バージョンにアップデート',
        required: true
      }
    ]

    setValidationResults(mockResults)
    setIsValidating(false)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setUploadedFiles(files)
    
    // アップロード後に自動検証実行
    if (files.length > 0) {
      setTimeout(() => runValidation(), 500)
    }
  }

  const getStatusIcon = (status: ValidationResult['status']) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'fail':
        return <XCircle className="w-5 h-5 text-red-500" />
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
    }
  }

  const getStatusColor = (status: ValidationResult['status']) => {
    switch (status) {
      case 'pass':
        return 'border-green-200 bg-green-50 dark:border-green-700 dark:bg-green-900/20'
      case 'fail':
        return 'border-red-200 bg-red-50 dark:border-red-700 dark:bg-red-900/20'
      case 'warning':
        return 'border-yellow-200 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20'
    }
  }

  const passCount = validationResults.filter(r => r.status === 'pass').length
  const failCount = validationResults.filter(r => r.status === 'fail').length
  const warningCount = validationResults.filter(r => r.status === 'warning').length

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">
          <Settings className="w-8 h-8 inline-block mr-2" />
          Cursor AI設定チェックツール
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          現在のプロジェクトがCursor AIルールに適合しているかチェック
        </p>
      </div>

      {/* File Upload Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <h4 className="font-bold mb-4 flex items-center">
          <Upload className="w-5 h-5 mr-2" />
          プロジェクトファイルをアップロード
        </h4>
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            {...{ webkitdirectory: "true" } as any}
            multiple
            onChange={handleFileUpload}
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            <FileText className="w-12 h-12 mb-4 text-gray-400" />
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              プロジェクトフォルダをドラッグ&ドロップまたはクリックして選択
            </p>
            <p className="text-sm text-gray-500">
              .cursor/rules/ ディレクトリを含むプロジェクトを選択してください
            </p>
          </label>
        </div>
        
        {uploadedFiles.length > 0 && (
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">
              アップロードされたファイル: {uploadedFiles.length}個
            </p>
            <div className="max-h-32 overflow-y-auto">
              {uploadedFiles.slice(0, 10).map((file, index) => (
                <div key={index} className="text-xs text-blue-600 dark:text-blue-400">
                  {file.webkitRelativePath || file.name}
                </div>
              ))}
              {uploadedFiles.length > 10 && (
                <div className="text-xs text-blue-500">
                  ... 他 {uploadedFiles.length - 10} ファイル
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Validation Controls */}
      <div className="flex gap-4 mb-6">
        <Button
          onClick={runValidation}
          disabled={isValidating}
          className="flex-1"
        >
          {isValidating ? (
            <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
          ) : (
            <Settings className="w-5 h-5 mr-2" />
          )}
          {isValidating ? '検証中...' : '設定検証を実行'}
        </Button>
      </div>

      {/* Results Summary */}
      {validationResults.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 text-center">
            <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">
              {passCount}
            </div>
            <div className="text-sm text-green-600 dark:text-green-400">合格</div>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-4 text-center">
            <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
            <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">
              {warningCount}
            </div>
            <div className="text-sm text-yellow-600 dark:text-yellow-400">警告</div>
          </div>
          <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 text-center">
            <XCircle className="w-8 h-8 mx-auto mb-2 text-red-500" />
            <div className="text-2xl font-bold text-red-700 dark:text-red-300">
              {failCount}
            </div>
            <div className="text-sm text-red-600 dark:text-red-400">エラー</div>
          </div>
        </div>
      )}

      {/* Validation Results */}
      {validationResults.length > 0 && (
        <div className="space-y-4">
          <h4 className="font-bold text-lg">検証結果</h4>
          {validationResults.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-lg p-4 ${getStatusColor(result.status)}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {getStatusIcon(result.status)}
                    <h5 className="font-bold ml-2">{result.name}</h5>
                    {result.required && (
                      <span className="ml-2 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs rounded-full">
                        必須
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {result.description}
                  </p>
                  <p className="text-sm font-medium mb-2">{result.details}</p>
                  {result.solution && result.status !== 'pass' && (
                    <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <p className="text-sm font-medium mb-2">💡 解決方法:</p>
                      <CodeSnippet
                        code={result.solution}
                        language="bash"
                        showCopyButton={true}
                      />
                    </div>
                  )}
                </div>
                {result.status !== 'pass' && onFixIssue && (
                  <Button
                    onClick={() => onFixIssue(result.id)}
                    variant="outline"
                    size="sm"
                    className="ml-4"
                  >
                    修正
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Quick Fix Actions */}
      {failCount > 0 && (
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h4 className="font-bold mb-4 text-red-700 dark:text-red-300">
            🚨 重要な問題が見つかりました
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            以下のワンクリック修正を実行すると、大部分の問題を自動的に解決できます。
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              カスタムルールファイルをダウンロード
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              自動セットアップを実行
            </Button>
          </div>
        </div>
      )}
    </div>
  )
} 