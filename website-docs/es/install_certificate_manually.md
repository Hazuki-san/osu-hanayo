---
title: "Instalación manual del certificado"
reference_version: 96a9ef2265cef92f7a7014f3303b74b9
---
Si tienes problemas para conectarte a Ripple usando stable Estable/Beta/Cutting Edge o el switcher no instala el certificado correctamente, puedes instalarlo manualmente.

### Instrucciones
- Primero, descargue el certificado [haciendo clic aquí](https://zxq.co/ripple/ripple-server-switcher/raw/commit/d206bffb6fc896bc9c5121b30ba302e9e31c1161/RippleServerSwitcher/Resources/certificate.cer)
- A continuación, abra **certificate.cer**
- Haga clic en **Instalar certificado...**
- Haga clic en **Siguiente**
- Seleccione **Colocar todos los certificados en el siguiente almacén** (segunda opción), luego haga clic en **Buscar...**
- Aparecerá una nueva ventana, seleccione **Entidades de certificación raíz de confianza** y haga clic en **Aceptar**
- Haga clic en **Siguiente**
- Haga clic en **Finalizar**

### Cómo probar el certificado
Para asegurarse de que el certificado se ha instalado correctamente, asegúrese de que el switcher está en **On** y abra [esta página](https://c.ppy.sh).  

- Si ves **[una cosa de osu!bancho](http://y.zxq.co/ubfzty.png)**, el switcher está en off. **Ponlo en on e inténtalo de nuevo.**  
- Si ves **[alguna cosa de Ripple](http://y.zxq.co/zphobw.png)**, estás conectado con éxito a Ripple bajo https, **¡buen trabajo!**  
- Si obtienes **[algún error de certificado o de seguridad](http://y.zxq.co/reaueu.png)**, el certificado no se ha instalado correctamente. **Sigue las instrucciones a continuación.**  

### Si todo lo demás falla...
...puedes intentar eliminar todos los certificados de Ripple existentes e instalar el certificado nuevamente. Sigue estos pasos:

- Presione **Win+R**  
- Escriba `mmc certmgr.msc` en el cuadro de texto de Ejecutar y presiona **Entrar** para abrir el Administrador de certificados  
- Seleccione **Entidades de certificación raíz de confianza** a la izquierda  
- Seleccione **Certificados** a la derecha  
- Debería ver una entrada que diga **[Ripple](http://y.zxq.co/bbyxev.png)** y una o dos entradas que digan **\*.ppy.sh** en la lista. Selecciónelos, **clic derecho** y haga clic en **Borrar**  
- Selecciona todas las opciones positivas  
- Abra el switcher, haga clic en **Install certificate** y, luego, en **Sí**  
- Intente conectarse al [servidor Bancho de Ripple bajo https](https://c.ppy.sh/) y _debería_ funcionar  
