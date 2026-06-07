/**
 * innovationTECH - Marketing Digital
 * Catálogo, cotizador, carrito y contratación online
 */

const WHATSAPP_NUMBER = '12109900532';
const SALES_EMAIL = 'hectordehoyos053@gmail.com';
const CART_STORAGE_KEY = 'innovationtech_cart';

const TIER_LABELS = {
    basic: 'Básico',
    pro: 'Profesional',
    premium: 'Premium'
};

const TIER_HINTS = {
    basic: 'Ideal para emprendedores que inician su presencia digital.',
    pro: 'Para marcas en crecimiento que necesitan más entregables.',
    premium: 'Solución completa para resultados profesionales máximos.'
};

const EXTRAS = {
    rush: { label: 'Entrega urgente', percent: 15 },
    lang: { label: 'Idioma adicional', fixed: 50 },
    revisions: { label: 'Revisiones extra', fixed: 30 }
};

const SERVICES = {
    marketing: {
        id: 'marketing',
        name: 'Marketing Digital',
        shortDesc: 'Estrategia y gestión de redes sociales con publicaciones planificadas y reportes mensuales.',
        icon: 'megaphone',
        unit: 'mes',
        prices: { basic: 199, pro: 399, premium: 699 },
        deliverables: {
            basic: ['Calendario de 8 publicaciones/mes', 'Copy para redes', '1 red social', 'Reporte mensual básico'],
            pro: ['15 publicaciones/mes', '2 redes sociales', 'Stories y carruseles', 'Análisis de métricas'],
            premium: ['Estrategia completa multi-red', '25+ publicaciones', 'Campañas pagadas (setup)', 'Reuniones quincenales']
        }
    },
    content: {
        id: 'content',
        name: 'Creación de Contenido',
        shortDesc: 'Posts, copy y piezas gráficas listas para publicar en tus redes y blog.',
        icon: 'content',
        unit: 'pack',
        prices: { basic: 149, pro: 299, premium: 549 },
        deliverables: {
            basic: ['6 posts con diseño', 'Textos optimizados', '1 ronda de revisión'],
            pro: ['12 posts + 4 stories', 'Hashtags y calendario', '2 rondas de revisión'],
            premium: ['20 posts + reels scripts', 'Blog article (800 palabras)', 'Brand voice guide']
        }
    },
    video: {
        id: 'video',
        name: 'Edición de Video',
        shortDesc: 'Reels, TikToks y videos corporativos editados con música, subtítulos y efectos.',
        icon: 'video',
        unit: 'pieza',
        prices: { basic: 79, pro: 179, premium: 349 },
        deliverables: {
            basic: ['Hasta 60 seg', 'Cortes y música', '1 revisión', 'Formato vertical'],
            pro: ['Hasta 3 min', 'Subtítulos y motion graphics', '2 revisiones', '2 formatos'],
            premium: ['Producción avanzada', 'Color grading', 'Motion graphics custom', '3 revisiones']
        }
    },
    logo: {
        id: 'logo',
        name: 'Logotipo e Identidad',
        shortDesc: 'Diseño de logo profesional y elementos de marca para tu negocio.',
        icon: 'logo',
        unit: 'proyecto',
        prices: { basic: 99, pro: 249, premium: 499 },
        deliverables: {
            basic: ['2 propuestas de logo', 'Archivos PNG y JPG', '1 revisión'],
            pro: ['3 propuestas + paleta de colores', 'Tipografía sugerida', 'Mockups básicos'],
            premium: ['Manual de marca PDF', 'Variantes de logo', 'Iconografía y social kit']
        }
    },
    web: {
        id: 'web',
        name: 'Página Web',
        shortDesc: 'Sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.',
        icon: 'web',
        unit: 'proyecto',
        prices: { basic: 399, pro: 899, premium: 1899 },
        deliverables: {
            basic: ['Landing page (1 página)', 'Diseño responsivo', 'Formulario de contacto', 'SEO básico'],
            pro: ['Sitio hasta 5 secciones', 'Blog integrado', 'Google Analytics', '2 meses soporte'],
            premium: ['Sitio completo o tienda', 'CMS editable', 'Optimización avanzada', '3 meses soporte']
        }
    },
    bundle: {
        id: 'bundle',
        name: 'Pack Emprendedor',
        shortDesc: 'Logo + landing page + 4 posts. Todo lo esencial para lanzar tu marca online.',
        icon: 'bundle',
        unit: 'pack',
        prices: { basic: 449, pro: null, premium: null },
        deliverables: {
            basic: ['Logo profesional', 'Landing page', '4 posts para redes', 'Entrega en 2 semanas'],
            pro: null,
            premium: null
        }
    }
};

