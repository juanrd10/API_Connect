# API_Connect

### Pre-requisitos 馃搵
Para poder levantar la aplicaci贸n necesitas tener node instalado en el PC 
	```
	brew install node
	```.
 
### Instalaci贸n 馃敡
1. Rellenar el .env.sample con tu UID y SECRET y ponerle de nombre .env (dentro de la carpeta back).

2. Realizar comando npm install para que se generen las importaciones.

3. Para ejecutar el servidor (dentro de la carpeta de Back):
	```
	node server.js
	```

4. Solo queda entrar en localhost:3000 con tu navegador, abrir la consola de desarrollador y empezar a probar llamadas.

En las casillas se puede pasar informaci贸n para los botones predeterminados. Pero en el caso de la opci贸n test se puede pasar el endpoint que quieras, incuyendole propiedades como la paginaci贸n por ejemplo. (/v2/campus?page=2).
Todas las opciones menos los eventos de un campus se tienen que ver a trav茅s de la consola. Los eventos de un campus tambi茅n se puede ver por pantalla pero esta apenas iniciado.

Al final el back tiene que correr en express ya que ruby no lo he conseguido redirigir al index de React.

# RUBY

Tras varias horas intentando implementar ruby como server, he decidido por el momento mejorar algo y dar alguna funcionalidad
a la Webb App que tengo. Espero que me de tiempo y no conformarme con express.
