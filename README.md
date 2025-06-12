# Cursor Rules 完全マスターガイド

最高のユーザー体験を提供するインタラクティブな Cursor Rules ガイドです。

## ✨ 特徴

- 📱 **レスポンシブデザイン**: モバイルからデスクトップまで完璧に対応
- 🎯 **インタラクティブな目次**: スムーススクロールと進捗トラッキング
- 🌓 **ダークモード対応**: システム設定に応じた自動切り替え
- ⚡ **高速パフォーマンス**: Next.js 14 と React 18 による最適化
- 🎨 **美しいアニメーション**: Framer Motion による滑らかなトランジション
- 📊 **リアルタイム進捗バー**: 読み進み度を視覚的に表示
- 💾 **100+テンプレート**: ワンクリックでコピーできるルール集
- 🔍 **高度な検索機能**: フィルタリングとハイライト機能

## 🚀 セットアップ

### 前提条件

- Node.js 18 以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>
cd cursor-rules-guide

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

### ビルド

```bash
# プロダクション用ビルド
npm run build

# プロダクションサーバーを起動
npm start
```

## 🏗️ プロジェクト構成

```
cursor-rules-guide/
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # メインページ
├── components/            # Reactコンポーネント
│   ├── layout/           # レイアウトコンポーネント
│   │   ├── Header.tsx    # ヘッダー・ナビゲーション
│   │   └── TableOfContents.tsx # 目次
│   ├── providers/        # コンテキストプロバイダー
│   │   ├── ThemeProvider.tsx
│   │   ├── ToastProvider.tsx
│   │   └── ProgressBarProvider.tsx
│   └── ui/              # UIコンポーネント
│       └── Button.tsx
├── public/              # 静的ファイル
├── tailwind.config.js   # Tailwind CSS設定
├── tsconfig.json        # TypeScript設定
└── package.json         # 依存関係
```

## 🎨 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **状態管理**: React Hooks
- **通知**: React Hot Toast
- **ビューポート検出**: React Intersection Observer

## 🔧 カスタマイズ

### テーマカラーの変更

`tailwind.config.js`のカラーパレットを編集してください：

```javascript
colors: {
  primary: {
    // お好みの色に変更
    500: '#3b82f6',
    600: '#2563eb',
    // ...
  },
}
```

### アニメーション設定

`app/globals.css`でカスタムアニメーションを追加・編集できます。

### コンテンツの更新

メインコンテンツは`app/page.tsx`で管理されています。セクションを追加・編集する場合は、対応するコンポーネントも更新してください。

## 📱 レスポンシブ対応

- **デスクトップ**: 1024px 以上 - フル機能表示
- **タブレット**: 768px - 1023px - 適応的レイアウト
- **モバイル**: 767px 以下 - モバイル最適化

## 🌐 ブラウザサポート

- Chrome (最新 2 バージョン)
- Firefox (最新 2 バージョン)
- Safari (最新 2 バージョン)
- Edge (最新 2 バージョン)

## 🤝 コントリビューション

1. フォークを作成
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. コミット (`git commit -m 'Add amazing feature'`)
4. プッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

## 🆘 サポート

問題が発生した場合は、GitHub の Issues で報告してください。

---

**Happy Coding! 🎉**
