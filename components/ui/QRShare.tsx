'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { 
  QrCode, 
  Share2, 
  Copy, 
  Check, 
  Download, 
  Link,
  Users,
  Smartphone
} from 'lucide-react'
import { Button } from './Button'

interface ProjectConfig {
  name: string
  type: string
  language: string
  framework: string
  description: string
}

interface QRShareProps {
  config: ProjectConfig
}

export function QRShare({ config }: QRShareProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [shareUrl, setShareUrl] = useState('')
  const [copied, setCopied] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const generateShareUrl = useCallback(async () => {
    setIsGenerating(true)
    try {
      const url = new URL(window.location.href)
      url.searchParams.set('config', JSON.stringify(config))
      setShareUrl(url.toString())
    } catch (error) {
      console.error('Error generating share URL:', error)
    } finally {
      setIsGenerating(false)
    }
  }, [config])

  useEffect(() => {
    generateShareUrl()
  }, [generateShareUrl])

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const downloadQRCode = async () => {
    try {
      const response = await fetch(qrCodeUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
              link.download = `custom-rules-setup-${config.name}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (err) {
      console.error('Failed to download QR code:', err)
    }
  }

  const shareViaWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
                  title: `カスタム Cursor Rules v5 Setup - ${config.name}`,
        text: `${config.name}のカスタムルール設定をセットアップ`,
          url: shareUrl,
        })
      } catch (err) {
        // ユーザーがキャンセルした場合など
        console.log('Share cancelled')
      }
    } else {
      // Web Share API非対応の場合はクリップボードにコピー
      copyToClipboard(shareUrl)
    }
  }

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">
          <Users className="w-8 h-8 inline-block mr-2" />
          チーム設定共有
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          プロジェクト設定をQRコードやURLでチームメンバーと簡単に共有
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* QR Code Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-700">
          <h4 className="font-bold mb-4 flex items-center justify-center">
            <QrCode className="w-5 h-5 mr-2" />
            QRコード
          </h4>
          
          <div className="mb-6">
            {isGenerating ? (
              <div className="w-48 h-48 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
              </div>
            ) : qrCodeUrl ? (
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                src={qrCodeUrl}
                alt="QR Code"
                className="w-48 h-48 mx-auto rounded-lg border border-gray-200 dark:border-gray-600"
              />
            ) : (
              <div className="w-48 h-48 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <QrCode className="w-12 h-12 text-gray-400" />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Button
              onClick={downloadQRCode}
              variant="outline"
              size="sm"
              className="w-full"
              disabled={!qrCodeUrl}
            >
              <Download className="w-4 h-4 mr-2" />
              QRコードをダウンロード
            </Button>
            <p className="text-xs text-gray-500">
              <Smartphone className="w-4 h-4 inline mr-1" />
              スマートフォンでスキャンして即座にセットアップ
            </p>
          </div>
        </div>

        {/* URL Share Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h4 className="font-bold mb-4 flex items-center">
            <Link className="w-5 h-5 mr-2" />
            共有URL
          </h4>

          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                共有リンク:
              </p>
              <div className="flex">
                <input
                  type="text"
                  value={shareUrl}
                  readOnly
                  className="flex-1 px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-l-lg focus:outline-none"
                />
                <Button
                  onClick={() => copyToClipboard(shareUrl)}
                  variant="outline"
                  size="sm"
                  className="rounded-l-none border-l-0"
                >
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Button
                onClick={shareViaWebShare}
                className="w-full"
                disabled={!shareUrl}
              >
                <Share2 className="w-4 h-4 mr-2" />
                設定を共有
              </Button>
              
              <div className="grid grid-cols-2 gap-2">
                <Button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`カスタム Cursor Rules v5 設定 - ${config.name}`)}&url=${encodeURIComponent(shareUrl)}`, '_blank')}
                  variant="outline"
                  size="sm"
                >
                  Twitter
                </Button>
                <Button
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}
                  variant="outline"
                  size="sm"
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Preview */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h4 className="font-bold mb-4">📋 共有される設定内容</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-600 dark:text-gray-400">プロジェクト名:</span>
            <span className="ml-2">{config.name}</span>
          </div>
          <div>
            <span className="font-medium text-gray-600 dark:text-gray-400">プロジェクト種別:</span>
            <span className="ml-2">{config.type}</span>
          </div>
          <div>
            <span className="font-medium text-gray-600 dark:text-gray-400">言語:</span>
            <span className="ml-2">{config.language}</span>
          </div>
          <div>
            <span className="font-medium text-gray-600 dark:text-gray-400">フレームワーク:</span>
            <span className="ml-2">{config.framework}</span>
          </div>
        </div>
        {config.description && (
          <div className="mt-3">
            <span className="font-medium text-gray-600 dark:text-gray-400">説明:</span>
            <p className="mt-1 text-sm">{config.description}</p>
          </div>
        )}
      </div>

      {/* Usage Instructions */}
      <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
        <h5 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
          📱 使用方法
        </h5>
        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <li>• QRコードをスマートフォンでスキャン</li>
          <li>• または共有URLをチームメンバーに送信</li>
          <li>• リンクを開くと自動的にセットアップページに移動</li>
                          <li>• ワンクリックでカスタムルール設定を適用可能</li>
        </ul>
      </div>
    </div>
  )
} 