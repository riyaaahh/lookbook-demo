const variants = {
  primary:
    'bg-brand-sunbeam text-brand-dark hover:bg-brand-sunbeam-light border border-brand-rose-dark/50 font-normal shadow-sm shadow-brand-dark/5 hover:shadow-md hover:shadow-brand-dark/10',
  secondary:
    'bg-transparent text-brand-dark border border-brand-moss-dark/40 hover:border-brand-moss-dark hover:bg-brand-mist/50 font-light',
  outline:
    'bg-transparent text-brand-moss-dark border border-brand-moss-dark/50 hover:bg-brand-moss-dark hover:text-brand-on-dark font-light',
}

const sizes = {
  sm: 'px-6 py-2.5 text-xs tracking-[0.18em]',
  md: 'px-9 py-3.5 text-xs tracking-[0.2em]',
  lg: 'px-12 py-4 text-sm tracking-[0.22em]',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  type = 'button',
  onDark = false,
  ...props
}) {
  const darkPrimary =
    'bg-brand-sunbeam text-brand-dark hover:bg-brand-sunbeam-light border border-brand-rose-dark/50 font-normal shadow-md shadow-brand-deep/25 hover:shadow-lg'

  const darkSecondary =
    'bg-brand-on-dark/8 text-brand-on-dark border border-brand-on-dark/60 hover:bg-brand-on-dark/15 hover:border-brand-on-dark font-light backdrop-blur-sm'

  let resolvedVariant = variants[variant]
  if (onDark && variant === 'primary') resolvedVariant = darkPrimary
  if (onDark && variant === 'secondary') resolvedVariant = darkSecondary

  const classes = `inline-flex items-center justify-center font-body uppercase transition-all duration-500 ease-out ${resolvedVariant} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
