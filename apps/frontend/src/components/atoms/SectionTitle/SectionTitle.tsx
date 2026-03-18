import './SectionTitle.css'

type SectionTitleProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <header className="section-title">
      <p className="section-title__eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-title__description">{description}</p>
    </header>
  )
}
