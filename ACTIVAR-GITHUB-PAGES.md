# 🚀 Cómo Activar GitHub Pages - innovationTECH

## ✅ Estado Actual

Tu código ya está en GitHub en: **https://github.com/innovationtech1/.com**

Ahora solo necesitas activar GitHub Pages para que tu sitio esté en línea.

---

## 📋 Pasos para Activar GitHub Pages

### Paso 1: Ir a Settings

1. Ve a tu repositorio: https://github.com/innovationtech1/.com
2. Click en la pestaña **"Settings"** (arriba, a la derecha)

### Paso 2: Ir a Pages

1. En el menú lateral izquierdo, busca **"Pages"**
2. Click en **"Pages"**

### Paso 3: Configurar el Despliegue

En la sección **"Build and deployment"**:

1. **Source:** Selecciona **"Deploy from a branch"**
2. **Branch:** 
   - Selecciona **"main"** (en el primer dropdown)
   - Selecciona **"/ (root)"** (en el segundo dropdown)
3. Click en el botón **"Save"**

### Paso 4: Esperar

- ⏳ GitHub Pages tardará **1-3 minutos** en construir tu sitio
- Verás un mensaje que dice "GitHub Pages is currently building your site"
- Refresca la página después de 2 minutos

### Paso 5: Ver tu Sitio en Vivo

Después de esperar, verás un mensaje verde:

```
✅ Your site is live at https://innovationtech1.github.io/.com/
```

**¡Tu sitio web estará en línea!** 🎉

---

## 🌐 URL de tu Sitio

Tu sitio estará disponible en:

**https://innovationtech1.github.io/.com/**

Puedes compartir este link con tus clientes.

---

## ✅ Verificación

Una vez que el sitio esté en línea, verifica:

1. **Abre el link:** https://innovationtech1.github.io/.com/
2. **Verifica que cargue correctamente**
3. **Prueba el carrusel del hero**
4. **Prueba agregar servicios al carrito**
5. **Prueba el cotizador**
6. **Verifica que el botón de WhatsApp funcione**
7. **Prueba en móvil** (abre desde tu teléfono)

---

## 🔧 Si Algo No Funciona

### Problema: "404 - There isn't a GitHub Pages site here"

**Solución:**
1. Espera 5 minutos más
2. Refresca la página
3. Verifica que hayas guardado la configuración en Settings → Pages

### Problema: El sitio se ve sin estilos (solo texto)

**Solución:**
1. Verifica que los archivos `style.css` y `script.js` estén en el repositorio
2. Ve a: https://github.com/innovationtech1/.com
3. Deberías ver estos archivos en la lista:
   - ✅ index.html
   - ✅ script.js
   - ✅ style.css
   - ✅ assets/ (carpeta)

### Problema: Las imágenes no cargan

**Solución:**
1. Verifica que la carpeta `assets/` esté en el repositorio
2. Debe contener:
   - logo.png
   - favicon.ico
   - favicon-16x16.png
   - favicon-32x32.png
   - apple-touch-icon.png

---

## 🔄 Actualizar el Sitio en el Futuro

Cuando hagas cambios en tu código local:

```bash
# 1. Guardar cambios en tus archivos

# 2. Agregar cambios
git add .

# 3. Hacer commit
git commit -m "Descripción de los cambios"

# 4. Subir a GitHub
git push origin main

# 5. Esperar 1-2 minutos
# GitHub Pages se actualizará automáticamente
```

---

## 📱 Compartir tu Sitio

Una vez que esté en línea, puedes:

1. **Compartir el link directo:**
   ```
   https://innovationtech1.github.io/.com/
   ```

2. **Crear un código QR:**
   - Ve a: https://www.qr-code-generator.com/
   - Pega tu URL
   - Descarga el QR
   - Úsalo en tarjetas de presentación

3. **Agregar a redes sociales:**
   - Facebook: Agrega el link en tu perfil
   - Instagram: Agrega en tu bio
   - LinkedIn: Agrega en tu perfil

---

## 🎯 Dominio Personalizado (Opcional)

Si quieres usar un dominio propio como `www.innovationtech.com`:

### Paso 1: Comprar Dominio
- Namecheap, GoDaddy, Google Domains, etc.
- Costo: ~$10-15 USD/año

### Paso 2: Configurar DNS
En tu proveedor de dominio, agrega estos registros:

```
Tipo: A
Host: @
Valor: 185.199.108.153

Tipo: A
Host: @
Valor: 185.199.109.153

Tipo: A
Host: @
Valor: 185.199.110.153

Tipo: A
Host: @
Valor: 185.199.111.153

Tipo: CNAME
Host: www
Valor: innovationtech1.github.io
```

### Paso 3: Configurar en GitHub
1. Ve a Settings → Pages
2. En "Custom domain", ingresa tu dominio
3. Click "Save"
4. Marca "Enforce HTTPS"
5. Espera 24-48 horas

---

## 📊 Agregar Google Analytics (Opcional)

Para ver estadísticas de visitantes:

1. Crea cuenta en: https://analytics.google.com
2. Obtén tu ID (ej: `G-XXXXXXXXXX`)
3. Edita `index.html`
4. Agrega antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

5. Guarda y sube los cambios:
```bash
git add index.html
git commit -m "Add Google Analytics"
git push origin main
```

---

## 📞 Soporte

¿Necesitas ayuda?

- 📧 Email: hectordehoyos053@gmail.com
- 💬 WhatsApp: +1 (210) 990-0532
- 📚 Docs GitHub Pages: https://docs.github.com/pages

---

## ✨ Checklist Final

Antes de compartir tu sitio, verifica:

- [ ] El sitio carga en https://innovationtech1.github.io/.com/
- [ ] El logo se ve correctamente
- [ ] El carrusel funciona
- [ ] Los contadores se animan
- [ ] El cotizador calcula precios
- [ ] Puedes agregar al carrito
- [ ] El carrito persiste al recargar
- [ ] El botón de WhatsApp abre correctamente
- [ ] El formulario de contacto funciona
- [ ] Se ve bien en móvil (prueba desde tu teléfono)
- [ ] Todos los links funcionan

---

## 🎉 ¡Felicidades!

Tu sitio web profesional está listo para recibir clientes.

**Próximos pasos:**
1. Activa GitHub Pages siguiendo esta guía
2. Comparte el link en redes sociales
3. Actualiza tu información de contacto si es necesario
4. Personaliza precios según tu mercado
5. Agrega testimonios reales de clientes

---

**URL del Repositorio:** https://github.com/innovationtech1/.com

**URL del Sitio (después de activar):** https://innovationtech1.github.io/.com/

---

*Última actualización: 2026-06-07*