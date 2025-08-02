// src/components/common/Logo.js
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { SITE_CONFIG } from '@/lib/constants'

export function Logo({ 
  variant = 'default', // 'default', 'mobile', 'footer'
  className,
  ...props 
}) {
  const variants = {
    default: {
      container: 'hidden md:block',
      image: 'h-12 w-auto',
      width: 280,
      height: 80
    },
    mobile: {
      container: 'md:hidden',
      image: 'h-8 w-auto',
      width: 160,
      height: 45
    },
    footer: {
      container: '',
      image: 'h-10 w-auto filter brightness-0 invert',
      width: 200,
      height: 60
    }
  }

  const config = variants[variant]

  return (
    <Link 
      href="/" 
      className={cn(config.container, className)}
      aria-label={`${SITE_CONFIG.name} - Ir al inicio`}
      {...props}
    >
      <Image
        src="/assets/logo/logo.png"
        alt={SITE_CONFIG.name}
        width={config.width}
        height={config.height}
        className={config.image}
        priority={variant !== 'footer'}
        quality={90}
      />
    </Link>
  )
}