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

## ⚡ ワンコマンド自動セットアップ

このガイドの最大の特徴は、**ワンコマンドで Cursor Rules を自動設定できる**ことです。

### 🎯 何ができるの？

たった **1 つのコマンドをコピー&ペースト** するだけで、以下の 6 つの厳選されたルールファイルが自動で設定されます：

- 📝 **dev-rules.mdc** - 開発・コーディングの基本ルール
- 🎨 **uiux.mdc** - UI/UX デザインと実装ガイドライン
- 🚀 **performance.mdc** - パフォーマンス最適化ルール
- 🔒 **security.mdc** - セキュリティベストプラクティス
- 🧪 **testing.mdc** - テスト設計と実装ガイド
- 📋 **project-management.mdc** - プロジェクト管理と品質保証

### 💡 使い方

1. **Cursor を開く** - 任意のプロジェクトフォルダで
2. **コマンドを実行** - ガイド内のワンコマンドをコピー&ペースト
3. **完了！** - `.cursor/rules/` フォルダに全ルールファイルが自動作成されます

### 🎉 こんな人におすすめ

- 「Cursor は使ってるけど、もっと効率的に使いたい」
- 「AI に的確な指示を出せるようになりたい」
- 「チームでコーディング規約を統一したい」
- 「品質の高いコードを効率的に書きたい」

### 📋 .mdc ファイルって何？

`.mdc`ファイルは**AI への取扱説明書**のようなものです。一度設定すれば、Cursor が：

- プロジェクトのルールを理解して適切なコードを提案
- 一貫したコーディングスタイルを維持
- セキュリティやパフォーマンスを考慮した実装を自動提案
- あなたの専属アシスタントとして動作

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

## 🌐 ライブデモ

**✨ [オンラインガイドを見る](https://cursor-rules-guide-32ghmuve5-daideguchis-projects.vercel.app/)**

- インタラクティブな学習体験
- リアルタイムコード例
- レスポンシブデザイン対応
- 全機能をブラウザで体験

## 🔥 クイックスタート（ワンコマンド）

### すぐに試したい方向け

```bash
# Cursor Rules を一瞬で設定
mkdir -p .cursor/rules && curl -s https://raw.githubusercontent.com/daideguchi/cursor-rules-templates/main/setup.sh | bash
```

### 手動で設定したい方向け

```bash
# ディレクトリ作成
mkdir -p .cursor/rules

# 各ルールファイルをダウンロード
curl -o .cursor/rules/dev-rules.mdc "https://raw.githubusercontent.com/daideguchi/cursor-rules-templates/main/dev-rules.mdc"
curl -o .cursor/rules/uiux.mdc "https://raw.githubusercontent.com/daideguchi/cursor-rules-templates/main/uiux.mdc"
curl -o .cursor/rules/performance.mdc "https://raw.githubusercontent.com/daideguchi/cursor-rules-templates/main/performance.mdc"
curl -o .cursor/rules/security.mdc "https://raw.githubusercontent.com/daideguchi/cursor-rules-templates/main/security.mdc"
curl -o .cursor/rules/testing.mdc "https://raw.githubusercontent.com/daideguchi/cursor-rules-templates/main/testing.mdc"
curl -o .cursor/rules/project-management.mdc "https://raw.githubusercontent.com/daideguchi/cursor-rules-templates/main/project-management.mdc"
```

**🎊 完了！** これで Cursor がプロレベルの AI アシスタントに変身します。

### 📖 詳しい使い方を知りたい方

**👉 [完全ガイドサイトを見る](https://cursor-rules-guide-32ghmuve5-daideguchis-projects.vercel.app/)**

- 段階的な学習パス（レベル 1〜5）
- プロジェクトタイプ別の活用法
- AI 組織運用（Claude Code Company）
- 実際の成功事例とベストプラクティス

### 📚 詳細練習問題・解説資料

**👉 [Cursor Rules 練習問題集 (PDF)](/Users/dd/Desktop/1_dev/cursor_rule/fainal_asagami_ai_x_cursor_rules_lian_xi_ti_an (1).pdf)**

- 実践的な練習問題とその解答
- Cursor Rules の応用例
- 朝上AI×Cursor Rules 連携解説
- 段階的学習のためのワークシート

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
