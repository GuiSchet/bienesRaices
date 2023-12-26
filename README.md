# bienesRaices

npm init
npm install express
npm install -D (para instalar paquete solo en desarrollo...)
main.js
modificar package.json "scripts": {"start": "node ./main.js"}
en la terminar lanzas el script con: npm run start
o podes poner "npm start"...
dependencia npm install -D nodemon, nos va a reiniciar el servidor cada vez q hagamos modificaciones en los archivos
crear un segundo script en package.json "server": "nodemon ./main.js"
main.js importar express

soporte ecmascript modules modificar package.json, modificar require por import

Routing: routing es por donde van a transitar los usuarios en nuestro sitio web o aplicacion (son endpoints)
get-  para mostrar información 
post- para enviar informacion
put-patch para actualizar informacion
delete- para eliminar informacion
use utiliza para buscar en todas las rutas q inicien en /