const SERVICE_ICONS = {
    megaphone: '<path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V17.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>',
    content: '<path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>',
    video: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>',
    logo: '<path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>',
    web: '<path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>',
    bundle: '<path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>'
};

// --- Cart state ---
let cart = [];

function loadCart() {
    try {
        const saved = localStorage.getItem(CART_STORAGE_KEY);
        cart = saved ? JSON.parse(saved) : [];
    } catch {
        cart = [];
    }
}

function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function formatUSD(amount) {
    return `$${Math.round(amount).toLocaleString('en-US')} USD`;
}

function getServicePrice(serviceId, tier) {
    const svc = SERVICES[serviceId];
    if (!svc || !svc.prices[tier]) return null;
    return svc.prices[tier];
}

function getMinPrice(serviceId) {
    const svc = SERVICES[serviceId];
    const prices = Object.values(svc.prices).filter(p => p !== null);
    return Math.min(...prices);
}

function calcLineTotal(basePrice, extras, qty = 1) {
    let total = basePrice * qty;
    if (extras.rush) total *= 1 + EXTRAS.rush.percent / 100;
    if (extras.lang) total += EXTRAS.lang.fixed;
    if (extras.revisions) total += EXTRAS.revisions.fixed;
    return Math.round(total);
}

function buildCartItemId(serviceId, tier, extras) {
    return `${serviceId}-${tier}-${extras.rush ? 1 : 0}-${extras.lang ? 1 : 0}-${extras.revisions ? 1 : 0}`;
}

function addToCart(item) {
    const existing = cart.find(c => c.cartId === item.cartId);
    if (existing && item.serviceId === 'video') {
        existing.qty += item.qty || 1;
        existing.total = calcLineTotal(existing.basePrice, existing.extras, existing.qty);
    } else if (existing) {
        return false;
    } else {
        cart.push(item);
    }
    saveCart();
    renderCart();
    updateCartFab();
    return true;
}

function removeFromCart(cartId) {
    cart = cart.filter(c => c.cartId !== cartId);
    saveCart();
    renderCart();
    updateCartFab();
}

function clearCart() {
    cart = [];
    saveCart();
    renderCart();
    updateCartFab();
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.total, 0);
}

// --- Quote state ---
let quoteState = {
    serviceId: 'marketing',
    tier: 'basic',
    extras: { rush: false, lang: false, revisions: false },
    videoQty: 1
};

function getQuoteBase() {
    return getServicePrice(quoteState.serviceId, quoteState.tier);
}

function getQuoteTotal() {
    const base = getQuoteBase();
    if (base === null) return null;
    const qty = quoteState.serviceId === 'video' ? quoteState.videoQty : 1;
    return calcLineTotal(base, quoteState.extras, qty);
}

function buildQuoteCartItem() {
    const svc = SERVICES[quoteState.serviceId];
    const base = getQuoteBase();
    if (base === null) return null;
    const qty = quoteState.serviceId === 'video' ? quoteState.videoQty : 1;
    const extras = { ...quoteState.extras };
    const cartId = buildCartItemId(quoteState.serviceId, quoteState.tier, extras) + (qty > 1 ? `-q${qty}` : '');
    return {
        cartId,
        serviceId: quoteState.serviceId,
        serviceName: svc.name,
        tier: quoteState.tier,
        tierLabel: TIER_LABELS[quoteState.tier],
        basePrice: base,
        extras,
        qty,
        total: calcLineTotal(base, extras, qty),
        unit: svc.unit
    };
}

