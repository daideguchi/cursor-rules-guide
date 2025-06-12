import { NextResponse } from 'next/server'
import { readFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'
import JSZip from 'jszip'

export async function GET() {
  try {
    const cursorDir = join(process.cwd(), '.cursor', 'rules')
    
    // セキュリティチェック
    if (!cursorDir.includes(process.cwd())) {
      return NextResponse.json({ error: 'Security violation' }, { status: 403 })
    }
    
    const zip = new JSZip()
    const cursorFolder = zip.folder('.cursor')!
    const rulesFolder = cursorFolder.folder('rules')!
    
    // ファイル構造を再帰的に作成
    const addFilesToZip = (dirPath: string, zipFolder: JSZip) => {
      try {
        const items = readdirSync(dirPath)
        for (const item of items) {
          const fullPath = join(dirPath, item)
          const stat = statSync(fullPath)
          
          if (stat.isDirectory()) {
            const subFolder = zipFolder.folder(item)!
            addFilesToZip(fullPath, subFolder)
          } else if (item.endsWith('.mdc')) {
            const content = readFileSync(fullPath, 'utf8')
            zipFolder.file(item, content)
          }
        }
      } catch (err) {
        console.error('Error reading directory:', dirPath, err)
      }
    }
    
    addFilesToZip(cursorDir, rulesFolder)
    
    const zipBuffer = await zip.generateAsync({ 
      type: 'uint8array',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 }
    })
    
    return new NextResponse(zipBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="cursor-rules.zip"',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  } catch (error) {
    console.error('Error creating zip archive:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 