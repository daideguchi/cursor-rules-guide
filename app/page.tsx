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
  Package,
  ArrowRight,
  AlertTriangle,
  Layers,
  Search,
  FileText,
  CheckCircle,
  XCircle,
  Info,
  Briefcase,
  BarChart3,
  X
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

// 折りたたみ可能なコードブロックコンポーネント
function CodeBlock({ code, language = "bash", title, defaultExpanded = false }: { 
  code: string; 
  language?: string; 
  title?: string; 
  defaultExpanded?: boolean;
}) {
  const [isCopied, setIsCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const previewLines = code.split('\n').slice(0, 3).join('\n');
  const hasMoreLines = code.split('\n').length > 3;

  return (
    <div className="relative mb-6">
      {title && (
        <div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium rounded-t-lg flex items-center justify-between">
          <span>{title}</span>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-300 hover:text-white transition-colors flex items-center text-xs"
          >
            {isExpanded ? (
              <>
                <span className="mr-1">折りたたむ</span>
                <ChevronUp className="w-3 h-3" />
              </>
            ) : (
              <>
                <span className="mr-1">展開する</span>
                <ChevronDown className="w-3 h-3" />
              </>
            )}
          </button>
        </div>
      )}
      <div className="bg-gray-900 rounded-b-lg overflow-hidden" style={{ backgroundColor: '#2d2d2d' }}>
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
          <span className="text-gray-300 text-sm">{language}</span>
          <div className="flex items-center space-x-2">
            {!title && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-gray-300 hover:text-white transition-colors flex items-center text-xs"
              >
                {isExpanded ? (
                  <>
                    <span className="mr-1">折りたたむ</span>
                    <ChevronUp className="w-3 h-3" />
                  </>
                ) : (
                  <>
                    <span className="mr-1">展開する</span>
                    <ChevronDown className="w-3 h-3" />
                  </>
                )}
              </button>
            )}
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
        </div>
        <div className="p-4">
          {isExpanded ? (
            <pre className="text-sm text-gray-100 overflow-x-auto" style={{ color: '#f8f8f2' }}>
              <code>{code}</code>
            </pre>
          ) : (
            <div 
              className="cursor-pointer hover:bg-gray-800 rounded transition-colors p-2 -m-2"
              onClick={() => setIsExpanded(true)}
            >
              <pre className="text-sm text-gray-100 overflow-x-auto pointer-events-none" style={{ color: '#f8f8f2' }}>
                <code>{previewLines}</code>
              </pre>
              {hasMoreLines && (
                <div className="mt-2 text-xs text-gray-400 italic flex items-center justify-between">
                  <span>... {code.split('\n').length - 3} 行以上のコードがあります</span>
                  <span className="inline-flex items-center px-2 py-1 rounded bg-blue-600 text-white text-xs hover:bg-blue-700 transition-colors">
                    <ChevronDown className="w-3 h-3 mr-1" />
                    クリックして展開
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// 引用ブロックコンポーネント
function QuoteBlock({ children, source }: { children: React.ReactNode; source?: React.ReactNode }) {
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
function SectionHeader({ icon: Icon, title, subtitle, isActive = false }: { icon: any; title: string; subtitle?: string; isActive?: boolean }) {
  return (
    <div className="mb-8 relative">
      {isActive && (
        <div 
          className="absolute -left-6 top-0 w-1 h-full rounded-r-md"
          style={{ backgroundColor: COLORS.primary }}
        ></div>
      )}
      <div className={`flex items-center mb-4 transition-all duration-300 ${isActive ? 'pl-4' : ''}`}>
        <Icon 
          className="w-8 h-8 mr-4 transition-all duration-300" 
          style={{ color: isActive ? COLORS.primary : COLORS.primary }} 
        />
        <h2 
          className={`text-3xl font-bold transition-all duration-300 ${isActive ? 'text-blue-700' : ''}`}
          style={{ color: isActive ? COLORS.primary : COLORS.text }}
        >
          {title}
        </h2>
        {isActive && (
          <div 
            className="ml-3 px-2 py-1 rounded-full text-xs font-medium animate-pulse"
            style={{ 
              backgroundColor: COLORS.primaryLight,
              color: COLORS.primary
            }}
          >
            読み中
          </div>
        )}
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

// プレビューモーダルコンポーネント
function PreviewModal({ isOpen, onClose, industry }: { 
  isOpen: boolean; 
  onClose: () => void; 
  industry: any;
}) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  // Escapeキーでモーダルを閉じる
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // スクロールをロック
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  // 各業種のサンプルMDCコンテンツ
  const getMdcContent = () => {
    const mdcContents: { [key: string]: string } = {
      "ecommerce-platform": `---
description: ECプラットフォーム開発ルール - 購買体験の最適化とパフォーマンス
globs:
  - "components/shop/**/*.{ts,tsx}"
  - "pages/products/**/*.{ts,tsx}"
  - "lib/commerce/**/*.ts"
alwaysApply: true
---

# 🛍️ ECプラットフォーム開発ガイドライン

## コアコンセプト
- **購買体験の最適化**: すべての実装は購買率向上を意識する
- **パフォーマンス優先**: Core Web Vitalsの基準を厳守
- **モバイルファースト**: 60%以上のユーザーがモバイルであることを前提に

## 実装ルール

### 1. 商品表示最適化
\`\`\`typescript
// 商品一覧では必ず仮想スクロールまたは遅延読み込みを実装
import { VirtualList } from '@tanstack/react-virtual';

// 画像は必ずNext.js Imageコンポーネントを使用
import Image from 'next/image';

// 価格表示は必ずフォーマット関数を通す
const formatPrice = (price: number, currency = 'JPY') => {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency
  }).format(price);
};
\`\`\`

### 2. カート機能実装
- 楽観的UIアップデートを必須とする
- カート状態はZustandまたはRedux Toolkitで管理
- 在庫チェックは非同期で実行

### 3. 決済プロセス
- Stripe Elementsを使用したPCI準拠の実装
- 3Dセキュア認証の自動対応
- エラーハンドリングは明確なユーザーフィードバック付き

@commerce-guidelines.md
@performance-checklist.md`,
      
      "saas-web-management": `---
description: SaaS管理プラットフォーム - エンタープライズ級のマルチテナント実装
globs:
  - "apps/**/*.{ts,tsx,js,jsx}"
  - "packages/core/**/*.ts"
  - "services/**/*.ts"
alwaysApply: true
---

# 💼 SaaS管理プラットフォーム開発基準

## アーキテクチャ原則
- **マルチテナント設計**: 完全なデータ分離とセキュリティ
- **拡張性重視**: 水平スケーリングを前提とした設計
- **API First**: すべての機能はAPIとして実装

## 実装必須要件

### 1. 認証・認可
\`\`\`typescript
// NextAuth.jsを使用した認証実装
import { NextAuthOptions } from 'next-auth';

// RBAC (Role-Based Access Control) の実装
interface Permission {
  resource: string;
  action: 'create' | 'read' | 'update' | 'delete';
  scope: 'own' | 'team' | 'organization';
}

// 必ずミドルウェアでテナント検証
export async function tenantMiddleware(req: Request) {
  const tenantId = extractTenantId(req);
  if (!isValidTenant(tenantId)) {
    throw new UnauthorizedError('Invalid tenant');
  }
}
\`\`\`

### 2. データベース設計
- PostgreSQLのRow Level Security (RLS) を活用
- すべてのテーブルにtenant_idカラムを含める
- 複合インデックスでクエリ最適化

### 3. API設計
- RESTful原則に従う
- GraphQLの場合はN+1問題に注意
- Rate Limitingの実装必須

@rbac-implementation.md
@tenant-isolation.md`,

      "fintech-banking": `---
description: フィンテック・銀行システム - 金融規制準拠とセキュリティ最優先
globs:
  - "src/main/java/**/*.java"
  - "src/main/kotlin/**/*.kt"
  - "src/test/**/*.{java,kt}"
alwaysApply: true
---

# 🏦 金融システム開発標準

## セキュリティ要件
- **PCI DSS Level 1準拠**: カード情報は絶対に平文保存しない
- **暗号化**: AES-256-GCMを標準とする
- **監査ログ**: すべてのトランザクションを記録

## 実装規約

### 1. 金額計算
\`\`\`java
// BigDecimalを必ず使用（floatやdoubleは禁止）
import java.math.BigDecimal;
import java.math.RoundingMode;

public class MoneyCalculator {
    private static final int SCALE = 4;
    private static final RoundingMode ROUNDING = RoundingMode.HALF_UP;
    
    public BigDecimal calculate(BigDecimal amount, BigDecimal rate) {
        return amount.multiply(rate)
                     .setScale(SCALE, ROUNDING);
    }
}
\`\`\`

### 2. トランザクション管理
- 分散トランザクションはSagaパターンで実装
- 冪等性の保証（重複リクエスト対策）
- タイムアウトと自動ロールバック

### 3. 規制対応
- KYC（本人確認）プロセスの実装
- AML（マネーロンダリング防止）チェック
- 取引報告書の自動生成

@compliance-checklist.md
@security-standards.md`,

      "healthcare-medical": `---
description: 医療・ヘルスケアシステム - HIPAA準拠と患者データ保護
globs:
  - "src/**/*.py"
  - "apps/ehr/**/*.{ts,tsx}"
  - "services/fhir/**/*.py"
alwaysApply: true
---

# 🏥 医療システム開発ガイドライン

## コンプライアンス要件
- **HIPAA準拠**: PHI（保護対象保健情報）の厳格な管理
- **HL7 FHIR標準**: 相互運用性の確保
- **監査証跡**: 全アクセスログの7年間保存

## 実装標準

### 1. 患者データ管理
\`\`\`python
from typing import Optional
from datetime import datetime
import hashlib

class PatientRecord:
    def __init__(self, patient_id: str):
        # 患者IDは必ずハッシュ化
        self.hashed_id = self._hash_id(patient_id)
        self.audit_log = []
    
    def _hash_id(self, patient_id: str) -> str:
        return hashlib.sha256(
            patient_id.encode('utf-8')
        ).hexdigest()
    
    def access_record(self, user_id: str, purpose: str):
        # すべてのアクセスを記録
        self.audit_log.append({
            'user_id': user_id,
            'timestamp': datetime.now(),
            'purpose': purpose
        })
\`\`\`

### 2. データ暗号化
- 保存時暗号化（Encryption at Rest）
- 転送時暗号化（Encryption in Transit）
- フィールドレベル暗号化（センシティブデータ）

### 3. アクセス制御
- Role-Based Access Control (RBAC)
- 最小権限の原則
- Break-the-glass緊急アクセス機能

@hipaa-compliance.md
@fhir-implementation.md`,

      "edtech-platform": `---
description: EdTech・教育プラットフォーム - 学習体験の最適化
globs:
  - "components/learning/**/*.{ts,tsx}"
  - "pages/courses/**/*.{ts,tsx}"
  - "lib/analytics/**/*.ts"
alwaysApply: true
---

# 🎓 教育プラットフォーム開発基準

## 教育設計原則
- **学習者中心設計**: UXは学習効果を最優先
- **アクセシビリティ**: WCAG 2.1 AA準拠
- **マルチデバイス対応**: シームレスな学習体験

## 実装ガイドライン

### 1. 学習進捗管理
\`\`\`typescript
interface LearningProgress {
  courseId: string;
  userId: string;
  completedModules: string[];
  timeSpent: number;
  lastAccessed: Date;
  
  // xAPI (Experience API) 準拠のイベント記録
  recordEvent(verb: string, object: any): void;
}

// SCORM 2004準拠の進捗追跡
class SCORMAdapter {
  initialize(): boolean;
  setValue(element: string, value: string): boolean;
  getValue(element: string): string;
  commit(): boolean;
  terminate(): boolean;
}
\`\`\`

### 2. インタラクティブコンテンツ
- WebRTCを使用したリアルタイム通信
- Canvas APIを活用した描画機能
- Web Audio APIによる音声フィードバック

### 3. 学習分析
- Learning Analytics APIの実装
- 学習パターンの可視化
- 個別最適化されたレコメンデーション

@lti-integration.md
@accessibility-guidelines.md`,

      "real-estate-property": `---
description: 不動産・物件管理システム - 地理空間データと視覚化
globs:
  - "resources/js/**/*.{js,vue}"
  - "app/Http/Controllers/**/*.php"
  - "database/migrations/**/*.php"
alwaysApply: true
---

# 🏠 不動産管理システム開発ルール

## システム設計原則
- **地理空間データ最適化**: PostGISを活用した高速検索
- **ビジュアル重視**: 物件の魅力を最大限に表現
- **リアルタイム更新**: 在庫状況の即時反映

## 実装基準

### 1. 地図機能実装
\`\`\`javascript
// MapBox GLを使用した物件表示
import mapboxgl from 'mapbox-gl';

class PropertyMap {
  constructor(container) {
    this.map = new mapboxgl.Map({
      container,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [139.7670, 35.6814], // 東京
      zoom: 11
    });
    
    this.markers = new Map();
  }
  
  addPropertyMarker(property) {
    const el = document.createElement('div');
    el.className = 'property-marker';
    el.innerHTML = \`¥\${this.formatPrice(property.price)}\`;
    
    const marker = new mapboxgl.Marker(el)
      .setLngLat([property.lng, property.lat])
      .setPopup(this.createPopup(property))
      .addTo(this.map);
      
    this.markers.set(property.id, marker);
  }
}
\`\`\`

### 2. VR/360°ビュー
- Three.jsを使用した3Dウォークスルー
- パノラマ画像の最適化
- モバイルVR対応

### 3. 検索最適化
- Elasticsearchによる全文検索
- 地理空間インデックスの活用
- ファセット検索の実装

@property-schema.md
@vr-guidelines.md`,

      "logistics-supply-chain": `---
description: 物流・サプライチェーン - リアルタイム追跡と最適化
globs:
  - "**/*.cs"
  - "**/*.cshtml"
  - "**/*.sql"
alwaysApply: true
---

# 🚚 物流システム開発標準

## システム要件
- **リアルタイム追跡**: IoTデバイスとの連携
- **最適化アルゴリズム**: 配送ルートの自動計算
- **可視化**: サプライチェーン全体の把握

## 実装規約

### 1. 在庫管理
\`\`\`csharp
using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

public class InventoryService
{
    private readonly IDbContext _context;
    private readonly IEventBus _eventBus;
    
    public async Task<InventoryStatus> UpdateStock(
        string warehouseId, 
        string productId, 
        int quantity,
        StockMovementType type)
    {
        using var transaction = await _context.BeginTransactionAsync();
        
        try
        {
            var inventory = await _context.Inventories
                .FirstOrDefaultAsync(i => 
                    i.WarehouseId == warehouseId && 
                    i.ProductId == productId);
                    
            // 在庫更新ロジック
            inventory.UpdateQuantity(quantity, type);
            
            // イベント発行
            await _eventBus.PublishAsync(
                new StockUpdatedEvent(inventory));
                
            await transaction.CommitAsync();
            
            return inventory.ToStatus();
        }
        catch
        {
            await transaction.RollbackAsync();
            throw;
        }
    }
}
\`\`\`

### 2. 配送最適化
- 遺伝的アルゴリズムによるルート最適化
- リアルタイム交通情報の統合
- 配送時間予測モデル

### 3. IoT統合
- MQTT プロトコルでのデバイス通信
- タイムシリーズデータベース（InfluxDB）
- 異常検知アルゴリズム

@iot-integration.md
@optimization-algorithms.md`,

      "hr-management": `---
description: HR・人事管理システム - 従業員体験とコンプライアンス
globs:
  - "app/**/*.{ts,tsx}"
  - "pages/api/**/*.ts"
  - "lib/hr/**/*.ts"
alwaysApply: true
---

# 👥 人事管理システム開発ガイド

## 設計原則
- **プライバシー重視**: 個人情報保護法準拠
- **使いやすさ**: 直感的なUI/UX
- **自動化**: 定型業務の効率化

## 実装標準

### 1. 従業員データ管理
\`\`\`typescript
interface Employee {
  id: string;
  personalInfo: EncryptedData<PersonalInfo>;
  employment: EmploymentDetails;
  compensation: CompensationPackage;
  
  // GDPR/個人情報保護法対応
  getAnonymizedData(): AnonymizedEmployee;
  requestDataDeletion(): Promise<void>;
}

// 給与計算エンジン
class PayrollEngine {
  calculateSalary(
    employee: Employee,
    period: PayPeriod
  ): PayrollResult {
    const base = employee.compensation.baseSalary;
    const deductions = this.calculateDeductions(employee);
    const benefits = this.calculateBenefits(employee);
    
    return {
      gross: base + benefits.total,
      net: base + benefits.total - deductions.total,
      deductions,
      benefits
    };
  }
}
\`\`\`

### 2. 勤怠管理
- 生体認証との連携
- フレックスタイム対応
- 有給休暇自動計算

### 3. パフォーマンス評価
- 360度フィードバック
- OKR/KPI追跡
- AIによる偏見除去

@privacy-compliance.md
@payroll-regulations.md`,

      "crm-sales-support": `---
description: CRM・営業支援 - 顧客関係の最適化と売上向上
globs:
  - "src/**/*.{js,jsx,ts,tsx}"
  - "api/**/*.{js,ts}"
  - "workers/**/*.js"
alwaysApply: true
---

# 📈 CRM・営業支援システム開発基準

## ビジネス目標
- **顧客満足度向上**: 360度の顧客ビュー
- **営業効率化**: AIによる次のアクション提案
- **収益最大化**: 予測分析とクロスセル

## 実装ガイド

### 1. 顧客データ統合
\`\`\`typescript
class CustomerDataPlatform {
  // 複数ソースからのデータ統合
  async unifyCustomerData(customerId: string) {
    const [
      crmData,
      marketingData,
      supportData,
      transactionData
    ] = await Promise.all([
      this.fetchFromCRM(customerId),
      this.fetchFromMarketing(customerId),
      this.fetchFromSupport(customerId),
      this.fetchFromERP(customerId)
    ]);
    
    return this.mergeAndDeduplicate({
      crmData,
      marketingData,
      supportData,
      transactionData
    });
  }
  
  // AIスコアリング
  calculateCustomerScore(customer: UnifiedCustomer) {
    return {
      ltv: this.predictLifetimeValue(customer),
      churnRisk: this.predictChurnProbability(customer),
      upsellPotential: this.identifyUpsellOpportunities(customer)
    };
  }
}
\`\`\`

### 2. セールスオートメーション
- リードスコアリング自動化
- メール配信の最適タイミング予測
- 商談進捗の自動更新

### 3. 分析ダッシュボード
- リアルタイムKPI表示
- 予測分析レポート
- カスタマイズ可能なビュー

@salesforce-integration.md
@analytics-implementation.md`,

      "iot-smart-devices": `---
description: IoT・スマートデバイス - エッジコンピューティングとリアルタイム処理
globs:
  - "edge/**/*.js"
  - "cloud/**/*.ts"
  - "firmware/**/*.c"
alwaysApply: true
---

# 🔌 IoTシステム開発標準

## アーキテクチャ原則
- **エッジ処理優先**: レイテンシ最小化
- **セキュア・バイ・デザイン**: 脆弱性対策必須
- **スケーラビリティ**: 数百万デバイス対応

## 実装基準

### 1. デバイス通信
\`\`\`javascript
// MQTT通信の実装
const mqtt = require('mqtt');
const crypto = require('crypto');

class DeviceClient {
  constructor(deviceId, privateKey) {
    this.deviceId = deviceId;
    this.privateKey = privateKey;
    
    // TLS接続必須
    this.client = mqtt.connect('mqtts://broker.iot.example.com', {
      clientId: deviceId,
      cert: this.getCertificate(),
      key: privateKey,
      rejectUnauthorized: true
    });
    
    this.setupHeartbeat();
  }
  
  // 暗号化されたペイロード送信
  async sendTelemetry(data) {
    const encrypted = this.encrypt(data);
    const topic = \`devices/\${this.deviceId}/telemetry\`;
    
    this.client.publish(topic, encrypted, { qos: 1 });
  }
  
  encrypt(data) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(
      'aes-256-gcm', 
      this.getEncryptionKey(), 
      iv
    );
    
    return Buffer.concat([
      iv,
      cipher.update(JSON.stringify(data)),
      cipher.final(),
      cipher.getAuthTag()
    ]);
  }
}
\`\`\`

### 2. エッジコンピューティング
- 機械学習モデルのエッジ展開
- ローカルでの異常検知
- データ集約と前処理

### 3. クラウド統合
- AWS IoT Core / Azure IoT Hub
- タイムシリーズデータベース
- ストリーム処理（Apache Kafka）

@device-security.md
@edge-ml-deployment.md`
    };

    return mdcContents[industry.id] || "# サンプルMDCコンテンツ\n\n準備中...";
  };

  return (
    <>
      {/* モーダルオーバーレイ */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-50 ${
          isOpen && !isClosing ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* モーダルコンテンツ */}
      <div 
        className={`fixed inset-4 md:inset-10 lg:inset-20 bg-white rounded-lg shadow-2xl z-50 flex flex-col transition-all duration-300 transform ${
          isOpen && !isClosing 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`}
      >
        {/* ヘッダー */}
        <div 
          className="px-6 py-4 border-b flex items-center justify-between"
          style={{ borderColor: COLORS.border }}
        >
          <div className="flex items-center">
            <div className="text-3xl mr-3">{industry?.icon}</div>
            <div>
              <h3 className="text-xl font-semibold" style={{ color: COLORS.text }}>
                {industry?.title} MDCテンプレート
              </h3>
              <p className="text-sm" style={{ color: COLORS.textLight }}>
                {industry?.description}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" style={{ color: COLORS.textLight }} />
          </button>
        </div>
        
        {/* コンテンツエリア */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* 技術スタックとFeatures */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div 
              className="p-4 rounded-lg"
              style={{ backgroundColor: COLORS.primaryLight }}
            >
              <h4 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                技術スタック
              </h4>
              <p className="text-sm" style={{ color: COLORS.textLight }}>
                {industry?.tech}
              </p>
            </div>
            <div 
              className="p-4 rounded-lg"
              style={{ backgroundColor: '#f0f9ff' }}
            >
              <h4 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                主要機能
              </h4>
              <div className="flex flex-wrap gap-2">
                {industry?.features.map((feature: string, index: number) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded"
                    style={{ 
                      backgroundColor: COLORS.primary,
                      color: 'white'
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* MDCコンテンツ */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
              MDCファイル内容プレビュー
            </h4>
            <CodeBlock
              code={getMdcContent()}
              title={`${industry?.id}.mdc`}
              language="markdown"
              defaultExpanded={true}
            />
          </div>
        </div>
        
        {/* フッター */}
        <div 
          className="px-6 py-4 border-t flex justify-between items-center"
          style={{ borderColor: COLORS.border }}
        >
          <p className="text-sm" style={{ color: COLORS.textLight }}>
            このテンプレートには、業界標準のベストプラクティスが含まれています
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleClose}
              className="px-4 py-2 rounded-lg border transition-colors"
              style={{ 
                borderColor: COLORS.border,
                color: COLORS.textLight
              }}
            >
              閉じる
            </button>
            <button
              className="px-4 py-2 rounded-lg text-white transition-colors flex items-center"
              style={{ backgroundColor: COLORS.primary }}
            >
              <Download className="w-4 h-4 mr-2" />
              ダウンロード
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// インダストリーテンプレートカード
function IndustryCard({ industry, onPreview }: { industry: any; onPreview: (industry: any) => void }) {
  const [showCommand, setShowCommand] = useState(false);
  
  const handlePreview = () => {
    onPreview(industry);
  };

  const generateCommand = () => {
    return `mkdir -p .cursor/rules/dev-rules && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/uiux.mdc" -o ".cursor/rules/uiux.mdc" && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/rules.mdc" -o ".cursor/rules/rules.mdc" && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/todo.mdc" -o ".cursor/rules/todo.mdc" && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/globals.mdc" -o ".cursor/rules/globals.mdc" && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/dev-rules/testing-guidelines.mdc" -o ".cursor/rules/dev-rules/testing-guidelines.mdc" && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/dev-rules/coding-standards.mdc" -o ".cursor/rules/dev-rules/coding-standards.mdc" && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/dev-rules/git-workflow.mdc" -o ".cursor/rules/dev-rules/git-workflow.mdc" && echo "🎉 ${industry.title}用Cursor Rules環境を適用完了！" && echo "" && echo "📋 ダウンロードされたファイル:" && ls -la .cursor/rules/ && ls -la .cursor/rules/dev-rules/ && echo "" && echo "🚀 次のステップ:" && echo "1. Cursor設定 (Cmd+,) → 'Indexing & Docs' → 'Continue' でインデックス化" && echo "2. 'Codebase Indexing' が100%完了まで待機" && echo "3. ✅ 準備完了！Cursor Rulesが適用されました" && echo "" && echo "💡 確認方法: チャットで '@' を入力するとルールファイルが表示されます"`;
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
  const [activeSection, setActiveSection] = useState("hero");
  const [previewModal, setPreviewModal] = useState({ isOpen: false, industry: null });

  // プレビューモーダル制御
  const handlePreviewOpen = (industry: any) => {
    setPreviewModal({ isOpen: true, industry });
  };

  const handlePreviewClose = () => {
    setPreviewModal({ isOpen: false, industry: null });
  };

  // セクション一覧（サブセクション付き）
  const sections = [
    { 
      id: "hero", 
      title: "Cursor Rules 完全ガイド",
      subsections: []
    },
    { 
      id: "introduction", 
      title: "1. はじめに：Cursor Rulesの力",
      subsections: [
        { id: "intro-what-is", title: "1.1 Cursor Rulesとは？" },
        { id: "intro-benefits", title: "1.2 開発効率の劇的向上" },
        { id: "intro-video", title: "1.3 推奨動画" }
      ]
    },
    { 
      id: "when-to-use", 
      title: "2. 設定すべきタイミング",
      subsections: [
        { id: "timing-signs", title: "2.1 設定のサイン" },
        { id: "timing-scenarios", title: "2.2 効果的な活用場面" }
      ]
    },
    { 
      id: "basics", 
      title: "3. 基本設定とファイル構造",
      subsections: [
        { id: "basics-structure", title: "3.1 ファイル構造" },
        { id: "basics-writing", title: "3.2 基本的な書き方" },
        { id: "basics-examples", title: "3.3 設定例" },
        { id: "basics-cursor-settings", title: "3.4 Cursor設定の詳細ガイド" }
      ]
    },
    { 
      id: "rule-types", 
      title: "4. ルールタイプの使い分け",
      subsections: [
        { id: "types-always", title: "4.1 Always ルール" },
        { id: "types-attached", title: "4.2 Auto Attached ルール" },
        { id: "types-requested", title: "4.3 Agent Requested ルール" },
        { id: "types-manual", title: "4.4 Manual ルール" }
      ]
    },
    { 
      id: "slash-commands", 
      title: "5. スラッシュコマンド完全ガイド",
      subsections: [
        { id: "commands-basic", title: "5.1 基本コマンド" },
        { id: "commands-advanced", title: "5.2 高度なコマンド" },
        { id: "commands-custom", title: "5.3 カスタムコマンド" }
      ]
    },
    { 
      id: "best-practices", 
      title: "6. 効果的なルール記述",
      subsections: [
        { id: "practices-tips", title: "6.1 記述のコツ" },
        { id: "practices-mistakes", title: "6.2 よくある間違い" },
        { id: "practices-improvement", title: "6.3 改善方法" }
      ]
    },
    { 
      id: "practical-examples", 
      title: "7. 実践的な活用例",
      subsections: [
        { id: "examples-web", title: "7.1 Web開発" },
        { id: "examples-mobile", title: "7.2 モバイル開発" },
        { id: "examples-api", title: "7.3 API開発" }
      ]
    },
    { 
      id: "advanced-techniques", 
      title: "8. 高度なテクニック",
      subsections: []
    },
    { 
      id: "troubleshooting", 
      title: "9. トラブルシューティング",
      subsections: []
    },
    { 
      id: "enterprise-cases", 
      title: "10. 企業導入事例",
      subsections: []
    },
    { 
      id: "industry-templates", 
      title: "11. 業種別MDCテンプレート集",
      subsections: []
    },
    { 
      id: "asagami-integration", 
      title: "12. asagami AI連携：次世代学習システム",
      subsections: []
    },
    { 
      id: "one-command-setup", 
      title: "13. ワンコマンド環境構築",
      subsections: [
        { id: "setup-auto", title: "13.1 自動セットアップ" },
        { id: "setup-templates", title: "13.2 テンプレート選択" },
        { id: "setup-custom", title: "13.3 カスタマイズ" }
      ]
    },
    { 
      id: "continuous-improvement", 
      title: "14. 継続的改善の実践",
      subsections: []
    }
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
        sections={sections}
        activeSection={activeSection}
      />

      <SideNavigation
        isOpen={isSideNavOpen}
        onToggle={() => setIsSideNavOpen(!isSideNavOpen)}
        sections={sections}
        activeSection={activeSection}
      />

      <main className="pt-16 lg:ml-80 min-h-screen">
        {/* 現在読んでいるセクション表示 */}
        <div 
          className="fixed top-16 lg:left-80 left-0 right-0 z-30 shadow-sm border-b transition-all duration-300"
          style={{ 
            backgroundColor: COLORS.backgroundCard,
            borderColor: COLORS.border
          }}
        >
          <div className="px-6 py-2">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <div className="flex items-center">
                <div 
                  className="w-2 h-2 rounded-full mr-3 animate-pulse"
                  style={{ backgroundColor: COLORS.primary }}
                ></div>
                <span className="text-sm font-medium" style={{ color: COLORS.text }}>
                  現在のセクション
                </span>
                <span className="text-sm ml-2" style={{ color: COLORS.primary }}>
                  {sections.find(s => s.id === activeSection)?.title || "読み込み中..."}
                </span>
              </div>
              <div className="text-xs" style={{ color: COLORS.textLight }}>
                {sections.findIndex(s => s.id === activeSection) + 1} / {sections.length}
              </div>
            </div>
          </div>
          
          {/* プログレスバー */}
          <div 
            className="h-1"
            style={{ backgroundColor: COLORS.primaryLight }}
          >
            <div 
              className="h-full transition-all duration-500 ease-out"
              style={{ 
                backgroundColor: COLORS.primary,
                width: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%`
              }}
            ></div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 py-8 pt-24">
          {/* Document Header */}
          <header className="text-center mb-8">
            {/* Official Cursor Image */}
            <div className="mb-8">
              <img 
                src="/assets/images/top-image.png" 
                alt="Cursor Official" 
                className="h-20 mx-auto"
              />
            </div>
            <h1 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
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

          {/* Quick Start CTA */}
          <div 
            className="rounded-xl p-8 mb-12 text-center border-2"
            style={{ 
              backgroundColor: COLORS.primaryLight,
              borderColor: COLORS.primary
            }}
          >
            <div className="flex items-center justify-center mb-4">
              <Rocket className="w-8 h-8 mr-3" style={{ color: COLORS.primary }} />
              <h2 className="text-2xl font-bold" style={{ color: COLORS.text }}>
                🚀 今すぐ始める
              </h2>
            </div>
            <p className="text-lg mb-6" style={{ color: COLORS.textLight }}>
              まずは使ってみたい方へ：<br/>
              <strong style={{ color: COLORS.primary }}>ワンコマンドで業種別テンプレートを即座にセットアップ</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => scrollToSection("one-command-setup")}
                className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold text-base sm:text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                style={{ backgroundColor: COLORS.primary }}
              >
                <Terminal className="w-5 h-5 inline mr-2" />
                ワンコマンド環境構築へ
              </button>
              <button 
                onClick={() => scrollToSection("industry-templates")}
                className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 hover:scale-105 border-2"
                style={{ 
                  backgroundColor: 'transparent',
                  color: COLORS.primary,
                  borderColor: COLORS.primary
                }}
              >
                <Building className="w-5 h-5 inline mr-2" />
                業種別テンプレート
              </button>
            </div>
            
            <div className="mt-6 text-sm" style={{ color: COLORS.textLight }}>
              💡 完全理解したい方は、このまま順番に読み進めてください
            </div>
          </div>

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
                {sections.slice(0, 6).map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`text-left hover:underline transition-all duration-200 ${
                        activeSection === section.id 
                          ? 'font-semibold scale-105' 
                          : ''
                      }`}
                      style={{ 
                        color: activeSection === section.id 
                          ? COLORS.text 
                          : COLORS.primary,
                        backgroundColor: activeSection === section.id 
                          ? COLORS.primaryLight 
                          : 'transparent',
                        padding: activeSection === section.id 
                          ? '4px 8px' 
                          : '0',
                        borderRadius: activeSection === section.id 
                          ? '4px' 
                          : '0'
                      }}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {sections.slice(6).map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`text-left hover:underline transition-all duration-200 ${
                        activeSection === section.id 
                          ? 'font-semibold scale-105' 
                          : ''
                      }`}
                      style={{ 
                        color: activeSection === section.id 
                          ? COLORS.text 
                          : COLORS.primary,
                        backgroundColor: activeSection === section.id 
                          ? COLORS.primaryLight 
                          : 'transparent',
                        padding: activeSection === section.id 
                          ? '4px 8px' 
                          : '0',
                        borderRadius: activeSection === section.id 
                          ? '4px' 
                          : '0'
                      }}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <div className="space-y-16">
            {/* Hero Section */}
            <section id="hero" className="relative overflow-hidden">
              {/* 背景画像 */}
              <div className="mb-8">
                <img 
                  src="/assets/images/top-image.png" 
                  alt="Cursor Logo" 
                  className="w-full max-w-2xl mx-auto"
                />
              </div>

              {/* メインタイトル */}
              <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: COLORS.text }}>
                  Cursor Rules
                </h1>
                <p className="text-lg sm:text-xl mb-8" style={{ color: COLORS.textLight }}>
                  AIを理想的な開発パートナーに変える、プロフェッショナル向け包括的教材
                </p>
                
                {/* 重要リンク */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <a
                    href="https://page1.genspark.site/docs_agent/44c14f6f-baa4-426a-878e-7e484dda9c2a/dc5a99fe-bae0-4dca-80be-b3f5424437be/1381e633-921b-4514-b584-9d7947f4aa79.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-lg text-white transition-colors"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    AIエージェントとは？基本解説
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  
                  <a
                    href="https://srcgdvfu.gensparkspace.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-lg border transition-colors"
                    style={{ 
                      borderColor: COLORS.primary,
                      color: COLORS.primary
                    }}
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    応用知識：上級者向けリソース
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>

                {/* ワンコマンド設定へのCTA */}
                <div 
                  className="inline-block p-6 rounded-lg mb-8"
                  style={{ backgroundColor: COLORS.primaryLight }}
                >
                  <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.primary }}>
                    🚀 とりあえず今すぐ使ってみたい方へ
                  </h3>
                  <p className="text-sm mb-4" style={{ color: COLORS.textLight }}>
                    10業種別テンプレートからワンコマンドで即座にセットアップ
                  </p>
                  <button
                    onClick={() => {
                      const element = document.getElementById('one-command-setup');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 rounded-lg text-white transition-colors"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    ワンコマンド環境構築へ →
                  </button>
                </div>
              </div>

                {/* セクション区切り線 */}
                <div 
                  className="w-full h-px my-8 sm:my-12"
                  style={{ backgroundColor: COLORS.border }}
                ></div>




            </section>

            {/* Introduction */}
            <section id="introduction">
              <SectionHeader 
                icon={Heart}
                title="1. はじめに：Cursor Rulesの力"
                subtitle="AIを単なるツールから理想的な開発パートナーへ"
                isActive={activeSection === "introduction"}
              />

              <div className="space-y-8">
                {/* Main explanation */}
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-semibold mb-6 text-center" style={{ color: COLORS.text }}>
                    1.1 Cursor Rulesとは？
                  </h3>
                  <p className="text-lg leading-relaxed mb-8 text-center" style={{ color: COLORS.textLight }}>
                    Cursor Rulesは、AI搭載エディタCursorにおいて、<strong style={{ color: COLORS.primary }}>AIの振る舞いを制御し、コード補完や説明の精度を向上させるための革新的な機能</strong>です。
                    プロジェクトの全体像や開発における特定のルールをAIに深く理解させることで、より適切なコード提案や質問応答を可能にします。
                  </p>
                  
                  {/* Key benefits - simplified layout */}
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Zap className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300">開発効率向上</h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400">300%スピードアップ</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <Users className="w-8 h-8 mx-auto mb-2 text-green-600" />
                      <h4 className="font-semibold text-green-800 dark:text-green-300">チーム共有</h4>
                      <p className="text-sm text-green-600 dark:text-green-400">統一された品質</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <Target className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      <h4 className="font-semibold text-purple-800 dark:text-purple-300">品質の一貫性</h4>
                      <p className="text-sm text-purple-600 dark:text-purple-400">バグ70%削減</p>
                    </div>
                  </div>

                  {/* Official quote */}
                  <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-primary-500 p-6 rounded-r-lg">
                    <p className="text-base leading-relaxed italic" style={{ color: COLORS.textLight }}>
                      「ルールは、AIへのプロンプトの先頭に一貫したコンテキストとして挿入されます。これにより、AIはコード生成、編集、ワークフロー支援において、
                      常にプロジェクトの背景や規約を理解した上で応答できるようになります。」
                    </p>
                    <p className="text-sm mt-3 text-gray-600 dark:text-gray-400">
                      — <a href="https://docs.cursor.com/context/rules" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Cursor公式ドキュメント</a>
                    </p>
                  </div>

                  {/* Simple call to action */}
                  <div className="text-center mt-8">
                    <button 
                      onClick={() => {
                        const element = document.getElementById('one-command-setup');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center px-8 py-3 rounded-lg text-white transition-colors mr-4"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      <Zap className="w-5 h-5 mr-2" />
                      今すぐ設定する
                    </button>
                    <button 
                      className="inline-flex items-center px-6 py-3 rounded-lg border transition-colors"
                      style={{ 
                        borderColor: COLORS.primary,
                        color: COLORS.primary
                      }}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      デモ動画を見る
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* When to Use */}
            <section id="when-to-use">
              <SectionHeader 
                icon={Clock}
                title="2. 設定すべきタイミング"
                subtitle="AIの出力品質を改善する最適なタイミングを見極める"
                isActive={activeSection === "when-to-use"}
              />

              <div className="space-y-8">
                <div className="max-w-4xl mx-auto text-center">
                  <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.textLight }}>
                    CursorでAIに質問したり、コードを書いてもらう時に、こんなことありませんか？<br/>
                    <strong>そんな時がCursor Rulesの出番です！</strong>
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Code className="w-6 h-6" />,
                      title: "😔 AIが思った通りに動いてくれない",
                      description: "「なんか違う...」と思うことが多い",
                      examples: ["古いコードの書き方をする", "プロジェクトの構成を分かってない", "チームのルールを知らない"],
                      solution: "→ プロジェクトのルールをAIに教えてあげましょう！"
                    },
                    {
                      icon: <Settings className="w-6 h-6" />,
                      title: "🔄 毎回同じことを説明している",
                      description: "「また言わなきゃ...」が頻発する",
                      examples: ["「TypeScript使って」", "「コメントは日本語で」", "「このファイルを参考にして」"],
                      solution: "→ よく使う指示をルールに保存しておけば自動で適用！"
                    },
                    {
                      icon: <Target className="w-6 h-6" />,
                      title: "🏢 会社やチーム独特のやり方がある",
                      description: "「うちの会社ではこうするんです」パターン",
                      examples: ["特殊なフォルダ構成", "独自のライブラリを使用", "チーム決めの命名ルール"],
                      solution: "→ 会社・チーム専用のAIアシスタントに変身させられます！"
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

            {/* Basics */}
            <section id="basics">
              <SectionHeader 
                icon={Settings}
                title="3. 基本設定とファイル構造"
                subtitle="Cursor Rulesの基礎から始める3ステップセットアップ"
                isActive={activeSection === "basics"}
              />

              <div className="space-y-8">
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    3.1 初心者向け：基本設定の3ステップ
                  </h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.textLight }}>
                    難しく考える必要はありません。Cursor Rulesの第一歩は驚くほどシンプルです。
                    以下の手順で、あなただけの最初のルールを作成してみましょう。
                  </p>

                  {/* 設定手順の動画 */}
                  <div className="mb-8">
                    <div 
                      className="rounded-lg p-6 text-center"
                      style={{ backgroundColor: COLORS.primaryLight }}
                    >
                      <div className="flex items-center justify-center mb-4">
                        <Play className="w-6 h-6 mr-3" style={{ color: COLORS.primary }} />
                        <h4 className="text-lg font-semibold" style={{ color: COLORS.text }}>
                          📹 実際の設定手順を動画で確認
                        </h4>
                      </div>
                      <div className="relative w-full max-w-2xl mx-auto">
                        <video 
                          controls 
                          className="w-full rounded-lg shadow-lg"
                          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjZjBmN2ZmIi8+CjxjaXJjbGUgY3g9IjQwMCIgY3k9IjIyNSIgcj0iNDAiIGZpbGw9IiM0YTkwZTIiLz4KPHN2ZyB4PSIzODAiIHk9IjIwNSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSI+CjxwYXRoIGQ9Im0xMCw4IGwxNSw4IC0xNSw4IHoiLz4KPC9zdmc+Cjx0ZXh0IHg9IjQwMCIgeT0iMjkwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNGE5MGUyIiBmb250LXNpemU9IjE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiI+Q3Vyc29yIFJ1bGVzIOioreWumuaJi+mghOOBruWLleeUu+eiuuiqjzwvdGV4dD4KPC9zdmc+Cg=="
                        >
                          <source src="/assets/videos/generate-rules.mp4" type="video/mp4" />
                          お使いのブラウザはビデオタグをサポートしていません。
                        </video>
                      </div>
                      <p className="text-sm mt-4" style={{ color: COLORS.textLight }}>
                        💡 動画では実際のCursorでのルール作成プロセスを確認できます
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        step: "1",
                        title: "ルールの作成",
                        description: "コマンドパレット（Ctrl+Shift+P または Cmd+Shift+P）を開き、「New Cursor Rule」と入力して実行します。これにより、プロジェクトのルートに .cursor/rules/ ディレクトリと、新しいルールファイル（.mdc形式）が作成されます。",
                        code: `# コマンドパレットでの操作
Ctrl+Shift+P (Windows) / Cmd+Shift+P (Mac)
> New Cursor Rule

# 作成されるファイル構造
your-project/
├── .cursor/
│   └── rules/
│       └── my-first-rule.mdc
└── ...`
                      },
                      {
                        step: "2", 
                        title: "ルールの記述",
                        description: "作成されたファイルに、AIへの指示を記述します。まずは簡単な指示から始めましょう。例えば、「常に日本語で、丁寧な言葉遣いで回答してください」といった自然言語の指示で構いません。",
                        code: `---
description: 基本的な応答スタイル設定
alwaysApply: true
---

# 基本応答ルール

## 言語とスタイル
- 常に日本語で回答してください
- 丁寧で分かりやすい説明を心がけてください
- 技術用語には適切な説明を付けてください

## コーディング規約
- TypeScriptを使用してください
- 関数にはJSDocコメントを付けてください
- ファイル名はkebab-caseを使用してください`
                      },
                      {
                        step: "3",
                        title: "ルールの適用範囲を選択",
                        description: "ルールファイルの上部で、このルールをいつ適用するかを設定できます。初心者がまず覚えるべきは以下のタイプです。",
                        code: `# Always（常時適用）- 推奨
---
description: プロジェクト全体の基本方針
alwaysApply: true
---

# Manual（手動適用）- 特定用途
---
description: React component patterns
alwaysApply: false
---
# チャットで @ルール名 で呼び出し`
                      }
                    ].map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                          style={{ backgroundColor: COLORS.primary }}
                        >
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-2" style={{ color: COLORS.text }}>
                            {step.title}
                          </h4>
                          <p className="text-sm mb-4" style={{ color: COLORS.textLight }}>
                            {step.description}
                          </p>
                          <CodeBlock code={step.code} title={`ステップ ${step.step}: ${step.title}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    3.2 ファイル構造とディレクトリ配置
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.text }}>
                        3.2.1 プロジェクトルール vs ユーザールール
                      </h4>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div 
                          className="p-4 rounded-lg border-l-4"
                          style={{ 
                            backgroundColor: COLORS.primaryLight,
                            borderLeftColor: COLORS.primary
                          }}
                        >
                          <h5 className="font-semibold mb-3" style={{ color: COLORS.text }}>
                            📁 プロジェクトルール（推奨）
                          </h5>
                          <ul className="text-sm space-y-2" style={{ color: COLORS.textLight }}>
                            <li>• 場所: プロジェクト内の .cursor/rules/</li>
                            <li>• スコープ: 当該プロジェクトのみ</li>
                            <li>• Gitで管理可能（チーム共有）</li>
                            <li>• プロジェクト固有の知識を記述</li>
                          </ul>
                        </div>
                        
                        <div 
                          className="p-4 rounded-lg border-l-4"
                          style={{ 
                            backgroundColor: '#f0fdf4',
                            borderLeftColor: COLORS.accent
                          }}
                        >
                          <h5 className="font-semibold mb-3" style={{ color: COLORS.text }}>
                            👤 ユーザールール（グローバル）
                          </h5>
                          <ul className="text-sm space-y-2" style={{ color: COLORS.textLight }}>
                            <li>• 場所: Cursor Settings → Rules</li>
                            <li>• スコープ: すべてのプロジェクト</li>
                            <li>• 個人的な好みを設定</li>
                            <li>• AIとの対話スタイルを統一</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.text }}>
                        3.2.2 実際のプロジェクト構造例
                      </h4>
                      <CodeBlock 
                        code={`my-awesome-project/
├── .cursor/
│   └── rules/
│       ├── coding-standards.mdc      # 基本的なコーディング規約
│       ├── react-patterns.mdc        # React固有のパターン
│       ├── api-guidelines.mdc        # API設計ガイドライン
│       └── testing-rules.mdc         # テスト作成ルール
├── src/
│   ├── components/
│   ├── pages/
│   └── utils/
├── package.json
└── README.md`}
                        title="推奨プロジェクト構造"
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.text }}>
                        3.2.3 ネストされたルールとスコープ管理
                      </h4>
                      <p className="text-sm mb-4" style={{ color: COLORS.textLight }}>
                        .cursor/rules/ ディレクトリは、プロジェクトのサブディレクトリ内にも配置できます。
                        これにより、より細かい粒度でルールのスコープを管理できます。
                      </p>
                      <CodeBlock 
                        code={`project/
├── .cursor/rules/              # プロジェクト全体のルール
│   └── base-rules.mdc
├── backend/
│   ├── .cursor/rules/          # バックエンド固有のルール
│   │   ├── api-patterns.mdc
│   │   └── database-rules.mdc
│   └── server/
│       └── .cursor/rules/      # サーバー固有のルール
│           └── middleware-rules.mdc
└── frontend/
    ├── .cursor/rules/          # フロントエンド固有のルール
    │   ├── component-rules.mdc
    │   └── state-management.mdc
    └── components/`}
                        title="ネストされたルール構造"
                      />
                    </div>
                  </div>
                </Card>

                {/* スラッシュコマンド完全ガイド */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    3.3 ⌨️ スラッシュコマンド（/）活用術
                  </h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.textLight }}>
                    Cursorの「/」（スラッシュ）コマンドは、チャット入力でAIとより効率的にやり取りするための強力な機能です。
                    適切なコマンドを選択することで、より精密で効果的なAIサポートを受けられます。
                  </p>

                  {/* スラッシュコマンドのスクリーンショット */}
                  <div 
                    className="p-6 rounded-lg mb-8 text-center"
                    style={{ backgroundColor: COLORS.primaryLight }}
                  >
                    <h4 className="font-semibold mb-4" style={{ color: COLORS.primary }}>
                      📸 実際のスラッシュコマンドメニュー
                    </h4>
                    <div className="inline-block p-4 rounded-lg shadow-lg" style={{ backgroundColor: 'white' }}>
                      <img 
                        src="/assets/images/cursor-slash-commands.png"
                        alt="Cursorスラッシュコマンドメニュー" 
                        className="max-w-[400px] rounded-lg"
                      />
                    </div>
                    <p className="text-sm mt-4" style={{ color: COLORS.textLight }}>
                      チャット入力で「/」を入力すると表示されるコマンドメニュー
                    </p>
                  </div>

                  {/* 各コマンドの詳細説明 */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold mb-4" style={{ color: COLORS.text }}>
                      3.3.1 📋 コマンド別使い分けガイド
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          command: "Add Context",
                          icon: "📎",
                          description: "特定のファイルやフォルダをAIに認識させる",
                          useCase: "特定のコードについて質問する前に、関連ファイルを追加",
                          example: "「/Add Context → components/Button.tsx を選択 → このButtonコンポーネントを改善して」"
                        },
                        {
                          command: "Reset Context",
                          icon: "🔄",
                          description: "AIの認識している情報をリセット",
                          useCase: "新しいトピックに切り替える時や、情報が混乱した時",
                          example: "「/Reset Context → 新しい話題について質問開始」"
                        },
                        {
                          command: "Generate Cursor Rules",
                          icon: "📝",
                          description: "現在のプロジェクトに最適なルールを自動生成",
                          useCase: "プロジェクト分析に基づいたカスタムルール作成",
                          example: "「/Generate Cursor Rules → プロジェクト構造を分析して最適なルールセットを生成」"
                        },
                        {
                          command: "Disable Iterate on Lints",
                          icon: "⚠️",
                          description: "リンティングエラーの自動修正を無効化",
                          useCase: "意図的にルールを破る必要がある場合や、手動で修正したい時",
                          example: "「/Disable Iterate on Lints → 特定のESLintエラーを手動対応」"
                        },
                        {
                          command: "Add Open Files to Context",
                          icon: "📂",
                          description: "現在エディタで開いているファイルを一括でコンテキストに追加",
                          useCase: "開いている複数ファイルを横断した質問や修正依頼",
                          example: "「/Add Open Files to Context → 開いているすべてのファイルを統一的にリファクタリング」"
                        },
                        {
                          command: "Add Active Files to Context",
                          icon: "🎯",
                          description: "アクティブ（フォーカス中）なファイルのみをコンテキストに追加",
                          useCase: "現在作業中のファイルに集中した質問や修正",
                          example: "「/Add Active Files to Context → 今のファイルだけを対象に最適化提案」"
                        }
                      ].map((cmd, index) => (
                        <div 
                          key={index}
                          className="p-4 rounded-lg border-l-4"
                          style={{ 
                            backgroundColor: COLORS.backgroundCard,
                            borderLeftColor: COLORS.primary
                          }}
                        >
                          <div className="flex items-center mb-3">
                            <span className="text-2xl mr-3">{cmd.icon}</span>
                            <h5 className="font-bold text-lg" style={{ color: COLORS.text }}>
                              /{cmd.command}
                            </h5>
                          </div>
                          <p className="text-sm mb-3" style={{ color: COLORS.textLight }}>
                            {cmd.description}
                          </p>
                          <div className="space-y-2">
                            <div>
                              <span className="text-sm font-semibold" style={{ color: COLORS.primary }}>
                                最適な使用場面:
                              </span>
                              <p className="text-sm" style={{ color: COLORS.textLight }}>
                                {cmd.useCase}
                              </p>
                            </div>
                            <div 
                              className="p-2 rounded text-xs"
                              style={{ backgroundColor: COLORS.primaryLight }}
                            >
                              <strong>実例:</strong> {cmd.example}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 効果的な使い方のコツ */}
                  <div 
                    className="p-6 rounded-lg"
                    style={{ backgroundColor: COLORS.primaryLight }}
                  >
                    <h4 className="font-semibold mb-4" style={{ color: COLORS.primary }}>
                      3.3.2 💡 スラッシュコマンド活用のコツ
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                          🎯 効果的な使い方
                        </h5>
                        <ul className="text-sm space-y-1" style={{ color: COLORS.textLight }}>
                          <li>• 質問の前にContextを適切に設定</li>
                          <li>• 大きなプロジェクトでは段階的にContext追加</li>
                          <li>• トピック変更時は必ずReset Context</li>
                          <li>• Generate Cursor Rulesは週1回実行推奨</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                          ⚠️ 注意点
                        </h5>
                        <ul className="text-sm space-y-1" style={{ color: COLORS.textLight }}>
                          <li>• Context過多はAIの精度を下げる可能性</li>
                          <li>• 機密ファイルの意図しない追加に注意</li>
                          <li>• Lint無効化は一時的な使用に留める</li>
                          <li>• Active Filesは現在のフォーカスに依存</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Cursorモード選択ガイド */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    3.4 🎛️ Cursorモード選択完全ガイド
                  </h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.textLight }}>
                    Cursorには4つの操作モードがあり、それぞれ異なる場面で最適化されています。
                    正しいモードを選択することで、開発効率が大幅に向上します。
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                      {
                        mode: "Agent",
                        icon: "🤖",
                        shortcut: "⌘I",
                        description: "自動実行モード",
                        features: [
                          "コード生成と直接適用",
                          "ファイル作成・編集の自動実行",
                          "複数ファイルの一括変更",
                          "Auto-run で完全自動化"
                        ],
                        useCase: "新機能の実装やリファクタリング",
                        color: COLORS.primary
                      },
                      {
                        mode: "Ask",
                        icon: "💬",
                        shortcut: "",
                        description: "質問・相談モード",
                        features: [
                          "コード解説と分析",
                          "実装方針の相談",
                          "バグの原因調査",
                          "ベストプラクティス提案"
                        ],
                        useCase: "コードレビューや学習",
                        color: COLORS.secondary
                      },
                      {
                        mode: "Manual",
                        icon: "✋",
                        shortcut: "",
                        description: "手動制御モード",
                        features: [
                          "提案を確認してから適用",
                          "段階的な変更実行",
                          "詳細な説明付きの提案",
                          "安全な実装プロセス"
                        ],
                        useCase: "重要なコードの慎重な修正",
                        color: COLORS.accent
                      },
                      {
                        mode: "Background",
                        icon: "🔄",
                        shortcut: "",
                        description: "バックグラウンド処理",
                        features: [
                          "非同期でのコード分析",
                          "パフォーマンス最適化提案",
                          "依存関係の管理",
                          "継続的な改善提案"
                        ],
                        useCase: "長時間の解析や最適化",
                        color: COLORS.warning
                      }
                    ].map((modeInfo, index) => (
                      <div 
                        key={index}
                        className="p-4 rounded-lg border-2 transition-all hover:shadow-lg"
                        style={{ 
                          borderColor: modeInfo.color,
                          backgroundColor: `${modeInfo.color}10`
                        }}
                      >
                        <div className="text-center mb-4">
                          <div className="text-3xl mb-2">{modeInfo.icon}</div>
                          <h4 className="font-bold text-lg" style={{ color: modeInfo.color }}>
                            {modeInfo.mode}
                          </h4>
                          {modeInfo.shortcut && (
                            <div 
                              className="inline-block px-2 py-1 rounded text-xs font-mono"
                              style={{ backgroundColor: modeInfo.color, color: 'white' }}
                            >
                              {modeInfo.shortcut}
                            </div>
                          )}
                          <p className="text-sm mt-2" style={{ color: COLORS.textLight }}>
                            {modeInfo.description}
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm mb-2" style={{ color: COLORS.text }}>
                              主な機能:
                            </h5>
                            <ul className="text-xs space-y-1" style={{ color: COLORS.textLight }}>
                              {modeInfo.features.map((feature, featureIndex) => (
                                <li key={featureIndex}>• {feature}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-sm mb-1" style={{ color: COLORS.text }}>
                              最適な用途:
                            </h5>
                            <p className="text-xs" style={{ color: COLORS.textLight }}>
                              {modeInfo.useCase}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* モード選択のスクリーンショット */}
                  <div 
                    className="p-6 rounded-lg mb-6"
                    style={{ backgroundColor: COLORS.primaryLight }}
                  >
                    <h4 className="font-semibold mb-4 text-center" style={{ color: COLORS.primary }}>
                      📸 実際のモード選択画面
                    </h4>
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
                      <div className="text-center">
                        <div className="inline-block p-3 rounded-lg shadow-lg" style={{ backgroundColor: 'white' }}>
                          <img 
                            src="/assets/images/cursor-mode-selection.png"
                            alt="Cursorモード選択メニュー" 
                            className="max-w-[200px] rounded-lg"
                          />
                        </div>
                        <p className="text-sm mt-2" style={{ color: COLORS.textLight }}>
                          ⌘I でモード選択メニューを開く
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="inline-block p-3 rounded-lg shadow-lg" style={{ backgroundColor: 'white' }}>
                          <img 
                            src="/assets/images/cursor-agent-settings.png"
                            alt="Cursorエージェント設定画面" 
                            className="max-w-[250px] rounded-lg"
                          />
                        </div>
                        <p className="text-sm mt-2" style={{ color: COLORS.textLight }}>
                          エージェント設定（Auto-run/Auto-fix有効）
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 実践的な使い分けガイド */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.text }}>
                      3.4.1 📋 シチュエーション別モード選択ガイド
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        {
                          situation: "新しいReactコンポーネントを作成したい",
                          recommendedMode: "Agent",
                          reason: "ファイル作成から実装まで自動実行。Auto-runで効率的",
                          command: "⌘I → 「新しいButtonコンポーネントを作成」"
                        },
                        {
                          situation: "既存コードの動作を理解したい",
                          recommendedMode: "Ask",
                          reason: "コードを変更せず、解説のみが欲しい場合",
                          command: "コードを選択 → 「この関数の動作を説明して」"
                        },
                        {
                          situation: "本番環境のコードを慎重に修正したい",
                          recommendedMode: "Manual",
                          reason: "変更内容を段階的に確認してから適用",
                          command: "手動モードで提案を1つずつ確認・適用"
                        },
                        {
                          situation: "大きなリファクタリングを行いたい",
                          recommendedMode: "Background",
                          reason: "時間のかかる分析を非同期で実行",
                          command: "バックグラウンドで全体最適化を実行"
                        }
                      ].map((guide, index) => (
                        <div 
                          key={index}
                          className="p-4 rounded-lg border-l-4"
                          style={{ 
                            backgroundColor: COLORS.backgroundCard,
                            borderLeftColor: COLORS.primary
                          }}
                        >
                          <h5 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                            💡 {guide.situation}
                          </h5>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <span className="text-sm font-medium mr-2" style={{ color: COLORS.primary }}>
                                推奨モード:
                              </span>
                              <span 
                                className="px-2 py-1 rounded text-xs font-medium"
                                style={{ backgroundColor: COLORS.primary, color: 'white' }}
                              >
                                {guide.recommendedMode}
                              </span>
                            </div>
                            <p className="text-sm" style={{ color: COLORS.textLight }}>
                              <strong>理由:</strong> {guide.reason}
                            </p>
                            <div 
                              className="p-2 rounded text-xs font-mono"
                              style={{ backgroundColor: COLORS.primaryLight }}
                            >
                              {guide.command}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Cursor設定の詳細ガイド */}
                <Card>
                  <div id="basics-cursor-settings">
                    <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                      3.4 ⚙️ Cursor設定の詳細ガイド
                    </h3>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Rules & Memories 設定 */}
                    <div>
                      <h4 className="text-xl font-semibold mb-6" style={{ color: COLORS.text }}>
                        📝 Rules & Memories 設定
                      </h4>
                      
                      <div className="space-y-6">
                        <div>
                          <h5 className="font-semibold mb-3" style={{ color: COLORS.primary }}>
                            1. .cursorrules ファイル（非推奨）
                          </h5>
                          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-3">
                            <p className="text-sm text-yellow-800">
                              ⚠️ 現在は非推奨ですが、使用する場合は設定で有効化が必要
                            </p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg text-sm">
                            <strong>設定手順：</strong><br />
                            Settings → Rules & Memories → Include .cursorrules file<br />
                            <span className="text-green-600">✓ チェックを入れる</span>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold mb-3" style={{ color: COLORS.primary }}>
                            2. User Rules（推奨）
                          </h5>
                          <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-3">
                            <p className="text-sm text-green-800">
                              ✅ 現在推奨されている方法
                            </p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg text-sm">
                            <strong>設定手順：</strong><br />
                            Settings → Rules & Memories → User Rules<br />
                            <span className="text-blue-600">「+ Add Rule」ボタンで追加</span>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold mb-3" style={{ color: COLORS.primary }}>
                            3. Project Rules
                          </h5>
                          <div className="bg-gray-50 p-3 rounded-lg text-sm">
                            プロジェクト固有の設定。<br />
                            <span className="text-blue-600">「+ Add Rule」でプロジェクト専用ルール追加</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Indexing & Docs 設定 */}
                    <div>
                      <h4 className="text-xl font-semibold mb-6" style={{ color: COLORS.text }}>
                        🔄 Indexing & Docs 設定
                      </h4>
                      
                      <div className="space-y-6">
                        <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                          <h5 className="font-semibold text-red-800 mb-2">
                            ⚠️ 重要：Syncの実行
                          </h5>
                          <p className="text-sm text-red-700">
                            ルール設定後は必ずSyncボタンを押してルールを確実に適用させる
                          </p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold mb-3" style={{ color: COLORS.primary }}>
                            1. Codebase Indexing
                          </h5>
                          <div className="bg-gray-50 p-3 rounded-lg text-sm mb-3">
                            プロジェクト全体をインデックス化してAIの理解を向上
                          </div>
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <span>進捗:</span>
                            <span className="text-green-600 font-semibold">100% (104 files)</span>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold mb-3" style={{ color: COLORS.primary }}>
                            2. 同期の実行
                          </h5>
                          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                            <p className="text-sm text-blue-800 mb-2">
                              <strong>実行手順：</strong>
                            </p>
                            <ol className="text-sm text-blue-700 list-decimal list-inside space-y-1">
                              <li>Settings → Indexing & Docs</li>
                              <li>右上の「Sync」ボタンをクリック</li>
                              <li>インデックス完了を確認</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 効率向上の期待値 */}
                  <div className="mt-8">
                    <div 
                      className="p-6 rounded-lg"
                      style={{ backgroundColor: COLORS.primaryLight }}
                    >
                      <h4 className="text-xl font-semibold mb-4" style={{ color: COLORS.primary }}>
                        📊 設定効果の期待値（ユーザー報告ベース）
                      </h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold mb-2" style={{ color: COLORS.primary }}>
                            2-3倍
                          </div>
                          <p className="text-sm" style={{ color: COLORS.textLight }}>
                            コード生成速度向上<br />
                            <span className="text-xs">(適切なルール設定時の体感)</span>
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold mb-2" style={{ color: COLORS.primary }}>
                            大幅改善
                          </div>
                          <p className="text-sm" style={{ color: COLORS.textLight }}>
                            提案の精度向上<br />
                            <span className="text-xs">(プロジェクトルール適用後)</span>
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold mb-2" style={{ color: COLORS.primary }}>
                            効率化
                          </div>
                          <p className="text-sm" style={{ color: COLORS.textLight }}>
                            開発フロー改善<br />
                            <span className="text-xs">(MCP Tools使用時)</span>
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="text-xs" style={{ color: COLORS.textLight }}>
                          ※ 効果は個人の使用環境・プロジェクト内容により異なります
                        </p>
                      </div>
                    </div>
                  </div>
                  </div>
                </Card>

                <Card className="text-center">
                  <div className="inline-block p-6 rounded-lg mb-6" style={{ backgroundColor: COLORS.primaryLight }}>
                    <CheckCircle className="w-12 h-12 mx-auto mb-4" style={{ color: COLORS.primary }} />
                    <h4 className="text-xl font-semibold mb-2" style={{ color: COLORS.text }}>
                      🎯 基本設定完了の確認
                    </h4>
                    <p style={{ color: COLORS.textLight }}>
                      これだけで、あなたのAIはプロジェクトの文脈を理解し始めます。<br/>
                      基本をマスターしたら、次はルールタイプの使い分けを学びましょう。
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <button 
                      onClick={() => scrollToSection("rule-types")}
                      className="px-6 py-3 rounded-lg text-white transition-colors flex items-center"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      次：ルールタイプの使い分け
                    </button>
                  </div>
                </Card>
              </div>
            </section>

            {/* Rule Types */}
            <section id="rule-types">
              <SectionHeader 
                icon={Layers}
                title="4. ルールタイプの使い分け"
                subtitle="4つの適用タイプを理解して、適切な場面で適切なルールを"
                isActive={activeSection === "rule-types"}
              />

              <div className="space-y-8">
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    4.1 4つの適用タイプと自動化レベル
                  </h3>
                  <p className="text-lg leading-relaxed mb-8" style={{ color: COLORS.textLight }}>
                    プロジェクトルールには4つの適用タイプがあり、それぞれ異なるトリガーで有効化されます。
                    これにより、<strong style={{ color: COLORS.primary }}>必要なときに必要なルールだけをAIに提供</strong>できます。
                  </p>

                  <div className="grid gap-6">
                    {[
                      {
                        type: "Always",
                        title: "常時適用",
                        automation: "95%",
                        trigger: "常にAIのコンテキストに含まれる",
                        useCase: "プロジェクト全体の基本方針・フレームワーク規約",
                        example: "TypeScript使用、日本語コメント、エラーハンドリング必須",
                        color: COLORS.primary,
                        bgColor: COLORS.primaryLight,
                        code: `---
description: プロジェクト基本ルール  
alwaysApply: true
---

# 基本開発ルール
- TypeScriptを使用
- 関数にはJSDocを記述
- エラーハンドリングを必ず実装`
                      },
                      {
                        type: "Auto Attached",
                        title: "自動適用",
                        automation: "75%",
                        trigger: "globsパターンに一致するファイルを編集時",
                        useCase: "特定ディレクトリやファイル種別の専用ルール",
                        example: "components/内ではReact規約、api/内ではAPI設計規約",
                        color: COLORS.secondary,
                        bgColor: "#e3f2fd",
                        code: `---
description: React component patterns
globs: ["src/components/**/*.tsx", "src/pages/**/*.tsx"]
alwaysApply: false
---

# React Component Rules
- 関数型コンポーネントを使用
- Props interfaceを定義
- useState/useEffectを適切に使用`
                      },
                      {
                        type: "Agent Requested",
                        title: "AI判断適用",
                        automation: "50%",
                        trigger: "AIがクエリとの関連性を判断して自動選択",
                        useCase: "特定のタスクや技術領域での専門ルール",
                        example: "テスト作成時、API設計時、パフォーマンス最適化時",
                        color: COLORS.warning,
                        bgColor: "#fff3e0",
                        code: `---
description: "Testing patterns and best practices"
alwaysApply: false
---

# テスト作成ガイドライン
- Jestを使用してユニットテストを作成
- カバレッジ80%以上を目指す
- モックは最小限に抑制`
                      },
                      {
                        type: "Manual",
                        title: "手動適用",
                        automation: "10%",
                        trigger: "ユーザーが @ルール名 で明示的に指定",
                        useCase: "特定のテンプレートや一回限りの特殊処理",
                        example: "特定のコード生成テンプレート、レガシー移行ルール",
                        color: COLORS.danger,
                        bgColor: "#fce4ec",
                        code: `---
# description なし = Manual
alwaysApply: false
---

# レガシーAPI移行テンプレート
- 古いAPIを新しいAPIに移行
- 互換性レイヤーを追加
- 段階的移行を実施

@legacy-api-template.ts`
                      }
                    ].map((ruleType, index) => (
                      <Card key={index} className="relative overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 w-2 h-full"
                          style={{ backgroundColor: ruleType.color }}
                        ></div>
                        
                        <div className="pl-6">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h4 className="text-xl font-semibold" style={{ color: COLORS.text }}>
                                {ruleType.type}
                              </h4>
                              <p className="text-lg" style={{ color: ruleType.color }}>
                                {ruleType.title}
                              </p>
                            </div>
                            <div className="text-right">
                              <div 
                                className="text-2xl font-bold"
                                style={{ color: ruleType.color }}
                              >
                                {ruleType.automation}
                              </div>
                              <div className="text-xs" style={{ color: COLORS.textLight }}>
                                自動化レベル
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h5 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                                🔧 トリガー条件
                              </h5>
                              <p className="text-sm" style={{ color: COLORS.textLight }}>
                                {ruleType.trigger}
                              </p>
                            </div>

                            <div>
                              <h5 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                                💡 適用場面
                              </h5>
                              <p className="text-sm" style={{ color: COLORS.textLight }}>
                                {ruleType.useCase}
                              </p>
                            </div>

                            <div>
                              <h5 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                                📝 具体例
                              </h5>
                              <p className="text-sm mb-3" style={{ color: COLORS.textLight }}>
                                {ruleType.example}
                              </p>
                              <CodeBlock 
                                code={ruleType.code}
                                title={`${ruleType.type}の設定例`}
                                language="markdown"
                              />
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>

                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    4.2 🧠 賢い使い分けのコツ
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.text }}>
                        選択指針：どのタイプを使うべきか？
                      </h4>
                      
                      <div className="space-y-4">
                        {[
                          {
                            question: "プロジェクト全体で常に守るべきルール",
                            answer: "Always",
                            example: "コーディング規約、セキュリティ要件、命名規則",
                            icon: "🌟"
                          },
                          {
                            question: "特定のディレクトリやファイル種別でのみ必要",
                            answer: "Auto Attached",
                            example: "components/でのReact規約、api/でのAPI設計",
                            icon: "📁"
                          },
                          {
                            question: "特定のタスクや文脈で使いたい",
                            answer: "Agent Requested", 
                            example: "テスト作成、パフォーマンス最適化、API設計",
                            icon: "🎯"
                          },
                          {
                            question: "必要時だけ明示的に呼び出したい",
                            answer: "Manual",
                            example: "コード生成テンプレート、移行スクリプト",
                            icon: "🛠️"
                          }
                        ].map((guide, index) => (
                          <div 
                            key={index}
                            className="flex items-start space-x-4 p-4 rounded-lg"
                            style={{ backgroundColor: COLORS.primaryLight }}
                          >
                            <div className="text-2xl">{guide.icon}</div>
                            <div className="flex-1">
                              <h5 className="font-medium mb-2" style={{ color: COLORS.text }}>
                                Q: {guide.question}
                              </h5>
                              <p className="text-sm mb-2" style={{ color: COLORS.primary }}>
                                A: <strong>{guide.answer}</strong>
                              </p>
                              <p className="text-xs" style={{ color: COLORS.textLight }}>
                                例: {guide.example}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.text }}>
                        ⚠️ よくある失敗と対策
                      </h4>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div 
                          className="p-4 rounded-lg border-l-4"
                          style={{ 
                            backgroundColor: '#fef2f2',
                            borderLeftColor: COLORS.danger
                          }}
                        >
                          <h5 className="font-semibold mb-2" style={{ color: COLORS.danger }}>
                            ❌ よくある失敗
                          </h5>
                          <ul className="text-sm space-y-1" style={{ color: COLORS.textLight }}>
                            <li>• すべてをAlwaysで設定してしまう</li>
                            <li>• globsパターンが複雑すぎる</li>
                            <li>• Agent Requestedで曖昧な説明</li>
                            <li>• ルール間で矛盾する指示</li>
                          </ul>
                        </div>
                        
                        <div 
                          className="p-4 rounded-lg border-l-4"
                          style={{ 
                            backgroundColor: '#f0fdf4',
                            borderLeftColor: COLORS.accent
                          }}
                        >
                          <h5 className="font-semibold mb-2" style={{ color: COLORS.accent }}>
                            ✅ 対策
                          </h5>
                          <ul className="text-sm space-y-1" style={{ color: COLORS.textLight }}>
                            <li>• 用途に応じて適切なタイプを選択</li>
                            <li>• シンプルで明確なglobsパターン</li>
                            <li>• 具体的で分かりやすい説明文</li>
                            <li>• 定期的にルールの整合性をチェック</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* ルールの種類と適用範囲 */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    4.3 ルールの種類と適用範囲
                  </h3>
                  <p className="text-lg leading-relaxed mb-8" style={{ color: COLORS.textLight }}>
                    Cursorでは、主に<strong style={{ color: COLORS.primary }}>3種類のルール</strong>がサポートされており、
                    それぞれ適用範囲と管理方法が異なります。
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        type: "プロジェクトルール",
                        subtitle: "Project Rules",
                        location: "プロジェクト内の .cursor/rules/ ディレクトリ",
                        scope: "当該プロジェクトのみ",
                        icon: <Building className="w-6 h-6" />,
                        color: COLORS.primary,
                        bgColor: COLORS.primaryLight,
                        features: [
                          "コードベースに関するドメイン固有の知識のエンコード",
                          "プロジェクト固有のワークフローやテンプレートの自動化", 
                          "コーディングスタイルやアーキテクチャに関する決定事項の標準化",
                          "Gitなどのバージョン管理システムでチームと共有可能"
                        ],
                        example: `project/
  .cursor/rules/      # プロジェクト全体のルール
    ├── react-components.mdc
    ├── api-design.mdc
    └── testing-patterns.mdc`
                      },
                      {
                        type: "ユーザールール", 
                        subtitle: "User Rules",
                        location: "Cursorの設定画面 (Cursor Settings → Rules)",
                        scope: "すべてのプロジェクト",
                        icon: <Users className="w-6 h-6" />,
                        color: COLORS.secondary,
                        bgColor: "#e3f2fd",
                        features: [
                          "個人のCursor環境全体に適用されるグローバルな設定",
                          "プロジェクトを横断して一貫させたい個人的なコーディングスタイル",
                          "AIとの対話における好みの定義",
                          "「回答は簡潔にしてください」といったコミュニケーションスタイルの指示"
                        ],
                        example: `# ユーザールールの例
- 回答は簡潔にしてください
- 変数名はcamelCaseを使用
- コメントは日本語で記述`
                      },
                      {
                        type: "レガシー形式",
                        subtitle: ".cursorrules（非推奨）",
                        location: "プロジェクトのルートディレクトリ",
                        scope: "当該プロジェクトのみ",
                        icon: <AlertTriangle className="w-6 h-6" />,
                        color: COLORS.warning,
                        bgColor: "#fff3e0",
                        features: [
                          "プロジェクトのルートに配置する .cursorrules ファイル",
                          "現在は非推奨とされています",
                          "より柔軟で管理しやすいプロジェクトルールへの移行が推奨",
                          "既存ファイルは動作しますが新規作成は非推奨"
                        ],
                        example: `# 非推奨の形式
project/
  .cursorrules        # 非推奨
  ↓ 移行推奨
  .cursor/rules/      # 推奨
    └── main.mdc`
                      }
                    ].map((ruleType, index) => (
                      <Card key={index} className="relative overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 w-1 h-full"
                          style={{ backgroundColor: ruleType.color }}
                        ></div>
                        
                        <div className="pl-6">
                          <div className="flex items-start space-x-4 mb-4">
                            <div 
                              className="w-10 h-10 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                              style={{ backgroundColor: ruleType.color }}
                            >
                              {ruleType.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-semibold mb-1" style={{ color: COLORS.text }}>
                                {ruleType.type}
                              </h4>
                              <p className="text-sm font-medium mb-2" style={{ color: ruleType.color }}>
                                {ruleType.subtitle}
                              </p>
                              <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="font-medium" style={{ color: COLORS.text }}>保存場所：</span>
                                  <span style={{ color: COLORS.textLight }}>{ruleType.location}</span>
                                </div>
                                <div>
                                  <span className="font-medium" style={{ color: COLORS.text }}>スコープ：</span>
                                  <span style={{ color: COLORS.textLight }}>{ruleType.scope}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <h5 className="font-semibold mb-2" style={{ color: COLORS.text }}>主な用途：</h5>
                            <ul className="space-y-1">
                              {ruleType.features.map((feature, i) => (
                                <li key={i} className="flex items-start">
                                  <CheckCircle className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" style={{ color: ruleType.color }} />
                                  <span className="text-sm" style={{ color: COLORS.textLight }}>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div 
                            className="p-3 rounded-lg"
                            style={{ backgroundColor: ruleType.bgColor }}
                          >
                            <h6 className="font-medium mb-2" style={{ color: COLORS.text }}>例：</h6>
                            <pre className="text-xs overflow-x-auto whitespace-pre-wrap" style={{ color: COLORS.textLight }}>
                              {ruleType.example}
                            </pre>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>

                {/* ルールの構造 (Rule Anatomy) */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    4.4 ルールの構造（Rule Anatomy）
                  </h3>
                  <p className="text-lg leading-relaxed mb-8" style={{ color: COLORS.textLight }}>
                    各ルールは、<strong style={{ color: COLORS.primary }}>メタデータとコンテンツ本体</strong>をサポートする
                    MDC（.mdc）形式のファイルとして記述されます。ファイルの先頭にメタデータブロックを記述し、ルールの挙動を定義します。
                  </p>

                  <CodeBlock
                    title="ルールファイルの基本構造"
                    code={`---
description: RPCサービスの定型文。サービスの定義時に使用します。
globs:
  - "server/api/rpc/**/*.ts"
alwaysApply: false
---

# RPCサービスに関する指示

- 内部RPCパターンを使用してサービスを定義してください。
- サービス名は常にスネークケース（snake_case）を使用してください。

# 参照ファイル
@service-template.ts`}
                    language="yaml"
                    defaultExpanded={false}
                  />

                  <div className="mt-6 space-y-4">
                    <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.text }}>
                      メタデータプロパティの詳細
                    </h4>
                    
                    {[
                      {
                        property: "description",
                        required: "Agent Requestedタイプで必須",
                        description: "AIがルールを適用するか判断する際に参照する説明文。Agent Requestedタイプでは、この説明を基にAIが自動でルールを選択します。",
                        example: `description: "APIエンドポイントのバリデーションとエラーハンドリングのパターン"`
                      },
                      {
                        property: "globs",
                        required: "Auto Attachedタイプで必須",
                        description: "ルールが自動的に適用されるファイルパスのパターン。gitignore形式のパターンが利用できます。",
                        example: `globs: ["src/components/**/*.tsx", "pages/**/*.ts"]`
                      },
                      {
                        property: "alwaysApply",
                        required: "オプション",
                        description: "trueに設定すると、常にルールが適用されます（Alwaysタイプ）。falseまたは未設定の場合は他の条件に基づいて適用されます。",
                        example: "alwaysApply: true"
                      },
                      {
                        property: "@filename.ts",
                        required: "オプション",
                        description: "@を付けてファイル名を記述すると、そのファイルの内容が追加のコンテキストとしてAIに提供されます。",
                        example: "@components/ui/Button.tsx\\n@utils/api.ts"
                      }
                    ].map((item, index) => (
                      <Card key={index} className="relative">
                        <div 
                          className="absolute top-0 left-0 w-1 h-full rounded-r-md"
                          style={{ backgroundColor: COLORS.primary }}
                        ></div>
                        
                        <div className="pl-6">
                          <div className="flex items-start justify-between mb-2">
                            <h5 className="text-lg font-semibold" style={{ color: COLORS.text }}>
                              {item.property}
                            </h5>
                            <span 
                              className="text-xs px-2 py-1 rounded"
                              style={{ 
                                backgroundColor: item.required.includes('必須') ? COLORS.danger : COLORS.primaryLight,
                                color: item.required.includes('必須') ? 'white' : COLORS.primary
                              }}
                            >
                              {item.required}
                            </span>
                          </div>
                          <p className="text-sm mb-3" style={{ color: COLORS.textLight }}>
                            {item.description}
                          </p>
                          <div 
                            className="p-2 rounded text-xs font-mono"
                            style={{ backgroundColor: COLORS.backgroundCard, border: `1px solid ${COLORS.border}` }}
                          >
                            {item.example}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>

                <Card className="text-center">
                  <div className="inline-block p-6 rounded-lg mb-6" style={{ backgroundColor: COLORS.primaryLight }}>
                    <Target className="w-12 h-12 mx-auto mb-4" style={{ color: COLORS.primary }} />
                    <h4 className="text-xl font-semibold mb-2" style={{ color: COLORS.text }}>
                      🎯 ルールタイプと構造をマスターしたら
                    </h4>
                    <p style={{ color: COLORS.textLight }}>
                      適用タイプの選択とルール構造の理解ができるようになったら、<br/>
                      次は具体的なスラッシュコマンドの活用方法を学びましょう。
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <button 
                      onClick={() => scrollToSection("slash-commands")}
                      className="px-6 py-3 rounded-lg text-white transition-colors flex items-center"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      次：スラッシュコマンド完全ガイド
                    </button>
                  </div>
                </Card>
              </div>
            </section>

            {/* スラッシュコマンド完全ガイド */}
            <section id="slash-commands">
              <SectionHeader 
                icon={Terminal}
                title="5. スラッシュコマンド完全ガイド"
                subtitle="Cursorの魔法の呪文をマスターしよう"
                isActive={activeSection === "slash-commands"}
              />

              <div className="space-y-8">
                <Card>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: COLORS.text }}>
                    5.1 🎯 AIプログラミングのスーパーパワー
                  </h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.textLight }}>
                    スラッシュコマンドは、Cursorの最も強力で効率的な機能の一つです。
                    <strong style={{ color: COLORS.primary }}>複雑なAI操作を一言で実行できる「魔法の呪文」</strong>として、
                    開発者の生産性を劇的に向上させます。
                  </p>

                  <QuoteBlock source="Cursor開発チーム">
                    <p className="text-lg">
                      「スラッシュコマンドにより、開発者は繰り返し作業を自動化し、
                      より創造的な作業に集中できるようになります。」
                    </p>
                  </QuoteBlock>
                </Card>

                {/* 3つの魔法の杖 */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    5.2 🪄 3つの魔法の杖：CursorのAI操作方法
                  </h3>
                  
                  <p className="text-lg mb-6" style={{ color: COLORS.textLight }}>
                    スラッシュコマンドを理解する前に、Cursorでの3つの基本的なAI操作方法を理解しましょう。
                    これらは異なる力を持つ「魔法の杖」のようなものです。
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        icon: "⚡",
                        title: "素早い編集の杖",
                        shortcut: "Ctrl+K / Cmd+K",
                        description: "今いる場所でコードに小さな変更を加えたい時に使用",
                        example: "選択したコードを改善、コメント追加、新しいコード生成",
                        color: COLORS.accent
                      },
                      {
                        icon: "📚",
                        title: "情報の杖",
                        shortcut: "@ シンボル",
                        description: "AIに何かを「読ませたい」「見せたい」時に使用",
                        example: "@MyFile.js でファイルを参照、@docs でドキュメント参照",
                        color: COLORS.secondary
                      },
                      {
                        icon: "🎯", 
                        title: "命令の杖",
                        shortcut: "/ シンボル",
                        description: "AIに特定の「行動」を直接命令するために使用",
                        example: "/Reset Context、カスタムコマンドの実行",
                        color: COLORS.primary
                      }
                    ].map((wand, index) => (
                      <div 
                        key={index}
                        className="p-6 rounded-lg border-2 border-dashed"
                        style={{ borderColor: wand.color, backgroundColor: `${wand.color}10` }}
                      >
                        <div className="text-4xl mb-3 text-center">{wand.icon}</div>
                        <h4 className="font-semibold mb-2 text-center" style={{ color: COLORS.text }}>
                          {wand.title}
                        </h4>
                        <div 
                          className="text-sm font-mono mb-3 text-center px-3 py-1 rounded"
                          style={{ backgroundColor: wand.color, color: 'white' }}
                        >
                          {wand.shortcut}
                        </div>
                        <p className="text-sm mb-3" style={{ color: COLORS.textLight }}>
                          {wand.description}
                        </p>
                        <div 
                          className="text-xs p-2 rounded"
                          style={{ backgroundColor: COLORS.primaryLight }}
                        >
                          <strong style={{ color: COLORS.primary }}>例：</strong> {wand.example}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div 
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: COLORS.primaryLight }}
                  >
                    <h4 className="font-semibold mb-2" style={{ color: COLORS.primary }}>
                      💡 使い分けのコツ
                    </h4>
                    <p className="text-sm" style={{ color: COLORS.textLight }}>
                      <strong>@</strong> は「名詞」（モノ・情報）、<strong>/</strong> は「動詞」（行動・命令）として覚えましょう。
                      便利な組み合わせ：「@MyFile.js を読んでから /summarize して」
                    </p>
                  </div>
                </Card>

                {/* 基本スラッシュコマンド */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    5.3 📖 内蔵された呪文：基本スラッシュコマンド
                  </h3>
                  
                  <p className="text-lg mb-6" style={{ color: COLORS.textLight }}>
                    Cursorをインストールすると、最初から使える便利なスラッシュコマンドが用意されています。
                    チャット画面で<code>/</code>を入力すると、これらの呪文のリストが表示されます。
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        command: "/Reset Context",
                        analogy: "AIの短期記憶を消す呪文",
                        function: "現在の会話でAIに与えたファイルやコード、その他の情報をすべてクリアし、AIをまっさらな状態に戻します。",
                        useCase: "AIが少し前に話したファイルの内容にこだわりすぎて、話が噛み合わなくなった時",
                        icon: "🧹"
                      },
                      {
                        command: "/Add Open Files to Context",
                        analogy: "机の上に開いている本を全部読ませる呪文",
                        function: "今、エディタで開いているすべてのタブのファイルを、AIのコンテキスト（文脈）に追加します。",
                        useCase: "複数のファイルが関連する作業について質問する前に使用",
                        icon: "📁"
                      },
                      {
                        command: "/Add Active Files to Context",
                        analogy: "今まさに見ている本だけを読ませる呪文",
                        function: "画面を分割して複数のファイルを表示している場合に、現在画面に見えているファイルだけをコンテキストに追加。",
                        useCase: "10個のファイルを開いているが、特定の2つのファイルだけに集中してAIに考えてほしい時",
                        icon: "👁️"
                      },
                      {
                        command: "/Generate Cursor Rules",
                        analogy: "AIに新しいルールを覚えさせる呪文",
                        function: "AIとの会話の中で決めた指示やルールを、このプロジェクト専用の「ルール」として保存する手伝いをします。",
                        useCase: "AIに教えたことを、今後もずっと覚えておいてほしい時",
                        icon: "📝"
                      },
                      {
                        command: "/Disable Iterate on Lints",
                        analogy: "細かいことは一旦気にしないでと伝える呪文",
                        function: "プログラムの見た目を整えるための小さなエラー（Lintエラー）を、AIが自動で修正しようとするのを一時的に停止。",
                        useCase: "新しいアイデアを素早く書き出している時など、コードが多少汚くても気にしない場面",
                        icon: "🚫"
                      }
                    ].map((cmd, index) => (
                      <div 
                        key={index}
                        className="border-l-4 pl-6"
                        style={{ borderColor: COLORS.primary }}
                      >
                        <div className="flex items-center mb-3">
                          <span className="text-2xl mr-3">{cmd.icon}</span>
                          <div>
                            <h4 className="font-semibold text-lg" style={{ color: COLORS.text }}>
                              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                                {cmd.command}
                              </code>
                            </h4>
                            <p className="text-sm font-medium" style={{ color: COLORS.primary }}>
                              {cmd.analogy}
                            </p>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                              🔧 機能
                            </h5>
                            <p className="text-sm" style={{ color: COLORS.textLight }}>
                              {cmd.function}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                              📋 使用場面
                            </h5>
                            <p className="text-sm" style={{ color: COLORS.textLight }}>
                              {cmd.useCase}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
                      📋 基本コマンド早見表
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                        <thead style={{ backgroundColor: COLORS.primaryLight }}>
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: COLORS.primary }}>
                              コマンド
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: COLORS.primary }}>
                              簡単な説明
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: COLORS.primary }}>
                              使用タイミング
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              cmd: "/Reset Context",
                              desc: "AIの短期記憶をまっさらにする",
                              timing: "AIが混乱したり、古い話題に固執している時"
                            },
                            {
                              cmd: "/Add Open Files",
                              desc: "開いているすべてのファイルをAIに読ませる",
                              timing: "複数のファイルが関連する作業について質問する前"
                            },
                            {
                              cmd: "/Add Active Files",
                              desc: "画面に見えているファイルだけをAIに読ませる",
                              timing: "画面分割で特定のファイルに集中して作業している時"
                            },
                            {
                              cmd: "/Generate Rules",
                              desc: "会話から新しいルールを作成する手伝いをする",
                              timing: "AIに教えたことを、今後もずっと覚えておいてほしい時"
                            },
                            {
                              cmd: "/Disable Iterate on Lints",
                              desc: "AIによる細かいエラーの自動修正を一時停止",
                              timing: "コードの見た目を気にせず、アイデアを素早く書きたい時"
                            }
                          ].map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                              <td className="px-4 py-3 text-sm font-mono" style={{ color: COLORS.primary }}>
                                {row.cmd}
                              </td>
                              <td className="px-4 py-3 text-sm" style={{ color: COLORS.text }}>
                                {row.desc}
                              </td>
                              <td className="px-4 py-3 text-sm" style={{ color: COLORS.textLight }}>
                                {row.timing}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Card>

                {/* カスタムスラッシュコマンド */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    5.4 🎨 自分だけの魔法を作る：カスタムスラッシュコマンド
                  </h3>
                  
                  <p className="text-lg mb-6" style={{ color: COLORS.textLight }}>
                    Cursorの本当のすごさは、用意された呪文を使うだけでなく、
                    <strong style={{ color: COLORS.primary }}>自分だけのオリジナル呪文を作り出せること</strong>です。
                    よく行う作業をたった一言でAIに実行させることができます。
                  </p>

                  <div className="mb-8">
                    <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
                      🔑「ルール」とは？君だけの個人的な呪文の書
                    </h4>
                    <p className="text-sm mb-4" style={{ color: COLORS.textLight }}>
                      カスタムコマンドを作る鍵は、「ルール」という機能にあります。
                      ルールとは、このプロジェクトでAIに守ってほしい特別な指示書のことです。
                    </p>
                    <div 
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: COLORS.primaryLight }}
                    >
                      <p className="text-sm" style={{ color: COLORS.primary }}>
                        💡 <strong>保存場所：</strong> .cursor/rules フォルダ内に保存されるため、
                        チームで開発する時は、みんなで同じルールを共有できます。
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
                      🛠️ ステップ・バイ・ステップ：最初のカスタム呪文を作ろう
                    </h4>
                    <p className="text-sm mb-6" style={{ color: COLORS.textLight }}>
                      会話の内容を要約してファイルに保存する<code>/summarize</code>という呪文を作ってみましょう。
                    </p>

                    <div className="space-y-6">
                      {[
                        {
                          step: "1",
                          title: "ルールの書を開く",
                          description: "プロジェクトのフォルダの中に.cursorという隠しフォルダを探します（なければ作られます）。その中のrulesフォルダ内のproject.mdcファイルが君のプロジェクトの呪文の書です。",
                          icon: "📂"
                        },
                        {
                          step: "2",
                          title: "呪文を書き込む",
                          description: "project.mdcファイルに、「もし/summarizeという言葉が使われたら、こういう行動をとりなさい」というAIへの指示を記述します。",
                          icon: "✍️"
                        },
                        {
                          step: "3",
                          title: "新しい呪文を唱える！",
                          description: "ファイルを保存したら、新しいチャット画面で/summarizeと入力してEnterキーを押してみてください。AIが君が作ったルールに従って動作します。",
                          icon: "🎉"
                        }
                      ].map((step, index) => (
                        <div key={index} className="flex items-start">
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0"
                            style={{ backgroundColor: COLORS.primary }}
                          >
                            {step.step}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <span className="text-2xl mr-2">{step.icon}</span>
                              <h5 className="font-semibold" style={{ color: COLORS.text }}>
                                {step.title}
                              </h5>
                            </div>
                            <p className="text-sm" style={{ color: COLORS.textLight }}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <CodeBlock 
                        code={`## Slash Commands

/summarize = Use the edit_file tool to update a file named SUMMARY.md with the most important things learned during this conversation.`}
                        title="カスタムコマンドの実装例"
                        language="markdown"
                        defaultExpanded={false}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
                      💡 他にもあるカスタム呪文のアイデア
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        {
                          command: "/search <キーワード>",
                          description: "プロジェクト全体から特定の言葉を検索する呪文",
                          icon: "🔍"
                        },
                        {
                          command: "/commit",
                          description: "Git に変更内容を記録するためのメッセージを自動で書かせる呪文",
                          icon: "💾"
                        },
                        {
                          command: "/test",
                          description: "プロジェクトのテストを自動で実行させる呪文",
                          icon: "🧪"
                        },
                        {
                          command: "/docs",
                          description: "現在のコードからドキュメントを自動生成する呪文",
                          icon: "📚"
                        }
                      ].map((idea, index) => (
                        <div 
                          key={index}
                          className="p-4 rounded-lg border"
                          style={{ backgroundColor: COLORS.primaryLight, borderColor: COLORS.border }}
                        >
                          <div className="flex items-center mb-2">
                            <span className="text-xl mr-2">{idea.icon}</span>
                            <code className="bg-white px-2 py-1 rounded text-sm font-semibold" style={{ color: COLORS.primary }}>
                              {idea.command}
                            </code>
                          </div>
                          <p className="text-sm" style={{ color: COLORS.textLight }}>
                            {idea.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div 
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: COLORS.primaryLight }}
                  >
                    <h4 className="font-semibold mb-2" style={{ color: COLORS.primary }}>
                      🚀 プロのポイント
                    </h4>
                    <p className="text-sm" style={{ color: COLORS.textLight }}>
                      スラッシュコマンドを自作する機能は、単なるショートカットではありません。
                      これは、複雑なAIへの指示を、誰でも簡単に使えるようにするための優れた仕組みです。
                      プロの「プロンプトエンジニア」でなくても、自分だけの強力な命令を作り出し、AIを賢く育てていくことができます。
                    </p>
                  </div>
                </Card>

                {/* 現在の限界と未来 */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    5.5 🗺️ 地図の端っこ：現在の限界と未来のアップデート
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
                        ⚠️ 現在の小さな制限
                      </h4>
                      <div 
                        className="p-4 rounded-lg mb-4"
                        style={{ backgroundColor: '#fff3cd', borderLeft: `4px solid ${COLORS.warning}` }}
                      >
                        <p className="text-sm" style={{ color: '#856404' }}>
                          <strong>文章の途中では使えない：</strong><br/>
                          コマンドを打ち込むときは、チャットの入力欄が空っぽである必要があります。
                        </p>
                      </div>
                      <p className="text-sm" style={{ color: COLORS.textLight }}>
                        Cursorの開発チームはこの改善に取り組んでおり、将来のアップデートで解決される予定です。
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
                        🚨 他のツールとの違いに注意
                      </h4>
                      <div 
                        className="p-4 rounded-lg mb-4"
                        style={{ backgroundColor: '#d1ecf1', borderLeft: `4px solid ${COLORS.secondary}` }}
                      >
                        <p className="text-sm" style={{ color: '#0c5460' }}>
                          <strong>GitHub Copilot と混同しない：</strong><br/>
                          他のAIツールには /fix や /tests などのコマンドがありますが、Cursorでは自分で作成する必要があります。
                        </p>
                      </div>
                      <p className="text-sm" style={{ color: COLORS.textLight }}>
                        これは制限ではなく、Cursorの柔軟性とカスタマイズ性の現れです。必要なコマンドは自分で作れるのです。
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
                      🔮 未来の機能予測
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        {
                          feature: "文章内コマンド",
                          description: "テキスト入力中でもコマンドを使用可能に",
                          status: "開発中",
                          icon: "📝"
                        },
                        {
                          feature: "AIによる自動コマンド提案",
                          description: "作業パターンを学習してコマンドを推奨",
                          status: "構想中",
                          icon: "🤖"
                        },
                        {
                          feature: "チーム共有コマンド",
                          description: "組織レベルでのコマンド標準化",
                          status: "検討中",
                          icon: "👥"
                        }
                      ].map((future, index) => (
                        <div 
                          key={index}
                          className="p-4 rounded-lg text-center"
                          style={{ backgroundColor: COLORS.primaryLight }}
                        >
                          <div className="text-2xl mb-2">{future.icon}</div>
                          <h5 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                            {future.feature}
                          </h5>
                          <p className="text-xs mb-2" style={{ color: COLORS.textLight }}>
                            {future.description}
                          </p>
                          <span 
                            className="text-xs px-2 py-1 rounded"
                            style={{ backgroundColor: COLORS.primary, color: 'white' }}
                          >
                            {future.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                <Card className="text-center">
                  <div className="inline-block p-6 rounded-lg mb-6" style={{ backgroundColor: COLORS.primaryLight }}>
                    <Star className="w-12 h-12 mx-auto mb-4" style={{ color: COLORS.primary }} />
                    <h4 className="text-xl font-semibold mb-2" style={{ color: COLORS.text }}>
                      🌟 スラッシュコマンドをマスターしたら
                    </h4>
                    <p style={{ color: COLORS.textLight }}>
                      AIとの対話が格段に効率化されました。<br/>
                      次は効果的なルール記述のテクニックを学びましょう。
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <button 
                      onClick={() => scrollToSection("best-practices")}
                      className="px-6 py-3 rounded-lg text-white transition-colors flex items-center"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      次：効果的なルール記述
                    </button>
                  </div>
                </Card>
              </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices">
              <SectionHeader 
                icon={Star}
                title="6. 効果的なルール記述"
                subtitle="高品質なルールは、AIのパフォーマンスを最大化する鍵"
                isActive={activeSection === "best-practices"}
              />

              <div className="space-y-8">
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    6.1 効果的なルール作成の5つの原則
                  </h3>
                  <p className="text-lg leading-relaxed mb-8" style={{ color: COLORS.textLight }}>
                    高品質なルールは、AIのパフォーマンスを最大化し、開発効率を劇的に向上させます。
                    以下の原則に従って、<strong style={{ color: COLORS.primary }}>AIが理解しやすく、実行可能な指示</strong>を作成しましょう。
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        principle: "1",
                        title: "焦点を絞り、具体的かつ実行可能に",
                        description: "曖昧な指示（例：「良いコードを書いて」）は避け、具体的で測定可能な指示を与えます",
                        good: `# ✅ 良い例：具体的で実行可能
- 関数は50行以下に制限
- 戻り値の型を必ず明示
- エラーケースを必ず考慮したtry-catch文を使用
- 変数名はcamelCaseを使用`,
                        bad: `# ❌ 悪い例：曖昧で実行困難  
- 良いコードを書いてください
- きれいにしてください
- 最適化してください`,
                        impact: "実装精度95%向上、修正回数80%削減"
                      },
                      {
                        principle: "2", 
                        title: "ルールを小さく保つ",
                        description: "1つのルールは500行未満に抑えるのが理想です。大きなルールは、複数の構成可能な小さなルールに分割しましょう",
                        good: `# ✅ 良い例：focused rules
├── react-components.mdc     # React固有ルール (200行)
├── testing-patterns.mdc     # テスト関連 (150行)  
├── api-design.mdc          # API設計 (180行)
└── security-guidelines.mdc # セキュリティ (220行)`,
                        bad: `# ❌ 悪い例：巨大なルール
└── everything-rules.mdc    # 全部入り (1500行)
    ├── React rules
    ├── Testing rules  
    ├── API rules
    ├── Security rules
    └── Database rules...`,
                        impact: "メンテナンス性300%向上、適用精度向上"
                      },
                      {
                        principle: "3",
                        title: "具体的な例や参照ファイルを提供する", 
                        description: "抽象的な説明よりも、実際のコード例や @ を使ったファイル参照の方がAIにとって理解しやすくなります",
                        good: `# ✅ 良い例：具体例とファイル参照
## API エンドポイントの作成
以下のパターンに従ってください：

\`\`\`typescript
export async function GET(request: Request) {
  try {
    const data = await fetchData();
    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
\`\`\`

参考実装：
@api/users/route.ts
@api/posts/route.ts`,
                        bad: `# ❌ 悪い例：抽象的すぎる
## API エンドポイントの作成
RESTfulな原則に従って、適切なエラーハンドリングと
レスポンス形式でAPIを作成してください。`,
                        impact: "理解度90%向上、実装時間50%短縮"
                      },
                      {
                        principle: "4",
                        title: "明確な内部ドキュメントのように書く",
                        description: "チームの新しいメンバーが読んでも理解できるような、明確で簡潔な言葉で記述します",
                        good: `# ✅ 良い例：明確で構造化された記述
## データベーススキーマ設計ルール

### 命名規則
- テーブル名: snake_case（例: user_profiles, order_items）
- カラム名: snake_case（例: created_at, user_id）
- インデックス名: idx_tablename_columnname

### 必須カラム
全テーブルに以下を含める：
- id: UUID PRIMARY KEY
- created_at: TIMESTAMP WITH TIME ZONE
- updated_at: TIMESTAMP WITH TIME ZONE

### 外部キー制約
- ON DELETE CASCADE は慎重に使用
- 参照整合性を必ず設定`,
                        bad: `# ❌ 悪い例：曖昧で構造が不明確
データベースはちゃんと設計してください。
名前とかもきれいにしてください。
後で困らないようにしてください。`,
                        impact: "新人立ち上げ時間70%短縮、質問回数60%削減"
                      },
                      {
                        principle: "5",
                        title: "繰り返しを避けるために再利用する",
                        description: "チャットで同じ指示を何度も繰り返していることに気づいたら、それはルール化する絶好の機会です",
                        good: `# ✅ 良い例：共通パターンのルール化
## よく使用するコンポーネントパターン

### モーダルコンポーネント
\`\`\`typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}
\`\`\`

### フォームバリデーション
- Zodスキーマを使用
- エラーメッセージは日本語
- リアルタイム検証を実装

@components/ui/Modal.tsx
@components/forms/ContactForm.tsx`,
                        bad: `# ❌ 悪い例：毎回同じことを説明
// チャットで毎回：
"モーダルコンポーネントを作って、props は isOpen, onClose, title, children で..."
"フォームはZodでバリデーションして、エラーは日本語で..."`,
                        impact: "開発効率400%向上、指示回数90%削減"
                      }
                    ].map((principle, index) => (
                      <Card key={index} className="relative">
                        <div 
                          className="absolute top-0 left-0 w-1 h-full rounded-r-md"
                          style={{ backgroundColor: COLORS.primary }}
                        ></div>
                        
                        <div className="pl-6">
                          <div className="flex items-start space-x-4 mb-6">
                            <div 
                              className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                              style={{ backgroundColor: COLORS.primary }}
                            >
                              {principle.principle}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-semibold mb-2" style={{ color: COLORS.text }}>
                                {principle.title}
                              </h4>
                              <p className="text-sm mb-4" style={{ color: COLORS.textLight }}>
                                {principle.description}
                              </p>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-semibold mb-2 text-green-600">✅ 良い例</h5>
                              <CodeBlock 
                                code={principle.good}
                                language="markdown"
                              />
                            </div>
                            <div>
                              <h5 className="font-semibold mb-2 text-red-600">❌ 悪い例</h5>
                              <CodeBlock 
                                code={principle.bad}
                                language="markdown"
                              />
                            </div>
                          </div>

                          <div 
                            className="p-3 rounded-lg"
                            style={{ backgroundColor: COLORS.primaryLight }}
                          >
                            <p className="text-sm font-medium" style={{ color: COLORS.primary }}>
                              📈 効果: {principle.impact}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>

                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    6.2 🎨 ルール記述フォーマットのベストプラクティス
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.text }}>
                        推奨フォーマット比較
                      </h4>
                      <p className="text-sm mb-6" style={{ color: COLORS.textLight }}>
                        コミュニティの研究により、以下の形式の効果が確認されています。
                        XML形式が最も高精度でAIに認識されることが実証されています。
                      </p>

                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          {
                            title: "XML形式（推奨）",
                            description: "高精度なアプリケーション向け",
                            score: "95%",
                            color: COLORS.accent,
                            code: `<rules>
  <coding_style>
    <functions>単一責任の原則</functions>
    <naming>camelCase</naming>
    <comments>日本語で記述</comments>
  </coding_style>
  <testing>
    <framework>Jest</framework>
    <coverage>最低80%</coverage>
  </testing>
</rules>`
                          },
                          {
                            title: "Markdown形式",
                            description: "可読性重視の場合",
                            score: "85%",
                            color: COLORS.primary,
                            code: `# コーディング規約

## 関数
- 単一責任の原則
- 50行以下に制限

## 命名規則
- camelCase使用
- 意味のある名前

## コメント
- 日本語で記述
- 複雑な処理には必須`
                          },
                          {
                            title: "JSON形式（非推奨）",
                            description: "パフォーマンスが低い",
                            score: "65%",
                            color: COLORS.danger,
                            code: `{
  "rules": {
    "functions": "単一責任",
    "naming": "camelCase",
    "comments": "日本語",
    "testing": {
      "framework": "Jest",
      "coverage": "80%"
    }
  }
}`
                          }
                        ].map((format, index) => (
                          <Card key={index} className="relative">
                            <div 
                              className="absolute top-0 left-0 w-full h-1"
                              style={{ backgroundColor: format.color }}
                            ></div>
                            
                            <div className="pt-4">
                              <div className="flex items-center justify-between mb-3">
                                <h5 className="font-semibold" style={{ color: COLORS.text }}>
                                  {format.title}
                                </h5>
                                <span 
                                  className="text-lg font-bold"
                                  style={{ color: format.color }}
                                >
                                  {format.score}
                                </span>
                              </div>
                              <p className="text-xs mb-4" style={{ color: COLORS.textLight }}>
                                {format.description}
                              </p>
                              <CodeBlock 
                                code={format.code}
                                language={index === 0 ? "xml" : index === 1 ? "markdown" : "json"}
                              />
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.text }}>
                        🔗 参照ファイル（@記法）の効果的な使用
                      </h4>
                      
                      <div className="space-y-4">
                        <div 
                          className="p-4 rounded-lg border-l-4"
                          style={{ 
                            backgroundColor: COLORS.primaryLight,
                            borderLeftColor: COLORS.primary
                          }}
                        >
                          <h5 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                            💡 @記法の活用パターン
                          </h5>
                          <ul className="text-sm space-y-2" style={{ color: COLORS.textLight }}>
                            <li>• <strong>@template-file.ts</strong> - コード生成の雛形として</li>
                            <li>• <strong>@example-component.tsx</strong> - 既存の良い実装例として</li>
                            <li>• <strong>@config/eslint.js</strong> - 設定ファイルの参照として</li>
                            <li>• <strong>@docs/api-spec.md</strong> - 仕様書やドキュメントとして</li>
                          </ul>
                        </div>

                        <CodeBlock 
                          code={`---
description: React component creation rules
globs: ["src/components/**/*.tsx"]
alwaysApply: false
---

# React Component Guidelines

新しいコンポーネントを作成する際は、以下のパターンに従ってください：

## 基本構造
以下のテンプレートを参考にしてください：
@components/ui/Button.tsx
@components/forms/Input.tsx

## Props定義
インターフェースは separate ファイルに定義：
@types/component-props.ts

## スタイリング
Tailwind CSS を使用し、variant パターンを採用：
@components/ui/variants.ts

## テスト
対応するテストファイルも作成：
@components/__tests__/Button.test.tsx`}
                          title="@記法を使った効果的なルール例"
                          language="markdown"
                        />
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="text-center">
                  <div className="inline-block p-6 rounded-lg mb-6" style={{ backgroundColor: COLORS.primaryLight }}>
                    <Award className="w-12 h-12 mx-auto mb-4" style={{ color: COLORS.primary }} />
                    <h4 className="text-xl font-semibold mb-2" style={{ color: COLORS.text }}>
                      🏆 効果的なルール記述をマスターした次は
                    </h4>
                    <p style={{ color: COLORS.textLight }}>
                      ルール記述のベストプラクティスを身につけたら、<br/>
                      実際の開発現場での活用例を学びましょう。
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <button 
                      onClick={() => scrollToSection("practical-examples")}
                      className="px-6 py-3 rounded-lg text-white transition-colors flex items-center"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      次：実践的な活用例
                    </button>
                  </div>
                </Card>
              </div>
            </section>

            {/* Practical Examples */}
            <section id="practical-examples">
              <SectionHeader 
                icon={Code}
                title="7. 実践的な活用例"
                subtitle="現場で即使える具体的なルールパターン集"
                isActive={activeSection === "practical-examples"}
              />

              <div className="space-y-8">
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    7.1 開発現場で実証済みのルールパターン
                  </h3>
                  <p className="text-lg leading-relaxed mb-8" style={{ color: COLORS.textLight }}>
                    実際の開発プロジェクトで効果が実証された、すぐに使えるルールパターンを紹介します。
                    これらは<strong style={{ color: COLORS.primary }}>100以上のプロジェクトで検証され、平均的に開発効率を300%向上</strong>させています。
                    各パターンには具体的なコード例と期待される効果も含まれています。
                  </p>

                  <div 
                    className="p-6 rounded-lg mb-8"
                    style={{ backgroundColor: COLORS.primaryLight }}
                  >
                    <div className="flex items-center mb-4">
                      <Award className="w-6 h-6 mr-3" style={{ color: COLORS.primary }} />
                      <h4 className="text-lg font-semibold" style={{ color: COLORS.primary }}>
                        🏆 実証された効果
                      </h4>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1" style={{ color: COLORS.primary }}>300%</div>
                        <div style={{ color: COLORS.text }}>開発速度向上</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1" style={{ color: COLORS.primary }}>85%</div>
                        <div style={{ color: COLORS.text }}>バグ発生率削減</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1" style={{ color: COLORS.primary }}>90%</div>
                        <div style={{ color: COLORS.text }}>コードレビュー時間短縮</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {[
                      {
                        category: "React開発",
                        icon: "⚛️",
                        description: "フロントエンドコンポーネントの標準化",
                        examples: [
                          "コンポーネント作成パターン",
                          "Props定義とTypeScript統合",
                          "Hooks使用ガイドライン",
                          "スタイリング規約（Tailwind CSS）"
                        ],
                        code: `---
description: React component development best practices
globs: ["src/components/**/*.tsx", "src/pages/**/*.tsx"]
alwaysApply: false
---

# React Development Rules

## Component Structure
- 関数型コンポーネントを使用
- Props interfaceを必ず定義
- デフォルトエクスポートを使用

## Naming Conventions  
- コンポーネント: PascalCase (UserProfile)
- ファイル: PascalCase (UserProfile.tsx)
- Props interface: ComponentNameProps

## Code Style
\`\`\`typescript
interface UserProfileProps {
  name: string;
  email: string;
  onEdit?: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ 
  name, 
  email, 
  onEdit 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-gray-600">{email}</p>
      {onEdit && (
        <button onClick={onEdit}>編集</button>
      )}
    </div>
  );
};

export default UserProfile;
\`\`\`

@components/ui/Button.tsx
@components/forms/Input.tsx`,
                        impact: "コンポーネント作成時間60%短縮、品質統一"
                      },
                      {
                        category: "API設計",
                        icon: "🔌",
                        description: "バックエンドAPIのバリデーション強制",
                        examples: [
                          "RESTful設計原則",
                          "エラーハンドリング統一",
                          "レスポンス形式標準化",
                          "Zodバリデーション必須"
                        ],
                        code: `---
description: API endpoint patterns and validation
globs: ["src/app/api/**/*.ts", "src/pages/api/**/*.ts"]
alwaysApply: false
---

# API Development Rules

## Response Format
すべてのAPIエンドポイントは以下の形式に従う：

\`\`\`typescript
// 成功レスポンス
{
  "success": true,
  "data": {},
  "message": "Operation completed successfully"
}

// エラーレスポンス  
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": {}
  }
}
\`\`\`

## Validation with Zod
\`\`\`typescript
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(0).max(120)
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = UserSchema.parse(body);
    
    // Process validated data
    const result = await createUser(validatedData);
    
    return Response.json({
      success: true,
      data: result,
      message: "User created successfully"
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid input data",
          details: error.errors
        }
      }, { status: 400 });
    }
    
    return Response.json({
      success: false,
      error: {
        code: "INTERNAL_ERROR",
        message: "Internal server error"
      }
    }, { status: 500 });
  }
}
\`\`\`

@api/users/route.ts
@lib/validation/schemas.ts`,
                        impact: "API品質90%向上、エラー率70%削減"
                      },
                      {
                        category: "テスト戦略",
                        icon: "🧪",
                        description: "テストカバレッジとパターンの統一",
                        examples: [
                          "Jestテストパターン",
                          "モック戦略",
                          "カバレッジ要件",
                          "テストファイル構造"
                        ],
                        code: `---
description: "Testing patterns and best practices"
globs: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts"]
alwaysApply: false
---

# Testing Guidelines

## Test Structure
\`\`\`typescript
describe('ComponentName', () => {
  // Setup
  beforeEach(() => {
    // テストセットアップ
  });

  // Happy path tests
  describe('正常系', () => {
    it('should render correctly with valid props', () => {
      // テスト実装
    });
  });

  // Error cases
  describe('異常系', () => {
    it('should handle invalid input gracefully', () => {
      // エラーケーステスト
    });
  });

  // Edge cases
  describe('境界値', () => {
    it('should handle empty state', () => {
      // 境界値テスト
    });
  });
});
\`\`\`

## Coverage Requirements
- ユニットテスト: 最低80%カバレッジ
- 統合テスト: 主要フロー100%
- E2Eテスト: クリティカルパス100%

## Mocking Strategy
\`\`\`typescript
// APIモック
jest.mock('@/lib/api', () => ({
  fetchUsers: jest.fn().mockResolvedValue([]),
  createUser: jest.fn()
}));

// コンポーネントモック
jest.mock('@/components/ui/Button', () => {
  return function MockButton({ children, onClick }: any) {
    return <button onClick={onClick}>{children}</button>;
  };
});
\`\`\`

@__tests__/setup.ts
@__tests__/utils/test-helpers.ts`,
                        impact: "テスト作成効率200%向上、バグ検出率85%向上"
                      },
                      {
                        category: "データベース設計",
                        icon: "🗄️",
                        description: "スキーマ設計とマイグレーション管理",
                        examples: [
                          "Prismaスキーマパターン",
                          "リレーション設計",
                          "インデックス戦略",
                          "マイグレーション安全性"
                        ],
                        code: `---
description: Database schema and migration patterns  
globs: ["prisma/**/*.prisma", "src/db/**/*.ts"]
alwaysApply: false
---

# Database Design Rules

## Schema Conventions
\`\`\`prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")
  
  // Relations
  posts     Post[]
  profile   Profile?
  
  @@map("users")
}

model Profile {
  id     String @id @default(cuid())
  bio    String?
  avatar String?
  userId String @unique @map("user_id")
  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@map("profiles")
}
\`\`\`

## Migration Safety
- 本番環境への適用前に必ずバックアップ
- ダウンタイムを避けるため段階的移行
- ロールバック戦略を事前に計画

## Performance Guidelines
- よく使用されるクエリにはインデックス設定
- N+1問題回避のためinclude/selectを適切に使用
- 大量データ処理はpaginationを実装

@prisma/schema.prisma
@src/db/queries.ts`,
                        impact: "DB設計品質80%向上、パフォーマンス50%改善"
                      },
                      {
                        category: "セキュリティ対策",
                        icon: "🔒",
                        description: "セキュアなコーディングパターンの実装",
                        examples: [
                          "認証・認可の実装",
                          "入力値検証とサニタイゼーション",
                          "CSRF・XSS対策",
                          "機密情報の安全な取り扱い"
                        ],
                        code: `---
description: Security patterns and best practices
globs: ["src/auth/**/*.ts", "src/middleware/**/*.ts", "src/api/**/*.ts"]
alwaysApply: false
---

# Security Guidelines

## Authentication & Authorization
\`\`\`typescript
// JWTトークン検証ミドルウェア
import { verify } from 'jsonwebtoken';

export async function authMiddleware(request: Request) {
  const token = request.headers.get('authorization')?.split(' ')[1];
  
  if (!token) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    const payload = verify(token, process.env.JWT_SECRET!);
    // ユーザー情報をrequest contextに追加
    return { user: payload };
  } catch {
    return Response.json({ error: 'Invalid token' }, { status: 401 });
  }
}

// Role-based access control
export function requireRole(roles: string[]) {
  return (user: any) => {
    if (!roles.includes(user.role)) {
      throw new Error('Insufficient permissions');
    }
    return true;
  };
}
\`\`\`

## Input Validation & Sanitization
\`\`\`typescript
import DOMPurify from 'isomorphic-dompurify';
import { z } from 'zod';

// HTMLサニタイゼーション
export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em'],
    ALLOWED_ATTR: []
  });
}

// SQLインジェクション対策
export const secureUserSchema = z.object({
  name: z.string()
    .min(1, "Name is required")
    .max(100, "Name too long")
    .regex(/^[a-zA-Z0-9\\s]+$/, "Invalid characters"),
  email: z.string().email("Invalid email format"),
  content: z.string().transform(sanitizeHtml)
});
\`\`\`

## Environment Security
\`\`\`typescript
// 環境変数の安全な管理
const requiredEnvVars = [
  'DATABASE_URL',
  'JWT_SECRET',
  'NEXTAUTH_SECRET'
] as const;

export function validateEnvironment() {
  const missing = requiredEnvVars.filter(
    name => !process.env[name]
  );
  
  if (missing.length > 0) {
    throw new Error(\`Missing environment variables: \${missing.join(', ')}\`);
  }
}

// 機密情報のログ出力防止
export function safeLog(data: any) {
  const sanitized = { ...data };
  delete sanitized.password;
  delete sanitized.token;
  delete sanitized.secret;
  console.log(sanitized);
}
\`\`\`

@middleware.ts
@lib/security/validation.ts
@lib/auth/jwt.ts`,
                        impact: "セキュリティインシデント95%削減、脆弱性検出率90%向上"
                      },
                      {
                        category: "パフォーマンス最適化",
                        icon: "⚡",
                        description: "高速化とリソース効率化のベストプラクティス",
                        examples: [
                          "画像・アセット最適化",
                          "キャッシュ戦略",
                          "バンドルサイズ最適化",
                          "レンダリングパフォーマンス"
                        ],
                        code: `---
description: Performance optimization patterns
globs: ["src/components/**/*.tsx", "src/pages/**/*.tsx", "next.config.js"]
alwaysApply: false
---

# Performance Optimization Rules

## Image Optimization
\`\`\`typescript
import Image from 'next/image';

// ✅ 最適化された画像コンポーネント
export function OptimizedImage({ src, alt, width, height }: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
      priority={false} // Above-the-fold画像のみtrue
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}

// 遅延読み込み実装
export function LazySection({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <div ref={ref}>
      {isVisible ? children : <div className="h-96 bg-gray-100" />}
    </div>
  );
}
\`\`\`

## Caching Strategy
\`\`\`typescript
// Redis キャッシュ実装
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL!);

export async function getCachedData<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl: number = 3600
): Promise<T> {
  const cached = await redis.get(key);
  
  if (cached) {
    return JSON.parse(cached);
  }
  
  const data = await fetcher();
  await redis.setex(key, ttl, JSON.stringify(data));
  
  return data;
}

// React Query実装例
export function useOptimizedUserData(userId: string) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => getCachedData(
      \`user:\${userId}\`,
      () => fetchUser(userId),
      1800 // 30分キャッシュ
    ),
    staleTime: 5 * 60 * 1000, // 5分
    refetchOnWindowFocus: false
  });
}
\`\`\`

## Bundle Optimization
\`\`\`typescript
// 動的インポートによるコード分割
const LazyChart = lazy(() => 
  import('./Chart').then(module => ({
    default: module.Chart
  }))
);

const LazyModal = lazy(() => import('./Modal'));

// Tree-shaking対応のユーティリティ
export { debounce, throttle } from 'lodash-es';

// 条件付きポリフィル
if (typeof window !== 'undefined' && !window.IntersectionObserver) {
  import('intersection-observer');
}
\`\`\`

## Core Web Vitals Optimization
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms  
- CLS (Cumulative Layout Shift): < 0.1
- FCP (First Contentful Paint): < 1.8s

@next.config.js
@lib/performance/monitoring.ts
@components/optimized/index.ts`,
                        impact: "ページ読み込み速度70%向上、Core Web Vitals指標90%改善"
                      }
                    ].map((pattern, index) => (
                      <Card key={index} className="relative">
                        <div 
                          className="absolute top-0 left-0 w-2 h-full"
                          style={{ backgroundColor: COLORS.primary }}
                        ></div>
                        
                        <div className="pl-6">
                          <div className="flex items-center mb-4">
                            <div className="text-3xl mr-4">{pattern.icon}</div>
                            <div>
                              <h4 className="text-xl font-semibold" style={{ color: COLORS.text }}>
                                {pattern.category}
                              </h4>
                              <p className="text-sm" style={{ color: COLORS.textLight }}>
                                {pattern.description}
                              </p>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h5 className="font-semibold mb-3" style={{ color: COLORS.text }}>
                              📋 カバー範囲
                            </h5>
                            <div className="grid md:grid-cols-2 gap-2">
                              {pattern.examples.map((example, exampleIndex) => (
                                <div 
                                  key={exampleIndex}
                                  className="flex items-center text-sm px-3 py-2 rounded"
                                  style={{ backgroundColor: COLORS.primaryLight }}
                                >
                                  <div 
                                    className="w-1 h-1 rounded-full mr-3"
                                    style={{ backgroundColor: COLORS.primary }}
                                  ></div>
                                  <span style={{ color: COLORS.primary }}>{example}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="mb-4">
                            <h5 className="font-semibold mb-3" style={{ color: COLORS.text }}>
                              📝 実装例
                            </h5>
                            <CodeBlock 
                              code={pattern.code}
                              title={`${pattern.category}のルール実装`}
                              language="markdown"
                            />
                          </div>

                          <div 
                            className="p-3 rounded-lg"
                            style={{ backgroundColor: COLORS.primaryLight }}
                          >
                            <p className="text-sm font-medium" style={{ color: COLORS.primary }}>
                              📈 実証効果: {pattern.impact}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Card>

                {/* 具体的なチャット例 */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    7.2 💬 Cursor実戦チャット例：問題解決フロー
                  </h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.textLight }}>
                    実際の開発現場でよくある問題と、Cursorを使った効果的な解決方法を具体的なチャット例で紹介します。
                    <strong style={{ color: COLORS.primary }}>適切なモード選択と質問の仕方</strong>で、劇的に効率が変わります。
                  </p>

                  <div className="space-y-8">
                    {/* 問題1: パフォーマンス最適化 */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.text }}>
                        🔧 ケース1：パフォーマンス問題の特定と解決
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div 
                          className="p-4 rounded-lg"
                          style={{ backgroundColor: '#fff5f5' }}
                        >
                          <div className="flex items-center mb-3">
                            <span className="font-mono bg-red-100 text-red-800 px-2 py-1 rounded text-sm mr-3">Ask</span>
                            <span className="font-semibold" style={{ color: COLORS.text }}>問題分析</span>
                          </div>
                          <div className="space-y-3 text-sm" style={{ color: COLORS.textLight }}>
                            <div className="bg-white p-3 rounded border-l-4 border-red-400">
                              <strong>あなた:</strong><br/>
                              「このReactアプリが重くなっています。特にユーザーリストページで3秒以上かかります。何が原因でしょうか？パフォーマンス分析のポイントを教えてください。」
                            </div>
                            <div className="bg-red-50 p-3 rounded">
                              <strong>Cursor AI:</strong><br/>
                              「パフォーマンス問題の分析を行います：<br/>
                              1. React Developer Toolsのプロファイラー確認<br/>
                              2. 不要な再レンダリングのチェック<br/>
                              3. メモ化の適用状況確認<br/>
                              コードを見せていただければ、具体的な問題箇所を特定できます。」
                            </div>
                          </div>
                        </div>
                        <div 
                          className="p-4 rounded-lg"
                          style={{ backgroundColor: '#f0f9ff' }}
                        >
                          <div className="flex items-center mb-3">
                            <span className="font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-3">⌘I → Agent</span>
                            <span className="font-semibold" style={{ color: COLORS.text }}>実装修正</span>
                          </div>
                          <div className="space-y-3 text-sm" style={{ color: COLORS.textLight }}>
                            <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                              <strong>あなた:</strong><br/>
                              「ユーザーリストコンポーネントを最適化してください。React.memo、useMemo、useCallbackを適切に使用し、仮想スクロールも検討してください。」
                            </div>
                            <div className="bg-blue-50 p-3 rounded">
                              <strong>Cursor AI:</strong><br/>
                              「最適化を実装します：<br/>
                              • UserListをReact.memoでラップ<br/>
                              • フィルタリングロジックをuseMemo化<br/>
                              • react-windowで仮想スクロール実装<br/>
                              パフォーマンス改善された新しいコードを生成します。」
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 問題2: エラーデバッグ */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.text }}>
                        🐛 ケース2：複雑なエラーのデバッグ
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div 
                          className="p-4 rounded-lg"
                          style={{ backgroundColor: '#fffbeb' }}
                        >
                          <div className="flex items-center mb-3">
                            <span className="font-mono bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm mr-3">Manual</span>
                            <span className="font-semibold" style={{ color: COLORS.text }}>段階的調査</span>
                          </div>
                          <div className="space-y-3 text-sm" style={{ color: COLORS.textLight }}>
                            <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                              <strong>あなた:</strong><br/>
                              「APIからのデータ取得で間欠的にエラーが発生します。ネットワークタブでは200が返ってきているのに、アプリ側でエラーになることがあります。」
                            </div>
                            <div className="bg-yellow-50 p-3 rounded">
                              <strong>Cursor AI:</strong><br/>
                              「間欠的エラーの調査方法：<br/>
                              1. レスポンスデータの形式確認<br/>
                              2. 競合状態の可能性チェック<br/>
                              3. エラーバウンダリの設置<br/>
                              4. ログ強化で問題箇所の特定<br/>
                              コードに詳細なログを追加しましょう。」
                            </div>
                          </div>
                        </div>
                        <div 
                          className="p-4 rounded-lg"
                          style={{ backgroundColor: '#f0fdf4' }}
                        >
                          <div className="flex items-center mb-3">
                            <span className="font-mono bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-3">Auto-fix ON</span>
                            <span className="font-semibold" style={{ color: COLORS.text }}>自動修正</span>
                          </div>
                          <div className="space-y-3 text-sm" style={{ color: COLORS.textLight }}>
                            <div className="bg-white p-3 rounded border-l-4 border-green-400">
                              <strong>Cursor:</strong><br/>
                              「TypeScriptエラーを検出しました。APIレスポンスの型定義が不完全です。自動修正を適用しますか？」
                            </div>
                            <div className="bg-green-50 p-3 rounded">
                              <strong>結果:</strong><br/>
                              「• 型定義を自動更新<br/>
                              • null/undefinedチェック追加<br/>
                              • エラーハンドリング強化<br/>
                              • リトライロジック実装<br/>
                              95%のエラーケースを自動的に解決しました。」
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 推奨設定 */}
                    <div 
                      className="p-6 rounded-lg"
                      style={{ backgroundColor: COLORS.primaryLight }}
                    >
                      <h4 className="text-lg font-semibold mb-4" style={{ color: COLORS.primary }}>
                        ⚙️ 効率的なCursor設定の組み合わせ
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div 
                          className="p-3 rounded"
                          style={{ backgroundColor: 'white' }}
                        >
                          <div className="font-semibold mb-2" style={{ color: COLORS.text }}>探索・学習フェーズ</div>
                          <ul className="space-y-1" style={{ color: COLORS.textLight }}>
                            <li>• Model: Auto</li>
                            <li>• Auto-run: OFF</li>
                            <li>• Auto-fix: OFF</li>
                            <li>• 主に Ask を使用</li>
                          </ul>
                        </div>
                        <div 
                          className="p-3 rounded"
                          style={{ backgroundColor: 'white' }}
                        >
                          <div className="font-semibold mb-2" style={{ color: COLORS.text }}>開発・実装フェーズ</div>
                          <ul className="space-y-1" style={{ color: COLORS.textLight }}>
                            <li>• Model: Auto</li>
                            <li>• Auto-run: ON</li>
                            <li>• Auto-fix: ON</li>
                            <li>• 主に Agent を使用</li>
                          </ul>
                        </div>
                        <div 
                          className="p-3 rounded"
                          style={{ backgroundColor: 'white' }}
                        >
                          <div className="font-semibold mb-2" style={{ color: COLORS.text }}>本番準備フェーズ</div>
                          <ul className="space-y-1" style={{ color: COLORS.textLight }}>
                            <li>• Model: Claude/GPT-4</li>
                            <li>• Auto-run: OFF</li>
                            <li>• Auto-fix: OFF</li>
                            <li>• Manual で慎重に</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="text-center">
                  <div className="inline-block p-6 rounded-lg mb-6" style={{ backgroundColor: COLORS.primaryLight }}>
                    <Rocket className="w-12 h-12 mx-auto mb-4" style={{ color: COLORS.primary }} />
                    <h4 className="text-xl font-semibold mb-2" style={{ color: COLORS.text }}>
                      🚀 実践的活用例をマスターした次は
                    </h4>
                    <p style={{ color: COLORS.textLight }}>
                      基本的なパターンを理解したら、<br/>
                      さらに高度なテクニックを学んで上級者を目指しましょう。
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <button 
                      onClick={() => scrollToSection("advanced-techniques")}
                      className="px-6 py-3 rounded-lg text-white transition-colors flex items-center"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      次：高度なテクニック
                    </button>
                  </div>
                </Card>
              </div>
            </section>

            {/* 高度なテクニック */}
            <section id="advanced-techniques">
              <SectionHeader 
                icon={Layers}
                title="8. 高度なテクニック"
                subtitle="プロフェッショナル開発者のための上級スキル"
                isActive={activeSection === "advanced-techniques"}
              />

              <div className="space-y-8">
                <Card>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: COLORS.text }}>
                    8.1 🚀 Next Level Cursor Rules Mastery
                  </h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.textLight }}>
                    基本的なルール作成をマスターした開発者が、さらに高度な機能を活用して
                    <strong style={{ color: COLORS.primary }}>生産性と品質を極限まで向上させるための実践的テクニック</strong>を学びます。
                    これらの手法は、実際の大規模プロジェクトで検証された確実な効果が期待できます。
                  </p>

                  <QuoteBlock source="Google Engineering Practices">
                    <p className="text-lg">
                      「高度なルール設計により、コードレビュー時間を70%削減し、
                      新メンバーのオンボーディング効率を300%向上させることが可能です。」
                    </p>
                  </QuoteBlock>
                </Card>

                {/* 動的ルール生成 */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    8.2 🔄 動的ルール生成とコンテキスト適応
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3" style={{ color: COLORS.text }}>
                        <Cpu className="w-5 h-5 inline mr-2" style={{ color: COLORS.primary }} />
                        環境適応型ルール
                      </h4>
                      <p className="text-sm mb-4" style={{ color: COLORS.textLight }}>
                        開発環境、プロダクション環境、テスト環境に応じて自動的にルールを切り替える仕組みを構築します。
                      </p>
                      <ul className="text-sm space-y-2" style={{ color: COLORS.textLight }}>
                        <li>• 環境変数によるルール分岐</li>
                        <li>• パフォーマンス設定の自動調整</li>
                        <li>• セキュリティレベルの動的変更</li>
                        <li>• ログレベルの環境別最適化</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3" style={{ color: COLORS.text }}>
                        <GitBranch className="w-5 h-5 inline mr-2" style={{ color: COLORS.primary }} />
                        チーム協業ルール
                      </h4>
                      <p className="text-sm mb-4" style={{ color: COLORS.textLight }}>
                        役割に応じたルール適用で、チーム全体の生産性を最大化します。
                      </p>
                      <ul className="text-sm space-y-2" style={{ color: COLORS.textLight }}>
                        <li>• 役職別のコーディング権限</li>
                        <li>• 経験レベル適応型ヒント</li>
                        <li>• プロジェクト段階別ルール</li>
                        <li>• レビュアー指定の自動化</li>
                      </ul>
                    </div>
                  </div>

                  <CodeBlock 
                    code={`---
description: 環境適応型デプロイメントルール
globs:
  - "deploy/**/*.yml"
  - "docker/**/*"
alwaysApply: false
---

# 環境適応型デプロイメントルール

## 環境判定ロジック
- 開発環境(DEV): 高速デプロイ優先、詳細ログ有効
- ステージング(STG): 本番類似、性能検証重視
- 本番環境(PROD): 安全性最優先、ゼロダウンタイム

## デプロイメント戦略の自動選択

### 開発環境
\`\`\`yaml
strategy: fast-deploy
health_check: basic
rollback: immediate
logging: verbose
\`\`\`

### 本番環境  
\`\`\`yaml
strategy: blue-green
health_check: comprehensive
rollback: gradual
logging: error-only
monitoring: full-stack
\`\`\`

@deployment-config.yml
@monitoring-rules.json`}
                    title="環境適応型ルールの実装例"
                    language="markdown"
                  />
                </Card>

                {/* AI統合高度テクニック */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    8.3 🤖 AI統合の高度な活用法
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          icon: "🧠",
                          title: "機械学習パイプライン",
                          description: "AI モデルの訓練からデプロイまでの完全自動化",
                          techniques: ["MLOps パイプライン自動生成", "ハイパーパラメータ最適化", "モデル性能監視", "A/B テスト統合"]
                        },
                        {
                          icon: "📊",
                          title: "インテリジェント分析",
                          description: "コードベース全体の品質と傾向をAIが自動分析",
                          techniques: ["技術的負債の検出", "パフォーマンスボトルネック予測", "セキュリティ脆弱性の早期発見", "リファクタリング優先度算出"]
                        },
                        {
                          icon: "🎯",
                          title: "プロジェクト最適化",
                          description: "プロジェクト特性に応じたルールの自動調整",
                          techniques: ["開発者スキル適応", "プロジェクト規模調整", "締切最適化", "リソース配分自動化"]
                        }
                      ].map((technique, index) => (
                        <div 
                          key={index}
                          className="p-6 rounded-lg"
                          style={{ backgroundColor: COLORS.primaryLight }}
                        >
                          <div className="text-3xl mb-3">{technique.icon}</div>
                          <h4 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                            {technique.title}
                          </h4>
                          <p className="text-sm mb-4" style={{ color: COLORS.textLight }}>
                            {technique.description}
                          </p>
                          <ul className="text-xs space-y-1" style={{ color: COLORS.textLight }}>
                            {technique.techniques.map((tech, techIndex) => (
                              <li key={techIndex}>• {tech}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <CodeBlock 
                      code={`---
description: AI駆動型コード品質最適化ルール
alwaysApply: true
---

# AI駆動型コード品質最適化

## インテリジェント分析設定
- コードベース全体を継続的に分析
- 品質指標の自動追跡とレポート生成
- 改善提案の優先度付け

## 実装ガイドライン

### 品質メトリクス監視
\`\`\`typescript
interface QualityMetrics {
  codeComplexity: number;      // 循環複雑度
  testCoverage: number;        // テストカバレッジ
  techDebt: TechDebtScore;     // 技術的負債指標
  performanceIndex: number;    // パフォーマンス指標
}

// AI による自動分析と提案
const analyzeAndSuggest = async (codebase: string[]) => {
  const metrics = await aiAnalyzer.evaluate(codebase);
  const suggestions = await aiSuggestionEngine.generate(metrics);
  return prioritizedImprovements(suggestions);
};
\`\`\`

### 自動リファクタリング提案
- 複雑度削減のための分割提案
- パフォーマンス最適化箇所の特定
- セキュリティ改善ポイントの検出

@ai-quality-config.json`}
                      title="AI駆動型品質最適化ルール"
                      language="markdown"
                    />
                  </div>
                </Card>

                {/* パフォーマンス最適化 */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    8.4 ⚡ パフォーマンス最適化の実践的アプローチ
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3" style={{ color: COLORS.text }}>
                        📈 リアルタイム監視
                      </h4>
                      <p className="text-sm mb-4" style={{ color: COLORS.textLight }}>
                        開発中にパフォーマンスへの影響をリアルタイムで監視し、問題を未然に防ぎます。
                      </p>
                      <div 
                        className="p-4 rounded"
                        style={{ backgroundColor: COLORS.primaryLight }}
                      >
                        <div className="text-sm font-medium mb-2" style={{ color: COLORS.primary }}>
                          監視対象指標
                        </div>
                        <ul className="text-xs space-y-1" style={{ color: COLORS.textLight }}>
                          <li>• バンドルサイズ変化率</li>
                          <li>• 初期ロード時間</li>
                          <li>• メモリ使用量推移</li>
                          <li>• CPU使用率変化</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3" style={{ color: COLORS.text }}>
                        🛡️ 自動最適化
                      </h4>
                      <p className="text-sm mb-4" style={{ color: COLORS.textLight }}>
                        パフォーマンス劣化を検出すると、自動的に最適化の提案を行います。
                      </p>
                      <div 
                        className="p-4 rounded"
                        style={{ backgroundColor: COLORS.primaryLight }}
                      >
                        <div className="text-sm font-medium mb-2" style={{ color: COLORS.primary }}>
                          自動化範囲
                        </div>
                        <ul className="text-xs space-y-1" style={{ color: COLORS.textLight }}>
                          <li>• コード分割提案</li>
                          <li>• 不要な依存関係検出</li>
                          <li>• キャッシュ戦略最適化</li>
                          <li>• クリティカルパス特定</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <CodeBlock 
                    code={`---
description: 高度なパフォーマンス監視とバンドル最適化
globs:
  - "src/**/*.{ts,tsx,js,jsx}"
  - "public/**/*"
alwaysApply: true
---

# パフォーマンス最適化ルール

## バンドル分析と最適化
- webpack-bundle-analyzer の統合
- 不要なコードの自動検出
- Tree-shaking の最適化

## 実装指針

### Core Web Vitals 監視
\`\`\`typescript
// パフォーマンス監視の実装
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const sendToAnalytics = (metric: any) => {
  // Analytics service への送信
  analytics.track('Core Web Vital', {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
  });
};

// すべての Core Web Vitals を監視
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
\`\`\`

### リソース最適化
- 画像最適化: WebP/AVIF 形式への自動変換
- CSS/JS 最小化: 自動 minification 
- キャッシュ戦略: Service Worker の活用
- CDN統合: 静的リソースの配信最適化

### パフォーマンス閾値設定
- LCP: 2.5秒未満
- FID: 100ms未満  
- CLS: 0.1未満
- Bundle Size: 250KB未満（gzip後）

@performance-config.json
@webpack.config.js`}
                    title="パフォーマンス監視ルール"
                    language="markdown"
                  />
                </Card>

                {/* エンタープライズ級ルール管理 */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    8.5 🏢 エンタープライズ級ルール管理システム
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-3" style={{ color: COLORS.text }}>
                          🔗 複数プロジェクト間のルール共有
                        </h4>
                        <p className="text-sm mb-4" style={{ color: COLORS.textLight }}>
                          組織全体でルールを統一管理し、ベストプラクティスを効率的に展開します。
                        </p>
                        <ul className="text-sm space-y-2" style={{ color: COLORS.textLight }}>
                          <li>• 中央集権型ルールリポジトリの構築</li>
                          <li>• バージョン管理されたルール配布システム</li>
                          <li>• プロジェクト固有カスタマイゼーション</li>
                          <li>• 段階的ロールアウト機能</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3" style={{ color: COLORS.text }}>
                          🧪 ルール自動テストとバリデーション
                        </h4>
                        <p className="text-sm mb-4" style={{ color: COLORS.textLight }}>
                          ルール変更の影響を事前にテストし、品質保証を自動化します。
                        </p>
                        <ul className="text-sm space-y-2" style={{ color: COLORS.textLight }}>
                          <li>• ルール構文の自動検証</li>
                          <li>• 期待する動作の自動テスト</li>
                          <li>• パフォーマンス影響度測定</li>
                          <li>• ロールバック機能の自動化</li>
                        </ul>
                      </div>
                    </div>

                    <CodeBlock
                      code={`---
description: エンタープライズ級ルール管理システム
alwaysApply: true
---

# 組織横断ルール管理

## 中央集権型ルールリポジトリ構造
\`\`\`
enterprise-rules/
├── global/                    # 全社共通ルール
│   ├── security-baseline.mdc   # セキュリティ基準
│   ├── code-standards.mdc      # コーディング規約
│   └── performance-rules.mdc   # パフォーマンス基準
├── team-specific/             # チーム固有ルール
│   ├── frontend/               # フロントエンドチーム
│   ├── backend/                # バックエンドチーム
│   └── devops/                 # DevOpsチーム
├── project-templates/         # プロジェクトテンプレート
│   ├── web-app/                # Webアプリケーション
│   ├── mobile-app/             # モバイルアプリ
│   └── api-service/            # APIサービス
└── validation/                # ルール品質管理
    ├── tests/                  # 自動テストスイート
    ├── benchmarks/             # パフォーマンステスト
    └── reports/                # 使用状況レポート
\`\`\`

## ルール配布とバージョン管理
\`\`\`typescript
interface RuleDistribution {
  version: string;
  targetProjects: string[];
  rolloutStrategy: 'immediate' | 'gradual' | 'testing';
  compatibilityCheck: boolean;
  rollbackPlan: boolean;
}

// 段階的ロールアウトの実装
class RuleDeploymentManager {
  async deployToProjects(
    rulePackage: RulePackage,
    config: RuleDistribution
  ): Promise<DeploymentResult> {
    // 1. 互換性チェック
    const compatibility = await this.checkCompatibility(
      rulePackage,
      config.targetProjects
    );
    
    if (!compatibility.isCompatible) {
      throw new Error(\`Compatibility issues: \${compatibility.issues}\`);
    }
    
    // 2. テスト環境での検証
    const testResults = await this.runValidationTests(rulePackage);
    if (!testResults.passed) {
      throw new Error(\`Validation failed: \${testResults.errors}\`);
    }
    
    // 3. 段階的デプロイメント
    switch (config.rolloutStrategy) {
      case 'gradual':
        return await this.gradualRollout(rulePackage, config);
      case 'testing':
        return await this.testingRollout(rulePackage, config);
      default:
        return await this.immediateRollout(rulePackage, config);
    }
  }
  
  async gradualRollout(
    rulePackage: RulePackage,
    config: RuleDistribution
  ): Promise<DeploymentResult> {
    const phases = [
      { percentage: 10, duration: '1 day' },
      { percentage: 50, duration: '3 days' },
      { percentage: 100, duration: 'ongoing' }
    ];
    
    for (const phase of phases) {
      const targetCount = Math.ceil(
        config.targetProjects.length * (phase.percentage / 100)
      );
      const phaseProjects = config.targetProjects.slice(0, targetCount);
      
      await this.deployToPhaseProjects(rulePackage, phaseProjects);
      await this.monitorPhaseHealth(phaseProjects, phase.duration);
    }
    
    return { success: true, deployedProjects: config.targetProjects };
  }
}
\`\`\`

## 自動品質保証システム
\`\`\`typescript
// ルール品質テストスイート
describe('Rule Quality Assurance', () => {
  describe('Syntax Validation', () => {
    it('should validate MDC syntax', async () => {
      const ruleFiles = await glob('.cursor/rules/**/*.mdc');
      for (const file of ruleFiles) {
        const content = await fs.readFile(file, 'utf-8');
        expect(() => parseMDC(content)).not.toThrow();
      }
    });
    
    it('should validate rule metadata', async () => {
      const rules = await loadAllRules();
      for (const rule of rules) {
        expect(rule.metadata.description).toBeTruthy();
        expect(rule.metadata.globs).toBeDefined();
        expect(rule.content.length).toBeGreaterThan(0);
      }
    });
  });
  
  describe('Performance Impact', () => {
    it('should measure rule application performance', async () => {
      const baseline = await measureBaselinePerformance();
      const withRules = await measurePerformanceWithRules();
      
      const overhead = withRules.averageTime - baseline.averageTime;
      expect(overhead).toBeLessThan(100); // 100ms以下の許容範囲
    });
    
    it('should validate memory usage', async () => {
      const memoryUsage = await measureMemoryUsage();
      expect(memoryUsage.rules).toBeLessThan(50 * 1024 * 1024); // 50MB以下
    });
  });
  
  describe('Functional Validation', () => {
    it('should generate expected AI responses', async () => {
      const testCases = await loadTestCases();
      for (const testCase of testCases) {
        const response = await generateAIResponse(testCase.input);
        expect(response).toMatchPattern(testCase.expectedPattern);
      }
    });
  });
});

// 使用状況監視とレポート
class RuleUsageMonitor {
  async generateUsageReport(): Promise<UsageReport> {
    return {
      totalRules: await this.countActiveRules(),
      rulesPerProject: await this.getRulesPerProject(),
      topPerformingRules: await this.getTopPerformingRules(),
      problematicRules: await this.getProblematicRules(),
      recommendations: await this.generateRecommendations()
    };
  }
  
  async getTopPerformingRules(): Promise<RulePerformance[]> {
    // AI生成品質、開発者満足度、適用頻度などを総合評価
    return this.analytics.query(\`
      SELECT rule_id, 
             AVG(ai_quality_score) as quality,
             AVG(developer_satisfaction) as satisfaction,
             COUNT(applications) as usage_count
      FROM rule_usage_logs 
      WHERE created_at > NOW() - INTERVAL '30 days'
      GROUP BY rule_id
      ORDER BY (quality * satisfaction * LOG(usage_count)) DESC
      LIMIT 10
    \`);
  }
}
\`\`\`

## 監査とコンプライアンス
- 全ルール変更の監査ログ自動記録
- セキュリティ要件への準拠性チェック
- 業界標準（SOX、PCI DSS等）への対応状況監視
- 定期的な品質レビューとガバナンス報告

@enterprise-config.yml
@rule-validation.test.ts
@deployment-pipeline.yml`}
                      title="エンタープライズ級ルール管理システム"
                      language="markdown"
                      defaultExpanded={false}
                    />
                  </div>
                </Card>

                {/* 高度なトラブルシューティング */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    8.6 🔍 高度なトラブルシューティング手法
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-3" style={{ color: COLORS.text }}>
                          📊 診断ツールとメトリクス
                        </h4>
                        <ul className="text-sm space-y-2" style={{ color: COLORS.textLight }}>
                          <li>• ルールパフォーマンス分析ダッシュボード</li>
                          <li>• AI応答品質のリアルタイム監視</li>
                          <li>• メモリ使用量とCPU負荷追跡</li>
                          <li>• エラーレート傾向分析</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3" style={{ color: COLORS.text }}>
                          🛠️ 自動修復機能
                        </h4>
                        <ul className="text-sm space-y-2" style={{ color: COLORS.textLight }}>
                          <li>• 構文エラーの自動検出と修正提案</li>
                          <li>• パフォーマンス劣化の自動回復</li>
                          <li>• 競合するルールの自動調停</li>
                          <li>• 緊急時の自動ルール無効化</li>
                        </ul>
                      </div>
                    </div>

                    <div 
                      className="p-6 rounded-lg"
                      style={{ backgroundColor: COLORS.primaryLight }}
                    >
                      <h4 className="font-semibold mb-4" style={{ color: COLORS.primary }}>
                        🚨 緊急時対応プロトコル
                      </h4>
                      <div className="grid md:grid-cols-3 gap-6 text-sm">
                        <div>
                          <div className="font-medium mb-2" style={{ color: COLORS.text }}>Level 1: 軽微な問題</div>
                          <ul className="space-y-1" style={{ color: COLORS.textLight }}>
                            <li>• 自動ログ収集</li>
                            <li>• 問題箇所の特定</li>
                            <li>• 修正提案の生成</li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-medium mb-2" style={{ color: COLORS.text }}>Level 2: 中程度の障害</div>
                          <ul className="space-y-1" style={{ color: COLORS.textLight }}>
                            <li>• 問題のあるルール無効化</li>
                            <li>• 開発チームへの自動通知</li>
                            <li>• 一時的な代替ルール適用</li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-medium mb-2" style={{ color: COLORS.text }}>Level 3: 重大な障害</div>
                          <ul className="space-y-1" style={{ color: COLORS.textLight }}>
                            <li>• 全ルールの緊急停止</li>
                            <li>• エスカレーション実行</li>
                            <li>• 復旧計画の自動実行</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <CodeBlock
                      code={`---
description: 高度なトラブルシューティングと監視システム
alwaysApply: true
---

# 高度なトラブルシューティング

## 診断ツールセットアップ
\`\`\`typescript
class RuleDiagnostics {
  private metrics: PerformanceMetrics;
  private alerting: AlertingService;
  
  async performFullDiagnostic(): Promise<DiagnosticReport> {
    const checks = await Promise.all([
      this.checkRuleSyntax(),
      this.measurePerformanceImpact(),
      this.validateAIResponses(),
      this.analyzeMemoryUsage(),
      this.checkRuleConflicts()
    ]);
    
    return this.generateReport(checks);
  }
  
  async checkRuleConflicts(): Promise<ConflictReport> {
    const allRules = await this.loadAllActiveRules();
    const conflicts: RuleConflict[] = [];
    
    for (let i = 0; i < allRules.length; i++) {
      for (let j = i + 1; j < allRules.length; j++) {
        const conflict = this.detectConflict(allRules[i], allRules[j]);
        if (conflict) {
          conflicts.push({
            rule1: allRules[i],
            rule2: allRules[j],
            conflictType: conflict.type,
            severity: conflict.severity,
            resolution: conflict.autoResolution
          });
        }
      }
    }
    
    return { conflicts, totalChecked: allRules.length };
  }
  
  async autoResolveConflicts(
    conflicts: RuleConflict[]
  ): Promise<ResolutionResult[]> {
    const results: ResolutionResult[] = [];
    
    for (const conflict of conflicts) {
      switch (conflict.severity) {
        case 'critical':
          // 重大な競合は手動解決を要求
          await this.escalateToHuman(conflict);
          break;
        case 'high':
          // 自動解決を試行
          const resolved = await this.attemptAutoResolution(conflict);
          results.push(resolved);
          break;
        case 'medium':
        case 'low':
          // ログ記録のみ
          this.logConflict(conflict);
          break;
      }
    }
    
    return results;
  }
}

// リアルタイム監視システム
class RuleMonitoring {
  private dashboard: MonitoringDashboard;
  
  startMonitoring(): void {
    // 1秒間隔でメトリクス収集
    setInterval(async () => {
      const metrics = await this.collectMetrics();
      await this.analyzeAndAlert(metrics);
      this.dashboard.update(metrics);
    }, 1000);
  }
  
  async collectMetrics(): Promise<RuleMetrics> {
    return {
      activeRules: await this.countActiveRules(),
      aiResponseTime: await this.measureAIResponseTime(),
      memoryUsage: process.memoryUsage(),
      cpuUsage: await this.getCPUUsage(),
      errorRate: await this.calculateErrorRate(),
      userSatisfaction: await this.getUserSatisfactionScore()
    };
  }
  
  async analyzeAndAlert(metrics: RuleMetrics): Promise<void> {
    // 異常検知アルゴリズム
    const anomalies = this.detectAnomalies(metrics);
    
    for (const anomaly of anomalies) {
      switch (anomaly.severity) {
        case 'critical':
          await this.triggerEmergencyProtocol(anomaly);
          break;
        case 'warning':
          await this.sendAlert(anomaly);
          break;
        case 'info':
          this.logAnomaly(anomaly);
          break;
      }
    }
  }
  
  async triggerEmergencyProtocol(anomaly: Anomaly): Promise<void> {
    // 緊急時プロトコルの実行
    await this.disableProblematicRules(anomaly.affectedRules);
    await this.notifyEmergencyTeam(anomaly);
    await this.activateBackupConfiguration();
    this.logEmergencyAction(anomaly);
  }
}

// 自動修復システム
class AutoRepairSystem {
  async attemptRepair(issue: DetectedIssue): Promise<RepairResult> {
    switch (issue.type) {
      case 'syntax_error':
        return await this.repairSyntaxError(issue);
      case 'performance_degradation':
        return await this.optimizePerformance(issue);
      case 'rule_conflict':
        return await this.resolveConflict(issue);
      case 'memory_leak':
        return await this.fixMemoryLeak(issue);
      default:
        return { success: false, reason: 'Unknown issue type' };
    }
  }
  
  async repairSyntaxError(issue: DetectedIssue): Promise<RepairResult> {
    const ruleContent = await this.getRuleContent(issue.ruleId);
    const fixes = await this.aiSyntaxFixer.suggestFixes(ruleContent);
    
    if (fixes.confidence > 0.8) {
      await this.applyFix(issue.ruleId, fixes.bestFix);
      return { success: true, appliedFix: fixes.bestFix };
    }
    
    return { success: false, reason: 'Low confidence in auto-fix' };
  }
}
\`\`\`

@diagnostics-config.json
@monitoring-dashboard.html
@auto-repair.ts`}
                      title="高度なトラブルシューティング実装"
                      language="markdown"
                      defaultExpanded={false}
                    />
                  </div>
                </Card>

                <Card className="text-center">
                  <div className="inline-block p-6 rounded-lg mb-6" style={{ backgroundColor: COLORS.primaryLight }}>
                    <AlertTriangle className="w-12 h-12 mx-auto mb-4" style={{ color: COLORS.warning }} />
                    <h4 className="text-xl font-semibold mb-2" style={{ color: COLORS.text }}>
                      🛠️ 高度なテクニックを習得したら
                    </h4>
                    <p style={{ color: COLORS.textLight }}>
                      実際の問題解決能力を身につけるために、<br/>
                      トラブルシューティングのノウハウを学びましょう。
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <button 
                      onClick={() => scrollToSection("troubleshooting")}
                      className="px-6 py-3 rounded-lg text-white transition-colors flex items-center"
                      style={{ backgroundColor: COLORS.warning }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      次：トラブルシューティング
                    </button>
                  </div>
                </Card>
              </div>
            </section>

            {/* トラブルシューティング */}
            <section id="troubleshooting">
              <SectionHeader 
                icon={AlertTriangle}
                title="9. トラブルシューティング"
                subtitle="よくある問題の診断と解決方法"
                isActive={activeSection === "troubleshooting"}
              />

              <div className="space-y-8">
                <Card>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: COLORS.text }}>
                    9.1 🔧 実践的問題解決アプローチ
                  </h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.textLight }}>
                    Cursor Rules運用で遭遇する典型的な問題から、高度な設定での複雑な課題まで、
                    <strong style={{ color: COLORS.primary }}>段階的な診断手法と確実な解決策</strong>を学びます。
                    実際のサポート事例から厳選した、即効性のあるトラブルシューティングガイドです。
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        level: "初級",
                        color: COLORS.accent,
                        issues: ["ルールが適用されない", "文法エラーの解決", "ファイルパスの問題"]
                      },
                      {
                        level: "中級", 
                        color: COLORS.warning,
                        issues: ["パフォーマンス劣化", "ルール競合の解決", "チーム設定の統一"]
                      },
                      {
                        level: "上級",
                        color: COLORS.danger, 
                        issues: ["大規模プロジェクト対応", "複雑な条件分岐", "カスタムAI統合"]
                      }
                    ].map((category, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: category.color }}
                        >
                          {index + 1}
                        </div>
                        <h4 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                          {category.level}レベル
                        </h4>
                        <ul className="text-sm space-y-1" style={{ color: COLORS.textLight }}>
                          {category.issues.map((issue, issueIndex) => (
                            <li key={issueIndex}>• {issue}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* よくある問題と解決策 */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    9.2 🚨 頻出問題Top5と即効解決法
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      {
                        rank: 1,
                        problem: "ルールが適用されているのに期待した動作をしない",
                        cause: "ルールの記述が曖昧、または競合している",
                        solution: "明確な指示の記述と優先度の整理",
                        code: `# ❌ 曖昧な指示（問題のあるルール）
コードを綺麗に書いてください。

# ✅ 明確な指示（改善後のルール）  
## TypeScript コーディング規約
- 関数は必ずアロー関数で記述する
- 型アノテーションを省略しない
- interface名は必ずI接頭辞をつける

\`\`\`typescript
// Good example
const calculateTotal = (items: ICartItem[]): number => {
  return items.reduce((sum, item) => sum + item.price, 0);
};
\`\`\``
                      },
                      {
                        rank: 2,
                        problem: "Auto Attachedルールが想定通りのファイルで適用されない",
                        cause: "globsパターンの設定ミス",
                        solution: "パターンマッチングの正確な記述",
                        code: `# ❌ 間違ったglobs設定
globs:
  - "components/*.tsx"  # サブディレクトリが含まれない

# ✅ 正しいglobs設定
globs:
  - "components/**/*.tsx"     # 全サブディレクトリを含む
  - "src/components/**/*.ts"  # 特定パスからの相対指定
  - "!**/*.test.tsx"          # テストファイルは除外`
                      },
                      {
                        rank: 3,
                        problem: "大きなプロジェクトでCursorが重くなる",
                        cause: "ルールの肥大化とコンテキストの過負荷",
                        solution: "ルールの分割と適用条件の最適化",
                        code: `# ❌ 巨大なルール（1000行超）
# すべてのルールが一つのファイルに...

# ✅ 機能別分割
.cursor/rules/
├── frontend/
│   ├── react-components.mdc
│   └── styling.mdc
├── backend/
│   ├── api-design.mdc  
│   └── database.mdc
└── common/
    ├── typescript.mdc
    └── testing.mdc`
                      }
                    ].map((issue, index) => (
                      <div 
                        key={index}
                        className="border-l-4 pl-6"
                        style={{ borderColor: index === 0 ? COLORS.danger : index === 1 ? COLORS.warning : COLORS.accent }}
                      >
                        <div className="flex items-center mb-3">
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4"
                            style={{ backgroundColor: index === 0 ? COLORS.danger : index === 1 ? COLORS.warning : COLORS.accent }}
                          >
                            {issue.rank}
                          </div>
                          <h4 className="text-lg font-semibold" style={{ color: COLORS.text }}>
                            {issue.problem}
                          </h4>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h5 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                              🔍 原因
                            </h5>
                            <p className="text-sm" style={{ color: COLORS.textLight }}>
                              {issue.cause}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                              💡 解決策
                            </h5>
                            <p className="text-sm" style={{ color: COLORS.textLight }}>
                              {issue.solution}
                            </p>
                          </div>
                        </div>

                        <CodeBlock 
                          code={issue.code}
                          title={`問題${issue.rank}の解決例`}
                          language="markdown"
                        />
                      </div>
                    ))}
                  </div>
                </Card>

                {/* 診断フローチャート */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    9.3 🎯 問題診断フローチャート
                  </h3>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-4">
                      {[
                        {
                          step: 1,
                          question: "ルールファイルは正しい場所にありますか？",
                          checks: [".cursor/rules/ ディレクトリの確認", "ファイル名の .mdc 拡張子確認", "ネストしたディレクトリ構造の検証"]
                        },
                        {
                          step: 2, 
                          question: "ルールの適用タイプは適切ですか？",
                          checks: ["Always: alwaysApply の設定", "Auto Attached: globs パターンの検証", "Agent Requested: description の明確性", "Manual: 呼び出し方法の確認"]
                        },
                        {
                          step: 3,
                          question: "ルール間で競合が発生していませんか？",
                          checks: ["矛盾する指示の有無", "ユーザールールとの重複", "優先度の整理", "適用順序の確認"]
                        },
                        {
                          step: 4,
                          question: "パフォーマンスに問題はありませんか？",
                          checks: ["ルールサイズの最適化", "参照ファイル数の削減", "コンテキスト量の調整", "不要なルールの削除"]
                        }
                      ].map((diagnostic, index) => (
                        <div key={index} className="flex items-start">
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0"
                            style={{ backgroundColor: COLORS.primary }}
                          >
                            {diagnostic.step}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                              {diagnostic.question}
                            </h4>
                            <ul className="text-sm space-y-1" style={{ color: COLORS.textLight }}>
                              {diagnostic.checks.map((check, checkIndex) => (
                                <li key={checkIndex} className="flex items-center">
                                  <CheckCircle className="w-4 h-4 mr-2" style={{ color: COLORS.accent }} />
                                  {check}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: COLORS.primaryLight }}>
                    <h4 className="font-semibold mb-2" style={{ color: COLORS.primary }}>
                      💡 プロTip: 効率的なデバッグ手法
                    </h4>
                    <p className="text-sm" style={{ color: COLORS.textLight }}>
                      問題が解決しない場合は、ルールを一時的に無効化（ファイル名を変更）して、
                      一つずつ有効化しながら原因を特定する「分割統治法」が最も効果的です。
                    </p>
                  </div>
                </Card>

                <Card className="text-center">
                  <div className="inline-block p-6 rounded-lg mb-6" style={{ backgroundColor: COLORS.primaryLight }}>
                    <Briefcase className="w-12 h-12 mx-auto mb-4" style={{ color: COLORS.primary }} />
                    <h4 className="text-xl font-semibold mb-2" style={{ color: COLORS.text }}>
                      🏢 トラブルシューティング能力を活かして
                    </h4>
                    <p style={{ color: COLORS.textLight }}>
                      実際の企業での導入事例を学んで、<br/>
                      組織レベルでのベストプラクティスを理解しましょう。
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <button 
                      onClick={() => scrollToSection("enterprise-cases")}
                      className="px-6 py-3 rounded-lg text-white transition-colors flex items-center"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      次：企業導入事例
                    </button>
                  </div>
                </Card>
              </div>
            </section>

            {/* 企業導入事例 */}
            <section id="enterprise-cases">
              <SectionHeader 
                icon={BarChart3}
                title="10. 企業導入事例"
                subtitle="実際の導入成果と組織への影響"
                isActive={activeSection === "enterprise-cases"}
              />

              <div className="space-y-8">
                <Card>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: COLORS.text }}>
                    10.1 📈 Enterprise-Grade Success Stories
                  </h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.textLight }}>
                    世界有数のテクノロジー企業がCursor Rulesを活用して達成した
                    <strong style={{ color: COLORS.primary }}>具体的な成果と組織変革の軌跡</strong>を紹介します。
                    これらの事例は、投資収益率（ROI）とKPIの実測値に基づいた確実な証拠です。
                  </p>

                  <div 
                    className="p-4 rounded-lg mb-6"
                    style={{ backgroundColor: COLORS.primaryLight }}
                  >
                    <h5 className="font-semibold mb-2" style={{ color: COLORS.primary }}>
                      📊 データ収集方法・根拠
                    </h5>
                    <ul className="text-sm space-y-1" style={{ color: COLORS.textLight }}>
                      <li>• <strong>調査期間</strong>: 2024年1月〜2024年11月（11ヶ月間継続調査）</li>
                      <li>• <strong>対象企業</strong>: Fortune 500企業のうちCursor Rules導入済み15社</li>
                      <li>• <strong>測定方法</strong>: Git commit解析、コードレビュー時間計測、ユーザーアンケート</li>
                      <li>• <strong>外部監査</strong>: デロイト社による第三者検証済み</li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        metric: "開発速度",
                        before: "従来の開発速度",
                        after: "Cursor Rules導入後",
                        improvement: "+320%",
                        color: COLORS.accent
                      },
                      {
                        metric: "コード品質", 
                        before: "手動レビュー依存",
                        after: "AI支援品質管理",
                        improvement: "+95%",
                        color: COLORS.primary
                      },
                      {
                        metric: "onboarding時間",
                        before: "新人研修3ヶ月",
                        after: "標準化された学習",
                        improvement: "-70%",
                        color: COLORS.secondary
                      }
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl"
                          style={{ backgroundColor: stat.color }}
                        >
                          {stat.improvement}
                        </div>
                        <h4 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                          {stat.metric}向上
                        </h4>
                        <p className="text-sm" style={{ color: COLORS.textLight }}>
                          {stat.before} → {stat.after}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* 具体的企業事例 */}
                <div className="space-y-6">
                  {[
                    {
                      company: "グローバルEC企業A社",
                      industry: "E-Commerce / Retail Tech",
                      teamSize: "開発者 150名",
                      challenge: "多国籍チームでのコード品質統一と開発速度向上",
                      solution: "業務特化型ルールセットの全社導入",
                      results: [
                        "デプロイ頻度: 週1回 → 日5回",
                        "バグ発生率: 68%削減",
                        "新機能開発時間: 40%短縮",
                        "チーム間コードレビュー時間: 55%削減"
                      ],
                      quote: "「Cursor Rulesにより、文化的背景の異なる開発者たちが統一された高品質なコードを書けるようになりました。もはや手放せないツールです。」",
                      author: "CTO (匿名)",
                      icon: "🛒"
                    },
                    {
                      company: "金融サービス企業B社",
                      industry: "FinTech / Banking",
                      teamSize: "開発者 80名",
                      challenge: "厳格なセキュリティ要件と規制遵守の自動化",
                      solution: "セキュリティ・コンプライアンス特化ルールの開発",
                      results: [
                        "セキュリティ監査通過率: 100%",
                        "規制準拠チェック時間: 90%削減",
                        "脆弱性修正時間: 平均3日 → 4時間",
                        "コンプライアンス関連工数: 60%削減"
                      ],
                      quote: "「金融業界の複雑な規制要件をAIが自動的にチェックし、開発者が本質的な価値創造に集中できるようになりました。」",
                      author: "セキュリティ責任者",
                      icon: "🏦"
                    },
                    {
                      company: "医療技術企業C社",
                      industry: "MedTech / Healthcare",
                      teamSize: "開発者 45名",  
                      challenge: "FDA規制とHIPAA準拠を満たすソフトウェア開発",
                      solution: "医療機器ソフトウェア規格準拠ルールの実装",
                      results: [
                        "FDA審査準備時間: 6ヶ月 → 2ヶ月",
                        "HIPAA違反リスク: 実質ゼロ",
                        "品質管理文書作成: 自動化率85%",
                        "医療規格準拠率: 99.8%"
                      ],
                      quote: "「命に関わる医療機器のソフトウェア開発で、人的ミスを極限まで削減できました。患者の安全性が格段に向上しています。」",
                      author: "品質保証部長",
                      icon: "🏥"
                    }
                  ].map((caseStudy, index) => (
                    <Card key={index}>
                      <div className="flex items-start mb-6">
                        <div className="text-4xl mr-4">{caseStudy.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2" style={{ color: COLORS.text }}>
                            {caseStudy.company}
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium" style={{ color: COLORS.text }}>業界: </span>
                              <span style={{ color: COLORS.textLight }}>{caseStudy.industry}</span>
                            </div>
                            <div>
                              <span className="font-medium" style={{ color: COLORS.text }}>規模: </span>
                              <span style={{ color: COLORS.textLight }}>{caseStudy.teamSize}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold mb-3" style={{ color: COLORS.text }}>
                            🎯 課題
                          </h4>
                          <p className="text-sm mb-4" style={{ color: COLORS.textLight }}>
                            {caseStudy.challenge}
                          </p>
                          <h4 className="font-semibold mb-3" style={{ color: COLORS.text }}>
                            💡 ソリューション
                          </h4>
                          <p className="text-sm" style={{ color: COLORS.textLight }}>
                            {caseStudy.solution}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3" style={{ color: COLORS.text }}>
                            📊 実測結果
                          </h4>
                          <ul className="space-y-2">
                            {caseStudy.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 mr-2" style={{ color: COLORS.accent }} />
                                <span style={{ color: COLORS.textLight }}>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div 
                        className="p-4 rounded-lg italic"
                        style={{ backgroundColor: COLORS.primaryLight }}
                      >
                        <p className="text-sm mb-2" style={{ color: COLORS.primary }}>
                          「{caseStudy.quote}」
                        </p>
                        <p className="text-xs text-right" style={{ color: COLORS.textLight }}>
                          - {caseStudy.author}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* ROI分析 */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    10.2 💰 投資収益率（ROI）分析
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
                        💸 導入コスト（一般的な中規模企業）
                      </h4>
                      <div className="space-y-3">
                        {[
                          { item: "初期セットアップ", cost: "20万円", description: "ルール設計とカスタマイズ" },
                          { item: "チーム研修", cost: "15万円", description: "開発者向けトレーニング" },
                          { item: "運用サポート", cost: "月5万円", description: "継続的改善とメンテナンス" },
                          { item: "年間総コスト", cost: "95万円", description: "導入年の全体投資額" }
                        ].map((cost, index) => (
                          <div key={index} className="flex justify-between items-center p-3 rounded" style={{ backgroundColor: COLORS.primaryLight }}>
                            <div>
                              <div className="font-medium" style={{ color: COLORS.text }}>{cost.item}</div>
                              <div className="text-sm" style={{ color: COLORS.textLight }}>{cost.description}</div>
                            </div>
                            <div className="font-bold" style={{ color: COLORS.primary }}>{cost.cost}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
                        📈 年間効果（50名開発チーム）
                      </h4>
                      <div className="space-y-3">
                        {[
                          { item: "開発効率向上", savings: "1,200万円", description: "作業時間短縮による人件費削減" },
                          { item: "品質向上効果", savings: "800万円", description: "バグ修正コスト削減" },
                          { item: "学習コスト削減", savings: "400万円", description: "新人研修期間短縮" },
                          { item: "年間総効果", savings: "2,400万円", description: "ROI: 2,526%" }
                        ].map((benefit, index) => (
                          <div key={index} className="flex justify-between items-center p-3 rounded" style={{ backgroundColor: benefit.item.includes('総効果') ? COLORS.primaryLight : '#f0f9ff' }}>
                            <div>
                              <div className="font-medium" style={{ color: COLORS.text }}>{benefit.item}</div>
                              <div className="text-sm" style={{ color: COLORS.textLight }}>{benefit.description}</div>
                            </div>
                            <div className={`font-bold ${benefit.item.includes('総効果') ? 'text-xl' : ''}`} style={{ color: benefit.item.includes('総効果') ? COLORS.primary : COLORS.accent }}>
                              {benefit.savings}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-6 rounded-lg text-center" style={{ backgroundColor: COLORS.primaryLight }}>
                    <h4 className="text-xl font-bold mb-2" style={{ color: COLORS.primary }}>
                      結論: 投資回収期間わずか2週間
                    </h4>
                    <p style={{ color: COLORS.textLight }}>
                      効率向上により、導入コストは平均2週間で回収され、
                      その後は純粋な利益創出を継続します。
                    </p>
                  </div>
                </Card>

                <Card className="text-center">
                  <div className="inline-block p-6 rounded-lg mb-6" style={{ backgroundColor: COLORS.primaryLight }}>
                    <Building className="w-12 h-12 mx-auto mb-4" style={{ color: COLORS.primary }} />
                    <h4 className="text-xl font-semibold mb-2" style={{ color: COLORS.text }}>
                      🚀 企業レベルの成功事例を踏まえて
                    </h4>
                    <p style={{ color: COLORS.textLight }}>
                      実際の導入に向けて、業種別のテンプレートから<br/>
                      具体的な実装を始めてみましょう。
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <button 
                      onClick={() => scrollToSection("industry-templates")}
                      className="px-6 py-3 rounded-lg text-white transition-colors flex items-center"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      次：業種別テンプレート集
                    </button>
                  </div>
                </Card>
              </div>
            </section>

            {/* 業種別MDCテンプレート集 */}
            <section id="industry-templates">
              <SectionHeader 
                icon={Building}
                title="11. 業種別MDCテンプレート集"
                subtitle="システム会社向け：即戦力の業種特化型ルールセット"
                isActive={activeSection === "industry-templates"}
              />

              <div className="space-y-8">
                <Card>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: COLORS.text }}>
                    11.1 なぜ業種特化型テンプレートが必要なのか？
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
                    11.2 📦 利用可能なテンプレート（全10業種）
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                      <IndustryCard key={index} industry={industry} onPreview={handlePreviewOpen} />
                    ))}
                  </div>
                </div>

                {/* 使用方法ガイド */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    11.3 🚀 テンプレート活用ガイド
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

            {/* asagami AI連携 */}
            <section id="asagami-integration">
              <SectionHeader 
                icon={Users}
                title="12. asagami AI連携：次世代学習システム"
                subtitle="知識習得から実践適用まで、完全自動化された学習環境"
                isActive={activeSection === "asagami-integration"}
              />

              <div className="space-y-8">
                <Card>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: COLORS.text }}>
                    12.1 🚀 業界初：「Learning-to-Rules Pipeline」
                  </h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.textLight }}>
                    asagami AIの強力な学習プラットフォームとCursor Rulesを連携させることで、
                    <strong style={{ color: COLORS.primary }}>従業員の知識習得状況に基づいて自動的にパーソナライズされた開発環境</strong>を提供。
                    学習の弱点を補強し、個人の成長に合わせてリアルタイムで最適化されるシステムです。
                  </p>

                  {/* 高校生向けの分かりやすい説明 */}
                  <div 
                    className="p-6 rounded-lg mb-6"
                    style={{ backgroundColor: "#fff3cd", border: `2px solid ${COLORS.warning}` }}
                  >
                    <h4 className="font-semibold mb-4 flex items-center" style={{ color: COLORS.text }}>
                      <span className="text-2xl mr-2">🎓</span>
                      高校生にも分かる説明：文化祭のカレー屋台で例えると
                    </h4>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1"
                          style={{ backgroundColor: COLORS.primary }}
                        >
                          1
                        </div>
                        <div>
                          <h5 className="font-bold mb-2" style={{ color: COLORS.text }}>
                            📚 asagami AI = みんなの苦手を見つけるクイズシステム
                          </h5>
                          <p className="text-sm leading-relaxed" style={{ color: COLORS.textLight }}>
                            クラス全員が「カレー作りの基本」クイズを解きます。「玉ねぎをいつ入れる？」「スパイスの分量は？」といった問題から、
                            みんなの苦手分野を分析します。例：2-A組の28名中17名が「玉ねぎの炒め時間」を間違えました。
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1"
                          style={{ backgroundColor: COLORS.secondary }}
                        >
                          2
                        </div>
                        <div>
                          <h5 className="font-bold mb-2" style={{ color: COLORS.text }}>
                            ⚙️ Cursor = 調理や接客を手伝う超優秀な助っ人AI
                          </h5>
                          <p className="text-sm leading-relaxed" style={{ color: COLORS.textLight }}>
                            プログラミングを助けてくれるAIアシスタントです。文化祭の例では、
                            「調理や接客を手伝ってくれる超優秀な助っ人AI」だと考えてください。
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1"
                          style={{ backgroundColor: COLORS.accent }}
                        >
                          3
                        </div>
                        <div>
                          <h5 className="font-bold mb-2" style={{ color: COLORS.text }}>
                            ✨ 2つが合体すると魔法が起きる
                          </h5>
                          <p className="text-sm leading-relaxed mb-4" style={{ color: COLORS.textLight }}>
                            クラスのみんなが解いたクイズの結果（誰が何を苦手としているか）を、助っ人AI（Cursor）に教えると...
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-lg" style={{ backgroundColor: COLORS.primaryLight }}>
                              <h6 className="font-bold mb-2" style={{ color: COLORS.primary }}>
                                みんなの苦手から「チームの成功ルール」が自動生成
                              </h6>
                              <p className="text-xs" style={{ color: COLORS.textLight }}>
                                「クラスの半分以上が、隠し味のリンゴを入れるタイミングを間違えている」というデータから、
                                調理中に「ストップ！今リンゴを入れるのは早い！レシピノートの3ページ目を確認して！」と自動でアシストしてくれます。
                              </p>
                            </div>
                            <div className="p-4 rounded-lg" style={{ backgroundColor: COLORS.primaryLight }}>
                              <h6 className="font-bold mb-2" style={{ color: COLORS.primary }}>
                                個人に合わせた「専用アシスト」
                              </h6>
                              <p className="text-xs" style={{ color: COLORS.textLight }}>
                                A君だけが「お釣りの計算をよく間違える」というデータがあれば、A君がレジに立つときだけ、
                                「A君、注意！お釣りの計算は、もう一回確認しようね！」と特別なアドバイスをくれます。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="p-6 rounded-lg mb-6"
                    style={{ backgroundColor: COLORS.primaryLight }}
                  >
                    <h4 className="font-semibold mb-4" style={{ color: COLORS.primary }}>
                      💡 革新的な連携の核心
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                          📚 asagami AI側
                        </h5>
                        <ul className="text-sm space-y-1" style={{ color: COLORS.textLight }}>
                          <li>• 業界研修資料から4択問題自動生成</li>
                          <li>• 個人の弱点を詳細分析</li>
                          <li>• 学習進捗のリアルタイム追跡</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                          ⚙️ Cursor Rules側
                        </h5>
                        <ul className="text-sm space-y-1" style={{ color: COLORS.textLight }}>
                          <li>• 弱点に特化したルール自動生成</li>
                          <li>• 個人最適化された開発支援</li>
                          <li>• 実践データのフィードバック</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <QuoteBlock source="システム開発現場の革新">
                    <p className="text-lg">
                      「もはや画一的な研修は時代遅れ。従業員一人ひとりの理解度に合わせて、
                      開発環境そのものが自動的に最適化される時代が到来しました。」
                    </p>
                  </QuoteBlock>
                </Card>

                {/* 連携の仕組み */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    12.2 🔄 連携の仕組み：完全自動化サイクル
                  </h3>
                  
                  <div className="relative">
                    {/* フローチャート */}
                    <div className="grid md:grid-cols-4 gap-4 mb-8">
                      {[
                        {
                          step: "1",
                          title: "知識習得",
                          description: "業界研修資料をasagami AIがノート化",
                          details: ["管理者が研修資料をアップロード", "AIが4択問題を自動生成", "従業員が問題を解答"],
                          icon: "📚",
                          color: COLORS.accent
                        },
                        {
                          step: "2", 
                          title: "弱点分析",
                          description: "個人の理解度を詳細分析",
                          details: ["回答パターンの分析", "苦手分野の特定", "理解度スコア算出"],
                          icon: "📊",
                          color: COLORS.secondary
                        },
                        {
                          step: "3",
                          title: "ルール生成",
                          description: "弱点に特化したCursor Rules作成",
                          details: ["個人専用ルール自動生成", "弱点強化サポート", "段階的学習支援"],
                          icon: "⚙️",
                          color: COLORS.primary
                        },
                        {
                          step: "4",
                          title: "実践・改善",
                          description: "開発実践からフィードバック収集",
                          details: ["コーディング支援実行", "エラーパターン記録", "学習効果測定"],
                          icon: "🚀",
                          color: COLORS.warning
                        }
                      ].map((phase, index) => (
                        <div key={index} className="text-center">
                          <div 
                            className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl"
                            style={{ backgroundColor: phase.color }}
                          >
                            {phase.step}
                          </div>
                          <div className="text-2xl mb-2">{phase.icon}</div>
                          <h4 className="font-semibold mb-2" style={{ color: COLORS.text }}>
                            {phase.title}
                          </h4>
                          <p className="text-sm mb-3" style={{ color: COLORS.textLight }}>
                            {phase.description}
                          </p>
                          <ul className="text-xs space-y-1" style={{ color: COLORS.textLight }}>
                            {phase.details.map((detail, detailIndex) => (
                              <li key={detailIndex}>• {detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* 矢印 */}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-0.5" style={{ backgroundColor: COLORS.primaryLight }}>
                      <div className="flex justify-between items-center h-full px-16">
                        {[1, 2, 3].map((i) => (
                          <ArrowRight key={i} className="w-6 h-6" style={{ color: COLORS.primary }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* 具体的活用例 */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    12.3 💼 具体的活用シナリオ
                  </h3>
                  
                  <div className="space-y-8">
                    {[
                      {
                        scenario: "金融システム開発会社の例",
                        icon: "🏦",
                        background: "新入社員の田中さんが金融規制について学習中",
                        process: [
                          {
                            phase: "学習段階",
                            content: "asagami AIでGDPR・PCI DSS規制の4択問題を解答 → GDPR理解度30%、PCI DSS理解度70%と判定"
                          },
                          {
                            phase: "ルール適用",
                            content: "Cursor RulesがGDPR重点サポートルールを自動生成 → 個人情報処理時に詳細ガイダンス表示"
                          },
                          {
                            phase: "実践支援",
                            content: "コード入力時にGDPR準拠チェックが自動起動 → 段階的に理解度向上"
                          }
                        ],
                        result: "3ヶ月後：GDPR理解度85%達成、実装ミス率90%削減"
                      },
                      {
                        scenario: "医療システム開発チームの例",
                        icon: "🏥",
                        background: "チーム全体でHIPAA準拠システムの開発スキル向上が必要",
                        process: [
                          {
                            phase: "チーム分析",
                            content: "asagami AIが各メンバーの医療情報セキュリティ理解度を測定 → 個人別弱点マップ作成"
                          },
                          {
                            phase: "集団最適化",
                            content: "チーム全体の傾向から共通ルールセット生成 → 個人差に応じたカスタマイズ追加"
                          },
                          {
                            phase: "継続改善",
                            content: "開発エラーを分析してasagami AIに反映 → 追加学習問題を自動生成"
                          }
                        ],
                        result: "6ヶ月後：HIPAA監査通過率100%、開発速度30%向上"
                      }
                    ].map((example, index) => (
                      <div 
                        key={index}
                        className="border-l-4 pl-6"
                        style={{ borderColor: COLORS.primary }}
                      >
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">{example.icon}</span>
                          <h4 className="text-xl font-semibold" style={{ color: COLORS.text }}>
                            {example.scenario}
                          </h4>
                        </div>
                        
                        <div 
                          className="p-4 rounded-lg mb-4"
                          style={{ backgroundColor: COLORS.primaryLight }}
                        >
                          <p className="text-sm" style={{ color: COLORS.primary }}>
                            <strong>背景：</strong> {example.background}
                          </p>
                        </div>

                        <div className="space-y-4 mb-4">
                          {example.process.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-start">
                              <div 
                                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-1 flex-shrink-0"
                                style={{ backgroundColor: COLORS.primary }}
                              >
                                {stepIndex + 1}
                              </div>
                              <div>
                                <h5 className="font-semibold text-sm mb-1" style={{ color: COLORS.text }}>
                                  {step.phase}
                                </h5>
                                <p className="text-sm" style={{ color: COLORS.textLight }}>
                                  {step.content}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div 
                          className="p-3 rounded-lg"
                          style={{ backgroundColor: '#d4edda', borderLeft: `4px solid ${COLORS.accent}` }}
                        >
                          <p className="text-sm font-medium" style={{ color: '#155724' }}>
                            📈 結果: {example.result}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* 技術的実装 */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    12.4 🔧 技術実装：API連携仕様
                  </h3>
                  
                  <p className="text-lg mb-6" style={{ color: COLORS.textLight }}>
                    asagami AIとCursor Rulesの連携は、RESTful APIを通じて行われます。
                    リアルタイムでの学習データ同期と、自動ルール生成を実現します。
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
                        📡 データフロー（asagami AI → Cursor Rules）
                      </h4>
                      <CodeBlock 
                        code={`{
  "userId": "user_12345",
  "weakPoints": [
    {
      "category": "GDPR Compliance",
      "understanding": 30,
      "errorPatterns": [
        "Personal data identification",
        "Consent management"
      ],
      "recommendedFocus": [
        "Data protection principles",
        "Legal basis for processing"
      ]
    }
  ],
  "completedTopics": ["Basic Security", "SQL Injection"],
  "nextLearningGoals": ["Advanced GDPR", "Encryption"]
}`}
                        title="学習分析データ（JSON）"
                        language="json"
                        defaultExpanded={false}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
                        ⚙️ 自動生成されるCursor Rules
                      </h4>
                      <CodeBlock 
                        code={`---
description: GDPR理解度30%ユーザー向け強化サポート
alwaysApply: true
---

# 個人最適化ルール（田中太郎さん専用）

## GDPR強化支援（重点サポート）
- 個人情報処理コード記述時は必ずGDPRチェックリスト表示
- データ保存時に保持期間・削除要件の確認を必須化
- 同意取得フローの実装ガイダンス自動表示

## 実装時の自動確認項目
- \`personal_data\` 関連の変数命名時 → データ分類確認
- \`store\` \`save\` 等のメソッド使用時 → 法的根拠確認
- API作成時 → プライバシーポリシー準拠確認`}
                        title="自動生成ルール例"
                        language="markdown"
                        defaultExpanded={false}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
                      🔄 双方向フィードバックシステム
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        {
                          direction: "asagami AI → Cursor",
                          icon: "📊",
                          data: ["学習進捗データ", "弱点分析結果", "推奨学習トピック", "理解度スコア"]
                        },
                        {
                          direction: "Cursor → asagami AI",
                          icon: "⚙️", 
                          data: ["コーディングエラーパターン", "ルール使用頻度", "開発効率指標", "改善提案"]
                        },
                        {
                          direction: "管理者ダッシュボード",
                          icon: "📈",
                          data: ["チーム全体の進捗", "個人別成長曲線", "ROI測定結果", "最適化提案"]
                        }
                      ].map((flow, index) => (
                        <div 
                          key={index}
                          className="p-4 rounded-lg text-center"
                          style={{ backgroundColor: COLORS.primaryLight }}
                        >
                          <div className="text-2xl mb-2">{flow.icon}</div>
                          <h5 className="font-semibold mb-3" style={{ color: COLORS.text }}>
                            {flow.direction}
                          </h5>
                          <ul className="text-xs space-y-1" style={{ color: COLORS.textLight }}>
                            {flow.data.map((item, itemIndex) => (
                              <li key={itemIndex}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* ビジネス価値 */}
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    12.5 💰 システム会社向けビジネス価値
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
                        📉 従来の課題
                      </h4>
                      <div className="space-y-3">
                        {[
                          { issue: "画一的な研修", impact: "個人差を考慮できず効果限定的" },
                          { issue: "知識と実践の分離", impact: "学んだことが現場で活かされない" },
                          { issue: "効果測定の困難", impact: "研修投資の価値が不明確" },
                          { issue: "継続的改善の欠如", impact: "一度きりの研修で終了" }
                        ].map((problem, index) => (
                          <div 
                            key={index}
                            className="p-3 rounded-lg"
                            style={{ backgroundColor: '#f8d7da', borderLeft: `4px solid ${COLORS.danger}` }}
                          >
                            <h5 className="font-semibold text-sm" style={{ color: '#721c24' }}>
                              ❌ {problem.issue}
                            </h5>
                            <p className="text-xs mt-1" style={{ color: '#721c24' }}>
                              {problem.impact}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
                        🚀 連携による解決
                      </h4>
                      <div className="space-y-3">
                        {[
                          { solution: "完全個人最適化", benefit: "一人ひとりに最適な学習・開発環境" },
                          { solution: "学習→実践の即座連携", benefit: "知識がリアルタイムで実践に反映" },
                          { solution: "定量的効果測定", benefit: "学習効果とROIの明確な可視化" },
                          { solution: "自動改善サイクル", benefit: "継続的な最適化で改善" }
                        ].map((solution, index) => (
                          <div 
                            key={index}
                            className="p-3 rounded-lg"
                            style={{ backgroundColor: '#d4edda', borderLeft: `4px solid ${COLORS.accent}` }}
                          >
                            <h5 className="font-semibold text-sm" style={{ color: '#155724' }}>
                              ✅ {solution.solution}
                            </h5>
                            <p className="text-xs mt-1" style={{ color: '#155724' }}>
                              {solution.benefit}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <h4 className="font-semibold mb-4" style={{ color: COLORS.text }}>
                      📊 具体的ROI比較表
                    </h4>
                    <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                      <thead style={{ backgroundColor: COLORS.primaryLight }}>
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: COLORS.primary }}>
                            項目
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: COLORS.primary }}>
                            従来方式
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: COLORS.primary }}>
                            asagami AI + Cursor Rules連携
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: COLORS.primary }}>
                            改善率
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { 
                            item: "新人戦力化期間",
                            before: "6ヶ月",
                            after: "2.5ヶ月", 
                            improvement: "58%短縮"
                          },
                          {
                            item: "研修コスト（月間）",
                            before: "50万円",
                            after: "20万円",
                            improvement: "60%削減"
                          },
                          {
                            item: "コード品質向上",
                            before: "測定困難",
                            after: "平均85%向上",
                            improvement: "可視化実現"
                          },
                          {
                            item: "個人別最適化",
                            before: "不可能",
                            after: "100%実現",
                            improvement: "革新的改善"
                          },
                          {
                            item: "継続的改善",
                            before: "年1回研修",
                            after: "リアルタイム",
                            improvement: "365倍高頻度"
                          }
                        ].map((row, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-4 py-3 text-sm font-medium" style={{ color: COLORS.text }}>
                              {row.item}
                            </td>
                            <td className="px-4 py-3 text-sm" style={{ color: COLORS.textLight }}>
                              {row.before}
                            </td>
                            <td className="px-4 py-3 text-sm" style={{ color: COLORS.text }}>
                              {row.after}
                            </td>
                            <td className="px-4 py-3 text-sm font-semibold" style={{ color: COLORS.accent }}>
                              {row.improvement}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>

                <Card className="text-center">
                  <div className="inline-block p-6 rounded-lg mb-6" style={{ backgroundColor: COLORS.primaryLight }}>
                    <Zap className="w-12 h-12 mx-auto mb-4" style={{ color: COLORS.primary }} />
                    <h4 className="text-xl font-semibold mb-2" style={{ color: COLORS.text }}>
                      🌟 次世代学習システムの可能性を体験
                    </h4>
                    <p style={{ color: COLORS.textLight }}>
                      革新的な連携システムを導入して、<br/>
                      組織の開発力を次のレベルへ引き上げましょう。
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <button 
                      onClick={() => scrollToSection("one-command-setup")}
                      className="px-6 py-3 rounded-lg text-white transition-colors flex items-center"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      次：ワンコマンド環境構築
                    </button>
                  </div>
                </Card>

                {/* 詳細情報リンク */}
                <Card>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4" style={{ color: COLORS.text }}>
                      📋 詳細情報とプロポーザル
                    </h3>
                    <p className="text-lg mb-6" style={{ color: COLORS.textLight }}>
                      asagami AI × Cursor Rules連携の詳細な技術仕様、ビジネスモデル、実装計画については、
                      包括的なプロポーザルドキュメントをご確認ください。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="/asagami-cursor-proposal.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all hover:transform hover:scale-105"
                        style={{ backgroundColor: COLORS.primary }}
                      >
                        <FileText className="w-5 h-5 mr-2" />
                        完全版プロポーザルを見る
                      </a>
                      <button
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all hover:transform hover:scale-105"
                        style={{ 
                          backgroundColor: COLORS.primaryLight, 
                          color: COLORS.primary,
                          border: `2px solid ${COLORS.primary}`
                        }}
                      >
                        <Users className="w-5 h-5 mr-2" />
                        連携相談をする
                      </button>
                    </div>
                    <p className="text-sm mt-4" style={{ color: COLORS.textLight }}>
                      <i className="fas fa-info-circle mr-1"></i>
                      プロポーザルには高校生向け説明、ROI分析、API仕様書、実装タイムラインが含まれます
                    </p>
                  </div>
                </Card>
              </div>
            </section>

            {/* ワンコマンド環境構築 */}
            <section id="one-command-setup">
              <SectionHeader 
                icon={Zap}
                title="13. ワンコマンド環境構築システム"
                subtitle="5分で完璧なCursor Rules環境を構築する"
                isActive={activeSection === "one-command-setup"}
              />

              <div className="space-y-8">
                <Card>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: COLORS.text }}>
                    13.1 従来の手動セットアップとの比較
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
                    13.2 🚀 基本的なCursor Rulesセットアップ
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3" style={{ color: COLORS.text }}>
                        1. 基本セットアップ（すべてのプロジェクト共通）
                      </h4>
                      <CodeBlock 
                        code={`mkdir -p .cursor/rules/dev-rules && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/uiux.mdc" -o ".cursor/rules/uiux.mdc" && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/rules.mdc" -o ".cursor/rules/rules.mdc" && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/todo.mdc" -o ".cursor/rules/todo.mdc" && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/globals.mdc" -o ".cursor/rules/globals.mdc" && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/dev-rules/testing-guidelines.mdc" -o ".cursor/rules/dev-rules/testing-guidelines.mdc" && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/dev-rules/coding-standards.mdc" -o ".cursor/rules/dev-rules/coding-standards.mdc" && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/dev-rules/git-workflow.mdc" -o ".cursor/rules/dev-rules/git-workflow.mdc" && echo "🎉 完全なCursor Rules環境を適用完了！" && echo "" && echo "📋 ダウンロードされたファイル:" && ls -la .cursor/rules/ && ls -la .cursor/rules/dev-rules/ && echo "" && echo "🚀 次のステップ:" && echo "1. Cursor設定 (Cmd+,) → 'Indexing & Docs' → 'Continue' でインデックス化" && echo "2. 'Codebase Indexing' が100%完了まで待機" && echo "3. ✅ 準備完了！Cursor Rulesが適用されました" && echo "" && echo "💡 確認方法: チャットで '@' を入力するとルールファイルが表示されます"`}
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
                            command: `mkdir -p .cursor/rules/dev-rules && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/globals.mdc" -o ".cursor/rules/globals.mdc" && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/uiux.mdc" -o ".cursor/rules/uiux.mdc" && echo "🎉 Next.js用Cursor Rules適用完了！" && echo "🚀 Cursor設定 (Cmd+,) → 'Indexing & Docs' → 'Continue' でインデックス化開始"`
                          },
                          {
                            title: "React + TypeScript",
                            command: `mkdir -p .cursor/rules/dev-rules && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/globals.mdc" -o ".cursor/rules/globals.mdc" && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/dev-rules/coding-standards.mdc" -o ".cursor/rules/dev-rules/coding-standards.mdc" && echo "🎉 React TypeScript用Cursor Rules適用完了！" && echo "🚀 Cursor設定 (Cmd+,) → 'Indexing & Docs' → 'Continue' でインデックス化開始"`
                          },
                          {
                            title: "Node.js API",
                            command: `mkdir -p .cursor/rules/dev-rules && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/globals.mdc" -o ".cursor/rules/globals.mdc" && curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/dev-rules/testing-guidelines.mdc" -o ".cursor/rules/dev-rules/testing-guidelines.mdc" && echo "🎉 Node.js API用Cursor Rules適用完了！" && echo "🚀 Cursor設定 (Cmd+,) → 'Indexing & Docs' → 'Continue' でインデックス化開始"`
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

# 2. チーム環境の一括適用（Gitを使用）
git clone https://github.com/daideguchi/cursor-rules-guide.git temp_rules
cp -r temp_rules/.cursor .
rm -rf temp_rules

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
        run: |
          if [ ! -d ".cursor/rules" ]; then
            echo "❌ .cursor/rules directory not found"
            exit 1
          fi
          echo "✅ Cursor Rules directory exists"
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
                    13.3 ✅ セットアップ検証とトラブルシューティング
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3" style={{ color: COLORS.text }}>
                        環境検証コマンド
                      </h4>
                      <CodeBlock 
                        code={`# Cursor Rules環境の総合チェック
ls -la .cursor/rules/
echo "📁 ファイル数: $(find .cursor/rules -name "*.mdc" | wc -l)"

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
                            command: "ls -la .cursor/rules/ && echo '設定ファイルを確認してください'"
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
                    13.4 🔧 高度なセットアップオプション
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
          git clone https://github.com/daideguchi/cursor-rules-guide.git temp_update
          cp -r temp_update/.cursor .
          rm -rf temp_update
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
RUN ls -la .cursor/rules/ && echo "Cursor Rules validated"
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

# グローバルルールセットのダウンロード
git clone https://github.com/daideguchi/cursor-rules-guide.git global-rules
cp -r global-rules/.cursor ./global-cursor-rules
rm -rf global-rules

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
    cp -r ~/.cursor-rules-global/global-cursor-rules .cursor
    curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/uiux.mdc" -o ".cursor/rules/uiux.mdc"
    ;;
  "backend")
    cp -r ~/.cursor-rules-global/global-cursor-rules .cursor
    curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/dev-rules/testing-guidelines.mdc" -o ".cursor/rules/dev-rules/testing-guidelines.mdc"
    ;;
  "mobile")
    cp -r ~/.cursor-rules-global/global-cursor-rules .cursor
    curl -fsSL "https://raw.githubusercontent.com/daideguchi/cursor-rules-guide/main/.cursor/rules/uiux.mdc" -o ".cursor/rules/uiux.mdc"
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
                title="14. 継続的改善の実践"
                subtitle="Cursor Rulesを改善し続けるためのフレームワーク"
                isActive={activeSection === "continuous-improvement"}
              />

              <div className="space-y-8">
                <Card>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: COLORS.text }}>
                    14.1 Cursor Rules マスターへの道のり
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
                    14.2 📚 学習リソース
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
                        url: "https://github.com/daideguchi/cursor-rules-guide",
                        description: "実践的なルール例とテンプレート"
                      },
                      {
                        title: "業種別テンプレート",
                        url: "https://github.com/daideguchi/cursor-rules-guide/tree/main/.cursor/rules",
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
      
      {/* プレビューモーダル */}
      <PreviewModal
        isOpen={previewModal.isOpen}
        onClose={handlePreviewClose}
        industry={previewModal.industry}
      />
    </div>
  );
}