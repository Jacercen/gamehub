# 🎮 GameHub

GameHub es una aplicación web desarrollada con React que consume la API pública de RAWG para explorar videojuegos.

El objetivo principal de este proyecto es practicar el desarrollo frontend moderno utilizando una arquitectura escalable, consumo de APIs REST, React Hooks y buenas prácticas de desarrollo.

---

## 🚀 Tecnologías utilizadas

- React
- Vite
- Axios
- React Router DOM _(en desarrollo)_
- React Hooks
- CSS3

---

## 📂 Estructura del proyecto

```
src/
│
├── api/            # Configuración de Axios
├── components/     # Componentes reutilizables
├── hooks/          # Custom Hooks
├── pages/          # Páginas de la aplicación
├── routes/         # Configuración de rutas
├── services/       # Servicios para consumir la API
└── styles/         # Estilos globales
```

---

## 📦 Funcionalidades implementadas

### ✅ Consumo de la API RAWG

- Configuración de Axios mediante una instancia reutilizable.
- Gestión de la API Key mediante variables de entorno.
- Servicio independiente para obtener videojuegos.

---

### ✅ Arquitectura por capas

Separación del proyecto en:

- API
- Services
- Components
- Pages
- Hooks
- Routes

---

### ✅ Listado de videojuegos

Visualización de videojuegos obtenidos desde la API de RAWG.

Cada tarjeta muestra actualmente:

- Imagen
- Nombre
- Valoración
- Fecha de lanzamiento
- Géneros

---

### ✅ Buscador

Búsqueda de videojuegos mediante el parámetro `search` proporcionado por la API.

---

### ✅ Ordenación

Ordenación de resultados utilizando el parámetro `ordering` de RAWG.

Actualmente soporta:

- Mejor valorados
- Más recientes
- Más antiguos
- Nombre A-Z
- Nombre Z-A

---

### ✅ Debounce

La búsqueda utiliza un Custom Hook (`useDebounce`) para evitar realizar una petición por cada pulsación del usuario.

Esto mejora considerablemente el rendimiento de la aplicación.

---

## 📋 Funcionalidades en desarrollo

- Navegación con React Router
- Página de detalles del videojuego
- Favoritos
- Filtros por género
- Filtros por plataforma
- Infinite Scroll
- Mejoras de diseño responsive
- Skeleton Loading
- Gestión de errores
- Paginación

---

## 🛠️ Instalación

Clonar el repositorio

```bash
git clone https://github.com/Jacercen/gamehub.git
```

Entrar en el proyecto

```bash
cd gamehub
```

Instalar dependencias

```bash
npm install
```

Crear un archivo `.env`

```env
VITE_RAWG_API_KEY=TU_API_KEY
```

Ejecutar el proyecto

```bash
npm run dev
```

---

## 📸 API utilizada

- RAWG Video Games Database

https://rawg.io/apidocs

---

## 🎯 Objetivo del proyecto

Este proyecto se desarrolla con fines de aprendizaje para practicar:

- Arquitectura de aplicaciones React
- Consumo de APIs REST
- Gestión del estado
- React Hooks
- React Router
- Organización de proyectos escalables
- Buenas prácticas de desarrollo frontend

---

## 👨‍💻 Autor

**Javier Cervera**
