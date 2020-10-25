
const express = require('express');
const serverApp = express();
const morgan = require('morgan');
const path = require('path');


/*CONFIGURACION(setting)*/
serverApp.use(express.json());
serverApp.use(express.urlencoded({ extended: false }));
serverApp.set('port', process.env.PORT || 1337);// no funca desde afuera
serverApp.set('json spaces', 2);
serverApp.set('views', path.join(__dirname, 'views'));//(preguntar por ejs)

/*INICIO MIDDLEWARRE(middlewares)*/
serverApp.use(morgan('dev'));

/*INICIO RUTAS(Routes)*/
serverApp.use(require('./routes/ruta'));
serverApp.use('/api/alimentos', require('./routes/alimento'));

/*INICIO DE SERVIDOR(server start)*/
serverApp.listen(serverApp.get('port'), () => {
    console.log('Servidor en puerto ' + serverApp.get('port'));
});
