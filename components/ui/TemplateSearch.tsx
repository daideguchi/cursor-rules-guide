'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, X } from 'lucide-react'
import { Button } from './Button'

interface TemplateSearchProps {
  onSearch: (query: string) => void
  onFilterChange: (filters: FilterState) => void
  categories: string[]
  tags: string[]
}

interface FilterState {
  category: string
  tags: string[]
  difficulty: string
}

export function TemplateSearch({ onSearch, onFilterChange, categories, tags }: TemplateSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    tags: [],
    difficulty: 'all'
  })
  const [showFilters, setShowFilters] = useState(false)

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    onSearch(query)
  }

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const clearFilters = () => {
    const defaultFilters = { category: 'all', tags: [], difficulty: 'all' }
    setFilters(defaultFilters)
    onFilterChange(defaultFilters)
  }

  const activeFilterCount = useMemo(() => {
    let count = 0
    if (filters.category !== 'all') count++
    if (filters.tags.length > 0) count += filters.tags.length
    if (filters.difficulty !== 'all') count++
    return count
  }, [filters])

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="テンプレートを検索... (例: React, API, database)"
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <Button
          onClick={() => setShowFilters(!showFilters)}
          variant="outline"
          size="sm"
          className="flex items-center"
        >
          <Filter className="w-4 h-4 mr-2" />
          フィルタ
          {activeFilterCount > 0 && (
            <span className="ml-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </Button>
        
        {activeFilterCount > 0 && (
          <Button
            onClick={clearFilters}
            variant="ghost"
            size="sm"
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-4 h-4 mr-1" />
            クリア
          </Button>
        )}
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              カテゴリ
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleFilterChange({ category: 'all' })}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filters.category === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                }`}
              >
                すべて
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterChange({ category })}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    filters.category === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              難易度
            </label>
            <div className="flex flex-wrap gap-2">
              {['all', 'beginner', 'intermediate', 'advanced'].map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => handleFilterChange({ difficulty })}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    filters.difficulty === difficulty
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                  }`}
                >
                  {difficulty === 'all' ? 'すべて' : difficulty}
                </button>
              ))}
            </div>
          </div>

          {/* Tag Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              タグ
            </label>
            <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    const newTags = filters.tags.includes(tag)
                      ? filters.tags.filter((t) => t !== tag)
                      : [...filters.tags, tag]
                    handleFilterChange({ tags: newTags })
                  }}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    filters.tags.includes(tag)
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 