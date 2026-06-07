/**
 * Firebase Configuration
 * IMPORTANTE: Reemplaza estos valores con tu configuración real de Firebase
 * 
 * Para obtener tu configuración:
 * 1. Ve a https://console.firebase.google.com/
 * 2. Crea un proyecto nuevo o selecciona uno existente
 * 3. Ve a Configuración del proyecto > General
 * 4. En "Tus apps" > "SDK setup and configuration"
 * 5. Copia los valores de firebaseConfig
 */

const firebaseConfig = {
    // CONFIGURACIÓN DE PRUEBA - REEMPLAZAR CON TUS DATOS REALES
    apiKey: "AIzaSyDEMO_KEY_REPLACE_WITH_YOUR_REAL_KEY",
    authDomain: "innovationtech-demo.firebaseapp.com",
    projectId: "innovationtech-demo",
    storageBucket: "innovationtech-demo.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef123456",
    databaseURL: "https://innovationtech-demo-default-rtdb.firebaseio.com"
};

// Inicializar Firebase
let db = null;
let analytics = null;

function initializeFirebase() {
    try {
        // Inicializar Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        
        // Inicializar Firestore
        db = firebase.firestore();
        
        // Inicializar Analytics (opcional)
        if (typeof firebase.analytics === 'function') {
            analytics = firebase.analytics();
        }
        
        console.log('✅ Firebase inicializado correctamente');
        return true;
    } catch (error) {
        console.error('❌ Error al inicializar Firebase:', error);
        return false;
    }
}

// Función para guardar cotización en Firebase
async function saveQuotationToFirebase(quotationData) {
    try {
        if (!db) {
            console.warn('Firebase no está inicializado. Guardando localmente...');
            saveQuotationLocally(quotationData);
            return { success: false, error: 'Firebase no inicializado' };
        }

        // Agregar timestamp
        quotationData.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        quotationData.status = 'pending'; // pending, paid, completed, cancelled
        
        // Guardar en Firestore
        const docRef = await db.collection('quotations').add(quotationData);
        
        console.log('✅ Cotización guardada en Firebase:', docRef.id);
        
        // También guardar localmente como backup
        saveQuotationLocally({ ...quotationData, firebaseId: docRef.id });
        
        // Registrar evento en Analytics
        if (analytics) {
            analytics.logEvent('quotation_created', {
                quotation_id: docRef.id,
                total_amount: quotationData.total,
                services_count: quotationData.services.length
            });
        }
        
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('❌ Error al guardar en Firebase:', error);
        // Guardar localmente como fallback
        saveQuotationLocally(quotationData);
        return { success: false, error: error.message };
    }
}

// Función para actualizar estado de pago
async function updatePaymentStatus(quotationId, paymentData) {
    try {
        if (!db) {
            console.warn('Firebase no está inicializado');
            return { success: false, error: 'Firebase no inicializado' };
        }

        await db.collection('quotations').doc(quotationId).update({
            status: 'paid',
            paymentMethod: paymentData.method,
            paymentConfirmation: paymentData.confirmation,
            paidAt: firebase.firestore.FieldValue.serverTimestamp(),
            paymentAmount: paymentData.amount
        });
        
        console.log('✅ Estado de pago actualizado:', quotationId);
        
        // Registrar evento en Analytics
        if (analytics) {
            analytics.logEvent('payment_completed', {
                quotation_id: quotationId,
                payment_method: paymentData.method,
                amount: paymentData.amount
            });
        }
        
        return { success: true };
    } catch (error) {
        console.error('❌ Error al actualizar pago:', error);
        return { success: false, error: error.message };
    }
}

// Función para obtener todas las cotizaciones (para admin)
async function getAllQuotations(limit = 50) {
    try {
        if (!db) {
            console.warn('Firebase no está inicializado');
            return { success: false, data: [] };
        }

        const snapshot = await db.collection('quotations')
            .orderBy('createdAt', 'desc')
            .limit(limit)
            .get();
        
        const quotations = [];
        snapshot.forEach(doc => {
            quotations.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        return { success: true, data: quotations };
    } catch (error) {
        console.error('❌ Error al obtener cotizaciones:', error);
        return { success: false, data: [], error: error.message };
    }
}

// Función para guardar localmente (backup)
function saveQuotationLocally(quotationData) {
    try {
        const localQuotations = JSON.parse(localStorage.getItem('innovationtech_quotations') || '[]');
        localQuotations.push({
            ...quotationData,
            localId: Date.now(),
            savedLocally: true
        });
        localStorage.setItem('innovationtech_quotations', JSON.stringify(localQuotations));
        console.log('💾 Cotización guardada localmente como backup');
    } catch (error) {
        console.error('❌ Error al guardar localmente:', error);
    }
}

// Función para obtener cotizaciones locales
function getLocalQuotations() {
    try {
        return JSON.parse(localStorage.getItem('innovationtech_quotations') || '[]');
    } catch (error) {
        console.error('❌ Error al obtener cotizaciones locales:', error);
        return [];
    }
}

// Exportar funciones
window.FirebaseDB = {
    initialize: initializeFirebase,
    saveQuotation: saveQuotationToFirebase,
    updatePayment: updatePaymentStatus,
    getAllQuotations: getAllQuotations,
    getLocalQuotations: getLocalQuotations
};

// Made with Bob
