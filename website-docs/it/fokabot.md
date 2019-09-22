---
title: "Comandi FokaBot"
reference_version: 383b905114b125d7bfd87a7dacdc8b56
---
Questi sono i comandi supportati da FokaBot, il nostro chat bot.  

### Comandi generici
- `!roll` - Ritorna un numero casuale da 0 a 100  
- `!roll num` - Ritorna un numero casuale da 0 a num  
- `!help` - Visualizza il messaggio d'aiuto 
- `!pp [mode]` - Mostra i tuoi pp attuali. Se `mode` non è presente, FokaBot ti dirà l'ammontare dei PP per la tua modalità di gioco corrente. Se mode è presente (può essere `std/taiko/ctb/mania`), FokaBot ti dirà l'ammontare dei PP per quella modalità di gioco. **Questo comando funziona solo nei messaggi privati**
- `!update` - Aggiorna il beatmapset che hai inviato col comando `/np` nel nostro mirror di beatmap. Usalo se hai appena scaricato una beatmap dall'osu!direct e viene mostrata come non aggiornata o se una mappa non può essere scaricata dall'osu!direct poiché è troppo recente.

### Comandi Faq
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

### Comand in stile Tillerino
Fokabot dispone di comandi simili a Tillerino. Questi comandi funzionano solo se li mandi a FokaBot tramite messaggio privato. Tieni a mente che il sistema dei PP è stato implementato solo per osu!standard e osu!mania. Il bot al momento non supporta i consigli per le beatmap, quella funzionalità sarà disponibile in futuro, se tutto va bene.

- `/np` - Mostra i PP per la canzone attualmente in ascolto  (solo se è una canzone per osu!standard)  
- `!last` - Mostra delle informazioni (e i PP ottenuti, se fosse un punteggio di osu! standard) riguardanti l'ultimo punteggio inviato  
- `!with <mods>` - Mostra i PP per la beatmap precedentemente richiesta con i modificatori richiesti. I modificatori supportati sono `NF, EZ, HD, HR, DT, HT, NC, FL, SO.`. Non usare gli spazi per più modificatori (ad esempio: `!with HDHR`)

### Comandi di amministrazione
- `!system restart` - Riavvia il server. Tutti verranno disconnessi e riconnessi automaticamente 
- `!system status` - Mostra lo stato del server
- `!system reload` - Ricarica le impostazioni di bancho (quelle che sono modificabili dal RAP)  
- `!system maintenance on/off` - Attiva/disattiva la modalità di manutenzione di bancho
- `!moderated on/off` - Attiva/disattiva la modalità moderata per il canale corrente
- `!silence <username> <count> <unit (s/m/h/d)> <reason>` - Silenzia un utente
- `!removesilence <target>` - Rimuove il silence dal target   
- `!kick <username>` - Caccia un utente dal server  
- `!ban <username>` - Bandisce e caccia qualcuno
- `!unban <username>` - Toglie il bando da qualcuno  
- `!restrict <username>` - Mette in modalità ristretta qualcuno  
- `!unrestrict <username>` - Toglie la modalità ristretta a qualcuno  
- `!fokabot reconnect` - Riconnette Fokabot se non è più nella lista degli utenti online  
- `!alert <message>` - Manda una notifica a ciascun utente connesso a bancho  
- `!alertuser  <username> <message>` - Manda una notifica ad un utente specifico
