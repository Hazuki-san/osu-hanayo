---
title: "Les Commandes de FokaBot"
reference_version: 383b905114b125d7bfd87a7dacdc8b56
---
Ce sont les commandes prises en charge par FokaBot, notre bot chat.

### Commandes générales
- `!roll` - Renvoie un nombre aléatoire de 0 à 100  
- `!roll num` - Renvoie un nombre aléatoire de 0 au nombre que vous avez mis  
- `!help` - Affiche le message d'aide 
- `!pp [mode]` - Afficher vos pp actuels. Si `mode` n'est pas présent, FokaBot vous indiquera le montant de PP pour votre mode de jeu actuel. Si le mode est présent (cela peut-être `std/taiko/ctb/mania`), FokaBot vous indiquera le montant de PP pour ce mode de jeu. **Cette commande fonctionne seulements dans les MP**
- `!update` - Met à jour beatmapset que vous avez `/np` dans notre téléchargement de map alternative. Utilisez ceci si vous venez de télécharger une map à partir d'osu!direct et il apparaît comme obsolète ou si une map ne peut pas être téléchargé depuis osu!direct car il est trop nouveau.

### Commandes Faq
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

### Commandes de type Tillerino
Fokabot a des commandes semblables à celles de Tillerino. Ces commandes ne fonctionnent que si vous les envoyez à Fokabot via un MP. Rappelez-vous que le système de PP a été implémenté que sur osu! Standard and osu! Mania. Le robot ne prend pas en charge les recommandations de maps en ce moment, cette fonctionnalité viendra plus tard, Espérons-le.

- `/np` - Affiche les PP pour la chanson en cours  (Seulement si c'est une musique osu!standard)  
- `!last` - Affiche les (et le nombre de PP gagné(s),Si c'était un score dans le mode standard) informations sur le dernier score soumis.
- `!with <mods>` - Affiche les PP pour la beatmap précédente demandée avec les mods demandés. Les modes supporter sont `NF, EZ, HD, HR, DT, HT, NC, FL, SO.`. N'utilisez pas d'espaces pour des mods multiples (ex : `!with HDHR`)

### Commandes d'administration
- `!system restart` - Redémarre le serveur. Tout le monde sera déconnecté et reconecté automatiquement  
- `!system status` - Affiche l'état du serveur 
- `!system reload` - Recharge les paramètres de Bancho (Celui qui est éditable depuis RAP)  
- `!system maintenance on/off` - Active / désactive le mode de maintenance de bancho 
- `!moderated on/off` - Active / désactive le mode modéré pour le canal actuel 
- `!silence <pseudo> <temps> <unité (s/m/h/j)> <raison>` - Réduit au silence l'utilisateur  
- `!removesilence <cible>` - Supprime le silence de la cible   
- `!kick <pseudo>` - Kick l'utilisateur du serveur 
- `!ban <pseudo>` - Ban l'utilisateur
- `!unban <pseudo>` - Unban l'utilisateur  
- `!restrict <pseudo>` - Restricte l'accès à l'utilisateur au serveur
- `!unrestrict <pseudo>` - Donne le droit d'accès à l'utilisateur au serveur 
- `!fokabot reconnect` - Reconnecte Fokabot s'il n'est plus sur la liste des utilisateurs en ligne  
- `!alert <message>` - Envoye une notification à chaque utilisateur connecté à bancho
- `!alertuser  <pseudo> <message>` - Envoye une notification à une utilisation spécifique