// --- DOM rendering ---
function renderServiceCards() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    grid.innerHTML = Object.values(SERVICES).map(svc => {
        const fromPrice = getMinPrice(svc.id);
        const iconPath = SERVICE_ICONS[svc.icon] || SERVICE_ICONS.content;
        return `
            <div class="service-card" id="service-${svc.id}">
                <div class="service-icon">
                    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">${iconPath}</svg>
                </div>
                <span class="price-badge">Desde ${formatUSD(fromPrice)}</span>
                <h3>${svc.name}</h3>
                <p>${svc.shortDesc}</p>
                <button type="button" class="btn btn-secondary btn-add-service" data-service="${svc.id}" data-tier="basic">
                    Agregar al pedido
                </button>
            </div>
        `;
    }).join('');

    grid.querySelectorAll('.btn-add-service').forEach(btn => {
        btn.addEventListener('click', () => {
            const serviceId = btn.getAttribute('data-service');
            const tier = btn.getAttribute('data-tier');
            const svc = SERVICES[serviceId];
            const base = getServicePrice(serviceId, tier);
            const extras = { rush: false, lang: false, revisions: false };
            const item = {
                cartId: buildCartItemId(serviceId, tier, extras),
                serviceId,
                serviceName: svc.name,
                tier,
                tierLabel: TIER_LABELS[tier],
                basePrice: base,
                extras,
                qty: 1,
                total: base,
                unit: svc.unit
            };
            if (addToCart(item)) {
                btn.textContent = '¡Agregado!';
                setTimeout(() => { btn.textContent = 'Agregar al pedido'; }, 1500);
            }
        });
    });
}

function renderPricingTable() {
    const tbody = document.getElementById('pricing-table-body');
    if (!tbody) return;

    tbody.innerHTML = Object.values(SERVICES).map(svc => {
        const fmt = (tier) => {
            const p = svc.prices[tier];
            if (p === null) return '—';
            const suffix = svc.unit === 'mes' ? '/mes' : '';
            return `$${p}${suffix}`;
        };
        return `
            <tr>
                <td><strong>${svc.name}</strong></td>
                <td>${fmt('basic')}</td>
                <td>${fmt('pro')}</td>
                <td>${fmt('premium')}</td>
            </tr>
        `;
    }).join('');
}

function renderServiceChoices() {
    const container = document.getElementById('service-choices');
    if (!container) return;

    container.innerHTML = Object.values(SERVICES).map(svc => `
        <button type="button" class="choice-btn ${svc.id === quoteState.serviceId ? 'active' : ''}" data-service="${svc.id}">
            ${svc.name}
        </button>
    `).join('');

    container.querySelectorAll('.choice-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            quoteState.serviceId = btn.getAttribute('data-service');
            const svc = SERVICES[quoteState.serviceId];
            if (svc.prices[quoteState.tier] === null) {
                quoteState.tier = 'basic';
            }
            container.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateTierButtons();
            updateQuoteUI();
        });
    });
}

function updateTierButtons() {
    const tierContainer = document.getElementById('tier-choices');
    if (!tierContainer) return;

    const svc = SERVICES[quoteState.serviceId];
    tierContainer.querySelectorAll('.choice-btn').forEach(btn => {
        const tier = btn.getAttribute('data-tier');
        const available = svc.prices[tier] !== null;
        btn.disabled = !available;
        btn.style.opacity = available ? '1' : '0.4';
        btn.classList.toggle('active', tier === quoteState.tier && available);
    });
}

function updateQuoteUI() {
    const svc = SERVICES[quoteState.serviceId];
    const deliverables = svc.deliverables[quoteState.tier];
    const total = getQuoteTotal();

    document.getElementById('quote-title').textContent =
        `${svc.name} — ${TIER_LABELS[quoteState.tier]}`;

    const list = document.getElementById('quote-deliverables');
    if (deliverables) {
        list.innerHTML = deliverables.map(d => `<li>${d}</li>`).join('');
    } else {
        list.innerHTML = '<li>Contactar para cotización personalizada</li>';
    }

    document.getElementById('quote-total').textContent =
        total !== null ? formatUSD(total) : 'A cotizar';

    document.getElementById('tier-hint').textContent = TIER_HINTS[quoteState.tier];

    const videoQtyGroup = document.getElementById('video-qty-group');
    if (videoQtyGroup) {
        videoQtyGroup.style.display = quoteState.serviceId === 'video' ? 'block' : 'none';
    }

    const outputPane = document.getElementById('config-output-pane');
    if (outputPane) {
        outputPane.style.opacity = '0.5';
        setTimeout(() => {
            outputPane.style.transition = 'opacity var(--transition-fast)';
            outputPane.style.opacity = '1';
        }, 50);
    }
}

