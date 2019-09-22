---
title: "Come connettersi a Ripple (Linux)"
reference_version: 607f23459bef786f3b5be6e79c1c9d07
---
Questa guida serve solo per connettere osu! a ripple, e non ad impostare il gioco in se. Puoi seguire [questa guida](https://gist.github.com/Francesco149/a2f796683a4e5195458f4bb171d88eb0) per l'impostazione del client.

### 1a. Modificare il file hosts, il metodo veloce
Puoi usare questo comandi per aggiungere i reindirizzamenti di ripple più aggiornati al tuo file hosts:
```
curl -s https://ip.ripple.moe/current.json | python -c "from __future__ import print_function; import sys, json; j = json.load(sys.stdin); print('\n# Ripple\n' + '\n'.join('{} {}'.format(k, v) for k, v in {i: ' '.join([k for k, v in j.items() if v == i]) for _, i in j.items()}.items()))" | sudo tee -a /etc/hosts > /dev/null
```

### 1b. Modificare il file hosts manualmente
In alternativa, puoi modificare il tuo file hosts manualmente. Per farlo, esegui `nano /etc/hosts` come root/con sudo.

Dopo aver aperto il file, incolla questo alla fine:

```
{ipmain} osu.ppy.sh c.ppy.sh c1.ppy.sh c2.ppy.sh c3.ppy.sh c4.ppy.sh c5.ppy.sh c6.ppy.sh ce.ppy.sh a.ppy.sh s.ppy.sh i.ppy.sh
{ipmirror} bm6.ppy.sh
```
**CTRL+X** e poi **Enter** per salvare il file.

### 2. Installare il certificato
Scarica il certificato cliccando [*qui*](https://zxq.co/ripple/ripple-server-switcher/raw/commit/d206bffb6fc896bc9c5121b30ba302e9e31c1161/RippleServerSwitcher/Resources/certificate.cer)

Apri la configurazione dell'Internet Explorer eseguendo il comando `wine control`.

Doppio click sull'icona *Impostazioni Internet*, vai sulla tab *Contenuto*, poi clicca il pulsante *Certificati...*.

Clicca su *Importa*, poi *Avanti*.

Clicca *Sfoglia...* poi seleziona il certificato di Ripple.

Clicca *Avanti*.

Seleziona *Posiziona tutti i certificati nel seguente archivio*, e clicca *Sfoglia*.

Seleziona **Autorità di certificazione radice attendibili**, e clicca *Ok*.

Clicca *Avanti*, *Fine*.

Dovresti ricevere un messaggio che dice **Importazione avvenuta con successo**.


Dopo che ciò è stato fatto, puoi avviare il client, ed accedere con le tue credenziali di Ripple.