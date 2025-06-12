import { forwardRef } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { clsx } from 'clsx'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  animated?: boolean
  children?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      animated = true,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

    const variants = {
      primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 shadow-md hover:shadow-lg',
      secondary: 'bg-white hover:bg-gray-50 text-primary-600 hover:text-primary-700 focus:ring-primary-500 shadow-md hover:shadow-lg border border-primary-200 hover:border-primary-300',
      ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-gray-500',
      outline: 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 focus:ring-gray-500',
      destructive: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 shadow-md hover:shadow-lg',
    }

    const sizes = {
      sm: 'h-8 px-3 text-sm rounded-md',
      md: 'h-10 px-4 text-sm rounded-lg',
      lg: 'h-12 px-6 text-base rounded-lg',
    }

    const classes = clsx(
      baseClasses,
      variants[variant],
      sizes[size],
      className
    )

    const ButtonComponent = animated ? motion.button : 'button'

    const animationProps = animated
      ? {
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
          transition: { duration: 0.1 },
        }
      : {}

    return (
      <ButtonComponent
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        {...(animated ? animationProps : {})}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
            読み込み中...
          </div>
        ) : (
          children
        )}
      </ButtonComponent>
    )
  }
)

Button.displayName = 'Button'

export { Button } 