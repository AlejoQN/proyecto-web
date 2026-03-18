import { Badge } from '../../atoms/Badge/Badge'
import { Button } from '../../atoms/Button/Button'
import { FeatureCard } from '../../molecules/FeatureCard/FeatureCard'
import './HeroSection.css'

const highlights = [
  {
    title: 'Base tecnica limpia',
    description:
      'React y TypeScript para construir con orden y reducir errores desde el inicio.',
  },
  {
    title: 'Componentes reutilizables',
    description:
      'Atomic Design para separar piezas pequenas, combinarlas y escalar sin caos.',
  },
]

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <Badge label="Proyecto web en construccion" />
        <h1>Una base profesional para crear paginas web con orden desde el dia uno.</h1>
        <p>
          Este repositorio sera nuestro punto de partida para construir sitios web
          mantenibles, explicables y faciles de crecer en equipo.
        </p>
        <div className="hero-section__actions">
          <Button label="Ver estructura" href="#flujo" />
          <Button label="Entender Atomic Design" href="#atomic" variant="secondary" />
        </div>
      </div>

      <div className="hero-section__grid">
        {highlights.map((item) => (
          <FeatureCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}