function renderCart() {
    const emptyEl = document.getElementById('cart-empty');
    const itemsEl = document.getElementById('cart-items');
    const summaryEl = document.getElementById('cart-summary');

    if (!itemsEl) return;

    if (cart.length === 0) {
        emptyEl.style.display = 'block';
        itemsEl.innerHTML = '';
        summaryEl.style.display = 'none';
        return;
    }

    emptyEl.style.display = 'none';
    summaryEl.style.display = 'block';

    itemsEl.innerHTML = cart.map(item => {
        const extrasLabels = [];
        if (item.extras.rush) extrasLabels.push('Urgente');
        if (item.extras.lang) extrasLabels.push('Idioma+');
        if (item.extras.revisions) extrasLabels.push('Rev.+');
        const extrasStr = extrasLabels.length ? ` (${extrasLabels.join(', ')})` : '';
        const qtyStr = item.qty > 1 ? ` × ${item.qty}` : '';

        return `
            <li class="cart-item" data-cart-id="${item.cartId}">
                <div class="cart-item-info">
                    <strong>${item.serviceName}</strong>
                    <span>${item.tierLabel}${qtyStr}${extrasStr}</span>
                </div>
                <div class="cart-item-actions">
                    <span class="cart-item-price">${formatUSD(item.total)}</span>
                    <button type="button" class="cart-remove-btn" data-remove="${item.cartId}" aria-label="Eliminar">×</button>
                </div>
            </li>
        `;
    }).join('');

    document.getElementById('cart-subtotal').textContent = formatUSD(getCartTotal());
    document.getElementById('cart-total').textContent = formatUSD(getCartTotal());

    itemsEl.querySelectorAll('.cart-remove-btn').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(btn.getAttribute('data-remove')));
    });
}

function updateCartFab() {
    const fab = document.getElementById('cart-fab');
    const badge = document.getElementById('cart-fab-badge');
    const label = document.getElementById('cart-fab-label');
    const count = cart.length;
    const total = getCartTotal();

    if (count > 0) {
        badge.hidden = false;
        badge.textContent = count;
        label.textContent = total > 0 ? `Ver pedido (${formatUSD(total)})` : 'Ver pedido';
        fab.classList.add('cart-fab-active');
    } else {
        badge.hidden = true;
        label.textContent = 'Ver pedido';
        fab.classList.remove('cart-fab-active');
    }
}

function buildOrderMessage(formData) {
    let msg = '*Pedido innovationTECH*\n\n';
    msg += `*Cliente:* ${formData.name}\n`;
    msg += `*Email:* ${formData.email}\n`;
    msg += `*Tel/WhatsApp:* ${formData.phone}\n`;
    if (formData.company) msg += `*Empresa:* ${formData.company}\n`;
    msg += `*Entrega deseada:* ${formData.date}\n\n`;
    msg += '*Resumen de cotización:*\n\n';

    if (cart.length === 0) {
        msg += '- (Sin items en carrito — consulta general)\n';
    } else {
        cart.forEach((item, i) => {
            msg += `*${i + 1}. ${item.serviceName} — ${item.tierLabel}*\n`;
            if (item.qty > 1) msg += `   Cantidad: x${item.qty}\n`;
            
            // Añadir deliverables del servicio
            const svc = SERVICES[item.serviceId];
            if (svc && svc.deliverables && svc.deliverables[item.tier]) {
                msg += `   📋 Incluye:\n`;
                svc.deliverables[item.tier].forEach(deliverable => {
                    msg += `   • ${deliverable}\n`;
                });
            }
            
            // Añadir extras si los hay
            const extrasLabels = [];
            if (item.extras.rush) extrasLabels.push('⚡ Entrega urgente');
            if (item.extras.lang) extrasLabels.push('🌐 Idioma adicional');
            if (item.extras.revisions) extrasLabels.push('✏️ Revisiones extra');
            if (extrasLabels.length > 0) {
                msg += `   🎁 Extras: ${extrasLabels.join(', ')}\n`;
            }
            
            msg += `   💰 Precio: ${formatUSD(item.total)}\n\n`;
        });
        msg += `*TOTAL: ${formatUSD(getCartTotal())}*\n`;
    }

    msg += `\n*Brief del proyecto:*\n${formData.brief}`;
    return msg;
}

