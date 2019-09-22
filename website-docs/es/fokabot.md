---
title: "Comandos de FokaBot"
reference_version: 383b905114b125d7bfd87a7dacdc8b56
---
Estos son los comandos soportados por FokaBot, nuestro bot de chat.  

### Comandos generales
- `!roll` - Devuelve un número aleatorio de 0 a 100  
- `!roll num` - Devuelve un número aleatorio de 0 a num  
- `!help` - Muestra el mensaje de ayuda  
- `!pp [modo]` - Muestra tu pp actual. Si el `modo` no está presente, FokaBot te dirá la cantidad de PP para tu modo de juego actual. Si el modo está presente (puede ser `std/taiko/ctb/mania`), FokaBot te dirá la cantidad de PP para ese modo de juego. **Este comando sólo funciona en mensajes privados**
- `!update` - Actualiza el set de mapas que has enviado con el comando `/np` en nuestro sitio espejo de mapas. Úselo si acaba de descargar un mapa de osu!direct y aparece como obsoleto o si no se puede descargar un mapa de osu!direct porque es demasiado nuevo.

### Comandos de preguntas frecuentes
- `!faq rules`  
- `!faq swearing`  
- `!faq spam`  
- `!faq offend`  
- `!faq english`  
- `!faq github`  
- `!faq discord`  
- `!faq blog`  
- `!faq changelog`  
- `!faq status`  

### Comandos de tipo Tillerino
Fokabot tiene algunos comandos similares a Tillerino. Esos comandos sólo funcionan si se envían a Fokabot a través de un mensaje privado. Recuerde que el sistema PP se ha implementado sólo en osu!standard y osu!mania. El bot no soporta recomendaciones de mapas por el momento, esa funcionalidad vendrá después, ojalá.

- `/np` - Muestra la cantidad de PP para la canción que se está reproduciendo  (sólo si es una canción de osu! standard)  
- `!last` - Muestra información (y los PPs obtenidos, si fue una puntuación de osu! standard) respecto a la última puntuación enviada  
- `!with <mods>` - Muestra la cantidad de PP para el mapa anterior solicitado con los mods solicitados. Los mods soportados son `NF, EZ, HD, HR, DT, HT, NC, FL, SO.`. No utilice espacios para múltiples mods (por ejemplo: `!with HDHR`)

### Comandos administrativos
- `!system restart` - Reinicia el servidor. Todos serán desconectados y reconectados automáticamente  
- `!system status` - Muestra el estado del servidor  
- `!system reload` - Recarga los ajustes de Bancho (los que son editables desde RAP)  
- `!system maintenance on/off` - Activa/desactiva el modo de mantenimiento de Bancho  
- `!moderated on/off` - Activa/desactiva el modo moderado para el canal actual  
- `!silence <nombre de usuario> <tiempo> <unidad (s/m/h/d)> <razón>` - Silencia un usuario  
- `!removesilence <target>` - Elimina el silencio del target   
- `!kick <nombre de usuario>` - Botar a un usuario del servidor  
- `!ban <nombre de usuario>` - Banear y botar a alguien  
- `!unban <nombre de usuario>` - Eliminar el ban de alguien  
- `!restrict <nombre de usuario>` - Poner a alguien en modo restringido  
- `!unrestrict <nombre de usuario>` - Eliminar el modo restringido a alguien  
- `!fokabot reconnect` - Reconecta Fokabot si ya no está en la lista de usuarios  
- `!alert <mensaje>` - Envía una notificación a cada usuario conectado a Bancho  
- `!alertuser  <nombre de usuario> <mensaje>` - Envía una notificación a un usuario específico
