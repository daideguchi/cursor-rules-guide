"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Copy, Check } from "lucide-react";

interface CollapsibleCodeProps {
  title: string;
  description?: string;
  code: string;
  language: string;
  defaultExpanded?: boolean;
  showLineNumbers?: boolean;
}

export function CollapsibleCode({
  title,
  description,
  code,
  language,
  defaultExpanded = false,
  showLineNumbers = true,
}: CollapsibleCodeProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center flex-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-3 text-left flex-1 hover:bg-white/50 dark:hover:bg-slate-800/50 p-3 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                {title}
              </h4>
              {description && (
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {description}
                </p>
              )}
            </div>
          </button>
          
          <button
            onClick={handleCopy}
            className="ml-3 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors flex items-center space-x-2"
          >
            {isCopied ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-sm">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="text-sm">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Block */}
      {isExpanded && (
        <div className="bg-slate-900 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
            <span className="text-sm text-slate-300 font-medium">
              {language}
            </span>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="p-4 overflow-x-auto">
            <pre className="text-sm text-slate-100 leading-relaxed">
              <code className={`language-${language}`}>
                {showLineNumbers
                  ? code.split('\n').map((line, index) => (
                      <div key={index} className="flex">
                        <span className="text-slate-500 mr-4 select-none w-8 text-right">
                          {index + 1}
                        </span>
                        <span>{line}</span>
                      </div>
                    ))
                  : code
                }
              </code>
            </pre>
          </div>
        </div>
      )}

      {/* Preview when collapsed */}
      {!isExpanded && (
        <div className="bg-slate-800 rounded-lg p-4">
          <pre className="text-sm text-slate-300 overflow-hidden">
            <code className={`language-${language}`}>
              {code.split('\n').slice(0, 3).join('\n')}
              {code.split('\n').length > 3 && (
                <span className="text-slate-500">
                  {`\n... (${code.split('\n').length - 3} more lines)`}
                </span>
              )}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
}