function openWhatsApp(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
}

function openMailto(formData, message) {
    const subject = encodeURIComponent(`Pedido innovationTECH - ${formData.name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${SALES_EMAIL}?subject=${subject}&body=${body}`;
}

function prefillContactSubject() {
    const subjectEl = document.getElementById('contact-subject');
    if (!subjectEl || cart.length === 0) return;
    const total = formatUSD(getCartTotal());
    subjectEl.value = `Pedido: ${cart.length} servicio(s) — ${total}`;
}

// --- Init cotizador ---
function initCotizador() {
    renderServiceChoices();
    updateTierButtons();
    updateQuoteUI();

    document.getElementById('tier-choices').querySelectorAll('.choice-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.disabled) return;
            quoteState.tier = btn.getAttribute('data-tier');
            document.getElementById('tier-choices').querySelectorAll('.choice-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateQuoteUI();
        });
    });

    document.querySelectorAll('#extras-group input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', () => {
            const key = cb.getAttribute('data-extra');
            quoteState.extras[key] = cb.checked;
            updateQuoteUI();
        });
    });

    const videoQty = document.getElementById('video-qty');
    if (videoQty) {
        videoQty.addEventListener('input', () => {
            quoteState.videoQty = Math.max(1, parseInt(videoQty.value, 10) || 1);
            updateQuoteUI();
        });
    }

    document.getElementById('btn-quote-add-cart').addEventListener('click', () => {
        const item = buildQuoteCartItem();
        if (!item) return;
        if (addToCart(item)) {
            const btn = document.getElementById('btn-quote-add-cart');
            btn.textContent = '¡Agregado al carrito!';
            setTimeout(() => { btn.textContent = 'Agregar al carrito'; }, 2000);
        } else {
            const btn = document.getElementById('btn-quote-add-cart');
            btn.textContent = 'Ya está en el carrito';
            setTimeout(() => { btn.textContent = 'Agregar al carrito'; }, 2000);
        }
    });

    document.getElementById('btn-quote-order').addEventListener('click', (e) => {
        const item = buildQuoteCartItem();
        if (item && !cart.find(c => c.cartId === item.cartId)) {
            addToCart(item);
        }
    });
}

