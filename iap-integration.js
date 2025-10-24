// ==================== REVENUECAT IAP INTEGRATION ====================
// Soundscape Studio Premium - In-App Purchase Management
// Price: €49.99 (one-time purchase, non-consumable)

// Access Purchases plugin via Capacitor
const { Purchases } = window.Capacitor.Plugins;

// Log levels for RevenueCat
const LOG_LEVEL = {
    VERBOSE: 'VERBOSE',
    DEBUG: 'DEBUG',
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR'
};

// IMPORTANT: Replace with your actual RevenueCat API Key
// Get it from: https://app.revenuecat.com → Project Settings → API Keys
const REVENUECAT_API_KEY_IOS = "appl_zImvBWLPbanSAovQSobmSRTrBns";

// Premium entitlement identifier (must match RevenueCat dashboard)
const PREMIUM_ENTITLEMENT_ID = "premium";

// Product ID (must match App Store Connect)
const PREMIUM_PRODUCT_ID = "com.soundscapestudio.eng.premium";

// Global state
let revenueCatInitialized = false;

// ==================== INITIALIZATION ====================

/**
 * Initialize RevenueCat SDK
 * Call this once when app starts
 */
async function initializeRevenueCat() {
    try {
        console.log("🔧 Initializing RevenueCat...");

        // Check if Capacitor is available
        if (typeof window.Capacitor === 'undefined') {
            console.error("❌ Capacitor not found!");
            return false;
        }

        // Check if Purchases plugin is available
        if (!Purchases || typeof Purchases.configure === 'undefined') {
            console.error("❌ RevenueCat Purchases plugin not found!");
            console.error("Available plugins:", Object.keys(window.Capacitor.Plugins));
            return false;
        }

        // Check if API key has been replaced
        if (REVENUECAT_API_KEY_IOS === "YOUR_IOS_API_KEY_HERE") {
            console.error("❌ RevenueCat API Key not configured!");
            console.error("📝 Get your API key from: https://app.revenuecat.com");
            return false;
        }

        console.log("📦 Purchases plugin found, configuring...");

        // Configure RevenueCat
        await Purchases.configure({
            apiKey: REVENUECAT_API_KEY_IOS,
            appUserID: null // Let RevenueCat generate anonymous ID
        });

        console.log("🔧 Setting log level...");

        // Set log level to WARN for production
        await Purchases.setLogLevel({ level: LOG_LEVEL.WARN });

        console.log("✅ RevenueCat initialized successfully");
        revenueCatInitialized = true;

        // Check current premium status
        await checkPremiumStatus();

        // Listen for customer info updates
        Purchases.addCustomerInfoUpdateListener((customerInfo) => {
            console.log("📡 Customer info updated");
            updatePremiumStatusFromRevenueCat(customerInfo.customerInfo);
        });

        return true;

    } catch (error) {
        console.error("❌ RevenueCat initialization failed:", error);
        revenueCatInitialized = false;
        return false;
    }
}

// ==================== PREMIUM STATUS ====================

/**
 * Check if user has active premium subscription
 */
async function checkPremiumStatus() {
    if (!revenueCatInitialized) {
        console.warn("⚠️ RevenueCat not initialized, using local storage");
        return;
    }

    try {
        const customerInfo = await Purchases.getCustomerInfo();
        updatePremiumStatusFromRevenueCat(customerInfo.customerInfo);
    } catch (error) {
        console.error("❌ Error checking premium status:", error);
    }
}

/**
 * Update global isPremium variable based on RevenueCat data
 */
function updatePremiumStatusFromRevenueCat(customerInfo) {
    // Check if user has active "premium" entitlement
    const hasPremium = customerInfo.entitlements.active[PREMIUM_ENTITLEMENT_ID] !== undefined;

    if (hasPremium) {
        console.log("✅ User has Premium access");
        isPremium = true;
        localStorage.setItem('isPremium', 'true');
    } else {
        console.log("ℹ️ User is on Free plan");
        isPremium = false;
        localStorage.setItem('isPremium', 'false');
    }

    // Update UI
    if (typeof updatePremiumUI === 'function') {
        updatePremiumUI();
    }
}

// ==================== PURCHASE FLOW ====================

/**
 * Purchase Premium (€49.99)
 * Called when user clicks "Purchase Premium" button
 */
