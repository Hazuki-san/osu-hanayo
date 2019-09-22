---
title: "Komendy FokaBota"
reference_version: 383b905114b125d7bfd87a7dacdc8b56
---
To są komendy które obsługuje Fokabot, nasz chat bot.  

### Generalne komendy
- `!roll` - Podaje losowy numer od 0 do 100  
- `!roll num` - Podaje losowy numer od 0 do num  
- `!help` - Wyświetla wiadomość pomocniczą
- `!pp [mode]` - Pokazuje twoje obecne pp. Jeśli w miejsce `mode` nic nie jest napisane, Fokabot powie ci ile masz pp dla trybu który aktualnie grasz. Jeśli wpisałeś coś w mode (możesz tam wpisać `std/taiko/ctb/mania`), Fokabot powie ci ile masz pp dla tego trybu. **Ta komenda działa tylko w prywatnych wiadomościach**
- `!update` - Aktualizuj beatmapset który wysłałeś przez `/np`. Użyj tego jeśli właśnie pobrałeś mape z osu!direct a gra uznaje ją za niezaaktualizowaną lub jeśli beatmapa nie może zostać pobrana przez osu!direct bo jest zbyt nowa.

### Komendy faq
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

### Komendy podobne do Tillerino
Fokabot ma trochę komend podobnych do Tillerino. Te komendy działają tylko jeśli wyślesz je Fokabotowi przez prywatną wiadomość. Pamiętaj że system PP został wprowadzony tylko w osu!standard osu!mania. Bot nie obsługuje rekomendacji map w tym momencie, Ta funkcja zostanie wprowadzona później. Miejmy nadzieje.

- `/np` - Pokaż PP za obecnie graną piosenke  (tylko jeśli to jest piosenka osu!standard)  
- `!last` - Pokaż informacje (i zdobyte PP, jeśli to jest piosenka osu!standard) o ostatnim wysłanym wyniku  
- `!with <mods>` - Pokaż PP za ostatnio wysłaną mape z określonymi modami. Wspierane są `NF, EZ, HD, HR, DT, HT, NC, FL, SO.`. Nie używaj spacji dla wielu modów (np: `!with HDHR`)

### Komendy administracji
- `!system restart` - Zrestartuj serwer. Wszyscy zostaną rozłączeni i dołączeni automatycznie
- `!system status` - Pokaż status serwera  
- `!system reload` - Przeładuj ustawienia bancho (tylko te edytowalne przez RAP)  
- `!system maintenance on/off` - Włącz/wyłącz tryb konwersacji bancho  
- `!moderated on/off` - Włącz/wyłącz tryb moderowania dla aktualnego kanału  
- `!silence <nazwa użytkownika> <czas> <jednostka (s/m/h/d)> <powód>` - Wycisz użytkownika  
- `!removesilence <cel>` - Wyłącz wyciszenie celu   
- `!kick <nazwa użytkownika>` - Wyrzuć użytkownika z serwera  
- `!ban <nazwa użytkownika>` - Zbanuj i wyrzuć kogoś  
- `!unban <nazwa użytkownika>` - Odbanuj kogoś  
- `!restrict <nazwa użytkownika>` - Restrictuj kogoś  
- `!unrestrict <nazwa użytkownika>` - Odrestrictuj kogoś  
- `!fokabot reconnect` - Połącz ponownie Fokabota jeśli nie jest na liście użytkowników online
- `!alert <wiadomość>` - Wyślij powiadomienie do każdego użytkownika na bancho  
- `!alertuser  <nazwa użytkownika> <wiadomość>` - Wyślij powiadomienie do danego użytkownika
