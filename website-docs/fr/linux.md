---
title: "Comment se connecter sur Ripple (Linux)"
reference_version: 2a77df23ecc8f9be75819e98afadcef1
---
Ce guide est seulement pour se conncter de osu! à Ripple, et ne pas configurer le jeu lui-même. Vous pouvez suivre [ce guide]
(https://gist.github.com/Francesco149/a2f796683a4e5195458f4bb171d88eb0) mettre le jeu en place.

### Modification du fichier hosts
Pour cela, vous devrez modifier votre fichier *hosts*. Pour ce faire, exécutez `nano /etc/hosts` en tant que root / avec sudo..

Lorsque vous l'ouvrez, copiez ce qui suit en bas:

```
{ipmain} osu.ppy.sh c.ppy.sh c1.ppy.sh c2.ppy.sh c3.ppy.sh c4.ppy.sh c5.ppy.sh c6.ppy.sh ce.ppy.sh a.ppy.sh s.ppy.sh i.ppy.sh
{ipmirror} bm6.ppy.sh
```
**CTRL+X** et après **Entrer** pour enrengistrer le ficher.

### Installation du certificat
Téléchargez le certificat en cliquant [*ici*](https://zxq.co/ripple/ripple-server-switcher/raw/commit/d206bffb6fc896bc9c5121b30ba302e9e31c1161/RippleServerSwitcher/Resources/certificate.cer)

Ouvrez la configuration d'Internet Explorer en exécutant `wine control`.

Double-cliquez sur l'icône *Internet Settings*, accédez à l'onglet *Content*, puis cliquez sur le bouton *Certificats...*.

Cliquez sur *Importer*, puis *Suivant*.

Cliquez sur *Parcourir...* puis sélectionnez le certificat Ripple.

Cliquez sur *Suivant*.

Sélectionnez *Placez tous les certificats dans le store suivant*, et cliquez sur *Parcourir*.

Sélectionnez **Autorités de certification racine de confiance** et cliquez sur *OK*.

Cliquez sur *Suivant*, *Terminer*.

Vous devriez recevoir un message indiquant **L'importation a été effectuée avec succès**.

Après cela, vous pouvez démarrer le client et vous connecter avec vos identifiants Ripple.
