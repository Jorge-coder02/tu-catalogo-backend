# ⚙🎬 Tu Catálogo (Hub personalizable de pelis y series)

[![Tu Catálogo](https://img.shields.io/badge/Status-In-progress-yellow)](https://github.com/Jorge-coder02/tu-catalogo-backend)
[![Licencia](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

🔗 **Visitar frontend:** [Ver en vivo](https://tucatalogohup.up.railway.app/)

## 🚀 Tecnologías Principales

![Node.js](https://img.shields.io/badge/Node.js-20.14.0-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18.2-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0.8-47A248?logo=mongodb&logoColor=white)

## ✨ Características Destacadas

- ✅ Datos obtenidos a partir de APIs (OMDb y TMDB)

## 📦 Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/Jorge-coder02/tu-catalogo-backend.git
cd tu-catalogo-frontend
```

2. **Instalar dependencias**

```bash
npm install
```

o si usas Yarn

```bash
yarn install
```

3. **Ejecutar en modo desarrollo**

```bash
npm run dev
```

## El servidor estará disponible en:

## http://localhost:3000

## 🗂️ Estructura del Proyecto

```plaintext
📦 root
├── 📁 src/
│   ├── 📁 controllers/    # Controllers, funciones del backend
│   ├── 📁 middlewares/    # Middlewares (autenticación, validaciones, logging, etc.)
│   ├── 📁 models/         # Definición de modelos de base de datos
│   ├── 📁 routes/         # Definición de rutas (backend)
│   ├── 📁 utils/          # Funciones utilitarias y helpers generales
│   ├── 📄 index.jsx       # Punto de entrada principal de la aplicación
│
├── ⚙️ .env.local           # Variables de entorno (excluidas del control de versiones)
└── 📜 README.md            # Documentación general del proyecto


```

## Dependencias

- cors: 2.8.5
- dotenv: 17.2.0
- express: 5.1.0
- jsonwebtoken: 9.0.2
- mongoose: 8.16.4

## Dependencias de desarrollo:

- nodemon: `3.1.10`
