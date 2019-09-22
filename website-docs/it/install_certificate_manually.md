---
title: "Installazione manuale del certificato"
reference_version: a233f1b4a8c01deff1aa04db5437062b
---
Se riscontri dei problemi nel connetterti a Ripple o lo switcher non installa correttamente il certificato, puoi installare il certificato manualmente.

### Istruzioni
- Per prima cosa, scarica il certificato [cliccando qui](https://zxq.co/ripple/ripple-server-switcher/raw/commit/d206bffb6fc896bc9c5121b30ba302e9e31c1161/RippleServerSwitcher/Resources/certificate.cer)
- In seguito, apri **certificate.cer**
- Clicca **Installa certificato...**
- Clicca **Avanti**
- Seleziona **Posiziona tutti i certificati nel seguente archivio** (seconda opzione), poi clicca **Sfoglia...**
- Spunterà una nuova finestra, seleziona **Autorità di certificazione fonti attendibili** e clicca **Ok**
- Clicca **Avanti**
- Clicca **Fine**

### Come testare il certificato
Una volta installato il certificato, puoi testare se è stato installato correttamente seguendo questi passi:  

- Apri il server switcher e clicca su **Inspect**.
- Aspetta un paio di secondi e tutte le diciture nella sezione "Server connection" section, sulla destra, dovrebbero diventare verdi e riportare "OK" ([così](http://oi66.tinypic.com/2v9q90p.jpg)). In tal caso, dovresti essere in grado di collegarti a Ripple.  
- Se ottieni **CERT ERROR**, il certificato non è stato installato correttamente. **Segui le istruzioni in basso.**  
- Se ottieni **"..."**, non sei connesso a Ripple. Chiudi la finestra, clicca su **Switch to Ripple** e riprova.  

### Se qualcos'altro non va a buon fine...
...puoi provare a rimuovere tutti i certificati esistenti di Ripple ed installare il certificato nuovamente. Segui questi passaggi:

- Premi **Win+R**  
- Digita `mmc certmgr.msc` nella finestra esegui e premi **invio** per aprire il Gestore Certificati  
- Seleziona **Autorità di certificazione radice attendibili** sulla sinistra  
- Seleziona **Certificati** sulla destra  
- Dovresti vedere alcune voci di **[Ripple](http://y.zxq.co/bbyxev.png)** e alcune voci di **\*.ppy.sh** nella lista. Selezionale, **click destro** e clicca su **Rimuovi**  
- Seleziona tutte le opzioni positive (Ok/Sì ecc)  
- Riavvia lo switcher, clicca su **Inspect**, poi clicca su **Install certificate**, successivamente **Sì**  
- Clicca su **Test ripple connection** e dovresti vedere "OK" per tutti i domini  
**Se la finestra inspect è apposto ma non riesci ancora a collegarti a ripple dal client di gioco, prova ad avviare osu! come amministratore**.
