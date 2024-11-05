/*! isStandalonePWA 0.1.0
    Detect if PWA is running in standalone mode
    https://github.com/faisalman/is-standalone-pwa
    Author: Faisal Salman <f@faisalman.com>
    MIT License */
export function isStandalonePWA() {
    return window &&
        (window.matchMedia('(display-mode: standalone)').matches ||
            navigator.standalone ||
            document.referrer.startsWith('android-app://') ||
            window.Windows ||
            /trident.+(msapphost|webview)\//i.test(navigator.userAgent) ||
            document.referrer.startsWith('app-info://platform/microsoft-store'));
}
;