// --- Order form ---
function initOrderForm() {
    const orderForm = document.getElementById('order-form');
    const orderOverlay = document.getElementById('order-success-overlay');

    const orderFields = [
        { id: 'order-name', errorId: 'error-order-name', check: v => v.trim().length > 2 },
        { id: 'order-email', errorId: 'error-order-email', check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
        { id: 'order-phone', errorId: 'error-order-phone', check: v => v.trim().length >= 8 },
        { id: 'order-date', errorId: 'error-order-date', check: v => v.trim().length > 0 },
        { id: 'order-brief', errorId: 'error-order-brief', check: v => v.trim().length >= 20 }
    ];

    orderFields.forEach(field => {
        const inputEl = document.getElementById(field.id);
        const errorEl = document.getElementById(field.errorId);
        inputEl.addEventListener('input', () => {
            if (field.check(inputEl.value)) {
                inputEl.classList.remove('invalid');
                errorEl.style.display = 'none';
            }
        });
    });

    const validateOrder = () => {
        let valid = true;
        orderFields.forEach(field => {
            const inputEl = document.getElementById(field.id);
            const errorEl = document.getElementById(field.errorId);
            if (!field.check(inputEl.value)) {
                inputEl.classList.add('invalid');
                errorEl.style.display = 'block';
                valid = false;
            } else {
                inputEl.classList.remove('invalid');
                errorEl.style.display = 'none';
            }
        });
        return valid;
    };

    const getFormData = () => ({
        name: document.getElementById('order-name').value.trim(),
        email: document.getElementById('order-email').value.trim(),
        phone: document.getElementById('order-phone').value.trim(),
        company: document.getElementById('order-company').value.trim(),
        date: document.getElementById('order-date').value,
        brief: document.getElementById('order-brief').value.trim()
    });

    const submitOrder = (viaEmail = false) => {
        if (!validateOrder()) return;
        if (cart.length === 0) {
            alert('Agrega al menos un servicio al carrito antes de enviar el pedido, o usa el formulario de contacto para consultas generales.');
            return;
        }

        const formData = getFormData();
        const message = buildOrderMessage(formData);

        localStorage.setItem('innovationtech_last_order', JSON.stringify({ formData, cart, date: new Date().toISOString() }));

        const submitBtn = document.getElementById('btn-submit-order');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        setTimeout(() => {
            if (viaEmail) {
                openMailto(formData, message);
            } else {
                openWhatsApp(message);
            }

            orderOverlay.style.display = 'flex';
            orderOverlay.setAttribute('aria-hidden', 'false');
            submitBtn.disabled = false;
            submitBtn.innerHTML = `Enviar pedido por WhatsApp <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`;

            clearCart();
            orderForm.reset();
            prefillContactSubject();
        }, 800);
    };

    orderForm.addEventListener('submit', e => {
        e.preventDefault();
        submitOrder(false);
    });

    document.getElementById('btn-submit-order-email').addEventListener('click', () => submitOrder(true));

    document.getElementById('btn-order-success-close').addEventListener('click', () => {
        orderOverlay.style.display = 'none';
        orderOverlay.setAttribute('aria-hidden', 'true');
    });

    document.getElementById('btn-clear-cart').addEventListener('click', clearCart);

    // Preview functionality
    const previewModal = document.getElementById('preview-modal');
    const btnPreview = document.getElementById('btn-preview-order');
    const btnClosePreview = document.getElementById('btn-close-preview');
    const btnEditPreview = document.getElementById('btn-edit-preview');
    const btnConfirmSend = document.getElementById('btn-confirm-send');

    btnPreview.addEventListener('click', () => {
        if (!validateOrder()) return;
        if (cart.length === 0) {
            alert('Agrega al menos un servicio al carrito antes de ver la vista previa.');
            return;
        }
        showPreview();
    });

    btnClosePreview.addEventListener('click', closePreview);
    btnEditPreview.addEventListener('click', closePreview);

    btnConfirmSend.addEventListener('click', () => {
        closePreview();
        submitOrder(false);
    });

    function showPreview() {
        const formData = getFormData();
        const previewContent = document.getElementById('preview-content');
        
        let html = '';

        // Información del cliente
        html += `
            <div class="preview-section">
                <div class="preview-section-title">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    Información del Cliente
                </div>
                <div class="preview-section-content">
                    <div class="preview-info-row">
                        <span class="preview-info-label">Nombre:</span>
                        <span class="preview-info-value">${formData.name}</span>
                    </div>
                    <div class="preview-info-row">
                        <span class="preview-info-label">Email:</span>
                        <span class="preview-info-value">${formData.email}</span>
                    </div>
                    <div class="preview-info-row">
                        <span class="preview-info-label">WhatsApp:</span>
                        <span class="preview-info-value">${formData.phone}</span>
                    </div>
                    ${formData.company ? `
                    <div class="preview-info-row">
                        <span class="preview-info-label">Empresa:</span>
                        <span class="preview-info-value">${formData.company}</span>
                    </div>
                    ` : ''}
                    <div class="preview-info-row">
                        <span class="preview-info-label">Fecha de entrega:</span>
                        <span class="preview-info-value">${formData.date}</span>
                    </div>
                </div>
            </div>
        `;

        // Servicios contratados
        html += `
            <div class="preview-section">
                <div class="preview-section-title">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                    </svg>
                    Servicios Contratados
                </div>
                <div class="preview-section-content">
        `;

        cart.forEach((item, i) => {
            const svc = SERVICES[item.serviceId];
            const deliverables = svc && svc.deliverables && svc.deliverables[item.tier] ? svc.deliverables[item.tier] : [];
            
            html += `
                <div class="preview-service-item">
                    <div class="preview-service-header">
                        <div>
                            <h4 class="preview-service-title">${i + 1}. ${item.serviceName}</h4>
                            <div class="preview-service-tier">${item.tierLabel}${item.qty > 1 ? ` × ${item.qty}` : ''}</div>
                        </div>
                        <div class="preview-service-price">${formatUSD(item.total)}</div>
                    </div>
            `;

            if (deliverables.length > 0) {
                html += `
                    <div class="preview-deliverables">
                        <div class="preview-deliverables-title">
                            📋 Incluye:
                        </div>
                        <ul class="preview-deliverables-list">
                            ${deliverables.map(d => `<li>${d}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }

            const extrasLabels = [];
            if (item.extras.rush) extrasLabels.push('⚡ Entrega urgente');
            if (item.extras.lang) extrasLabels.push('🌐 Idioma adicional');
            if (item.extras.revisions) extrasLabels.push('✏️ Revisiones extra');

            if (extrasLabels.length > 0) {
                html += `
                    <div class="preview-extras">
                        <div class="preview-extras-title">Extras:</div>
                        <div class="preview-extras-list">
                            ${extrasLabels.map(label => `<span class="preview-extra-badge">${label}</span>`).join('')}
                        </div>
                    </div>
                `;
            }

            html += `</div>`;
        });

        html += `
                    <div class="preview-total">
                        <span class="preview-total-label">Total del Proyecto:</span>
                        <span class="preview-total-amount">${formatUSD(getCartTotal())}</span>
                    </div>
                </div>
            </div>
        `;

        // Brief del proyecto
        html += `
            <div class="preview-section">
                <div class="preview-section-title">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    Brief del Proyecto
                </div>
                <div class="preview-brief">${formData.brief}</div>
            </div>
        `;

        previewContent.innerHTML = html;
        previewModal.style.display = 'flex';
        previewModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closePreview() {
        previewModal.style.display = 'none';
        previewModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Cerrar modal al hacer clic fuera
    previewModal.addEventListener('click', (e) => {
        if (e.target === previewModal) {
            closePreview();
        }
    });

    const dateInput = document.getElementById('order-date');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
}

// --- Contact form (existing) ---
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const successOverlay = document.getElementById('success-overlay');
    const closeSuccessBtn = document.getElementById('btn-success-close');

    const fields = [
        { id: 'contact-name', errorId: 'error-name', check: val => val.trim().length > 2 },
        { id: 'contact-email', errorId: 'error-email', check: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()) },
        { id: 'contact-subject', errorId: 'error-subject', check: val => val.trim().length > 4 },
        { id: 'contact-message', errorId: 'error-message', check: val => val.trim().length > 10 }
    ];

    fields.forEach(field => {
        const inputEl = document.getElementById(field.id);
        const errorEl = document.getElementById(field.errorId);
        inputEl.addEventListener('input', () => {
            if (field.check(inputEl.value)) {
                inputEl.classList.remove('invalid');
                errorEl.style.display = 'none';
            }
        });
    });

    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        let isValid = true;
        fields.forEach(field => {
            const inputEl = document.getElementById(field.id);
            const errorEl = document.getElementById(field.errorId);
            if (!field.check(inputEl.value)) {
                inputEl.classList.add('invalid');
                errorEl.style.display = 'block';
                isValid = false;
            } else {
                inputEl.classList.remove('invalid');
                errorEl.style.display = 'none';
            }
        });

        if (isValid) {
            const submitBtn = document.getElementById('btn-submit-form');
            const originalContent = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';

            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const subject = document.getElementById('contact-subject').value.trim();
            const message = document.getElementById('contact-message').value.trim();
            const mailBody = `Nombre: ${name}\nEmail: ${email}\n\n${message}`;
            openMailto({ name, email, phone: '', company: '', date: '', brief: message }, `*Consulta innovationTECH*\n\nAsunto: ${subject}\n\n${mailBody}`);

            setTimeout(() => {
                successOverlay.style.display = 'flex';
                successOverlay.setAttribute('aria-hidden', 'false');
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalContent;
                contactForm.reset();
            }, 600);
        }
    });

    closeSuccessBtn.addEventListener('click', () => {
        successOverlay.style.display = 'none';
        successOverlay.setAttribute('aria-hidden', 'true');
    });
}

