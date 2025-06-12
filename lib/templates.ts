export interface Template {
  id: string
  title: string
  description: string
  code: string
  language: string
  category: string
  tags: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

export const templates: Template[] = [
  // React & TypeScript Templates
  {
    id: 'react-typescript-basic',
    title: 'React + TypeScript基本ルール',
    description: 'React開発の基本ルールとTypeScript統合',
    language: 'markdown',
    category: 'フロントエンド',
    tags: ['React', 'TypeScript', 'Hooks'],
    difficulty: 'beginner',
    code: `---
description: React + TypeScript development standards
globs: ["*.tsx", "*.jsx"]
alwaysApply: false
---

# React + TypeScript Rules

## Component Standards
- Use functional components with hooks exclusively
- Always define proper TypeScript interfaces for props
- Use React.FC type for components
- Implement proper error boundaries

## Naming Conventions
- Components: PascalCase (UserProfile, NavigationBar)
- Props interfaces: ComponentNameProps
- Custom hooks: useXxx pattern
- Files: PascalCase for components

## Code Structure
\`\`\`typescript
import React from 'react';

interface UserCardProps {
  user: {
    id: string;
    name: string;
    email: string;
  };
  onEdit?: (id: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {onEdit && (
        <button onClick={() => onEdit(user.id)}>
          Edit
        </button>
      )}
    </div>
  );
};

export default UserCard;
\`\`\``
  },
  {
    id: 'react-hooks-optimization',
    title: 'React Hooks最適化',
    description: 'パフォーマンス最適化とHooks活用パターン',
    language: 'markdown',
    category: 'フロントエンド',
    tags: ['React', 'Hooks', 'Performance'],
    difficulty: 'intermediate',
    code: `---
description: React Hooks optimization patterns
globs: ["*.tsx", "*.jsx", "**/hooks/*.ts"]
alwaysApply: false
---

# React Hooks Optimization Rules

## Performance Optimization
- Use useMemo for expensive calculations
- Use useCallback for function props
- Implement React.memo for component optimization
- Use useRef for DOM references

## Custom Hooks Patterns
- Extract reusable logic into custom hooks
- Return objects instead of arrays for multiple values
- Use proper dependency arrays

## State Management
- Use useReducer for complex state logic
- Combine related state variables
- Avoid unnecessary re-renders`
  },
  {
    id: 'nextjs14-app-router',
    title: 'Next.js 14 App Router',
    description: 'Next.js 14のApp Routerとサーバーコンポーネント',
    language: 'markdown',
    category: 'フロントエンド',
    tags: ['Next.js', 'App Router', 'SSR'],
    difficulty: 'intermediate',
    code: `---
description: Next.js 14 App Router development patterns
globs: ["**/app/**/*.tsx", "**/app/**/*.ts"]
alwaysApply: false
---

# Next.js 14 App Router Rules

## File Structure
- Use app directory structure
- Implement proper page.tsx and layout.tsx
- Use loading.tsx and error.tsx for UI states
- Organize route groups with parentheses

## Server vs Client Components
- Default to Server Components when possible
- Use 'use client' only when necessary
- Implement proper data fetching patterns
- Handle streaming and suspense properly`
  },

  // Backend Templates
  {
    id: 'express-restful-api',
    title: 'Express.js RESTful API',
    description: 'Express.jsを使ったRESTful API開発パターン',
    language: 'markdown',
    category: 'バックエンド',
    tags: ['Node.js', 'Express', 'REST API'],
    difficulty: 'intermediate',
    code: `---
description: Express.js RESTful API development patterns
globs: ["**/routes/*.js", "**/controllers/*.js", "**/middleware/*.js"]
alwaysApply: false
---

# Express.js RESTful API Rules

## Route Structure
- Use express.Router() for modular routing
- Implement proper HTTP status codes
- Use middleware for cross-cutting concerns
- Follow RESTful naming conventions

## Error Handling
- Implement centralized error handling
- Use async/await with proper try-catch
- Return consistent error responses
- Log errors appropriately`
  },
  {
    id: 'fastapi-python',
    title: 'FastAPI Python API',
    description: 'FastAPIを使った高性能Python API開発',
    language: 'markdown',
    category: 'バックエンド',
    tags: ['Python', 'FastAPI', 'Async'],
    difficulty: 'intermediate',
    code: `---
description: FastAPI Python development best practices
globs: ["**/*.py", "**/routers/*.py", "**/models/*.py"]
alwaysApply: false
---

# FastAPI Development Rules

## Code Structure
- Use Pydantic models for request/response validation
- Implement proper dependency injection
- Use async/await for I/O operations
- Follow Python type hints consistently

## API Design
- Use proper HTTP status codes
- Implement comprehensive error handling
- Add OpenAPI documentation
- Use path and query parameters appropriately`
  },

  // Database Templates
  {
    id: 'prisma-orm-patterns',
    title: 'Prisma ORM パターン',
    description: 'Prisma ORMを使ったデータベース操作のベストプラクティス',
    language: 'markdown',
    category: 'データベース',
    tags: ['Prisma', 'ORM', 'TypeScript'],
    difficulty: 'intermediate',
    code: `---
description: Prisma ORM database patterns and best practices
globs: ["**/prisma/*.ts", "**/db/*.ts", "**/models/*.ts"]
alwaysApply: false
---

# Prisma ORM Development Rules

## Schema Design
- Use proper field types and constraints
- Implement relations correctly
- Use indexes for performance
- Version schema changes with migrations

## Query Optimization
- Use select to fetch only needed fields
- Implement proper pagination
- Use includes for related data
- Avoid N+1 queries with proper includes`
  },

  // Testing Templates
  {
    id: 'jest-unit-testing',
    title: 'Jest Unit Testing',
    description: 'Jestを使った包括的なユニットテストパターン',
    language: 'markdown',
    category: 'テスト',
    tags: ['Jest', 'Unit Testing', 'TDD'],
    difficulty: 'intermediate',
    code: `---
description: Jest unit testing patterns and best practices
globs: ["**/*.test.ts", "**/*.test.js", "**/*.spec.ts", "**/*.spec.js"]
alwaysApply: false
---

# Jest Unit Testing Rules

## Test Structure
- Follow AAA pattern (Arrange, Act, Assert)
- Use descriptive test names
- Group related tests with describe blocks
- Use beforeEach/afterEach for setup/cleanup

## Mocking Strategy
- Mock external dependencies
- Use jest.fn() for function mocks
- Reset mocks between tests
- Mock at the module level when appropriate`
  },

  // Security Templates
  {
    id: 'jwt-auth-security',
    title: 'JWT認証セキュリティ',
    description: 'JWT認証とセキュリティのベストプラクティス',
    language: 'markdown',
    category: 'セキュリティ',
    tags: ['Security', 'JWT', 'Authentication'],
    difficulty: 'advanced',
    code: `---
description: JWT authentication and security best practices
globs: ["**/auth/*.ts", "**/middleware/*.ts", "**/security/*.ts"]
alwaysApply: false
---

# JWT Authentication Security Rules

## Security Principles
- Use secure HTTP-only cookies for tokens
- Implement proper CSRF protection
- Use refresh token rotation
- Validate all inputs thoroughly
- Implement rate limiting

## Token Management
- Short-lived access tokens (15 minutes)
- Longer-lived refresh tokens (7 days)
- Implement token blacklisting
- Use secure token storage`
  },

  // DevOps Templates
  {
    id: 'docker-containerization',
    title: 'Docker コンテナ化',
    description: 'Dockerを使った効率的なコンテナ化パターン',
    language: 'markdown',
    category: 'DevOps',
    tags: ['Docker', 'Containerization', 'DevOps'],
    difficulty: 'intermediate',
    code: `---
description: Docker containerization best practices
globs: ["**/Dockerfile", "**/docker-compose.yml", "**/.dockerignore"]
alwaysApply: false
---

# Docker Containerization Rules

## Dockerfile Best Practices
- Use official base images
- Minimize layers and image size
- Use multi-stage builds
- Set proper user permissions
- Use .dockerignore effectively

## Security Considerations
- Don't run as root user
- Use specific image tags, not 'latest'
- Scan images for vulnerabilities
- Use minimal base images`
  },

  // Mobile Templates
  {
    id: 'react-native-expo',
    title: 'React Native + Expo',
    description: 'React NativeとExpoを使ったモバイルアプリ開発',
    language: 'markdown',
    category: 'モバイル',
    tags: ['React Native', 'Expo', 'Mobile'],
    difficulty: 'intermediate',
    code: `---
description: React Native + Expo mobile development patterns
globs: ["**/*.tsx", "**/*.ts", "**/components/*.tsx"]
alwaysApply: false
---

# React Native + Expo Development Rules

## Component Structure
- Use functional components with hooks
- Implement proper TypeScript interfaces
- Use StyleSheet.create for styling
- Handle platform differences appropriately

## Performance Optimization
- Use FlatList for long lists
- Implement proper image optimization
- Use React.memo for expensive components
- Handle navigation efficiently`
  }
]

export const categories = [
  'フロントエンド',
  'バックエンド', 
  'データベース',
  'テスト',
  'セキュリティ',
  'DevOps',
  'モバイル'
]

export const allTags = [
  'React', 'TypeScript', 'Hooks', 'Next.js', 'App Router', 'SSR',
  'Node.js', 'Express', 'REST API', 'Python', 'FastAPI', 'Async',
  'Prisma', 'ORM', 'Jest', 'Unit Testing', 'TDD',
  'Security', 'JWT', 'Authentication',
  'Docker', 'Containerization', 'DevOps',
  'React Native', 'Expo', 'Mobile', 'Performance'
] 