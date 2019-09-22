---
title: "Conexión a Ripple a través de IRC"
reference_version: 1f7dd61cbdf2c6d8249481deb2a8d847
---
## ¡Ripple ahora tiene soporte para IRC!
¿Sabías que con la última versión de nuestro **servidor de Bancho pep.py**, puedes conectarte al chat de Ripple y hablar con otros usuarios desde fuera del juego usando un cliente IRC?  
¡Es súper sencillo! Sigue las siguientes instrucciones para saber cómo hacerlo.

### Antes de empezar...
Tenga en cuenta que el soporte de IRC sigue estando **en desarrollo** y puede que no funcione con **cualquier cliente IRC** o que tenga algunos **bugs**.  
Nuestro servidor IRC solo maneja **comandos básicos** por el momento, como PASS, NICK, USER, PRIVMSG, NOTICE, JOIN, PART y QUIT.  
El soporte para otros comandos vendrá más tarde.  
**También, ten en cuenta que, por ahora, no puedes estar conectado en Ripple a través de Bancho e IRC al mismo tiempo.** Más adelante añadiremos la posibilidad de acceder tanto a Bancho como a IRC al mismo tiempo.

### Configurar tu cliente IRC
Como hemos dicho anteriormente, **algunos clientes IRC podrían no funcionar**, porque estamos usando una implementación muy básica del protocolo IRC.  
Hemos probado nuestro servidor IRC con [HexChat](https://hexchat.github.io), un cliente IRC gratuito y de código abierto, y resultó funcionar bastante bien.  
Si quieres conectarte desde tu navegador, [Kiwi IRC](https://kiwiirc.com/) también funciona bien.
<br>
Una vez que hayas instalado un cliente IRC, puedes conectarte a Ripple con esta configuración:  

- **Host/Servidor:** `irc.ripple.moe`  
- **Port/Puerto:** `6667`  
- **Nickname y username/apodo y nombre de usuario:** Tu nombre de usuario de Ripple. <u>Si tu nombre de usuario tiene espacios, reemplázalos con guiones bajos. Por ejemplo,</u> `- Zino -` <u>se vuelve</u> `-_Zino_-`  
- **Password/Contraseña:** Tu token IRC, puedes obtenerlo [aquí](/irc).  

### ¡Obtengo "Nickname is already in use" (El apodo ya está en uso) cuando intento iniciar sesión!
Asegúrate de no estar conectado por Bancho u otro cliente IRC. Si sigue sin funcionar, inténtalo de nuevo en 2 minutos y debería funcionar.

### ¿Y ahora?
Si te has conectado con éxito al servidor IRC de Ripple, puedes empezar a chatear en canales públicos escribiendo `/JOIN #canal` (por ejemplo: `/JOIN #osu` para acceder al canal principal). Los mensajes privados también funcionan. Si encuentras algún problema o tu cliente IRC no funciona con Ripple, infórmenos y haremos nuestro mejor esfuerzo.
