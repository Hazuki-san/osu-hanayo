---
title: "Cómo conectarse a Ripple (Linux)"
reference_version: 2a77df23ecc8f9be75819e98afadcef1
---
Esta guía es sólo para conectar osu! a Ripple, y no para configurar el juego en sí. Puedes seguir [esta guía](https://gist.github.com/Francesco149/a2f796683a4e5195458f4bb171d88eb0) para configurar el cliente.

### Modificar el archivo de hosts
Para esto, necesitarás modificar tu archivo *hosts*. Para ello, ejecute `nano /etc/hosts` como root/con sudo.

Cuando lo tengas abierto, pega lo siguiente en la parte inferior:

```
{ipmain} osu.ppy.sh c.ppy.sh c1.ppy.sh c2.ppy.sh c3.ppy.sh c4.ppy.sh c5.ppy.sh c6.ppy.sh ce.ppy.sh a.ppy.sh s.ppy.sh i.ppy.sh
{ipmirror} bm6.ppy.sh
```
**CTRL+X** y luego **Enter** para guardar el archivo.

### Instalación del certificado
Descarga el certificado haciendo clic [*aquí*](https://zxq.co/ripple/ripple-server-switcher/raw/commit/d206bffb6fc896bc9c5121b30ba302e9e31c1161/RippleServerSwitcher/Resources/certificate.cer)

Abra la configuración de Internet Explorer ejecutando `wine control`.

Haga doble clic en el icono *Configuración de Internet*, vaya a la ficha *Contenido*, a continuación, haga clic en el botón *Certificados... *.

Haga clic en *Importar*, luego en *Siguiente*.

Haga clic en *Buscar...* y seleccione el certificado de Ripple.

Haga clic en *Siguiente*.

Seleccione *Colocar todos los certificados en el siguiente almacén*, y haga clic en *Buscar*.

Seleccione **Entidades de certificación raíz de confianza**, y haga clic en *Aceptar*.

Haga clic en *Siguiente*, *Finalizar*.

Debería recibir un mensaje que diga **La importación se ha realizado correctamente**.


Una vez hecho esto, puedes iniciar el cliente e iniciar sesión con tus credenciales de Ripple.