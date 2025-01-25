// Importar el módulo express
const express = require('express');

// Crear una nueva instancia de Express
const app = express();

// Configurar el puerto en el que el servidor escuchará
const port = 5000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta de ejemplo para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');  // Sirve el archivo index.html desde la carpeta public
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
