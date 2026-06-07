/**
 * Sistema de Auto-Actualización
 * Detecta cambios en el repositorio de GitHub y notifica al usuario
 */

const AUTO_UPDATE_CONFIG = {
    // Configuración del repositorio
    owner: 'innovationtech1',
    repo: 'innovationtech-app',
    branch: 'main',
    
    // Intervalo de verificación (en milisegundos)
    checkInterval: 30000, // 30 segundos
    
    // GitHub API
    apiUrl: 'https://api.github.com/repos/innovationtech1/innovationtech-app/commits/main'
};

class AutoUpdater {
    constructor() {
        this.currentCommit = null;
        this.checkTimer = null;
        this.isChecking = false;
        this.updateAvailable = false;
        
        this.init();
    }
    
    init() {
        // Crear UI del botón de actualización
        this.createUpdateButton();
        
        // Obtener commit actual
        this.getCurrentCommit();
        
        // Iniciar verificación periódica
        this.startPeriodicCheck();
        
        // Escuchar eventos de visibilidad de la página
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                this.checkForUpdates();
            }
        });
    }
    
    createUpdateButton() {
        const button = document.createElement('div');
        button.id = 'auto-update-btn';
        button.className = 'auto-update-btn';
        button.innerHTML = `
            <div class="update-btn-content">
                <svg class="update-icon" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
                <span class="update-text">Verificando...</span>
            </div>
            <div class="update-badge" style="display: none;">
                <span>!</span>
            </div>
        `;
        
        button.addEventListener('click', () => this.handleButtonClick());
        document.body.appendChild(button);
        
        this.button = button;
        this.updateText = button.querySelector('.update-text');
        this.updateBadge = button.querySelector('.update-badge');
        this.updateIcon = button.querySelector('.update-icon');
    }
    
    async getCurrentCommit() {
        try {
            const response = await fetch(AUTO_UPDATE_CONFIG.apiUrl);
            if (response.ok) {
                const data = await response.json();
                this.currentCommit = data.sha;
                this.updateButtonState('updated');
                console.log('✅ Commit actual:', this.currentCommit.substring(0, 7));
            }
        } catch (error) {
            console.warn('⚠️ No se pudo obtener el commit actual:', error);
            this.updateButtonState('error');
        }
    }
    
    async checkForUpdates() {
        if (this.isChecking) return;
        
        this.isChecking = true;
        this.updateButtonState('checking');
        
        try {
            const response = await fetch(AUTO_UPDATE_CONFIG.apiUrl, {
                cache: 'no-cache'
            });
            
            if (response.ok) {
                const data = await response.json();
                const latestCommit = data.sha;
                
                if (this.currentCommit && latestCommit !== this.currentCommit) {
                    // ¡Hay una actualización disponible!
                    this.updateAvailable = true;
                    this.latestCommit = latestCommit;
                    this.commitMessage = data.commit.message;
                    this.updateButtonState('update-available');
                    
                    console.log('🎉 Nueva actualización disponible!');
                    console.log('Mensaje:', this.commitMessage);
                    
                    // Mostrar notificación
                    this.showUpdateNotification();
                } else {
                    this.updateButtonState('updated');
                }
            }
        } catch (error) {
            console.warn('⚠️ Error al verificar actualizaciones:', error);
            this.updateButtonState('error');
        } finally {
            this.isChecking = false;
        }
    }
    
    updateButtonState(state) {
        this.button.className = 'auto-update-btn';
        
        switch (state) {
            case 'checking':
                this.button.classList.add('checking');
                this.updateText.textContent = 'Verificando...';
                this.updateBadge.style.display = 'none';
                break;
                
            case 'updated':
                this.button.classList.add('updated');
                this.updateText.textContent = 'Actualizado';
                this.updateBadge.style.display = 'none';
                break;
                
            case 'update-available':
                this.button.classList.add('update-available');
                this.updateText.textContent = 'Actualización disponible';
                this.updateBadge.style.display = 'flex';
                this.button.classList.add('pulse');
                break;
                
            case 'error':
                this.button.classList.add('error');
                this.updateText.textContent = 'Error';
                this.updateBadge.style.display = 'none';
                break;
        }
    }
    
    showUpdateNotification() {
        // Crear notificación toast
        const toast = document.createElement('div');
        toast.className = 'update-toast';
        toast.innerHTML = `
            <div class="toast-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </div>
            <div class="toast-content">
                <strong>Nueva actualización disponible</strong>
                <p>${this.commitMessage || 'Hay cambios nuevos en el sitio'}</p>
            </div>
            <button class="toast-close" onclick="this.parentElement.remove()">×</button>
        `;
        
        document.body.appendChild(toast);
        
        // Auto-remover después de 10 segundos
        setTimeout(() => {
            if (toast.parentElement) {
                toast.classList.add('fade-out');
                setTimeout(() => toast.remove(), 300);
            }
        }, 10000);
    }
    
    handleButtonClick() {
        if (this.updateAvailable) {
            // Recargar la página
            this.reloadPage();
        } else {
            // Verificar manualmente
            this.checkForUpdates();
        }
    }
    
    reloadPage() {
        // Mostrar mensaje de recarga
        this.updateText.textContent = 'Actualizando...';
        this.button.classList.add('reloading');
        
        // Limpiar caché y recargar
        setTimeout(() => {
            if ('caches' in window) {
                caches.keys().then(names => {
                    names.forEach(name => caches.delete(name));
                });
            }
            window.location.reload(true);
        }, 500);
    }
    
    startPeriodicCheck() {
        // Verificar cada X segundos
        this.checkTimer = setInterval(() => {
            this.checkForUpdates();
        }, AUTO_UPDATE_CONFIG.checkInterval);
        
        console.log(`🔄 Auto-actualización activada (cada ${AUTO_UPDATE_CONFIG.checkInterval / 1000}s)`);
    }
    
    stopPeriodicCheck() {
        if (this.checkTimer) {
            clearInterval(this.checkTimer);
            this.checkTimer = null;
        }
    }
}

