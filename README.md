# ChuzGrill

Bienvenido al repositorio de ChuzGrill. Este proyecto está construido con **React 19**, **Vite** y **TailwindCSS**.

## 📦 Gestor de Paquetes: pnpm

El proyecto ha sido migrado de `npm` a `pnpm`. Esto garantiza instalaciones más rápidas, consistentes y un manejo optimizado del espacio en disco.

### ¿Cómo instalar pnpm?

Si aún no tienes `pnpm` instalado en tu sistema, puedes instalarlo de forma global fácilmente:

```bash
npm install -g pnpm
```

### Instalación y Ejecución

Para levantar el entorno de desarrollo, sigue estos pasos:

```bash
# 1. Instalar todas las dependencias
pnpm install

# 2. Iniciar el servidor local
pnpm run dev
```

### Comandos Disponibles

- `pnpm run dev`: Levanta el servidor de desarrollo con Hot Module Replacement (HMR).
- `pnpm run build`: Empaqueta y optimiza la aplicación para producción en la carpeta `dist/`.
- `pnpm run lint`: Audita el código en busca de errores y verifica que se sigan las reglas de React Hooks.
- `pnpm run start`: Alias para iniciar el entorno de desarrollo.
- `pnpm run test`: Marcador de posición para futuras pruebas.

## 🔒 Auditoría y Seguridad

El proyecto ha sido endurecido para producción:
- El `pnpm-lock.yaml` garantiza dependencias estrictas.
- El archivo `.gitignore` protege la fuga de caché y archivos de entorno (`.env`).
- Componentes refactorizados para respetar la pureza de ciclo de vida de React (`react-hooks/purity`).
