# Proyecto Web

Repositorio organizado como monorepo para mantener frontend y backend en el mismo lugar sin mezclar responsabilidades.

## Estructura

```text
apps/
  frontend/   Aplicacion React + TypeScript
  backend/    Servidor base para APIs e integraciones
packages/     Codigo compartido a futuro
docs/         Documentacion del proyecto
```

## Por que esta estructura

- El frontend y el backend viven juntos, asi que es mas facil coordinarlos.
- Cada aplicacion conserva su propia configuracion y dependencias.
- `packages/` queda disponible para compartir tipos, utilidades o componentes si luego hace falta.
- La integracion con IA debe vivir principalmente en backend para proteger llaves, costos y reglas del negocio.

## Frontend

En [apps/frontend](c:\Users\Duvan\Documents\Proyecto\apps\frontend) usamos React con TypeScript y una estructura visual basada en Atomic Design:

- `atomos`: piezas pequenas como botones o titulos.
- `moleculas`: grupos pequenos de atomos.
- `organismos`: secciones completas.
- `pages`: composicion final de una pantalla.

## Backend

En [apps/backend](c:\Users\Duvan\Documents\Proyecto\apps\backend) dejamos una base sencilla para crecer hacia:

- endpoints propios
- autenticacion
- integracion con bases de datos
- consumo de modelos de IA

## Comandos

```bash
npm install
npm run dev:frontend
npm run build:frontend
npm run dev:backend
npm run build:backend
```
