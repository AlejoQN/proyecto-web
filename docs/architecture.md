# Arquitectura del Proyecto

## Decision principal

Se usa un solo repositorio con dos aplicaciones separadas:

- `apps/frontend`
- `apps/backend`

Esto permite trabajar desde la misma base de codigo sin mezclar responsabilidades.

## Por que no dejar todo junto en la raiz

Cuando frontend y backend comparten una sola carpeta sin separacion clara, se vuelve mas dificil:

- encontrar archivos rapido
- escalar el proyecto
- separar responsabilidades del equipo
- integrar servicios externos como modelos de IA

## Frontend: enfoque visual

El frontend usa React + TypeScript y organiza la interfaz por niveles:

- `atomos`
- `moleculas`
- `organismos`
- `pages`

Esto ayuda a explicar la UI de forma simple y a reutilizar componentes sin duplicar codigo.

## Backend: enfoque funcional

El backend debe concentrar:

- reglas de negocio
- conexion con APIs externas
- seguridad
- manejo de secretos
- integracion con IA

La razon es simple: las llaves y la logica sensible no deben quedar expuestas en el navegador.

## Escalabilidad

Esta estructura escala mejor porque:

- cada app puede crecer sin invadir la otra
- se pueden compartir tipos en `packages/`
- agregar IA despues sera mas natural en `apps/backend`
- si el equipo crece, el reparto del trabajo es mas claro

## Regla practica

- Todo lo visual vive en frontend.
- Todo lo sensible o integrador vive en backend.
- Todo lo compartido entre ambos puede vivir en `packages/`.
