# 🚀 innovationTECH - Marketing Digital Agency Website

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://tu-usuario.github.io/innovationTECH)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> Sitio web moderno y funcional para agencia de marketing digital con cotizador interactivo, carrito de compras y sistema de contratación online.

![innovationTECH Preview](assets/logo.png)

## 📋 Descripción

**innovationTECH** es una aplicación web de página única (SPA) diseñada para una agencia de marketing digital en San Antonio, TX. Permite a los clientes:

- ✅ Explorar 6 servicios diferentes (Marketing Digital, Contenido, Video, Logo, Web, Pack Emprendedor)
- ✅ Calcular cotizaciones personalizadas con extras opcionales
- ✅ Agregar servicios a un carrito persistente
- ✅ Contratar directamente vía WhatsApp o correo electrónico
- ✅ Experiencia 100% responsive y accesible

## 🌟 Características Principales

### 🎨 Diseño Moderno
- **Glassmorphism** - Efectos de vidrio translúcido
- **Gradientes animados** - Texto con degradados cyan-purple
- **Blobs orgánicos** - Formas animadas en el fondo
- **Responsive Design** - Optimizado para móvil, tablet y desktop

### 🛒 Sistema de Carrito
- Persistencia con LocalStorage
- Agregar/eliminar servicios
- Cálculo automático de totales
- FAB (Floating Action Button) con badge

### 💰 Cotizador Interactivo
- Selección de servicio y nivel (Básico/Pro/Premium)
- Extras opcionales (Urgente, Idioma adicional, Revisiones)
- Cálculo en tiempo real
- Vista previa de entregables

### 📱 Contratación Directa
- Envío por WhatsApp con mensaje pre-formateado
- Envío por correo electrónico
- Validación de formularios en tiempo real
- Confirmación visual de envío

### ♿ Accesibilidad
- ARIA labels en todos los controles
- Navegación por teclado
- Contraste adecuado de colores
- Semántica HTML5

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS
- **JavaScript Vanilla** - Sin frameworks, código puro
- **LocalStorage API** - Persistencia de datos
- **WhatsApp API** - Integración de mensajería
- **GitHub Pages** - Hosting gratuito

## 📦 Estructura del Proyecto

```
innovationTECH/
├── index.html          # Página principal (588 líneas)
├── script.js           # Lógica de negocio (947 líneas)
├── style.css           # Estilos CSS (2436 líneas)
├── assets/             # Recursos estáticos
│   ├── logo.png
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── apple-touch-icon.png
├── .gitignore          # Archivos ignorados por Git
└── README.md           # Este archivo
```

## 🚀 Despliegue en GitHub Pages

### Opción 1: Usando la Interfaz de GitHub (Recomendado)

