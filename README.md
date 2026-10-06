# 🎮 GameHub

GameHub es una aplicación web desarrollada con **React** que consume la API pública de **RAWG Video Games Database** para explorar, buscar y consultar información sobre videojuegos.

El proyecto está desarrollado como una aplicación frontend orientada a practicar una arquitectura organizada, consumo de APIs REST, gestión del estado, React Hooks y buenas prácticas de desarrollo.

---

## 🚀 Tecnologías utilizadas

- **React**
- **Vite**
- **Axios**
- **React Router DOM**
- **React Hooks**
- **Context API**
- **React Icons**
- **CSS3**
- **RAWG API**

---

## ✨ Funcionalidades

### 🎮 Catálogo de videojuegos

- Obtención de videojuegos mediante la API de RAWG.
- Visualización de los juegos mediante tarjetas reutilizables.
- Información mostrada:
  - Imagen
  - Nombre
  - Valoración
  - Fecha de lanzamiento
  - Géneros
  - Plataformas

### 🔎 Buscador

Búsqueda de videojuegos utilizando el parámetro `search` de la API de RAWG.

La búsqueda utiliza un **debounce** mediante un Custom Hook para evitar realizar una petición por cada pulsación del usuario.

### ↕️ Ordenación

Ordenación de los resultados utilizando el parámetro `ordering` de RAWG.

Actualmente permite:

- Mejor valorados
- Más recientes
- Más antiguos
- Nombre A-Z
- Nombre Z-A

### 📄 Página de detalles

Cada videojuego dispone de una página de información detallada.

Incluye:

- Información general
- Valoración
- Géneros
- Plataformas
- Desarrolladores
- Fecha de lanzamiento
- Página web oficial
- Descripción
- Capturas de pantalla
- Gestión de favoritos

### ⭐ Sistema de favoritos

Los usuarios pueden añadir y eliminar videojuegos de favoritos desde:

- Las tarjetas del catálogo
- La página de detalles

Los favoritos se gestionan mediante **Context API** y se almacenan en `localStorage`, por lo que permanecen guardados al cerrar o recargar la aplicación.

### 🧭 Navegación

La aplicación utiliza **React Router DOM** para gestionar la navegación entre las diferentes páginas:

- `/` — Catálogo
- `/game/:id` — Detalles del videojuego
- `/favorites` — Favoritos

---

## 🏗️ Arquitectura del proyecto

El proyecto está organizado separando responsabilidades entre diferentes capas:

```text
src/
│
├── api/                # Configuración de Axios
│
├── components/        # Componentes reutilizables
│   ├── FavoriteButton/
│   ├── Filters/
│   ├── GameCard/
│   ├── GameGrid/
│   ├── GameScreenshots/
│   ├── Layout/
│   └── NavBar/
│
├── context/            # Contextos globales
│
├── hooks/              # Custom Hooks
│
├── pages/              # Páginas de la aplicación
│   ├── Favorites/
│   ├── GameDetails/
│   └── Home/
│
├── routes/             # Configuración de React Router
│
├── services/            # Comunicación con la API
│
└── styles/              # Estilos globales
```

La separación entre **API, servicios, componentes, páginas, hooks y contexto** permite mantener el código organizado y facilita futuras ampliaciones.

---

## 🔌 Consumo de la API

La comunicación con RAWG se realiza mediante una instancia reutilizable de **Axios**.

La API Key se gestiona mediante variables de entorno para evitar incluirla directamente en el código fuente.

Los servicios se encargan de abstraer las peticiones realizadas a la API.

Ejemplo de operaciones utilizadas:

- Obtener listado de videojuegos
- Obtener información detallada de un videojuego
- Obtener capturas de pantalla

---

## 💾 Gestión del estado

El proyecto utiliza diferentes mecanismos de React dependiendo de la responsabilidad:

- `useState` para estados locales.
- `useEffect` para efectos y peticiones asíncronas.
- Custom Hooks para reutilizar lógica.
- **Context API** para gestionar los favoritos.
- `localStorage` para persistir los favoritos en el navegador.

Los favoritos se almacenan utilizando los IDs de los videojuegos:

```json
[3328, 4200, 3498]
```

Posteriormente, la página de favoritos obtiene la información necesaria de esos videojuegos para mostrarlos mediante los componentes existentes.

---

## 🛠️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/Jacercen/gamehub.git
```

### 2. Entrar en el proyecto

```bash
cd gamehub
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_RAWG_API_KEY=TU_API_KEY
```

### 5. Ejecutar el proyecto

```bash
npm run dev
```

La aplicación estará disponible en la URL que indique Vite, normalmente:

```text
http://localhost:5173
```

---

## 📋 Próximas mejoras

Algunas funcionalidades previstas para futuras versiones:

- Filtros por género
- Filtros por plataforma
- Paginación
- Infinite Scroll
- Skeleton Loading
- Gestión y presentación de errores
- Mejoras de diseño responsive
- Optimización de peticiones a la API
- Sistema de caché de videojuegos
- Mejoras de accesibilidad

---

## 🎯 Objetivos del proyecto

GameHub se desarrolla como proyecto práctico para profundizar en:

- Arquitectura de aplicaciones React
- Consumo de APIs REST
- Axios
- React Hooks
- Custom Hooks
- Context API
- React Router
- Gestión y persistencia del estado
- Organización de proyectos frontend
- Componentización
- Buenas prácticas de desarrollo

El proyecto también sirve como base para seguir incorporando funcionalidades y mejorar progresivamente su arquitectura y experiencia de usuario.

---

## 📸 API utilizada

**RAWG Video Games Database**

[RAWG API Documentation](https://rawg.io/apidocs?utm_source=chatgpt.com)

---

## 👨‍💻 Autor

**Javier Cervera**

Proyecto desarrollado como parte de mi aprendizaje y práctica en desarrollo frontend con React.
