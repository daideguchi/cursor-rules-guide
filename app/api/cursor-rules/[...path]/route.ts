import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const filePath = params.path.join('/')
    const fullPath = path.join(process.cwd(), '.cursor', 'rules', filePath)
    
    // セキュリティチェック: .cursor/rules ディレクトリ外へのアクセスを防ぐ
    const cursorRulesDir = path.join(process.cwd(), '.cursor', 'rules')
    if (!fullPath.startsWith(cursorRulesDir)) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 })
    }
    
    // ファイルが存在するかチェック
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }
    
    // ファイルの内容を読み取り
    const fileContent = fs.readFileSync(fullPath, 'utf-8')
    
    return new NextResponse(fileContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  } catch (error) {
    console.error('Error serving cursor rules file:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 