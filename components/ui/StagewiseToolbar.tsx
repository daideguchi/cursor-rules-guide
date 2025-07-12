'use client';

import { useEffect } from 'react';
// import { initToolbar } from '@stagewise/toolbar';

interface StagewiseToolbarProps {
  config?: {
    plugins?: any[];
  };
}

export function StagewiseToolbar({ config = { plugins: [] } }: StagewiseToolbarProps) {
  useEffect(() => {
    // 開発環境でのみ初期化
    if (process.env.NODE_ENV === 'development') {
      try {
        // initToolbar(config);
        console.log('StagewiseToolbar disabled temporarily');
      } catch (error) {
        console.warn('Stagewise toolbar initialization failed:', error);
      }
    }
  }, [config]);

  // このコンポーネントは何も描画しない（toolbarは自動的に画面に表示される）
  return null;
} 