async function purchasePremium() {
    if (!revenueCatInitialized) {
        alert("❌ Error: Purchase system unavailable.\n\nPlease try again later.");
        return;
    }

    try {
        // Get reference to purchase button
        const button = event?.target;
        const originalText = button?.innerHTML || "🔒 Purchase Premium";

        // Show loading state
        if (button) {
            button.innerHTML = "⏳ Loading...";
            button.disabled = true;
        }

        console.log("🛒 Fetching available products...");

        // Get current offerings from RevenueCat
        const offerings = await Purchases.getOfferings();

        if (!offerings.current || offerings.current.availablePackages.length === 0) {
            throw new Error("No products available at this time");
        }

        // Get the premium package
        const premiumPackage = offerings.current.availablePackages[0];

        console.log(`💰 Product found: ${premiumPackage.product.identifier} - ${premiumPackage.product.priceString}`);

        // Show purchase dialog
        if (button) {
            button.innerHTML = "💳 Confirm purchase...";
        }

        // Initiate purchase
        const purchaseResult = await Purchases.purchasePackage({
            aPackage: premiumPackage
        });

        console.log("📦 Purchase completed, checking entitlement...");

        // Check if purchase was successful and user now has premium
        if (purchaseResult.customerInfo.entitlements.active[PREMIUM_ENTITLEMENT_ID]) {
            // SUCCESS!
            isPremium = true;
            localStorage.setItem('isPremium', 'true');
            updatePremiumUI();

            // Close paywall modal
            if (typeof closeUpgradeModal === 'function') {
                closeUpgradeModal();
            }

            // Track purchase in Firebase Analytics
            if (typeof window.trackPremiumUpgrade === 'function') {
                window.trackPremiumUpgrade(49.99);
            }

            // Show success message
            alert("🎉 Welcome to Soundscape Studio Premium!\n\n✅ All features are now unlocked:\n\n💾 Complete Backup & Restore\n📄 PDF/Excel/Word Export\n🗺️ GeoJSON/CSV/KML Export\n♾️ Unlimited markers\n\n🚀 Start building your professional archive!");

            console.log("✅ User upgraded to Premium successfully");

        } else {
            throw new Error("Purchase completed but entitlement not active");
        }

    } catch (error) {
        console.error("❌ Purchase error:", error);

        // Restore button state
        if (button) {
            button.innerHTML = originalText;
            button.disabled = false;
        }

        // Handle specific error cases
        if (error.code === "PURCHASE_CANCELLED" || error.message?.includes("cancel")) {
            console.log("ℹ️ User cancelled purchase");
            // Don't show error alert for cancellation
        } else if (error.code === "PRODUCT_ALREADY_PURCHASED") {
            alert("✅ You've already purchased Premium!\n\nIf you don't see Premium features active, try restoring purchases.");
        } else if (error.message?.includes("No products")) {
            alert("❌ Products unavailable\n\nIn-app products may not be ready yet. Please try again in a few minutes.\n\nIf the problem persists, contact support.");
        } else {
            alert(`❌ Purchase error\n\n${error.message || error}\n\nIf the problem persists, contact support.`);
        }
    }
}

// ==================== RESTORE PURCHASES ====================

/**
 * Restore previous purchases
 * Required by Apple for non-consumable products
 */
async function restorePurchases() {
    if (!revenueCatInitialized) {
        alert("❌ Error: Purchase system unavailable.\n\nPlease try again later.");
        return;
    }

    try {
        // Get reference to button (if called from button click)
        const button = event?.target;
        const originalText = button?.innerHTML || "🔄 Restore Purchases";

        // Show loading state
        if (button) {
            button.innerHTML = "⏳ Restoring...";
            button.disabled = true;
        }

        console.log("🔄 Restoring purchases...");

        // Restore purchases
        const customerInfo = await Purchases.restorePurchases();

        // Update premium status
        updatePremiumStatusFromRevenueCat(customerInfo.customerInfo);

        // Restore button state
        if (button) {
            button.innerHTML = originalText;
            button.disabled = false;
        }

        // Show result
        if (customerInfo.customerInfo.entitlements.active[PREMIUM_ENTITLEMENT_ID]) {
            alert("✅ Purchases restored successfully!\n\nYou are now in Premium mode.\n\nAll export features and unlimited markers are active.");
            console.log("✅ Purchases restored - Premium active");
        } else {
            alert("ℹ️ No previous purchases found\n\nIf you've already purchased Premium on this device, make sure you're logged in with the same Apple ID.\n\nIf the problem persists, contact support.");
            console.log("ℹ️ No previous purchases found");
        }

    } catch (error) {
        console.error("❌ Restore error:", error);

        // Restore button state
        if (button) {
            button.innerHTML = originalText;
            button.disabled = false;
        }

        alert(`❌ Restore error\n\n${error.message || error}\n\nIf the problem persists, contact support.`);
    }
}

// ==================== PRODUCT INFO ====================

/**
 * Get premium product info (price, etc.)
 * Useful for displaying current price in UI
 */
async function getPremiumProductInfo() {
    if (!revenueCatInitialized) {
        return null;
    }

    try {
        const offerings = await Purchases.getOfferings();

        if (!offerings.current || offerings.current.availablePackages.length === 0) {
            console.warn("⚠️ No products available");
            return null;
        }

        const premiumPackage = offerings.current.availablePackages[0];
        const product = premiumPackage.product;

        return {
            id: product.identifier,
            price: product.price,
            priceString: product.priceString,
            currency: product.currencyCode,
            title: product.title,
            description: product.description
        };

    } catch (error) {
        console.error("❌ Error fetching product info:", error);
        return null;
    }
}

// ==================== COMPATIBILITY LAYER ====================

/**
 * Override the old upgradeToPremium function
 * This ensures existing paywall modal buttons still work
 */
window.upgradeToPremium = purchasePremium;
window.restorePurchases = restorePurchases;
window.initializeRevenueCat = initializeRevenueCat;
window.checkPremiumStatus = checkPremiumStatus;
window.getPremiumProductInfo = getPremiumProductInfo;

// ==================== AUTO-INITIALIZATION ====================

/**
 * Initialize RevenueCat when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', async () => {
        await initializeRevenueCat();
    });
} else {
    // DOM already loaded
    initializeRevenueCat();
}

// Note: Functions are exported to window object above
// No ES6 module export needed (compatibility mode for Capacitor)