1. **Crear repositorio en GitHub:**
   - Ve a [github.com](https://github.com) e inicia sesión
   - Click en el botón "+" → "New repository"
   - Nombre: `innovationTECH`
   - Descripción: "Marketing Digital Agency Website"
   - Público o Privado (tu elección)
   - NO inicialices con README (ya lo tenemos)
   - Click "Create repository"

2. **Subir archivos:**
   - En la página del repositorio, click "uploading an existing file"
   - Arrastra todos los archivos del proyecto (excepto .cursor/ y .vscode/)
   - Escribe un mensaje de commit: "Initial commit - innovationTECH website"
   - Click "Commit changes"

3. **Activar GitHub Pages:**
   - Ve a Settings → Pages (en el menú lateral)
   - En "Source", selecciona "Deploy from a branch"
   - En "Branch", selecciona "main" y carpeta "/ (root)"
   - Click "Save"
   - Espera 1-2 minutos

4. **Acceder al sitio:**
   - Tu sitio estará disponible en: `https://tu-usuario.github.io/innovationTECH`
   - GitHub te mostrará la URL en la sección Pages

### Opción 2: Usando Git desde la Terminal

```bash
# 1. Inicializar repositorio local
cd c:/Users/j/Desktop/innovationTECH
git init

# 2. Agregar archivos
git add .

# 3. Hacer commit inicial
git commit -m "Initial commit - innovationTECH website"

# 4. Conectar con GitHub (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/innovationTECH.git

# 5. Subir a GitHub
git branch -M main
git push -u origin main

# 6. Activar GitHub Pages desde Settings → Pages
```

## ⚙️ Configuración

### Personalizar Información de Contacto

Edita `script.js` (líneas 6-8):

```javascript
const WHATSAPP_NUMBER = '12109900532';  // Tu número de WhatsApp
const SALES_EMAIL = 'hectordehoyos053@gmail.com';  // Tu email
```

### Modificar Servicios y Precios

Edita el objeto `SERVICES` en `script.js` (líneas 28-107):

```javascript
const SERVICES = {
    marketing: {
        id: 'marketing',
        name: 'Marketing Digital',
        prices: { basic: 199, pro: 399, premium: 699 },
        // ... más configuración
    },
    // ... otros servicios
};
```

### Cambiar Colores del Tema

Edita las variables CSS en `style.css`:

```css
:root {
    --primary: #00d4ff;
    --secondary: #a855f7;
    --accent: #f59e0b;
    /* ... más variables */
}
```

## 📱 Uso de la Aplicación

### Para Clientes

1. **Explorar servicios** - Navega por el catálogo de servicios
2. **Usar cotizador** - Configura tu paquete personalizado
3. **Agregar al carrito** - Selecciona los servicios que necesitas
4. **Contratar** - Completa el formulario y envía por WhatsApp o email

### Para Administradores

- **Actualizar precios** - Modifica el objeto `SERVICES` en `script.js`
- **Agregar servicios** - Añade nuevos servicios al objeto `SERVICES`
- **Cambiar testimonios** - Edita la sección de testimonios en `index.html`
- **Modificar textos** - Actualiza el contenido directamente en `index.html`

## 🔧 Mantenimiento

### Actualizar el Sitio

```bash
# 1. Hacer cambios en los archivos
# 2. Guardar cambios

# 3. Commit y push
git add .
git commit -m "Descripción de los cambios"
git push origin main

# 4. GitHub Pages se actualizará automáticamente en 1-2 minutos
```

### Verificar Errores

- Abre la consola del navegador (F12)
- Revisa la pestaña "Console" para errores de JavaScript
- Verifica la pestaña "Network" para problemas de carga

## 📊 Características Técnicas

### Rendimiento
- ⚡ Carga rápida sin dependencias externas
- 📦 Tamaño total: ~150KB (sin imágenes)
- 🎯 Optimizado para Core Web Vitals

### Compatibilidad
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Móviles iOS y Android

### SEO
- 📝 Meta tags completos
- 🔍 Open Graph para redes sociales
- 🏷️ Estructura semántica HTML5
- 📱 Mobile-friendly

## 🐛 Solución de Problemas

### El sitio no se muestra en GitHub Pages

1. Verifica que el repositorio sea público o tengas GitHub Pro
2. Confirma que GitHub Pages esté activado en Settings → Pages
3. Espera 2-5 minutos después de activar Pages
4. Verifica que `index.html` esté en la raíz del repositorio

### El carrito no guarda los items

- Verifica que el navegador permita LocalStorage
- Revisa la consola del navegador para errores
- Prueba en modo incógnito para descartar extensiones

### WhatsApp no abre correctamente

- Verifica que el número en `WHATSAPP_NUMBER` incluya código de país
- Formato correcto: `12109900532` (sin + ni espacios)
- Prueba el link manualmente: `https://wa.me/12109900532`

### Imágenes no cargan

- Verifica que las rutas sean relativas: `assets/logo.png`
- Confirma que los archivos estén en la carpeta `assets/`
- Revisa que los nombres coincidan (case-sensitive en Linux)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para proyectos personales o comerciales.

## 👨‍💻 Autor

**innovationTECH**
- 📍 San Antonio, TX 78245
- 📧 hectordehoyos053@gmail.com
- 📱 WhatsApp: (210) 990-0532

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Changelog

### v1.0.0 (2026-06-07)
- ✨ Lanzamiento inicial
- 🎨 Diseño glassmorphism completo
- 🛒 Sistema de carrito funcional
- 💰 Cotizador interactivo
- 📱 Integración WhatsApp y Email
- ♿ Accesibilidad completa
- 📱 100% responsive

## 🔮 Roadmap

- [ ] Panel de administración
- [ ] Integración con pasarelas de pago
- [ ] Sistema de citas online
- [ ] Chat en vivo
- [ ] Blog integrado
- [ ] Multi-idioma (ES/EN)
- [ ] PWA (Progressive Web App)
- [ ] Analytics dashboard

## 📞 Soporte

¿Necesitas ayuda? Contáctanos:

- 📧 Email: hectordehoyos053@gmail.com
- 💬 WhatsApp: [+1 (210) 990-0532](https://wa.me/12109900532)
- 🌐 Sitio web: [innovationTECH](https://tu-usuario.github.io/innovationTECH)

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!

**Hecho con ❤️ por innovationTECH**