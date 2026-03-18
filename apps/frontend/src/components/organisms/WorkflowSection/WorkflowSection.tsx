import { SectionTitle } from '../../atoms/SectionTitle/SectionTitle'
import { FeatureCard } from '../../molecules/FeatureCard/FeatureCard'
import './WorkflowSection.css'

const atomicLevels = [
  {
    title: 'Atomos',
    description:
      'Son piezas pequenas como botones, etiquetas o titulos. Deben hacer una sola cosa y hacerla bien.',
  },
  {
    title: 'Moleculas',
    description:
      'Combinan atomos relacionados. Por ejemplo, una tarjeta con titulo, texto y boton.',
  },
  {
    title: 'Organismos',
    description:
      'Agrupan varias moleculas y atomos para resolver una seccion completa de la interfaz.',
  },
  {
    title: 'Paginas',
    description:
      'Definen como se acomodan los organismos para representar una pantalla real del producto.',
  },
]

export function WorkflowSection() {
  return (
    <section className="workflow-section" id="atomic">
      <SectionTitle
        eyebrow="Atomic design"
        title="Una estructura pensada para trabajar en equipo y mantener el codigo ordenado."
        description="Cuando cada componente tiene un nivel de responsabilidad claro, es mucho mas facil explicar el proyecto, reutilizar piezas y evitar mezclar logica con presentacion."
      />

      <div className="workflow-section__grid" id="flujo">
        {atomicLevels.map((level) => (
          <FeatureCard
            key={level.title}
            title={level.title}
            description={level.description}
          />
        ))}
      </div>
    </section>
  )
}
