# MVC CRUD + AUTH Template

![Node.js](https://img.shields.io/badge/Node.js-v18-green)
![Express](https://img.shields.io/badge/Express.js-v4-blue)
![SQLite](https://img.shields.io/badge/SQLite-Database-lightgrey)
![License](https://img.shields.io/badge/license-MIT-orange)

> Proyecto base para implementar un sistema CRUD con autenticación siguiendo el patrón MVC, desarrollado en Node.js, Express, Sequelize y EJS.

---

## Tabla de Contenido

- [Descripción](#descripción)
- [Objetivos](#objetivos)
- [Arquitectura MVC](#arquitectura-mvc)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Uso](#instalación-y-uso)
- [Funcionalidades](#funcionalidades)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Ejemplo de Funcionamiento](#ejemplo-de-funcionamiento)
- [Autor](#autor)
- [Licencia](#licencia)

---

## Descripción

Este proyecto demuestra cómo implementar un CRUD completo con sistema de Login dentro de una arquitectura MVC (Modelo–Vista–Controlador).

Permite a los usuarios registrarse, iniciar sesión y gestionar publicaciones (crear, leer, actualizar y eliminar) únicamente si están autenticados. Las rutas protegidas no son accesibles sin haber iniciado sesión.

Diseñado como base para proyectos educativos, demostraciones o prototipos que requieren autenticación básica y operaciones CRUD seguras.

---

## Objetivos

- Aplicar el patrón MVC para mantener una estructura limpia y escalable.  
- Implementar un sistema de autenticación (login y registro) con protección de rutas.  
- Desarrollar un CRUD completo (Crear, Leer, Actualizar y Eliminar publicaciones).  
- Mostrar buenas prácticas de código y organización.  

---

## Arquitectura MVC

El proyecto se organiza bajo el patrón Modelo–Vista–Controlador:

| Capa | Elemento | Descripción |
|------|-----------|-------------|
| **Modelo (Model)** | `models/` | Define la estructura de los datos (User, Post) y su relación con la base de datos mediante Sequelize. |
| **Vista (View)** | `views/` | Archivos EJS que renderizan la interfaz para el usuario. |
| **Controlador (Controller)** | `controllers/` | Contiene la lógica de negocio: registro, login y operaciones CRUD. |

Esta separación facilita el mantenimiento, la escalabilidad y la reutilización del código.

---

## Tecnologías Utilizadas

- Node.js v18  
- Express.js v4  
- Sequelize ORM  
- SQLite como base de datos local  
- EJS como motor de plantillas  
- Passport.js para autenticación  
- Express-session y connect-flash  

---

## Instalación y Uso

1. Clonar el repositorio:  
   ```bash
   git clone https://github.com/tuUsuario/mvc-crud-auth-template.git
   cd mvc-crud-auth-template

2. Instalar dependencias:

npm install


3. Ejecutar el servidor:

npm run dev


4. Acceder en el navegador:

http://localhost:3000

5. Funcionalidades

Registro de nuevos usuarios.

Inicio y cierre de sesión.

CRUD de publicaciones (solo accesible tras iniciar sesión).

Validación de rutas protegidas mediante middleware.

Uso de SQLite con Sequelize para persistencia de datos.

Mensajes flash para retroalimentación de usuario (éxito/error).

6. Estructura del Proyecto
mvc-crud-auth-template/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── postController.js
│
├── middleware/
│   └── auth.js
│
├── models/
│   ├── User.js
│   └── Post.js
│
├── routes/
│   ├── authRoutes.js
│   └── postRoutes.js
│
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── layout.ejs
│   └── posts/
│       ├── index.ejs
│       ├── new.ejs
│       ├── edit.ejs
│       └── show.ejs
│
├── app.js
└── package.json

7. Ejemplo de Funcionamiento

El usuario se registra con su nombre, correo y contraseña.

Inicia sesión y accede al panel de publicaciones.

Puede crear, editar o eliminar posts.

Si intenta acceder sin autenticación, el sistema redirige al login.

8. Autor

Desarrollado por Juan José Aráuz
Proyecto académico orientado a la práctica del patrón MVC y la autenticación con Node.js y Express.

9. Licencia

Este proyecto está bajo la licencia MIT.
Puedes usarlo, modificarlo y distribuirlo libremente con fines educativos o de desarrollo.
