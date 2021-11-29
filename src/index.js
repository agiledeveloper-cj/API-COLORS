const express = require('express');
const app = express();
const morgan = require('morgan');


//configuraciones (settings)
app.set('port', process.env.PORT || 3000); //en caso exista un puerto de algún servicio externo
app.set('json spaces', 2);


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //lee datos sencillos de formulario
app.use(express.json());


//rutas (routes)
app.use('/colores',require('./routes/colors'));


//iniciando el servidor web (listening the port)
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})