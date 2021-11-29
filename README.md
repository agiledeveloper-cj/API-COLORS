# API DE COLORES
"API de Colores" es un proyecto que permite consultar de manera ágil los colores institucionales de Credicorp. Está desarrollado con tecnologías como NodeJs, Javascript y Express.

## Listado de las tecnologías o frameworks utilizados
Framework: NodeJs
Lenguaje: Javascript
Módulos: Express, morgan, underscore, nodemon
Formato: JSON
Editor: Visual Studio Code

## Instalación de dependencias (usando la línea de comandos)
**Nota importante:** Para instalar vía npm se necesita tener instalado NodeJs en su estación de trabajo.

#### Vía NPM
npm install express
npm install morgan
npm install underscore
npm install nodemon

## Ejecución del proyecto
Clonar el repositorio a tu máquina y carpeta local vía git.

#### Vía GIT
git clone https://github.com/agiledeveloper-cj/API-COLORS.git

#### En el archivo package.json
Definir la etiqueta scripts de la siguiente manera para configurar un entorno de desarrollo:
"scripts": {
    "dev": "nodemon src/index.js"
  },

#### En la línea de comandos
Ejecutar el entorno de desarrollo previamente configurado:
npm run dev

## Pruebas unitarias con Postman
Método Get:
http://localhost:3000/colores

Método Get By Id:
http://localhost:3000/colores/3

Método Post:
http://localhost:3000/colores
Body de ejemplo:
    {
		"name": "cerulean",
		"year": "2021",
		"color": "#98B2D1",
		"pantone_value": "15-4020"
    }

Método Put:
http://localhost:3000/colores/10
Body de ejemplo:
    {
		"name": "cerulean - prueba",
		"year": "2021",
		"color": "#F0C05A",
		"pantone_value": "15-4020"
    {

Método Delete:
http://localhost:3000/colores/7

Paginación:
http://localhost:3000/colores?page=3&limit=5