// Estilos CSS para el botón de actualización
const styles = document.createElement('style');
styles.textContent = `
    .auto-update-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--bg-card, #0a0f24);
        border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.06));
        border-radius: 50px;
        padding: 12px 20px;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        font-family: var(--font-body, sans-serif);
    }
    
    .auto-update-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
        border-color: var(--color-primary, #001fcc);
    }
    
    .update-btn-content {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .update-icon {
        color: var(--text-gray, #94a3b8);
        transition: all 0.3s ease;
    }
    
    .auto-update-btn.checking .update-icon {
        animation: spin 1s linear infinite;
    }
    
    .auto-update-btn.updated .update-icon {
        color: var(--color-success, #10b981);
    }
    
    .auto-update-btn.update-available .update-icon {
        color: var(--color-warning, #f59e0b);
    }
    
    .auto-update-btn.error .update-icon {
        color: var(--color-secondary, #e60000);
    }
    
    .update-text {
        font-size: 0.9rem;
        color: var(--text-light, #f1f5f9);
        white-space: nowrap;
    }
    
    .update-badge {
        background: var(--color-warning, #f59e0b);
        color: white;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: bold;
        margin-left: 4px;
    }
    
    .auto-update-btn.pulse {
        animation: pulse 2s ease-in-out infinite;
    }
    
    .update-toast {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-card, #0a0f24);
        border: 1px solid var(--color-warning, #f59e0b);
        border-radius: 12px;
        padding: 16px;
        max-width: 350px;
        display: flex;
        gap: 12px;
        z-index: 1000;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        animation: slideInRight 0.3s ease;
    }
    
    .toast-icon {
        color: var(--color-warning, #f59e0b);
        flex-shrink: 0;
    }
    
    .toast-content {
        flex: 1;
    }
    
    .toast-content strong {
        display: block;
        color: var(--text-white, #ffffff);
        margin-bottom: 4px;
        font-size: 0.95rem;
    }
    
    .toast-content p {
        color: var(--text-gray, #94a3b8);
        font-size: 0.85rem;
        margin: 0;
        line-height: 1.4;
    }
    
    .toast-close {
        background: none;
        border: none;
        color: var(--text-gray, #94a3b8);
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        transition: all 0.2s ease;
    }
    
    .toast-close:hover {
        background: var(--bg-card-hover, #0f1633);
        color: var(--text-white, #ffffff);
    }
    
    .update-toast.fade-out {
        animation: slideOutRight 0.3s ease forwards;
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @media (max-width: 768px) {
        .auto-update-btn {
            bottom: 80px;
            right: 16px;
            padding: 10px 16px;
        }
        
        .update-text {
            font-size: 0.85rem;
        }
        
        .update-toast {
            right: 16px;
            left: 16px;
            max-width: none;
        }
    }
`;
document.head.appendChild(styles);

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.autoUpdater = new AutoUpdater();
    });
} else {
    window.autoUpdater = new AutoUpdater();
}

// Made with Bob
