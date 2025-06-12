# プロジェクト構造

## フォルダ・ファイル構成
```
my-project/
├── .cursor/
│   └── rules/
│       └── global.mdc          # メインAI開発ルール
├── technologystack.md          # 技術スタック定義
├── directorystructure.md       # このファイル
├── app/                        # Next.js App Router
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/                 # 再利用可能コンポーネント
├── lib/                        # ユーティリティ・設定
├── public/                     # 静的ファイル
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## ディレクトリ設計方針
### コンポーネント設計
- 単一責任の原則に従う
- 再利用性を重視した構造
- propsの型定義を明確にする

### ファイル命名規則
- PascalCase: Reactコンポーネント
- camelCase: 関数・変数
- kebab-case: ファイル名（コンポーネント以外）

### 依存関係管理
- 循環依存を避ける
- 明確なレイヤー分離
- 共通ロジックの適切な抽象化