function initHeroCarousel() {
    const carousel = document.getElementById('hero-carousel');
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    if (!carousel || !track) return;

    const slides = track.querySelectorAll('.carousel-slide');
    const total = slides.length;
    let current = 0;
    let autoplayTimer = null;
    let touchStartX = 0;
    let touchEndX = 0;
    const AUTOPLAY_MS = 5000;

    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `carousel-dot${i === 0 ? ' active' : ''}`;
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `Ver servicio ${i + 1}`);
        dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    const goTo = (index) => {
        current = (index + total) % total;
        track.style.transform = `translateX(-${current * 100}%)`;
        slides.forEach((slide, i) => {
            const active = i === current;
            slide.classList.toggle('active', active);
            slide.setAttribute('aria-hidden', active ? 'false' : 'true');
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === current);
            dot.setAttribute('aria-selected', i === current ? 'true' : 'false');
        });
    };

    const next = () => goTo(current + 1);
    const prev = () => goTo(current - 1);

    const startAutoplay = () => {
        stopAutoplay();
        autoplayTimer = setInterval(next, AUTOPLAY_MS);
    };

    const stopAutoplay = () => {
        if (autoplayTimer) clearInterval(autoplayTimer);
    };

    prevBtn?.addEventListener('click', () => { prev(); startAutoplay(); });
    nextBtn?.addEventListener('click', () => { next(); startAutoplay(); });

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('focusin', stopAutoplay);
    carousel.addEventListener('focusout', startAutoplay);

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) next();
            else prev();
            startAutoplay();
        }
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stopAutoplay();
        else startAutoplay();
    });

    startAutoplay();
}

