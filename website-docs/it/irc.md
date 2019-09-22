---
title: "Connettersi a Ripple tramite IRC"
reference_version: 1f7dd61cbdf2c6d8249481deb2a8d847
---
## Ripple adesso ha una IRC!
Lo sapevi che con la nostra ultima versione di **pep.py il server Bancho**, puoi connetterti alla chat di Ripple e parlare con gli altri utenti al di fuori del gioco usando un client IRC?  
È super-facile! Segui le istruzioni sottostanti per sapere come farlo.

### Prima di iniziare...
Perfavore nota che il supporto alla IRC è ancora un **work in progress** e potrebbe non funzionare con **qualunque client IRC** o potrebbe avere dei **bug**.  
Il nostro server IRC gestisce solo **comandi basici** al momento, come PASS, NICK, USER, PRIVMSG, NOTICE, JOIN, PART e QUIT.  
Il supporto ad altri comandi arriverà più avanti.  
**Inoltre, tieni a mente che, per ora, non puoi effettuare l'accesso a ripple tramite Bancho e IRC contemporaneamente.** Più in là aggiungeremo la possibilità di fare l'accesso sia da Bancho sia da IRC nello stesso momento.

### Impostare il tuo client IRC
Come abbiamo detto poc'anzi, **alcuni client IRC potrebbero non funzionare**, poiché stiamo usando un'implementazione davvero basica del protocollo IRC.  
Abbiamo testato il nostro server IRC con [HexChat](https://hexchat.github.io), un client IRC gratuito ed open source, e si è rivelato essere funzionante abbastanza bene.  
Se ti vuoi connettere dal tuo browser, [Kiwi IRC](https://kiwiirc.com/) fa il suo dovere.
<br>
Una volta che hai installato un client IRC, puoi connetterti a Ripple con queste impostazioni:  

- **Host:** `irc.ripple.moe`  
- **Porta:** `6667`  
- **Nickname e username:** Il tuo nome utente di Ripple. <u>Se hai spazi nel tuo nome, rimpiazzali col trattino basso. Per esempio,</u> `- Zino -` <u>diventa</u> `-_Zino_-`  
- **Password:** Il tuo token IRC, che puoi prendere da [qua](/irc).  

### Mi dà "Nickname is already in use" quando provo ad accedere!
Assicurati di non essere connesso da Bancho o da un altro client IRC. Se ancora non funziona, riprova entro 2 minuti e dovrebbe andare.

### Ed ora?
Se ti sei connesso al server IRC di ripple con successo, puoi iniziare a chattare nei canali pubblici digitando `/JOIN #canale` (ad esempio: `/JOIN #osu` per accedere al canale principale). Funzionano anche i messaggi privati. Se riscontri qualsiasi problema o il tuo client IRC non funziona con Ripple, faccelo sapere e faremo il possibile.
