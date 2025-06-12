'use client'

import { Toaster } from 'react-hot-toast'
import { useTheme } from './ThemeProvider'

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()

  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: theme === 'dark' ? '#374151' : '#ffffff',
            color: theme === 'dark' ? '#f9fafb' : '#111827',
            border: theme === 'dark' ? '1px solid #4b5563' : '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },
          },
        }}
      />
    </>
  )
} 