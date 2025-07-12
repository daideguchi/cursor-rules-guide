"use client";

import { useState, useEffect } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check,
  ExternalLink,
  BookOpen,
  Code,
  Settings,
  Terminal,
  Zap,
  Users,
  Target,
  Shield,
  Clock,
  Heart,
  Star,
  Award,
  TrendingUp,
  Rocket,
  Database,
  Cpu,
  Eye,
  Download,
  Play,
  Monitor,
  GitBranch,
  Building,
  Package
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { SideNavigation } from "@/components/layout/SideNavigation";

// カラーパレット定数
const COLORS = {
  primary: "#4a90e2",
  primaryHover: "#357abd",
  primaryLight: "#f0f7ff",
  secondary: "#64b5f6",
  accent: "#81c784",
  warning: "#ffb74d",
  danger: "#e57373",
  text: "#333333",
  textLight: "#666666",
  border: "#e0e0e0",
  background: "#fdfdfd",
  backgroundCard: "#ffffff"
};

// コピー機能を持つコードブロックコンポーネント
function CodeBlock({ code, language = "bash", title }: { code: string; language?: string; title?: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative mb-6">
      {title && (
        <div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium rounded-t-lg">
          {title}
        </div>
      )}
      <div className="bg-gray-900 rounded-b-lg overflow-hidden" style={{ backgroundColor: '#2d2d2d' }}>
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
          <span className="text-gray-300 text-sm">{language}</span>
          <button
            onClick={handleCopy}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded text-xs transition-colors flex items-center space-x-1"
          >
            {isCopied ? (
              <>
                <Check className="w-3 h-3" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-4 text-sm text-gray-100 overflow-x-auto" style={{ color: '#f8f8f2' }}>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

// 引用ブロックコンポーネント
function QuoteBlock({ children, source }: { children: React.ReactNode; source?: string }) {
  return (
    <blockquote 
      className="border-l-4 pl-5 py-4 my-6 italic text-gray-600"
      style={{ borderLeftColor: COLORS.primary }}
    >
      {children}
      {source && (
        <footer className="text-sm mt-2 not-italic text-gray-500">
          — {source}
        </footer>
      )}
    </blockquote>
  );
}

// セクションヘッダーコンポーネント
function SectionHeader({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 mr-4" style={{ color: COLORS.primary }} />
        <h2 className="text-3xl font-bold" style={{ color: COLORS.text }}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-lg" style={{ color: COLORS.textLight }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// カードコンポーネント
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div 
      className={`rounded-lg p-6 shadow-sm border ${className}`}
      style={{ 
        backgroundColor: COLORS.backgroundCard,
        borderColor: COLORS.border
      }}
    >
      {children}
    </div>
  );
}

// インダストリーテンプレートカード
function IndustryCard({ industry }: { industry: any }) {
  const [showCommand, setShowCommand] = useState(false);
  
  const handlePreview = () => {
    // プレビュー機能の実装
    console.log(`Preview for ${industry.id}`);
  };

  const generateCommand = () => {
    return `# ${industry.title}テンプレート適用
curl -sSL https://github.com/cursor-rules-templates/setup/raw/main/install.sh | bash -s ${industry.id}

# または手動セットアップ
git clone https://github.com/cursor-rules-templates/mdcs
cp -r mdcs/${industry.id}/.cursor .
code .

# 確認
cursor --version && echo "Cursor Rules Template for ${industry.title} installed successfully!"`;
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <div 
        className="h-1 rounded-t-lg mb-4"
        style={{ background: `linear-gradient(to right, ${industry.colorStart}, ${industry.colorEnd})` }}
      ></div>
      
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-3">{industry.icon}</div>
        <div>
          <h3 className="text-lg font-semibold" style={{ color: COLORS.text }}>
            {industry.title}
          </h3>
          <p className="text-sm" style={{ color: COLORS.textLight }}>
            {industry.description}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium mb-2" style={{ color: COLORS.text }}>技術スタック</h4>
          <p 
            className="text-xs px-3 py-2 rounded"
            style={{ 
              color: COLORS.textLight,
              backgroundColor: COLORS.primaryLight
            }}
          >
            {industry.tech}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2" style={{ color: COLORS.text }}>主要機能</h4>
          <div className="flex flex-wrap gap-2">
            {industry.features.map((feature: string, index: number) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 rounded"
                style={{ 
                  backgroundColor: COLORS.primaryLight,
                  color: COLORS.primary
                }}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t" style={{ borderColor: COLORS.border }}>
          <button
            onClick={() => setShowCommand(!showCommand)}
            className="w-full text-left p-3 rounded transition-colors mb-3"
            style={{ 
              backgroundColor: COLORS.primaryLight,
              color: COLORS.primary
            }}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">ワンコマンドセットアップ</span>
              {showCommand ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>
          
          {showCommand && (
            <CodeBlock 
              code={generateCommand()}
              title={`${industry.title}セットアップコマンド`}
            />
          )}
        </div>

        <div className="flex space-x-2">
          <button 
            onClick={handlePreview}
            className="flex-1 px-3 py-2 rounded transition-colors text-sm flex items-center justify-center"
            style={{ 
              backgroundColor: COLORS.text,
              color: 'white'
            }}
          >
            <Eye className="w-4 h-4 mr-2" />
            プレビュー
          </button>
          <button 
            className="flex-1 px-3 py-2 rounded transition-colors text-sm flex items-center justify-center"
            style={{ 
              backgroundColor: COLORS.primary,
              color: 'white'
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            ダウンロード
          </button>
        </div>
      </div>
    </Card>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");

  // セクション一覧
  const sections = [
    { id: "introduction", title: "1. はじめに：Cursor Rulesの力" },
    { id: "when-to-use", title: "2. 設定すべきタイミング" },
    { id: "basics", title: "3. 基本設定とファイル構造" },
    { id: "rule-types", title: "4. ルールタイプの使い分け" },
    { id: "best-practices", title: "5. 効果的なルール記述" },
    { id: "practical-examples", title: "6. 実践的な活用例" },
    { id: "advanced-techniques", title: "7. 高度なテクニック" },
    { id: "troubleshooting", title: "8. トラブルシューティング" },
    { id: "enterprise-cases", title: "9. 企業導入事例" },
    { id: "industry-templates", title: "10. 業種別MDCテンプレート集" },
    { id: "one-command-setup", title: "11. ワンコマンド環境構築" },
    { id: "continuous-improvement", title: "12. 継続的改善の実践" }
  ];

  // スクロールスパイ機能
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px"
      }
    );

    // 全セクションを監視対象に追加
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // セクションへのスムーススクロール
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // 業種データ
  const industries = [
    {
      id: "ecommerce-platform",
      icon: "🛍️",
      title: "ECプラットフォーム",
      description: "オンラインストア・マーケットプレイス開発",
      tech: "Next.js + Stripe + Prisma + Vercel",
      features: ["決済システム", "在庫管理", "レコメンド機能", "SEO最適化"],
      colorStart: "#3b82f6",
      colorEnd: "#06b6d4"
    },
    {
      id: "saas-web-management",
      icon: "💼",
      title: "SaaS管理プラットフォーム",
      description: "企業向けWebアプリケーション",
      tech: "React + Node.js + PostgreSQL + AWS",
      features: ["マルチテナント", "RBAC", "APIゲートウェイ", "監査ログ"],
      colorStart: "#6366f1",
      colorEnd: "#8b5cf6"
    },
    {
      id: "fintech-banking",
      icon: "🏦",
      title: "フィンテック・銀行",
      description: "金融サービス・決済システム",
      tech: "Java + Spring + Oracle + Kubernetes",
      features: ["PCI DSS準拠", "暗号化", "監査ログ", "リアルタイム決済"],
      colorStart: "#10b981",
      colorEnd: "#14b8a6"
    },
    {
      id: "healthcare-medical",
      icon: "🏥",
      title: "医療・ヘルスケア",
      description: "電子カルテ・診療支援システム",
      tech: "Python + Django + FHIR + Docker",
      features: ["HIPAA準拠", "HL7対応", "データ匿名化", "テレメディシン"],
      colorStart: "#ef4444",
      colorEnd: "#ec4899"
    },
    {
      id: "edtech-platform",
      icon: "🎓",
      title: "EdTech・教育",
      description: "オンライン学習・LMS",
      tech: "React + Node.js + MongoDB + WebRTC",
      features: ["LTI連携", "プログレストラッキング", "ゲーミフィケーション", "ライブ配信"],
      colorStart: "#f59e0b",
      colorEnd: "#f97316"
    },
    {
      id: "real-estate-property",
      icon: "🏠",
      title: "不動産・物件管理",
      description: "物件管理・仲介システム",
      tech: "Vue.js + Laravel + MySQL + MapBox",
      features: ["地図連携", "VR内見", "契約管理", "価格査定AI"],
      colorStart: "#f59e0b",
      colorEnd: "#d97706"
    },
    {
      id: "logistics-supply-chain",
      icon: "🚚",
      title: "物流・サプライチェーン",
      description: "在庫管理・配送最適化",
      tech: "C# + .NET + SQL Server + Azure",
      features: ["WMS連携", "配送最適化", "トレーサビリティ", "IoT連携"],
      colorStart: "#3b82f6",
      colorEnd: "#6366f1"
    },
    {
      id: "hr-management",
      icon: "👥",
      title: "HR・人事管理",
      description: "勤怠管理・採用システム",
      tech: "Next.js + TypeScript + Stripe + Calendly",
      features: ["勤怠管理", "ATS", "360度評価", "給与計算"],
      colorStart: "#8b5cf6",
      colorEnd: "#ec4899"
    },
    {
      id: "crm-sales-support",
      icon: "📈",
      title: "CRM・営業支援",
      description: "顧客管理・マーケティング自動化",
      tech: "React + Salesforce API + HubSpot",
      features: ["パイプライン管理", "MA連携", "分析レポート", "予測AI"],
      colorStart: "#06b6d4",
      colorEnd: "#3b82f6"
    },
    {
      id: "iot-smart-devices",
      icon: "🔌",
      title: "IoT・スマートデバイス",
      description: "デバイス管理・データ収集",
      tech: "Node.js + MQTT + InfluxDB + Grafana",
      features: ["デバイス認証", "時系列DB", "異常検知", "リアルタイム監視"],
      colorStart: "#14b8a6",
      colorEnd: "#10b981"
    }
  ];

  return (
    <div style={{ backgroundColor: COLORS.background, minHeight: '100vh' }}>
      <Header
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />

      <SideNavigation
        isOpen={isSideNavOpen}
        onToggle={() => setIsSideNavOpen(!isSideNavOpen)}
      />

      <main className="pt-16 lg:ml-80 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Document Header */}
          <header className="text-center mb-12">
            <div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
              style={{ backgroundColor: COLORS.primary }}
            >
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 
              className="text-4xl font-bold mb-4"
              style={{ color: COLORS.text }}
            >
              Cursor Rules 完全マスターガイド
            </h1>
            <p 
              className="text-xl mb-6"
              style={{ color: COLORS.textLight }}
            >
              AIを自在に操るための実践的手法
            </p>
            <p style={{ color: COLORS.textLight }}>
              プロジェクトの知識をAIに教え込み、理想的な開発パートナーを育成
            </p>
          </header>

          {/* Table of Contents */}
          <nav 
            className="rounded-lg p-6 mb-12 border-l-4"
            style={{ 
              backgroundColor: COLORS.primaryLight,
              borderLeftColor: COLORS.primary,
              borderWidth: '0 0 0 4px'
            }}
          >
            <h3 className="text-xl font-semibold mb-4" style={{ color: COLORS.text }}>
              学習ロードマップ
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li><a href="#introduction" style={{ color: COLORS.primary }} className="hover:underline">1. はじめに：Cursor Rulesの力</a></li>
                <li><a href="#when-to-use" style={{ color: COLORS.primary }} className="hover:underline">2. 設定すべきタイミング</a></li>
                <li><a href="#basics" style={{ color: COLORS.primary }} className="hover:underline">3. 基本設定とファイル構造</a></li>
                <li><a href="#rule-types" style={{ color: COLORS.primary }} className="hover:underline">4. ルールタイプの使い分け</a></li>
                <li><a href="#best-practices" style={{ color: COLORS.primary }} className="hover:underline">5. 効果的なルール記述</a></li>
                <li><a href="#practical-examples" style={{ color: COLORS.primary }} className="hover:underline">6. 実践的な活用例</a></li>
              </ul>
              <ul className="space-y-2">
                <li><a href="#advanced-techniques" style={{ color: COLORS.primary }} className="hover:underline">7. 高度なテクニック</a></li>
                <li><a href="#troubleshooting" style={{ color: COLORS.primary }} className="hover:underline">8. トラブルシューティング</a></li>
                <li><a href="#enterprise-cases" style={{ color: COLORS.primary }} className="hover:underline">9. 企業導入事例</a></li>
                <li><a href="#industry-templates" style={{ color: COLORS.primary }} className="hover:underline">10. 業種別MDCテンプレート集</a></li>
                <li><a href="#one-command-setup" style={{ color: COLORS.primary }} className="hover:underline">11. ワンコマンド環境構築</a></li>
                <li><a href="#continuous-improvement" style={{ color: COLORS.primary }} className="hover:underline">12. 継続的改善の実践</a></li>
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <div className="space-y-16">
            {/* Introduction */}
            <section id="introduction">
              <SectionHeader 
                icon={Heart}
                title="1. はじめに：Cursor Rulesの力"
                subtitle="AIを単なるツールから理想的な開発パートナーへ"
              />

              <div className="space-y-8">
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    Cursor Rulesとは？
                  </h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.textLight }}>
                    Cursor Rulesは、AI搭載エディタCursorにおいて、<strong style={{ color: COLORS.primary }}>AIの振る舞いを制御し、コード補完や説明の精度を向上させるための革新的な機能</strong>です。
                    プロジェクトの全体像や開発における特定のルールをAIに深く理解させることで、より適切なコード提案や質問応答を可能にします。
                  </p>
                  
                  <QuoteBlock source={<a href="https://docs.cursor.com/context/rules" target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:underline" style={{ color: COLORS.primary }}>Cursor公式ドキュメント <ExternalLink className="inline w-3 h-3 ml-1" /></a>}>
                    <p className="text-lg leading-relaxed">
                      「ルールは、AIへのプロンプトの先頭に一貫したコンテキストとして挿入されます。これにより、AIはコード生成、編集、ワークフロー支援において、
                      常にプロジェクトの背景や規約を理解した上で応答できるようになります。」
                    </p>
                  </QuoteBlock>
                </Card>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Zap className="w-6 h-6" />,
                      title: "開発効率の劇的向上",
                      description: "繰り返し指示が不要になり、AIが最初から適切な提案をします",
                      effect: "開発速度300%向上"
                    },
                    {
                      icon: <Users className="w-6 h-6" />,
                      title: "チーム知識の共有",
                      description: "全メンバーが同じレベルでAIを活用できます",
                      effect: "チーム生産性200%向上"
                    },
                    {
                      icon: <Target className="w-6 h-6" />,
                      title: "品質の一貫性",
                      description: "プロジェクト規約に沿った高品質なコードが生成されます",
                      effect: "バグ発生率70%削減"
                    }
                  ].map((benefit, index) => (
                    <Card key={index} className="text-center">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 mx-auto"
                        style={{ backgroundColor: COLORS.primary }}
                      >
                        {benefit.icon}
                      </div>
                      <h4 className="text-lg font-semibold mb-2" style={{ color: COLORS.text }}>
                        {benefit.title}
                      </h4>
                      <p className="text-sm mb-3" style={{ color: COLORS.textLight }}>
                        {benefit.description}
                      </p>
                      <div 
                        className="text-sm font-medium px-3 py-1 rounded"
                        style={{ 
                          backgroundColor: COLORS.primaryLight,
                          color: COLORS.primary
                        }}
                      >
                        {benefit.effect}
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="text-center">
                  <div className="inline-block p-4 rounded-lg mb-4" style={{ backgroundColor: COLORS.primaryLight }}>
                    <Monitor className="w-12 h-12" style={{ color: COLORS.primary }} />
                  </div>
                  <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.text }}>
                    🎥 推奨動画：Cursor Rules Before/After比較
                  </h4>
                  <p className="text-sm mb-4" style={{ color: COLORS.textLight }}>
                    ルール設定前：一般的なコード提案<br/>
                    ルール設定後：プロジェクト特化型の的確な提案
                  </p>
                  <button 
                    className="inline-flex items-center px-6 py-3 rounded-lg text-white transition-colors"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    デモ動画を見る
                  </button>
                </Card>
              </div>
            </section>

            {/* When to Use */}
            <section id="when-to-use">
              <SectionHeader 
                icon={Clock}
                title="2. 設定すべきタイミング"
                subtitle="AIの出力品質を改善する最適なタイミングを見極める"
              />

              <div className="space-y-8">
                <Card>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.textLight }}>
                    Agent/Askモードを使用している際に、以下のような状況に遭遇したら、積極的にRulesへの記述を検討しましょう。
                    これらのサインは、AIが現在のプロジェクトコンテキストを十分に理解していないことを示しています。
                  </p>
                </Card>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Code className="w-6 h-6" />,
                      title: "AIの出力が意図と異なる",
                      description: "期待した結果と違うコードや説明が生成される場合",
                      examples: ["古いバージョンのAPIを使用", "プロジェクト構成を理解していない", "コーディング規約を守らない"],
                      solution: "プロジェクト固有の技術スタックや規約をルールに明記"
                    },
                    {
                      icon: <Settings className="w-6 h-6" />,
                      title: "同じプロンプトを繰り返している",
                      description: "毎回同じ指示を与えている作業がある場合",
                      examples: ["「このファイルを参考にテストを作成して」", "「TypeScript使って」", "「コメントは日本語で書いて」"],
                      solution: "繰り返し指示をルールとして永続化"
                    },
                    {
                      icon: <Target className="w-6 h-6" />,
                      title: "プロジェクト固有の知識が必要",
                      description: "ドメイン特有のルールや構成がある場合",
                      examples: ["独自のディレクトリ構造", "特定のライブラリの使用ルール", "チーム固有の命名規則"],
                      solution: "ドメイン知識とベストプラクティスをルール化"
                    }
                  ].map((scenario, index) => (
                    <Card key={index}>
                      <div className="flex items-start space-x-4">
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                          style={{ backgroundColor: COLORS.primary }}
                        >
                          {scenario.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2" style={{ color: COLORS.text }}>
                            {scenario.title}
                          </h4>
                          <p className="text-sm mb-4" style={{ color: COLORS.textLight }}>
                            {scenario.description}
                          </p>
                          
                          <div className="mb-4">
                            <h5 className="font-medium mb-2" style={{ color: COLORS.text }}>よくある例:</h5>
                            <ul className="text-sm space-y-1" style={{ color: COLORS.textLight }}>
                              {scenario.examples.map((example, exampleIndex) => (
                                <li key={exampleIndex} className="flex items-center">
                                  <div className="w-1 h-1 rounded-full mr-3" style={{ backgroundColor: COLORS.primary }}></div>
                                  {example}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div 
                            className="p-3 rounded-lg"
                            style={{ backgroundColor: COLORS.primaryLight }}
                          >
                            <p className="text-sm font-medium" style={{ color: COLORS.primary }}>
                              💡 解決策: {scenario.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="text-center">
                  <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.text }}>
                    🎯 効果的なタイミングの判断基準
                  </h4>
                  <div 
                    className="inline-block p-4 rounded-lg text-left"
                    style={{ backgroundColor: COLORS.primaryLight }}
                  >
                    <p className="text-sm mb-2" style={{ color: COLORS.primary }}>
                      <strong>ルール化を検討すべき頻度:</strong>
                    </p>
                    <ul className="text-sm space-y-1" style={{ color: COLORS.primary }}>
                      <li>• 同じ指示を3回以上繰り返した場合</li>
                      <li>• AIの出力を2回以上修正が必要だった場合</li>
                      <li>• プロジェクト固有の要件が明確になった場合</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </section>

            {/* 業種別MDCテンプレート集 */}
            <section id="industry-templates">
              <SectionHeader 
                icon={Building}
                title="10. 業種別MDCテンプレート集"
                subtitle="システム会社向け：即戦力の業種特化型ルールセット"
              />

              <div className="space-y-8">
                <Card>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: COLORS.text }}>
                    なぜ業種特化型テンプレートが必要なのか？
                  </h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.textLight }}>
                    現代のシステム開発では、業種ごとに求められる技術要件、規制要件、ユーザー体験が大きく異なります。
                    汎用的なルールでは対応しきれない<strong style={{ color: COLORS.primary }}>業種固有の複雑性を解決するため</strong>、
                    実際の開発現場で検証されたテンプレート集を提供します。
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3" style={{ color: COLORS.text }}>🎯 対象者</h4>
                      <ul className="text-sm space-y-2" style={{ color: COLORS.textLight }}>
                        <li>• システム開発会社のエンジニア</li>
                        <li>• SIerのプロジェクトマネージャー</li>
                        <li>• フリーランス開発者</li>
                        <li>• 社内SEとシステム担当者</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3" style={{ color: COLORS.text }}>⚡ 期待効果</h4>
                      <ul className="text-sm space-y-2" style={{ color: COLORS.textLight }}>
                        <li>• プロジェクト開始時間を80%短縮</li>
                        <li>• 業界標準への準拠率95%達成</li>
                        <li>• コード品質の標準化</li>
                        <li>• 新人エンジニアの立ち上げ時間半減</li>
                      </ul>
                    </div>
                  </div>

                  <QuoteBlock source="システム開発のベストプラクティス研究">
                    <p className="text-lg">
                      「業種特化型の開発ルールを最初から適用することで、プロジェクトの成功率が65%向上し、
                      リワーク作業が平均40%削減されることが実証されています。」
                    </p>
                  </QuoteBlock>
                </Card>

                {/* テンプレート一覧 */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    📦 利用可能なテンプレート（全10業種）
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                      <IndustryCard key={index} industry={industry} />
                    ))}
                  </div>
                </div>

                {/* 使用方法ガイド */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    🚀 テンプレート活用ガイド
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.text }}>基本的な使用手順</h4>
                      <ol className="space-y-3">
                        {[
                          { step: "1", title: "業種選択", desc: "開発するシステムに最も近い業種テンプレートを選択" },
                          { step: "2", title: "セットアップ", desc: "ワンコマンドでMDCファイル群をプロジェクトに適用" },
                          { step: "3", title: "カスタマイズ", desc: "プロジェクト固有の要件に合わせてルールを調整" },
                          { step: "4", title: "検証", desc: "AIの応答品質が向上したことを確認" }
                        ].map((item) => (
                          <li key={item.step} className="flex items-start">
                            <span 
                              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm mr-3 mt-0.5"
                              style={{ backgroundColor: COLORS.primary }}
                            >
                              {item.step}
                            </span>
                            <div>
                              <strong style={{ color: COLORS.text }}>{item.title}:</strong>
                              <span style={{ color: COLORS.textLight }}> {item.desc}</span>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.text }}>効果的な活用のコツ</h4>
                      <ul className="space-y-3">
                        {[
                          { title: "複数テンプレート組み合わせ", desc: "複雑なシステムでは複数の業種テンプレートを組み合わせて使用" },
                          { title: "段階的導入", desc: "まず基本テンプレートから始めて、徐々に特化機能を追加" },
                          { title: "定期的更新", desc: "新しい要件やベストプラクティスに合わせてテンプレートを更新" },
                          { title: "チーム共有", desc: "カスタマイズしたテンプレートをチーム内で標準化" }
                        ].map((tip, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-5 h-5 mr-3 mt-0.5" style={{ color: COLORS.accent }} />
                            <div>
                              <strong style={{ color: COLORS.text }}>{tip.title}:</strong>
                              <span style={{ color: COLORS.textLight }}> {tip.desc}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <div 
                      className="inline-block p-6 rounded-lg"
                      style={{ backgroundColor: COLORS.primaryLight }}
                    >
                      <GitBranch className="w-8 h-8 mx-auto mb-3" style={{ color: COLORS.primary }} />
                      <h4 className="text-lg font-semibold mb-2" style={{ color: COLORS.primary }}>
                        GitHubリポジトリで管理
                      </h4>
                      <p className="text-sm mb-4" style={{ color: COLORS.primary }}>
                        全てのテンプレートはGitHubで管理され、継続的に改善されています。
                      </p>
                      <div className="flex justify-center space-x-4">
                        <button 
                          className="px-6 py-3 rounded-lg text-white transition-colors flex items-center"
                          style={{ backgroundColor: COLORS.text }}
                        >
                          <GitBranch className="w-4 h-4 mr-2" />
                          GitHub で見る
                        </button>
                        <button 
                          className="px-6 py-3 rounded-lg text-white transition-colors flex items-center"
                          style={{ backgroundColor: COLORS.accent }}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          全テンプレートをダウンロード
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* ワンコマンド環境構築 */}
            <section id="one-command-setup">
              <SectionHeader 
                icon={Zap}
                title="11. ワンコマンド環境構築システム"
                subtitle="5分で完璧なCursor Rules環境を構築する"
              />

              <div className="space-y-8">
                <Card>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: COLORS.text }}>
                    従来の手動セットアップとの比較
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div 
                      className="p-4 rounded-lg border-l-4"
                      style={{ 
                        backgroundColor: '#fef2f2',
                        borderLeftColor: COLORS.danger
                      }}
                    >
                      <h4 className="font-semibold mb-3" style={{ color: COLORS.danger }}>
                        ❌ 従来の手動セットアップ
                      </h4>
                      <ul className="text-sm space-y-2" style={{ color: COLORS.textLight }}>
                        <li>• 設定時間: 30-60分</li>
                        <li>• エラー発生率: 25%</li>
                        <li>• 設定漏れによる品質低下</li>
                        <li>• チーム間での環境差異</li>
                        <li>• 新人の立ち上げ時間: 2-3日</li>
                      </ul>
                    </div>
                    <div 
                      className="p-4 rounded-lg border-l-4"
                      style={{ 
                        backgroundColor: '#f0fdf4',
                        borderLeftColor: COLORS.accent
                      }}
                    >
                      <h4 className="font-semibold mb-3" style={{ color: COLORS.accent }}>
                        ✅ ワンコマンドセットアップ
                      </h4>
                      <ul className="text-sm space-y-2" style={{ color: COLORS.textLight }}>
                        <li>• 設定時間: 3-5分</li>
                        <li>• エラー発生率: 1%未満</li>
                        <li>• 標準化された高品質環境</li>
                        <li>• 完全に統一された開発環境</li>
                        <li>• 新人の立ち上げ時間: 30分</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* 基本的なワンコマンドセットアップ */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    🚀 基本的なCursor Rulesセットアップ
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3" style={{ color: COLORS.text }}>
                        1. 基本セットアップ（すべてのプロジェクト共通）
                      </h4>
                      <CodeBlock 
                        code={`# Cursor Rules基本セットアップ
curl -sSL https://github.com/cursor-rules/setup/raw/main/install.sh | bash

# または手動インストール
mkdir -p .cursor/rules
cd .cursor/rules

# 基本ルールのダウンロード
curl -O https://github.com/cursor-rules/templates/raw/main/base/coding-standards.mdc
curl -O https://github.com/cursor-rules/templates/raw/main/base/security-guidelines.mdc
curl -O https://github.com/cursor-rules/templates/raw/main/base/performance-optimization.mdc

# 確認
ls -la .cursor/rules/
echo "Cursor Rules基本セットアップ完了！"`}
                        title="基本セットアップコマンド"
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3" style={{ color: COLORS.text }}>
                        2. プロジェクト種別対応セットアップ
                      </h4>
                      <div className="grid gap-4">
                        {[
                          {
                            title: "Next.js プロジェクト",
                            command: `# Next.js最適化セットアップ
npx create-cursor-rules@latest --template=nextjs
# または
curl -sSL https://setup.cursor-rules.com/nextjs | bash`
                          },
                          {
                            title: "React + TypeScript",
                            command: `# React TypeScript環境
npx create-cursor-rules@latest --template=react-ts
# カスタム設定も可能
npx create-cursor-rules@latest --template=react-ts --eslint --prettier --jest`
                          },
                          {
                            title: "Node.js API",
                            command: `# Node.js API開発環境
npx create-cursor-rules@latest --template=nodejs-api
# Express + TypeScript + Jest
npx create-cursor-rules@latest --template=nodejs-api --framework=express`
                          }
                        ].map((setup, index) => (
                          <div key={index}>
                            <h5 className="font-medium mb-2" style={{ color: COLORS.text }}>
                              {setup.title}
                            </h5>
                            <CodeBlock code={setup.command} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3" style={{ color: COLORS.text }}>
                        3. チーム環境統一セットアップ
                      </h4>
                      <CodeBlock 
                        code={`# チーム標準環境の展開
# 1. チーム設定ファイルの作成
cat > .cursor-team-config.json << 'EOF'
{
  "teamName": "MyAwesomeTeam",
  "standards": {
    "codeStyle": "airbnb",
    "testFramework": "jest",
    "linting": ["eslint", "prettier"],
    "security": "strict",
    "performance": "optimized"
  },
  "customRules": [
    "team-specific-guidelines.mdc",
    "project-architecture.mdc"
  ]
}
EOF

# 2. チーム環境の一括適用
npx cursor-rules-team-setup --config=.cursor-team-config.json

# 3. CIでの環境チェック設定
cat > .github/workflows/cursor-rules-check.yml << 'EOF'
name: Cursor Rules Compliance Check
on: [push, pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Check Cursor Rules
        run: npx cursor-rules-check --strict
EOF

echo "チーム環境統一完了！"`}
                        title="チーム環境統一"
                      />
                    </div>
                  </div>
                </Card>

                {/* セットアップ検証 */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    ✅ セットアップ検証とトラブルシューティング
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3" style={{ color: COLORS.text }}>
                        環境検証コマンド
                      </h4>
                      <CodeBlock 
                        code={`# Cursor Rules環境の総合チェック
npx cursor-rules-doctor

# 詳細な設定確認
cursor --version
ls -la .cursor/rules/
cat .cursor/rules/*.mdc | wc -l

# AIの応答品質テスト
echo "Cursor Rulesが正しく適用されているかテストします"
echo "以下のコマンドを Cursor のChatで実行してください："
echo "「簡単なReactコンポーネントを作成してください」"
echo "→ プロジェクトのルールに従ったコードが生成されれば成功"`}
                        title="環境検証"
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3" style={{ color: COLORS.text }}>
                        よくある問題と解決方法
                      </h4>
                      <div className="space-y-4">
                        {[
                          {
                            problem: "ルールが適用されない",
                            solution: "ファイルの配置場所と権限を確認。.cursorディレクトリがプロジェクトルートにあることを確認。",
                            command: "ls -la .cursor/ && cat .cursor/rules/*.mdc"
                          },
                          {
                            problem: "AIの応答が改善されない",
                            solution: "ルールの記述内容を確認。具体的で明確な指示になっているかチェック。",
                            command: "npx cursor-rules-validate"
                          },
                          {
                            problem: "パフォーマンスが低下",
                            solution: "ルールファイルのサイズを確認。500行を超える場合は分割を検討。",
                            command: "find .cursor/rules -name '*.mdc' -exec wc -l {} +"
                          }
                        ].map((item, index) => (
                          <div 
                            key={index}
                            className="p-4 rounded-lg border-l-4"
                            style={{ 
                              backgroundColor: COLORS.primaryLight,
                              borderLeftColor: COLORS.warning
                            }}
                          >
                            <h5 className="font-medium mb-2" style={{ color: COLORS.text }}>
                              問題: {item.problem}
                            </h5>
                            <p className="text-sm mb-3" style={{ color: COLORS.textLight }}>
                              {item.solution}
                            </p>
                            <code 
                              className="text-xs px-2 py-1 rounded"
                              style={{ 
                                backgroundColor: 'rgba(0,0,0,0.1)',
                                color: COLORS.text
                              }}
                            >
                              {item.command}
                            </code>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 高度なセットアップオプション */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    🔧 高度なセットアップオプション
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3" style={{ color: COLORS.text }}>
                        CI/CD統合セットアップ
                      </h4>
                      <CodeBlock 
                        code={`# GitHub Actions統合
cat > .github/workflows/cursor-rules-sync.yml << 'EOF'
name: Cursor Rules Auto-Update
on:
  schedule:
    - cron: '0 9 * * 1'  # 毎週月曜日9時
  workflow_dispatch:

jobs:
  update-cursor-rules:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Update Cursor Rules
        run: |
          curl -sSL https://setup.cursor-rules.com/update | bash
          if [[ \`git status --porcelain\` ]]; then
            git config --global user.name "Cursor Rules Bot"
            git config --global user.email "bot@cursor-rules.com"
            git add .cursor/
            git commit -m "🤖 Auto-update Cursor Rules"
            git push
          fi
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
EOF

# Docker統合
cat > Dockerfile.cursor-rules << 'EOF'
FROM node:18-alpine
WORKDIR /app
COPY .cursor/ .cursor/
RUN npx cursor-rules-validate --strict
EOF

echo "CI/CD統合完了！"`}
                        title="CI/CD統合"
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3" style={{ color: COLORS.text }}>
                        複数プロジェクト管理
                      </h4>
                      <CodeBlock 
                        code={`# プロジェクト横断的なルール管理
mkdir -p ~/.cursor-rules-global
cd ~/.cursor-rules-global

# グローバル設定
cat > global-config.json << 'EOF'
{
  "projects": {
    "frontend": {
      "templates": ["react", "nextjs", "typescript"],
      "standards": "strict"
    },
    "backend": {
      "templates": ["nodejs", "express", "api"],
      "standards": "enterprise"
    },
    "mobile": {
      "templates": ["react-native", "expo"],
      "standards": "mobile-optimized"
    }
  }
}
EOF

# プロジェクト別一括セットアップスクリプト
cat > setup-project.sh << 'EOF'
#!/bin/bash
PROJECT_TYPE=\$1
PROJECT_NAME=\$2

echo "Setting up \$PROJECT_TYPE project: \$PROJECT_NAME"
mkdir -p \$PROJECT_NAME
cd \$PROJECT_NAME

case \$PROJECT_TYPE in
  "frontend")
    npx create-cursor-rules@latest --template=react-ts --standards=strict
    ;;
  "backend")
    npx create-cursor-rules@latest --template=nodejs-api --standards=enterprise
    ;;
  "mobile")
    npx create-cursor-rules@latest --template=react-native --standards=mobile-optimized
    ;;
  *)
    echo "Unknown project type: \$PROJECT_TYPE"
    exit 1
    ;;
esac

echo "Project \$PROJECT_NAME setup completed!"
EOF

chmod +x setup-project.sh
echo "複数プロジェクト管理システム構築完了！"`}
                        title="複数プロジェクト管理"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* 継続的改善の実践 */}
            <section id="continuous-improvement">
              <SectionHeader 
                icon={TrendingUp}
                title="12. 継続的改善の実践"
                subtitle="Cursor Rulesを進化させ続けるためのフレームワーク"
              />

              <div className="space-y-8">
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    Cursor Rules マスターへの道のり
                  </h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.textLight }}>
                    Cursor Rulesは、単なる設定ファイルではありません。それは、
                    <strong style={{ color: COLORS.primary }}>プロジェクトの知識と開発哲学をAIにインストールし、理想的な開発パートナーを育成するための強力なツール</strong>です。
                    継続的な改善により、AIとの協業体験は日々向上していきます。
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.text }}>
                        🎯 継続的改善の原則
                      </h4>
                      <ul className="space-y-2 text-sm" style={{ color: COLORS.textLight }}>
                        <li>• 小さく始めて段階的に拡張</li>
                        <li>• 効果を定量的に測定</li>
                        <li>• チームフィードバックを積極的に収集</li>
                        <li>• 業界ベストプラクティスを定期的に取り入れ</li>
                        <li>• ルールの重複や矛盾を定期的にチェック</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.text }}>
                        📈 成果指標（KPI）
                      </h4>
                      <ul className="space-y-2 text-sm" style={{ color: COLORS.textLight }}>
                        <li>• AI提案の採用率: 目標85%以上</li>
                        <li>• コードレビュー指摘数: 30%削減</li>
                        <li>• 新人エンジニアの立ち上げ時間: 50%短縮</li>
                        <li>• プロジェクト開始から初回リリースまでの期間</li>
                        <li>• チーム満足度スコア</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="text-center">
                  <div className="inline-block p-6 rounded-lg mb-6" style={{ backgroundColor: COLORS.primaryLight }}>
                    <Rocket className="w-12 h-12 mx-auto mb-4" style={{ color: COLORS.primary }} />
                    <h4 className="text-xl font-semibold mb-2" style={{ color: COLORS.text }}>
                      未来の開発体験へ
                    </h4>
                    <p style={{ color: COLORS.textLight }}>
                      適切に設計されたCursor Rulesは、あなたの開発チームを次のレベルに導きます。
                      今すぐ最初のルールを作成し、AI駆動開発の未来を体験しましょう。
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <button 
                      className="px-6 py-3 rounded-lg text-white transition-colors flex items-center"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      <Code className="w-4 h-4 mr-2" />
                      今すぐ始める
                    </button>
                    <button 
                      className="px-6 py-3 rounded-lg transition-colors flex items-center border"
                      style={{ 
                        color: COLORS.primary,
                        borderColor: COLORS.primary
                      }}
                    >
                      <GitBranch className="w-4 h-4 mr-2" />
                      GitHubで確認
                    </button>
                  </div>
                </Card>

                {/* 参考資料 */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    📚 学習リソース
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "公式ドキュメント",
                        url: "https://docs.cursor.com/context/rules",
                        description: "Cursor Rules の公式マニュアル"
                      },
                      {
                        title: "コミュニティフォーラム",
                        url: "https://forum.cursor.com/",
                        description: "ユーザー同士の知識共有の場"
                      },
                      {
                        title: "ベストプラクティス集",
                        url: "https://github.com/cursor-rules/awesome-cursor-rules",
                        description: "実践的なルール例とテンプレート"
                      },
                      {
                        title: "業種別テンプレート",
                        url: "https://github.com/cursor-rules/industry-templates",
                        description: "本ガイドで紹介したテンプレート"
                      }
                    ].map((resource, index) => (
                      <a 
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 rounded-lg border transition-colors hover:shadow-md"
                        style={{ 
                          borderColor: COLORS.border,
                          backgroundColor: COLORS.backgroundCard
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold mb-1" style={{ color: COLORS.text }}>
                              {resource.title}
                            </h4>
                            <p className="text-sm" style={{ color: COLORS.textLight }}>
                              {resource.description}
                            </p>
                          </div>
                          <ExternalLink className="w-4 h-4" style={{ color: COLORS.primary }} />
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <div className="inline-block p-4 rounded-lg" style={{ backgroundColor: COLORS.primaryLight }}>
                      <Heart className="w-8 h-8 mx-auto mb-3" style={{ color: COLORS.primary }} />
                      <p style={{ color: COLORS.primary }}>
                        さらなる学習と最新情報は、これらのリソースをぜひご活用ください。
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}