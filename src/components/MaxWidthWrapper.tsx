import { ReactNode } from 'react'
import { cn } from '../lib/utils.ts'

interface WrapperProps {
  children: ReactNode
  className?: string
}

const MaxWidthWrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={cn(
        className,
        'container max-w-8xl px-2 sm:px-5 md:px-10 lg:px-20 mx-auto'
      )}
    >
      {children}
    </div>
  )
}
export default MaxWidthWrapper
