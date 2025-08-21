
# CodeLaunch Intermediate Challenge

Proyecto web desarrollado en React + TypeScript, orientado a la gestión de tareas (ToDo App) con una interfaz moderna, profesional y amigable. Incluye autenticación simulada, formulario de contacto y notificaciones visuales. Ideal para equipos que buscan una base sólida, escalable y con buenas prácticas.

> *IMPORTANTE*: La paleta de colores fue diseñado usando GitHub Copilot. El diseño fue pensado y realizado por Facundo.

## 🚀 Características principales

- **Gestión de tareas:**
	- Crear, editar, eliminar y marcar tareas como completadas o pendientes.
	- Visualización clara y moderna de la lista de tareas.
	- Validaciones y feedback visual inmediato.
- **Autenticación de usuario (simulada):**
	- Formulario de login atractivo, profesional y amigable.
	- Manejo de errores y mensajes de éxito.
- **Formulario de contacto:**
	- Permite a los usuarios enviar mensajes o sugerencias.
	- Feedback visual para errores y envíos exitosos.
- **Notificaciones:**
	- Uso de `react-toastify` para mostrar mensajes de éxito, error e información.
- **UI/UX:**
	- Diseño responsive y moderno con TailwindCSS.
	- Componentes reutilizables y código limpio.
- **Estado global:**
	- Manejo de estado con Zustand para tareas y acciones globales.

## 🛠️ Tecnologías utilizadas

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Hook Form](https://react-hook-form.com/)
- [React Router DOM](https://reactrouter.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

## 📁 Estructura del proyecto

```
src/
	assets/           # Imágenes y recursos estáticos
	components/       # Componentes reutilizables (ToDoList, ToDoForm, Header, etc.)
	layout/           # Componentes de layout y estructura
	types/            # Tipos y modelos TypeScript
	views/            # Vistas principales (Home, Login, ContactUs)
	store.ts          # Estado global con Zustand
	router.tsx        # Definición de rutas con React Router
	main.tsx          # Entry point de la app
```

## 📋 Scripts disponibles

- `npm run dev`     - Inicia el servidor de desarrollo
- `npm run build`   - Compila la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint`    - Ejecuta ESLint para análisis de código

## ⚡ Instalación y uso

1. Clona el repositorio:
	 ```bash
	 git clone <url-del-repo>
	 cd codelaunch-intermediate-challenge
	 ```
2. Instala las dependencias:
	 ```bash
	 npm install
	 ```
3. Inicia el servidor de desarrollo:
	 ```bash
	 npm run dev
	 ```
4. Accede a la app en [http://localhost:5173](http://localhost:5173) (o el puerto que indique Vite).

## 🧩 Componentes principales

- **Home:** Vista principal con la lista y formulario de tareas.
- **Login:** Formulario de autenticación con feedback visual.
- **ContactUs:** Formulario de contacto para sugerencias o dudas.
- **ToDoList / ToDoForm:** Gestión y edición de tareas.
- **Header, Layout, BackToHome:** Navegación y estructura general.

## 📝 Notas técnicas

- El login es simulado (usuario: `user@example.com`, contraseña: `password123`).
- El estado de las tareas se almacena en memoria (no persistente en backend).
- El diseño es completamente responsive y accesible.
- Se siguen buenas prácticas de desarrollo, tipado estricto y componentes desacoplados.

## 👥 Autores y créditos

- Desarrollador principal: [Facuud2](https://github.com/Facuud2)
- Colaboradores: Yamiluu

---
¡Listo para presentar y escalar en equipo! Si tienes dudas o sugerencias, utiliza el formulario de contacto dentro de la app.
