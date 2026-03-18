import './Button.css'

type ButtonProps = {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

export function Button({
  label,
  href,
  variant = 'primary',
}: ButtonProps) {
  return (
    <a className={`button button--${variant}`} href={href}>
      {label}
    </a>
  )
}
