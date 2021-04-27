# API_Connect

### Pre-requisitos 📋
Para poder levantar la aplicación necesitas tener node instalado en el PC 
	```
	brew install node
	```.
 
### Instalación 🔧
1. Rellenar el .env.sample con tu UID y SECRET.

2. Realizar comando npm install para que se generen las importaciones.

3. Para ejecutar el servidor (dentro de la carpeta de Back):
	```
	node server.js
	```

4. Solo queda entrar en localhost:3000 con tu navegador, abrir la consola de desarrollador y empezar a probar llamadas.

En las casillas se puede pasar información para los botones predeterminados. Pero en el caso de la opción test se puede pasar el endpoint que quieras, incuyendole propiedades como la paginación por ejemplo. (/v2/campus?page=2).
Todas las opciones menos los eventos de un campus se tienen que ver a través de la consola. Los eventos de un campus también se puede ver por pantalla pero esta apenas iniciado.


# RUBY

Tras varias horas intentando implementar ruby como server, he decidido por el momento mejorar algo y dar alguna funcionalidad
a la Webb App que tengo. Espero que me de tiempo y no conformarme con express.
