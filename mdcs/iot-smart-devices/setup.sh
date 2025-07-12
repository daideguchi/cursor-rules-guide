#\!/bin/bash
set -e

echo "🔌 IoT・スマートデバイス 向けCursor Rules自動セットアップを開始します..."

# .cursor/rulesディレクトリの作成
mkdir -p .cursor/rules

# スクリプトの場所を取得
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
RULES_SOURCE_DIR="${SCRIPT_DIR}/.cursor/rules"

# ルールファイルをコピー
if [[ -d "${RULES_SOURCE_DIR}" ]]; then
    cp -r "${RULES_SOURCE_DIR}"/* .cursor/rules/
    echo "✅ Cursor Rulesを適用しました"
else
    echo "❌ ルールファイルが見つかりません"
    exit 1
fi

echo ""
echo "🎉 IoT・スマートデバイス 向けCursor Rulesセットアップが完了しました！"
echo "🤖 Cursorを開いてAIがルールを読み込むことを確認してください"
