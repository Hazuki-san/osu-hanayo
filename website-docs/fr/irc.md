---
title: "Connexion à Ripple via IRC"
reference_version: 1f7dd61cbdf2c6d8249481deb2a8d847
---
## Ripple a maintenant un support IRC !
Saviez-vous qu'avec la dernière version de notre **pep.py Bancho serveur**, vous pouvez vous connecter au chat de Ripple et parler avec d'autres utilisateurs à l'extérieur du jeu à l'aide d'un client IRC?
C'est super facile! Suivez les instructions ci-dessous pour savoir comment le faire.

### Avant de commencer...
Veuillez noter que le support IRC est encore en **travail en cours** et pourrait ne pas fonctionner avec **chaque client IRC** ou pourrait avoir des **bugs**.
Notre serveur IRC ne gère que **les commandes de base** en ce moment, comme PASS, NICK, USER, PRIVMSG, AVIS, JOIN, PART et QUIT.
Le support pour plus de commandes viendra plus tard. 
**Aussi, n'oubliez pas que, pour l'instant, vous ne pouvez pas être connecté Bancho et IRC en même temps.** Nous ajouterons la possibilité de vous connecter à la fois à Bancho et à IRC. plus tard.

### Configuration de votre client IRC
Comme nous l'avons dit plus haut, **certains clients IRC pourraient ne pas fonctionner**, car nous utilisons une mise en œuvre très basique du protocole IRC. 
Nous avons testé notre serveur IRC avec [HexChat](https://hexchat.github.io), un client IRC gratuit et open source, et il s'est avéré très bien.  
Si vous souhaitez vous connecter à partir de votre navigateur, [Kiwi IRC](https://kiwiirc.com/) fonctionne très bien aussi.
<br>
Lorsque vous avez installé un client IRC, vous pouvez vous connecter à Ripple avec ces paramètres :

- **Hôte :** `irc.ripple.moe`  
- **Port :** `6667`  
- **Pseudo et nom d'utilisateur :** Votre nom d'utilisateur ripple. <u>Si vous avez des espaces à votre nom, remplacez-les par des caractères de soulignement. Par exemple,</u> `- Zino -` <u>devient </u>`-_Zino_-`
- **Mot de passe :** Votre jeton IRC, Vous pourrez l'avoir [ici](/irc).    

### Je reçois "Nickname déjà utilisé" lorsque j'essaie de me connecter !
Assurez-vous que vous n'êtes pas connecté à partir de Bancho ou d'un autre client IRC. Si cela ne fonctionne toujours pas, réessayez dans 2 minutes et cela devrait fonctionner.

### Et maintenant ?
Si vous vous êtes connecté correctement au serveur IRC de Ripple, vous pouvez commencer à discuter dans les channels publiques en tapant `/JOIN #channel`  (ex:`/JOIN #osu` pour rejoindre le canal principal). Les messages privés fonctionnent aussi. Si vous rencontrez des problèmes ou que votre client IRC ne fonctionne pas avec Ripple, faites-le nous savoir et nous ferons tout notre possible.
