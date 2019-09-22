---
title: "Installation manuelle du certificat"
reference_version: 96a9ef2265cef92f7a7014f3303b74b
---
Si vous rencontrez des difficultés à vous connecter à Ripple en utilisant stable (dernier) / beta / cuttingedge ou que le changeur de serveur n'installe pas correctement le certificat, vous pouvez installer le certificat manuellement.

### Instructions
- Tout d'abord, téléchargez le certificat [en cliquant ici](https://zxq.co/ripple/ripple-server-switcher/raw/commit/d206bffb6fc896bc9c5121b30ba302e9e31c1161/RippleServerSwitcher/Resources/certificate.cer)
- Ensuite, ouvrez **certificate.cer**
- Cliquez sur  **Installer le certificat...**
- Cliquez sur **Suivant**
- Sélectionner **Placer tous les certificats dans le magasin suivant** (la seconde option), ensuite cliquez sur **Parcourir...**
- Une nouvelle fenêtre apparaîtra, sélectionnez **Autorités de certification racines de confiance** puis cliquez sur **OK**
- Cliquez sur **Suivant**
- Cliquez sur **Terminer**

### Comment tester le certificat
Pour s'assurer que le certificat a été installé avec succès, Assurez-vous que le chanqgeur de serveur est sur **On** et ouvrez [cette page](https://c.ppy.sh).  

- Si vous voyez **[des choses de osu!bancho](http://y.zxq.co/ubfzty.png)**, votre changeur de serveur est éteint. **Allumez-le et réessayez.**  
- Si vous voyez **[quelque chose de ripple](http://y.zxq.co/zphobw.png)**, Vous êtes connecté correctement à Ripple sous https, **bien joué !**  
- Si vous voyez **[un certificat ou une erreur de sécurité](http://y.zxq.co/reaueu.png)**, le certificat n'a pas été installé avec succès. **Suivez les instructions ci-dessous.**  

### Si tout le reste échoue ...
...Vous pouvez essayer de supprimer tous les certificats Ripple existants et d'installer le certificat à nouveau. Suivez ces étapes:

- Appuyez sur **Win+R**  
- Tapez `mmc certmgr.msc` dans l'onglet exécuter puis appuyez sur **OK** pour ouvrir le gestionnaire de certificats 
- Sélectionner **Autorités de certification racines de confiance** à la gauche  
- Sélectionner **Certificats** à la droite 
- Vous devriez voir un **[Ripple](http://y.zxq.co/bbyxev.png)** soit un ou deux **\*.ppy.sh** entrées dans la liste. Sélectionnez ensuite, **clique droit** puis cliquez sur **Supprimer**  
- Sélectionnez toutes les options positives
- Ouvrez le changeur de serveur, cliquez sur **Install certificate**, puis **Yes**  
- Essayez de vous connecter au [serveur bancho de ripple sous https](https://c.ppy.sh/) et cela _devra_ marcher  