document.addEventListener('DOMContentLoaded', () => {

    loadCart();
    initHeroCarousel();

    // Header scroll
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
                link.style.color = 'var(--text-white)';
            } else {
                link.style.color = 'var(--text-gray)';
            }
        });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Mobile menu
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuIconPath = document.getElementById('menu-icon-path');

    const closeMenu = () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        menuIconPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
    };

    const openMenu = () => {
        mobileToggle.setAttribute('aria-expanded', 'true');
        navMenu.classList.add('active');
        document.body.classList.add('menu-open');
        menuIconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
    };

    const toggleMenu = () => {
        const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        if (isExpanded) closeMenu();
        else openMenu();
    };

    mobileToggle.addEventListener('click', toggleMenu);

    navLinks.forEach(link => link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) closeMenu();
    }));

    document.querySelector('.btn-nav-mobile')?.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) closeMenu();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1100 && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Typewriter
    const subtitleEl = document.getElementById('hero-subtitle');
    const phrases = [
        'Creamos contenido, videos y diseños que conectan con tu audiencia.',
        'Marketing digital accesible para emprendedores y pymes en Latam.',
        'Logotipos y páginas web profesionales con precios claros en USD.',
        'Contrata online en minutos — pago flexible por WhatsApp o transferencia.'
    ];
    let phraseIndex = 0, charIndex = 0, isDeleting = false, typingSpeed = 60;

    const typeEffect = () => {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            subtitleEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 30;
        } else {
            subtitleEl.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 60;
        }
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2500;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }
        setTimeout(typeEffect, typingSpeed);
    };
    typeEffect();

    // Stats counter
    const statCounters = document.querySelectorAll('.stat-counter');
    const animateCounter = (counterEl) => {
        const target = parseInt(counterEl.getAttribute('data-target'), 10);
        const duration = 1800;
        const startTime = performance.now();
        const updateCount = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            counterEl.textContent = Math.floor(easeProgress * target);
            if (progress < 1) requestAnimationFrame(updateCount);
            else counterEl.textContent = target;
        };
        requestAnimationFrame(updateCount);
    };

    const statsSection = document.getElementById('stats');
    let animated = false;
    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                statCounters.forEach(counter => animateCounter(counter));
                animated = true;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });
    if (statsSection) statsObserver.observe(statsSection);

    // Render dynamic content
    renderServiceCards();
    renderPricingTable();
    initCotizador();
    renderCart();
    updateCartFab();
    initOrderForm();
    initContactForm();
    prefillContactSubject();
});
