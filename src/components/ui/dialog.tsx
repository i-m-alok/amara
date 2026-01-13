import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

const Dialog = ({ open, onOpenChange, children }: DialogProps) => {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  if (!open) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={() => onOpenChange(false)}
    >
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <div 
        className="relative z-50"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative bg-white rounded-3xl md:rounded-3xl rounded-t-3xl shadow-2xl",
      "max-w-2xl w-full mx-4 max-h-[95vh] md:max-h-[90vh]",
      "overflow-y-auto overscroll-contain",
      className
    )}
    {...props}
  >
    {children}
  </div>
))
DialogContent.displayName = "DialogContent"

const DialogClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "absolute right-4 top-4 z-50 rounded-full p-3 md:p-2 bg-white shadow-lg transition-all",
      "hover:scale-110 hover:bg-gray-50 active:scale-95",
      "min-w-[44px] min-h-[44px] flex items-center justify-center",
      className
    )}
    {...props}
  >
    <X className="h-6 w-6 md:h-5 md:w-5 text-brand-brown" />
    <span className="sr-only">Close</span>
  </button>
))
DialogClose.displayName = "DialogClose"

export { Dialog, DialogContent, DialogClose }
