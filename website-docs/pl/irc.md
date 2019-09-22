---
title: "Łączenie się do Ripple przez IRC"
reference_version: 1f7dd61cbdf2c6d8249481deb2a8d847
---
## Ripple ma teraz wsparcie dla IRC!
Czy wiedziałeś że, z najnowszą wersją naszego **pep.py Bancho server**, możesz się połączyć do czatu rippla i rozmawiać z innymi użytkownikami poza grą używając klienta IRC?  
To bardzo proste! Podążaj za instrukcjami niżej aby się dowiedzieć jak to zrobić.

### Zanim zaczniesz...
Proszę, pamiętaj że wsparcie IRC jest **WIP** i może nie działać z **każdym klientem IRC** lub może mieć **błędy**.  
Nasz serwer IRC aktualnie obsługuje tylko **podstawowe komendy** takie jak PASS, NICK, USER, PRIVMSG, NOTICE, JOIN, PART i QUIT.  
Wsparcie dla innych komend będzie dodane później.  
**Pamiętaj, że na razie nie możesz być zalogowany do ripple przez bancho i IRC na raz.** Dodamy możliwość zalogowania się z Bancho i IRC na raz później.

### Ustawianie twojego klienta IRC
Jak napisaliśmy wyżej, **niektóre klienty IRC mogą nie działać**, ponieważ używamy bardzo prostej implementacji protokolu IRC.  
Testowaliśmy nasz serwer IRC przez [HexChat](https://hexchat.github.io), darmowy open source klient IRC, i okazało się że działa całkiem dobrze.  
Jeśli chcesz wejść przez przeglądarke, [Kiwi IRC](https://kiwiirc.com/) też działa dobrze.
<br>
Gdy już zainstalowałeś klient IRC, możesz połączyć się z Ripple z tymi ustawieniami:  

- **Host:** `irc.ripple.moe`  
- **Port:** `6667`  
- **Nick i nazwa użytkownika:** Twoja nazwa użytkownika z Ripple. <u>Jeśli masz spacje w nazwie, zamień je na podkreślniki. Na przykład,</u> `- Zino -` <u>zmienia się w</u> `-_Zino_-`  
- **Hasło:** Twój token IRC, możesz go dostać [tutaj](/irc).  

### Dostaje błąd "Nickname already in use" gdy chce się zalogować!
Sprawdź czy na pewno nie jesteś połączony przez Bancho lub inny klient IRC. Jeśli dalej nie działa, spróbuj za 2 minuty i powinno zadziałać.

### Co teraz?
Jeśli udało ci się połączyć do serwera Ripple, możesz zacząć rozmawiać w publicznych kanałach poprzez napisanie `/JOIN #kanał` (np: `/JOIN #osu` aby dołączyć do głównego kanału). Prywatne wiadomości też działają. Jeśli napotkasz jakieś problemy lub twój klient IRC nie działa z Ripple, powiedz nam, a my zrobimy co w naszej mocy.
