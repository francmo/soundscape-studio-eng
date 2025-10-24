// ==================== FIREBASE ANALYTICS & CRASHLYTICS ====================
// Soundscape Studio ENG - Firebase Integration
// Tracks user analytics and crashes for both PWA and iOS app

// Firebase configuration for web (PWA)
const firebaseConfig = {
  apiKey: "AIzaSyB9dbJg5CbiJSmIMPYJtBvqE6A7RCSjNyc",
  authDomain: "soundscape-studio-33691.firebaseapp.com",
  projectId: "soundscape-studio-33691",
  storageBucket: "soundscape-studio-33691.firebasestorage.app",
  messagingSenderId: "416969711667",
  appId: "1:416969711667:web:d6bbd0b13a68d23c2c4346",
  measurementId: "G-ZB90L5CYQ1"
};

// Check if running in Capacitor (iOS app) or web (PWA)
const isCapacitor = typeof window.Capacitor !== 'undefined';

let analytics = null;
let crashlytics = null;

// ==================== INITIALIZATION ====================

async function initializeFirebase() {
    try {
        if (isCapacitor) {
            // iOS App - use Capacitor plugins
            console.log('🔧 Initializing Firebase for iOS app...');

            const { FirebaseAnalytics } = window.Capacitor.Plugins;
            const { FirebaseCrashlytics } = window.Capacitor.Plugins;

            if (FirebaseAnalytics) {
                analytics = FirebaseAnalytics;
                console.log('✅ Firebase Analytics initialized (iOS)');
            }

            if (FirebaseCrashlytics) {
                crashlytics = FirebaseCrashlytics;
                // Enable Crashlytics data collection
                await crashlytics.setEnabled({ enabled: true });
                console.log('✅ Firebase Crashlytics initialized (iOS)');
            }
        } else {
            // PWA - use Firebase SDK
            console.log('🔧 Initializing Firebase for PWA...');

            if (typeof firebase !== 'undefined') {
                // Initialize Firebase
                if (!firebase.apps.length) {
                    firebase.initializeApp(firebaseConfig);
                }

                // Initialize Analytics
                analytics = firebase.analytics();
                console.log('✅ Firebase Analytics initialized (PWA)');
            } else {
                console.warn('⚠️ Firebase SDK not loaded for PWA');
            }
        }

        // Log app open event
        await logEvent('app_open', {
            platform: isCapacitor ? 'ios' : 'web',
            version: '1.0.0',
            language: 'ENG'
        });

        return true;
    } catch (error) {
        console.error('❌ Firebase initialization error:', error);
        return false;
    }
}

// ==================== ANALYTICS FUNCTIONS ====================

/**
 * Log an analytics event
 * @param {string} eventName - Name of the event
 * @param {object} params - Event parameters
 */
async function logEvent(eventName, params = {}) {
    try {
        if (isCapacitor && analytics) {
            // iOS - use Capacitor plugin
            await analytics.logEvent({
                name: eventName,
                params: params
            });
        } else if (!isCapacitor && analytics) {
            // PWA - use Firebase SDK
            analytics.logEvent(eventName, params);
        }
        console.log(`📊 Event logged: ${eventName}`, params);
    } catch (error) {
        console.error(`❌ Error logging event ${eventName}:`, error);
    }
}

/**
 * Set user property
 * @param {string} name - Property name
 * @param {string} value - Property value
 */
async function setUserProperty(name, value) {
    try {
        if (isCapacitor && analytics) {
            await analytics.setUserProperty({
                name: name,
                value: value
            });
        } else if (!isCapacitor && analytics) {
            analytics.setUserProperty(name, value);
        }
        console.log(`👤 User property set: ${name} = ${value}`);
    } catch (error) {
        console.error(`❌ Error setting user property ${name}:`, error);
    }
}

/**
 * Set current screen name
 * @param {string} screenName - Name of the screen
 */
async function setCurrentScreen(screenName) {
    try {
        if (isCapacitor && analytics) {
            await analytics.setCurrentScreen({
                screenName: screenName
            });
        } else if (!isCapacitor && analytics) {
            analytics.setCurrentScreen(screenName);
        }
        console.log(`📱 Screen viewed: ${screenName}`);
    } catch (error) {
        console.error(`❌ Error setting screen ${screenName}:`, error);
    }
}

// ==================== CRASHLYTICS FUNCTIONS ====================

/**
 * Log a non-fatal error
 * @param {string} message - Error message
 */
async function logError(message) {
    try {
        if (isCapacitor && crashlytics) {
            await crashlytics.recordException({
                message: message
            });
            console.log(`🐛 Error logged to Crashlytics: ${message}`);
        }
    } catch (error) {
        console.error('❌ Error logging to Crashlytics:', error);
    }
}

/**
 * Set user identifier for crash reports
 * @param {string} userId - User ID
 */
async function setCrashlyticsUserId(userId) {
    try {
        if (isCapacitor && crashlytics) {
            await crashlytics.setUserId({ userId: userId });
            console.log(`👤 Crashlytics user ID set: ${userId}`);
        }
    } catch (error) {
        console.error('❌ Error setting Crashlytics user ID:', error);
    }
}

// ==================== HELPER FUNCTIONS ====================

/**
 * Track exercise completion
 */
window.trackExerciseCompleted = async function(exerciseId, category) {
    await logEvent('exercise_completed', {
        exercise_id: exerciseId,
        category: category
    });
};

/**
 * Track premium upgrade
 */
window.trackPremiumUpgrade = async function(price) {
    await logEvent('purchase', {
        value: price,
        currency: 'EUR',
        item_name: 'premium_upgrade'
    });
};

/**
 * Track export action
 */
window.trackExport = async function(exportType) {
    await logEvent('export_data', {
        export_type: exportType
    });
};

/**
 * Track marker creation
 */
window.trackMarkerCreated = async function(markerType) {
    await logEvent('marker_created', {
        marker_type: markerType
    });
};

// ==================== EXPORT FUNCTIONS ====================

window.initializeFirebase = initializeFirebase;
window.logEvent = logEvent;
window.setUserProperty = setUserProperty;
window.setCurrentScreen = setCurrentScreen;
window.logError = logError;
window.setCrashlyticsUserId = setCrashlyticsUserId;

// ==================== AUTO-INITIALIZATION ====================

// Initialize Firebase when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', async () => {
        await initializeFirebase();
    });
} else {
    // DOM already loaded
    initializeFirebase();
}
