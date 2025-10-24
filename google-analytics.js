// ==================== GOOGLE ANALYTICS GA4 ====================
// Soundscape Studio PWA - Google Analytics Integration
// Tracks user behavior, engagement, and conversions
// Shared between ITA and ENG versions (distinguished by app_language dimension)

// Google Analytics GA4 Measurement ID (Soundscape Studio Web stream)
const GA4_MEASUREMENT_ID = "G-ZB90L5CYQ1";

// Detect language from hostname
const APP_LANGUAGE = window.location.hostname.includes('ita') ? 'ITA' : 'ENG';

// Initialize Google Analytics
function initializeGoogleAnalytics() {
    try {
        console.log(`🔧 Initializing Google Analytics GA4 (${APP_LANGUAGE})...`);

        // Load gtag.js script
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
        document.head.appendChild(script1);

        // Initialize dataLayer and gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;

        gtag('js', new Date());

        // Configure with custom dimensions to distinguish ITA/ENG
        gtag('config', GA4_MEASUREMENT_ID, {
            'page_title': `Soundscape Studio PWA ${APP_LANGUAGE}`,
            'page_location': window.location.href,
            'send_page_view': true,
            'custom_map': {
                'dimension1': 'app_language',
                'dimension2': 'app_version'
            }
        });

        // Set language as user property
        gtag('set', 'user_properties', {
            'app_language': APP_LANGUAGE,
            'app_version': '1.0.0',
            'app_type': 'PWA'
        });

        console.log(`✅ Google Analytics GA4 initialized (${APP_LANGUAGE})`);
        return true;

    } catch (error) {
        console.error('❌ Google Analytics initialization error:', error);
        return false;
    }
}

// ==================== TRACKING FUNCTIONS ====================

/**
 * Track page view
 * @param {string} pageName - Name of the page
 */
function trackPageView(pageName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: pageName,
            page_location: window.location.href,
            page_path: window.location.pathname
        });
        console.log(`📊 Page view tracked: ${pageName}`);
    }
}

/**
 * Track custom event
 * @param {string} eventName - Name of the event
 * @param {object} params - Event parameters
 */
function trackEvent(eventName, params = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, params);
        console.log(`📊 Event tracked: ${eventName}`, params);
    }
}

/**
 * Track exercise completion
 */
function trackExerciseCompleted(exerciseId, category, duration) {
    trackEvent('exercise_completed', {
        exercise_id: exerciseId,
        category: category,
        duration_seconds: duration,
        value: 1
    });
}

/**
 * Track marker creation
 */
function trackMarkerCreated(markerType, hasAudio, hasPhoto) {
    trackEvent('marker_created', {
        marker_type: markerType,
        has_audio: hasAudio ? 'yes' : 'no',
        has_photo: hasPhoto ? 'yes' : 'no',
        value: 1
    });
}

/**
 * Track export action
 */
function trackExport(exportType, itemCount) {
    trackEvent('export_data', {
        export_type: exportType,
        item_count: itemCount,
        value: 5 // Higher value for export actions
    });
}

/**
 * Track audio recording
 */
function trackAudioRecording(duration, location) {
    trackEvent('audio_recorded', {
        duration_seconds: duration,
        location_type: location,
        value: 2
    });
}

/**
 * Track backup action
 */
function trackBackup(action, dataSize) {
    trackEvent('backup_action', {
        action: action, // 'export' or 'import'
        data_size_kb: dataSize,
        value: 3
    });
}

/**
 * Track user engagement
 */
function trackEngagement(action, category) {
    trackEvent('user_engagement', {
        engagement_type: action,
        category: category
    });
}

/**
 * Track errors
 */
function trackError(errorMessage, errorLocation) {
    trackEvent('error_occurred', {
        error_message: errorMessage,
        error_location: errorLocation,
        value: 0
    });
}

// ==================== EXPORT TO WINDOW ====================

window.initializeGoogleAnalytics = initializeGoogleAnalytics;
window.trackPageView = trackPageView;
window.trackEvent = trackEvent;
window.trackExerciseCompleted = trackExerciseCompleted;
window.trackMarkerCreated = trackMarkerCreated;
window.trackExport = trackExport;
window.trackAudioRecording = trackAudioRecording;
window.trackBackup = trackBackup;
window.trackEngagement = trackEngagement;
window.trackError = trackError;

// ==================== AUTO-INITIALIZATION ====================

// Initialize Google Analytics when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeGoogleAnalytics();
    });
} else {
    // DOM already loaded
    initializeGoogleAnalytics();
}
