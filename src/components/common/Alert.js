export function Alert({ 
    children, 
    variant = 'info', 
    title,
    className 
  }) {
    const variants = {
      info: 'bg-blue-50 border-blue-200 text-blue-800',
      success: 'bg-green-50 border-green-200 text-green-800',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      error: 'bg-red-50 border-red-200 text-red-800'
    }
  
    const icons = {
      info: 'ℹ️',
      success: '✅',
      warning: '⚠️',
      error: '❌'
    }
  
    return (
      <div className={cn(
        'border rounded-lg p-4',
        variants[variant],
        className
      )}>
        <div className="flex items-start space-x-3">
          <span className="text-xl">{icons[variant]}</span>
          <div className="flex-1">
            {title && (
              <h3 className="font-semibold mb-2">{title}</h3>
            )}
            <div>{children}</div>
          </div>
        </div>
      </div>
    )
  }